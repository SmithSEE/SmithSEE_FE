import React from 'react';
import { View, Image, TouchableOpacity } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native'; // 상단에 추가

export default function Screen8() {
  const navigation = useNavigation();

  return (
    <View style={styles.screen8Container}>

      {/* Screen5 요소 복제 */}
        <Image
          source={require('../assets/Info.png')}
          style={styles.screen8InfoIcon}
        />
 
      <Image
        source={require('../assets/Group 16.png')}
        style={styles.screen8Character}
      />

      <Image
        source={require('../assets/text4.png')}
        style={styles.screen8TextImage}
      />
      
      <TouchableOpacity style={styles.screen8UploadButton}>
        <Image
          source={require('../assets/Button.png')}
          style={styles.screen8UploadImage}
        />
      </TouchableOpacity>

      {/* 어두운 오버레이 */}
      <View style={styles.screen8Overlay} />

      {/* 설명 이미지: 정상 메시지 */}
      <Image
        source={require('../assets/tutorial_not_smishing.png')}
        style={styles.screen8ScreenNotSmishing}
      />

      {/* 설명 이미지: 스미싱 메시지 */}
      <Image
        source={require('../assets/tutorial_smishing.png')}
        style={styles.screen8ScreenSmishing}
      />

      {/* 점선 선 */}
      <Image
        source={require('../assets/Vector 7.png')}
        style={styles.Vector}
      />

      {/* 점선 버튼 */}
      <Image
        source={require('../assets/Button2.png')}
        style={styles.screen8Button}
      />

      {/* 설명 텍스트 */}
      <Image
        source={require('../assets/explanation.png')}
        style={styles.screen8Explanation}
      />

      {/* 닫기 버튼 */}
      <TouchableOpacity style={styles.screen8Close} onPress={() => navigation.navigate('Screen5')}>
        <Image
          source={require('../assets/X circle.png')}
          style={styles.screen8CloseImage}
        />
      </TouchableOpacity>
    </View>
  );
}
