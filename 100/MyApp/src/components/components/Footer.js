import React, { Component } from 'react';
import { Footer, FooterTab, Button, Icon, Text, Badge } from 'native-base';
import { StyleSheet } from 'react-native';
import { connect } from 'react-redux';
// import { connect } from 'react-redux';
class FooterScreen extends Component {
    constructor(props){
        super(props);
    }
    getMyCourses(){
      const { myCourses } = this.props;
      myCourses.filter((item) => {return item.payed == false})
      return myCourses;
    }
  render() {
    const { active1, active2 , active3, active4 , active5} = this.props;
    const mCs = this.getMyCourses();
    return (
        <Footer>
          <FooterTab>
            <Button 
                vertical active={active1}
                style={styles.button}
                onPress={this.props.Go1}
            >
              {/* <Badge><Text>2</Text></Badge> */}
              <Icon name='md-home' style={{fontSize:28}}/>
            </Button>
            <Button 
                vertical active={active2}
                style={styles.button}
                onPress={this.props.Go2}
            >
                <Icon name="md-list-box" style={{fontSize:28}}/>
            </Button>
            <Button 
                vertical badge
                active={active3}
                style={styles.button}
                onPress={this.props.Go3}
            >
              <Badge >
                <Text>{mCs.length}</Text>
              </Badge>
                <Icon name="md-basket" style={{fontSize:28}}/>
            </Button>
            <Button 
                vertical active={active4}
                style={styles.button}
                onPress={this.props.Go4}
            >
                <Icon name="md-notifications" style={{fontSize:28}}/>
            </Button>
            <Button 
                vertical active={active5}
                style={styles.button}
                onPress={this.props.Go5}
            >
                <Icon name="md-person" style={{fontSize:28}}/>
            </Button>
          </FooterTab>
        </Footer>
    );
  }
}
const styles = StyleSheet.create({
    button: {width: 50, height: 50}
});
function mapStateToProps(state){
  return{ 
    myCourses: state.myCourses
  }
}
export default connect(mapStateToProps)(FooterScreen);
// export default connect(null,)(FooterScreen);