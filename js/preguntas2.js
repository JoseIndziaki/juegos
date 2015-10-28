$(document).ready(main);

var numCorrectas=0;
var numIncorrectas=0;
function main(){
  	establecerPropiedades();
	/*/var bod=$("body").css("background-image","url('img/fondo.jpg')");
		bod.css("background-repeat","no-repeat");
	bod.css("background-position","center");*/
}

function establecerPropiedades(){
	var res =$(".respuesta");
	res.draggable();
	res.mousedown(downRespuesta);
	$(".preg, .pregMonumento").droppable({drop:dropPregunta});
	

}

function dropPregunta(event,ui){
	var contPregunta =$(this);
	var respuesta = ui.draggable;

	var correcta = contPregunta.attr("alt");
	correcta = correcta.trim();
	var pos = contPregunta.position();
	contPregunta.css("border: 1px","dashed rgb(128, 128, 128)");
	contPregunta.css("background","rgba(221, 225, 228, 0.78)");
	respuesta.css("cursor","default");

	if(correcta==respuesta.attr("alt")){
		contPregunta.addClass("resCorrecta");
		contPregunta.append("<img src='img/correcta.png' class='ok' />" +"<p class='rDrop'>"+respuesta.text()+" </p>" );
		numCorrectas++;
	//	respuesta.remove();

	}else{
		contPregunta.addClass("resIncorrecta");
		contPregunta.append("<img src='img/inCorrecta.png' class='inco' />" +"<p class='rDrop'>"+respuesta.text()+"</p>");
		numIncorrectas++;
	}
	respuesta.draggable("destroy");
	contPregunta.droppable("destroy");
	comprobarFinal();
	respuesta.remove();
}

function comprobarResultados(){
	$(".ok,.inco").fadeIn("slow");
	$("#resultados").html("Correctas:     "+numCorrectas+"<br />"+"Incorrectas:    "+numIncorrectas);

}

function comprobarFinal(){
	resul = numCorrectas+numIncorrectas;
	if(resul ==6){
		
		comprobarResultados();
	}
}

function downRespuesta(){
	$(".respuesta").css("z-index","0");
	$(this).css("z-index","100");
}


