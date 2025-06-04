// screens/Screen5.js
import React, { useState } from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  Text,
  Alert,
  Platform,
  ActivityIndicator,
} from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const API_URL = 'https://smishing-api-130947708321.asia-northeast3.run.app/ocr';

const PICKER_OPTS = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: false,
  quality: 1,
  selectionLimit: 5,
  allowsMultipleSelection: true,
};

// 최소 지연 헬퍼
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

export default function Screen5() {
  const navigation = useNavigation();
  const [isLoading, setLoading] = useState(false);   // 로딩 플래그

  /* ========================= 업로드 핸들러 ========================= */
  const handleImageUpload = async () => {
    // 권한 요청
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '사진 보관함 접근 권한이 필요합니다.');
      return;
    }

    // 이미지 선택
    const picker = await ImagePicker.launchImageLibraryAsync(PICKER_OPTS);
    if (picker.canceled) return;

    const assets = picker.assets || [];
    if (assets.length === 0) return;

    try {
      setLoading(true);                               // 🔄 로딩 시작
      // 1. 비율 조정
      const processedUris = await Promise.all(
        assets.map((asset) => processTo16x9(asset))
      );

      // 2. 서버 업로드 & 3. 최소 5초 대기 → 병렬
      const [response] = await Promise.all([
        uploadToServer(processedUris),
        delay(2000),
      ]);

      setLoading(false);                              // 🔄 로딩 종료

      /* 4. 결과 처리 */
       const { result, combinedText } = response;

      // if (result?.isSmishing) {
      //   Alert.alert(
      //     '⚠️ 스미싱 의심',
      //     `위험 점수: ${result.riskScore.toFixed(2)}\n\n문자 내용:\n${combinedText}`,
      //   );
      // } else {
      //   Alert.alert(
      //     '✅ 안전한 문자',
      //     `위험 점수: ${result?.riskScore?.toFixed(2) ?? 'N/A'}\n\n문자 내용:\n${combinedText}`,
      //   );
      // }

      // 5. 위험 점수에 따른 화면 전환
      if (result?.riskScore !== undefined) {
        const risk = parseFloat(result.riskScore);
        navigation.navigate(risk <= 1.0 ? 'Screen6' : 'Screen7');
      }

      console.log('✅ 업로드 결과:', response);
    } catch (err) {
      setLoading(false);                              // 실패 시에도 플래그 해제
      console.error('❗ 처리/업로드 오류:', err);
      Alert.alert('실패', '이미지를 업로드하는 중 문제가 발생했습니다.');
    }
  };

  /* ========================= 이미지 16:9 크롭 ========================= */
  const processTo16x9 = async (asset) => {
    const { uri, width, height } = asset;
    const targetRatio = 9 / 16;

    let cropWidth = width;
    let cropHeight = Math.round(width / targetRatio);

    if (cropHeight > height) {
      cropHeight = height;
      cropWidth = Math.round(height * targetRatio);
    }

    const originX = Math.round((width - cropWidth) / 2);
    const originY = Math.round((height - cropHeight) / 2);

    const { uri: cropped } = await ImageManipulator.manipulateAsync(
      uri,
      [
        { crop: { originX, originY, width: cropWidth, height: cropHeight } },
        { resize: { width: 1080 } },
      ],
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG },
    );

    return cropped;
  };

  /* ========================= 서버 업로드 ========================= */
  const uploadToServer = async (imageUris) => {
    const form = new FormData();

    imageUris.forEach((uri, idx) => {
      const filename = uri.split('/').pop() || `img_${Date.now()}_${idx}.jpg`;
      form.append('file', {
        uri: Platform.OS === 'ios' ? uri.replace('file://', '') : uri,
        name: filename,
        type: 'image/jpeg',
      });
    });

    const res = await fetch(API_URL, {
      method: 'POST',
      body: form,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  };

  /* ========================= 기타 ========================= */
  const handleInfoPress = () => navigation.navigate('Screen8');

  /* ========================= UI ========================= */
  return (
    <View style={styles.screen5Container}>
      {/* ─── 상단 Info 버튼 ─── */}
      <TouchableOpacity
        style={styles.screen5InfoButton}
        onPress={handleInfoPress}
      >
        <Image
          source={require('../assets/Info.png')}
          style={styles.screen5InfoIcon}
        />
      </TouchableOpacity>

      {/* ─── 캐릭터 & 텍스트 ─── */}
      <Image
        source={require('../assets/Group 16.png')}
        style={styles.screen5Character}
      />
      <Image
        source={require('../assets/text4.png')}
        style={styles.screen5TextImage}
      />

      {/* ─── 업로드 버튼 ─── */}
      <TouchableOpacity
        style={styles.screen5UploadButton}
        onPress={handleImageUpload}
      >
        <Text style={styles.screen5UploadButtonText}>사진 업로드</Text>
      </TouchableOpacity>

      {/* ─── 안내문 ─── */}
      <Text style={styles.noticeText}>
        ※ 긴 문자 메시지는 일부가 잘릴 수 있어요.{"\n"}
        캡처 시 문자가 겹치도록 찍어주세요!
      </Text>

      {/* ─── 로딩 오버레이 ─── */}
      {isLoading && (
        <View style={styles.screen5LoadingOverlay}>
          <ActivityIndicator size="large" color="#fff" />
          <Text style={styles.screen5LoadingText}>분석 중입니다…</Text>
        </View>
      )}
    </View>
  );
}
