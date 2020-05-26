-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th5 17, 2020 lúc 09:29 AM
-- Phiên bản máy phục vụ: 10.4.11-MariaDB
-- Phiên bản PHP: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `appb2`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `questions`
--

CREATE TABLE `questions` (
  `Q_id` int(11) NOT NULL,
  `Q_name` text NOT NULL,
  `Q_category_id` int(11) NOT NULL,
  `Q_title` text NOT NULL,
  `Q_1` text NOT NULL,
  `Q_2` text NOT NULL,
  `Q_3` text NOT NULL,
  `Q_4` text NOT NULL,
  `Q_check` int(11) NOT NULL,
  `Q_suggest` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `questions`
--

INSERT INTO `questions` (`Q_id`, `Q_name`, `Q_category_id`, `Q_title`, `Q_1`, `Q_2`, `Q_3`, `Q_4`, `Q_check`, `Q_suggest`) VALUES
(0, 'Câu 1', 3, ' Khái niệm \"đường bộ\" được hiểu như thế nào là đúng?', '1. Đường, cầu đường bộ.', '2. Hầm đường bộ, bến phà đường bộ.', '3. Cả hai ý nêu trên đều đúng.', '4. Đường bộ và các công trình phụ trợ khác.', 1, '\"Đường bộ\" không bao gồm các công trình phụ trợ khác.'),
(0, 'Câu 176', 7, 'Khi vào số để tiến hoặc lùi xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?', '1. Đạp bàn đạp phanh chân hết hành trình, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.', '2. Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.', '3. Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác.', '4. Cả ba ý nêu trên đều sai.', 1, 'Xe tự động, khi thay đổi số để tiến hoặc lùi phải đạp phanh.'),
(0, 'Câu 200', 13, 'Một số nét đẹp về truyền thống đạo đức của mỗi con người Việt Nam theo tư tưởng của Chủ tịch Hồ Chí Minh là?', '1. Cần kiệm: Là lao động cần cù, siêng năng; làm việc có kế hoạch, sáng tạo có năng suất cao, với tinh thần tự lực cách sinh, không lười biếng, không ỷ lại, không dựa dẫm', '2. Liêm chính: Là không tham ô và luôn luôn tôn trọng, giữ gìn của công, của nhân dân; ngay thẳng, không tà, đúng đắn, chính trực, việc phải dù nhỏ cũng làm, việc trái dù nhỏ cũng tránh', '3. Tiết kiệm sức lao động, tiết kiệm thì giờ, tiết kiệm tiền của dân, của nước, của bản thân mình, không hao phí, không bừa bãi, không phô trương hình thức', '4. Cả ba ý nêu trên đều sai.', 1, '....'),
(0, 'Câu 201', 14, 'Khi vào số để tiến hoặc lùi xe ô tô có số tự động, người lái xe phải thực hiện các thao tác nào để đảm bảo an toàn?', '1. Đạp bàn đạp phanh chân hết hành trình, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.', '2. Đạp bàn đạp để tăng ga với mức độ phù hợp, vào số và kiểm tra lại xem có bị nhầm số không rồi mới cho xe lăn bánh.', '3. Cả hai ý nêu trên đều đúng.', '4. Cả hai ý nêu trên đều sai.', 0, 'Xe tự động, khi thay đổi số để tiến hoặc lùi phải đạp phanh.'),
(0, 'Câu 236', 15, 'Xe ô tô tham gia giao thông đường bộ phải bảo đảm các quy định về chất lượng, an toàn kỹ thuật và bảo vệ môi trường nào ghi dưới đây?', '1. Đủ số lượng, đủ áp suất, đúng cỡ lốp của nhà sản xuất hoặc tài liệu kỹ thuật quy định; lốp bánh dẫn hướng hai bên cùng kiểu hoa lốp, chiều cao hoa lốp đồng đều; không sử dụng lốp đắp; lốp không mòn đến dấu chỉ báo độ mòn của nhà sản xuất, không nứt, vỡ, phồng rộp làm hở lớp sợi mành.', '2. Vành, đĩa vành đúng kiểu loại, không rạn, nứt, cong vênh; bánh xe quay tròn, không bị bó kẹt hoặc cọ sát vào phần khác; moay ơ không bị rơ; lắp đặt chắc chắn, đủ các chi tiết kẹp chặt và phòng lỏng.', '3. Dàn đèn pha trên nóc xe.', '4. Đường bộ và các công trình phụ trợ khác.', 0, '....'),
(0, 'Câu 240', 16, ' Khái niệm \"đường bộ\" được hiểu như thế nào là đúng?', '1. Đường, cầu đường bộ.', '2. Hầm đường bộ, bến phà đường bộ.', '3. Đường, cầu đường bộ, hầm đường bộ, bến phà đường bộ và các công trình phụ trợ khác.', '4. Đường bộ và các công trình phụ trợ khác.', 3, '\"Đường bộ\" không bao gồm các công trình phụ trợ khác.'),
(0, 'Câu 256', 17, 'Xe ô tô tham gia giao thông trên đường bộ phải có đủ các loại đèn gì?', '1. Đèn chiếu sáng gần và xa.', '2. Đèn soi biển số; đèn báo hãm và đèn tín hiệu.', '3. Dàn đèn pha trên nóc xe.', '4. Cả ba ý nêu trên đều sai.', 1, '....'),
(0, 'Câu 2', 3, '“Vạch kẻ đường” được hiểu thế nào là đúng?', '1. Vạch kẻ đường là vạch chỉ sự phân chia làn đường, vị trí hoặc hướng đi, vị trí dừng lại.', '2. Vạch kẻ đường là vạch chỉ sự phân biệt vị trí dừng, đỗ trên đường.', '3, Tất cả các ý nêu trên.', '4. Cả ba ý nêu trên đều sai.', 1, 'Vạch kẻ đường.....');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `question_categories`
--

CREATE TABLE `question_categories` (
  `QC_id` int(11) NOT NULL,
  `QC_name` text NOT NULL,
  `QC_content` text NOT NULL,
  `QC_button` text NOT NULL,
  `QC_color` text NOT NULL,
  `QC_number` text NOT NULL,
  `QC_softDelete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `question_categories`
--

INSERT INTO `question_categories` (`QC_id`, `QC_name`, `QC_content`, `QC_button`, `QC_color`, `QC_number`, `QC_softDelete`) VALUES
(3, 'Khái niệm quy tắc', 'Phần này gồm 145 câu hỏi từ câu 1 đến 145 và cũng là phần nhiều nhất trong số 7 phần của bộ câu hỏi lý thuyết thi lái xe ô tô b2', 'Khái niệm', 'gray', '', 0),
(7, 'Nghiệp vụ vận tải', 'Phần này là những câu hỏi từ 146 đến câu 175 chủ yếu liên quan đến xe quá tải trọng', 'Nghiệp vụ', 'orange', '', 0),
(13, 'Văn hóa, đạo đức nghề nghiệp người lái xe', 'Câu hỏi từ 176 - 200, bởi nó chủ yếu xoay quanh đến những biểu hiện của văn hóa lái xe, những hành vi được cho là đúng hoặc nghiêm cấm khi tham gia giao thông', 'Văn hóa', '#0099ff', '', 0),
(14, 'Kỹ thuật lái xe ô tô', 'Gồm 35 câu hỏi, từ câu 201 đến câu 235, tập trung chủ yếu vào các kỹ thuật lái xe ô tô như kỹ thuật đánh lái, tăng giảm số, phanh, kỹ thuật lái xe trên những đoạn đường phức tạp khác nhau', 'KT Lái xe', '#cc00cc', '', 0),
(15, 'Cấu tạo và sửa chữa xe ô tô', 'Từ câu 236 đến câu 255 là những câu hỏi đơn giản về cấu tạo, chức năng và công dụng của các bộ phận có trên xe ô tô nhằm giúp những ai mới bắt đầu học lái xe có thể hiểu được đặc tính xe ô tô mà mình đang lái', 'CT sửa chữa', '#ff6666', '', 0),
(16, 'Hệ thống báo hiệu đường bộ', 'Đây là phần dài nhất bao gồm 100 câu hỏi từ câu 256 đến câu 355, nêu rõ ý nghĩa của từng biền báo và nhóm biển báo cụ thể', 'Biển báo', '#009933', '', 0),
(17, 'Sa hình', 'Bộ câu hỏi sẽ có 95 câu hỏi về sa hình, từ câu 356 đến câu 450. Các hình đều là những mô phỏng về các tình huống giao thông mà bạn có thể gặp trong thực tế', 'Sa hình', '#ff0000', '', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trafficsigns`
--

CREATE TABLE `trafficsigns` (
  `tfs_id` int(11) NOT NULL,
  `tfs_category_id` int(11) NOT NULL,
  `tfs_name` text NOT NULL,
  `tfs_content` text NOT NULL,
  `tfs_image` text NOT NULL,
  `tfs_softDelete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `trafficsigns`
--

INSERT INTO `trafficsigns` (`tfs_id`, `tfs_category_id`, `tfs_name`, `tfs_content`, `tfs_image`, `tfs_softDelete`) VALUES
(21, 13, 'Biển số P.01 \"Đường cấm\"', 'Để báo đường cấm các loại phương tiện đi lại cả hai hướng, trừ các xe được ưu tiên theo quy định.', '/public/images/trafficsigns/13/bien bao cam.jpg', 0),
(22, 13, 'Biển số P.128 \"Cấm bóp còi\"', 'Cấm các loại xe cơ giới sử dụng còi.', '/public/images/trafficsigns/13/cam bop coi.jpg', 0),
(23, 13, 'Biển số P.139 \"Cấm đi thằng và rẽ phải\"', 'Biểu thị ở ngã tư, ngã năm đường phía trước cấm tất cả các loại xe đi thẳng và rẽ phải.', '/public/images/trafficsigns/13/cam di thang va re phai.jpg', 0);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `trafficsign_categories`
--

CREATE TABLE `trafficsign_categories` (
  `tfsc_id` int(11) NOT NULL,
  `tfsc_name` text NOT NULL,
  `tfsc_content` text NOT NULL,
  `tfsc_image` text NOT NULL,
  `tfsc_softDelete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Đang đổ dữ liệu cho bảng `trafficsign_categories`
--

INSERT INTO `trafficsign_categories` (`tfsc_id`, `tfsc_name`, `tfsc_content`, `tfsc_image`, `tfsc_softDelete`) VALUES
(13, 'Biển báo cấm', 'Biển báo cấm', '/public/images/Categories/nguoc_chieu.jpg', 0),
(15, 'Biển báo chú ý', 'Chú ý', '/public/images/Categories/bien-canh-bao-de-chay.jpg', 0);

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `question_categories`
--
ALTER TABLE `question_categories`
  ADD PRIMARY KEY (`QC_id`);

--
-- Chỉ mục cho bảng `trafficsigns`
--
ALTER TABLE `trafficsigns`
  ADD PRIMARY KEY (`tfs_id`),
  ADD KEY `tfs_category_id_fk` (`tfs_category_id`);

--
-- Chỉ mục cho bảng `trafficsign_categories`
--
ALTER TABLE `trafficsign_categories`
  ADD PRIMARY KEY (`tfsc_id`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `question_categories`
--
ALTER TABLE `question_categories`
  MODIFY `QC_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT cho bảng `trafficsigns`
--
ALTER TABLE `trafficsigns`
  MODIFY `tfs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT cho bảng `trafficsign_categories`
--
ALTER TABLE `trafficsign_categories`
  MODIFY `tfsc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Các ràng buộc cho các bảng đã đổ
--

--
-- Các ràng buộc cho bảng `trafficsigns`
--
ALTER TABLE `trafficsigns`
  ADD CONSTRAINT `tfs_category_id_fk` FOREIGN KEY (`tfs_category_id`) REFERENCES `trafficsign_categories` (`tfsc_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
