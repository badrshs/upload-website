-- phpMyAdmin SQL Dump
-- version 4.0.10deb1
-- http://www.phpmyadmin.net
--
-- Host: localhost
-- Generation Time: May 01, 2017 at 06:56 PM
-- Server version: 5.5.53-0ubuntu0.14.04.1
-- PHP Version: 5.5.9-1ubuntu4.20

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `upload`
--

-- --------------------------------------------------------

--
-- Table structure for table `CodeVisiter`
--

CREATE TABLE IF NOT EXISTS `CodeVisiter` (
  `ip` varchar(100) NOT NULL,
  `Fork_id` varchar(50) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  `id` int(11) NOT NULL AUTO_INCREMENT,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=960 ;

-- --------------------------------------------------------

--
-- Table structure for table `Comment`
--

CREATE TABLE IF NOT EXISTS `Comment` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Name` varchar(50) NOT NULL,
  `Comment` varchar(250) NOT NULL,
  `Fork_id` varchar(50) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Ip` varchar(25) NOT NULL,
  `SessionName` varchar(200) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `Error`
--

CREATE TABLE IF NOT EXISTS `Error` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(100) NOT NULL,
  `De` varchar(100) NOT NULL,
  `Mime` varchar(100) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=197 ;

-- --------------------------------------------------------

--
-- Table structure for table `files`
--

CREATE TABLE IF NOT EXISTS `files` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(10) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Visiter` int(11) NOT NULL,
  `country` varchar(50) NOT NULL DEFAULT 'none',
  `ZipSize` varchar(500) NOT NULL,
  `AllSize` varchar(500) NOT NULL,
  `Title` varchar(1000) DEFAULT NULL,
  `Image` varchar(1000) DEFAULT NULL,
  `State` tinyint(1) NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=3142 ;

-- --------------------------------------------------------

--
-- Table structure for table `Fork`
--

CREATE TABLE IF NOT EXISTS `Fork` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `StringId` varchar(30) NOT NULL,
  `Html` text NOT NULL,
  `Css` text NOT NULL,
  `JavaScript` text NOT NULL,
  `Ip` varchar(25) DEFAULT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `Title` varchar(500) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `StringId` (`StringId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=149 ;

-- --------------------------------------------------------

--
-- Table structure for table `LikeCode`
--

CREATE TABLE IF NOT EXISTS `LikeCode` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `Fork_id` varchar(25) NOT NULL,
  `Ip` varchar(25) NOT NULL,
  `Session` varchar(200) NOT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `Fork_id` (`Fork_id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `Live`
--

CREATE TABLE IF NOT EXISTS `Live` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `StringId` varchar(100) NOT NULL,
  `Html` text NOT NULL,
  `Css` text NOT NULL,
  `JavaScript` text NOT NULL,
  `Ip` varchar(25) DEFAULT NULL,
  `Date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `StringId` (`StringId`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=391 ;

-- --------------------------------------------------------

--
-- Stand-in structure for view `ViewVisiterCounter`
--
CREATE TABLE IF NOT EXISTS `ViewVisiterCounter` (
`StringId` varchar(30)
,`count(StringId)` bigint(21)
);
-- --------------------------------------------------------

--
-- Structure for view `ViewVisiterCounter`
--
DROP TABLE IF EXISTS `ViewVisiterCounter`;

CREATE ALGORITHM=UNDEFINED DEFINER=`root`@`localhost` SQL SECURITY DEFINER VIEW `ViewVisiterCounter` AS select `Fork`.`StringId` AS `StringId`,count(`Fork`.`StringId`) AS `count(StringId)` from (`Fork` left join `CodeVisiter` on((`Fork`.`StringId` = `CodeVisiter`.`Fork_id`))) group by `Fork`.`StringId`;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
