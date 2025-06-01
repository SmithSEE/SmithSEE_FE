import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screen1 from './components/Screen1';
import Screen2 from './components/Screen2';
import Screen3 from './components/Screen3';
import Screen4 from './components/Screen4';
import Screen5 from './components/Screen5';
import Screen6 from './components/Screen6';
import Screen7 from './components/Screen7';
import Screen8 from './components/Screen8';


const Stack = createNativeStackNavigator();

export default function App() {
  return (                       // 앱을 실행했을 때 제일 먼저 보여줄 화면 설정 -> initialRouteName="Screen1"
    <NavigationContainer>                                     
      <Stack.Navigator screenOptions={{ headerShown: false,  animation: 'fade', gestureEnabled: false}} initialRouteName="Screen1">
        <Stack.Screen name="Screen1" component={Screen1} />
        <Stack.Screen name="Screen2" component={Screen2} />
        <Stack.Screen name="Screen3" component={Screen3} />
        <Stack.Screen name="Screen4" component={Screen4} />
        <Stack.Screen name="Screen5" component={Screen5} />
        <Stack.Screen name="Screen6" component={Screen6} />
        <Stack.Screen name="Screen7" component={Screen7} />
        <Stack.Screen name="Screen8" component={Screen8} />

      </Stack.Navigator>
    </NavigationContainer>
  );
}