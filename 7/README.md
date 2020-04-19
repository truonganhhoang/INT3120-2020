# Nhóm 7: Ứng dụng "Học 6000 từ vựng Tiếng Anh thông dụng"

## I. Cài đặt và chạy code
1. Thông tin chung
- Nền tảng sử dung: 
   - React Native
   - Firebase Firestore: lưu trữ dữ liệu về từ ngữ
   - Firebase Storage: lưu trữ âm thanh audio 
2. Cấu trúc project
- Thư mục 6000VocabEnglish: lưu trữ source code React Native(RN)
- App-release: folder lưu trữ bản build APK của ứng dụng
- functions: lưu trữ code JS sử dụng Firebase Functions làm backend
- Ngoài ra còn có những file khác liên quan đến config của Firebase
3. Cấu trúc thư mục React Native
- config: bao gồm config để kết nối với Firebase
- src: folder soure code chính, bao gồm:
   - actions: các actions liên quan đến React-Redux( sử dụng Redux-thunk)
   - assets: folder lưu trữ ảnh, icon, audio cho các hiệu ứng trong ứng dụng
   - components: chứa các thành phân nhỏ nhất của ứng dụng để ghép nối tạo nên giao diện trên màn hình
   - navigators: cài đặt navigator cho app
   - reducers: code cài đặt reduces liên quan đến Redux
   - screens: lưu trữ các màn hình của ứng dụng(ghép các component lại và hiển thị)
   - themes: cài đặt các styles cho component
   - utils: chứa các biến Global sử dụng trong ứng dụng
4. Chạy code
- vào thư mục INT3120-2020\7\6000VocabEnglish
- Cài đặt node_modules: **npm install**
- Chạy lệnh sau trên terminal(command line): **npm start**
- Nếu phát sinh các lỗi liên quan đến cài đặt thư viện, các bạn có thể vào file **6000VocabEnglish/Document.md** để xem các đường link cài đặt thư viện mà nhóm mình sử dụng.


## II. Thông tin về ứng dụng
1. **Giới thiệu nhóm**

   - Vũ Văn Học
     - Email: hocvanvu1999@gmail.com
     - Github link: https://github.com/VuVanHoc
   - Ngô Đức Huy
   - Nguyễn Việt Hà

2. **Thông tin ứng dụng**
   - Tên ứng dụng: Học 6000 từ vựng Tiếng Anh thông dụng
   - Link Google play: https://play.google.com/store/apps/details?id=com.porolingo.evocaflashcard
   - Nền tảng sử dụng: React Native
3. **Các chức năng của ứng dụng**

   ##### ★ Vốn từ chi tiết

   - Hơn 6000 từ với hình ảnh minh họa trực quan và phát âm chuẩn người bản xứ giúp bạn xây dựng vốn từ
   - 10 chủ đề thiết thực chia làm 145 bài học với vốn từ rộng giúp bạn làm phong phú đáng kể vốn từ

   ##### ★ Học bằng flashcard

   - Tích hợp hệ thống ôn tập hiệu quả bằng flashcard giúp bạn học và kiểm tra trí nhớ về các từ mới
   - Khả năng hiển thị hình ảnh và đọc ý nghĩa liên quan
   - Nhiều lựa chọn về tốc độ chạy của flashcard để bạn kiểm tra sự ghi nhớ từ của mình

   ##### ★ Bài kiểm tra

   - Tùy chỉnh câu hỏi để kiểm tra sự nhớ từ của bạn và cách đọc, nghĩa của từ
   - Tùy chỉnh việc lặp lại các câu trả lời sai để bạn ghi nhớ
   - Ôn tập cuối mỗi bài test cho bạn biết bạn đã ghi nhớ được bao nhiêu

   ##### ★ Thử thách với các trò chơi

   - Lựa chọn hình ảnh đúng với phát âm trong khoảng thời gian hạn định, các trò chơi luyện trí nhớ của PORO sẽ giúp bạn rèn khả năng phản xạ khi học từ mới cách hiệu quả.
