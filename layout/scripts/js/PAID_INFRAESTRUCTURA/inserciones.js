var guardar_archivos_infraestructura=function(boton, archivo1,tipoInforme){

	$(boton).click(function(e){

		var pdfVal1 = $(archivo1).val();

		if(pdfVal1=='' ){

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio cargar archivos PDF", "error", 5, function(){});


		}else{


			var confirm= alertify.confirm('¿Está seguro de guardar el archivo?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			confirm.set({transition:'slide'}); 

			confirm.set('onok', function(){ //callbak al pulsar botón positivo		
				
					var paqueteDeDatos = new FormData();

					paqueteDeDatos.append('tipo','guardar__archivos__paid__infraestructura');	

					paqueteDeDatos.append('nombreDocumento', $(archivo1)[0].files[0]);
					paqueteDeDatos.append('nombreArchivo', $(boton).attr("nombre"));
                    paqueteDeDatos.append('idComponente', $("#JuegosNacionalesIDCOMPONENTE").val());
                    paqueteDeDatos.append('idRubro', $("#JuegosNacionalesIDRUBRO").val());
                    paqueteDeDatos.append('tipoInforme', tipoInforme);

				
					
					console.log(paqueteDeDatos)

					$.ajax({
						type:"POST",
						url:"modelosBd/PAID_INFRAESTRUCTURA/inserta.md.php",
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
                            $(boton).hide()
							

						}else{
                            alertify.set("notifier","position", "top-center");
							alertify.notify("No se guardó el archivo", "warning", 5, function(){});
                        }

						

						},
						error:function(){

						}
							
					});	
					
					
				


				

			
			}); 

			confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
				alertify.set("notifier","position", "top-center");
				alertify.notify("Acción cancelada", "error", 1, function(){

					

				}); 
			}); 	

		}						

	});

}

var guardar_informe_Obra_infraestructura=function(boton, archivo1,tabla){

	$(boton).click(function(e){

		var pdfVal1 = $(archivo1).val();



		if(pdfVal1=='' ){

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio cargar archivos PDF", "error", 5, function(){});


		}else if(parseFloat($("#totalValores").val()) > parseFloat($("#MontoPorAsignarJN").attr("valor"))){
			alertify.set("notifier","position", "top-center");
			alertify.notify("TOTAL DE PROPUESTA DE FINANCIAMIENTO NO PUEDE SER MAYOR AL MONTO DEL RUBRO", "error", 7, function(){});

		}else{


			var confirm= alertify.confirm('¿Está seguro de guardar el archivo?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			confirm.set({transition:'slide'}); 

			confirm.set('onok', function(){ //callbak al pulsar botón positivo		
				
					var paqueteDeDatos = new FormData();

					paqueteDeDatos.append('tipo','guardar__informe__obra__paid__infraestructura');	

					paqueteDeDatos.append('nombreDocumento', $(archivo1)[0].files[0]);
					paqueteDeDatos.append('nombreArchivo', 'informeObra');
                    paqueteDeDatos.append('idComponente', $("#JuegosNacionalesIDCOMPONENTE").val());
                    paqueteDeDatos.append('idRubro', $("#JuegosNacionalesIDRUBRO").val());
					paqueteDeDatos.append('valorTotal', $("#totalValores").val());
					

				
					
					console.log(paqueteDeDatos)

					$.ajax({
						type:"POST",
						url:"modelosBd/PAID_INFRAESTRUCTURA/inserta.md.php",
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
                            $(boton).hide()
							
							AsignarMontoPAIDInfraestructura("obtener_valor_total_paid_infraestructura");
							tabla.DataTable().ajax.reload();
 							
							

						}else{
                            alertify.set("notifier","position", "top-center");
							alertify.notify("No se guardó el archivo", "warning", 5, function(){});
                        }

						

						},
						error:function(){

						}
							
					});	
					
					
				


				

			
			}); 

			confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
				alertify.set("notifier","position", "top-center");
				alertify.notify("Acción cancelada", "error", 1, function(){

					

				}); 
			}); 	

		}						

	});

}

var guardar_informe_fiscalizacion_infraestructura=function(boton, archivo1,tabla){

	$(boton).click(function(e){

		var pdfVal1 = $(archivo1).val();



		if(pdfVal1=='' ){

			alertify.set("notifier","position", "top-center");
			alertify.notify("Obligatorio cargar archivos PDF", "error", 5, function(){});


		}else{


			var confirm= alertify.confirm('¿Está seguro de guardar el archivo?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			confirm.set({transition:'slide'}); 

			confirm.set('onok', function(){ //callbak al pulsar botón positivo		
				
					var paqueteDeDatos = new FormData();

					paqueteDeDatos.append('tipo','guardar__informe__fiscalizacion__paid__infraestructura');	

					paqueteDeDatos.append('nombreDocumento', $(archivo1)[0].files[0]);
					paqueteDeDatos.append('nombreArchivo', 'informeFiscalizacion');
                    paqueteDeDatos.append('idComponente', $("#JuegosNacionalesIDCOMPONENTE").val());
                    paqueteDeDatos.append('idRubro', $("#JuegosNacionalesIDRUBRO").val());
					
					console.log(paqueteDeDatos)

					$.ajax({
						type:"POST",
						url:"modelosBd/PAID_INFRAESTRUCTURA/inserta.md.php",
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
                            $(boton).hide()
							
							
							tabla.DataTable().ajax.reload();
 							
							

						}else{
                            alertify.set("notifier","position", "top-center");
							alertify.notify("No se guardó el archivo", "warning", 5, function(){});
                        }

						

						},
						error:function(){

						}
							
					});	
					
					
				


				

			
			}); 

			confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
				alertify.set("notifier","position", "top-center");
				alertify.notify("Acción cancelada", "error", 1, function(){

					

				}); 
			}); 	

		}						

	});

}