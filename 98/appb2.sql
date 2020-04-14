-- phpMyAdmin SQL Dump
-- version 5.0.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 14, 2020 at 06:58 AM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `appb2`
--

-- --------------------------------------------------------

--
-- Table structure for table `questions`
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
-- Dumping data for table `questions`
--

INSERT INTO `questions` (`Q_id`, `Q_name`, `Q_category_id`, `Q_title`, `Q_1`, `Q_2`, `Q_3`, `Q_4`, `Q_check`, `Q_suggest`) VALUES
(2, '123', 3, '1', '2', '3', '4', '5', 2, '12312'),
(4, 'Test tên', 7, 'Câu hỏi là gì', 'là câu hỏi 1', 'là câu hỏi 2', 'là câu hỏi 3', 'là câu hỏi 4', 3, 'Đây là gợi í'),
(5, 'Test 2', 7, 'tiêu đề nè', 'câu hỏi 1 nè', 'câu hỏi 2 nè', 'câu hỏi 3 nè', 'câu hỏi 4 nè', 2, 'gợi ý nè');

-- --------------------------------------------------------

--
-- Table structure for table `question_categories`
--

CREATE TABLE `question_categories` (
  `QC_id` int(11) NOT NULL,
  `QC_name` text NOT NULL,
  `QC_content` text NOT NULL,
  `QC_button` text NOT NULL,
  `QC_color` text NOT NULL,
  `QC_softDelete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `question_categories`
--

INSERT INTO `question_categories` (`QC_id`, `QC_name`, `QC_content`, `QC_button`, `QC_color`, `QC_softDelete`) VALUES
(3, 'áda1', 'ádas', 'ád', 'gray', 0),
(6, 'testf', 'test', 'test', 'gray', 0),
(7, 'test tên', 'nội dung', 'test button', '#cc00cc', 0);

-- --------------------------------------------------------

--
-- Table structure for table `trafficsigns`
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
-- Dumping data for table `trafficsigns`
--

INSERT INTO `trafficsigns` (`tfs_id`, `tfs_category_id`, `tfs_name`, `tfs_content`, `tfs_image`, `tfs_softDelete`) VALUES
(21, 13, 'Đường cấm', 'Đường cấm', '/public/images/trafficsigns/13/bien bao cam.jpg', 0),
(22, 13, 'Cấm bóp còi', 'Cấm bóp còi', '/public/images/trafficsigns/13/cam bop coi.jpg', 0),
(23, 13, 'Cấm đi thằng và rẽ phải', 'Cấm đi thằng và rẽ phải', '/public/images/trafficsigns/13/cam di thang va re phai.jpg', 0),
(24, 15, 'test', '123', '/public/images/trafficsigns/15/92193981_3856658301042178_7245426927169699840_n.jpg', 0);

-- --------------------------------------------------------

--
-- Table structure for table `trafficsign_categories`
--

CREATE TABLE `trafficsign_categories` (
  `tfsc_id` int(11) NOT NULL,
  `tfsc_name` text NOT NULL,
  `tfsc_content` text NOT NULL,
  `tfsc_image` text NOT NULL,
  `tfsc_softDelete` tinyint(1) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Dumping data for table `trafficsign_categories`
--

INSERT INTO `trafficsign_categories` (`tfsc_id`, `tfsc_name`, `tfsc_content`, `tfsc_image`, `tfsc_softDelete`) VALUES
(13, 'Biển báo cấm', 'Biển báo cấm', '/public/images/Categories/nguoc_chieu.jpg', 0),
(15, 'Biển báo chú ý', 'Chú ý', '/public/images/Categories/bien-canh-bao-de-chay.jpg', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `questions`
--
ALTER TABLE `questions`
  ADD PRIMARY KEY (`Q_id`),
  ADD KEY `Q_category_id_fk` (`Q_category_id`);

--
-- Indexes for table `question_categories`
--
ALTER TABLE `question_categories`
  ADD PRIMARY KEY (`QC_id`);

--
-- Indexes for table `trafficsigns`
--
ALTER TABLE `trafficsigns`
  ADD PRIMARY KEY (`tfs_id`),
  ADD KEY `tfs_category_id_fk` (`tfs_category_id`);

--
-- Indexes for table `trafficsign_categories`
--
ALTER TABLE `trafficsign_categories`
  ADD PRIMARY KEY (`tfsc_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `questions`
--
ALTER TABLE `questions`
  MODIFY `Q_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `question_categories`
--
ALTER TABLE `question_categories`
  MODIFY `QC_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `trafficsigns`
--
ALTER TABLE `trafficsigns`
  MODIFY `tfs_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT for table `trafficsign_categories`
--
ALTER TABLE `trafficsign_categories`
  MODIFY `tfsc_id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=16;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `questions`
--
ALTER TABLE `questions`
  ADD CONSTRAINT `Q_category_id_fk` FOREIGN KEY (`Q_category_id`) REFERENCES `question_categories` (`QC_id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `trafficsigns`
--
ALTER TABLE `trafficsigns`
  ADD CONSTRAINT `tfs_category_id_fk` FOREIGN KEY (`tfs_category_id`) REFERENCES `trafficsign_categories` (`tfsc_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
