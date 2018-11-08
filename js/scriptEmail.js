$(document).ready(function(){
	
	listarCaixaEntrada();

	$("#btnNovaMensagem").click(function(){
			$("#dvListaConteudo").addClass("dvEsconde");
			$("#dvNovaMensagem").removeClass("dvEsconde");

			$("#tdItemMenu").html("");
			$("#tdItemMenu").append("Nova Mensagem");

			$("#inPara").removeClass("erro");
			$("#inAssunto").removeClass("erro");
			$("#inTexto").removeClass("erro");

			$("#inPara").val("");
			$("#inCc").val("");
			$("#inAssunto").val("");
			$("#inTexto").val("");
	});

	$("#trCaixaEntrada").click(function(){
			$("#dvListaConteudo").removeClass("dvEsconde");
			$("#dvNovaMensagem").addClass("dvEsconde");

			$("#tdItemMenu").html("");
			$("#tdItemMenu").append("Caixa de Entrada");

			listarCaixaEntrada();
	});

	$("#trItensEnviados").click(function(){
			$("#dvListaConteudo").removeClass("dvEsconde");
			$("#dvNovaMensagem").addClass("dvEsconde");

			$("#tdItemMenu").html("");
			$("#tdItemMenu").append("Itens Enviados");

			listarItensEnviados();
	});


	$("#trItensExcluidos").click(function(){
			$("#dvListaConteudo").removeClass("dvEsconde");
			$("#dvNovaMensagem").addClass("dvEsconde");

			$("#tdItemMenu").html("");
			$("#tdItemMenu").append("Itens Excluidos");

			listarItensExcluidos();
	});

	$("#btnEnviar").click(function(){
		var para = $("#inPara").val();
		var cc = $("#inCc").val();
		var assunto = $("#inAssunto").val();
		var texto = $("#inTexto").val();

		if(para == "" || assunto == "" || texto == ""){	

			if(para == "") $("#inPara").addClass("erro");
			else $("#inPara").removeClass("erro");

			if(assunto == "") $("#inAssunto").addClass("erro");
			else $("#inAssunto").removeClass("erro");

			if(texto == "") $("#inTexto").addClass("erro");
			else $("#inTexto").removeClass("erro");
		}
		else{			
			registrarEmail(para, cc, assunto, texto);
		}

	});
});


function registrarEmail(para, cc, assunto, texto){
	$.ajax({
			type: "POST",
			url: "../php/registrarEmail.php",
			data:{
			regPara: para,
			regCc: cc,
			regAssunto: assunto,
			regTexto: texto
		},
		success:function(retorno){
			alert(retorno);

			$("#dvListaConteudo").removeClass("dvEsconde");
			$("#dvNovaMensagem").addClass("dvEsconde");

			$("#tdItemMenu").html("");
			$("#tdItemMenu").append("Caixa de Entrada");

			listarCaixaEntrada();
		}
	});
}

function listarCaixaEntrada(){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "../php/listarCaixaEntrada.php",
		success:function(retorno){
			mostarLista(1, retorno);					
		}
	});
}

function listarItensEnviados(){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "../php/listarItensEnviados.php",
		success:function(retorno){
			mostarLista(2, retorno);					
		}
	});
}

function listarItensExcluidos(){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "../php/listarItensExcluidos.php",
		success:function(retorno){
			mostarLista(2, retorno);					
		}
	});
}

function mostarLista(tipo, retorno){
	$("#dvListaConteudo table").html("");
	$("#dvListaConteudo table").attr("cellspacing","0");
	$("#dvListaConteudo table").attr("width","100%");


	for(var i=0;i<retorno.length;i++){
		$("#dvListaConteudo table").append("<tr >");
		$("#dvListaConteudo table").append("<td id='tdImg' class='tdEmail'><img src='../img/ic_user.png'></td>");
		$("#dvListaConteudo table").append("<td class='tdEmail'>"+retorno[i].para+"</td>");
		$("#dvListaConteudo table").append("<td class='tdEmail'>Assunto:"+retorno[i].assunto+"</td>");
		
		if(retorno[i].texto.length > 40)
			$("#dvListaConteudo table").append("<td class='tdEmail'>"+retorno[i].texto.substring(0, 40)+"...</td>");
		else
			$("#dvListaConteudo table").append("<td class='tdEmail'>"+retorno[i].texto+"</td>");	
		
		if(tipo == 1) 
			$("#dvListaConteudo table").append("<td class='tdEmail'><button onClick='removerItem("+i+")'>Remover</button></td>");			
		
		$("#dvListaConteudo table").append("</tr>");
	}	
}


function removerItem(i){
	alert(i);

	$.ajax({
			type: "POST",
			url: "../php/removerEmail.php",
			data:{
			posicao: i
		},
		success:function(retorno){
			alert(retorno);

			listarCaixaEntrada();
		}
	});
}
