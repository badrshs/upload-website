-- phpMyAdmin SQL Dump
-- version 4.5.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Mar 02, 2017 at 01:24 AM
-- Server version: 10.1.16-MariaDB
-- PHP Version: 7.0.9

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `tedxwadielrayan`
--

-- --------------------------------------------------------

--
-- Table structure for table `attend`
--

CREATE TABLE `attend` (
  `id` int(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `age` varchar(255) CHARACTER SET utf8 NOT NULL,
  `education` varchar(255) CHARACTER SET utf8 NOT NULL,
  `city` varchar(255) CHARACTER SET utf8 NOT NULL,
  `mobil_number` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `know_about` varchar(255) CHARACTER SET utf8 NOT NULL,
  `want_attend` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `speak`
--

CREATE TABLE `speak` (
  `id` int(255) NOT NULL,
  `name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `phone` varchar(255) CHARACTER SET utf8 NOT NULL,
  `age` varchar(255) CHARACTER SET utf8 NOT NULL,
  `City` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Occupation` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Faculty` varchar(255) CHARACTER SET utf8 NOT NULL,
  `Website` varchar(255) CHARACTER SET utf8 NOT NULL,
  `know_about_ted` varchar(255) CHARACTER SET utf8 NOT NULL,
  `attended_event_ted` varchar(255) CHARACTER SET utf8 NOT NULL,
  `value_event_ted` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idea` varchar(255) CHARACTER SET utf8 NOT NULL,
  `which_idea` varchar(255) CHARACTER SET utf8 NOT NULL,
  `idea_applied` varchar(255) CHARACTER SET utf8 NOT NULL,
  `recommend` varchar(255) CHARACTER SET utf8 NOT NULL,
  `cv` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(255) NOT NULL,
  `full_name` varchar(255) CHARACTER SET utf8 NOT NULL,
  `age` varchar(255) CHARACTER SET utf8 NOT NULL,
  `faculty` varchar(255) CHARACTER SET utf8 NOT NULL,
  `university` varchar(255) CHARACTER SET utf8 NOT NULL,
  `graduation_year` varchar(255) CHARACTER SET utf8 NOT NULL,
  `email` varchar(255) CHARACTER SET utf8 NOT NULL,
  `mobile_number` varchar(255) CHARACTER SET utf8 NOT NULL,
  `fb_url` varchar(255) CHARACTER SET utf8 NOT NULL,
  `which_team` varchar(255) CHARACTER SET utf8 NOT NULL,
  `qualified_textarea` varchar(255) CHARACTER SET utf8 NOT NULL,
  `portfolio_url` varchar(255) CHARACTER SET utf8 NOT NULL,
  `previous_work_textarea` varchar(255) CHARACTER SET utf8 NOT NULL,
  `what_you_know` varchar(255) CHARACTER SET utf8 NOT NULL,
  `an_attended_textarea` varchar(255) CHARACTER SET utf8 NOT NULL,
  `why_joining` varchar(255) CHARACTER SET utf8 NOT NULL,
  `work_hours` varchar(255) CHARACTER SET utf8 NOT NULL,
  `cv_url` varchar(255) CHARACTER SET utf8 NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attend`
--
ALTER TABLE `attend`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `speak`
--
ALTER TABLE `speak`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `attend`
--
ALTER TABLE `attend`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;
--
-- AUTO_INCREMENT for table `speak`
--
ALTER TABLE `speak`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
