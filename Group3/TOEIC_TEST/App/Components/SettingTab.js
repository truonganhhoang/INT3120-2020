import React, { useEffect, useState, Component } from 'react'
import styles from './Styles/SettingTabStyles'
import {
    View,
    Text,
    SafeAreaView,
    ScrollView,
    Picker,
    TouchableOpacity,
    Platform,
    Dimensions,
    Alert,
    Switch,
    Button
} from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'
import { CheckBox } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import Share from 'react-native-share'
import Mailer from 'react-native-mail'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import AsyncStorage from '@react-native-community/async-storage'
import { fcmService } from '../Services/FCMService'
import { adService, Banner, UNIT_ID_BANNER } from '../Services/AdService'


const SettingTab = (props) => {
    const [checked, setChecked] = useState(true)
    const [selectedValue, setSelectedValue] = useState('1')
    const [timeStart, setTimeStart] = useState('6:00')
    const [timeFinish, setTimeFinish] = useState('21:00')
    const [visibleStart, setVisibleStart] = useState(false)
    const [visibleFinish, setVisibleFinish] = useState(false)
    const [switchValue, setSwitchValue] = useState(false)
    useEffect(() => {
        getTheme()
        noti()
    }, [])
    const getTheme = async () => {
        try {
            const value = await AsyncStorage.getItem('theme')
            if (value === 'true') setSwitchValue(true)
            else if (value === 'false') setSwitchValue(false)
        } catch (e) {
            console.log(e)
        }
    }
    const noti = () => {
        const date = new Date()
        date.setMinutes(date.getMinutes() + 1) //set time ngay sau 1 phut
        const title = "TOEIC TEST"
        const content = "Đã đến giờ học bài!"
        fcmService.scheduleDailyNotification(title, content, date.getTime());
    }
    const handleRemind = () => {
        if (checked == false) {
            const date = new Date()
            date.setMinutes(date.getMinutes() + 1) //set time ngay sau 1 phut
            const title = "TOEIC TEST"
            const content = "Đã đến giờ học bài!"
            fcmService.scheduleDailyNotification(title, content, date.getTime());
        }
        setChecked(!checked)
    }
    const showDatePickerStart = () => {
        setVisibleStart(true)
    }
    const hideDatePickerStart = () => {
        setVisibleStart(false)
    }
    const handleConfirmStart = time => {
        hideDatePickerStart()
        setTimeStart(time.getHours() + ":" + time.getMinutes())
        const title = "TOEIC TEST"
        const content = "Đã đến giờ học bài!"
        fcmService.scheduleDailyNotification(title, content, time.getTime());
    }
    const showDatePickerFinish = () => {
        setVisibleFinish(true)
    };

    const hideDatePickerFinish = () => {
        setVisibleFinish(false)
    };
    const handleConfirmFinish = time => {
        hideDatePickerFinish()
        setTimeFinish(time.getHours() + ":" + time.getMinutes())
            ()
    };
    const toggleSwitch = async (value) => {
        try {
            await AsyncStorage.setItem('theme', `${value}`)
            setSwitchValue(value)
            props.setDarkMode(value)
        } catch (e) {
            console.log(e)
        }

    }
    const handleEmail = () => {
        Mailer.mail({
            subject: 'Góp ý về ứng dụng Toeic Test',
            recipients: ['leducuet@gmail.com'],
            // ccRecipients: ['supportCC@example.com'],
            // bccRecipients: ['supportBCC@example.com'],
            // body: '<b>A Bold Body</b>',
            isHTML: true,
            attachment: {
                path: '',  // The absolute path of the file from which to read data.
                type: '',   // Mime Type: jpg, png, doc, ppt, html, pdf, csv
                name: '',   // Optional: Custom filename for attachment
            }
        }, (error, event) => {
            Alert.alert(
                error,
                event,
                [
                    { text: 'Ok', onPress: () => console.log('OK: Email Error Response') },
                    { text: 'Cancel', onPress: () => console.log('CANCEL: Email Error Response') }
                ],
                { cancelable: true }
            )
        });
    }
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: switchValue == false ? "#EEEEEE" : "#212121", }}>
            <View style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingTop: 40,
                paddingBottom: 20,
                backgroundColor: switchValue == false ? "#1976D2" : "#263238"
            }}>
                <Text style={styles.title}>CÀI ĐẶT</Text>
            </View>
            <ScrollView style={{ flex: 1, margin: 20 }}>
                <View style={{
                    backgroundColor: switchValue == false ? "#F5F5F5" : "#263238",
                    elevation: 6,
                }}>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}>
                        <Icon name="clock-o" size={40} color={switchValue == false ? "#1976D2" : "#F5F5F5"} />
                        <Text style={{ fontSize: 20, color: switchValue == false ? "#1976D2" : "#F5F5F5", paddingLeft: 15 }}>Nhắc nhở </Text>
                        <CheckBox
                            containerStyle={{ marginLeft: Dimensions.get('screen').width - 240 }}
                            size={30}
                            checkedColor={switchValue == false ? "#1976D2" : "#F5F5F5"}
                            checked={checked}
                            onPress={() => handleRemind()}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 18, color: switchValue == false ? "#424242" : "#BDBDBD" }}>Số lần trong ngày</Text>
                        <Picker
                            selectedValue={selectedValue}
                            style={{ height: 20, width: 75 }}
                            onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}

                        >
                            <Picker.Item label="1" value="1" color={switchValue == false ? "#424242" : "#BDBDBD"} />
                            <Picker.Item label="2" value="2" color={switchValue == false ? "#424242" : "#BDBDBD"} />
                        </Picker>
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 20, justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            onPress={() => showDatePickerStart()}
                        >
                            <Text style={{ fontSize: 18, color: switchValue == false ? "#424242" : "#BDBDBD" }}>Thời gian bắt đầu</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, marginRight: 25, color: switchValue == false ? "#424242" : "#BDBDBD" }}>{timeStart}</Text>
                        <DateTimePickerModal
                            isVisible={visibleStart}
                            mode="time"
                            onConfirm={handleConfirmStart}
                            onCancel={hideDatePickerStart}
                        />
                    </View>
                    <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 20, paddingBottom: 20, justifyContent: 'space-between' }}>
                        <TouchableOpacity
                            onPress={() => showDatePickerFinish()}
                        >
                            <Text style={{ fontSize: 18, color: switchValue == false ? "#424242" : "#BDBDBD" }}>Thời gian kết thúc</Text>
                        </TouchableOpacity>
                        <Text style={{ fontSize: 16, marginRight: 25, color: switchValue == false ? "#424242" : "#BDBDBD" }}>{timeFinish}</Text>
                        <DateTimePickerModal
                            isVisible={visibleFinish}
                            mode="time"
                            onConfirm={handleConfirmFinish}
                            onCancel={hideDatePickerFinish}
                        />
                    </View>
                </View>
                <View style={{
                    backgroundColor: switchValue == false ? "#F5F5F5" : "#263238",
                    marginTop: 20,
                    elevation: 6,
                    flexDirection: 'row',
                    padding: 10,
                    alignContent: 'center',
                    alignItems: 'center',
                }}>
                    <MaterialCommunityIcons name="theme-light-dark" size={34} color={switchValue == false ? "#1976D2" : "#F5F5F5"} />
                    <Text style={{ fontSize: 20, color: switchValue == false ? "#1976D2" : "#F5F5F5", paddingLeft: 10 }}> Giao diện tối</Text>
                    <Switch
                        style={{ marginLeft: Dimensions.get('screen').width - 260 }}
                        onValueChange={toggleSwitch}
                        value={switchValue} />
                </View>
                <View style={{
                    backgroundColor: switchValue == false ? "#F5F5F5" : "#263238",
                    marginTop: 20,
                    elevation: 6,
                }}>
                    <TouchableOpacity
                        onPress={() => Share.open(options)}
                    >
                        <View style={{ flexDirection: 'row', padding: 10, alignContent: 'center', alignItems: 'center' }}>
                            <Icon name="facebook-square" size={40} color={switchValue == false ? "#1976D2" : "#F5F5F5"} />
                            <Text style={{ fontSize: 20, color: switchValue == false ? "#1976D2" : "#F5F5F5", paddingLeft: 10 }}> Chia sẻ đến bạn bè</Text>
                        </View>
                    </TouchableOpacity>
                </View>

                <View style={{
                    backgroundColor: switchValue == false ? "#F5F5F5" : "#263238",
                    marginTop: 20,
                    elevation: 6,
                }}>
                    <TouchableOpacity
                        onPress={() => handleEmail()}
                    >
                        <View style={{ flexDirection: 'row', padding: 10, alignContent: 'center', alignItems: 'center' }}>
                            <Icon name="comments" size={34} color={switchValue == false ? "#1976D2" : "#F5F5F5"} />
                            <Text style={{ fontSize: 20, color: switchValue == false ? "#1976D2" : "#F5F5F5", paddingLeft: 10 }}> Báo lỗi hoặc góp ý</Text>
                        </View>

                    </TouchableOpacity>
                </View>

                <View>
                    <Button
                    onPress={ () => {
                        adService.showInterstitial();
                        console.log(adService.getUnitIdBanner);
                    }}
                    title="Test ads"
                    color="#841584"
                    />
                </View>

            </ScrollView>

            <Banner
                unitId={UNIT_ID_BANNER}
                size={"SMART_BANNER"}
                request={adService.buildRequest().build()}
                onAdLoaded={() => {
                    console.log('Advert loaded');
                }}
            />
        </ SafeAreaView >

    )
}
export default SettingTab
const url = 'https://drive.google.com/open?id=134oAlPK-5K-3eAMxJg1gs_Ka7Ehe0v8g';
const title = 'Ứng dụng Toeic Test';
const message = 'Ứng dụng Toeic Test';
const options = Platform.select({
    default: {
        title: title,
        subject: message,
        message: `${url}`,
    }
});