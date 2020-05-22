const defaultState ={
    courses: [
    {id: 1, idAuthor:1, date:"30/04/2020", price:200, name: "React/Redux cơ bản", image:require("../../img/002.png"), beta: "Redux là một predictable state management tool cho các ứng dụng Javascript. Nó giúp bạn viết các ứng dụng hoạt động một cách nhất quán.", onMark: true, hot: false, type: 1},
    {id: 2, idAuthor:2, date:"29/04/2020", price:150, name: "Godot engine cơ bản", image:require("../../img/godot.png"), beta: "Godot là một công cụ trò chơi mã nguồn mở, 2D và 3D, đa nền tảng, miễn phí và được phát hành theo giấy phép MIT.", onMark: false, hot: true, type: 2},
    {id: 3, idAuthor:7, date:"12/05/2020", price:240, name: "Game 2D platform", image:require("../../img/game.png"), beta: "Trò chơi platform, hoặc trò chơi nền tảng, là một thể loại trò chơi video và thể loại phụ của trò chơi hành động.", onMark: true, hot: false, type: 3},
    {id: 4, idAuthor:4, date:"22/04/2020", price:100, name: "HTML 5 cơ bản", image:require("../../img/001.jpg"), beta: "HTML hay HyperText Markup Language, là thành phần quan trọng nhất của World Wide Web. Nó là ngôn ngữ dùng để mô tả những gì một trang web hiển thị", onMark: false, hot: true, type: 3},
    {id: 5, idAuthor:3, date:"26/04/2020", price:210, name: "Frontend cơ bản", image:require("../../img/003.png"), beta: "HTML, CSS và Javascript cơ bản sẽ giúp bạn bước đầu xây dựng được những trang web.", onMark: true, hot: false, type: 4},
    {id: 6, idAuthor:6, date:"28/04/2020", price:110, name: "Phát triển web cơ bản", image:require("../../img/004.jpg"), beta: "Với những công cụ như HTML, CSS, JS, PHP, ... bạn sẽ có thể xây dựng những trang web với đầy đủ những chức năng cơ bản.", onMark: false, hot: false, type: 5},
    {id: 7, idAuthor:5, date:"27/04/2020", price:130, name: "Bootstrap 4 cơ bản", image:require("../../img/005.jpg"), beta: "Bootstrap 4 (viết tắt là BS4) là phiên bản mới của Bootstrap, là framework HTML, CSS và JavaScript phổ biến nhất để thiết kế web đáp ứng, ưu tiên trên nền tảng di động.", onMark: true, hot: true, type: 6},
    ],
    filterCourses: 'SHOW_ALL',
    authors: [
        {id: 1, name: "Phạm Quyết Thắng", avt:require("../../img/pqt.jpg")},
        {id: 2, name: "Phạm Mai Ly", avt:require("../../img/lyly.jpg")},
        {id: 3, name: "Đặng Anh Sơn", avt:require("../../img/das.jpg")},
        {id: 4, name: "Nguyễn Thị Mây", avt:require("../../img/may.jpg")},
        {id: 5, name: "Nguyễn Anh Tuấn", avt:require("../../img/nat.jpg")},
        {id: 6, name: "Ngô Thị Hoài Thanh", avt:require("../../img/ntht.jpg")},
        {id: 7, name: "Trần Thanh Thúy", avt:require("../../img/ttt.jpg")},
    ],
    myCourses : [
        {id: 1, key: 3, payed: false},
    ],
    onLogin: false,
    myBill : 240,
};
  
// reducer -> tien doan nhung hanh dong se xay ra
const reducer = ( state = defaultState, action )=>{
    switch(action.type){
        case 'ON_BOOKMARK':
            return {
                ...state,
                courses : state.courses.map(e => {
                if (e.id !== action.id) return e;
                return { ...e, onMark: !e.onMark };
            })};
        case 'FILTER_SHOW_ALL':
            return {...state, filterCourses: 'SHOW_ALL'};
        case 'FILTER_BOOK_MARK':
            return {...state, filterCourses: 'BOOK_MARK'};
        case 'FILTER_HOT':
            return {...state, filterCourses: 'SHOW_HOT'};
        case 'ADD_CART':
            return {
                ...state,
                myBill: state.myBill + action.price,
                myCourses: [{
                    id: state.myCourses.length + 1, 
                    key: action.key,
                    payed: false,
                }].concat(state.myCourses) // noi len dau
            };
        case 'DELETE_CART':
            return {
                ...state,
                myCourses: state.myCourses.filter((index) => index !== action.payload)
            };
        case 'ON_LOGIN':
            return {
                ...state,
                onLogin: true
            };
        case 'ON_LOGOUT':
            return {
                ...state,
                onLogin: false
            };
        case 'ON_PAY':
            return {
                ...state,
                myCourses : state.myCourses.map(e => {
                return { ...e, payed: !e.payed }}
                )
            };
        default:
            break;
    };
    return state;
};
export default reducer;
