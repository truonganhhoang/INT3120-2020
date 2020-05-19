import { createStore } from 'redux';
import { persistReducer, persistStore } from 'redux-persist';
// import AsyncStorage from '@react-native-community/async-storage';
import { AsyncStorage } from 'react-native';


const image = {
    Learns: {
        img1: require('../images/khai_niem.jpg'),
        img2: require('../images/he_thong.jpg'),
        img3: require('../images/sa_hinh.jpg'),
        img4: require('../images/van_hoa.jpg'),
    }
}

//defaultState
const defaultState = {
    pass: true,

    Learns: [
        { id: 1, name: "KHÁI NIỆM VÀ QUY TẮC", img: image.Learns.img1, total: 75, passed: 10 },
        { id: 2, name: "BIỂN BÁO ĐƯỜNG BỘ", img: image.Learns.img2, total: 36, passed: 0 },
        { id: 3, name: "SA HÌNH", img: image.Learns.img3, total: 34, passed: 0 },
        { id: 4, name: "VĂN HÓA VÀ ĐẠO ĐỨC", img: image.Learns.img4, total: 36, passed: 0 },
    ],

    KhaiNiem: [
        {
            id: '1',
            question: 'Khái niệm "phần đường xe chạy" được hiểu như thế nào là đúng?',
            answer: [
                {
                    key: '1',
                    text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại.',
                    correct: true,
                    opened: false,
                },
                {
                    key: '2',
                    text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                    correct: false,
                    opened: false,
                },
                {
                    key: '3',
                    text: 'Là phần đường bộ được sử dụng cho các phương tiện giao thông qua lại, các công trình, thiết bị phụ trợ khác và dải đất dọc hai bên đường để đảm bảo an toàn giao thông.',
                    correct: false,
                    opened: false,
                }
            ],
            passed: false,
        },
        {
            id: '2',
            question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
            answer: [
                {
                    key: '1',
                    text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                    correct: true,
                    opened: false,
                },
                {
                    key: '2',
                    text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                    correct: false,
                    opened: true,
                },
                {
                    key: '3',
                    text: 'Tất cả các ý trên.',
                    correct: false,
                    opened: false,
                }
            ],
            passed: false,
        },
        {
            id: '3',
            question: '"Vạch kẻ đường" được hiểu như thế nào là đúng?',
            answer: [
                {
                    key: '1',
                    text: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.',
                    correct: true,
                    opened: false,
                },
                {
                    key: '2',
                    text: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.',
                    correct: false,
                    opened: false,
                },
                {
                    key: '3',
                    text: 'Tất cả các ý trên.',
                    correct: false,
                    opened: false,
                }
            ],
            passed: false,
        }
    ]
}

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
}
//Action
const reducer = (state = defaultState, action) => {
    switch (action.type) {
        case 'add': return {
            ...state,
            Learns: state.Learns.map(e => {
                if (e.id != action.id) return e;
                return {
                    ...e,
                    passed: e.passed + 1,
                }
            })
        };

        case 'reset-learn': return {
            ...state,
            Learns: state.Learns.map(e => {
                // if (e.id != action.id) return e;
                return {
                    ...e,
                    passed: 0,
                }
            })
        };

        case 'toggle': return {
            ...state,
            KhaiNiem: state.KhaiNiem.map(e => {
                if (e.id != action.id) return e;
                return {
                    ...e,
                    passed: !e.passed,
                }
            })
        };

        case 'toggleAnswer': return {
            ...state,
            KhaiNiem: state.KhaiNiem.map(e => {
                if (e.id != action.questionNUmber) return e;
                return {
                    ...e,
                    answer: state.KhaiNiem[questionNUmber].answer.map(e1 => {
                        if (e1.key != action.anserNumber) return e1;
                        return {
                            ...e1,
                            opened: !e1.opened,
                        }
                    })
                }
            })
        }
    }

    return state;
}

const pReducer = persistReducer(persistConfig, reducer);

// Create Store


export const store = createStore(reducer);
export const persistor = persistStore(store);