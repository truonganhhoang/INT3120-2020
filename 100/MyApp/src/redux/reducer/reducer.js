const defaultState ={
    courses: [
    {id: 1, author:"Phạm Quyết Thắng", date:"30/04/2020", price:"200.000 ₫", name: "Bootstrap 4 cơ bản", image:require("../../img/001.jpg"), beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true, hot: false},
    {id: 2, author:"Nguyễn Thị Mây", date:"22/04/2020", price:"100.000 ₫", name: "Bootstrap 4 cơ bản", image:require("../../img/002.png"), beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: false, hot: true},
    {id: 3, author:"Đặng Anh Sơn", date:"26/04/2020", price:"210.000 ₫", name: "Bootstrap 4 cơ bản", image:require("../../img/003.png"), beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true, hot: false},
    {id: 4, author:"Ngô Thị Hoài Thanh", date:"28/04/2020", price:"110.000 ₫", name: "Bootstrap 4 cơ bản", image:require("../../img/004.jpg"), beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: false, hot: false},
    {id: 5, author:"Nguyễn Anh Tuấn", date:"27/04/2020", price:"130.000 ₫", name: "Bootstrap 4 cơ bản", image:require("../../img/005.jpg"), beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true, hot: true}
    ],
    filterCourses: 'SHOW_ALL',
};
  
// reducer -> tien doan nhung hanh dong se xay ra
const reducer = ( state = defaultState, action )=>{
    if(action.type === 'ON_BOOKMARK'){
        return {
            ...state,
            courses : state.courses.map(e => {
            if (e.id !== action.id) return e;
            return { ...e, onMark: !e.onMark };
        })
    };
    }
    if(action.type === 'FILTER_SHOW_ALL'){
        return {...state, filterCourses: 'SHOW_ALL'};
    }
    if(action.type === 'FILTER_BOOK_MARK'){
        return {...state, filterCourses: 'BOOK_MARK'};
    }
    if(action.type === 'FILTER_HOT'){
        return {...state, filterCourses: 'SHOW_HOT'};
    }
    return state;
};
export default reducer;
