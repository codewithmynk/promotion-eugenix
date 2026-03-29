-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Mar 29, 2026 at 05:47 AM
-- Server version: 8.0.45
-- PHP Version: 8.4.18

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `promotioneugenix_main_bbswr`
--

-- --------------------------------------------------------

--
-- Table structure for table `7d4e6nnzR_options`
--

CREATE TABLE `7d4e6nnzR_options` (
  `option_id` bigint UNSIGNED NOT NULL,
  `option_name` varchar(191) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT '',
  `option_value` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL,
  `autoload` varchar(20) CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_520_ci NOT NULL DEFAULT 'yes'
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_520_ci;

--
-- Dumping data for table `7d4e6nnzR_options`
--

INSERT INTO `7d4e6nnzR_options` (`option_id`, `option_name`, `option_value`, `autoload`) VALUES
(289, 'nav_menu_options', 'a:2:{i:0;b:0;s:8:\"auto_add\";a:0:{}}', 'off'),
(293, 'options_header_logo', '44', 'off'),
(294, '_options_header_logo', 'field_648198ecde4bd', 'no'),
(295, 'options_header_button_label', 'FREE Consultation', 'off'),
(296, '_options_header_button_label', 'field_6481990dde4be', 'no'),
(297, 'options_header_button_link', '#contact-section', 'no'),
(298, '_options_header_button_link', 'field_64819920de4bf', 'no'),
(299, 'options_mobile_header_button_label', 'Get Free Consultation', 'off'),
(300, '_options_mobile_header_button_label', 'field_6481993cb8898', 'no'),
(301, 'options_mobile_header_button_link', '#contact-section', 'no'),
(302, '_options_mobile_header_button_link', 'field_648199b0b8899', 'no'),
(303, 'options_office_time', '', 'no'),
(304, '_options_office_time', 'field_648199dbd7711', 'no'),
(305, 'options_email', '', 'no'),
(306, '_options_email', 'field_648199e7d7712', 'no'),
(307, 'options_mobile_number', '+91 9998199981', 'off'),
(308, '_options_mobile_number', 'field_648199f3d7713', 'no'),
(309, 'options_social_media', '', 'no'),
(310, '_options_social_media', 'field_64819a255ef6b', 'no'),
(394, 'options_social_media_section_title', 'Follow Us', 'no'),
(395, '_options_social_media_section_title', 'field_648307ffca3c4', 'no'),
(409, 'tawkto-visibility-options', 'a:14:{s:14:\"always_display\";i:1;s:16:\"show_onfrontpage\";i:0;s:15:\"show_oncategory\";i:0;s:14:\"show_ontagpage\";i:0;s:19:\"show_onarticlepages\";i:0;s:11:\"exclude_url\";i:0;s:17:\"excluded_url_list\";s:0:\"\";s:11:\"include_url\";i:0;s:17:\"included_url_list\";s:0:\"\";s:15:\"display_on_shop\";i:0;s:26:\"display_on_productcategory\";i:0;s:22:\"display_on_productpage\";i:0;s:21:\"display_on_producttag\";i:0;s:26:\"enable_visitor_recognition\";i:1;}', 'yes'),
(570, 'options_whatsapp_number', '919998199981', 'off'),
(571, '_options_whatsapp_number', 'field_648866b6cad47', 'no'),
(579, 'dpp_wpp_page_options', 'a:5:{s:15:\"dpp_post_status\";s:5:\"draft\";s:17:\"dpp_post_redirect\";s:7:\"to_list\";s:15:\"dpp_post_suffix\";s:0:\"\";s:14:\"dpp_posteditor\";s:7:\"classic\";s:19:\"dpp_post_link_title\";s:0:\"\";}', 'yes'),
(394255, 'options_whatsapp_number_for_google', '919998199981', 'off'),
(394256, '_options_whatsapp_number_for_google', 'field_68b10c4ee98a0', 'off'),
(394257, 'options_mobile_number_for_google', '+91 9998199981', 'off'),
(394258, '_options_mobile_number_for_google', 'field_68b10c5ce98a1', 'off');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `7d4e6nnzR_options`
--
ALTER TABLE `7d4e6nnzR_options`
  ADD PRIMARY KEY (`option_id`),
  ADD UNIQUE KEY `option_name` (`option_name`),
  ADD KEY `autoload` (`autoload`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `7d4e6nnzR_options`
--
ALTER TABLE `7d4e6nnzR_options`
  MODIFY `option_id` bigint UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=596349;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
