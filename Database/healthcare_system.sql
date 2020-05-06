-- phpMyAdmin SQL Dump
-- version 5.0.2
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: May 06, 2020 at 07:49 PM
-- Server version: 10.4.11-MariaDB
-- PHP Version: 7.4.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `healthcare_system`
--

-- --------------------------------------------------------

--
-- Table structure for table `doctor`
--

CREATE TABLE `doctor` (
  `docNo` int(11) NOT NULL,
  `docID` varchar(5) NOT NULL,
  `dName` varchar(40) NOT NULL,
  `address` varchar(60) NOT NULL,
  `contactNumber` varchar(10) NOT NULL,
  `speciality` varchar(40) NOT NULL,
  `description` varchar(50) NOT NULL,
  `docCharges` double NOT NULL,
  `visitingHospitals` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=latin1;

--
-- Dumping data for table `doctor`
--

INSERT INTO `doctor` (`docNo`, `docID`, `dName`, `address`, `contactNumber`, `speciality`, `description`, `docCharges`, `visitingHospitals`) VALUES
(2, 'D002', 'Saman Kumara', 'Horana', '0772345678', 'Sergon', 'QQQQQQ', 2500, 'Asha Central'),
(3, 'D003', 'Sadun+Gunawardana', 'Kadawatha', '0772345678', 'Sergon', 'CCCCCC', 3000, 'Asiri+Central'),
(7, 'D006', 'Maneesha Bandara', 'Piliyandala', '0753453452', 'Physician', 'AAAAA', 2500, 'Asiri Central'),
(10, 'D008', 'XXX', 'Panipitiya', '0753453452', 'YYY', 'AAAAA', 2500, 'Asiri Central'),
(11, 'D009', 'Kasun Gunasinghe', 'kadawatha', '0789098789', 'sergon', 'BCD', 3000, 'Goldenkey Hospital'),
(15, 'D012', 'Kaushalya', 'Dompe', '0996754321', 'AAA', 'VVVVBVBV', 1800, 'ftttf'),
(16, 'D077', 'EE', 'hjj', '0987865432', 'yfuhuh', 'ygg', 1200, 'gygy'),
(26, 'D0034', 'Thushan', 'Galle', '0902345678', 'Sergon', 'LLLL', 1800, 'Primo');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `doctor`
--
ALTER TABLE `doctor`
  ADD PRIMARY KEY (`docNo`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `doctor`
--
ALTER TABLE `doctor`
  MODIFY `docNo` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
