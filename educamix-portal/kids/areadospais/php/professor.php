<?php
ini_set('display_errors', 1);
ini_set('display_startup_erros', 1);
error_reporting(E_ALL);
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');

$conn = new conecta();

$act = $_GET['act'];

if($act == 'get'){

    $result = $conn->searchProfessor();

    $array = [];

    $array['professores'] = $result;

    die(json_encode($array));

} else if ($act == 'cadastrar') {

    $nome = $_POST['nomeCadProf'];
    if($nome == ''){
        die('1');
    }
    $email = $_POST['emailCadProf'];
    if($email == ''){
        die('2');
    }

    $senha = md5($_POST['senhaCadProf']);
    $senha2 = $senha;
    if($senha == '') {
        die('3');
    }
    $perfil = $_POST['perfilCadProf'];
    if($perfil == ''){
        die('4');
    }

    $codProfessor = rand(1, 999999);

    $pesquisaCod = $conn->getcodProfessor($codProfessor);

    if ($pesquisaCod) {
        die('5');
    } else {

        $result = $conn->cadastrar($nome, $email, $senha, $senha2, $perfil, $codProfessor);

        $resultadoget = $conn->getProfessores();

        $idProf = $resultadoget['idUsuario'];
        $nome_turma = "Sem Turma";
        $codTurma = $codProfessor . '_0';
        $mundo_turma = 5;
        $icone_turma = "SemTurma";

        $resultadoA = $conn->cadastrarTurma($nome_turma, $idProf, $codTurma, $mundo_turma, $icone_turma);

        $searchTurma = $conn->searchTurmaProfessor($idProf);
        foreach ($searchTurma as $key => $value) {
            $id = $value['id'];

            $searchVideos = $conn->searchVideos($id);
            if (!$searchVideos) {
                $idTurma1 = 1;
                $searchVideoTurma1 = $conn->searchVideos($idTurma1);
                foreach ($searchVideoTurma1 as $key => $value) {
                    $idTurma = $id;
                    $ativo = $value['ativo'];
                    $nomeVideo = $value['nome_video'];
                    $link = $value['link'];
                    $new = $value['new'];
                    $nomeArquivo = $value['nomeArquivo'];

                    $addVideo = $conn->adicionarVideo($idTurma, $ativo, $nomeArquivo, $nomeVideo, $link, $new);
                }
            }

            $searchJogos1 = $conn->searchJogos1($id);
            if (!$searchJogos1) {
                $idTurma1 = 1;
                $searchJogos1Turma1 = $conn->searchJogos1($idTurma1);
                foreach ($searchJogos1Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo1 = $conn->adicionarJogos1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos2 = $conn->searchJogos2($id);
            if (!$searchJogos2) {
                $idTurma1 = 1;
                $searchJogos2Turma1 = $conn->searchJogos2($idTurma1);
                foreach ($searchJogos2Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo2 = $conn->adicionarJogos2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos3 = $conn->searchJogos3($id);
            if (!$searchJogos3) {
                $idTurma1 = 1;
                $searchJogos3Turma1 = $conn->searchJogos3($idTurma1);
                foreach ($searchJogos3Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo3 = $conn->adicionarJogos3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos4 = $conn->searchJogos4($id);
            if (!$searchJogos4) {
                $idTurma1 = 1;
                $searchJogos4Turma1 = $conn->searchJogos4($idTurma1);
                foreach ($searchJogos4Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo4 = $conn->adicionarJogos4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos5 = $conn->searchJogos5($id);
            if (!$searchJogos5) {
                $idTurma1 = 1;
                $searchJogos5Turma1 = $conn->searchJogos5($idTurma1);
                foreach ($searchJogos5Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo5 = $conn->adicionarJogos5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos6 = $conn->searchJogos6($id);
            if (!$searchJogos6) {
                $idTurma1 = 1;
                $searchJogos6Turma1 = $conn->searchJogos6($idTurma1);
                foreach ($searchJogos6Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo6 = $conn->adicionarJogos6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos7 = $conn->searchJogos7($id);
            if (!$searchJogos7) {
                $idTurma1 = 1;
                $searchJogos7Turma1 = $conn->searchJogos7($idTurma1);
                foreach ($searchJogos7Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo7 = $conn->adicionarJogos7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos8 = $conn->searchJogos8($id);
            if (!$searchJogos8) {
                $idTurma1 = 1;
                $searchJogos8Turma1 = $conn->searchJogos8($idTurma1);
                foreach ($searchJogos8Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo8 = $conn->adicionarJogos8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogos9 = $conn->searchJogos9($id);
            if (!$searchJogos9) {
                $idTurma1 = 1;
                $searchJogos9Turma1 = $conn->searchJogos9($idTurma1);
                foreach ($searchJogos9Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogo9 = $conn->adicionarJogos9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks1 = $conn->searchEbooks1($id);
            if (!$searchEbooks1) {
                $idTurma1 = 1;
                $searchEbooks1Turma1 = $conn->searchEbooks1($idTurma1);
                foreach ($searchEbooks1Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook1 = $conn->adicionarEbooks1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks2 = $conn->searchEbooks2($id);
            if (!$searchEbooks2) {
                $idTurma1 = 1;
                $searchEbooks2Turma1 = $conn->searchEbooks2($idTurma1);
                foreach ($searchEbooks2Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook2 = $conn->adicionarEbooks2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks3 = $conn->searchEbooks3($id);
            if (!$searchEbooks3) {
                $idTurma1 = 1;
                $searchEbooks3Turma1 = $conn->searchEbooks3($idTurma1);
                foreach ($searchEbooks3Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook3 = $conn->adicionarEbooks3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks4 = $conn->searchEbooks4($id);
            if (!$searchEbooks4) {
                $idTurma1 = 1;
                $searchEbooks4Turma1 = $conn->searchEbooks4($idTurma1);
                foreach ($searchEbooks4Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook4 = $conn->adicionarEbooks4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks5 = $conn->searchEbooks5($id);
            if (!$searchEbooks5) {
                $idTurma1 = 1;
                $searchEbooks5Turma1 = $conn->searchEbooks5($idTurma1);
                foreach ($searchEbooks5Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook5 = $conn->adicionarEbooks5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks6 = $conn->searchEbooks6($id);
            if (!$searchEbooks6) {
                $idTurma1 = 1;
                $searchEbooks6Turma1 = $conn->searchEbooks6($idTurma1);
                foreach ($searchEbooks6Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook6 = $conn->adicionarEbooks6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks7 = $conn->searchEbooks7($id);
            if (!$searchEbooks7) {
                $idTurma1 = 1;
                $searchEbooks7Turma1 = $conn->searchEbooks7($idTurma1);
                foreach ($searchEbooks7Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook7 = $conn->adicionarEbooks7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks8 = $conn->searchEbooks8($id);
            if (!$searchEbooks8) {
                $idTurma1 = 1;
                $searchEbooks8Turma1 = $conn->searchEbooks8($idTurma1);
                foreach ($searchEbooks8Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook8 = $conn->adicionarEbooks8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchEbooks9 = $conn->searchEbooks9($id);
            if (!$searchEbooks9) {
                $idTurma1 = 1;
                $searchEbooks9Turma1 = $conn->searchEbooks9($idTurma1);
                foreach ($searchEbooks9Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addEbook9 = $conn->adicionarEbooks9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid1 = $conn->searchJogoRfid1($id);
            if (!$searchJogoRfid1) {
                $idTurma1 = 1;
                $searchJogoRfid1Turma1 = $conn->searchJogoRfid1($idTurma1);
                foreach ($searchJogoRfid1Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid1 = $conn->adicionarJogoRfid1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid2 = $conn->searchJogoRfid2($id);
            if (!$searchJogoRfid2) {
                $idTurma1 = 1;
                $searchJogoRfid2Turma1 = $conn->searchJogoRfid2($idTurma1);
                foreach ($searchJogoRfid2Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid2 = $conn->adicionarJogoRfid2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid3 = $conn->searchJogoRfid3($id);
            if (!$searchJogoRfid3) {
                $idTurma1 = 1;
                $searchJogoRfid3Turma1 = $conn->searchJogoRfid3($idTurma1);
                foreach ($searchJogoRfid3Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid3 = $conn->adicionarJogoRfid3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid4 = $conn->searchJogoRfid4($id);
            if (!$searchJogoRfid4) {
                $idTurma1 = 1;
                $searchJogoRfid4Turma1 = $conn->searchJogoRfid4($idTurma1);
                foreach ($searchJogoRfid4Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid4 = $conn->adicionarJogoRfid4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid5 = $conn->searchJogoRfid5($id);
            if (!$searchJogoRfid5) {
                $idTurma1 = 1;
                $searchJogoRfid5Turma1 = $conn->searchJogoRfid5($idTurma1);
                foreach ($searchJogoRfid5Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid5 = $conn->adicionarJogoRfid5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid6 = $conn->searchJogoRfid6($id);
            if (!$searchJogoRfid6) {
                $idTurma1 = 1;
                $searchJogoRfid6Turma1 = $conn->searchJogoRfid6($idTurma1);
                foreach ($searchJogoRfid6Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid6 = $conn->adicionarJogoRfid6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid7 = $conn->searchJogoRfid7($id);
            if (!$searchJogoRfid7) {
                $idTurma1 = 1;
                $searchJogoRfid7Turma1 = $conn->searchJogoRfid7($idTurma1);
                foreach ($searchJogoRfid7Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid7 = $conn->adicionarJogoRfid7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid8 = $conn->searchJogoRfid8($id);
            if (!$searchJogoRfid8) {
                $idTurma1 = 1;
                $searchJogoRfid8Turma1 = $conn->searchJogoRfid8($idTurma1);
                foreach ($searchJogoRfid8Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid8 = $conn->adicionarJogoRfid8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchJogoRfid9 = $conn->searchJogoRfid9($id);
            if (!$searchJogoRfid9) {
                $idTurma1 = 1;
                $searchJogoRfid9Turma1 = $conn->searchJogoRfid9($idTurma1);
                foreach ($searchJogoRfid9Turma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addJogoRfid9 = $conn->adicionarJogoRfid9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchSites = $conn->searchSites($id);
            if (!$searchSites) {
                $idTurma1 = 1;
                $searchSitesTurma1 = $conn->searchSites($idTurma1);
                foreach ($searchSitesTurma1 as $key => $value) {
                    $nome = $value['nome'];
                    $url = $value['dominio'];
                    $ativo = $value['ativo'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addSite = $conn->cadastrarSites($nome, $url, $ativo, $idTurma, $new);
                }
            }

            $searchMusicas = $conn->searchMusicas($id);
            if (!$searchMusicas) {
                $idTurma1 = 1;
                $searchMusicasTurma1 = $conn->searchMusicas($idTurma1);
                foreach ($searchMusicasTurma1 as $key => $value) {
                    $idTurma = $id;
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $nome = $value['nome'];
                    $playlist = $value['playlist'];
                    $new = $value['new'];

                    $addMusicas = $conn->cadastrarPlaylist($idTurma, $ativo, $nomeArquivo, $nome, $playlist, $new);
                }
            }

            $searchMundo = $conn->searchMundos($id);
            if (!$searchMundo) {
                $idTurma1 = 1;
                $searchMundoTurma1 = $conn->searchMundos($idTurma1);
                foreach ($searchMundoTurma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addMundo = $conn->adicionarMundo($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }

            $searchAvatar = $conn->searchAvatar($id);
            if (!$searchAvatar) {
                $idTurma1 = 1;
                $searchAvatarTurma1 = $conn->searchAvatar($idTurma1);
                foreach ($searchAvatarTurma1 as $key => $value) {
                    $tipo = $value['tipo'];
                    $nome = $value['nome'];
                    $ativo = $value['ativo'];
                    $nomeArquivo = $value['nomeArquivo'];
                    $img = $value['img'];
                    $url = $value['link'];
                    $idTurma = $id;
                    $new = $value['new'];

                    $addAvatar = $conn->adicionarAvatar($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                }
            }
        }

        die('0');
    }
} else if ($act == 'atualizar') {

    $id = $_POST['id'];
    $email = $_POST['email'];
    $nome = $_POST['nome'];

    $result = $conn->atualizarCadastro($id, $email, $nome);

    die('0');
} else if ($act == 'cadastroLote') {

    $arquivo = $_FILES['file'];
    $file = $arquivo['tmp_name'];
    $loop = 0;
    if (($objeto = fopen($file, "r")) !== FALSE) {
        while (($dados = fgetcsv($objeto, 1000, ";")) !== FALSE) {
            if ($dados[0] != '' && $dados[1] != '' && $dados[2] != '' && $dados[3] != '') {
                if ($loop == 0) {
                    $nomeTitulo = $dados[0];
                    $emailTitulo = $dados[1];
                    $senhaTitulo = $dados[2];
                    $senha2Titulo = $dados[3];
                    if ($nomeTitulo != 'Nome' || $emailTitulo != 'E-mail' || $senhaTitulo != 'Senha' || $senha2Titulo != 'Confirmar Senha') {
                        break;
                    }
                }

                if ($loop >= 1) {
                    $nome = utf8_encode($dados[0]);
                    $email = $dados[1];
                    $senha = md5($dados[2]);
                    $senha2 = md5($dados[3]);
                    $perfil = 'professor';
                    $codProfessor = rand(1, 999999);
                    if (!preg_match($regex['email'], $email) || $senha != $senha2) {
                        break;
                    }

                    $result = $conn->cadastrar($email, $senha, $senha2, $nome, $perfil, $codProfessor);

                    $resultadoget = $conn->getProfessores();

                    $idProf = $resultadoget['idUsuario'];
                    $nome_turmaA = "Turma A";
                    $codTurmaA = $codProfessor . '_0';
                    $mundo_turmaA = 5;
                    $nome_turmaB = "Turma B";
                    $codTurmaB = $codProfessor . '_1';
                    $mundo_turmaB = 5;

                    // $resultadoA = $conn->cadastrarTurma($nome_turmaA, $idProf, $codTurmaA, $mundo_turmaA);
                    // $resultadoB = $conn->cadastrarTurma($nome_turmaB, $idProf, $codTurmaB, $mundo_turmaB);

                    $searchTurma = $conn->searchTurmaProfessor($idProf);
                    foreach ($searchTurma as $key => $value) {
                        $id = $value['id'];

                        $searchVideos = $conn->searchVideos($id);
                        if (!$searchVideos) {
                            $idTurma1 = 1;
                            $searchVideoTurma1 = $conn->searchVideos($idTurma1);
                            foreach ($searchVideoTurma1 as $key => $value) {
                                $idTurma = $id;
                                $ativo = $value['ativo'];
                                $nomeVideo = $value['nome_video'];
                                $link = $value['link'];
                                $new = $value['new'];
                                $nomeArquivo = $value['nomeArquivo'];

                                $addVideo = $conn->adicionarVideo($idTurma, $ativo, $nomeArquivo, $nomeVideo, $link, $new);
                            }
                        }

                        $searchJogos1 = $conn->searchJogos1($id);
                        if (!$searchJogos1) {
                            $idTurma1 = 1;
                            $searchJogos1Turma1 = $conn->searchJogos1($idTurma1);
                            foreach ($searchJogos1Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo1 = $conn->adicionarJogos1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos2 = $conn->searchJogos2($id);
                        if (!$searchJogos2) {
                            $idTurma1 = 1;
                            $searchJogos2Turma1 = $conn->searchJogos2($idTurma1);
                            foreach ($searchJogos2Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo2 = $conn->adicionarJogos2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos3 = $conn->searchJogos3($id);
                        if (!$searchJogos3) {
                            $idTurma1 = 1;
                            $searchJogos3Turma1 = $conn->searchJogos3($idTurma1);
                            foreach ($searchJogos3Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo3 = $conn->adicionarJogos3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos4 = $conn->searchJogos4($id);
                        if (!$searchJogos4) {
                            $idTurma1 = 1;
                            $searchJogos4Turma1 = $conn->searchJogos4($idTurma1);
                            foreach ($searchJogos4Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo4 = $conn->adicionarJogos4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos5 = $conn->searchJogos5($id);
                        if (!$searchJogos5) {
                            $idTurma1 = 1;
                            $searchJogos5Turma1 = $conn->searchJogos5($idTurma1);
                            foreach ($searchJogos5Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo5 = $conn->adicionarJogos5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos6 = $conn->searchJogos6($id);
                        if (!$searchJogos6) {
                            $idTurma1 = 1;
                            $searchJogos6Turma1 = $conn->searchJogos6($idTurma1);
                            foreach ($searchJogos6Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo6 = $conn->adicionarJogos6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos7 = $conn->searchJogos7($id);
                        if (!$searchJogos7) {
                            $idTurma1 = 1;
                            $searchJogos7Turma1 = $conn->searchJogos7($idTurma1);
                            foreach ($searchJogos7Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo7 = $conn->adicionarJogos7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos8 = $conn->searchJogos8($id);
                        if (!$searchJogos8) {
                            $idTurma1 = 1;
                            $searchJogos8Turma1 = $conn->searchJogos8($idTurma1);
                            foreach ($searchJogos8Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo8 = $conn->adicionarJogos8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogos9 = $conn->searchJogos9($id);
                        if (!$searchJogos9) {
                            $idTurma1 = 1;
                            $searchJogos9Turma1 = $conn->searchJogos9($idTurma1);
                            foreach ($searchJogos9Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogo9 = $conn->adicionarJogos9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks1 = $conn->searchEbooks1($id);
                        if (!$searchEbooks1) {
                            $idTurma1 = 1;
                            $searchEbooks1Turma1 = $conn->searchEbooks1($idTurma1);
                            foreach ($searchEbooks1Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook1 = $conn->adicionarEbooks1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks2 = $conn->searchEbooks2($id);
                        if (!$searchEbooks2) {
                            $idTurma1 = 1;
                            $searchEbooks2Turma1 = $conn->searchEbooks2($idTurma1);
                            foreach ($searchEbooks2Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook2 = $conn->adicionarEbooks2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks3 = $conn->searchEbooks3($id);
                        if (!$searchEbooks3) {
                            $idTurma1 = 1;
                            $searchEbooks3Turma1 = $conn->searchEbooks3($idTurma1);
                            foreach ($searchEbooks3Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook3 = $conn->adicionarEbooks3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks4 = $conn->searchEbooks4($id);
                        if (!$searchEbooks4) {
                            $idTurma1 = 1;
                            $searchEbooks4Turma1 = $conn->searchEbooks4($idTurma1);
                            foreach ($searchEbooks4Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook4 = $conn->adicionarEbooks4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks5 = $conn->searchEbooks5($id);
                        if (!$searchEbooks5) {
                            $idTurma1 = 1;
                            $searchEbooks5Turma1 = $conn->searchEbooks5($idTurma1);
                            foreach ($searchEbooks5Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook5 = $conn->adicionarEbooks5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks6 = $conn->searchEbooks6($id);
                        if (!$searchEbooks6) {
                            $idTurma1 = 1;
                            $searchEbooks6Turma1 = $conn->searchEbooks6($idTurma1);
                            foreach ($searchEbooks6Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook6 = $conn->adicionarEbooks6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks7 = $conn->searchEbooks7($id);
                        if (!$searchEbooks7) {
                            $idTurma1 = 1;
                            $searchEbooks7Turma1 = $conn->searchEbooks7($idTurma1);
                            foreach ($searchEbooks7Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook7 = $conn->adicionarEbooks7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks8 = $conn->searchEbooks8($id);
                        if (!$searchEbooks8) {
                            $idTurma1 = 1;
                            $searchEbooks8Turma1 = $conn->searchEbooks8($idTurma1);
                            foreach ($searchEbooks8Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook8 = $conn->adicionarEbooks8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchEbooks9 = $conn->searchEbooks9($id);
                        if (!$searchEbooks9) {
                            $idTurma1 = 1;
                            $searchEbooks9Turma1 = $conn->searchEbooks9($idTurma1);
                            foreach ($searchEbooks9Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addEbook9 = $conn->adicionarEbooks9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid1 = $conn->searchJogoRfid1($id);
                        if (!$searchJogoRfid1) {
                            $idTurma1 = 1;
                            $searchJogoRfid1Turma1 = $conn->searchJogoRfid1($idTurma1);
                            foreach ($searchJogoRfid1Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid1 = $conn->adicionarJogoRfid1($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid2 = $conn->searchJogoRfid2($id);
                        if (!$searchJogoRfid2) {
                            $idTurma1 = 1;
                            $searchJogoRfid2Turma1 = $conn->searchJogoRfid2($idTurma1);
                            foreach ($searchJogoRfid2Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid2 = $conn->adicionarJogoRfid2($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid3 = $conn->searchJogoRfid3($id);
                        if (!$searchJogoRfid3) {
                            $idTurma1 = 1;
                            $searchJogoRfid3Turma1 = $conn->searchJogoRfid3($idTurma1);
                            foreach ($searchJogoRfid3Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid3 = $conn->adicionarJogoRfid3($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid4 = $conn->searchJogoRfid4($id);
                        if (!$searchJogoRfid4) {
                            $idTurma1 = 1;
                            $searchJogoRfid4Turma1 = $conn->searchJogoRfid4($idTurma1);
                            foreach ($searchJogoRfid4Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid4 = $conn->adicionarJogoRfid4($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid5 = $conn->searchJogoRfid5($id);
                        if (!$searchJogoRfid5) {
                            $idTurma1 = 1;
                            $searchJogoRfid5Turma1 = $conn->searchJogoRfid5($idTurma1);
                            foreach ($searchJogoRfid5Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid5 = $conn->adicionarJogoRfid5($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid6 = $conn->searchJogoRfid6($id);
                        if (!$searchJogoRfid6) {
                            $idTurma1 = 1;
                            $searchJogoRfid6Turma1 = $conn->searchJogoRfid6($idTurma1);
                            foreach ($searchJogoRfid6Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid6 = $conn->adicionarJogoRfid6($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid7 = $conn->searchJogoRfid7($id);
                        if (!$searchJogoRfid7) {
                            $idTurma1 = 1;
                            $searchJogoRfid7Turma1 = $conn->searchJogoRfid7($idTurma1);
                            foreach ($searchJogoRfid7Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid7 = $conn->adicionarJogoRfid7($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid8 = $conn->searchJogoRfid8($id);
                        if (!$searchJogoRfid8) {
                            $idTurma1 = 1;
                            $searchJogoRfid8Turma1 = $conn->searchJogoRfid8($idTurma1);
                            foreach ($searchJogoRfid8Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid8 = $conn->adicionarJogoRfid8($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchJogoRfid9 = $conn->searchJogoRfid9($id);
                        if (!$searchJogoRfid9) {
                            $idTurma1 = 1;
                            $searchJogoRfid9Turma1 = $conn->searchJogoRfid9($idTurma1);
                            foreach ($searchJogoRfid9Turma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addJogoRfid9 = $conn->adicionarJogoRfid9($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchSites = $conn->searchSites($id);
                        if (!$searchSites) {
                            $idTurma1 = 1;
                            $searchSitesTurma1 = $conn->searchSites($idTurma1);
                            foreach ($searchSitesTurma1 as $key => $value) {
                                $nome = $value['nome'];
                                $url = $value['dominio'];
                                $ativo = $value['ativo'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addSite = $conn->cadastrarSites($nome, $url, $ativo, $idTurma, $new);
                            }
                        }

                        $searchMusicas = $conn->searchMusicas($id);
                        if (!$searchMusicas) {
                            $idTurma1 = 1;
                            $searchMusicasTurma1 = $conn->searchMusicas($idTurma1);
                            foreach ($searchMusicasTurma1 as $key => $value) {
                                $idTurma = $id;
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $nome = $value['nome'];
                                $playlist = $value['playlist'];
                                $new = $value['new'];

                                $addMusicas = $conn->cadastrarPlaylist($idTurma, $ativo, $nomeArquivo, $nome, $playlist, $new);
                            }
                        }

                        $searchMundo = $conn->searchMundos($id);
                        if (!$searchMundo) {
                            $idTurma1 = 1;
                            $searchMundoTurma1 = $conn->searchMundos($idTurma1);
                            foreach ($searchMundoTurma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addMundo = $conn->adicionarMundo($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }

                        $searchAvatar = $conn->searchAvatar($id);
                        if (!$searchAvatar) {
                            $idTurma1 = 1;
                            $searchAvatarTurma1 = $conn->searchAvatar($idTurma1);
                            foreach ($searchAvatarTurma1 as $key => $value) {
                                $tipo = $value['tipo'];
                                $nome = $value['nome'];
                                $ativo = $value['ativo'];
                                $nomeArquivo = $value['nomeArquivo'];
                                $img = $value['img'];
                                $url = $value['link'];
                                $idTurma = $id;
                                $new = $value['new'];

                                $addAvatar = $conn->adicionarAvatar($tipo, $nome, $ativo, $nomeArquivo, $img, $url, $idTurma, $new);
                            }
                        }
                    }
                }
                $loop++;
            }
        }
        fclose($objeto);
    }

    if (isset($resultadoB)) {
        die("0");
    } else {
        die("1");
    }
} else if ($act == 'remover') {
    
    $idUsuario = $_POST['idUsuario'];

    $searchAluno = $conn->searchChildProf($idUsuario);

    foreach ($searchAluno as $key => $value) {
        $idAluno = $value['id'];

        $semTurmaId = 1;
        $semTurmaNome = 'Sem Turma';
        $idProf = 1;

        $moveAlunoTurmaZero = $conn->moveAlunoTurmaZero($idAluno, $semTurmaId);

        $atualizarAlunoProf1 = $conn->atualizarAlunoProf($idAluno, $idProf, $semTurmaNome);
    }

    $searchTurma = $conn->searchTurmaProfessor($idUsuario);

    foreach ($searchTurma as $key => $value) {

        $idturmaPost = $value['id'];

        $removeVideoTurma = $conn->removeVideoTurma($idturmaPost);
        $removeJogo1Turma = $conn->removeJogo1Turma($idturmaPost);
        $removeJogo2Turma = $conn->removeJogo2Turma($idturmaPost);
        $removeJogo3Turma = $conn->removeJogo3Turma($idturmaPost);
        $removeJogo4Turma = $conn->removeJogo4Turma($idturmaPost);
        $removeJogo5Turma = $conn->removeJogo5Turma($idturmaPost);
        $removeJogo6Turma = $conn->removeJogo6Turma($idturmaPost);
        $removeJogo7Turma = $conn->removeJogo7Turma($idturmaPost);
        $removeJogo8Turma = $conn->removeJogo8Turma($idturmaPost);
        $removeJogo9Turma = $conn->removeJogo9Turma($idturmaPost);
        $removeEbook1Turma = $conn->removeEbook1Turma($idturmaPost);
        $removeEbook2Turma = $conn->removeEbook2Turma($idturmaPost);
        $removeEbook3Turma = $conn->removeEbook3Turma($idturmaPost);
        $removeEbook4Turma = $conn->removeEbook4Turma($idturmaPost);
        $removeEbook5Turma = $conn->removeEbook5Turma($idturmaPost);
        $removeEbook6Turma = $conn->removeEbook6Turma($idturmaPost);
        $removeEbook7Turma = $conn->removeEbook7Turma($idturmaPost);
        $removeEbook8Turma = $conn->removeEbook8Turma($idturmaPost);
        $removeEbook9Turma = $conn->removeEbook9Turma($idturmaPost);
        $removeJogoRfid1Turma = $conn->removeJogoRfid1Turma($idturmaPost);
        $removeJogoRfid2Turma = $conn->removeJogoRfid2Turma($idturmaPost);
        $removeJogoRfid3Turma = $conn->removeJogoRfid3Turma($idturmaPost);
        $removeJogoRfid4Turma = $conn->removeJogoRfid4Turma($idturmaPost);
        $removeJogoRfid5Turma = $conn->removeJogoRfid5Turma($idturmaPost);
        $removeJogoRfid6Turma = $conn->removeJogoRfid6Turma($idturmaPost);
        $removeJogoRfid7Turma = $conn->removeJogoRfid7Turma($idturmaPost);
        $removeJogoRfid8Turma = $conn->removeJogoRfid8Turma($idturmaPost);
        $removeJogoRfid9Turma = $conn->removeJogoRfid9Turma($idturmaPost);
        $removeAvatar = $conn->removeAvatar($idturmaPost);
        $removeHistorico = $conn->removeHistorico($idturmaPost);
        $removeHorasdeUso = $conn->removeHorasdeUso($idturmaPost);
        $removeSite = $conn->removeSite($idturmaPost);
        $removeMusica = $conn->removeMusica($idturmaPost);

        $removeTurma = $conn->removerTurmaProfessor($idturmaPost);
    }

    $removeProfessor = $conn->removerUsuario($idUsuario);

    die('0');

} else if($act == 'removerAll'){
    
    $idUsuario = $_POST['idUsuario'];

    $searchAluno = $conn->searchAlunoProf($idUsuario);

    foreach ($searchAluno as $key => $value) {

        $idAluno = $value['id'];

        $removerAlunoTurma = $conn->removeAlunoTurma($idAluno);

        $removerAluno = $conn->removerAluno($idAluno);
    }

    $searchTurma = $conn->searchTurmaProfessor($idUsuario);

    foreach ($searchTurma as $key => $value) {

        $idturmaPost = $value['id'];

        $removeVideoTurma = $conn->removeVideoTurma($idturmaPost);
        $removeJogo1Turma = $conn->removeJogo1Turma($idturmaPost);
        $removeJogo2Turma = $conn->removeJogo2Turma($idturmaPost);
        $removeJogo3Turma = $conn->removeJogo3Turma($idturmaPost);
        $removeJogo4Turma = $conn->removeJogo4Turma($idturmaPost);
        $removeJogo5Turma = $conn->removeJogo5Turma($idturmaPost);
        $removeJogo6Turma = $conn->removeJogo6Turma($idturmaPost);
        $removeJogo7Turma = $conn->removeJogo7Turma($idturmaPost);
        $removeJogo8Turma = $conn->removeJogo8Turma($idturmaPost);
        $removeJogo9Turma = $conn->removeJogo9Turma($idturmaPost);
        $removeEbook1Turma = $conn->removeEbook1Turma($idturmaPost);
        $removeEbook2Turma = $conn->removeEbook2Turma($idturmaPost);
        $removeEbook3Turma = $conn->removeEbook3Turma($idturmaPost);
        $removeEbook4Turma = $conn->removeEbook4Turma($idturmaPost);
        $removeEbook5Turma = $conn->removeEbook5Turma($idturmaPost);
        $removeEbook6Turma = $conn->removeEbook6Turma($idturmaPost);
        $removeEbook7Turma = $conn->removeEbook7Turma($idturmaPost);
        $removeEbook8Turma = $conn->removeEbook8Turma($idturmaPost);
        $removeEbook9Turma = $conn->removeEbook9Turma($idturmaPost);
        $removeJogoRfid1Turma = $conn->removeJogoRfid1Turma($idturmaPost);
        $removeJogoRfid2Turma = $conn->removeJogoRfid2Turma($idturmaPost);
        $removeJogoRfid3Turma = $conn->removeJogoRfid3Turma($idturmaPost);
        $removeJogoRfid4Turma = $conn->removeJogoRfid4Turma($idturmaPost);
        $removeJogoRfid5Turma = $conn->removeJogoRfid5Turma($idturmaPost);
        $removeJogoRfid6Turma = $conn->removeJogoRfid6Turma($idturmaPost);
        $removeJogoRfid7Turma = $conn->removeJogoRfid7Turma($idturmaPost);
        $removeJogoRfid8Turma = $conn->removeJogoRfid8Turma($idturmaPost);
        $removeJogoRfid9Turma = $conn->removeJogoRfid9Turma($idturmaPost);
        $removeAvatar = $conn->removeAvatar($idturmaPost);
        $removeHistorico = $conn->removeHistorico($idturmaPost);
        $removeHorasdeUso = $conn->removeHorasdeUso($idturmaPost);
        $removeSite = $conn->removeSite($idturmaPost);
        $removeMusica = $conn->removeMusica($idturmaPost);

        $removeTurma = $conn->removerTurmaProfessor($idturmaPost);
    }

    $removeProfessor = $conn->removerUsuario($idUsuario);

    die('0');

} else if ($act == 'verificaLogin') {

    $email = $_POST['email'];

    $verificaEmail = $conn->verificaEmail($email);

    die(json_encode($verificaEmail));
}
