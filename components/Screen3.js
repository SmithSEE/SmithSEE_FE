import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Screen3() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [1, 3]; // Screen3이 두 번째 슬라이드라고 가정

  const handleNext = () => {
    navigation.navigate('Screen4');
  };
  const handleSkip = () => {
    navigation.navigate('Screen5');
  };
  
  return (
    
    <View style={styles.screen3Container}>
      {/* Skip 버튼 */}
      <TouchableOpacity style={styles.screenSkip} onPress={handleSkip}>
        <Image source={require('../assets/Skip.png')}style={styles.screenSkipImage} />
      </TouchableOpacity>

      {/* 배경 말풍선 이미지 */}
      <Image source={require('../assets/Group 15.png')} style={styles.screen3SpeechBubble} />

      {/* 돋보기 이미지 */}
      <Image source={require('../assets/reading_glasses.png')} style={styles.screen3Magnifier} />

      {/* 캐릭터 이미지 */}
      <Image source={require('../assets/Group 13.png')} style={styles.screen3Character} />

      {/* 텍스트 이미지 ("캡처 분석") */}
      <Image source={require('../assets/tutorial_text2.png')} style={styles.screen3TextImage} />


      {/* 하단 다음 페이지2 */}
      <TouchableOpacity style={styles.screen2NextButtonCenter} onPress={handleNext}>
        <Text style={styles.screen2NextButtonText}>
          {currentIndex === slides.length - 1 ? '시작하기' : '다음'}
        </Text>
      </TouchableOpacity>
    </View>
  );
}
