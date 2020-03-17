import { NativeModules } from "react-native";

var categoryList = [
  {
    key: "1",
    title: "People",
    description: "Con người",
    images: [
      {
        icon: require("../src/assets/icon/peopleIcon.png"),
        background:
          "https://www.eblockbuzz.com/wp-content/uploads/2019/09/Diverse-team-1260x840.jpg"
      }
    ]
  },
  {
    key: "2",
    title: "Home",
    description: "Nhà cửa",
    images: [
      {
        icon: require("../src/assets/icon/home.png"),
        background:
          "https://www.incimages.com/uploaded_files/image/970x450/getty_856794670_385651.jpg"
      }
    ]
  },
  {
    key: "3",
    title: "Health",
    description: "Sức khỏe",
    images: [
      {
        icon: require("../src/assets/icon/heart.png"),
        background:
          "https://baovegiadinhviet.com/wp-content/uploads/2018/12/ANTI-1.jpg"
      }
    ]
  },
  {
    key: "4",
    title: "Shopping",
    description: "Mua sắm",
    images: [
      {
        icon: require("../src/assets/icon/smart-cart.png"),
        background:
          "https://i.doanhnhansaigon.vn/2018/08/10/muamuasam-1533885254.jpg"
      }
    ]
  },
  {
    key: "5",
    title: "Food",
    description: "Thức ăn",
    images: [
      {
        icon: require("../src/assets/icon/burger.png"),
        background:
          "https://blogs.biomedcentral.com/on-medicine/wp-content/uploads/sites/6/2019/09/iStock-1131794876.t5d482e40.m800.xtDADj9SvTVFjzuNeGuNUUGY4tm5d6UGU5tkKM0s3iPk-620x342.jpg"
      }
    ]
  },
  {
    key: "6",
    title: "Study",
    description: "Học tập",
    images: [
      {
        icon: require("../src/assets/icon/college-graduation.png"),
        background:
          "https://images.pexels.com/photos/301920/pexels-photo-301920.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    key: "7",
    title: "Appearance",
    description: "Hình dạng",
    images: [
      {
        icon: require("../src/assets/icon/store.png"),
        background:
          "https://d1bv4heaa2n05k.cloudfront.net/user-images/1536841119851/shutterstock-1065828335_main_1536841129862.jpeg"
      }
    ]
  },
  {
    key: "8",
    title: "Eating out",
    description: "Ăn ngoài",
    images: [
      {
        icon: require("../src/assets/icon/plate-fork-and-knife.png"),
        background:
          "https://secure.i.telegraph.co.uk/multimedia/archive/02999/restaurant_2999753b.jpg"
      }
    ]
  },
  {
    key: "9",
    title: "Leisure",
    description: "Giải trí",
    images: [
      {
        icon: require("../src/assets/icon/beach.png"),
        background:
          "https://www.whatsuplife.in/kolkata/blog/wp-content/uploads/2018/04/final.jpg"
      }
    ]
  },
  {
    key: "10",
    title: "Environment",
    description: "Môi trường",
    images: [
      {
        icon: require("../src/assets/icon/hands-and-gestures.png"),
        background:
          "https://images.pexels.com/photos/302804/pexels-photo-302804.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    key: "11",
    title: "Services",
    description: "Dịch vụ",
    images: [
      {
        icon: require("../src/assets/icon/bank.png"),
        background:
          "https://images.pexels.com/photos/2244746/pexels-photo-2244746.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    key: "12",
    title: "Work",
    description: "Việc làm",
    images: [
      {
        icon: require("../src/assets/icon/wrench.png"),
        background:
          "https://images.pexels.com/photos/374831/pexels-photo-374831.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    key: "13",
    title: "Transportation",
    description: "Giao thông",
    images: [
      {
        icon: require("../src/assets/icon/bus.png"),
        background:
          "https://images.pexels.com/photos/159148/regional-train-rail-cars-platform-deutsche-bahn-159148.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  },
  {
    key: "14",
    title: "Sports",
    description: "Thể thao",
    images: [
      {
        icon: require("../src/assets/icon/soccer-ball.png"),
        background:
          "https://images.pexels.com/photos/248547/pexels-photo-248547.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
      }
    ]
  }
];

module.exports = categoryList;
