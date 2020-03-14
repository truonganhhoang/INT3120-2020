# Quá trình học và làm bài tập

## 2020-03-12

- Cài đặt Angular, Ionic, Cordova

```shell
yarn global add @ionic/cli @angular/cli cordova
ionic config set -g npmClient=yarn
```

- Khởi tạo app

```shell
ionic start coursera-vnu tabs --type=angular
```

- Chạy thử

```shell
yarn start
# truy cập link http://localhost:4200
```

- Update Ionic và Angular lên phiên bản mới nhất
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

- Build và run app trên thiết bị Android. Nếu không được, hãy thử cài lại `@angular/cli`(local) trước, thậm chí xóa `node_modules` để cài lại toàn bộ package

```shell
# cách làm từng bước
ionic cdv prepare android
ionic cdv compile android
ionic cdv build android
ionic cdv run android -l

# NHƯNG thực ra chỉ cần chạy lệnh này là đủ
ionic cdv run android -l
# cần option -l để sử dụng tính năng live-reload
# nếu bỏ option -l, app có thể chạy mà không cần development server
```
