$(document).ready(function(){
	$("#btnEntrar").click(function(){
			var usuario = $("#inUsuario").val();
			var password = $("#inPassword").val();

			if(usuario == "" || password == ""){
				if(usuario == "") $("#inUsuario").addClass("erro");
				else $("#inUsuario").removeClass("erro");

				if(password == "") $("#inPassword").addClass("erro");
				else $("#inPassword").removeClass("erro");
			}
			else{
				$("#inUsuario").removeClass("erro");
				$("#inPassword").removeClass("erro");

				fLocalAbrirArquivo(usuario,password);
			}
	});
});



function fLocalAbrirArquivo(usuario,senha){

	$.ajax({
		type: "POST",
		dataType: "json",
		url: "php/abrir_login_php.php",
		success:function(retorno){

			if(usuario==retorno["login"]&&senha == retorno["senha"]){
				alert("Logado COM sucesso!!");
				window.location.href="pages/email.html";
			}else{
				if(usuario!=retorno["login"]){
					$("#inUsuario").addClass("erro");
				}
				if(senha!=retorno["senha"]){
					$("#inPassword").addClass("erro");
				}
				alert("DEU ERRADO AMIGO!");
			}

		}
	});

}