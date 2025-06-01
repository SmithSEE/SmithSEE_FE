import React, { useState } from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Screen2() {
  const navigation = useNavigation();
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [1, 3]; // 예시: 총 3페이지

  const handleNext = () => {
    navigation.navigate('Screen3');
  };
  const handleSkip = () => {
    navigation.navigate('Screen5');
  };

  return (
    <View style={styles.screen2Container}>

      {/* Skip 버튼 */}
      <TouchableOpacity style={styles.screenSkip} onPress={handleSkip}>
        <Image source={require('../assets/Skip.png')} style={styles.screenSkipImage} />
      </TouchableOpacity>

      {/* 왼쪽 상단 캐릭터 */}
      <Image source={require('../assets/Group 22.png')} style={styles.screen2Character} />

      {/* 가운데 문구 이미지 */}
      <Image source={require('../assets/smithseerp.png')} style={styles.screen2TextImage} />

      {/* 하단 인디케이터 */}
      <Image source={require('../assets/Ellipse 16.png')} style={styles.screen2Indicator} />

     {/* 하단 가운데 버튼1 */}
     <TouchableOpacity style={styles.screen2NextButtonCenter} onPress={handleNext}>
        <Text style={styles.screen2NextButtonText}>
          {currentIndex === slides.length - 1 ? '시작하기' : '다음'}
        </Text>
      </TouchableOpacity>
    </View>
  );
};