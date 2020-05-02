import React, { Component } from 'react';
import Router from './src/components/routes/Router';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
export default class App extends Component {
  render() {
    console.disableYellowBox = true; 
    return (
      <Provider store={store}>
        <Router />
      </Provider>
    )
  }
}
const defaultState = {
  courses: [
    {id: 1, author:"Phạm Quyết Thắng", date:"30/04/2020", price:"200.000 ₫", name: "Bootstrap 4 cơ bản", image:"../../img/005.jpg", beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true},
    {id: 2, author:"Nguyễn Thị Mây", date:"22/04/2020", price:"100.000 ₫", name: "Bootstrap 4 cơ bản", image:"../../img/005.jpg", beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: false},
    {id: 3, author:"Đặng Anh Sơn", date:"26/04/2020", price:"210.000 ₫", name: "Bootstrap 4 cơ bản", image:"../../img/005.jpg", beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true},
    {id: 4, author:"Ngô Thị Hoài Thanh", date:"28/04/2020", price:"110.000 ₫", name: "Bootstrap 4 cơ bản", image:"../../img/005.jpg", beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: false},
    {id: 5, author:"Nguyễn Anh Tuấn", date:"27/04/2020", price:"130.000 ₫", name: "Bootstrap 4 cơ bản", image:"../../img/005.jpg", beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true}
  ]
};
// reducer -> tien doan nhung hanh dong se xay ra
const reducer = ( state = defaultState, action )=>{
  return state;
};
// tao ra stores
const store = createStore(reducer);