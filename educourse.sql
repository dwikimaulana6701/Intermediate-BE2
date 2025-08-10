-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Aug 09, 2025 at 09:41 AM
-- Server version: 10.4.32-MariaDB
-- PHP Version: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `educourse`
--

-- --------------------------------------------------------

--
-- Table structure for table `kategori_kelas`
--

CREATE TABLE `kategori_kelas` (
  `id_kategori` int(11) NOT NULL,
  `bidang_studi` enum('Pemasaran','Digital & Teknologi','Pengembang Diri','Bisnis Manajemen') DEFAULT NULL,
  `durasi` enum('Kurang dari 4 jam','4 - 8 jam','Lebih dari 8 jam','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `kategori_kelas`
--

INSERT INTO `kategori_kelas` (`id_kategori`, `bidang_studi`, `durasi`) VALUES
(1, 'Digital & Teknologi', 'Kurang dari 4 jam'),
(2, 'Pemasaran', '4 - 8 jam');

-- --------------------------------------------------------

--
-- Table structure for table `kelas_saya`
--

CREATE TABLE `kelas_saya` (
  `id_kelas_saya` int(11) NOT NULL,
  `id_order_item` int(11) DEFAULT NULL,
  `status_kelas` enum('selesei','sedang_berjalan','','') DEFAULT NULL,
  `sertifikat` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `material_kelas`
--

CREATE TABLE `material_kelas` (
  `id_material` int(11) NOT NULL,
  `id_modul_kelas` int(11) DEFAULT NULL,
  `url_video` varchar(255) DEFAULT NULL,
  `rangkuman` varchar(255) DEFAULT NULL,
  `quiz` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `modul_kelas`
--

CREATE TABLE `modul_kelas` (
  `id_modul_kelas` int(11) NOT NULL,
  `id_kelas_saya` int(11) DEFAULT NULL,
  `judul_modul` varchar(255) DEFAULT NULL,
  `jumlah_modul` int(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order`
--

CREATE TABLE `order` (
  `id_order` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `order_date` date DEFAULT NULL,
  `invoice` varchar(50) DEFAULT NULL,
  `status_order` enum('berhasil','gagal','belum bayar','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `order_item`
--

CREATE TABLE `order_item` (
  `id_order_item` int(11) NOT NULL,
  `id_produk` int(11) DEFAULT NULL,
  `id_order` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pembayaran`
--

CREATE TABLE `pembayaran` (
  `id_pembayaran` int(11) NOT NULL,
  `id_order` int(11) DEFAULT NULL,
  `metode_bayar` varchar(50) DEFAULT NULL,
  `total_bayar` decimal(10,2) DEFAULT NULL,
  `status_bayar` enum('berhasil','gagal','','') DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `pretest`
--

CREATE TABLE `pretest` (
  `id_pretest` int(11) NOT NULL,
  `id_modul_kelas` int(11) DEFAULT NULL,
  `soal` varchar(255) DEFAULT NULL,
  `opsi_a` char(1) NOT NULL,
  `opsi_b` char(1) NOT NULL,
  `opsi_c` char(1) NOT NULL,
  `opsi_d` char(1) NOT NULL,
  `jawaban_benar` char(1) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- --------------------------------------------------------

--
-- Table structure for table `produk`
--

CREATE TABLE `produk` (
  `id_produk` int(11) NOT NULL,
  `id_user` int(11) DEFAULT NULL,
  `id_tutor` int(11) DEFAULT NULL,
  `id_kategori` int(11) DEFAULT NULL,
  `image_course` varchar(255) DEFAULT NULL,
  `title` varchar(255) DEFAULT NULL,
  `description` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `produk`
--

INSERT INTO `produk` (`id_produk`, `id_user`, `id_tutor`, `id_kategori`, `image_course`, `title`, `description`, `price`) VALUES
(1, 1, 2, 1, 'https://plus.unsplash.com/premium_photo-1682787494977-d013bb5a8773?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Membangun aplikasi pemesanan mobil menggunakan Next.js', 'Aplikasi pemesanan mobil berbasis web yang dibangun dengan Next.js untuk memudahkan pengguna dalam mencari, memilih, dan memesan mobil secara online.', 577.12),
(2, 2, 1, 2, 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Belajar Digital Marketing', 'Belajar melakukan pemasaran produk secara online demi visi meningkatkan kejayaan sound horeg di level dewa', 999.99);

-- --------------------------------------------------------

--
-- Table structure for table `review`
--

CREATE TABLE `review` (
  `id_review` int(11) NOT NULL,
  `id_produk` int(11) DEFAULT NULL,
  `id_user` int(11) DEFAULT NULL,
  `rating` int(11) DEFAULT NULL,
  `review` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `review`
--

INSERT INTO `review` (`id_review`, `id_produk`, `id_user`, `rating`, `review`) VALUES
(1, 2, 1, 5, 'Pembelajaran yang interaktif, Penjelasan mentor mudah dipahami');

-- --------------------------------------------------------

--
-- Table structure for table `tutor`
--

CREATE TABLE `tutor` (
  `id_tutor` int(11) NOT NULL,
  `avatar` varchar(255) DEFAULT NULL,
  `name_tutor` varchar(255) DEFAULT NULL,
  `role_tutor` varchar(100) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `tutor`
--

INSERT INTO `tutor` (`id_tutor`, `avatar`, `name_tutor`, `role_tutor`) VALUES
(1, 'https://images.unsplash.com/photo-1566285270364-2776f5eed5e9?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Prabu Siliwangi', 'UI/UX'),
(2, 'https://plus.unsplash.com/premium_photo-1663050728129-cb8d64cfadf9?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D', 'Raden Patah Tersirat', 'Backend Developer');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id_user` int(11) NOT NULL,
  `name` varchar(255) DEFAULT NULL,
  `email` varchar(100) DEFAULT NULL,
  `gender` enum('pria','wanita','other') DEFAULT NULL,
  `phone` varchar(20) DEFAULT NULL,
  `password` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id_user`, `name`, `email`, `gender`, `phone`, `password`) VALUES
(1, 'Dwiki Maulana Suharto', 'dwiki@gmail.com', 'pria', '6289787657234', '12345'),
(2, 'thomas edi sound', 'edisound@gmail.com', 'pria', '6298860388765', '54321');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `kategori_kelas`
--
ALTER TABLE `kategori_kelas`
  ADD PRIMARY KEY (`id_kategori`);

--
-- Indexes for table `kelas_saya`
--
ALTER TABLE `kelas_saya`
  ADD PRIMARY KEY (`id_kelas_saya`),
  ADD KEY `id_order_item` (`id_order_item`);

--
-- Indexes for table `material_kelas`
--
ALTER TABLE `material_kelas`
  ADD PRIMARY KEY (`id_material`),
  ADD KEY `id_modul_kelas` (`id_modul_kelas`);

--
-- Indexes for table `modul_kelas`
--
ALTER TABLE `modul_kelas`
  ADD PRIMARY KEY (`id_modul_kelas`),
  ADD KEY `id_kelas_saya` (`id_kelas_saya`);

--
-- Indexes for table `order`
--
ALTER TABLE `order`
  ADD PRIMARY KEY (`id_order`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `order_item`
--
ALTER TABLE `order_item`
  ADD PRIMARY KEY (`id_order_item`),
  ADD KEY `id_produk` (`id_produk`),
  ADD KEY `id_order` (`id_order`);

--
-- Indexes for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD PRIMARY KEY (`id_pembayaran`),
  ADD UNIQUE KEY `id_order` (`id_order`);

--
-- Indexes for table `pretest`
--
ALTER TABLE `pretest`
  ADD PRIMARY KEY (`id_pretest`),
  ADD KEY `id_modul_kelas` (`id_modul_kelas`);

--
-- Indexes for table `produk`
--
ALTER TABLE `produk`
  ADD PRIMARY KEY (`id_produk`),
  ADD KEY `id_user` (`id_user`),
  ADD KEY `id_tutor` (`id_tutor`),
  ADD KEY `id_kategori` (`id_kategori`);

--
-- Indexes for table `review`
--
ALTER TABLE `review`
  ADD PRIMARY KEY (`id_review`),
  ADD UNIQUE KEY `id_produk` (`id_produk`),
  ADD KEY `id_user` (`id_user`);

--
-- Indexes for table `tutor`
--
ALTER TABLE `tutor`
  ADD PRIMARY KEY (`id_tutor`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id_user`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `kategori_kelas`
--
ALTER TABLE `kategori_kelas`
  MODIFY `id_kategori` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `kelas_saya`
--
ALTER TABLE `kelas_saya`
  MODIFY `id_kelas_saya` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `material_kelas`
--
ALTER TABLE `material_kelas`
  MODIFY `id_material` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `modul_kelas`
--
ALTER TABLE `modul_kelas`
  MODIFY `id_modul_kelas` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order`
--
ALTER TABLE `order`
  MODIFY `id_order` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `order_item`
--
ALTER TABLE `order_item`
  MODIFY `id_order_item` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pembayaran`
--
ALTER TABLE `pembayaran`
  MODIFY `id_pembayaran` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `pretest`
--
ALTER TABLE `pretest`
  MODIFY `id_pretest` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT for table `produk`
--
ALTER TABLE `produk`
  MODIFY `id_produk` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `review`
--
ALTER TABLE `review`
  MODIFY `id_review` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `tutor`
--
ALTER TABLE `tutor`
  MODIFY `id_tutor` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id_user` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `kelas_saya`
--
ALTER TABLE `kelas_saya`
  ADD CONSTRAINT `kelas_saya_ibfk_1` FOREIGN KEY (`id_order_item`) REFERENCES `order_item` (`id_order_item`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `material_kelas`
--
ALTER TABLE `material_kelas`
  ADD CONSTRAINT `material_kelas_ibfk_1` FOREIGN KEY (`id_modul_kelas`) REFERENCES `modul_kelas` (`id_modul_kelas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `modul_kelas`
--
ALTER TABLE `modul_kelas`
  ADD CONSTRAINT `modul_kelas_ibfk_1` FOREIGN KEY (`id_kelas_saya`) REFERENCES `kelas_saya` (`id_kelas_saya`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order`
--
ALTER TABLE `order`
  ADD CONSTRAINT `order_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `order_item`
--
ALTER TABLE `order_item`
  ADD CONSTRAINT `order_item_ibfk_1` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `order_item_ibfk_2` FOREIGN KEY (`id_order`) REFERENCES `order` (`id_order`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pembayaran`
--
ALTER TABLE `pembayaran`
  ADD CONSTRAINT `pembayaran_ibfk_1` FOREIGN KEY (`id_order`) REFERENCES `order` (`id_order`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `pretest`
--
ALTER TABLE `pretest`
  ADD CONSTRAINT `pretest_ibfk_1` FOREIGN KEY (`id_modul_kelas`) REFERENCES `modul_kelas` (`id_modul_kelas`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `produk`
--
ALTER TABLE `produk`
  ADD CONSTRAINT `produk_ibfk_2` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `produk_ibfk_3` FOREIGN KEY (`id_tutor`) REFERENCES `tutor` (`id_tutor`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `produk_ibfk_4` FOREIGN KEY (`id_kategori`) REFERENCES `kategori_kelas` (`id_kategori`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Constraints for table `review`
--
ALTER TABLE `review`
  ADD CONSTRAINT `review_ibfk_1` FOREIGN KEY (`id_user`) REFERENCES `users` (`id_user`) ON DELETE SET NULL ON UPDATE CASCADE,
  ADD CONSTRAINT `review_ibfk_2` FOREIGN KEY (`id_produk`) REFERENCES `produk` (`id_produk`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
