<?
/*ini_set('display_errors',1);
ini_set('display_startup_erros',1);
error_reporting(E_ALL);*/
header('Access-Control-Allow-Origin: *');
require_once('conexao.php');

//$codigo = '';
$existe = true;
do{
    $codigo = exec('/usr/bin/kgen-vrfy educamix 1');
    $codigo = explode(" ", $codigo)[0];

    try{
        $search = $client->get(array(
            'index'=>'mixkids',
            'type'=>'oem',
            'id'=>$codigo
        ));

        if(@$search['found'] != 1){
            $existe = false;
        }
    }catch(Exception $e){
        if($e->getCode() == '404'){
            $existe = false;
        }
    }
}while($existe);

$cad = array(
    'index'=>'mixkids',
    'type'=>'oem',
    'id'=>$codigo,
    'body'=>array(
        'oem'=> $codigo,
        'valido' => false,
        'email'=>''
    )
);
$res = $client->index($cad);

echo $codigo;