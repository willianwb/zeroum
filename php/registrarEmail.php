<?php

	$para = $_POST["regPara"];
	$cc = $_POST["regCc"];
	$assunto = $_POST["regAssunto"];
	$texto = $_POST["regTexto"];

	$caminho = "../xml/emails/enviados";
	$diretorio = scandir($caminho);
	$qtd = count($diretorio)-3;

	$xml = new DOMDocument("1.0");

	$xml_email = $xml->createElement("email");
	$xml_para = $xml->createElement("para",$para);
	$xml_Cc = $xml->createElement("cc", $cc);
	$xml_assunto = $xml->createElement("assunto", $assunto);
	$xml_texto = $xml->createElement("texto", $texto);

	$xml_email->appendChild($xml_para);
	$xml_email->appendChild($xml_Cc);
	$xml_email->appendChild($xml_assunto);
	$xml_email->appendChild($xml_texto);

	$xml->appendChild($xml_email);

	if(($qtd+1) < 10)
		$xml->save($caminho."/email0".($qtd+1).".xml");
	else
		$xml->save($caminho."/email".($qtd+1).".xml");

	echo "E-mail Enviado.";
?>