-- phpMyAdmin SQL Dump
-- version 4.9.0.1
-- https://www.phpmyadmin.net/
--
-- Host: mysql
-- Generation Time: Jul 08, 2019 at 12:22 AM
-- Server version: 5.7.26
-- PHP Version: 7.2.19

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET AUTOCOMMIT = 0;
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `greendreamdb`
--

-- --------------------------------------------------------

--
-- Table structure for table `Games`
--

CREATE TABLE `Games` (
  `id` int(255) NOT NULL,
  `name` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `imgurl` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `language` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `count` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `Games`
--

INSERT INTO `Games` (`id`, `name`, `imgurl`, `language`, `count`) VALUES
(1, 'VoteBuster', 'votebuster', 'C#', 398),
(2, 'RaceMaster', 'racemaster', 'Java', 165),
(3, 'Oruga', 'oruga', 'Java', 70),
(4, 'TroubleShooter', 'troubleshooter', 'Java', 160),
(5, 'Wherefore The Heck Art Thou?', 'whereforetheheckartthou', 'JavaScript', 52);

-- --------------------------------------------------------

--
-- Table structure for table `Programs`
--

CREATE TABLE `Programs` (
  `id` int(255) NOT NULL,
  `name` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `imgurl` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `language` varchar(100) COLLATE latin1_general_ci NOT NULL,
  `count` int(255) NOT NULL
) ENGINE=MyISAM DEFAULT CHARSET=latin1 COLLATE=latin1_general_ci;

--
-- Dumping data for table `Programs`
--

INSERT INTO `Programs` (`id`, `name`, `imgurl`, `language`, `count`) VALUES
(1, 'SMS Sender', 'smssender', 'C++', 189),
(2, 'Employment Assistant', 'employmentassistant', 'Java', 162),
(3, 'Typing Test', 'typingtest', 'Javascript', 102),
(4, 'Chord Player', 'chordplayer', 'Java', 155),
(5, 'Choose for Me', 'chooseforme', 'Javascript', 9),
(6, 'URL Player', 'urlplayer', 'JavaScript', 31);

-- --------------------------------------------------------

--
-- Table structure for table `Tutorials`
--

CREATE TABLE `Tutorials` (
  `id` int(10) NOT NULL,
  `name` varchar(20) NOT NULL,
  `description` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `Tutorials`
--

INSERT INTO `Tutorials` (`id`, `name`, `description`) VALUES
(1, 'Java', 'Did you know more than 3 billion devices use Java? A preferred language for beginners to easily learn console and desktop programming as well as for developers to create Android based applications'),
(2, 'C#', 'Allowing development of .NET applications with a flavor of Java\'s syntax and portability. Very important to know given the diffusion of PCs worldwide'),
(3, 'C++', 'Although not as modern as other languages, it laid the foundations of most modern operating systems, as well as a great choice for modern game development due to memory efficiency'),
(4, 'VB.NET', 'Backed by a powerful and easy to use GUI (via Microsoft\'s Visual Studio), it is the language of choice for developers who wish to focus on desktop event-driven applications oriented to the Windows Operating System'),
(5, 'HTML', 'No need to flatter here. Without HTML, this page wouldn\'t exist! It\'s the starting point of pretty much every website, widget, and web application ever thought of and developed');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `Games`
--
ALTER TABLE `Games`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Programs`
--
ALTER TABLE `Programs`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `Tutorials`
--
ALTER TABLE `Tutorials`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `Games`
--
ALTER TABLE `Games`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- AUTO_INCREMENT for table `Programs`
--
ALTER TABLE `Programs`
  MODIFY `id` int(255) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT for table `Tutorials`
--
ALTER TABLE `Tutorials`
  MODIFY `id` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
