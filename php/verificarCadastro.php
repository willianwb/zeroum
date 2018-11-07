<?php

	$conteudo = file_get_contents("../xml/login.xml");
	$xml = simplexml_load_string($conteudo);

	$retorno["usuario"] = trim($xml->usuario);
	$retorno["senha"] = trim($xml->senha);

	echo json_encode($retorno);
?>