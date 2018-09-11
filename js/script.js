$(document).ready(function(){
	$("#entrar").click(function(){
		alert("Ta funcionando o botão ja diego!");
		if ($("#Login").val() == "") {
		$("#Login").addClass("semtexto");
		$("#Login").addClass("semtextoplace");
		}
		if ($("#Pass").val() == "") {
		$("#Pass").addClass("semtexto");
		$("#Pass").addClass("semtextoplace");
		}

	});


});