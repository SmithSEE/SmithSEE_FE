import React, { useEffect } from 'react';
import { View, Image } from 'react-native';
import { styles } from '../styles';
import { useNavigation } from '@react-navigation/native';

export default function Screen1() {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.replace('Screen2');
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

// // 실제로 데이터 불러올 때까지 기다리기(API요청, 초기 설정 등)
//     useEffect(() => {
//     const load = async () => {
//       await fetchData(); // API 호출 or 초기 세팅
//       navigation.replace('Screen');
//     };
//     load();
//     }, []);


  return (
    <View style={styles.screen1Container}>
      <Image
        source={require('../assets/Group 12.png')}
        style={styles.screen1Image}
      />
    </View>
  );
}
