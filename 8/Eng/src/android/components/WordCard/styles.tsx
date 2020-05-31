import { StyleSheet } from 'react-native';
import layout from '../../constants/layout';
const WIDTH = layout.window.width;
const leftWidth = (layout.window.width - 20) * 0.41;
const rightWidth = (layout.window.width - 20) * 0.59;
const height = (layout.window.height - 60) / 5;
const fontLarge = () => {
  if (WIDTH > 400) {
    return 22;
  } else if (WIDTH > 250) {
    return 20;
  } else {
    return 16;
  }
}
const fontSmall = () => {
  if (WIDTH > 400) {
    return 16;
  } else if (WIDTH > 250) {
    return 14;
  } else {
    return 12;
  }
}
const styles = StyleSheet.create({
  img: {
    width: '100%',
    height: '100%',
  },
  star_icon: {
    position: "absolute",
    fontSize: 24,
    zIndex: 2,
    right: '2%',
    top: '4%',
  },
  en_text: {
    textAlign: "center",
    color: "#ff5e00",
    fontSize: fontLarge(),
    fontWeight: "bold"
  },
  spelling_text: {
    textAlign: "center",
    fontSize: fontSmall(),
    fontWeight: "bold"
  },
  voice_icon: {
    textAlign: "center",
  },
  vn_text: {
    textAlign: "center",
    color: "blue",
    fontSize: fontSmall(),
    fontWeight: "bold"
  }
})

export default styles; 