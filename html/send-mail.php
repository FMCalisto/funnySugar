<?php
//vars
$subject = $_POST['subject'];
$to = explode(',', $_POST['to'] );

$from = $_POST['email'];

//data
$msg = "NOME: "  .$_POST['name']    ."<br>\n";
$msg = "TELEFONE: "  .$_POST['phone']    ."<br>\n";
$msg .= "E-MAIL: "  .$_POST['email']    ."<br>\n";
$msg = "TIPO: "  .$_POST['occasion']    ."<br>\n";
$msg = "TEMA: "  .$_POST['theme']    ."<br>\n";
$msg = "PESSOAS: "  .$_POST['people']    ."<br>\n";
$msg = "CORES: "  .$_POST['colors']    ."<br>\n";
$msg = "MASSA: "  .$_POST['pasta']    ."<br>\n";
$msg = "RECHEIO: "  .$_POST['filling']    ."<br>\n";
$msg .= "WEBSITE: "  .$_POST['web']    ."<br>\n";
$msg .= "COMMENTS: "  .$_POST['comments']    ."<br>\n";

//Headers
$headers  = "MIME-Version: 1.0\r\n";
$headers .= "Content-type: text/html; charset=UTF-8\r\n";
$headers .= "From: <".$from. ">" ;


//send for each mail
foreach($to as $mail){
   mail($mail, $subject, $msg, $headers);
}

?>
