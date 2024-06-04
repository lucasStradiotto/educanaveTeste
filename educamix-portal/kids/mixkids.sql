-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 17-Jun-2023 às 20:03
-- Versão do servidor: 10.4.25-MariaDB
-- versão do PHP: 7.4.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `mixkids`
--

-- --------------------------------------------------------

--
-- Estrutura da tabela `alunos`
--

CREATE TABLE `alunos` (
  `id` int(11) NOT NULL,
  `nomeAluno` varchar(50) NOT NULL,
  `sexo` varchar(50) NOT NULL,
  `nomeResponsavel` varchar(50) NOT NULL,
  `avatar` varchar(50) NOT NULL,
  `data_nasc` date NOT NULL,
  `idProfessor` int(11) NOT NULL,
  `observacoes` text NOT NULL,
  `nomeTurma` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `alunos`
--

INSERT INTO `alunos` (`id`, `nomeAluno`, `sexo`, `nomeResponsavel`, `avatar`, `data_nasc`, `idProfessor`, `observacoes`, `nomeTurma`) VALUES
(2303, 'Maria', 'Feminino', 'Joe West', 'aluno01', '2023-04-20', 250, 'Marília', 'Turma Quadrada');

-- --------------------------------------------------------

--
-- Estrutura da tabela `alunoturma`
--

CREATE TABLE `alunoturma` (
  `id` int(11) NOT NULL,
  `idAluno` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `alunoturma`
--

INSERT INTO `alunoturma` (`id`, `idAluno`, `idTurma`) VALUES
(93, 2303, 514);

-- --------------------------------------------------------

--
-- Estrutura da tabela `avatar`
--

CREATE TABLE `avatar` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `documentos`
--

CREATE TABLE `documentos` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `link` varchar(50) NOT NULL,
  `valor` int(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente1`
--

CREATE TABLE `ebookambiente1` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente2`
--

CREATE TABLE `ebookambiente2` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente3`
--

CREATE TABLE `ebookambiente3` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente4`
--

CREATE TABLE `ebookambiente4` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente5`
--

CREATE TABLE `ebookambiente5` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente6`
--

CREATE TABLE `ebookambiente6` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente7`
--

CREATE TABLE `ebookambiente7` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente8`
--

CREATE TABLE `ebookambiente8` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `ebookambiente9`
--

CREATE TABLE `ebookambiente9` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `historico`
--

CREATE TABLE `historico` (
  `idHistorico` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `cat` varchar(50) NOT NULL,
  `id` int(11) NOT NULL,
  `horario` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `horasdeuso`
--

CREATE TABLE `horasdeuso` (
  `id` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `dia` varchar(30) DEFAULT NULL,
  `de` varchar(50) DEFAULT NULL,
  `ate` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `horasdeuso`
--

INSERT INTO `horasdeuso` (`id`, `idTurma`, `dia`, `de`, `ate`) VALUES
(15, 514, 'Domingo', '8:00', '18:00'),
(16, 514, 'Segunda-feira', '8:00', '18:00'),
(17, 514, 'Terca-feira', '8:00', '18:00'),
(18, 514, 'Quarta-feira', '8:00', '18:00'),
(19, 514, 'Quinta-feira', '8:00', '18:00'),
(20, 514, 'Sexta-feira', '8:00', '18:00'),
(21, 514, 'Sabado', '8:00', '18:00'),
(22, 520, 'Domingo', '8:00', '18:00'),
(23, 520, 'Segunda-feira', '8:00', '23:00'),
(24, 520, 'Terça-feira', '8:00', '23:00'),
(25, 520, 'Quarta-feira', '8:00', '23:00'),
(26, 520, 'Quinta-feira', '8:00', '23:00'),
(27, 520, 'Sexta-feira', '8:00', '23:00'),
(28, 520, 'Sábado', '8:00', '18:00');

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente1`
--

CREATE TABLE `jogorfidambiente1` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente2`
--

CREATE TABLE `jogorfidambiente2` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente3`
--

CREATE TABLE `jogorfidambiente3` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente4`
--

CREATE TABLE `jogorfidambiente4` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente5`
--

CREATE TABLE `jogorfidambiente5` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente6`
--

CREATE TABLE `jogorfidambiente6` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente7`
--

CREATE TABLE `jogorfidambiente7` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente8`
--

CREATE TABLE `jogorfidambiente8` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogorfidambiente9`
--

CREATE TABLE `jogorfidambiente9` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente1`
--

CREATE TABLE `jogosambiente1` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente2`
--

CREATE TABLE `jogosambiente2` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente3`
--

CREATE TABLE `jogosambiente3` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente4`
--

CREATE TABLE `jogosambiente4` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente5`
--

CREATE TABLE `jogosambiente5` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente6`
--

CREATE TABLE `jogosambiente6` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente7`
--

CREATE TABLE `jogosambiente7` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente8`
--

CREATE TABLE `jogosambiente8` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `jogosambiente9`
--

CREATE TABLE `jogosambiente9` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `versao` varchar(50) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `mundo`
--

CREATE TABLE `mundo` (
  `id` int(11) NOT NULL,
  `tipo` varchar(50) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `img` int(11) NOT NULL,
  `link` varchar(50) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `musicas`
--

CREATE TABLE `musicas` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `ativo` varchar(50) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `playlist` varchar(200) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `sites`
--

CREATE TABLE `sites` (
  `id` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `dominio` varchar(100) NOT NULL,
  `ativo` varchar(10) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `new` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `token`
--

CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `chave` varchar(50) NOT NULL,
  `data_expirar` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- --------------------------------------------------------

--
-- Estrutura da tabela `turmas`
--

CREATE TABLE `turmas` (
  `id` int(11) NOT NULL,
  `nomeTurma` varchar(30) DEFAULT NULL,
  `codTurma` varchar(50) NOT NULL,
  `professor` int(11) DEFAULT NULL,
  `mundo` varchar(30) NOT NULL,
  `iconeTurma` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `turmas`
--

INSERT INTO `turmas` (`id`, `nomeTurma`, `codTurma`, `professor`, `mundo`, `iconeTurma`) VALUES
(1, 'Sem Turma', '135791_0', 1, '5', 'turma01'),
(513, 'Sem Turma', '315524_0', 250, '5', 'SemTurma'),
(514, 'Turma Quadrada', '315524_1', 250, '5', 'turma03'),
(518, 'Turma Estrela', '315524_2', 250, '5', 'turma01'),
(519, 'Sem Turma', '707394_0', 251, '5', 'SemTurma'),
(520, 'Turma Estrela', '707394_1', 251, '5', 'turma01');

-- --------------------------------------------------------

--
-- Estrutura da tabela `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `nome` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `senha` varchar(50) NOT NULL,
  `senha2` varchar(50) NOT NULL,
  `perfil` varchar(50) NOT NULL,
  `codProfessor` varchar(50) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Extraindo dados da tabela `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `nome`, `email`, `senha`, `senha2`, `perfil`, `codProfessor`) VALUES
(1, 'admin', 'admin@email.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', 'admin', '135791'),
(250, 'Professor', 'professor@email.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', 'professor', '315524'),
(251, 'Lucas Stradiotto', 'lucas@email.com', '25f9e794323b453885f5181f1b624d0b', '25f9e794323b453885f5181f1b624d0b', 'professor', '707394');

-- --------------------------------------------------------

--
-- Estrutura da tabela `videos`
--

CREATE TABLE `videos` (
  `id` int(11) NOT NULL,
  `idTurma` int(11) NOT NULL,
  `ativo` varchar(30) NOT NULL,
  `nomeArquivo` varchar(50) NOT NULL,
  `nome_video` varchar(50) NOT NULL,
  `link` varchar(50) NOT NULL,
  `new` int(11) NOT NULL,
  `size` varchar(100) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Índices para tabelas despejadas
--

--
-- Índices para tabela `alunos`
--
ALTER TABLE `alunos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idProfessor` (`idProfessor`);

--
-- Índices para tabela `alunoturma`
--
ALTER TABLE `alunoturma`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idAluno` (`idAluno`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `avatar`
--
ALTER TABLE `avatar`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `documentos`
--
ALTER TABLE `documentos`
  ADD PRIMARY KEY (`id`);

--
-- Índices para tabela `ebookambiente1`
--
ALTER TABLE `ebookambiente1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente2`
--
ALTER TABLE `ebookambiente2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente3`
--
ALTER TABLE `ebookambiente3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente4`
--
ALTER TABLE `ebookambiente4`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente5`
--
ALTER TABLE `ebookambiente5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente6`
--
ALTER TABLE `ebookambiente6`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente7`
--
ALTER TABLE `ebookambiente7`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente8`
--
ALTER TABLE `ebookambiente8`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `ebookambiente9`
--
ALTER TABLE `ebookambiente9`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `historico`
--
ALTER TABLE `historico`
  ADD PRIMARY KEY (`idHistorico`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `horasdeuso`
--
ALTER TABLE `horasdeuso`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente1`
--
ALTER TABLE `jogorfidambiente1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente2`
--
ALTER TABLE `jogorfidambiente2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente3`
--
ALTER TABLE `jogorfidambiente3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente4`
--
ALTER TABLE `jogorfidambiente4`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente5`
--
ALTER TABLE `jogorfidambiente5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente6`
--
ALTER TABLE `jogorfidambiente6`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente7`
--
ALTER TABLE `jogorfidambiente7`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente8`
--
ALTER TABLE `jogorfidambiente8`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogorfidambiente9`
--
ALTER TABLE `jogorfidambiente9`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente1`
--
ALTER TABLE `jogosambiente1`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente2`
--
ALTER TABLE `jogosambiente2`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente3`
--
ALTER TABLE `jogosambiente3`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente4`
--
ALTER TABLE `jogosambiente4`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente5`
--
ALTER TABLE `jogosambiente5`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente6`
--
ALTER TABLE `jogosambiente6`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente7`
--
ALTER TABLE `jogosambiente7`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente8`
--
ALTER TABLE `jogosambiente8`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `jogosambiente9`
--
ALTER TABLE `jogosambiente9`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `mundo`
--
ALTER TABLE `mundo`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `musicas`
--
ALTER TABLE `musicas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `sites`
--
ALTER TABLE `sites`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- Índices para tabela `token`
--
ALTER TABLE `token`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idUsuario` (`idUsuario`);

--
-- Índices para tabela `turmas`
--
ALTER TABLE `turmas`
  ADD PRIMARY KEY (`id`),
  ADD KEY `professor` (`professor`);

--
-- Índices para tabela `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `email` (`email`),
  ADD UNIQUE KEY `codProfessor` (`codProfessor`);

--
-- Índices para tabela `videos`
--
ALTER TABLE `videos`
  ADD PRIMARY KEY (`id`),
  ADD KEY `idTurma` (`idTurma`);

--
-- AUTO_INCREMENT de tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `alunos`
--
ALTER TABLE `alunos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2304;

--
-- AUTO_INCREMENT de tabela `alunoturma`
--
ALTER TABLE `alunoturma`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=94;

--
-- AUTO_INCREMENT de tabela `avatar`
--
ALTER TABLE `avatar`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `documentos`
--
ALTER TABLE `documentos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente1`
--
ALTER TABLE `ebookambiente1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente2`
--
ALTER TABLE `ebookambiente2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente3`
--
ALTER TABLE `ebookambiente3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente4`
--
ALTER TABLE `ebookambiente4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente5`
--
ALTER TABLE `ebookambiente5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente6`
--
ALTER TABLE `ebookambiente6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente7`
--
ALTER TABLE `ebookambiente7`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente8`
--
ALTER TABLE `ebookambiente8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `ebookambiente9`
--
ALTER TABLE `ebookambiente9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `historico`
--
ALTER TABLE `historico`
  MODIFY `idHistorico` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `horasdeuso`
--
ALTER TABLE `horasdeuso`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente1`
--
ALTER TABLE `jogorfidambiente1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente2`
--
ALTER TABLE `jogorfidambiente2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente3`
--
ALTER TABLE `jogorfidambiente3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente4`
--
ALTER TABLE `jogorfidambiente4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente5`
--
ALTER TABLE `jogorfidambiente5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente6`
--
ALTER TABLE `jogorfidambiente6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente7`
--
ALTER TABLE `jogorfidambiente7`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=115;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente8`
--
ALTER TABLE `jogorfidambiente8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogorfidambiente9`
--
ALTER TABLE `jogorfidambiente9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente1`
--
ALTER TABLE `jogosambiente1`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente2`
--
ALTER TABLE `jogosambiente2`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente3`
--
ALTER TABLE `jogosambiente3`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente4`
--
ALTER TABLE `jogosambiente4`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente5`
--
ALTER TABLE `jogosambiente5`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente6`
--
ALTER TABLE `jogosambiente6`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente7`
--
ALTER TABLE `jogosambiente7`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente8`
--
ALTER TABLE `jogosambiente8`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `jogosambiente9`
--
ALTER TABLE `jogosambiente9`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `mundo`
--
ALTER TABLE `mundo`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=24;

--
-- AUTO_INCREMENT de tabela `musicas`
--
ALTER TABLE `musicas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `sites`
--
ALTER TABLE `sites`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `token`
--
ALTER TABLE `token`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `turmas`
--
ALTER TABLE `turmas`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=522;

--
-- AUTO_INCREMENT de tabela `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=252;

--
-- AUTO_INCREMENT de tabela `videos`
--
ALTER TABLE `videos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT;

--
-- Restrições para despejos de tabelas
--

--
-- Limitadores para a tabela `alunos`
--
ALTER TABLE `alunos`
  ADD CONSTRAINT `alunos_ibfk_1` FOREIGN KEY (`idProfessor`) REFERENCES `usuario` (`idUsuario`);

--
-- Limitadores para a tabela `alunoturma`
--
ALTER TABLE `alunoturma`
  ADD CONSTRAINT `alunoturma_ibfk_1` FOREIGN KEY (`idAluno`) REFERENCES `alunos` (`id`),
  ADD CONSTRAINT `alunoturma_ibfk_2` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `avatar`
--
ALTER TABLE `avatar`
  ADD CONSTRAINT `avatar_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente1`
--
ALTER TABLE `ebookambiente1`
  ADD CONSTRAINT `ebookambiente1_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente2`
--
ALTER TABLE `ebookambiente2`
  ADD CONSTRAINT `ebookambiente2_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente3`
--
ALTER TABLE `ebookambiente3`
  ADD CONSTRAINT `ebookambiente3_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente4`
--
ALTER TABLE `ebookambiente4`
  ADD CONSTRAINT `ebookambiente4_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente5`
--
ALTER TABLE `ebookambiente5`
  ADD CONSTRAINT `ebookambiente5_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente6`
--
ALTER TABLE `ebookambiente6`
  ADD CONSTRAINT `ebookambiente6_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente7`
--
ALTER TABLE `ebookambiente7`
  ADD CONSTRAINT `ebookambiente7_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente8`
--
ALTER TABLE `ebookambiente8`
  ADD CONSTRAINT `ebookambiente8_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `ebookambiente9`
--
ALTER TABLE `ebookambiente9`
  ADD CONSTRAINT `ebookambiente9_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `historico`
--
ALTER TABLE `historico`
  ADD CONSTRAINT `historico_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `horasdeuso`
--
ALTER TABLE `horasdeuso`
  ADD CONSTRAINT `horasdeuso_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente1`
--
ALTER TABLE `jogorfidambiente1`
  ADD CONSTRAINT `jogorfidambiente1_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente2`
--
ALTER TABLE `jogorfidambiente2`
  ADD CONSTRAINT `jogorfidambiente2_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente3`
--
ALTER TABLE `jogorfidambiente3`
  ADD CONSTRAINT `jogorfidambiente3_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente4`
--
ALTER TABLE `jogorfidambiente4`
  ADD CONSTRAINT `jogorfidambiente4_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente5`
--
ALTER TABLE `jogorfidambiente5`
  ADD CONSTRAINT `jogorfidambiente5_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente6`
--
ALTER TABLE `jogorfidambiente6`
  ADD CONSTRAINT `jogorfidambiente6_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente7`
--
ALTER TABLE `jogorfidambiente7`
  ADD CONSTRAINT `jogorfidambiente7_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente8`
--
ALTER TABLE `jogorfidambiente8`
  ADD CONSTRAINT `jogorfidambiente8_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogorfidambiente9`
--
ALTER TABLE `jogorfidambiente9`
  ADD CONSTRAINT `jogorfidambiente9_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente1`
--
ALTER TABLE `jogosambiente1`
  ADD CONSTRAINT `jogosambiente1_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente2`
--
ALTER TABLE `jogosambiente2`
  ADD CONSTRAINT `jogosambiente2_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente3`
--
ALTER TABLE `jogosambiente3`
  ADD CONSTRAINT `jogosambiente3_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente4`
--
ALTER TABLE `jogosambiente4`
  ADD CONSTRAINT `jogosambiente4_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente5`
--
ALTER TABLE `jogosambiente5`
  ADD CONSTRAINT `jogosambiente5_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente6`
--
ALTER TABLE `jogosambiente6`
  ADD CONSTRAINT `jogosambiente6_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente7`
--
ALTER TABLE `jogosambiente7`
  ADD CONSTRAINT `jogosambiente7_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente8`
--
ALTER TABLE `jogosambiente8`
  ADD CONSTRAINT `jogosambiente8_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `jogosambiente9`
--
ALTER TABLE `jogosambiente9`
  ADD CONSTRAINT `jogosambiente9_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `mundo`
--
ALTER TABLE `mundo`
  ADD CONSTRAINT `mundo_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `musicas`
--
ALTER TABLE `musicas`
  ADD CONSTRAINT `musicas_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `sites`
--
ALTER TABLE `sites`
  ADD CONSTRAINT `sites_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);

--
-- Limitadores para a tabela `token`
--
ALTER TABLE `token`
  ADD CONSTRAINT `token_ibfk_1` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`);

--
-- Limitadores para a tabela `turmas`
--
ALTER TABLE `turmas`
  ADD CONSTRAINT `turmas_ibfk_1` FOREIGN KEY (`professor`) REFERENCES `usuario` (`idUsuario`);

--
-- Limitadores para a tabela `videos`
--
ALTER TABLE `videos`
  ADD CONSTRAINT `videos_ibfk_1` FOREIGN KEY (`idTurma`) REFERENCES `turmas` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
