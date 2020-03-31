import React from 'react';
import { StyleSheet, View, Text, Button, FlatList } from 'react-native';
import { ListItem, Header } from 'react-native-elements'

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
        name: 'Công nghệ',
        avatar_url: 'https://cdn.shopify.com/s/files/1/1003/7610/products/Technological_vector_Wall_Mural_Wallpaper_a.jpg?v=1578614214',
        subtitle: 'Technology'
      },
      
  ]


export default class Word extends React.Component{
    static navigationOptions = ({navigation}) => {
        return{
            title: navigation.getParam('name'),
        };
    };

    keyExtractor = (item, index) => index.toString()
    
    _onPress = (item) => {
      this.props.navigation.navigate(
        'NewWordList', {name:'NewWordList'}
    )}

    renderItem = ({ item }) => (
    <ListItem
        onPress = {() => this._onPress(item)}
        style={styles.listitem}
        title={item.name}
        subtitle={item.subtitle}
        leftAvatar={{ source: { uri: item.avatar_url } }}
        bottomDivider
        chevron
    />
    )

    render(){
        const {navigate,state} = this.props.navigation;
        return(
            <View>
                <Header
                    leftComponent={{ icon: 'reply', color: '#fff', onPress: () => navigate('Home') }}
                    centerComponent={{ text: 'Danh mục', style: { color: '#fff' } }}
                />
                <FlatList
                    style={styles.flatlist}
                    keyExtractor={this.keyExtractor}
                    data={list}
                    renderItem={this.renderItem}
                    showsVerticalScrollIndicator={false}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    flatlist:{
        paddingLeft: 16,
        paddingRight: 16
    },
    listitem:{
        marginTop: 8,
        marginBottom: 8
    }
});

