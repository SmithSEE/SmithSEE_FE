import React from 'react';
import { View, Image, TouchableOpacity, Text } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Screen4() {
  const navigation = useNavigation();

  const handleNext = () => {
    navigation.navigate('Screen5');
  };
  const handleSkip = () => {
    navigation.navigate('Screen5');
  };

  return (
    <View style={styles.screen4Container}>
      {/* Skip 버튼 */}
      <TouchableOpacity style={styles.screenSkip} onPress={handleSkip}>
        <Image source={require('../assets/Skip.png')}style={styles.screenSkipImage}/>
      </TouchableOpacity>

      {/* 캐릭터 + 자물쇠 이미지 */}
      <Image source={require('../assets/Group 23.png')}style={styles.screen4LockImage}/>

      {/* 텍스트 이미지 ("안전 정확") */}
      <Image source={require('../assets/tutorial_text3.png')}style={styles.screen4TextImage}/>

      {/* 하단 버튼 */}
      <TouchableOpacity style={styles.screen2NextButtonCenter} onPress={handleNext}>
        <Text style={styles.screen2NextButtonText}>시작하기</Text>
      </TouchableOpacity>
    </View>
  );
}
