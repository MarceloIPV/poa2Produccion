function concatenarValores(parametro1){
	
	var array = new Array(); 

    $(parametro1).each(function(index) {

        array.push($(this).val());

    });

    return array;

}

function concatenarValores__attr(parametro1){
	
	var array = new Array(); 

    $(parametro1).each(function(index) {

        array.push($(this).attr('attr'));

    });

    return array;

}

var no__corresponde__tramites=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de dar como no corresponde al trámite correspondiente?','¿Está seguro de dar como no corresponde al trámite correspondiente?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  

		if ($("#idRolAd").val()!=3 && ($("#selector__lineas").val()=="" || $("#selector__lineas").val()==" " || $("#selector__lineas").val()==null || $("#selector__lineas").val()==undefined)) {

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});

		}else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','no__corresponde__tramites');		

			var other_data = $('#'+parametro2).serializeArray();

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
			});


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	let elementos=JSON.parse(response);
			    	let mensaje=elementos['mensaje'];

			    	if (mensaje==1) {

			    		alertify.set("notifier","position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					    window.setTimeout(function(){ 
					    	location.reload();
					    } ,5000); 

			    	}

				},
				error:function(){

				}
					
			});	

		}

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}

var recomendar__lineas__modificaciones__planificacion__quipux=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de dar por finalizado el trámite?','¿Está seguro de finalizado el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  
		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','recomendar__modificaciones__planifiacion__analistas__quipux');		

		var other_data = $('#'+parametro2).serializeArray();

		$.each(other_data,function(key,input){
			paqueteDeDatos.append(input.name,input.value);
		});

		let numeroNotificacion=$("#numeroNotificacion").val();

		let selector=$("#selector__lineas").val();
		let fechanumeroNotificacion=$("#fechanumeroNotificacion").val();
		paqueteDeDatos.append('selector',selector);	
		paqueteDeDatos.append('pdfGeneradoCargar', $('#pdfGeneradoCargar')[0].files[0]);
		paqueteDeDatos.append('numeroNotificacion',numeroNotificacion);	
		paqueteDeDatos.append('fechanumeroNotificacion',fechanumeroNotificacion);	

		$.ajax({

			type:"POST",
			url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

				let elementos=JSON.parse(response);
				let mensaje=elementos['mensaje'];

				if (mensaje==1) {

			   		alertify.set("notifier","position", "top-center");
					alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					 window.setTimeout(function(){ 
					   location.reload();
					 } ,5000); 

				}

			},
			error:function(){

			}
					
		});	

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}


var recomendar__lineas__modificaciones__planificacion__analistas=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de recomendar el trámite?','¿Está seguro de recomendar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  

		if ($("#idRolAd").val()!=3 && $("#idRolAd").val()!=4 && ($("#selector__lineas").val()=="" || $("#selector__lineas").val()==" " || $("#selector__lineas").val()==null || $("#selector__lineas").val()==undefined)) {

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});

		}else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','recomendar__modificaciones__planifiacion__analistas');		

			var other_data = $('#'+parametro2).serializeArray();

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
			});

			let selector=$("#selector__lineas").val();
			paqueteDeDatos.append('selector',selector);	
			paqueteDeDatos.append('pdfGeneradoCargar', $('#pdfGeneradoCargar')[0].files[0]);

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	let elementos=JSON.parse(response);
			    	let mensaje=elementos['mensaje'];

			    	if (mensaje==1) {

			    		alertify.set("notifier","position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					    window.setTimeout(function(){ 
					    	location.reload();
					    } ,5000); 

			    	}

				},
				error:function(){

				}
					
			});	

		}

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}

var recomendar__lineas__modificaciones__planificacion=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de enviar el trámite?','¿Está seguro de enviar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  
		if ($("#idRolAd").val()!=3 && ($("#selector__lineas").val()=="" || $("#selector__lineas").val()==" " || $("#selector__lineas").val()==null || $("#selector__lineas").val()==undefined)) {

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});

		}else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','recomendar__modificaciones__planifiacion');		

			var other_data = $('#'+parametro2).serializeArray();

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
			});

			let selector=$("#selector__lineas").val();
			paqueteDeDatos.append('selector',selector);	

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	let elementos=JSON.parse(response);
			    	let mensaje=elementos['mensaje'];

			    	if (mensaje==1) {

			    		alertify.set("notifier","position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					    window.setTimeout(function(){ 
					    	location.reload();
					    } ,5000); 

			    	}

				},
				error:function(){

				}
					
			});	

		}

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}

var recomendar__lineas__modificaciones=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de recomendar el trámite?','¿Está seguro de recomendar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	$(this).hide();

	confirm.set('onok', function(){ //callbak al pulsar botón positivo

		if ($("#idRolAd").val()!=3 && ($("#selector__lineas").val()=="" || $("#selector__lineas").val()==" " || $("#selector__lineas").val()==null || $("#selector__lineas").val()==undefined)) {

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});

		}else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','recomendar__modificaciones');		

			var other_data = $('#'+parametro2).serializeArray();

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
			});

			let selector=$("#selector__lineas").val();
			paqueteDeDatos.append('selector',selector);	
			paqueteDeDatos.append('pdfGeneradoCargar', $('#pdfGeneradoCargar')[0].files[0]);
			paqueteDeDatos.append('pdfGeneradoCargar2', $('#pdfGeneradoCargar2')[0].files[0]);

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	let elementos=JSON.parse(response);
			    	let mensaje=elementos['mensaje'];

			    	if (mensaje==1) {

			    		alertify.set("notifier","position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					    window.setTimeout(function(){ 
					    	location.reload();
					    } ,5000); 

			    	}

				},
				error:function(){

				}
					
			});	

		}

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}

var asignar__lineas__modificaciones=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de asignar el trámite?','¿Está seguro de asignar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo

		if ($("#idRolAd").val()!=3 && ($("#selector__lineas").val()=="" || $("#selector__lineas").val()==" " || $("#selector__lineas").val()==null || $("#selector__lineas").val()==undefined)) {

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio escoger una opción", "error", 5, function(){});

		}else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','reasignar__modificaciones');		

			var other_data = $('#'+parametro2).serializeArray();

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
			});

			let selector=$("#selector__lineas").val();
			paqueteDeDatos.append('selector',selector);	

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	let elementos=JSON.parse(response);
			    	let mensaje=elementos['mensaje'];

			    	if (mensaje==1) {

			    		alertify.set("notifier","position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					    window.setTimeout(function(){ 
					    	location.reload();
					    } ,5000); 

			    	}

				},
				error:function(){

				}
					
			});	

		}		  

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}

var recomendar__analista__lineas__modificaciones=function(parametro1,parametro2){

$(parametro1).click(function (e){

	e.preventDefault();	

	var confirm= alertify.confirm('¿Está seguro de recomendar el trámite?','¿Está seguro de recomendar el trámite?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

	confirm.set({transition:'slide'});    

	confirm.set('onok', function(){ //callbak al pulsar botón positivo
			  
		// if ($("#idRolAd").val()==3 && ($("#pdfGeneradoCargar").val()=="" || $("#pdfGeneradoCargar").val()==" " || $("#pdfGeneradoCargar").val()==null || $("#pdfGeneradoCargar").val()==undefined)) {

		// 	alertify.set("notifier","position", "top-center");
		// 	alertify.notify("Obligatorio elegir el archivo a recomendar", "error", 5, function(){});

		// }else{

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','recomendar__modificaciones__analistas');		

			var other_data = $('#'+parametro2).serializeArray();

			$.each(other_data,function(key,input){
				paqueteDeDatos.append(input.name,input.value);
			});

			let selector=$("#selector__lineas").val();
			paqueteDeDatos.append('selector',selector);	

			let arrayValores=concatenarValores($(".selectores__calificaciones__analistas"));
			let arrayId=concatenarValores__attr($(".selectores__calificaciones__analistas"));
			let arrayValoresO=concatenarValores($(".observaciones__generales__realizadas"));

			paqueteDeDatos.append("arrayValores",JSON.stringify(arrayValores));
			paqueteDeDatos.append("arrayId",JSON.stringify(arrayId));
			paqueteDeDatos.append("arrayValoresO",JSON.stringify(arrayValoresO));
			paqueteDeDatos.append('pdfGeneradoCargar', $('#pdfGeneradoCargar')[0].files[0]);

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_MODIFICACIONES_REVISOR/insertar.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

			    	let elementos=JSON.parse(response);
			    	let mensaje=elementos['mensaje'];

			    	if (mensaje==1) {

			    		alertify.set("notifier","position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function(){});

					    window.setTimeout(function(){ 
					    	location.reload();
					    } ,5000); 

			    	}

				},
				error:function(){

				}
					
			});	


		// }

	});

	confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
			alertify.set("notifier","position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function(){}); 
	}); 

});

}
