import React, { Component } from 'react'
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
import { fcmService } from '../Services/FCMService'
import { CheckBox } from 'react-native-elements'
import DateTimePickerModal from "react-native-modal-datetime-picker"
import Share from 'react-native-share'
import Mailer from 'react-native-mail'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

class SettingTab extends Component {
    constructor(props) {
        super(props)
        this.state = {
            checked: false,
            selectedValue: '1',
            timeStart: '6:00',
            timeFinish: '21:00',
            visibleStart: false,
            visibleFinish: false,
            switchValue: false,
        }
    }
    showDatePickerStart = () => {
        this.setState({ visibleStart: true })
    };
    hideDatePickerStart = () => {
        this.setState({ visibleStart: false })
    };
    handleConfirmStart = time => {
        this.setState({ timeStart: time.getHours() + ":" + time.getMinutes() })
        this.hideDatePickerStart();
    };
    showDatePickerFinish = () => {
        this.setState({ visibleFinish: true })
    };

    hideDatePickerFinish = () => {
        this.setState({ visibleFinish: false })
    };
    handleConfirmFinish = time => {
        this.setState({ timeFinish: time.getHours() + ":" + time.getMinutes() })
        this.hideDatePickerFinish();
    };
    toggleSwitch = (value) => {
        console.log(value)
        this.setState({ switchValue: value })
    }
    handleEmail = () => {
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
    render() {

        return (
            <SafeAreaView style={{ flex: 1, backgroundColor: this.state.switchValue == false ? "#EEEEEE" : "#212121", }}>
                <View style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    paddingTop: 40,
                    paddingBottom: 20,
                    backgroundColor: this.state.switchValue == false ? "#1976D2" : "#263238"
                }}>
                    <Text style={styles.title}>CÀI ĐẶT</Text>
                </View>
                <ScrollView style={{ flex: 1, margin: 20 }}>
                    <View style={{
                        backgroundColor: this.state.switchValue == false ? "#FAFAFA" : "#263238",
                        elevation: 6,
                    }}>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, alignItems: 'center' }}>
                            <Icon name="clock-o" size={40} color="#1976D2" />
                            <Text style={{ fontSize: 20, color: "#1976D2", paddingLeft: 15 }}>Nhắc nhở </Text>
                            <CheckBox
                                containerStyle={{ marginLeft: Dimensions.get('screen').width - 240 }}
                                size={30}
                                checked={this.state.checked}
                                onPress={() => this.setState({ checked: !this.state.checked })}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, justifyContent: 'space-between' }}>
                            <Text style={{ fontSize: 18 }}>Số lần trong ngày</Text>
                            <Picker
                                selectedValue={this.state.selectedValue}
                                style={{ height: 20, width: 75 }}
                                onValueChange={(itemValue, itemIndex) => this.setState({ selectedValue: itemValue })}
                            >
                                <Picker.Item label="1" value="1" backgroundColor="red" />
                                <Picker.Item label="2" value="2" />
                            </Picker>
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 20, justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                onPress={() => this.showDatePickerStart()}
                            >
                                <Text style={{ fontSize: 18 }}>Thời gian bắt đầu</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, marginRight: 25 }}>{this.state.timeStart}</Text>
                            <DateTimePickerModal
                                isVisible={this.state.visibleStart}
                                mode="time"
                                onConfirm={this.handleConfirmStart}
                                onCancel={this.hideDatePickerStart}
                            />
                        </View>
                        <View style={{ flexDirection: 'row', paddingLeft: 10, paddingRight: 10, paddingTop: 20, paddingBottom: 20, justifyContent: 'space-between' }}>
                            <TouchableOpacity
                                onPress={() => this.showDatePickerFinish()}
                            >
                                <Text style={{ fontSize: 18 }}>Thời gian kết thúc</Text>
                            </TouchableOpacity>
                            <Text style={{ fontSize: 16, marginRight: 25 }}>{this.state.timeFinish}</Text>
                            <DateTimePickerModal
                                isVisible={this.state.visibleFinish}
                                mode="time"
                                onConfirm={this.handleConfirmFinish}
                                onCancel={this.hideDatePickerFinish}
                            />
                        </View>
                    </View>
                    <View style={{
                        backgroundColor: this.state.switchValue == false ? "#FAFAFA" : "#263238",
                        marginTop: 20,
                        elevation: 6,
                    }}>
                        <TouchableOpacity
                            onPress={() => Share.open(options)}
                        >
                            <View style={{ flexDirection: 'row', padding: 10, alignContent: 'center', alignItems: 'center' }}>
                                <Icon name="facebook-square" size={40} color="#1976D2" />
                                <Text style={{ fontSize: 20, color: "#1976D2", paddingLeft: 10 }}> Chia sẻ đến bạn bè</Text>
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{
                        backgroundColor: this.state.switchValue == false ? "#FAFAFA" : "#263238",
                        marginTop: 20,
                        elevation: 6,
                    }}>
                        <TouchableOpacity
                            onPress={() => this.handleEmail()}
                        >
                            <View style={{ flexDirection: 'row', padding: 10, alignContent: 'center', alignItems: 'center' }}>
                                <Icon name="comments" size={34} color="#1976D2" />
                                <Text style={{ fontSize: 20, color: "#1976D2", paddingLeft: 10 }}> Báo lỗi hoặc góp ý</Text>
                            </View>

                        </TouchableOpacity>
                    </View>
                    <View style={{
                        backgroundColor: this.state.switchValue == false ? "#FAFAFA" : "#263238",
                        marginTop: 20,
                        elevation: 6,
                        flexDirection: 'row',
                        padding: 10,
                        alignContent: 'center',
                        alignItems: 'center',
                    }}>
                        <MaterialCommunityIcons name="theme-light-dark" size={34} color="#1976D2" />
                        <Text style={{ fontSize: 20, color: "#1976D2", paddingLeft: 10 }}> Giao diện tối</Text>
                        <Switch
                            style={{ marginLeft: Dimensions.get('screen').width - 260 }}
                            onValueChange={this.toggleSwitch}
                            value={this.state.switchValue} />
                    </View>
                    <Button
                        title="Press me"
                        onPress={() => {
                            const date = new Date()
                            // date.setMinutes(date.getMinutes()) //set time ngay sau 1 phut
                            const title = "This is title"
                            const content = "this is content....."
                            fcmService.scheduleDailyNotification(title, content, date.getTime());
                        }}
                    />
                </ScrollView>
            </ SafeAreaView >

        )
    }
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