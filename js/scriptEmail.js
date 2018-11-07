$(document).ready(function(){
	
	listarCaixaEntrada();

	$("#btnNovaMensagem").click(function(){
			$("#dvListaConteudo").addClass("dvEsconde");
			$("#dvNovaMensagem").removeClass("dvEsconde");

			$("#tdItemMenu").html("");
			$("#tdItemMenu").append("Nova Mensagem");

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
	});

	$("#btnEnviar").click(function(){
		var para = $("#inPara").val();
		var cc = $("#inCc").val();
		var assunto = $("#inAssunto").val();
		var texto = $("#inTexto").val();
			
		registrarEmail(para, cc, assunto, texto);

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
			
			$("#dvListaConteudo table").html("");
			$("#dvListaConteudo table").attr("cellspacing","0");
			$("#dvListaConteudo table").attr("border","1");
			for(var i=0;i<retorno.length;i++){
				$("#dvListaConteudo table").append("<tr>");
				$("#dvListaConteudo table").append("<td><img src='../img/ic_user.png'></td>");
				$("#dvListaConteudo table").append("<td>"+retorno[i].para+"</td>");
				$("#dvListaConteudo table").append("<td>Assunto:"+retorno[i].assunto+"</td>");
				$("#dvListaConteudo table").append("<td>"+retorno[i].texto+"</td>");
				$("#dvListaConteudo table").append("</tr>");
			}
			
		}
	});
}


function mostraList(){
	
	



}