import React, { useEffect ,useState} from "react";
import { Text, Image, View, StyleSheet, Dimensions , TouchableOpacity,Touchable } from "react-native";

import TreeImages from "../TreeImages";
import planet from "../assets/planet.png";
import thunder from "../assets/thunder.png";
import wateringCan from "../assets/watering-can.png";

const deviceWidth = Dimensions.get("window").width;
const screen = (percent) => (percent * deviceWidth) / 100;
const blur =0.1;
export default function WordContainer(props) {
  const { word, mean, level } = props.objWord;
  const hideMean = props.hideMean;

  const [blurThunder, setBlurThunder] = useState(1);
  useEffect(() => {
    //call api
  }, [blurThunder]);

  function handlOnPress(){
    
    if( blurThunder ===1 ){
      setBlurThunder(blur)
    }else{
      setBlurThunder(1)
    }

  }

  return (
    <View style={styles.WordContainer}>
      <View style={styles.WordInfor}>
        <Text style={styles.Word}>{word}</Text>

        {hideMean || <Text style={styles.Mean}>{mean}</Text>}
      </View>
    
      <View>
        <Image style={styles.WordImage} source={TreeImages[level]} />

        <View styles={styles.ThunderWater}>
        <TouchableOpacity
            
            onPress={handlOnPress}
        >
             <Image style={ [styles.ThunderImage,{opacity: blurThunder }] } source={thunder} />
        </TouchableOpacity>
         
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  WordContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    paddingTop: screen(5),
    paddingLeft: screen(7),
    paddingBottom: screen(4.5),
    marginBottom:screen(5),
  },
  WordInfor: {
    flexDirection: "column",
    flexGrow: 1,
    alignItems: "flex-start",
  },
  ThunderWater: {
    position: "absolute",
    right: screen(2),
    bottom: screen(2),
  },
  WordImage: {
    width: screen(25),
    height: screen(25),
    backgroundColor: "green",
    borderWidth: 0.5,
    borderRadius: 80,
    marginRight: screen(7),
  },
  ThunderImage: {
    position: "absolute",
    right: screen(14),
    marginVertical: screen(3),
    width: screen(10),
    height: screen(10),
    
  },

  Word: {
    textTransform: "lowercase",
    fontWeight: "700",
    fontSize: screen(10),
    paddingTop: screen(3),
  },
  Mean: {
    textTransform: "lowercase",
    fontWeight: "500",
    color: "#030",
    fontSize: screen(9),
  },
});
