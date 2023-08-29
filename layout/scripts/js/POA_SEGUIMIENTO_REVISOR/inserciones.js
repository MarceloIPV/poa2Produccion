

/*========================================================
=            Insertar seguimiento definitivos            =
========================================================*/
	
var informacion__seguimiento__recomendadas_Contratacion_Publica=function(parametro1){

	$(parametro1).click(function(e){

		var pdfVal = $('#archivoSubido__seguimientos').val();

		if(pdfVal==''){

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio cargar el archivo firmado", "error", 5, function(){});


		}else{


			var confirm= alertify.confirm('¿Está seguro de recomendar?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','recomendacion__tecnicos');	

				var other_data = $('.formulario__intervencion__eliminar').serializeArray();

				$.each(other_data,function(key,input){
					paqueteDeDatos.append(input.name,input.value);
				});

				paqueteDeDatos.append('archivoSubido__seguimientos', $('#archivoSubido__actividad1')[0].files[0]);
				paqueteDeDatos.append('archivoSubido__seguimientos2', $('#archivoSubido__ContratacionPublica')[0].files[0]);

				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);

				Email.send({
					Host : "smtp.elasticemail.com",
					Username : "marcelo10perez@hotmail.com",
					Password : "A895B1890626827BE8A2B2FB217E2060A1C7",
					To : 'marcelo10perez@hotmail.com',
					From : "marcelo10perez@gmail.com",
					Subject : "Ministerio del Deporte",
					Body : "<html><h2>Asignación de Recomendación/Aprobación y Notificación Recomendación Contratación Pública</h2><strong>Posee una Recomendación Pendiente para la Revisión</strong><br></br><em>Italic</em></html>"
				  }).then(
					message => alert(message)
				  );

				console.log(paqueteDeDatos)

				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/inserta.md.php",
					contentType: false,
					data:paqueteDeDatos,
					processData: false,
					cache: false, 
					success:function(response){


					var elementos=JSON.parse(response);

					var mensaje=elementos['mensaje'];

					if(mensaje==1){

						alertify.set("notifier","position", "top-center");
						alertify.notify("Acción realizada satisfactoriamente", "success", 5, function(){});

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
				alertify.notify("Acción cancelada", "error", 1, function(){

					$(parametro1).show();

				}); 
			}); 	

		}						

	});

}

	
	
/*=====  End of Insertar seguimiento definitivos  ======*/


/*=====================================================
=            Recomendar recomendados altos            =
=====================================================*/
	
	var informacion__analistas__reasignar__regresar__alto__recomendar__recomendados_Contratacion_Publica=function(parametro1){

		$(parametro1).click(function(e){

			var pdfVal1 = $('#informe__recomendado_actividad1').val();
			var pdfVal = $('#informe__recomendado_contratacion').val();
			
			

			if (($("#idRolAd").val()==4 || $("#idRolAd").val()==2) && pdfVal=='' && pdfVal1=='') {

				alertify.set("notifier","position", "top-center");
				alertify.notify("Obligatorio cargar el archivo firmado", "error", 5, function(){});

			}else{

				var confirm= alertify.confirm('¿Está seguro de recomendar la información de seguimiento?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

				$(this).hide();

				confirm.set({transition:'slide'}); 


				confirm.set('onok', function(){ //callbak al pulsar botón positivo

					var paqueteDeDatos = new FormData();

					paqueteDeDatos.append('tipo','recomienda__recomendado__seguimientos_ccontratacion_publica');	

					let selects__superiores=$(".selects__superiores__regresar").val();
					let organismoOculto__modal=$("#organismoOculto__modal").val();
					let periodo=$("#periodo").val();

					let idRol=$("#idRolAd").val();

					let idUsuarios=$("#idUsuarioC").val();

	

					let nombreDocumentoactividad1=$("#nombreDocumento_actividad1").val();
					let nombreDocumentoContratacion=$("#nombreDocumento_Contratacion").val();

					paqueteDeDatos.append("selects__superiores",selects__superiores);
					paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
					paqueteDeDatos.append("periodo",periodo);
					paqueteDeDatos.append("idRol",idRol);
					paqueteDeDatos.append("idUsuarios",idUsuarios);
					paqueteDeDatos.append("nombreDocumentoactividad1",nombreDocumentoactividad1);
					paqueteDeDatos.append("nombreDocumentoContratacion",nombreDocumentoContratacion);

					paqueteDeDatos.append('documentos__tecnicos_Contratacion', $('#informe__recomendado_contratacion')[0].files[0]);
					paqueteDeDatos.append('documentos__tecnicos_actividad1', $('#informe__recomendado_actividad1')[0].files[0]);


					let observacionesReasignaciones=$("#observacionesReasignaciones").val();
					paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

					
					let fisicamenteE=$("#fisicamenteE").val();
					paqueteDeDatos.append("fisicamenteE",fisicamenteE);



					$.ajax({

						type:"POST",
						url:"modelosBd/POA_SEGUIMIENTO_REVISOR/inserta.md.php",
						contentType: false,
						data:paqueteDeDatos,
						processData: false,
						cache: false, 
						success:function(response){


				            var elementos=JSON.parse(response);

				            var mensaje=elementos['mensaje'];

							if(mensaje==1){

								alertify.set("notifier","position", "top-center");
								alertify.notify("Acción realizada satisfactoriamente", "success", 5, function(){});

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
					alertify.notify("Acción cancelada", "error", 1, function(){

						$(parametro1).show();

					}); 
				}); 	

			}						

		});

	}

	
	
/*=====  End of Recomendar recomendados altos  ======*/

var funcion__guardado__reporte_infraestructura = function (parametro1, parametro2, parametro3) {
//alert("INFRA")
	//$Valorcomparar = parametro3[0];
	//$ValorExedido = parametro3[1];

	console.log("parametro2");
	console.log(parametro2);
	
		var confirm = alertify.confirm('¿Está seguro de guardar la información ingresada?', '¿Está seguro de guardar la información ingresada?', null, null).set('labels', { ok: 'Confirmar', cancel: 'Cancelar' });
		
		confirm.set({ transition: 'slide' });

		confirm.set('onok', function () {

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append("tipo", parametro3);

			paqueteDeDatos.append("prametros", JSON.stringify(parametro2));
	

			$.ajax({

				type: "POST",
				url: "modelosBd/POA_SEGUIMIENTO_REVISOR/inserta.md.php",
				contentType: false,
				data: paqueteDeDatos,
				processData: false,
				cache: false,
				success: function (response) {	
					// let elementos = JSON.parse(response);

					// let mensaje = elementos['mensaje'];
					var elementos = JSON.parse(response);
					var mensaje = elementos['mensaje'];


					if (mensaje == 1) {
						alertify.set("notifier", "position", "top-center");
						alertify.notify("Registro realizado correctamente", "success", 5, function () { });
						//$(parametro1).hide();
						//$(parametro1).remove();
					}

				},
				error: function () {

				}

			});
		
		});
	

		confirm.set('oncancel', function () { //callbak al pulsar botón negativo
			alertify.set("notifier", "position", "top-center");
			alertify.notify("Acción cancelada", "error", 1, function () {

				$(parametro1).show();

			});
		});


}

// var funcion__guardado__reporte_infraestructura = function (parametro1, parametro2, parametro3, parametro4, parametro5, parametro6, parametro7) {

// 	// $(parametro1).click(function(e) {
// 		console.log("PARAMETRO #1");
// 		console.log(parametro1);
// 		console.log("PARAMETRO #3");
// 		console.log(parametro3);

// z

// 			var paqueteDeDatos = new FormData();

// 			paqueteDeDatos.append("tipo", parametro5);

// 			paqueteDeDatos.append("parametros", JSON.stringify(parametro3));


// 			// if (parametro8 == "honorarios__seguimientos") {

// 			// 	paqueteDeDatos.append('archivo1', $(parametro4)[0].files[0]);
// 			// 	paqueteDeDatos.append('archivo2', $(parametro5)[0].files[0]);
// 			// 	paqueteDeDatos.append('archivo3', $(parametro6)[0].files[0]);
// 			// 	paqueteDeDatos.append('archivo4', $(parametro7)[0].files[0]);

// 			// }


// 			// if (parametro8 == "administrativos__seguimientos") {

// 			// 	paqueteDeDatos.append('archivo1', $(parametro4)[0].files[0]);
// 			// 	paqueteDeDatos.append('archivo2', $(parametro5)[0].files[0]);

// 			// }

// 			$.ajax({

// 				type: "POST",
// 				//url: "modelosBd/inserta/insertaAcciones.md.php",
// 				url: "modelosBd/POA_SEGUIMIENTO_REVISOR/inserta.md.php",
// 				contentType: false,
// 				data: paqueteDeDatos,
// 				processData: false,
// 				cache: false,
// 				success: function (response) {
						
// 					let elementos = JSON.parse(response);

// 					let mensaje = elementos['mensaje'];

// 					// $(parametro13).remove();

// 					// $(parametro14).remove();


// 					// if (parametro3[12] == "Marzo" || parametro3[12] == "Junio" || parametro3[12] == "Septiembre" || parametro3[12] == "Diciembre" || parametro3[4] == "Marzo" || parametro3[4] == "Junio" || parametro3[4] == "Septiembre" || parametro3[4] == "Diciembre" || parametro15 == true) {

// 					// 	$("#contadorIndicador").val(0);
// 					// 	$("#contadorIndicador2").val(0);

// 					// 	//$(".modal__ItemsGrup").modal('hide');//ocultamos el modal
// 					// 	//$('.modal-backdrop').remove();//eliminamos el backdrop del modal

// 					// }

// 					if (mensaje == 1) {

// 						alertify.set("notifier", "position", "top-center");
// 						alertify.notify("Registro realizado correctamente escoger la siguiente pestaña", "success", 10, function () { });


// 					}

// 				},
// 				error: function () {

// 				}

// 			});
			
// 		//});


// 		// confirm.set('oncancel', function () { //callbak al pulsar botón negativo
// 		// 	alertify.set("notifier", "position", "top-center");
// 		// 	alertify.notify("Acción cancelada", "error", 1, function () {

// 		// 		$(parametro1).show();

// 		// 	});
// 		// });

// 	//}

// 	// });

// }





/*========================================================
=            Insertar archivos transferencia         =
========================================================*/
	
var guardar_archivos_trasferencias=function(boton, archivo1,nombreArchivo){

	$(boton).click(function(e){

		var pdfVal1 = $(archivo1).val();

		if(pdfVal1=='' ){

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio cargar archivos EXCEL Y CSV", "error", 5, function(){});


		}else{


			var confirm= alertify.confirm('¿Está seguro de guardar los archivos?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			confirm.set({transition:'slide'}); 

			confirm.set('onok', function(){ //callbak al pulsar botón positivo		
				
				var currentDate = new Date();

			
				// Get the day of the month (1 - 31)
				var currentDayOfMonth = currentDate.getDate();

				// Get the month (0 - January, 1 - February, ..., 11 - December)
				var currentMonth = currentDate.getMonth();

				var monthsOfYear = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre'];

				// Get the human-readable strings for the current day and month
			
				var currentMonthString = monthsOfYear[currentMonth];

				var mesAnterior = monthsOfYear[currentMonth-1];

				
				if( parseFloat(currentDayOfMonth) > 24){
					alertify.set("notifier","position", "top-center");
					alertify.notify("La Fecha Máxima De Carga Es El 15 De Cada Mes", "error", 6, function(){});
				}else{

					var paqueteDeDatos = new FormData();

					paqueteDeDatos.append('tipo','guardar__archivos__transferencia');	

				

					paqueteDeDatos.append('nombreDocumentoactividad1', $(archivo1)[0].files[0]);
					paqueteDeDatos.append('mes', currentMonthString);
					paqueteDeDatos.append('nombreArchivo', nombreArchivo);
					paqueteDeDatos.append('mesAnterior', mesAnterior);
					
					console.log(paqueteDeDatos)

					$.ajax({

						type:"POST",
						url:"modelosBd/POA_SEGUIMIENTO_REVISOR/inserta.md.php",
						contentType: false,
						data:paqueteDeDatos,
						processData: false,
						async: false,
						cache: false, 
						success:function(response){


						var elementos=JSON.parse(response);

						var mensaje=elementos['mensaje'];

						if(mensaje==1){

							alertify.set("notifier","position", "top-center");
							alertify.notify("Acción realizada satisfactoriamente", "success", 5, function(){});

							

						}

						

						},
						error:function(){

						}
							
					});	
					
					insertar_informacion_trasferencias( currentMonthString,nombreArchivo);
				}


				

			
			}); 

			confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
				alertify.set("notifier","position", "top-center");
				alertify.notify("Acción cancelada", "error", 1, function(){

					

				}); 
			}); 	

		}						

	});

}

	
	
/*=====  End of Insertar seguimiento definitivos  ======*/

/*========================================================
=            Insertar archivos transferencia         =
========================================================*/
	
var insertar_informacion_trasferencias=function( mes,nombreArchivo){

	
		var paqueteDeDatos = new FormData();

					paqueteDeDatos.append('tipo','insertar__archivos__transferencia');	

					paqueteDeDatos.append('mes', mes);
					paqueteDeDatos.append('nombreArchivo', nombreArchivo);
					

		

					$.ajax({

						type:"POST",
						url:"modelosBd/POA_SEGUIMIENTO_REVISOR/inserta.md.php",
						contentType: false,
						data:paqueteDeDatos,
						processData: false,
						cache: false, 
						success:function(response){


						var elementos=JSON.parse(response);

						var mensaje=elementos['mensaje'];

						if(mensaje==1){

							alertify.set("notifier","position", "top-center");
							alertify.notify("Acción realizada satisfactoriamente", "success", 5, function(){});

							

						}


						},
						error:function(){

						}
							
					});	

			

	

}

	
	
/*=====  End of Insertar seguimiento definitivos  ======*/