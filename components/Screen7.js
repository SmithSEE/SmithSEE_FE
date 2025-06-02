import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Screen7() {
const navigation = useNavigation(); // ✅ 네비게이션 훅 사용

const goToHome = () => {
    navigation.navigate('Screen5'); // ✅ 홈(Scree5)으로 이동
}

  return (
    <View style={styles.screen7Container}>
      {/* 캐릭터 이미지 */}
      <Image
        source={require('../assets/Group 20.png')}
        style={styles.screen7Character}
      />

      {/* 텍스트 이미지 */}
      <Image
        source={require('../assets/smishing.png')}
        style={styles.screen7TextImage}
      />

      {/* 홈으로 가기 버튼 */}
      <TouchableOpacity style={styles.screen6HomeButton} onPress={goToHome}>
        <Image
          source={require('../assets/Tab.png')}
          style={styles.screen6HomeButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
