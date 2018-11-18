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

	//Faz com que não sobreponha outro arquivo
	$diretorio = dir($caminho_excluidos);

	$flag = 0;
	while ($arquivo = $diretorio->read()) {

		if($arquivo == $nomeArqOrigem){			
			$flag = 1;
		}
	}	


	if($flag == 0)
		$caminho_destino = $caminho_excluidos.$nomeArqOrigem;
	else{
		$diretorio = scandir($caminho_excluidos);
		$qtd = count($diretorio)-3;

		if(($qtd+1) < 10)
			$caminho_destino = $caminho_excluidos."email0".($qtd+1).".xml";
		else
			$caminho_destino = $caminho_excluidos."email".($qtd+1).".xml";		
	}

	//
	
	copy($caminho_recebidos.$nomeArqOrigem, $caminho_destino);
	unlink($caminho_recebidos.$nomeArqOrigem);
	

	echo "E-mail Removido.";
?>