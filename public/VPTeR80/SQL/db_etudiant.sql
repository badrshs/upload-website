-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Dec 12, 2016 at 12:30 AM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `db_etudiant`
--

-- --------------------------------------------------------

--
-- Table structure for table `table_etudiant`
--

CREATE TABLE IF NOT EXISTS `table_etudiant` (
  `code` int(11) NOT NULL AUTO_INCREMENT,
  `nom` text NOT NULL,
  `prenom` text NOT NULL,
  `img` text NOT NULL,
  `date` date NOT NULL,
  PRIMARY KEY (`code`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=13 ;

--
-- Dumping data for table `table_etudiant`
--

INSERT INTO `table_etudiant` (`code`, `nom`, `prenom`, `img`, `date`) VALUES
(1, 'Lachheb', 'Achraf', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/12592595_1581448352183001_4266420260171139018_n.jpg?oh=b98ee98d10298289b720d378f1621e5c&oe=58EE1949', '1996-12-02'),
(2, 'victoroliveira', 'vasconcelosfernando', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15134705_1122182284543550_4127806309018384882_n.jpg?oh=be74d876c1fcad879a77028e5db298fe&oe=58B084C0', '1994-06-15'),
(3, 'Njimou', 'AhmÃ©d', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14291756_10210860352573293_2765416983630763991_n.jpg?oh=2194ec4c09d86bf746122a85e573b513&oe=58EC4B00', '1997-09-11'),
(4, 'El Adabi', 'Dalal', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/13886863_1061667903927188_4187590887165473928_n.jpg?oh=7e347a8339d2468ed07506528d6dc37f&oe=58BC2162', '1998-12-05'),
(6, ' Hamdani', 'Ridae', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14915621_1687132194933150_4973542760048398004_n.jpg?oh=551f811b56faeab50e295a88de0689a0&oe=58BB7834 ', '1996-05-19'),
(8, 'Sadkii', 'Omarr', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/13700068_306871886324420_5915264017232090245_n.jpg?oh=e162a66b05377ee2543360d7495bbd40&oe=58F45517', '1998-04-08'),
(9, 'kibo', 'Nabila', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/14947580_356544914700573_568342578301184536_n.jpg?oh=b839bf39fd0ef0dfa8cb23e9f93d7e0a&oe=58ECA22C', '1998-06-25'),
(10, 'Chaoui', 'Najib', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/12105713_971210852951864_8717784608267772499_n.jpg?oh=50e8528a20c7def64ec303768ff8bc5c&oe=58BBF0B4', '1997-04-18'),
(11, 'Abdelghafour AitAli', 'Mouad ', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/12141723_1001976896511750_4604753348422914262_n.jpg?oh=a144d833e975f51f88f63e81cf2cd695&oe=58BC8385', '1996-12-22'),
(12, 'Beltarchi', 'Ayoub ', 'https://scontent-lht6-1.xx.fbcdn.net/v/t1.0-9/15337436_1146007182161443_6961893689065163492_n.jpg?oh=65558459c2cbff1703633f7121d49d13&oe=58B179A7', '1997-02-05');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
