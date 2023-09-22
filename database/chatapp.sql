-- phpMyAdmin SQL Dump
-- version 5.1.3
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Sep 22, 2023 at 08:59 AM
-- Server version: 10.4.24-MariaDB
-- PHP Version: 7.4.28

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `chatapp`
--

-- --------------------------------------------------------

--
-- Table structure for table `messages`
--

CREATE TABLE `messages` (
  `id` int(11) NOT NULL,
  `sendid` int(11) DEFAULT NULL,
  `toid` int(11) DEFAULT NULL,
  `time` datetime DEFAULT NULL,
  `readed` tinyint(1) DEFAULT 0,
  `message` text DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `messages`
--

INSERT INTO `messages` (`id`, `sendid`, `toid`, `time`, `readed`, `message`) VALUES
(3, 1, 2, '2022-05-30 04:01:47', 1, 'ytyhjghj'),
(4, 1, 2, '2022-05-30 04:01:52', 1, 'fdfgfgfgh'),
(5, 2, 1, '2022-05-30 04:06:50', 1, 'hello'),
(6, 2, 1, '2022-05-30 04:07:23', 1, 'heyy'),
(7, 1, 2, '2022-05-30 04:38:48', 1, 'heyy how are you'),
(8, 2, 1, '2022-05-30 04:38:48', 1, 'heyy how are you'),
(9, 1, 2, '2022-05-30 04:46:11', 1, 'hello'),
(10, 1, 2, '2022-05-30 04:51:12', 1, '1'),
(11, 1, 3, '2022-05-30 05:07:22', 1, '2'),
(12, 1, 2, '2022-05-30 05:12:05', 1, '23'),
(13, 2, 1, '2022-05-30 05:12:05', 1, '23'),
(14, 2, 1, '2022-05-30 05:15:08', 1, 'heyyy'),
(15, 1, 2, '2022-05-30 05:15:08', 1, 'heyyy'),
(16, 1, 2, '2022-05-30 05:17:31', 1, 'heyyy'),
(17, 2, 1, '2022-05-30 05:26:18', 1, 'how is the josh\n'),
(18, 1, 2, '2022-05-30 05:50:39', 1, 'payload'),
(19, 2, 1, '2022-05-30 05:50:39', 1, 'payload'),
(20, 1, 2, '2022-05-30 06:05:35', 1, 'sdfsdfsdf'),
(21, 2, 1, '2022-05-30 06:05:35', 1, 'sdfsdfsdf'),
(22, 1, 2, '2022-05-30 06:06:49', 1, 'this is testintg'),
(23, 2, 1, '2022-05-30 06:06:49', 1, 'this is testintg'),
(24, 2, 1, '2022-05-30 06:07:49', 1, 'sdsdf'),
(25, 1, 2, '2022-05-30 06:07:49', 1, 'sdsdf'),
(26, 1, 2, '2022-05-30 06:09:02', 1, 'fsdfsdfsdfsdf'),
(27, 2, 1, '2022-05-30 06:09:02', 1, 'fsdfsdfsdfsdf'),
(28, 1, 2, '2022-05-30 06:11:10', 1, 'sdfsdfsdfsdfsdfsdfsdf'),
(29, 2, 1, '2022-05-30 06:11:10', 1, 'sdfsdfsdfsdfsdfsdfsdf'),
(30, 1, 2, '2022-05-30 06:13:34', 1, 'dsfsdfsdfsdf'),
(31, 2, 1, '2022-05-30 06:13:34', 1, 'dsfsdfsdfsdf'),
(34, 1, 2, '2022-05-30 06:19:45', 1, 'sdfsdfsdfsdfrg453'),
(35, 2, 1, '2022-05-30 06:19:45', 1, 'sdfsdfsdfsdfrg453'),
(36, 1, 2, '2022-05-30 06:20:55', 1, '123456'),
(37, 3, 1, '2022-05-31 09:21:50', 1, 'heyy'),
(38, 3, 1, '2022-05-31 09:22:02', 1, 'hw are you'),
(39, 1, 3, '2022-05-31 10:15:58', 1, 'hwllo'),
(40, 3, 1, '2022-05-31 10:17:23', 1, 'hiii'),
(41, 3, 1, '2022-05-31 10:20:54', 1, 'hryyy'),
(42, 1, 3, '2022-05-31 10:22:07', 1, 'hii'),
(43, 3, 1, '2022-05-31 10:25:11', 1, 'hwy'),
(44, 3, 1, '2022-05-31 10:28:13', 1, 'how are you'),
(45, 1, 3, '2022-05-31 10:29:50', 1, 'i\'m fine how are you'),
(46, 3, 1, '2022-05-31 10:34:21', 1, 'hwyyy'),
(47, 1, 3, '2022-05-31 10:35:30', 1, 'sdfsdfsdf'),
(48, 3, 1, '2022-05-31 10:37:09', 1, 'fdfgfgdfg'),
(49, 1, 3, '2022-05-31 10:39:00', 1, 'dsfsdfsdfsdf'),
(50, 3, 1, '2022-05-31 10:39:05', 1, 'sdfsdfsdf'),
(51, 1, 3, '2022-05-31 10:39:55', 1, 'dsfsdfsdfsdf'),
(52, 1, 3, '2022-05-31 10:40:46', 1, 'sdfsdfsdf'),
(53, 1, 3, '2022-05-31 10:41:17', 1, 'dfsdfsdfsdfsdf'),
(54, 1, 3, '2022-05-31 10:41:30', 1, 'asdasdasdasdasd'),
(55, 1, 3, '2022-05-31 10:41:52', 1, 'sdfsdfsdfsdfsdf'),
(56, 3, 1, '2022-05-31 10:42:45', 1, 'sdfsdsdf'),
(57, 3, 1, '2022-05-31 10:47:46', 1, 'dsfsdfsdf'),
(58, 1, 3, '2022-05-31 10:52:02', 1, 'hey'),
(59, 1, 3, '2022-05-31 10:52:45', 1, 'heyyy'),
(60, 3, 1, '2022-05-31 10:54:02', 1, 'hello'),
(61, 3, 1, '2022-05-31 10:54:38', 1, 'nre ysr'),
(62, 1, 3, '2022-05-31 10:55:10', 1, 'dfsdfsdf'),
(63, 3, 1, '2022-05-31 10:56:27', 1, 'sdfsdf'),
(64, 1, 3, '2022-05-31 10:58:11', 1, 'heeloooo'),
(65, 3, 1, '2022-05-31 10:58:35', 1, 'fsdfsdfsdfsdf'),
(66, 1, 3, '2022-05-31 11:02:57', 1, 'fgdfgdf'),
(67, 1, 3, '2022-05-31 11:03:10', 1, 'how are you'),
(68, 1, 3, '2022-05-31 11:04:02', 1, 'hello test'),
(69, 3, 1, '2022-05-31 11:13:25', 1, 'dfsdfsdfsdf fgdfg dfg '),
(70, 1, 3, '2022-05-31 11:15:05', 1, 'how are you dhaval.'),
(71, 1, 2, '2022-05-31 03:22:52', 1, 'dsfsdfsdsdsdf'),
(72, 1, 3, '2022-05-31 03:23:17', 1, 'sdfsdf'),
(73, 1, 2, '2022-05-31 03:23:59', 1, 'sdfsdfdfdsfddfgdfgdfgdfgdfgdfg'),
(74, 1, 3, '2022-05-31 03:24:09', 1, 'fghfghfgfghfghfgh'),
(75, 1, 3, '2022-05-31 03:24:18', 1, 'dfsdfsdfsd dfs dsfste4 y5656j'),
(76, 1, 3, '2022-05-31 03:24:51', 1, 'fgfhfghfggfgfgh'),
(77, 1, 2, '2022-06-01 08:43:06', 1, 'dsdsdsdsdsd'),
(78, 1, 2, '2022-06-01 08:43:30', 1, 'sdfsdfsdfsdf'),
(79, 1, 2, '2022-06-01 08:44:52', 1, 'hgjghjghj'),
(80, 1, 2, '2022-06-01 08:44:57', 1, 'tyjghjghj'),
(81, 1, 2, '2022-06-01 08:45:05', 1, 'sdfsdfsdf'),
(82, 1, 2, '2022-06-01 08:45:20', 1, 'sdfsdfsdf'),
(83, 1, 2, '2022-06-01 08:45:28', 1, 'how are you'),
(84, 1, 2, '2022-06-01 02:05:56', 1, 'https://placekitten.com/300/300?image=10'),
(85, 1, 2, '2022-06-01 02:06:05', 1, 'https://placekitten.com/300/300?image=10'),
(86, 1, 2, '2022-06-01 02:12:24', 1, 'http://localhost:3000/room#2'),
(87, 1, 2, '2022-06-01 02:13:45', 1, '????????????????'),
(88, 1, 2, '2022-06-01 03:10:15', 1, 'hello'),
(89, 1, 4, '2022-06-01 03:10:34', 1, 'sdsdsdsd'),
(90, 1, 4, '2022-06-01 03:16:26', 1, 'dfsdfsdfsdf'),
(91, 6, 3, '2022-06-01 03:56:29', 1, 'hhh\n'),
(92, 4, 1, '2022-06-01 04:08:18', 1, 'hii\n'),
(93, 4, 1, '2022-06-01 04:08:34', 1, 'new '),
(94, 4, 1, '2022-06-01 04:08:39', 1, 'post'),
(95, 4, 3, '2022-06-01 04:11:30', 1, 's'),
(96, 1, 2, '2022-06-06 09:00:00', 1, 'sdasdasdasd'),
(97, 1, 2, '2022-06-06 09:00:24', 1, 'dsdsdfsdf'),
(98, 1, 2, '2022-06-06 09:00:59', 1, 'sdsdfsdf'),
(99, 1, 2, '2022-06-06 09:01:08', 1, 'asdasdasd'),
(100, 2, 1, '2022-06-06 09:01:31', 1, 'sadasdasd'),
(101, 1, 2, '2022-06-06 09:04:24', 1, 'sdsdsdf'),
(102, 1, 2, '2022-06-06 09:04:59', 1, 'sadasdasd'),
(103, 1, 2, '2022-06-06 09:05:33', 1, 'sdfsdfsdf'),
(104, 1, 2, '2022-06-06 10:31:59', 1, 'hety'),
(105, 1, 2, '2022-06-06 10:32:15', 1, 'how are you'),
(106, 2, 1, '2022-06-06 10:33:44', 1, 'hey dhaval'),
(107, 3, 1, '2022-06-06 11:05:40', 1, 'sdsdfsdf'),
(108, 1, 4, '2022-06-06 11:20:38', 1, 'sdfsdf'),
(109, 3, 1, '2022-06-06 11:20:50', 1, 'sdsdfsdf'),
(110, 2, 1, '2022-06-07 03:17:13', 1, 'asgdhgajsgdjgad'),
(111, 2, 1, '2022-06-07 02:23:17', 1, 'sdfsdf'),
(112, 2, 1, '2022-06-07 02:27:47', 1, ';kjdfljsdlkfjlskjdf'),
(113, 2, 1, '2022-06-07 02:28:58', 1, 'asdasdasd'),
(114, 1, 2, '2022-06-07 02:30:21', 1, 'fdfkhdfghkdfkgdkfhg'),
(115, 3, 1, '2022-06-07 02:31:26', 1, 'sdfsdf'),
(116, 3, 1, '2022-06-07 02:37:03', 1, 'sdsdsdsdsd'),
(117, 3, 1, '2022-06-07 02:39:57', 1, 'sdkjfsdlkfjlsdf'),
(118, 3, 1, '2022-06-07 02:56:33', 1, 'asasasasas'),
(119, 1, 2, '2022-06-07 02:59:27', 1, 'dflgdfhgj'),
(120, 3, 1, '2022-06-07 03:07:27', 1, 'dfdfdfdfdfdf'),
(121, 2, 1, '2022-06-07 03:10:36', 1, 'sdfsdfsdfsdfsdf'),
(122, 1, 2, '2022-06-07 03:12:59', 1, 'dfdfjlkfdjfklj'),
(123, 2, 1, '2022-06-07 03:13:54', 1, 'fjgkldjflgjldfjgdlfg'),
(124, 2, 1, '2022-06-07 03:14:06', 1, 'dfgdhfgkdfkgkdjfh'),
(125, 2, 1, '2022-06-07 03:14:12', 1, 'dfgjldfjgljdflj'),
(126, 2, 1, '2022-06-07 03:15:02', 1, 'sdfsdfsdfs'),
(127, 2, 1, '2022-06-07 03:15:04', 1, 'sdfsdfsdf'),
(128, 3, 1, '2022-06-07 03:23:13', 1, 'fkdjhfkjghkdjf'),
(129, 2, 1, '2022-06-07 03:26:58', 1, 'fdgdfgdfgdfgdfgdfg'),
(130, 3, 1, '2022-06-07 03:41:09', 1, 'jdsfkjhsdkjfh'),
(131, 3, 1, '2022-06-07 03:41:16', 1, 'jdfkjhdfkjg'),
(132, 3, 1, '2022-06-07 03:41:20', 1, 'sdfsdfsdfsdf'),
(133, 3, 1, '2022-06-07 04:24:04', 1, 'heyy'),
(134, 2, 1, '2022-06-07 04:24:13', 1, 'dmhf'),
(135, 3, 1, '2022-06-07 04:24:24', 1, 'dfkgdhfgjkhkjdsfhkghkjdhf'),
(136, 3, 1, '2022-06-07 04:24:49', 1, 'hello'),
(137, 3, 1, '2022-06-07 04:25:01', 1, 'how are you'),
(138, 2, 1, '2022-06-07 04:25:20', 1, 'shdfjkjsdf'),
(139, 2, 1, '2022-06-07 04:25:41', 1, 'dsfsdfsdf'),
(140, 3, 1, '2022-06-07 04:26:13', 1, 'sdsdsd'),
(141, 2, 1, '2022-06-07 04:26:31', 1, 'sdsdsd'),
(142, 2, 1, '2022-06-07 04:27:00', 1, 'sdsdsdsd'),
(143, 2, 1, '2022-06-07 04:27:16', 1, 'dkfgkdfgkdkfgh'),
(144, 3, 1, '2022-06-07 04:29:52', 1, 'hello'),
(145, 2, 1, '2022-06-07 04:30:54', 1, 'sdsdsdsdsd'),
(146, 2, 1, '2022-06-07 04:30:57', 1, 'sdsdsd'),
(147, 3, 1, '2022-06-07 04:31:02', 1, 'sdsdsd'),
(148, 3, 1, '2022-06-07 04:31:04', 1, 'asdasdasdasd'),
(149, 3, 1, '2022-06-07 04:42:22', 1, 'hello'),
(150, 2, 1, '2022-06-07 04:42:27', 1, 'sdfsdfsdf'),
(151, 3, 1, '2022-06-07 04:45:42', 1, 'jkdshfjk'),
(152, 3, 1, '2022-06-07 04:45:46', 1, 'sdfsdfsdf'),
(153, 2, 1, '2022-06-07 04:45:51', 1, 'asdasdasd'),
(154, 2, 1, '2022-06-07 04:45:52', 1, 'asdasdasd'),
(155, 2, 1, '2022-06-07 04:47:38', 1, 'fghlkfjgjhlfkg'),
(156, 3, 1, '2022-06-07 04:48:16', 1, 'sdfsdfsdf'),
(157, 3, 1, '2022-06-07 04:48:21', 1, 'sdfsdfsdf'),
(158, 2, 1, '2022-06-07 04:49:55', 1, 'dkfjglkdjfljg'),
(159, 2, 1, '2022-06-07 04:50:02', 1, 'fdlkjgldfjgldjfk'),
(160, 2, 1, '2022-06-07 04:50:08', 1, 'flsdkfl;d0456904'),
(161, 2, 1, '2022-06-07 04:50:30', 1, 'dlfgkjdhfgjkfhdkg'),
(162, 1, 4, '2022-06-07 04:50:42', 0, 'dsfsdfsdfsdf'),
(163, 2, 1, '2022-06-07 04:50:48', 1, 'sdfsdfsdfsdf'),
(164, 1, 2, '2022-06-07 04:51:19', 1, 'kdfjljlkdjflglkdjflkg'),
(165, 2, 1, '2022-06-07 04:51:27', 1, 'sdsdsdsdsd'),
(166, 3, 1, '2022-06-07 04:52:20', 1, 'sdfsdfsdfsdfsdf'),
(167, 3, 1, '2022-06-07 04:58:44', 1, 'dfsdfsdf'),
(168, 2, 1, '2022-06-07 05:01:12', 1, 'dsfsdfsdf'),
(169, 3, 1, '2022-06-07 05:01:27', 1, 'sadasdasd'),
(170, 3, 1, '2022-06-07 05:04:15', 1, 'sdfsdfsdfsdfsdfsdf'),
(171, 3, 1, '2022-06-07 05:07:01', 1, 'sdsdsaddasd'),
(172, 2, 1, '2022-06-07 17:13:30', 1, 'sdsdsdsd'),
(173, 3, 1, '2022-06-07 17:13:53', 1, 'asdasdasdasdasd'),
(174, 3, 1, '2022-06-07 17:14:16', 1, 'asdasdasdasd'),
(175, 2, 1, '2022-06-07 17:19:22', 1, 'sdfsdfsdfsdfsdf'),
(176, 3, 1, '2022-06-07 17:22:52', 1, 'sdfsdfsdfsdf'),
(177, 3, 1, '2022-06-07 17:23:04', 1, 'sdfsdfsdfsdfsdfsdfsdf'),
(178, 3, 1, '2022-06-07 17:23:30', 1, 'sdsdfsdfsdfsdfsdfsdf'),
(179, 2, 1, '2022-06-07 17:56:51', 1, 'hello'),
(180, 3, 1, '2022-06-07 17:56:58', 1, 'hello'),
(181, 2, 1, '2022-06-07 17:57:20', 1, 'hello'),
(182, 2, 1, '2022-06-07 17:57:37', 1, 'hello'),
(183, 3, 1, '2022-06-07 17:57:45', 1, 'hello'),
(184, 2, 1, '2022-06-07 18:06:21', 1, 'sadasdasd'),
(185, 3, 1, '2022-06-07 18:06:29', 1, 'asdasdasd'),
(186, 1, 3, '2022-06-07 18:08:03', 1, 'hdfjskhfkjshdfkjhskjdfjshdkfhksdfkjkssdfkhkhddf'),
(187, 3, 1, '2022-06-07 18:08:08', 1, ';ds;lk;skfd;sdfl;lsdlflskd;lkfsdfsdf'),
(188, 3, 1, '2022-06-07 18:09:44', 1, 'hello'),
(189, 3, 1, '2022-06-07 18:13:07', 1, 'hello'),
(190, 3, 1, '2022-06-07 18:15:30', 1, 'hfsdjfkjhdf'),
(191, 3, 1, '2022-06-07 18:17:21', 1, 'hello'),
(192, 1, 3, '2022-06-07 18:17:31', 1, 'hello'),
(193, 3, 1, '2022-06-07 18:17:53', 1, 'sdfsdfsdfsdf'),
(194, 2, 1, '2022-06-07 18:18:08', 1, 'gdfgdfdfg fg dfg dfg dfg dfg dfg'),
(195, 8, 1, '2022-06-07 18:25:25', 1, 'njkjnkjnk'),
(196, 7, 8, '2022-06-07 18:25:38', 1, 'hello'),
(197, 8, 7, '2022-06-07 18:26:46', 1, 'hi\n'),
(198, 7, 8, '2022-06-07 18:27:11', 1, 'oo\n'),
(199, 7, 8, '2022-06-07 18:27:25', 1, 'bhai moj ne'),
(200, 8, 7, '2022-06-07 18:27:46', 1, 'hgjhgjhjhgjhgjhgjhjhgjhgjhjhgjhgjhgjgjhghjhjkhkhhh'),
(201, 1, 7, '2022-06-07 18:29:37', 1, 'working....'),
(202, 9, 10, '2022-06-08 15:07:12', 1, 'heyyy'),
(203, 9, NULL, '2022-06-08 15:34:03', 0, 'sdsd'),
(204, 1, 2, '2022-06-09 14:52:15', 1, 'hwllo'),
(205, 1, 2, '2022-06-13 17:21:08', 1, 'hello'),
(206, 2, 1, '2022-06-13 17:21:59', 1, 'heyy'),
(207, 2, 1, '2022-06-13 17:25:10', 1, 'hello'),
(208, 2, 1, '2022-06-13 17:25:28', 1, 'heyy'),
(209, 2, 1, '2022-06-13 17:28:02', 1, 'hwllo'),
(210, 1, 2, '2022-06-13 17:33:13', 1, 'heyy'),
(211, 2, 1, '2022-06-13 17:33:36', 1, 'hello'),
(212, 1, 2, '2022-06-13 17:36:26', 1, 'dsdfsd'),
(213, 1, 2, '2022-06-14 14:10:32', 1, 'sdfsdfsdf'),
(214, 1, 2, '2022-06-14 17:49:29', 1, 'hello'),
(215, 2, 1, '2022-06-14 17:49:40', 1, 'how are you'),
(216, 2, 1, '2022-06-14 17:49:59', 1, 'dsfsdf'),
(217, 1, 2, '2022-06-14 17:51:09', 1, 'heyy'),
(218, 2, 1, '2022-06-14 17:54:43', 1, 'hello'),
(219, 1, 2, '2022-06-14 17:57:39', 1, 'heyy'),
(220, 1, 2, '2022-06-14 17:58:14', 1, 'heldjkhfks'),
(221, 2, 1, '2022-06-14 18:01:01', 1, 'hello'),
(222, 1, 2, '2022-06-14 18:01:12', 1, 'how are you.'),
(223, 1, 2, '2022-06-14 18:02:11', 1, 'heyy'),
(224, 1, 2, '2022-06-14 18:02:20', 1, 'hwllo'),
(225, 1, 2, '2022-06-14 18:04:19', 1, 'heyy'),
(226, 1, 2, '2022-06-14 18:05:52', 1, 'shdg'),
(227, 2, 1, '2022-06-14 18:08:33', 1, 'heyy'),
(228, 1, 2, '2022-06-14 18:09:34', 1, 'haa hii'),
(229, 1, 2, '2022-06-14 18:13:18', 1, 'how are you'),
(230, 1, 2, '2022-06-14 18:13:54', 1, 'heyy how '),
(231, 2, 1, '2022-06-14 18:14:10', 1, 'heyyyyyyyy'),
(232, 2, 1, '2022-06-14 18:14:18', 1, 'hello'),
(233, 2, 1, '2022-06-14 18:15:49', 1, 'jdsfjk'),
(234, 2, 1, '2022-06-14 18:16:20', 1, 'fkghfdkfg'),
(235, 1, 2, '2022-06-14 18:20:27', 1, 'sdsdsdsdsd'),
(236, 2, 1, '2022-06-14 18:22:23', 1, 'jkdhfh'),
(237, 1, 2, '2022-06-14 18:22:39', 1, 'dfdfdf'),
(238, 1, 2, '2022-06-14 18:22:47', 1, 'sdfsdfsdf'),
(239, 2, 1, '2022-06-14 18:23:32', 1, 'ehtygdfg'),
(240, 2, 1, '2022-06-14 18:27:33', 1, 'kjfglkdfjlgjdlfj'),
(241, 2, 1, '2022-06-14 18:29:01', 1, 'lfdjlsdkjfl'),
(242, 1, 2, '2022-06-14 18:29:21', 1, 'fsdfjksdfjsdj'),
(243, 1, 2, '2022-06-15 08:40:52', 1, 'hey'),
(244, 1, 2, '2022-06-15 08:41:03', 1, 'h'),
(245, 1, 2, '2022-06-20 16:42:32', 1, 'heyyy'),
(246, 2, 1, '2022-06-20 16:47:16', 1, 'heyy'),
(247, 2, 1, '2022-06-20 16:48:18', 1, 'hello'),
(248, 1, 2, '2022-06-20 16:50:26', 1, 'heyyy'),
(249, 1, 2, '2022-06-20 16:50:51', 1, 'fghfghfgh'),
(250, 2, 1, '2022-06-20 16:51:10', 1, 'sdfsdfsdfsdfsdf'),
(251, 1, 2, '2022-06-20 16:51:14', 1, 'sdfsdfsdfsdf'),
(252, 2, 1, '2022-06-20 16:51:18', 1, 'sdfsdfsdf'),
(253, 1, 2, '2022-06-20 16:51:21', 1, 'sdfsdfsdf'),
(254, 2, 1, '2022-06-20 16:51:26', 1, 'sdfsdfsdf'),
(255, 1, 2, '2022-06-20 16:51:37', 1, 'sdfsdf'),
(256, 1, 2, '2022-06-20 16:51:38', 1, ''),
(257, 1, 2, '2022-06-20 16:51:38', 1, ''),
(258, 1, 2, '2022-06-20 16:51:53', 1, ' DFSDF SDF '),
(259, 1, 2, '2022-06-20 16:51:54', 1, ''),
(260, 1, 2, '2022-06-20 16:51:54', 1, ''),
(261, 1, 2, '2022-06-20 16:51:55', 1, ''),
(262, 1, 2, '2022-06-20 16:51:56', 1, ''),
(263, 1, 2, '2022-06-20 16:51:56', 1, ''),
(264, 1, 2, '2022-06-20 16:51:57', 1, ''),
(265, 1, 2, '2022-06-20 16:51:58', 1, ''),
(266, 11, 1, '2022-12-22 14:53:37', 1, 'fdfvdvdfv'),
(267, 1, 11, '2022-12-22 14:54:01', 1, 'hiii'),
(268, 11, 2, '2022-12-22 14:55:03', 0, '1122\n');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) DEFAULT NULL,
  `entrydate` datetime DEFAULT NULL,
  `socketid` varchar(50) DEFAULT NULL,
  `password` varchar(100) DEFAULT NULL,
  `name` varchar(50) DEFAULT NULL,
  `isonline` tinyint(1) DEFAULT 0
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `entrydate`, `socketid`, `password`, `name`, `isonline`) VALUES
(1, 'dhaval.italiya@rentechdigital.com', '2022-05-28 09:47:40', '3xyP8U8VLI4Cu3gcAAAE', '1234', 'Dhaval', 1),
(2, 'jaydeep@rentechdigital.com', '2022-05-28 12:33:12', 'qw4sqFqSm9lR7ZrNAAAC', '123456', 'Jaydeep', 1),
(3, 'testing@gmail.com', '2022-05-30 11:30:31', '-WhosEKMEwUf2tqKAAAB', '123456', 'test user', 0),
(4, 'cmchism@gmail.com', '2022-05-31 12:49:09', 'S2r33eD6JRJFoHuHAAAB', '123456', 'chism', 0),
(5, 'aa@gmail.conm', '2022-06-01 03:43:13', NULL, '132', 'dd', 0),
(6, 'aa@gmail.com', '2022-06-01 03:43:50', 'NDMMgayiCBxz6PcyAAAE', '13112001@', 'aa', 0),
(7, 'rutvik1@yopmail.com', '2022-06-07 06:21:57', 'Kgw37qqqY6YiIZ-4AAAP', '123456', 'rutvik', 0),
(8, 'hardikpatel6992@gmail.com', '2022-06-07 06:22:45', 'cKQ2Qgh5231hdz2-AAAO', '123456', 'hardik', 0),
(9, 'dhaval.test@yopmail.com', '2022-06-08 03:05:18', 'uL8l96MWzRrpQWNjAAAH', '123456', 'Test User', 0),
(10, 'dhaval.test2@yopmail.com', '2022-06-08 03:06:39', 'AjbXeMQr6_Kui854AAAG', '456789', 'Roman Reigns', 0),
(11, 'akki@yopmail.com', '2022-12-22 02:53:08', 'Npx7wcjZawMRslhZAAAB', '123456', 'akash', 0);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `messages`
--
ALTER TABLE `messages`
  ADD PRIMARY KEY (`id`),
  ADD KEY `sendid` (`sendid`),
  ADD KEY `toid` (`toid`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `messages`
--
ALTER TABLE `messages`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=269;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `messages`
--
ALTER TABLE `messages`
  ADD CONSTRAINT `messages_ibfk_1` FOREIGN KEY (`sendid`) REFERENCES `users` (`id`),
  ADD CONSTRAINT `messages_ibfk_2` FOREIGN KEY (`toid`) REFERENCES `users` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;