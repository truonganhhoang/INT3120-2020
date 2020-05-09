import React from 'react';
import {  View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem, Header, ButtonGroup } from 'react-native-elements';
import Words from '../components/Words';
import * as Animatable from 'react-native-animatable';
import styles from '../AppStyles/Word';
import PickColor from '../Config/Color'

const list = [
    {
      name: 'Thể thao',
      avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1d/Football_Pallo_valmiina-cropped.jpg/260px-Football_Pallo_valmiina-cropped.jpg',
      subtitle: 'Sports'
    },
    {
      name: 'Giáo dục',
      avatar_url: 'https://visages-du-benin.com/wp-content/uploads/2015/11/education.jpg',
      subtitle: 'Education'
    },
    {
      name: 'Công nghệ',
      avatar_url: 'https://cdn.shopify.com/s/files/1/1003/7610/products/Technological_vector_Wall_Mural_Wallpaper_a.jpg?v=1578614214',
      subtitle: 'Technology'
    },
    {
      name: 'Thời tiết',
      avatar_url: 'https://image.shutterstock.com/image-photo/plants-climate-change-concept-global-260nw-524691637.jpg',
      subtitle: 'Weather'
    },
    {
      name: 'Động vật',
      avatar_url: 'https://c0.wallpaperflare.com/preview/467/143/678/panda-china-bamboo-zoo.jpg',
      subtitle: 'Animals'
    },
    {
      name: 'Thời gian',
      avatar_url: 'https://media2.fdncms.com/clevescene/imager/u/original/31646840/clock.jpg',
      subtitle: 'Time'
    },
    {
        name: 'Ăn uống',
        avatar_url: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6d/Good_Food_Display_-_NCI_Visuals_Online.jpg/1200px-Good_Food_Display_-_NCI_Visuals_Online.jpg',
        subtitle: 'Food'
      },
      
  ]


export default class Word extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
      selectedIndex: 0
    }
    this.updateIndex = this.updateIndex.bind(this)
  }

  updateIndex (selectedIndex) {
    this.setState({selectedIndex})
  }

    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('name'),
        };
    };

    keyExtractor = (item, index) => index.toString()
    
    _onPress = (item) => {
      this.props.navigation.navigate(
        'NewWordList', {type: item.subtitle}
      )
    }

    renderSelectedCaterory = selectedIndex => {
      if (selectedIndex == 0){
        return (<FlatList
          style={styles().flatlist}
          keyExtractor={this.keyExtractor}
          data={list}
          renderItem={this.renderItem}
          showsVerticalScrollIndicator={false}
        />)
      }
      else if (selectedIndex == 1){
        return <Words type='favorite'/>
      } else if (selectedIndex == 2){
        return <Words type='remind'/>
      }
    }

    renderItem = ({ item, index }) => {
      let animation;
      if (index%2==0){
        animation = "fadeInLeft";
      }else{
        animation = "fadeInRight"
      }
      return(
      <Animatable.View animation={animation} delay={index*100}>
        <TouchableOpacity
          onPress = {() => this._onPress(item)}
          activeOpacity={0.5}
        >
          <ListItem
              title={item.name}
              subtitle={item.subtitle}
              subtitleStyle={styles().textColor}
              leftAvatar={{ source: { uri: item.avatar_url } }}
              titleStyle={styles().textColor}
              containerStyle={styles().listItemContainer}
              bottomDivider
              chevron
          />
        </TouchableOpacity>
      </Animatable.View>
    )}

    render(){
        const {navigate,state} = this.props.navigation;
        const buttons = ['Từ vựng', 'Từ yêu thích', 'Từ nhắc nhở']
        const { selectedIndex } = this.state
        const color = PickColor(global.darkmode);
        return(
            <View style={styles().container}>
                <Header
                    leftComponent={{ icon: 'arrow-back', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: 'Danh mục', style: { color: '#fff' } }}
                    backgroundColor={color.headerColor}
                />
                <ButtonGroup
                  onPress={this.updateIndex}
                  selectedIndex={selectedIndex}
                  buttons={buttons}
                  selectedButtonStyle={styles().selectedButton}
                  buttonStyle={styles().button}
                  containerStyle={{backgroundColor: color.cardColor, borderRadius: 5}}
                  innerBorderStyle={{color: color.cardColor}}
                />
                {this.renderSelectedCaterory(selectedIndex)}
            </View>
        );
    }
}
