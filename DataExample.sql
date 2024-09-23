-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 23-09-2024 a las 03:38:44
-- Versión del servidor: 10.11.8-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `nombre_tu_bd`
--
CREATE DATABASE IF NOT EXISTS `nombre_tu_bd` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
USE `nombre_tu_bd`;

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `prompts`
--

DROP TABLE IF EXISTS `prompts`;
CREATE TABLE `prompts` (
  `id` int(11) NOT NULL,
  `usuario_id` int(6) UNSIGNED NOT NULL,
  `titulo` varchar(255) NOT NULL,
  `contenido` text NOT NULL,
  `created_at` timestamp NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Truncar tablas antes de insertar `prompts`
--

TRUNCATE TABLE `prompts`;
--
-- Volcado de datos para la tabla `prompts`
--

INSERT DELAYED INTO `prompts` (`id`, `usuario_id`, `titulo`, `contenido`, `created_at`) VALUES
(22, 1, 'Inspiración Creativa', 'Describe un paisaje en el que te sientas inspirado para crear una obra de arte', '2024-09-23 03:36:01'),
(23, 1, 'Planificación de un Proyecto', 'Escribe los pasos detallados para organizar y completar un proyecto en 30 días.', '2024-09-23 03:36:29'),
(24, 1, 'Resolución de Problemas', 'Proporciona tres enfoques diferentes para resolver un conflicto en un equipo de trabajo.', '2024-09-23 03:36:59');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE `usuarios` (
  `id` int(6) UNSIGNED NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(255) NOT NULL,
  `reg_date` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

--
-- Truncar tablas antes de insertar `usuarios`
--

TRUNCATE TABLE `usuarios`;
--
-- Volcado de datos para la tabla `usuarios`
--

INSERT DELAYED INTO `usuarios` (`id`, `nombre`, `email`, `password`, `reg_date`) VALUES
(1, 'Ricardo', 'testing@pruebalogin.com', 'testing@pruebalogin.com', '2024-09-05 03:47:52'),
(6, 'Claudia ', 'claudia@correo.cl', 'claudia@correo.cl', '2024-09-06 03:06:56'),
(7, 'Fabiola', 'fabiola@correo.com', 'fabiola@correo.com', '2024-09-06 03:07:37'),
(8, 'Alondra', 'alondra@correo.net', 'alondra@correo.net', '2024-09-06 03:28:17'),
(9, 'Camilo', 'camilo@correo.com', 'camilo@correo.com', '2024-09-07 02:01:14');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `prompts`
--
ALTER TABLE `prompts`
  ADD PRIMARY KEY (`id`),
  ADD KEY `fk_usuario` (`usuario_id`);

--
-- Indices de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `prompts`
--
ALTER TABLE `prompts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=25;

--
-- AUTO_INCREMENT de la tabla `usuarios`
--
ALTER TABLE `usuarios`
  MODIFY `id` int(6) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `prompts`
--
ALTER TABLE `prompts`
  ADD CONSTRAINT `fk_usuario` FOREIGN KEY (`usuario_id`) REFERENCES `usuarios` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
