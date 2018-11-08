<?php


	$caminho = "../xml/emails/excluidos/";
	$diretorio = dir($caminho);

	$nArq = array();
	while ($arquivo = $diretorio->read()) {

		if($arquivo != '.' && $arquivo != '..'){			

			array_push($nArq, $caminho.$arquivo);
			
		}
	}

	rsort($nArq);

	$emails = array();
	foreach ($nArq as $valor) {
		
		$xml_string = file_get_contents($valor);
		$xml = simplexml_load_string($xml_string );

		$retorno["para"] = trim($xml->para);
		$retorno["cc"] = trim($xml->cc);
		$retorno["assunto"] = trim($xml->assunto);
		$retorno["texto"] = trim($xml->texto);

		array_push($emails, $retorno);
	}

	echo json_encode($emails);
?>