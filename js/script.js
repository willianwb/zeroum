$(document).ready(function(){
	$("#btnEntrar").click(function(){
			var usuario = $("#inUsuario").val();
			var senha = $("#inSenha").val();

			if(usuario == "" || senha == ""){
				if(usuario == "") $("#inUsuario").addClass("erro");
				else $("#inUsuario").removeClass("erro");

				if(senha == "") $("#inSenha").addClass("erro");
				else $("#inSenha").removeClass("erro");
			}
			else{
				$("#inUsuario").removeClass("erro");
				$("#inSenha").removeClass("erro");

				fLocalAbrirArquivo(usuario,senha);
			}
	});
});



function fLocalAbrirArquivo(usuario,senha){
	$.ajax({
		type: "POST",
		dataType: "json",
		url: "php/VerificarCadastro.php",
		success:function(retorno){
			if(usuario == retorno["usuario"] && senha == retorno["senha"]){
				window.location.href="pages/email.html";
			}else{
				if(usuario != retorno["usuario"])
					$("#inUsuario").addClass("erro");

				if(senha!=retorno["senha"])
					$("#inSenha").addClass("erro");

				alert("Erro...Tente Novamente!!");
			}
		}
	});
}