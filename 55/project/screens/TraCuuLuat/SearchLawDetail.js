import * as React from 'react';
import { View, Text, Alert } from 'react-native';
import RowSearchlawDetail from '../../components/RowSearchLawDetail'
import { FlatList } from 'react-native-gesture-handler';

const dataMoto = [

    [   //chi dan
        {
            id: 1,
            name: 'Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.'
        },
        {
            id: 2,
            name: 'Không chấp hành hiệu lệnh của đèn tín hiệu giao thông.',
            penanty: 'Phạt tiền từ 600.000 đồng đến 1000.000 đồng.'
        },
        {
            id: 3,
            name: 'Không chấp hành hiệu lệnh, hướng dẫn của người điểu khiển giao thông hoặc người kiểm soát giao thông.',
            penanty: 'Phạt tiền từ 600.000 đồng đến 1000.000 đồng.'
        },
        {
            id: 4,
            name: 'Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường khi qua đường ngang, cầu chung.',
            penanty: 'Phạt tiền từ 200.000 đồng đến 300.000 đồng.'
        }
    ],

    [   //chuyen huong
        {
            id: 1,
            name: 'Không có báo hiệu xin vượt trước khi vượt.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
        {
            id: 2,
            name: 'Chuyển hướng không nhường quyền đi trước cho người đi bộ, xe lăn của người khuyết tật qua đường tại nơi có vạch kẻ đường dành cho người đi bộ.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
        {
            id: 3,
            name: 'Chuyển hướng không nhường quyền đi trước cho xe thô sơ đang đi trên phần đường dành cho xe thô sơ.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
        {
            id: 4,
            name: 'Chuyển hướng không nhường đường cho các xe đi ngược chiều.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
    ]



]

const dataCar = [

    [   //chi dan
        {
            id: 1,
            name: 'Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.'
        },
        {
            id: 2,
            name: 'Không chấp hành hiệu lệnh của đèn tín hiệu giao thông.',
            penanty: 'Phạt tiền từ 600.000 đồng đến 1000.000 đồng.'
        },
        {
            id: 3,
            name: 'Không chấp hành hiệu lệnh, hướng dẫn của người điểu khiển giao thông hoặc người kiểm soát giao thông.',
            penanty: 'Phạt tiền từ 600.000 đồng đến 1000.000 đồng.'
        },
        {
            id: 4,
            name: 'Không chấp hành hiệu lệnh, chỉ dẫn của biển báo hiệu, vạch kẻ đường khi qua đường ngang, cầu chung.',
            penanty: 'Phạt tiền từ 200.000 đồng đến 300.000 đồng.'
        }
    ],

    [   //chuyen huong
        {
            id: 1,
            name: 'Không có báo hiệu xin vượt trước khi vượt.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
        {
            id: 2,
            name: 'Chuyển hướng không nhường quyền đi trước cho người đi bộ, xe lăn của người khuyết tật qua đường tại nơi có vạch kẻ đường dành cho người đi bộ.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
        {
            id: 3,
            name: 'Chuyển hướng không nhường quyền đi trước cho xe thô sơ đang đi trên phần đường dành cho xe thô sơ.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
        {
            id: 4,
            name: 'Chuyển hướng không nhường đường cho các xe đi ngược chiều.',
            penanty: 'Phạt tiền từ 100.000 đồng đến 200.000 đồng.',
        },
    ]



]

const dataSearchLaw = [dataMoto, dataCar]

export default function SearchLawDetail({ route }) {
    const { type, index } = route.params;

    //let dataType = type == 'moto' ? dataMoto : dataCar;
    let data = dataSearchLaw[type][index];

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            renderItem={({ item }) => {
                return (
                    <RowSearchlawDetail element={item} />
                )
            }}
        >

        </FlatList>
    )
}