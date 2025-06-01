import { StyleSheet, Dimensions } from 'react-native'; //Dimensions: 현재 화면 출력 해주는 기기의 화면 크기를 가져와주는 역할 
const { width, height } = Dimensions.get('window');

// ======================= Screen1 =======================
export const styles = StyleSheet.create({
  screen1Container: {
    flex: 1, //화면 전체를 차지
    backgroundColor: '#04bf33',
    justifyContent: 'center', //세로 방향 가운데 정렬
    alignItems: 'center', //가로 방향 가운데 정렬 
  },
  screen1Image: {
    width: width * 0.5,
    height: width * 0.5 * (169 / 186), // 원본 비율 유지
    resizeMode: 'contain', //이미지 비율 유지하며 맞춤
    shadowColor: '#000',
    shadowOffset: { width: 4, height: 4 },// 그림자 위치
    shadowOpacity: 0.3, // 그림자 투명도
    shadowRadius: 6, // 그림자 번짐 정도
    elevation: 10, // 안드로이드 그림자(ios랑 다름)
  },

  // ======================= Screen2 =======================
  screen2Container: {
    backgroundColor: '#fff',
    flex: 1,
    paddingTop: height * 0.07,
    position: 'relative',
  },
  screenSkip: {
    position: 'absolute',
    top: height * 0.07,
    right: width * 0.05,
    zIndex: 10,
  },
  screenSkipImage: {
    width: width * 0.13,
    height: height * 0.025,
    resizeMode: 'contain',
  },
  screen2Character: {
    position: 'absolute',
    top: height * 0.27,
    left: -width * 0.285,
    width: width * 1.10,
    height: height * 0.45,
    resizeMode: 'contain',
  },
  screen2TextImage: {
    position: 'absolute',
    bottom: height * 0.23,
    right: width * 0.1,
    width: width * 0.45,
    height: height * 0.2,
    resizeMode: 'contain',
  },
  screen2Indicator: {
    position: 'absolute',
    bottom: height * 0.6,
    right: width * 0.17,
    width: width * 0.5,
    height: height * 0.14,
    resizeMode: 'contain',
  },
  // ======================= Screen3 =======================
  screen3Container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    paddingTop: height * 0.1,
    backgroundColor: '#fff',
  },
  screen3SpeechBubble: {
    position: 'absolute',
    top: height * 0.17,
    left: width * 0.03,
    width: width * 0.60,
    height: height * 0.20,
    resizeMode: 'contain',
  },
  screen3Magnifier: {
    position: 'absolute',
    top: height * 0.20,
    left: width * 0.24,
    width: width * 0.51,
    height: height * 0.33,
    resizeMode: 'contain',
    zIndex: 1,
  },
  screen3Character: {
    position: 'absolute',
    bottom: height * 0.37,
    left: width * 0.54,
    width: width * 0.40,
    height: height * 0.3,
    resizeMode: 'contain',
  },
  screen3TextImage: {
    marginTop: height * 0.29,
    marginRight: width * -0.07,
    width: width * 0.73,
    height: height * 0.20,
    resizeMode: 'contain',
    
  },
  screen2NextButtonCenter: {
  position: 'absolute',
  bottom: height * 0.12, // 화면 아래에서 위로 12% 위치
  width: width * 0.35,   // 버튼 너비
  height: height * 0.07, // 버튼 높이
  backgroundColor: '#4CAF50',
  borderRadius: 9999,    // 동그란 모서리
  justifyContent: 'center',  // 텍스트를 수직 중앙 정렬
  alignItems: 'center',      // 텍스트를 수평 중앙 정렬
  alignSelf: 'center',       // View 기준 가운데 정렬
  },
  screen2NextButtonText: {
  color: '#fff',
  fontSize: 18,
  },
  // ======================= Screen4 =======================
  screen4Container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    backgroundColor: '#fff',
  },

  // 캐릭터 + 자물쇠 이미지
  screen4LockImage: {
    width: width * 0.6,
    height: height * 0.33,
    resizeMode: 'contain',
    marginTop: height * 0.06,
  },

  // "안전 정확" 텍스트 이미지
  screen4TextImage: {
    width: width * 0.73,
    height: height * 0.30,
    resizeMode: 'contain',
    marginTop: height * 0.0,
  },

  screen4Nextbar3: {
    position: 'absolute',
    bottom: height * 0.06,
    right: width * 0.05,
    width: width * 0.9,
    height: height * 0.08,
    resizeMode: 'contain'
  },

  // ======================= Screen5 =======================
  screen5Container: {
    backgroundColor: '#fff',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  // 상단 우측 info 버튼
  screen5InfoButton: {
    position: 'absolute',
    top: height * 0.07,
    right: width * 0.05,
    zIndex: 10,
  },
  screen5InfoIcon: {
    width: width * 0.09,
    height: width * 0.09,
    resizeMode: 'contain',
  },

  // 캐릭터 이미지
  screen5Character: {
    position: 'absolute',
    top: height * 0.23,
    width: width * 0.46,
    height: height * 0.3,
    resizeMode: 'contain',
  },

  // 텍스트 이미지
  screen5TextImage: {
    position: 'absolute',
    top: height * 0.5,
    width: width * 0.7,
    height: height * 0.07,
    resizeMode: 'contain',
  },

  // 버튼 이미지

screen5UploadButton: {
  marginTop: height * 0.01,
  width: width * 0.65,
  height: height * 0.09,
  backgroundColor: '#4CAF50', // 기존 초록색 배경
  borderRadius: 9999,
  justifyContent: 'center',
  alignItems: 'center',
  bottom: height * -0.135,
},

screen5UploadButtonText: {
  color: '#fff',
  fontSize: 18,
},
  // ======================= Screen6 =======================
  screen6Container: {
    flex: 1,
    backgroundColor: '#04bf33',
    position: 'relative',
  },

  // 캐릭터 이미지
  screen6Character: {
    position: 'absolute',
    top: height * 0.18,
    left: -width * 0.1,
    width: width * 0.85,
    height: height * 0.45,
    resizeMode: 'contain',
  },

  // 텍스트 이미지
  screen6TextImage: {
    position: 'absolute',
    top: height * 0.63,
    alignSelf: 'center',
    width: width * 0.7,
    height: height * 0.08,
    resizeMode: 'contain',
  },

  // 홈으로 가기 버튼
  screen6HomeButton: {
    position: 'absolute',
    bottom: height * 0.2,
    alignSelf: 'center',
  },

  screen6HomeButtonImage: {
    width: width * 0.35,
    height: height * 0.05,
    resizeMode: 'contain',
  },
  // ======================= Screen7 =======================

  screen7Container: {
    flex: 1,
    backgroundColor: '#f2570f',
    position: 'relative',
  },

  // 캐릭터 이미지
  screen7Character: {
    position: 'absolute',
    top: height * 0.18,
    left: width * 0,
    width: width * 0.9,
    height: height * 0.45,
    resizeMode: 'contain',
  },

  // 텍스트 이미지
  screen7TextImage: {
    position: 'absolute',
    top: height * 0.63,
    alignSelf: 'center',
    width: width * 0.7,
    height: height * 0.08,
    resizeMode: 'contain',
  },

  // 홈으로 가기 버튼
  screen7HomeButton: {
    position: 'absolute',
    bottom: height * 0.2,
    alignSelf: 'center',
  },

  screen7HomeButtonImage: {
    width: width * 0.35,
    height: height * 0.05,
    resizeMode: 'contain',
  },

  // ======================= Screen8 =======================

  screen8Container: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },

  // 상단 우측 info 버튼

  screen8InfoIcon: {
    position: 'absolute',
    top: height * 0.07,
    right: width * 0.05,
    width: width * 0.09,
    height: width * 0.09,
    resizeMode: 'contain',
    opacity: 0.25,
  },

  // 캐릭터 이미지
  screen8Character: {
    position: 'absolute',
    top: height * 0.23,
    width: width * 0.46,
    height: height * 0.3,
    resizeMode: 'contain',
    opacity: 0.25,
  },


  // 텍스트 이미지
  screen8TextImage: {
    position: 'absolute',
    top: height * 0.5,
    width: width * 0.7,
    height: height * 0.07,
    resizeMode: 'contain',
  },

  // 버튼 이미지
  screen8UploadButton: {
    position: 'absolute',
    top: height * 0.59,
    opacity: 0.25,
  },
  screen8UploadImage: {
    width: width * 0.65,
    height: height * 0.1,
    resizeMode: 'contain',
  },







// 닫기 버튼 (상단 오른쪽)
screen8Close:  {
    position: 'absolute',
    top: height * 0.07,
    right: width * 0.05,
    zIndex: 2,
  },
screen8CloseImage:  {
    width: width * 0.09,
    height: width * 0.09,
    resizeMode: 'contain',
  },

// 정상 메시지 스크린샷
screen8ScreenNotSmishing: {
  position: 'absolute',
  top: height * 0.18,
  left: width * 0.22,
  width: width * 0.26,
  height: height * 0.36,
  resizeMode: 'contain',
  zIndex: 2,
},

// 스미싱 의심 메시지 스크린샷
screen8ScreenSmishing: {
  position: 'absolute',
  top: height * 0.18,
  left: width * 0.52,
  width: width * 0.26,
  height: height * 0.36,
  resizeMode: 'contain',
  zIndex: 2,
},

// 점선 선 이미지
Vector: {
  position:'absolute',
  top: height * 0.69,
  left: width * 0.23,
  height: height * 0.055,
  resizeMode: 'contain',
  zIndex: 2,
},

// 점선 버튼 이미지
screen8Button: {
    position: 'absolute',
    top: height * 0.59,
    width: width * 0.65,
    height: height * 0.1,
    resizeMode: 'contain',
    zIndex: 2,
  },

// 설명 텍스트 이미지
screen8Explanation: {
  position: 'absolute',
  top: height * 0.72,
  left: width * 0.25,
  alignSelf: 'center',
  width: width * 0.6,
  height: height * 0.05,
  resizeMode: 'contain',
  zIndex: 2,
},

});