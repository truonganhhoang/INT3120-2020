import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity, TextInput, Alert  } from 'react-native'
import auth from '@react-native-firebase/auth';
import { Container, Header, Left, Button, Icon, Body, Title, Right, Content } from 'native-base';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import onLogin from '../../redux/action';
import { connect } from 'react-redux';
class Login extends Component {
    constructor(props) {
        super(props);
        this.unsubscriber = null;
        this.state={
            // isAuthenticated: false,
            email: '',
            password: '',
            user: null,
        }
    }
    setLogin(){
      this.props.dispatch({ type: 'ON_LOGIN' });
    }
    onLogin(){
      auth().signInWithEmailAndPassword( this.state.email, this.state.password)
       .then(() => 
      // {
      //   //   Alert.alert(
      //   //     'Thong bao',
      //   //     'Dang nhap thanh cong',
      //   //     [
      //   //         { text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
      //   //         // { text: 'Quay lai dang nhap', onPress: () => this.props.navigation.goBack()},
      //   //     ],
      //   // );
      //   this.setState({
      //       email: '',
      //       password: '',
      //       // isAuthenticated : true
      //   });
        
      //   this.props.navigation.goBack();
      // }
      this.setLogin()
      )
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }
    
        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }
    
        console.error(error);
      });
    }
    render() {
        return (
          <Container>
            <Header>
              <Left>
                <Button transparent onPress={() => this.props.navigation.goBack()}>
                  <Icon name='arrow-back' size={32} />
                </Button>
              </Left>
              <Body>
                <Title>Đăng nhập</Title>
              </Body>
              <Right>
                <Button transparent>
                  <TouchableOpacity onPress={() => this.props.navigation.navigate('Screen3')} >
                    <Text style={{fontSize: 16, color: "#fff"}}>Cancel</Text>
                  </TouchableOpacity>
                </Button>
              </Right>  
            </Header>
            <Content>
              <View style={{
                marginTop: 112,
                paddingHorizontal: 8,
                justifyContent: "center",
                alignItems: "center",
              }} >
                  <TextInput
                  style={Styles.input}
                  autoCapitalize='none'
                  onChangeText={(email) => this.setState({email})}
                  value={this.state.email} placeholder="Tên tài khoản"
                  />
                  <TextInput
                  style={Styles.input}
                  autoCapitalize='none'
                  onChangeText={(password) => this.setState({password})}
                  value={this.state.password} placeholder="Mât khẩu"
                  secureTextEntry={true}
                  />
                  <TouchableOpacity
                    style={Styles.button}
                    onPress={()=> (this.onLogin())}
                  >
                    <Text style={Styles.text}>Đăng nhập</Text>
                  </TouchableOpacity>
                  <View style={{
                    flexDirection:"row",
                    justifyContent:"space-around",
                    width: "100%",
                    marginTop: 32,
                  }}>
                    <TouchableOpacity style={Styles.link}>
                        <FontAwesome name="facebook-square" color="#1976D2" size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.link}>
                        <FontAwesome name="github" color="#1976D2" size={28} />
                    </TouchableOpacity>
                    <TouchableOpacity style={Styles.link}>
                        <FontAwesome name="google-plus" color="#1976D2" size={28} />
                    </TouchableOpacity>
                  </View>
                  <View style={{
                    marginTop: 32,
                    flexDirection:"row",
                    justifyContent:"center",
                    alignItems:"center"
                  }}>
                    <Text style={{color:"#000", fontSize:16, fontWeight: "600"}}>Bạn chưa có tài khoản ? </Text>
                    <TouchableOpacity
                      onPress = {() => this.props.navigation.navigate('Signup')}
                    >
                      <Text style={{color:"hotpink", fontSize:16, fontWeight: "800", fontStyle:"italic"}}>Đăng ký ngay</Text>
                    </TouchableOpacity>
                  </View>
              </View>
            </Content>
           
        </Container>
        )
    }
}
function mapStateToProps(state){
  return{ 
      onLogin : state.onLogin
  };
}
export default connect(mapStateToProps, {onLogin})(Login);
const Styles = StyleSheet.create({
    input:{
        width: "100%", 
        paddingTop: 20, 
        margin: 10, 
        fontSize: 20, 
        fontWeight: "800", 
        borderRadius: 8,
        color: "#000",
        borderBottomColor: "gray",
        borderBottomWidth: 0.5,
        paddingHorizontal:16
    },
    button:{
      width: "100%",
      backgroundColor:"#0D47A1",
      marginTop: 20,
      marginBottom: 8,
      padding: 16,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 4,
    },
    text:{
      fontSize: 22,
      color: "#fff",
    },
    link:{
      padding: 4,
      backgroundColor: "#E3F2FD",
      width: 80,
      justifyContent:"center",
      alignItems:"center",
      borderRadius: 8,
    }
})