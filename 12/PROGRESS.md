# Quá trình học và làm bài tập

## 2020-03-12

- Cài đặt Angular, Ionic, Cordova, Android Studio

```shell
yarn global add @ionic/cli @angular/cli cordova
ionic config set -g npmClient=yarn
```

- Khởi tạo app

```shell
ionic start coursera-vnu tabs --type=angular
ng config -g cli.packageManager yarn
```

- Chạy thử

```shell
yarn start
# truy cập link http://localhost:4200
```

- Update Ionic và Angular lên phiên bản mới nhất

```shell
ng update @angular/core@~9 @angular/cli@~9
yarn add @ionic-native/core @ionic-native/splash-screen @ionic-native/status-bar @ionic/angular
```

- Cài và cấu hình Prettier

## 2020-03-13

- Tạo account Ionic và link project

```shell
ionic login
ionic link
```

- Tích hợp framework Cordova, Android

```shell
ionic i add cordova --add
ionic cdv platform add android
```

- Sử dụng Yarn khi chạy Angular app (nếu trong một project có cả file `package-lock.json` và `yarn.lock`, app sẽ không build được)

```shell
ng config cli.packageManager=yarn
```

- Build và run app trên thiết bị Android(cần cắm cap USB nối điện thoại và máy tính). Nếu không được, hãy thử cài lại `@angular/cli`(local) trước, thậm chí xóa `node_modules` để cài lại toàn bộ package

```shell
# cách làm từng bước
ionic cdv prepare android
ionic cdv compile android
ionic cdv build android
ionic cdv run android -l

# NHƯNG thực ra chỉ cần chạy lệnh này là đủ
ionic cdv run android -l
# cần option -l để sử dụng tính năng live reload
# nếu bỏ option -l, app có thể chạy mà không cần development server
```

# 2020-03-17

- Tạo app icon và ảnh cho splash screen, lần lượt là các file `resources/icon.png` và `resources/splash.png`
- Chạy lệnh sau để generate ảnh cho nhiều kích thước khác nhau:

```shell
ionic cdv resources
```

# 2020-03-19

- Generate 5 tabs cho app: *learn*, *explore*, *recommended*, *download*, *profile* và cập nhật component tab bar

```shell
ionic g page home -f
ionic g page explore -f
ionic g page explore -f
ionic g page recommended -f
ionic g page profile -f
```

- Đổi tên thư mục từ `group12` thành `12`
