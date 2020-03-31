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

- Generate 5 tabs cho app: `learn`, `explore`, `recommended`, `downloads`, `profile` và cập nhật component tab bar

```shell
ionic g page home -f
ionic g page explore -f
ionic g page explore -f
ionic g page recommended -f
ionic g page profile -f
```

- Đổi tên thư mục từ `group12` thành `12`

# 2020-03-21

- Chuyển 5 thư mục `app/{learn,explore,recommended,downloads,profile}` vào thư mục `app/tabs`.
- Thêm 3 pages: `intro`, `sign in`, `sign up`

# 2020-03-22

- Cài đặt husky/githooks

# 2020-03-23

- Update prettier, thêm rules trailingComma
- Update angular từ 9.0.6 lên 9.0.7

# 2020-03-26

- Update angular từ 9.0.7 lên 9.1.0
- Tích hợp với firebase, cài đặt `@angular/fire`
- Thêm các màn hình cho 5 tabs:
  - explore:
    - overview
    - trending courses
    - popular courses
    - top rated courses
    - search
    - course details
  - recommended:
    - courses
    - course details
  - learn
    - courses
    - course details
  - downloads
    - courses
    - course details
  - profile
    - my profile
    - settings

# 2020-03-27

- Cài đặt `tslint-plugin-prettier`, tự động format khi sử dụng linter.
- Nested routes trong tab

# 2020-03-28

- Thêm html cho trang intro.
- Gắn link đến trang đăng ký và đăng nhập.

# 2020-03-29

- Thêm html cho trang đăng nhập và đăng ký, sử dụng Angular Material.
- Thêm ảnh.

# 2020-03-30

- Validate form đăng ký và đăng nhập.
- Dialog cho tính năng forgot password.

# 2020-03-31

- Thêm config cho firebase.
- Thêm các module auth, database và firestore `vào app.module`.
- Tạo các services đăng ký, đăng nhập.
- Tính năng đăng ký với email và mật khẩu.
