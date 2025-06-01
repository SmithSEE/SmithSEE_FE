import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const { width, height } = Dimensions.get('window');

export default function Screen6() {
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
      <TouchableOpacity style={styles.screen6HomeButton}>
        <Image
          source={require('../assets/Tab.png')}
          style={styles.screen6HomeButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
