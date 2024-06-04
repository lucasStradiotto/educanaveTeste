<?php
header("Access-Control-Allow-Origin: *");
function uuid4() {
    return sprintf('%04x%04x-%04x-%04x-%04x-%04x%04x%04x',
        // 32 bits for "time_low"
        mt_rand(0, 0xffff), mt_rand(0, 0xffff),

        // 16 bits for "time_mid"
        mt_rand(0, 0xffff),

        // 16 bits for "time_hi_and_version",
        // four most significant bits holds version number 4
        mt_rand(0, 0x0fff) | 0x4000,

        // 16 bits, 8 bits for "clk_seq_hi_res",
        // 8 bits for "clk_seq_low",
        // two most significant bits holds zero and one for variant DCE1.1
        mt_rand(0, 0x3fff) | 0x8000,

        // 48 bits for "node"
        mt_rand(0, 0xffff), mt_rand(0, 0xffff), mt_rand(0, 0xffff)
    );
}

if ( !empty( $_FILES ) ) {
    $tempPath = $_FILES[ 'file' ][ 'tmp_name' ];
    $ext = end(explode(".", $_FILES[ 'file' ][ 'name' ]));
    $file = uuid4() . '.' . $ext;
    $uploadPath = dirname( __FILE__ ) . DIRECTORY_SEPARATOR . 'uploads-new' . DIRECTORY_SEPARATOR . $file;
    move_uploaded_file( $tempPath, $uploadPath );
    $answer = array( 'answer' => $file );
    $json = json_encode( $answer );
    echo $json;
} else {
    echo 'No files';
}
