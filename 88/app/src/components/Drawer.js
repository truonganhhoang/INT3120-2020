import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  ImageBackground,
  Image,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import PlatformTouchable from '../utils/touchable';
import {useDispatch, useSelector, shallowEqual} from 'react-redux';

import {goToPage, changeHeader} from '../actions/main';

/**
 * List features of this app
 */
const listContent = [
  {
    iconName: 'list',
    title: 'Home',
  },
  {
    iconName: 'code',
    title: 'Code Playground',
  },
  {
    iconName: 'message-square',
    title: 'Q&A Discussion',
  },
  {
    iconName: 'award',
    title: 'Leaderboard',
  },
  {
    iconName: 'grid',
    title: 'Similar Courses',
  },
  {
    iconName: 'book',
    title: 'Glossary',
  },
  {
    iconName: 'user-plus',
    title: 'Invite Friend',
  },
  {
    iconName: '', // gray bar
    title: '',
  },
  {
    iconName: 'settings',
    title: 'Settings',
  },
  {
    iconName: 'star',
    title: 'Rate',
  },
];

/**
 *
 * @param {Object} props
 * @property {number} id - index of item in list
 * @property {String} iconName - name of icon (see more at {@link https://oblador.github.io/react-native-vector-icons/})
 * @property {String} title - title of item
 * @property {boolean} selected - item is focused
 */
const DrawerItem = (props) => {
  const {iconName, title, selected} = props;
  const dispatch = useDispatch();

  const onPress = () => {
    props.closeDrawer();
    // dispatch(selectDrawerItem(id));
    // dispatch(changeNavHeader(title === 'Home' ? 'JavaScript Tutorial' : title));
    dispatch(goToPage(title));
    dispatch(changeHeader(title === 'Home' ? 'JavaScript Tutorial' : title));
  };

  return iconName ? (
    <PlatformTouchable
      style={
        selected
          ? [styles.itemContainer, {backgroundColor: '#e0e0e0'}]
          : styles.itemContainer
      }
      rippleColor="rgba(0, 0, 0, .085)"
      onPress={onPress}>
      <Icon
        name={iconName}
        style={[styles.icon, {color: selected ? '#00bcd4' : '#757575'}]}
      />
      <Text style={{color: selected ? '#00bcd4' : '#757575'}}>{title}</Text>
    </PlatformTouchable>
  ) : (
    <View
      style={{height: 2, backgroundColor: '#e0e0e0', marginVertical: 8}}
    /> /* gray bar */
  );
};

/**
 * All contents of drawer.
 */
const Drawer = (props) => {
  const nowPage = useSelector((state) => state.main.page, shallowEqual);

  return (
    <View style={styles.container}>
      <PlatformTouchable
        style={styles.userContainer}
        rippleColor="rgba(0, 0, 0, .085)">
        <ImageBackground
          source={require('../assets/img/menu_cover.png')}
          imageStyle={{opacity: 0.8}}
          style={styles.userBackground}
          resizeMode="cover">
          <Image
            source={require('../assets/img/no_avatar.jpg')}
            resizeMode="cover"
            style={styles.userIcon}
          />
          <Text style={styles.userName}>Vũ Chức</Text>
          <View style={styles.userFooter}>
            <Text style={styles.userEmail}>vuchuc781999@gmail.com</Text>
            <Text style={styles.signOut}>SIGN OUT</Text>
          </View>
        </ImageBackground>
      </PlatformTouchable>
      <ScrollView style={styles.featureContainer}>
        {listContent.map((value, index) => (
          <DrawerItem
            key={index}
            iconName={value.iconName}
            title={value.title}
            selected={nowPage === value.title}
            closeDrawer={props.closeDrawer}
          />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  userContainer: {
    height: 180,
    backgroundColor: '#D3D3D3',
  },
  userBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    paddingBottom: 15,
    paddingHorizontal: 15,
  },
  userIcon: {
    width: 65,
    height: 65,
    borderRadius: 40,
    backgroundColor: '#ff7777',
    marginBottom: 17,
  },
  userFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 4,
    color: '#fff',
  },
  userName: {
    color: '#fff',
    letterSpacing: 0.5,
  },
  userEmail: {
    color: '#fff',
  },
  signOut: {
    color: '#fff',
    fontWeight: '700',
  },
  featureContainer: {
    marginTop: 8,
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    height: 48,
    alignItems: 'center',
  },
  icon: {
    width: 56,
    textAlign: 'center',
    fontSize: 22,
  },
});

export default Drawer;

