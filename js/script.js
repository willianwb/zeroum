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
			}
	});
});
