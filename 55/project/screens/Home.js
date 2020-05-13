import * as React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { CellHome } from '../components/CellHome'

const dataHome = {
    imgTop: require("../images/home/qc.jpg"),
    img1: require("../images/home/thi_sat_hach.jpg"),
    img2: require("../images/home/hoc_li_thuyet.jpg"),
    img3: require("../images/home/bien_bao.jpg"),
    img4: require("../images/home/meo_thi.jpg"),
    img5: require("../images/home/tra_cuu_luat.jpg"),
    img6: require("../images/home/cau_hay_sai.jpg"),
}


export default function Home({ navigation }) {

    function MyNavigate(desScreen) {
        navigation.navigate(desScreen);
    };

    return (
        <View style={styles.container}>
            <View style={styles.top}>
                <Image
                    source={dataHome.imgTop}
                    resizeMode="stretch"
                    style={styles.image}
                />
            </View>


            <View style={styles.content}>

                <View style={styles.row}>
                    <CellHome img={dataHome.img1} Press={() => MyNavigate("Thi_sat_hach")} />
                    <CellHome img={dataHome.img2} Press={() => MyNavigate("Hoc_li_thuyet")} />
                </View>

                <View style={styles.row}>
                    <CellHome img={dataHome.img3} Press={() => MyNavigate("Bien_bao")} />
                    <CellHome img={dataHome.img4} Press={() => MyNavigate("Meo_thi")} />
                </View>

                <View style={styles.row}>
                    <CellHome img={dataHome.img5} Press={() => MyNavigate("Tra_cuu_luat")} />
                    <CellHome img={dataHome.img6} Press={() => MyNavigate("Help")} />
                </View>

            </View>

        </View>

    );
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    top: {
        flex: 4,
        backgroundColor: "white",
    },

    image: {
        width: "100%",
        height: "100%",
    },

    content: {
        flex: 10,
        // borderWidth: 10,
        // borderColor: "#EDEDF1",
    },

    row: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: "#EDEDF1",
    }
});