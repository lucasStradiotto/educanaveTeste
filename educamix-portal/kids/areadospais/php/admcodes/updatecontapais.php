<?
/*
 * ERROS:
 * 0 = TUDO OK
 * 1 = Nome invalido
 * 2 = Data invalida
 * 3 = Erro ao inserir no banco
 *
 * 5 = OEM inválido
 */
session_start();
header('Access-Control-Allow-Origin: *');
require_once('../phphelper/regex.php');
require_once('../conexao.php');

echo $_GET['act'];
if(@$_GET['act'] == 'removerModelo'){


    $id = $_REQUEST['id'];

    echo $id;

    $updateOEM = array(
        'index'=>'mixkids',
        'type'=>'pais',
        'id'=>$id,
        'body'=>array(
            'doc'=>array(
                'modelo'=>''
            ),
            'doc_as_upsert' => true
        )
    );
    $client->update($updateOEM);
}
