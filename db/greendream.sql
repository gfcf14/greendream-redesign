-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: db745704405.db.1and1.com
-- Generation Time: Jun 22, 2019 at 02:05 AM
-- Server version: 5.5.60-0+deb7u1-log
-- PHP Version: 7.0.33-0+deb9u3

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db745704405`
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
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
