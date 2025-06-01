import React from 'react';
import { View, Image, TouchableOpacity, Text, Alert } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';
import * as ImagePicker from 'expo-image-picker'; // ✅ 이미지 픽커 추가

export default function Screen5() {
  const navigation = useNavigation(); // navigation 객체 사용

  const handleImageUpload = async () => {
    const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
    if (status !== 'granted') {
      Alert.alert('권한 필요', '사진 보관함 접근 권한이 필요합니다.');
      return;
    }
    try {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: 'Images', // ✅ 문자열로 직접 지정
      allowsEditing: true,
      quality: 1,
    });

    console.log("이미지 선택 결과:", result);

    if (!result.canceled) {
      const imageUri = result.assets[0].uri;
      console.log('✅ 선택한 이미지 URI:', imageUri);

        // 백엔드 전송 함수 호출
        await uploadImageToServer(imageUri);
      } else {
        console.log("❌ 사용자가 취소했습니다.");
      }
    } catch (error) {
      console.log("❗ 이미지 선택 중 오류:", error);
    }
  };

  // ✅ 백엔드 서버로 이미지 전송 함수
  const uploadImageToServer = async (imageUri) => {
    const apiUrl = 'http://192.168.219.108:8080/upload'; // ✅ 여기에 실제 서버 주소 입력
    const filename = imageUri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename ?? '');
    const type = match ? `image/${match[1]}` : `image`;

    const formData = new FormData();
    formData.append('file', {
      uri: imageUri,
      name: filename,
      type: type,
    });

    try {
      const response = await fetch(apiUrl, {
        method: 'POST',
        body: formData,
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      //
      //
      //여기 await response.text(); 부분 text -> json으로 바꾸면 json응답 받는거 
      const data = await response.json();
      console.log('✅ 서버 응답:', data);
      Alert.alert('업로드 완료', '서버에 이미지가 성공적으로 업로드되었습니다.');
    } catch (error) {
      console.error('❗ 업로드 실패:', error);
      Alert.alert('업로드 실패', '이미지를 서버에 전송하는 중 문제가 발생했습니다.');
    }
  };

  const handleInfoPress = () => {
    navigation.navigate('Screen8'); // Screen8로 이동
  };

  return (
    <View style={styles.screen5Container}>
      {/* 정보 버튼 */}
      <TouchableOpacity style={styles.screen5InfoButton} onPress={handleInfoPress}>
        <Image
          source={require('../assets/Info.png')} // 오른쪽 상단 info 아이콘
          style={styles.screen5InfoIcon}
        />
      </TouchableOpacity>

      {/* 캐릭터 이미지 */}
      <Image
        source={require('../assets/Group 16.png')}
        style={styles.screen5Character}
      />

      {/* 텍스트 이미지 */}
      <Image
        source={require('../assets/text4.png')}
        style={styles.screen5TextImage}
      />

      {/* 버튼 이미지 */}
      <TouchableOpacity style={styles.screen5UploadButton} onPress={handleImageUpload}>
        <Text style={styles.screen5UploadButtonText}>사진 업로드</Text>
      </TouchableOpacity>
    </View>
  );
}
