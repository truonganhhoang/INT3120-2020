import biencam from '../../icon/alert/biencam.jpg'
import camdinguocchieu from '../../icon/alert/camdinguocchieu.jpg'
import chongoatnguyhiem from '../../icon/alert/bienbaonguyhiem/chongoatnguyhiem.jpg'
import chongoatnguyhiembenphai from '../../icon/alert/bienbaonguyhiem/chongoatnguyhiembenphai.jpg'

export const dataLearnTheory = [
    {
        id: 1,
        label: "Khái niệm và quy tắc",
        quantity: 75,
        questions: [
            {
                id:1,
                question:'Khái niệm "đường bộ" được hiểu như thế nào là đúng?',
                answers:[
                    {   id:1,
                        answer: 'Đường bộ, cầu đường bộ',
                    },
                    {   id:2,
                        answer: 'Hầm đường bộ, bến phà đường bộ',
                    },
                    {   id:3,
                        answer: 'Đường, cầu đường bộ, hầm đường bộ, bến phà đưòng bộ và các công trình phụ trợ khác',
                    },
                ],
                correct_answer:[1,2],
                description:`Bởi vì "các công trình phụ trợ khác" ở đây chúng ta không biết nó là công trình gì cả cho nên ta sẽ loại đáp án này đi. Những câu nào mà cho kiểu tương tự kiểu không rõ ràng như ý ở trên thì loại đi.`

            },
            {
                id:2,
                question:'"Vạch kẻ đường" được hiểu như thế nào là đúng ?',
                answers:[
                    {   id:1,
                        answer: 'Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại',
                    },
                    {   id:2,
                        answer: 'Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường',
                    },
                    {   id:3,
                        answer: 'Tất cả các ý nên trên',
                    },
                ],
                correct_answer:[1],
                description:`Vạch kẻ đừong không tính vị trí đỗ, chỉ xét vị trí dừng. Đáp án 2 sai vì có "đỗ trên đường"`

            },
        ]
    },
    {
        id: 2,
        label: "Hệ thống biển báo đường bộ",
        quantity: 35,
        question: []
    },
    {
        id: 3,
        label: "Các thế sa hình",
        quantity: 35,
        question: []
    },
    {
        id: 4,
        label: "Văn hoá, đạo đức nghề nghiệp người lái xe",
        quantity: 5,
        question: []
    }
]
export const dataNoticeBoard = [
    {
        id:0,
        label:'BIỂN BÁO CẤM',
        listItem:[
            {
                id:0,
                label:'Đường cấm',
                image:biencam,
                description:'Báo đường cấm tất cả các loại phương tiện (cơ giới và thô sơ) đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định'
            },
            {
                id:1,
                label:'Cấm đi ngược chiều',
                image:camdinguocchieu,
                description:'Báo đường cấm tất cả các loại xe (cơ giới và thô sơ) đi vào theo chiều đặt biển, trừ các xe được ưu tiên theo quy định'
            },
        ]
    },
    {
        id:1,
        label:'BIỂN BÁO NGUY HIỂM',
        listItem:[
            {
                id:0,
                label:'Chỗ ngoặt nguy hiểm vòng bên trái',
                image:chongoatnguyhiem,
                description:'Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên trái'
            },
            {
                id:1,
                label:'Chỗ ngoặt nguy hiểm vòng bên phải',
                image:chongoatnguyhiembenphai,
                description:'Báo trước sắp đến một chỗ ngoặt nguy hiểm phía bên phải'
            },
        ]
    },

]
export const dataTips = [
    {
        id:0,
        label:'MẸO THI LÝ THUYẾT',
        listItem:[
            {
                id:0,
                label:'Trong phần Khái niệm có những chữ " Được hiểu thế nào là đúng" thì áp dụng',
                description: [
		"Vạch-Phổ-Dải-Phần (Chọn đáp án là 1)",
		"Ưu - Phương - Làn (Chọn đáp án là 2)",
		"Bộ (Chọn đáp án là 1 và 2)"]
            },
            {
                id:1,
                label:'Phương tiện giao thông đườn bộ gồm cơ giới và thô sơ thì chọn 1. Phương tiện tham gia giao thông đường bộ gồm cơ giới, xe thô sơ, xe máy chuyên dùng thì chọn cả 1 và 2',
                description:['Có 4 nguyên tắc nhường đường:','(1) Không có vòng xuyến nhường phải;', '(2) Có vòng xuyến nhường trái;','(3) Nhường đường cho xe ưu tiên, đường chính;','(4) Nhường đường cho người đi bộ']
            },
        ]
    },
    {
        id:1,
        label:'MẸO THI THỰC HÀNH',
        listItem:[
            {
                id:0,
                label:'Điều đầu tiên và cơ bản nhất là bạn phải biết đi xe máy',
                description:['Việc trượt thực hành nhiều một phần nguyên nhân là do các bạn chưa biết đi xe máy. Vậy muốn thi đỗ thì đầu tiên phải biết đi xe máy.']
		},
            {
                id:1,
                label:'Tập trước vòng số 8 ở nhà',
                description:['Phần thi trượt thực hành nhiều nhất là phần thi vòng số 8. Do đó dù bạn đã biết đi xe máy mà chưa từng tập qua vòng số 8 thi cũng rất dễ bị trượt. Bạn nên luyện tập phần thi này càng nhiều càng tốt.']
            },
        ]
    },

]
export const dataSearchScreen =
[
  // motorbike
    {
        id : 0,
        iconName : 'motorcycle',
        listItem:
        [
          {
            type : 0,
            name : 'Điều khiển xe đi không đúng chiều, phần đường, làn đường',
            fee  : '300.000 - 400.000 vnđ'
          },
          {
            type : 3,
            name : 'Dừng,đỗ xe trong hầm đường bộ sai quy định',
            fee  : '500.000 - 1.000.000 vnđ'
          }
        ]
    },
    // car
    {
      id:1,
      iconName : 'car',
      listItem: [
        {
          type : 0,
          name : 'Điều khiển xe đi không đúng chiều, phần đường, làn đường',
          fee  : '300.000 - 400.000 vnđ'
        },
        {
          type : 3,
          name : 'Dừng,đỗ xe trong hầm đường bộ sai quy định',
	        fee  : '500.000 - 1.000.000 vnđ'
        }]
    }
]
