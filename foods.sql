-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Gép: 127.0.0.1
-- Létrehozás ideje: 2026. Máj 15. 09:39
-- Kiszolgáló verziója: 10.4.32-MariaDB
-- PHP verzió: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;
CREATE DATABASE allatfajok CHARACTER SET utf8 COLLATE utf8_hungarian_ci;

--
-- Adatbázis: `restaurant`
--

-- --------------------------------------------------------

--
-- Tábla szerkezet ehhez a táblához `foods`
--

CREATE TABLE `foods` (
  `id` int(11) NOT NULL,
  `name` varchar(100) NOT NULL,
  `price` int(11) NOT NULL,
  `weight` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_hungarian_ci;

--
-- A tábla adatainak kiíratása `foods`
--

INSERT INTO `foods` (`id`, `name`, `price`, `weight`) VALUES
(1, 'Margherita Pizza', 3200, 450),
(2, 'Hamburger', 2800, 350),
(3, 'Cheeseburger', 3100, 370),
(4, 'Gyros Tál', 3900, 500),
(5, 'Rántott Sajt', 3400, 420),
(6, 'Carbonara Tészta', 3600, 400),
(7, 'Bolognai Spagetti', 3500, 430),
(8, 'Cézár Saláta', 2900, 300),
(9, 'Hawaii Pizza', 3400, 470),
(10, 'Mexikói Burrito', 4100, 480),
(11, 'Hot Dog', 1900, 250),
(12, 'Sült Csirkecomb', 3700, 550),
(13, 'Steak Burgonya', 5200, 600),
(14, 'Lazacos Tészta', 4600, 420),
(15, 'Taco Menü', 3900, 450),
(16, 'Palacsinta', 1500, 200),
(17, 'Somlói Galuska', 1800, 230),
(18, 'Sushi Mix', 6200, 350),
(19, 'Fish and Chips', 4300, 500),
(20, 'BBQ Oldalas', 5900, 700);

--
-- Indexek a kiírt táblákhoz
--

--
-- A tábla indexei `foods`
--
ALTER TABLE `foods`
  ADD PRIMARY KEY (`id`);

--
-- A kiírt táblák AUTO_INCREMENT értéke
--

--
-- AUTO_INCREMENT a táblához `foods`
--
ALTER TABLE `foods`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=21;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
