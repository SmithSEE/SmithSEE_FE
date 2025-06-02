import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

const { width, height } = Dimensions.get('window');

export default function Screen6() {
const navigation = useNavigation(); // ✅ 네비게이션 객체 생성

const goToHome = () => {
  navigation.navigate('Screen5'); // ✅ Screen5로 이동
};

  return (
    <View style={styles.screen6Container}>
      {/* 캐릭터 이미지 */}
      <Image
        source={require('../assets/Group 18.png')}
        style={styles.screen6Character}
      />

      {/* 텍스트 이미지 */}
      <Image
        source={require('../assets/not_smishing.png')}
        style={styles.screen6TextImage}
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
