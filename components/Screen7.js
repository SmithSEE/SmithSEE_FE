import React from 'react';
import { View, Image, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import { styles } from '../styles';

const { width, height } = Dimensions.get('window');

export default function Screen7() {
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
      <TouchableOpacity style={styles.screen7HomeButton}>
        <Image
          source={require('../assets/Tab2.png')}
          style={styles.screen7HomeButtonImage}
        />
      </TouchableOpacity>
    </View>
  );
}
