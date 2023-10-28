	/*================================================
	=            Regresar analistas altos            =
	================================================*/
	
	var informacion__analistas__reasignar__regresar__Contratacion_Publica=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de enviar la información de seguimiento ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','informacion__analistas__reasignar__seguimientos__altos');	

				let selects__superiores__regresar=$(".selects__superiores__regresar").val();
				let organismoOculto__modal=$("#organismoOculto__modal").val();
				let periodo=$("#periodo").val();

				paqueteDeDatos.append("selects__superiores",selects__superiores__regresar);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);


				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

				
				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);

				Email.send({
					Host : "smtp.elasticemail.com",
					Username : "marcelo10perez@hotmail.com",
					Password : "A895B1890626827BE8A2B2FB217E2060A1C7",
					To : 'marcelo10perez@hotmail.com',
					From : "marcelo10perez@gmail.com",
					Subject : "Ministerio del Deporte",
					Body : "<html><h2>Reasignación de Revisón/Aprobación Seguimiento Contratación Pública</h2><strong>Posee una Reasignación Pendiente para la Revisión</strong><br></br><em>Italic</em></html>"
				  }).then(
					message => alert(message)
				  );

				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
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

		});

	}

	
	/*=====  End of Regresar analistas altos  ======*/


		/*====================================================
	=            Enviar información analistas            =
	====================================================*/
	
	var informacion__analistas__reasignar__Contratacion_Publica=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de enviar la información de seguimiento ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','informacion__analistas__reasignar__seguimientos__altos');	

				let selects__superiores=$(".selects__superiores1").val();
				let organismoOculto__modal=$("#organismoOculto__modal").val();
				let periodo=$("#periodo").val();

				paqueteDeDatos.append("selects__superiores",selects__superiores);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);

				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

				
				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);

				

				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
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

		});

	}


	/*=====  End of Enviar información analistas  ======*/
	

	/*====================================================
	=            Regresar actividades físicas            =
	====================================================*/
	
	var informacion__analistas__reasignar__regresar__alto2023=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de enviar la información de seguimiento ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','informacion__analistas__reasignar__seguimientos__ac__fisicas');	

				let selects__superiores__regresar=$(".selects__superiores__regresar").val();
				let organismoOculto__modal=$("#organismoOculto__modal").val();
				let periodo=$("#periodo").val();

				paqueteDeDatos.append("selects__superiores",selects__superiores__regresar);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);


				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

				
				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);


				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
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

		});

	}

	
	
	/*=====  End of Regresar actividades físicas  ======*/


		/*==============================================================
	=            Enviar información actividades físicas            =
	==============================================================*/
	
	var informacion__analistas__reasignar__altos2023=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de enviar la información de seguimiento ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','informacion__analistas__reasignar__seguimientos__ac__fisicas');	

				let selects__superiores=$(".selects__superiores1").val();
				let organismoOculto__modal=$("#organismoOculto__modal").val();
				let periodo=$("#periodo").val();

				paqueteDeDatos.append("selects__superiores",selects__superiores);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);

				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);

				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

				let idUsuarioC=$("#idUsuarioC").val();
				paqueteDeDatos.append("idUsuarioC",idUsuarioC);				

				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
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

		});

	}

	
			
	
	/*=====  End of Enviar información actividades físicas  ======*/
	

	/*================================
	=            Ingresfr            =
	================================*/
	
	
	var informacion__analistas__reasignar__altos__infra__in__regresa2023=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de enviar la información de seguimiento ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','informacion__analistas__reasignar__seguimientos__ac__fisicas__in');	

				let selects__superiores=$(".selects__superiores__regresar").val();
				let organismoOculto__modal=$("#idOrganismo").val();
				let periodo=$("#periodo").val();

				paqueteDeDatos.append("selects__superiores",selects__superiores);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);

				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

				
				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);




				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
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

		});

	}

	


	var informacion__analistas__reasignar__altos__infra__in2023=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de enviar la información de seguimiento ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','informacion__analistas__reasignar__seguimientos__ac__fisicas__in');	

				let selects__superiores=$(".selects__superiores1").val();
				let organismoOculto__modal=$("#idOrganismo").val();
				let periodo=$("#periodo").val();

				paqueteDeDatos.append("selects__superiores",selects__superiores);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);

				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);

				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);


				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
					contentType: false,
					data:paqueteDeDatos,
					processData: false,
					cache: false, 
					success:function(response){


			            var elementos=JSON.parse(response);

			            var mensaje=elementos['mensaje'];

			          	if(mensaje==8){

							alertify.set("notifier","position", "top-center");
							alertify.notify("En caso de enviar a zonal debe enviar unicamente a zonal", "error", 5, function(){});

							$(parametro1).show();

			            }

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

		});

	}


	
	/*=====  End of Ingresfr  ======*/


	/*==============================================================
	=            Devolver informacion recomendada altos            =
	==============================================================*/
	
	var informacion__analistas__reasignar__regresar__Contratacion__Publica__regresar__recomendados=function(parametro1){

		$(parametro1).click(function(e){

			var confirm= alertify.confirm('¿Está seguro de regresar la información de seguimiento?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});   

			$(this).hide();

			confirm.set({transition:'slide'}); 


			confirm.set('onok', function(){ //callbak al pulsar botón positivo			

				var paqueteDeDatos = new FormData();

				paqueteDeDatos.append('tipo','regreso__recomendado__seguimientos_Contratacion_Publica');	

				let selects__superiores=$(".selects__superiores").val();
				let organismoOculto__modal=$("#organismoOculto__modal").val();
				let periodo=$("#periodo").val();
				let idRol=$("#idRolAd").val();


				paqueteDeDatos.append("selects__superiores",selects__superiores);
				paqueteDeDatos.append("organismoOculto__modal",organismoOculto__modal);
				paqueteDeDatos.append("periodo",periodo);
				paqueteDeDatos.append("idRol",idRol);


				let observacionesReasignaciones=$("#observacionesReasignaciones").val();
				paqueteDeDatos.append("observacionesReasignaciones",observacionesReasignaciones);
				
				let fisicamenteE=$("#fisicamenteE").val();
				paqueteDeDatos.append("fisicamenteE",fisicamenteE);

				$.ajax({

					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/actualizacion.md.php",
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

		});

	}

		
	
	/*=====  End of Devolver informacion recomendada altos  ======*/