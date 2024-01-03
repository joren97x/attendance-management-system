-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Jan 03, 2024 at 02:00 PM
-- Server version: 10.4.28-MariaDB
-- PHP Version: 8.2.4

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `attendance`
--

-- --------------------------------------------------------

--
-- Table structure for table `attendance`
--

CREATE TABLE `attendance` (
  `id` int(11) NOT NULL,
  `attendance_date_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  `date` date NOT NULL,
  `status` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance`
--

INSERT INTO `attendance` (`id`, `attendance_date_id`, `user_id`, `date`, `status`) VALUES
(13, 3, 1, '2024-01-03', 'absent'),
(15, 4, 1, '2024-01-03', 'absent'),
(17, 4, 4, '2024-01-03', 'absent'),
(18, 5, 1, '2024-01-03', 'absent'),
(19, 5, 2, '2024-01-03', 'late'),
(20, 6, 4, '2024-01-03', 'absent'),
(21, 6, 2, '2024-01-03', 'present'),
(22, 6, 1, '2024-01-03', 'absent'),
(23, 7, 1, '2024-01-03', 'present'),
(24, 7, 2, '2024-01-26', 'present'),
(25, 7, 6, '2024-01-26', 'absent');

-- --------------------------------------------------------

--
-- Table structure for table `attendance_dates`
--

CREATE TABLE `attendance_dates` (
  `id` int(11) NOT NULL,
  `date` date NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `attendance_dates`
--

INSERT INTO `attendance_dates` (`id`, `date`) VALUES
(1, '2024-01-02'),
(2, '2024-01-03'),
(3, '2024-01-04'),
(4, '2024-01-04'),
(5, '2024-01-12'),
(6, '2024-01-17'),
(7, '2024-01-27');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `firstname` varchar(255) NOT NULL,
  `middlename` varchar(255) DEFAULT NULL,
  `lastname` varchar(255) NOT NULL,
  `address` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `birthday` date NOT NULL,
  `course` varchar(255) NOT NULL,
  `role` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `firstname`, `middlename`, `lastname`, `address`, `email`, `phone`, `birthday`, `course`, `role`, `password`) VALUES
(1, 'Wako', 'gwapo', 'wako', 'asdas', 'asd', 'asdasd', '2024-01-17', 'BSED', 'student', 'asdasd'),
(2, 'Kessiah', 'Remen', 'Tizo', 'buagsong', 'kesh@email.com', '09123', '2023-12-30', 'BSED', 'student', 'asdasd'),
(3, 'Admin', 'ada', 'min', 'asdasd', 'admin@email.com', '13123', '2024-02-02', 'BSIT', 'admin', 'asdasd'),
(4, 'James', 'cortes', 'Lakyot', 'ahaha', 'joren@emial.com', '23232', '2024-01-24', 'BSIT', 'student', 'asdasd'),
(6, 'Hev', 'Downtown', 'Abi', 'manila', 'hev@abi.com', '2323', '2024-01-23', 'BSIT', 'student', 'asdasd');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `attendance`
--
ALTER TABLE `attendance`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `attendance_dates`
--
ALTER TABLE `attendance_dates`
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
-- AUTO_INCREMENT for table `attendance`
--
ALTER TABLE `attendance`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT for table `attendance_dates`
--
ALTER TABLE `attendance_dates`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=8;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
