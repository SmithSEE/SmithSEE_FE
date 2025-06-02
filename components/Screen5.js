// screens/Screen5.js
import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert, Platform } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker';
import * as ImageManipulator from 'expo-image-manipulator';

const API_URL = 'http://192.168.4.188:8080/ocr';

const PICKER_OPTS = {
  mediaTypes: ImagePicker.MediaTypeOptions.Images,
  allowsEditing: false,
  quality: 1,
  selectionLimit: 5,
  allowsMultipleSelection: true,
};

export default function Screen5() {
  const navigation = useNavigation();

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '사진 보관함 접근 권한이 필요합니다.');
      return;
    }

    const picker = await ImagePicker.launchImageLibraryAsync(PICKER_OPTS);
    if (picker.canceled) return;

    const assets = picker.assets || [];
    if (assets.length === 0) return;

    try {
      const results = await Promise.all(
        assets.map(async (asset) => {
          const processedUri = await processTo16x9(asset);
          const response = await uploadToServer(processedUri);

          const { result, combinedText } = response;

          if (result?.isSmishing) {
            Alert.alert(
              '⚠️ 스미싱 의심',
              `위험 점수: ${result.riskScore.toFixed(2)}\n\n문자 내용:\n${combinedText}`
            );
          } else {
            Alert.alert(
              '✅ 안전한 문자',
              `위험 점수: ${result?.riskScore?.toFixed(2) ?? 'N/A'}\n\n문자 내용:\n${combinedText}`
            );
          }

          return response;
        })
      );

      console.log('✅ 모든 업로드 완료:', results);
      Alert.alert('완료', `${results.length}장 업로드를 마쳤습니다.`);
    } catch (err) {
      console.error('❗ 처리/업로드 오류:', err);
      Alert.alert('실패', '이미지를 업로드하는 중 문제가 발생했습니다.');
    }
  };

  const processTo16x9 = async (asset) => {
    const { uri, width, height } = asset;
    const targetRatio = 16 / 9;

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
      { compress: 0.8, format: ImageManipulator.SaveFormat.JPEG }
    );

    return cropped;
  };

  const uploadToServer = async (imageUri) => {
    const filename = imageUri.split('/').pop() || `img_${Date.now()}.jpg`;

    const form = new FormData();
    form.append('file', {
      uri: Platform.OS === 'ios' ? imageUri.replace('file://', '') : imageUri,
      name: filename,
      type: 'image/jpeg',
    });

    const res = await fetch(API_URL, {
      method: 'POST',
      body: form,
      headers: { 'Content-Type': 'multipart/form-data' },
    });

    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    return res.json();
  };

  const handleInfoPress = () => navigation.navigate('Screen8');

  return (
    <View style={styles.screen5Container}>
      <TouchableOpacity style={styles.screen5InfoButton} onPress={handleInfoPress}>
        <Image source={require('../assets/Info.png')} style={styles.screen5InfoIcon} />
      </TouchableOpacity>

      <Image source={require('../assets/Group 16.png')} style={styles.screen5Character} />
      <Image source={require('../assets/text4.png')} style={styles.screen5TextImage} />

      <TouchableOpacity style={styles.screen5UploadButton} onPress={handleImageUpload}>
        <Text style={styles.screen5UploadButtonText}>사진 업로드</Text>
      </TouchableOpacity>
    </View>
  );
}
