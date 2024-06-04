<?php
session_start();
header('Access-Control-Allow-Origin: *');
require_once('phphelper/regex.php');
include_once('conexao.php');
require_once("../../phpmailer/class.phpmailer.php");

$conn = new conecta();

$email = preg_replace('/[^[:alnum:]_.-@]/', '', $_POST['email']);

$chave = $conn->gerarChaveAcesso($email);

//Envia e-mail
$to      = $email;
$assunto = "Educamix Kids - Alterar senha ";
$header  = 'MIME-Version: 1.0' . "\r\n";
$header .= 'Content-type: text/html; charset=utf-8' . "\r\n";
$header .= 'From: suporte@educamix.com.br \r\n';
$hostmail = 'suporte.teste.educamix@outlook.com';
$hostname = 'Suporte Educamix';

$message = "<h3>Solicitação de senha Educamix Kids</h3>
                <br/>
                <label>Copie e cole sua chave de acesso para alterar sua senha</label>
                <p>$chave</p>
                Caso não tenha solicitado ignore essa mensagem.<br/>
                Qualquer duvida ou sugestão entre em contato com o nosso suporte <a href='mailto:suporte@educamix.com.br'>suporte@educamix.com.br</a>";


function smtpmailer($to, $hostmail, $hostname, $assunto, $message)
{
    global $error;
    $mail = new PHPMailer();
    $mail->IsSMTP();        // Ativar SMTP
    $mail->SMTPDebug = 1;        // Debugar: 1 = erros e mensagens, 2 = mensagens apenas
    $mail->SMTPAuth = true;        // Autenticação ativada
    $mail->SMTPSecure = 'tls';    // SSL REQUERIDO pelo GMail
    $mail->Host = 'smtp.office365.com';    // SMTP utilizado
    $mail->Port = 587;          // A porta 587 deverá estar aberta em seu servidor
    $mail->Username = $hostmail;
    $mail->Password = 'Suporte321';
    $mail->IsHTML(true);
    $mail->From = $hostmail;
    $mail->FromName = $hostname;
    $mail->SetFrom($hostmail,  $hostname);
    $mail->Subject = $assunto;
    $mail->Body = nl2br($message);
    $mail->AltBody = nl2br(strip_tags($message));
    $mail->CharSet = "UTF-8";
    $mail->Debugoutput = 'html';
    $mail->setLanguage('pt');
    $mail->AddAddress($to);
    if (!$mail->Send()) {
        $error = 'Mail error: ' . $mail->ErrorInfo;
        return false;
    } else {
        $error = 'Mensagem enviada!';
        return true;
    }
}

if (smtpmailer($to, $hostmail, $hostname, $assunto, $message)) {

    $send = true;
} else {
    $send = false;
}

if ($send = true) {
    die('{"error":0}');
} else {
    die('{"error":3}');
}
