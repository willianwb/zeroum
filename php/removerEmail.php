<?php

	$posicao = $_POST["posicao"];
	
	$caminho_recebidos = "../xml/emails/recebidos/";
	$diretorio = dir($caminho_recebidos);

	$nArq = array();
	while ($arquivo = $diretorio->read()) {

		if($arquivo != '.' && $arquivo != '..'){			

			array_push($nArq, $arquivo);
			
		}
	}

	rsort($nArq);

	$caminho_excluidos = "../xml/emails/excluidos/";
	
	$nomeArqOrigem = $nArq[$posicao];
	$caminho_destino = $caminho_excluidos.$nomeArqOrigem;
	
	copy($caminho_recebidos.$nomeArqOrigem, $caminho_destino);
	unlink($caminho_recebidos.$nomeArqOrigem);
	

	echo "E-mail Removido.";
?>