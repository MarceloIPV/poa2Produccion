var Selector_otros_Honorarios_Poa_Seguimiento =async  function (tipo,documento,idActividad) {
	let paqueteDeDatos = new FormData();

	paqueteDeDatos.append("tipo", tipo);
	paqueteDeDatos.append("documento", documento);
	paqueteDeDatos.append("idActividad", idActividad);

		$.ajax({

			type:"POST",
			url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			async:false,
			success:function(response){

				let elementos=JSON.parse(response);

				if(elementos.informacion[0] ==""){

				}else{
					$("#datosHonorarios").val(elementos.informacion[0].idOtrosHonorarios)
				}

				
				
				
			},
			error:function(){

			}
			
		});	
	
};

/*==========================================
=            Recreativo Técnico            =
==========================================*/
var recreativo__tecnicos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','deportivas__tecnico__recreativas');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let valor1=0;
							let valor2=0;
							let valor3=0;
							let equiparable=" ";

							if (parametro5=="primerTrimestre") {

								valor1=z.enero;
								valor2=z.febrero;
								valor3=z.marzo;
								equiparable="Marzo";

							}else if (parametro5=="segundoTrimestre") {

								valor1=z.abril;
								valor2=z.mayo;
								valor3=z.junio;
								equiparable="Junio";

							}else if (parametro5=="tercerTrimestre") {

								valor1=z.julio;
								valor2=z.agosto;
								valor3=z.septiembre;
								equiparable="Septiembre";

							}else if (parametro5=="cuartoTrimestre") {

								valor1=z.octubre;
								valor2=z.noviembre;
								valor3=z.diciembre;
								equiparable="Diciembre";

							}

							// if (z.mes!=parametro5) {


								$(parametro1).append('<tr class="filaIndicadora__recreativos__tecnicos'+z.idPda+'"><td><center>'+z.nombreDeporte+'</center></td><td>'+z.tipoFinanciamiento+'</td><td>'+z.nombreEvento+'</td><td>'+z.paisNombre+'</td><td>'+z.nombreAlcanse+'</td><td>'+z.genero+'</td><td>'+z.categoria+'</td><td>'+z.numeroEntreandores+'</td><td>'+z.numeroAtletas+'</td><td>'+z.total+'</td><td>'+z.mBenefici+'</td><td>'+z.hBenefici+'</td><td><center><input type="checkbox" id="checkeds__recreativo__tecnico'+z.idPda+'" name="checkeds__recreativo__tecnico'+z.idPda+'" class="checkeds__recreativo__tecnico"/></center></td></tr>');


								checkeds__recorridos__general__tecnicos__matenimientos__recreativo($(".checkeds__recreativo__tecnico"),$("#checkeds__recreativo__tecnico"+z.idPda),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idPda,$(parametro1),$(parametro4),[z.idPda,z.totalTotales,valor1,valor2,valor3,z.totalTotales,z.esigef,z.totalCompletados,z.fechaInicio,z.fechaFin,z.fechaInicio,z.fechaFin],'recreativo__guardar','recreativo__guardar__facturas','recreativo__guardar__otros','otros__recreativo__tecnicos','guardar__recreativo__tecnicos',4);	

							// }


							$(".filaIndicadora__recreativos__tecnicos"+z.idPda).show();

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

}


/*====================================
=            Capacitación            =
====================================*/

var mantenimiento__capacitacion=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','deportivas__tecnico__seguis');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let valor1=0;
							let valor2=0;
							let valor3=0;
							let equiparable=" ";

							if (parametro5=="primerTrimestre") {

								valor1=z.enero;
								valor2=z.febrero;
								valor3=z.marzo;
								equiparable="Marzo";

							}else if (parametro5=="segundoTrimestre") {

								valor1=z.abril;
								valor2=z.mayo;
								valor3=z.junio;
								equiparable="Junio";

							}else if (parametro5=="tercerTrimestre") {

								valor1=z.julio;
								valor2=z.agosto;
								valor3=z.septiembre;
								equiparable="Septiembre";

							}else if (parametro5=="cuartoTrimestre") {

								valor1=z.octubre;
								valor2=z.noviembre;
								valor3=z.diciembre;
								equiparable="Diciembre";

							}

							// if (z.mes!=parametro5) {


								$(parametro1).append('<tr class="filaIndicadora__mantenimiento__tecnicos'+z.idPda+'"><td><center>'+z.itemPreesupuestario+'</center></td><td>'+z.nombreItem+'</td><td>'+z.tipoFinanciamiento+'</td><td>'+z.nombreEvento+'</td><td>'+z.detalleBien+'</td><td>'+z.justificacionAd+'</td><td>'+z.canitdarBie+'</td><td><center><input type="checkbox" id="checkeds__cpacitacion'+z.idPda+'" name="checkeds__cpacitacion'+z.idPda+'" class="checkeds__cpacitaciones"/></center></td></tr>');


								checkeds__recorridos__general__capacitacion_presupuestaria($(".checkeds__cpacitaciones"),$("#checkeds__cpacitacion"+z.idPda),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idPda,$(parametro1),$(parametro4),[z.idPda,z.totalTotales,valor1,valor2,valor3,z.totalTotales,z.esigef,z.totalCompletados,z.idItem],'capacitacion__guardar','capacitacion__guardar__facturas','capacitacion__guardar__otros',1,158);	

							// }


							$(".filaIndicadora__mantenimiento__tecnicos"+z.idPda).show();

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

}


/*=====  End of Capacitación  ======*/


/*===================================
	=            Competencia            =
	===================================*/
	
	var actividades__deportivas__competencia=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','deportivas__competencias__seguis');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let valor1=0;
							let valor2=0;
							let valor3=0;
							let equiparable=" ";

							if (parametro5=="primerTrimestre") {

								valor1=z.enero;
								valor2=z.febrero;
								valor3=z.marzo;
								equiparable="Marzo";

							}else if (parametro5=="segundoTrimestre") {

								valor1=z.abril;
								valor2=z.mayo;
								valor3=z.junio;
								equiparable="Junio";

							}else if (parametro5=="tercerTrimestre") {

								valor1=z.julio;
								valor2=z.agosto;
								valor3=z.septiembre;
								equiparable="Septiembre";

							}else if (parametro5=="cuartoTrimestre") {

								valor1=z.octubre;
								valor2=z.noviembre;
								valor3=z.diciembre;
								equiparable="Diciembre";

							}

							// if (z.mes!=parametro5) {


								$(parametro1).append('<tr class="filaIndicadora__mantenimiento__tecnicos'+z.idPda+'"><td><center>'+z.itemPreesupuestario+'</center></td><td>'+z.nombreItem+'</td><td>'+z.tipoFinanciamiento+'</td><td>'+z.nombreEvento+'</td><td>'+z.detalleBien+'</td><td>'+z.justificacionAd+'</td><td>'+z.canitdarBie+'</td><td><center><input type="checkbox" id="checkedsCompetencias'+z.idPda+'" name="checkedsCompetencias'+z.idPda+'" class="checkeds__Competencias"/></center></td></tr>');


	 							checkeds__recorridos__general_competencia_presupuesto($(".checkeds__Competencias"),$("#checkedsCompetencias"+z.idPda),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idPda,$(parametro1),$(parametro4),[z.idPda,z.totalTotales,valor1,valor2,valor3,z.totalTotales,z.esigef,z.totalCompletados,z.idItem],'competencias__guardar','competencias__guardar__facturas','competencias__guardar__otros',1);	

							// }


							$(".filaIndicadora__mantenimiento__tecnicos"+z.idPda).show();

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

	}


	/*=====  End of Competencia  ======*/
	

	/*===================================
	=            Indicadores           =
	===================================*/
	
	var indicadores__seguimientos2023=function(parametro1,parametro2,parametro3,tipo){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');
			$(".oculto__trimestrales").hide();

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo',tipo);
			paqueteDeDatos.append('idOrganismos',parametro2);

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let trimestresV="";

							if($("#trimestreEvaluador").val()=="primerTrimestre"){
								trimestresV=z.primertrimestre;
							}else if($("#trimestreEvaluador").val()=="segundoTrimestre"){
								trimestresV=z.segundotrimestre;
							}else if($("#trimestreEvaluador").val()=="tercerTrimestre"){
								trimestresV=z.tercertrimestre;
							}else if($("#trimestreEvaluador").val()=="cuartoTrimestre"){
								trimestresV=z.cuartotrimestre;
							}
				
								//$(parametro1).append('<tr class="filaIndicadora'+z.idActividades+'"><td style="font-weight:bold;"><center>'+z.idActividades+'</center></td><td>'+z.nombreActividades+'</td><td>'+z.indicador+'</td><td><center><input type="checkbox" id="idActi'+z.idActividades+'" name="idActi'+z.idActividades+'" class="checkeds__dinamicos__indicadores"/></center></td></tr>');
								//checkeds__recorridos($(".checkeds__dinamicos__indicadores"),$("#idActi"+z.idActividades),$("#contadorIndicador"),$(".oculto__trimestrales"),$(".contenedor__trimestres"),[z.idActividades,z.nombreActividades,z.indicador,trimestresV,z.metaindicador],parametro2,$("#trimestreEvaluador").val());
								
								 $(parametro1).append('<tr id="filaIndicadora"class="filaIndicadora'+z.idActividades+'"><td style="font-weight:bold;"><center>'+z.idActividades+'</center></td><td>'+z.nombreActividades+'</td><td>'+z.indicador+'</td><td><input type="text" id="totalProgramado'+z.idActividades+'" name="totalProgramado'+z.idActividades+'" value="'+trimestresV+'" class="solo__numeros ancho__total__input text-center obligatorios" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idActividades+'"><input type="text" id="totalEjecutado'+z.idActividades+'" name="totalEjecutado'+z.idActividades+'" value="'+trimestresV+'" class="solo__numeros ancho__total__input text-center obligatorios" /><div class="rotulo'+z.idActividades+'" style="text-align:center; widht:100%;"></div></td><td><input type="file" accept="application/pdf" id="documentoSustento'+z.idActividades+'" name="documentoSustento'+z.idActividades+'" class="ancho__total__input obligatorios'+z.idActividades+'" /></td><td><a id="guardar'+z.idActividades+'" parametro7="'+parametro2+'" parametro8="'+$("#trimestreEvaluador").val()+'" name="guardar'+z.idActividades+'" idContador="'+z.idActividades+'" class="btn btn-primary"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></td></tr>');								 
				

								 funcion__cambio__de__numero($("#totalEjecutado"+z.idActividades));
								 funcion__solo__numero($(".solo__numeros"));							 
								 //funcion_porcentajes__colores($("#totalEjecutado"+z.idActividades),$("#totalProgramado"+z.idActividades).val(),$(".celdas"+z.idActividades),$(".rotulo"+z.idActividades),z.metaindicador);
								
								 $("#guardar"+z.idActividades).click(function(e) {

									let idContador=$(this).attr('idContador');
									let parametro7=$(this).attr('parametro7');
									let parametro8=$(this).attr('parametro8');

									console.log(idContador,parametro7,parametro8)
									
									funcion__guardado__general2023($("#guardar"+idContador),$(".obligatorios"+idContador),[$("#totalProgramado"+idContador).val(),$("#totalEjecutado"+idContador).val(),parametro7,idContador,parametro8],$("#documentoSustento"+idContador),"seguimiento__indicadores2023",$(".filaIndicadora"+idContador),$(".oculto__trimestrales"));

								}); 
							// }
 					

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

	}

/*=====  End of Indicadores  ======*/

/*=======================================
=			SUELDOS Y SALARIOS			=
========================================*/	
var sueldos__salarios__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){

	$(parametro3).click(function(e) {

		$(parametro1).html(' ');

		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','mostrar__sueldos__salarios__seguimiento__2023');
		paqueteDeDatos.append('idOrganismos',parametro2);

		if (parametro5=="primerTrimestre") {
			paqueteDeDatos.append('mes','marzo');
		}else if (parametro5=="segundoTrimestre") {
			paqueteDeDatos.append('mes','junio');
		}else if (parametro5=="tercerTrimestre") {
			paqueteDeDatos.append('mes','septiembre');
		}else if (parametro5=="cuartoTrimestre") {
			paqueteDeDatos.append('mes','diciembre');
		}

		$.ajax({
			type:"POST",
			url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){				

				$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){
					var elementos=JSON.parse(response);
					var indicadorInformacion=elementos['indicadorInformacion'];
					let contador=0;
					console.log("ESTOY INCICAROD INFO sueldo salarios");
					console.log(indicadorInformacion)
					for (z of indicadorInformacion) {

						let valor1=0;
						let valor2=0;
						let valor3=0;

						let valor1__desahucio=0;
						let valor2__desahucio=0;
						let valor3__desahucio=0;

						let valor1__despido=0;
						let valor2__despido=0;
						let valor3__despido=0;

						let valor1__renuncia=0;
						let valor2__renuncia=0;
						let valor3__renuncia=0;

						let valor1__compensacion=0;
						let valor2__compensacion=0;
						let valor3__compensacion=0;

						let equiparable=" ";

						if (parametro5=="primerTrimestre") {
							valor1=z.enero;
							valor2=z.febrero;
							valor3=z.marzo;

							if (z.eneroDesahucio==null) {
								valor1__desahucio=0;
								valor2__desahucio=0;
								valor3__desahucio=0;	
							}else{
								valor1__desahucio=z.eneroDesahucio;
								valor2__desahucio=z.febreroDesahucio;
								valor3__desahucio=z.marzoDesahucio;
							}

							if (z.eneroDespido==null) {
								valor1__despido=0;
								valor2__despido=0;
								valor3__despido=0;	
							}else{
								valor1__despido=z.eneroDespido;
								valor2__despido=z.febreroDespido;
								valor3__despido=z.marzoDespido;	
							}

							if (z.eneroRenuncia==null) {
								valor1__renuncia=0;
								valor2__renuncia=0;
								valor3__renuncia=0;	
							}else{
								valor1__renuncia=z.eneroRenuncia;
								valor2__renuncia=z.febreroRenuncia;
								valor3__renuncia=z.marzoRenuncia;	
							}

							if (z.eneroCompensacion==null) {
								valor1__compensacion=0;
								valor2__compensacion=0;
								valor3__compensacion=0;	
							}else{
								valor1__compensacion=z.eneroCompensacion;
								valor2__compensacion=z.febreroCompensacion;
								valor3__compensacion=z.marzoCompensacion;
							}
							equiparable="Marzo";

						}else if (parametro5=="segundoTrimestre") {
							valor1=z.abril;
							valor2=z.mayo;
							valor3=z.junio;

							if (z.eneroDesahucio==null) {
								valor1__desahucio=0;
								valor2__desahucio=0;
								valor3__desahucio=0;	
							}else{
								valor1__desahucio=z.abrilDesahucio;
								valor2__desahucio=z.mayoDesahucio;
								valor3__desahucio=z.junioDesahucio;	
							}

							if (z.eneroDespido==null) {
								valor1__despido=0;
								valor2__despido=0;
								valor3__despido=0;	
							}else{
								valor1__despido=z.abrilDespido;
								valor2__despido=z.mayoDespido;
								valor3__despido=z.junioDespido;
							}

							if (z.eneroRenuncia==null) {
								valor1__renuncia=0;
								valor2__renuncia=0;
								valor3__renuncia=0;	
							}else{	
								valor1__renuncia=z.abrilRenuncia;
								valor2__renuncia=z.mayoRenuncia;
								valor3__renuncia=z.junioRenuncia;
							}

							if (z.eneroCompensacion==null) {
								valor1__compensacion=0;
								valor2__compensacion=0;
								valor3__compensacion=0;	
							}else{		
								valor1__compensacion=z.abrilCompensacion;
								valor2__compensacion=z.mayoCompensacion;
								valor3__compensacion=z.junioCompensacion;	
							}
							equiparable="Junio";

						}else if (parametro5=="tercerTrimestre") {
							valor1=z.julio;
							valor2=z.agosto;
							valor3=z.septiembre;

							if (z.eneroDesahucio==null) {
								valor1__desahucio=0;
								valor2__desahucio=0;
								valor3__desahucio=0;	
							}else{
								valor1__desahucio=z.julioDesahucio;
								valor2__desahucio=z.agostoDesahucio;
								valor3__desahucio=z.septiembreDesahucio;
							}

							if (z.eneroDespido==null) {
								valor1__despido=0;
								valor2__despido=0;
								valor3__despido=0;	
							}else{
								valor1__despido=z.julioDespido;
								valor2__despido=z.agostoDespido;
								valor3__despido=z.septiembreDespido;
							}

							if (z.eneroRenuncia==null) {
								valor1__renuncia=0;
								valor2__renuncia=0;
								valor3__renuncia=0;	
							}else{								
								valor1__renuncia=z.julioRenuncia;
								valor2__renuncia=z.agostoRenuncia;
								valor3__renuncia=z.septiembreRenuncia;	
							}

							if (z.eneroCompensacion==null) {
								valor1__compensacion=0;
								valor2__compensacion=0;
								valor3__compensacion=0;	
							}else{		
								valor1__compensacion=z.julioCompensacion;
								valor2__compensacion=z.agostoCompensacion;
								valor3__compensacion=z.septiembreCompensacion;	
							}
							equiparable="Septiembre";

						}else if (parametro5=="cuartoTrimestre") {
							valor1=z.octubre;
							valor2=z.noviembre;
							valor3=z.diciembre;

							if (z.eneroDesahucio==null) {
								valor1__desahucio=0;
								valor2__desahucio=0;
								valor3__desahucio=0;	
							}else{
								valor1__desahucio=z.octubreDesahucio;
								valor2__desahucio=z.noviembreDesahucio;
								valor3__desahucio=z.diciembreDesahucio;	
							}

							if (z.eneroDespido==null) {
								valor1__despido=0;
								valor2__despido=0;
								valor3__despido=0;	
							}else{
								valor1__despido=z.octubreDespido;
								valor2__despido=z.noviembreDespido;
								valor3__despido=z.diciembreDespido;	
							}

							if (z.eneroRenuncia==null) {
								valor1__renuncia=0;
								valor2__renuncia=0;
								valor3__renuncia=0;	
							}else{								
								valor1__renuncia=z.octubreRenuncia;
								valor2__renuncia=z.noviembreRenuncia;
								valor3__renuncia=z.diciembreRenuncia;	
							}

							if (z.eneroCompensacion==null) {
								valor1__compensacion=0;
								valor2__compensacion=0;
								valor3__compensacion=0;	
							}else{		
								valor1__compensacion=z.octubreCompensacion;
								valor2__compensacion=z.noviembreCompensacion;
								valor3__compensacion=z.diciembreCompensacion;	
							}
							equiparable="Diciembre";
						}

						// if (z.mes!=equiparable) {
						// 	$.getScript("layout/scripts/js/POA_SEGUIMIENTO_JS/datatables3.js", function() {
							// datatableSeguimiento1.row.add([
							// 	z.idSueldos,
							// 	contador,
							// 	z.nombres,
							// 	z.cargo,
							// 	z.tipoCargo,
							// 	z.tiempoTrabajo,
							// 	<input type="checkbox" id="checked'+z.idSueldos+'" name="checked'+z.idSueldos+'" class="checkeds__dinamicos__sueldos__salarios"/>,
							//   ]).draw(true);			
						// });
							contador++;
							$(parametro1).append('<tr class="filaIndicadora'+z.idSueldos+'"><td><center>'+contador+'</center></td><td>'+z.nombres+'</td><td>'+z.cedula+'</td><td>'+z.cargo+'</td><td>'+z.tipoCargo+'</td><td>'+z.tiempoTrabajo+'</td><td><center><input type="checkbox" id="checked'+z.idSueldos+'" name="checked'+z.idSueldos+'" class="checkeds__dinamicos__sueldos__salarios"/></center></td></tr>');
							checkeds__recorridos__sueldos__salarios2023($(".checkeds__dinamicos__sueldos__salarios"),$("#checked"+z.idSueldos),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idSueldos,$(parametro1),$(parametro4),[z.idSueldos,z.sueldoSalario,z.aportePatronal,z.decimoTercera,z.decimoCuarta,z.fondosReserva,valor1,valor2,valor3,z.total,valor1__desahucio,valor2__desahucio,valor3__desahucio,valor1__despido,valor2__despido,valor3__despido,valor1__renuncia,valor2__renuncia,valor3__renuncia,valor1__compensacion,valor2__compensacion,valor3__compensacion]);	
						// }
					}
				});		
			},
			error:function(){
			}				
		});		
	});			
}


/*=================================================
	=            Actividades mantenimiento            =
	=================================================*/
	
	var mantenimiento__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','mantenimiento__seguis');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						$.getScript("layout/scripts/js/POA_SEGUIMIENTO_JS/datatabletsAdaptacion.js",function(){

							var elementos=JSON.parse(response);

							var indicadorInformacion=elementos['indicadorInformacion'];

							var table = datatabletsConfiguration($("#dt_segui_mantenimiento_EP"));

							visualizar__actividades__mantenimiento(indicadorInformacion,table,parametro5,parametro1,parametro4);


						});	


					});		

				},
				error:function(){

				}
					
			});		

		});			

	}


	/*=====  End of Actividades mantenimiento  ======*/
	

/*==================================
	=            Recreativo            =
	==================================*/
	
	var recreativo__checkeds=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','deportivas__recreacion__seguis');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let valor1=0;
							let valor2=0;
							let valor3=0;
							let equiparable=" ";

							if (parametro5=="primerTrimestre") {

								valor1=z.enero;
								valor2=z.febrero;
								valor3=z.marzo;
								equiparable="Marzo";

							}else if (parametro5=="segundoTrimestre") {

								valor1=z.abril;
								valor2=z.mayo;
								valor3=z.junio;
								equiparable="Junio";

							}else if (parametro5=="tercerTrimestre") {

								valor1=z.julio;
								valor2=z.agosto;
								valor3=z.septiembre;
								equiparable="Septiembre";

							}else if (parametro5=="cuartoTrimestre") {

								valor1=z.octubre;
								valor2=z.noviembre;
								valor3=z.diciembre;
								equiparable="Diciembre";

							}

							// if (z.mes!=parametro5) {


								$(parametro1).append('<tr class="filaIndicadora__mantenimiento__tecnicos'+z.idPda+'"><td><center>'+z.itemPreesupuestario+'</center></td><td>'+z.nombreItem+'</td><td>'+z.tipoFinanciamiento+'</td><td>'+z.nombreEvento+'</td><td>'+z.detalleBien+'</td><td>'+z.justificacionAd+'</td><td>'+z.canitdarBie+'</td><td><center><input type="checkbox" id="checkedsrecreativos'+z.idPda+'" name="checkedsrecreativos'+z.idPda+'" class="checkeds__recreativos"/></center></td></tr>');


	 							checkeds__recorridos__general_recreativo_presupuestario($(".checkeds__recreativos"),$("#checkedsrecreativos"+z.idPda),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idPda,$(parametro1),$(parametro4),[z.idPda,z.totalTotales,valor1,valor2,valor3,z.totalTotales,z.esigef,z.totalCompletados,z.idItem],'recreativo__guardar','recreativo__guardar__facturas','recreativo__guardar__otros',1);
							// }


							$(".filaIndicadora__mantenimiento__tecnicos"+z.idPda).show();

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

	}

	
	/*=====  End of Recreativo  ======*/
	
	/*======================================
	=            Implementación            =
	======================================*/
	
	var implementacion__checkeds=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','deportivas__implementacion__seguis');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let valor1=0;
							let valor2=0;
							let valor3=0;
							let equiparable=" ";

							if (parametro5=="primerTrimestre") {

								valor1=z.enero;
								valor2=z.febrero;
								valor3=z.marzo;
								equiparable="Marzo";

							}else if (parametro5=="segundoTrimestre") {

								valor1=z.abril;
								valor2=z.mayo;
								valor3=z.junio;
								equiparable="Junio";

							}else if (parametro5=="tercerTrimestre") {

								valor1=z.julio;
								valor2=z.agosto;
								valor3=z.septiembre;
								equiparable="Septiembre";

							}else if (parametro5=="cuartoTrimestre") {

								valor1=z.octubre;
								valor2=z.noviembre;
								valor3=z.diciembre;
								equiparable="Diciembre";

							}

							// if (z.mes!=parametro5) {


								$(parametro1).append('<tr class="filaIndicadora__instalaciones__tecnicos'+z.idPda+'"><td><center>'+z.itemPreesupuestario+'</center></td><td>'+z.nombreItem+'</td><td>'+z.tipoFinanciamiento+'</td><td>'+z.nombreEvento+'</td><td>'+z.detalleBien+'</td><td>'+z.justificacionAd+'</td><td>'+z.canitdarBie+'</td><td><center><input type="checkbox" id="checkedsinstalaciones'+z.idPda+'" name="checkedsinstalaciones'+z.idPda+'" class="checkeds__instalaciones"/></center></td></tr>');


	 							checkeds__recorridos__general_implementacion_deportiva($(".checkedsinstalaciones"),$("#checkedsinstalaciones"+z.idPda),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idPda,$(parametro1),$(parametro4),[z.idPda,z.totalTotales,valor1,valor2,valor3,z.totalTotales,z.esigef,z.totalCompletados,z.idItem],'implementacion__guardar','implementacion__guardar__facturas','implementacion__guardar__otros',1,425);
							// }


							$(".filaIndicadora__instalaciones__tecnicos"+z.idPda).show();

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

	}

	
	
	/*=====  End of Implementación  ======*/
	


	/*===================================================
	=            Actividades administrativas            =
	===================================================*/
	
	var administrativas__seguimientos=function(parametro1,parametro2,parametro3,parametro4,parametro5){

		$(parametro3).click(function(e) {

			$(parametro1).html(' ');

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','administrativos__seguis');
			paqueteDeDatos.append('idOrganismos',parametro2);

			if (parametro5=="primerTrimestre") {
				paqueteDeDatos.append('mes','marzo');
			}else if (parametro5=="segundoTrimestre") {
				paqueteDeDatos.append('mes','junio');
			}else if (parametro5=="tercerTrimestre") {
				paqueteDeDatos.append('mes','septiembre');
			}else if (parametro5=="cuartoTrimestre") {
				paqueteDeDatos.append('mes','diciembre');
			}


			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

					$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

						var elementos=JSON.parse(response);

						var indicadorInformacion=elementos['indicadorInformacion'];

						for (z of indicadorInformacion) {

							let valor1=0;
							let valor2=0;
							let valor3=0;
							let equiparable=" ";

							if (parametro5=="primerTrimestre") {

								valor1=z.enero;
								valor2=z.febrero;
								valor3=z.marzo;
								equiparable="Marzo";

							}else if (parametro5=="segundoTrimestre") {

								valor1=z.abril;
								valor2=z.mayo;
								valor3=z.junio;
								equiparable="Junio";

							}else if (parametro5=="tercerTrimestre") {

								valor1=z.julio;
								valor2=z.agosto;
								valor3=z.septiembre;
								equiparable="Septiembre";

							}else if (parametro5=="cuartoTrimestre") {

								valor1=z.octubre;
								valor2=z.noviembre;
								valor3=z.diciembre;
								equiparable="Diciembre";

							}


							// if (z.mes!=equiparable) {

								$(parametro1).append('<tr class="filaIndicadora__administra'+z.idActividadAd+'"><td><center>'+z.itemPreesupuestario+'</center></td><td>'+z.nombreItem+'</td><td>'+z.justificacionActividad+'</td><td>'+z.cantidadBien+'</td><td><center><input type="checkbox" id="checked'+z.idActividadAd+'" name="checked'+z.idActividadAd+'" class="checkeds__dinamicos__administrativos"/></center></td></tr>');

								
								checkeds__recorridos__general_administrativo_presupuestario($(".checkeds__dinamicos__administrativos"),$("#checked"+z.idActividadAd),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idActividadAd,$(parametro1),$(parametro4),[z.idActividadAd,z.totalTotales,valor1,valor2,valor3,z.totalTotales,z.esigef,z.totalCompletados,z.idItem],'administrativos__seguimientos','facturas__administrativas','otros__administrativas');	

							// }

							$(".filaIndicadora__administra"+z.idActividadAd).show();

						}


					});		

				},
				error:function(){

				}
					
			});		

		});			

	}

	
	/*=====  End of Actividades administrativas  ======*/


	/*===================================================
	=            Contratación Publica POA            =
	===================================================*/
	
	var obtenerContratacionPublicaPoaSeguimiento = function (tipo,idItem,idActividad,trimestre) {

		
	
			let paqueteDeDatos = new FormData();
	
			paqueteDeDatos.append("tipo", tipo);
			paqueteDeDatos.append("idItem", idItem);
			paqueteDeDatos.append("idActividad",idActividad);
			paqueteDeDatos.append("trimestre",trimestre);

			axios({
				method: "post",
				url: "modelosBd/POA_SEGUIMIENTO/selector.md.php",
				data: paqueteDeDatos,
				headers: { "Content-Type": "multipart/form-data" },
			}).then((response) => {

				
	
				var z = response.data.envio__informaciones;
	
				console.log(z.length)
				
				if(z.length < 1){
	
				   
					insertar__contrataciones__publicas_seguimiento_defecto(idItem,idActividad,trimestre);
	
					obtenerContratacionPublicaPoaSeguimiento2("obtener_contratacion_Publica_Seguimiento",idItem,idActividad,trimestre);
	
			
				}else{
	
					
					
				var tabla = document.getElementById('divContratacionPublicaSeguimiento');
	
				for (z of response.data.envio__informaciones) {
	
				   
	 
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Bienes y servicios normalizados</div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
					
					
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Catálogo Electrónico</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__elect" name="catalogo__elect" class="catalogo__elect checkeds enlazados__checkeds__contratos" value="catalogo__elect" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__elect__texto" name="catalogo__elect__texto" class="catalogo__elect__texto ancho__total__textareas">'+z.catalogo__elect__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__elect__cantidad" name="catalogo__elect__texto" class="catalogo__elect__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__elect__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__elect__monto" name="catalogo__elect__texto" class="catalogo__elect__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__elect__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Subasta Inversa Electrónica</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__subasta" name="catalogo__subasta" class="catalogo__subasta checkeds enlazados__checkeds__contratos" value="catalogo__subasta" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea style="width: 100%" id="catalogo__subasta__texto" name="catalogo__subasta__texto" class="catalogo__subasta__texto ancho__total__textareas">'+z.catalogo__subasta__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__subasta__cantidad" name="catalogo__subasta__texto" class="catalogo__subasta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__subasta__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__subasta__monto" name="catalogo__subasta__texto" class="catalogo__subasta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__subasta__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Ínfima Cuantía</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__infima" name="catalogo__infima" class="catalogo__infima checkeds enlazados__checkeds__contratos" value="catalogo__infima" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__infima__texto" name="catalogo__infima__texto" class="catalogo__infima__texto ancho__total__textareas">'+z.catalogo__infima__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__infima__cantidad" name="catalogo__infima__texto" class="catalogo__infima__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__infima__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__infima__monto" name="catalogo__infima__texto" class="catalogo__infima__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__infima__monto+'"></input></div>');
					
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Bienes y servicios no normalizados</div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Menor Cuantía</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__menorCuantia" name="catalogo__menorCuantia" class="catalogo__menorCuantia checkeds enlazados__checkeds__contratos" value="catalogo__menorCuantia" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__menorCuantia__texto" name="catalogo__menorCuantia__texto" class="catalogo__menorCuantia__texto ancho__total__textareas">'+z.catalogo__menorCuantia__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantia__cantidad" name="catalogo__menorCuantia__texto" class="catalogo__menorCuantia__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantia__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantia__monto" name="catalogo__menorCuantia__texto" class="catalogo__menorCuantia__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantia__monto+'"></input></div>');
		
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Cotización</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__cotizacion" name="catalogo__cotizacion" class="catalogo__cotizacion checkeds enlazados__checkeds__contratos" value="catalogo__cotizacion" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__cotizacion__texto" name="catalogo__cotizacion__texto" class="catalogo__cotizacion__texto ancho__total__textareas">'+z.catalogo__cotizacion__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacion__cantidad" name="catalogo__cotizacion__texto" class="catalogo__cotizacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacion__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacion__monto" name="catalogo__cotizacion__texto" class="catalogo__cotizacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacion__monto+'"></input></div>');
		
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Licitación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__licitacion" name="catalogo__licitacion" class="catalogo__licitacion checkeds enlazados__checkeds__contratos" value="catalogo__licitacion" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__licitacion__texto" name="catalogo__licitacion__texto" class="catalogo__licitacion__texto ancho__total__textareas">'+z.catalogo__licitacion__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacion__cantidad" name="catalogo__licitacion__texto" class="catalogo__licitacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacion__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacion__monto" name="catalogo__licitacion__texto" class="catalogo__licitacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacion__monto+'"></input></div>');
	
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Obras</div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Menor Cuantía</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__menorCuantiaObras" name="catalogo__menorCuantiaObras" class="catalogo__menorCuantiaObras checkeds enlazados__checkeds__contratos" value="catalogo__menorCuantiaObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__menorCuantiaObras__texto" name="catalogo__menorCuantiaObras__texto" class="catalogo__menorCuantiaObras__texto ancho__total__textareas">'+z.catalogo__menorCuantiaObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantiaObras__cantidad" name="catalogo__menorCuantiaObras__texto" class="catalogo__menorCuantiaObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantiaObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantiaObras__monto" name="catalogo__menorCuantiaObras__texto" class="catalogo__menorCuantiaObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantiaObras__monto+'"></input></div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Cotización</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__cotizacionObras" name="catalogo__cotizacionObras" class="catalogo__cotizacionObras checkeds enlazados__checkeds__contratos" value="catalogo__cotizacionObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__cotizacionObras__texto" name="catalogo__cotizacionObras__texto" class="catalogo__cotizacionObras__texto ancho__total__textareas">'+z.catalogo__cotizacionObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacionObras__cantidad" name="catalogo__cotizacionObras__texto" class="catalogo__cotizacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacionObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacionObras__monto" name="catalogo__cotizacionObras__texto" class="catalogo__cotizacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacionObras__monto+'"></input></div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Licitación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__licitacionObras" name="catalogo__licitacionObras" class="catalogo__licitacionObras checkeds enlazados__checkeds__contratos" value="catalogo__licitacionObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__licitacionObras__texto" name="catalogo__licitacionObras__texto" class="catalogo__licitacionObras__texto ancho__total__textareas">'+z.catalogo__licitacionObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacionObras__cantidad" name="catalogo__licitacionObras__texto" class="catalogo__licitacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacionObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacionObras__monto" name="catalogo__licitacionObras__texto" class="catalogo__licitacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacionObras__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Precio Fijo</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__precioObras" name="catalogo__precioObras" class="catalogo__precioObras checkeds enlazados__checkeds__contratos" value="catalogo__precioObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__precioObras__texto" name="catalogo__precioObras__texto" class="catalogo__precioObras__texto ancho__total__textareas">'+z.catalogo__precioObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__precioObras__cantidad" name="catalogo__precioObras__texto" class="catalogo__precioObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__precioObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__precioObras__monto" name="catalogo__precioObras__texto" class="catalogo__precioObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__precioObras__monto+'"></input></div>');
					
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Consultoría</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Contratación Directa</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__contratacionDirecta" name="catalogo__contratacionDirecta" class="catalogo__contratacionDirecta checkeds enlazados__checkeds__contratos" value="catalogo__contratacionDirecta" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__contratacionDirecta__texto" name="catalogo__contratacionDirecta__texto" class="ancho__total__textareas catalogo__contratacionDirecta__texto">'+z.catalogo__contratacionDirecta__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionDirecta__cantidad" name="catalogo__contratacionDirecta__texto" class="ancho__total__textareas catalogo__contratacionDirecta__texto solo__numero__montos" value="'+z.catalogo__contratacionDirecta__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionDirecta__monto" name="catalogo__contratacionDirecta__texto" class="ancho__total__textareas catalogo__contratacionDirecta__texto solo__numero__montos" value="'+z.catalogo__contratacionDirecta__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Lista Corta</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__contratacionListaCorta" name="catalogo__contratacionListaCorta" class="catalogo__contratacionListaCorta checkeds enlazados__checkeds__contratos" value="catalogo__contratacionListaCorta" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__contratacionListaCorta__texto" name="catalogo__contratacionListaCorta__texto" class="catalogo__contratacionListaCorta__texto ancho__total__textareas">'+z.catalogo__contratacionListaCorta__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionListaCorta__cantidad" name="catalogo__contratacionListaCorta__texto" class="catalogo__contratacionListaCorta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionListaCorta__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionListaCorta__monto" name="catalogo__contratacionListaCorta__texto" class="catalogo__contratacionListaCorta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionListaCorta__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Concurso Público</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__contratacionConcursoPu" name="catalogo__contratacionConcursoPu" class="catalogo__contratacionConcursoPu checkeds enlazados__checkeds__contratos" value="catalogo__contratacionConcursoPu" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__contratacionConcursoPu__texto" name="catalogo__contratacionConcursoPu__texto" class="catalogo__contratacionConcursoPu__texto ancho__total__textareas">'+z.catalogo__contratacionConcursoPu__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionConcursoPu__cantidad" name="catalogo__contratacionConcursoPu__texto" class="catalogo__contratacionConcursoPu__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionConcursoPu__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionConcursoPu__monto" name="catalogo__contratacionConcursoPu__texto" class="catalogo__contratacionConcursoPu__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionConcursoPu__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">N/A</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-8 text-left"><input type="checkbox" id="noAplica__3" name="noAplica__3" class=" checkeds enlazados__checkeds__contratos__3" value="catalogo__contratacionConcursoPu" /></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12 d d-flex justify-content-center flex-wrap"><a type="button" class="btn btn-primary  left__margen boton__enlacesOcultos" id="guardarCatalogoContraloriaDesarrollo" name="guardarIndicadoresDesarrollo" idpaidindicador="6288">Guardar</a>&nbsp;&nbsp;&nbsp;&nbsp;</div>');
					
	
					checkCatalogoContraloria__desdeBase(z.catalogo__elect,$("#catalogo__elect"), $(".catalogo__elect__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__subasta,$("#catalogo__subasta"), $(".catalogo__subasta__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__infima,$("#catalogo__infima"),$(".catalogo__infima__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__menorCuantia,$("#catalogo__menorCuantia"),$(".catalogo__menorCuantia__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__cotizacion,$("#catalogo__cotizacion"),$(".catalogo__cotizacion__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__licitacion,$("#catalogo__licitacion"),$(".catalogo__licitacion__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__menorCuantiaObras,$("#catalogo__menorCuantiaObras"),$(".catalogo__menorCuantiaObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__cotizacionObras,$("#catalogo__cotizacionObras"),$(".catalogo__cotizacionObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__licitacionObras,$("#catalogo__licitacionObras"),$(".catalogo__licitacionObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__precioObras,$("#catalogo__precioObras"),$(".catalogo__precioObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__contratacionDirecta,$("#catalogo__contratacionDirecta"),$(".catalogo__contratacionDirecta__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__contratacionListaCorta,$("#catalogo__contratacionListaCorta"),$(".catalogo__contratacionListaCorta__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__contratacionConcursoPu,$("#catalogo__contratacionConcursoPu"),$(".catalogo__contratacionConcursoPu__texto"));
					checkCatalogoContraloria__desdeBase(z.noAplica__3,$("#noAplica__3"),$(""));
	
				 
					
					$("#inputIdItem" ).val(z.idCatalogo);
					$("#guardarCatalogoContraloriaDesarrollo" ).attr('idCatalogo',z.idCatalogo);
				
					checkboxFunciones($(".catalogo__elect"),$(".catalogo__elect__texto"));
					checkboxFunciones($(".catalogo__subasta"),$(".catalogo__subasta__texto"));
					checkboxFunciones($(".catalogo__infima"),$(".catalogo__infima__texto"));
					checkboxFunciones($(".catalogo__menorCuantia"),$(".catalogo__menorCuantia__texto"));
					checkboxFunciones($(".catalogo__cotizacion"),$(".catalogo__cotizacion__texto"));
					checkboxFunciones($(".catalogo__licitacion"),$(".catalogo__licitacion__texto"));
					checkboxFunciones($(".catalogo__menorCuantiaObras"),$(".catalogo__menorCuantiaObras__texto"));
					checkboxFunciones($(".catalogo__cotizacionObras"),$(".catalogo__cotizacionObras__texto"));
					checkboxFunciones($(".catalogo__licitacionObras"),$(".catalogo__licitacionObras__texto"));
					checkboxFunciones($(".catalogo__precioObras"),$(".catalogo__precioObras__texto"));
					checkboxFunciones($(".catalogo__contratacionDirecta"),$(".catalogo__contratacionDirecta__texto"));
					checkboxFunciones($(".catalogo__contratacionListaCorta"),$(".catalogo__contratacionListaCorta__texto"));
					checkboxFunciones($(".catalogo__contratacionConcursoPu"),$(".catalogo__contratacionConcursoPu__texto"));
	
					funcion__solo__numero__montos($(".solo__numero__montos"));
               		funcion__cambio__de__numero($(".solo__numero__montos"));

					insertar__contrataciones__publicas_seguimiento($("#guardarCatalogoContraloriaDesarrollo"));
	
				}
	
				}
	
			}).catch((error) => {
	
	
	
			});
	
		
	
	}
	
	var obtenerContratacionPublicaPoaSeguimiento2 = function (tipo,idItem,idActividad,trimestre) {
	
	
		let paqueteDeDatos = new FormData();
	
		paqueteDeDatos.append("tipo", tipo);
		paqueteDeDatos.append("idItem", idItem);
		paqueteDeDatos.append("idActividad",idActividad);
		paqueteDeDatos.append("trimestre",trimestre);
	
		axios({
			method: "post",
			url: "modelosBd/POA_SEGUIMIENTO/selector.md.php",
			data: paqueteDeDatos,
			headers: { "Content-Type": "multipart/form-data" },
		}).then((response) => {
	
	
			var tabla = document.getElementById('divContratacionPublicaSeguimiento');
	
				for (z of response.data.envio__informaciones) {
	
				   
	 
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Bienes y servicios normalizados</div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
					
					
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Catálogo Electrónico</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__elect" name="catalogo__elect" class="catalogo__elect checkeds enlazados__checkeds__contratos" value="catalogo__elect" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__elect__texto" name="catalogo__elect__texto" class="catalogo__elect__texto ancho__total__textareas">'+z.catalogo__elect__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__elect__cantidad" name="catalogo__elect__texto" class="catalogo__elect__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__elect__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__elect__monto" name="catalogo__elect__texto" class="catalogo__elect__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__elect__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Subasta Inversa Electrónica</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__subasta" name="catalogo__subasta" class="catalogo__subasta checkeds enlazados__checkeds__contratos" value="catalogo__subasta" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea style="width: 100%" id="catalogo__subasta__texto" name="catalogo__subasta__texto" class="catalogo__subasta__texto ancho__total__textareas">'+z.catalogo__subasta__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__subasta__cantidad" name="catalogo__subasta__texto" class="catalogo__subasta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__subasta__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__subasta__monto" name="catalogo__subasta__texto" class="catalogo__subasta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__subasta__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Ínfima Cuantía</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__infima" name="catalogo__infima" class="catalogo__infima checkeds enlazados__checkeds__contratos" value="catalogo__infima" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__infima__texto" name="catalogo__infima__texto" class="catalogo__infima__texto ancho__total__textareas">'+z.catalogo__infima__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__infima__cantidad" name="catalogo__infima__texto" class="catalogo__infima__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__infima__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__infima__monto" name="catalogo__infima__texto" class="catalogo__infima__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__infima__monto+'"></input></div>');
					
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Bienes y servicios no normalizados</div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Menor Cuantía</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__menorCuantia" name="catalogo__menorCuantia" class="catalogo__menorCuantia checkeds enlazados__checkeds__contratos" value="catalogo__menorCuantia" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__menorCuantia__texto" name="catalogo__menorCuantia__texto" class="catalogo__menorCuantia__texto ancho__total__textareas">'+z.catalogo__menorCuantia__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantia__cantidad" name="catalogo__menorCuantia__texto" class="catalogo__menorCuantia__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantia__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantia__monto" name="catalogo__menorCuantia__texto" class="catalogo__menorCuantia__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantia__monto+'"></input></div>');
		
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Cotización</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__cotizacion" name="catalogo__cotizacion" class="catalogo__cotizacion checkeds enlazados__checkeds__contratos" value="catalogo__cotizacion" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__cotizacion__texto" name="catalogo__cotizacion__texto" class="catalogo__cotizacion__texto ancho__total__textareas">'+z.catalogo__cotizacion__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacion__cantidad" name="catalogo__cotizacion__texto" class="catalogo__cotizacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacion__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacion__monto" name="catalogo__cotizacion__texto" class="catalogo__cotizacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacion__monto+'"></input></div>');
		
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Licitación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__licitacion" name="catalogo__licitacion" class="catalogo__licitacion checkeds enlazados__checkeds__contratos" value="catalogo__licitacion" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__licitacion__texto" name="catalogo__licitacion__texto" class="catalogo__licitacion__texto ancho__total__textareas">'+z.catalogo__licitacion__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacion__cantidad" name="catalogo__licitacion__texto" class="catalogo__licitacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacion__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacion__monto" name="catalogo__licitacion__texto" class="catalogo__licitacion__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacion__monto+'"></input></div>');
	
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Obras</div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Menor Cuantía</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__menorCuantiaObras" name="catalogo__menorCuantiaObras" class="catalogo__menorCuantiaObras checkeds enlazados__checkeds__contratos" value="catalogo__menorCuantiaObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__menorCuantiaObras__texto" name="catalogo__menorCuantiaObras__texto" class="catalogo__menorCuantiaObras__texto ancho__total__textareas">'+z.catalogo__menorCuantiaObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantiaObras__cantidad" name="catalogo__menorCuantiaObras__texto" class="catalogo__menorCuantiaObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantiaObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__menorCuantiaObras__monto" name="catalogo__menorCuantiaObras__texto" class="catalogo__menorCuantiaObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__menorCuantiaObras__monto+'"></input></div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Cotización</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__cotizacionObras" name="catalogo__cotizacionObras" class="catalogo__cotizacionObras checkeds enlazados__checkeds__contratos" value="catalogo__cotizacionObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__cotizacionObras__texto" name="catalogo__cotizacionObras__texto" class="catalogo__cotizacionObras__texto ancho__total__textareas">'+z.catalogo__cotizacionObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacionObras__cantidad" name="catalogo__cotizacionObras__texto" class="catalogo__cotizacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacionObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__cotizacionObras__monto" name="catalogo__cotizacionObras__texto" class="catalogo__cotizacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__cotizacionObras__monto+'"></input></div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Licitación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__licitacionObras" name="catalogo__licitacionObras" class="catalogo__licitacionObras checkeds enlazados__checkeds__contratos" value="catalogo__licitacionObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__licitacionObras__texto" name="catalogo__licitacionObras__texto" class="catalogo__licitacionObras__texto ancho__total__textareas">'+z.catalogo__licitacionObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacionObras__cantidad" name="catalogo__licitacionObras__texto" class="catalogo__licitacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacionObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__licitacionObras__monto" name="catalogo__licitacionObras__texto" class="catalogo__licitacionObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__licitacionObras__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Precio Fijo</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__precioObras" name="catalogo__precioObras" class="catalogo__precioObras checkeds enlazados__checkeds__contratos" value="catalogo__precioObras" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__precioObras__texto" name="catalogo__precioObras__texto" class="catalogo__precioObras__texto ancho__total__textareas">'+z.catalogo__precioObras__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__precioObras__cantidad" name="catalogo__precioObras__texto" class="catalogo__precioObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__precioObras__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__precioObras__monto" name="catalogo__precioObras__texto" class="catalogo__precioObras__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__precioObras__monto+'"></input></div>');
					
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12" style="font-weight:bold; text-align:center;">Consultoría</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4 text-center">Nombre</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-center">Check</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-center">Justificación</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Cantidad</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-center">Monto</div>');
	
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Contratación Directa</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__contratacionDirecta" name="catalogo__contratacionDirecta" class="catalogo__contratacionDirecta checkeds enlazados__checkeds__contratos" value="catalogo__contratacionDirecta" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__contratacionDirecta__texto" name="catalogo__contratacionDirecta__texto" class="ancho__total__textareas catalogo__contratacionDirecta__texto">'+z.catalogo__contratacionDirecta__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionDirecta__cantidad" name="catalogo__contratacionDirecta__texto" class="ancho__total__textareas catalogo__contratacionDirecta__texto solo__numero__montos" value="'+z.catalogo__contratacionDirecta__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionDirecta__monto" name="catalogo__contratacionDirecta__texto" class="ancho__total__textareas catalogo__contratacionDirecta__texto solo__numero__montos" value="'+z.catalogo__contratacionDirecta__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Lista Corta</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__contratacionListaCorta" name="catalogo__contratacionListaCorta" class="catalogo__contratacionListaCorta checkeds enlazados__checkeds__contratos" value="catalogo__contratacionListaCorta" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__contratacionListaCorta__texto" name="catalogo__contratacionListaCorta__texto" class="catalogo__contratacionListaCorta__texto ancho__total__textareas">'+z.catalogo__contratacionListaCorta__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionListaCorta__cantidad" name="catalogo__contratacionListaCorta__texto" class="catalogo__contratacionListaCorta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionListaCorta__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionListaCorta__monto" name="catalogo__contratacionListaCorta__texto" class="catalogo__contratacionListaCorta__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionListaCorta__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">Concurso Público</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-1 text-left"><input type="checkbox" id="catalogo__contratacionConcursoPu" name="catalogo__contratacionConcursoPu" class="catalogo__contratacionConcursoPu checkeds enlazados__checkeds__contratos" value="catalogo__contratacionConcursoPu" /></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-3 text-left"><textarea id="catalogo__contratacionConcursoPu__texto" name="catalogo__contratacionConcursoPu__texto" class="catalogo__contratacionConcursoPu__texto ancho__total__textareas">'+z.catalogo__contratacionConcursoPu__texto+'</textarea></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionConcursoPu__cantidad" name="catalogo__contratacionConcursoPu__texto" class="catalogo__contratacionConcursoPu__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionConcursoPu__cantidad+'"></input></div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-2 text-left"><input type="text" id="catalogo__contratacionConcursoPu__monto" name="catalogo__contratacionConcursoPu__texto" class="catalogo__contratacionConcursoPu__texto ancho__total__textareas solo__numero__montos" value="'+z.catalogo__contratacionConcursoPu__monto+'"></input></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-4">N/A</div>');
					tabla.insertAdjacentHTML('beforeend','<div class="col col-8 text-left"><input type="checkbox" id="noAplica__3" name="noAplica__3" class=" checkeds enlazados__checkeds__contratos__3" value="catalogo__contratacionConcursoPu" /></div>');
					
					tabla.insertAdjacentHTML('beforeend','<div class="col col-12 d d-flex justify-content-center flex-wrap"><a type="button" class="btn btn-primary  left__margen boton__enlacesOcultos" id="guardarCatalogoContraloriaDesarrollo" name="guardarIndicadoresDesarrollo" idpaidindicador="6288">Guardar</a>&nbsp;&nbsp;&nbsp;&nbsp;</div>');
					
	
					checkCatalogoContraloria__desdeBase(z.catalogo__elect,$("#catalogo__elect"), $(".catalogo__elect__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__subasta,$("#catalogo__subasta"), $(".catalogo__subasta__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__infima,$("#catalogo__infima"),$(".catalogo__infima__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__menorCuantia,$("#catalogo__menorCuantia"),$(".catalogo__menorCuantia__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__cotizacion,$("#catalogo__cotizacion"),$(".catalogo__cotizacion__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__licitacion,$("#catalogo__licitacion"),$(".catalogo__licitacion__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__menorCuantiaObras,$("#catalogo__menorCuantiaObras"),$(".catalogo__menorCuantiaObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__cotizacionObras,$("#catalogo__cotizacionObras"),$(".catalogo__cotizacionObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__licitacionObras,$("#catalogo__licitacionObras"),$(".catalogo__licitacionObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__precioObras,$("#catalogo__precioObras"),$(".catalogo__precioObras__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__contratacionDirecta,$("#catalogo__contratacionDirecta"),$(".catalogo__contratacionDirecta__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__contratacionListaCorta,$("#catalogo__contratacionListaCorta"),$(".catalogo__contratacionListaCorta__texto"));
					checkCatalogoContraloria__desdeBase(z.catalogo__contratacionConcursoPu,$("#catalogo__contratacionConcursoPu"),$(".catalogo__contratacionConcursoPu__texto"));
					checkCatalogoContraloria__desdeBase(z.noAplica__3,$("#noAplica__3"),$(""));
	
				 
					
					$("#inputIdItem" ).val(z.idCatalogo);
					$("#guardarCatalogoContraloriaDesarrollo" ).attr('idCatalogo',z.idCatalogo);
				
					checkboxFunciones($(".catalogo__elect"),$(".catalogo__elect__texto"));
					checkboxFunciones($(".catalogo__subasta"),$(".catalogo__subasta__texto"));
					checkboxFunciones($(".catalogo__infima"),$(".catalogo__infima__texto"));
					checkboxFunciones($(".catalogo__menorCuantia"),$(".catalogo__menorCuantia__texto"));
					checkboxFunciones($(".catalogo__cotizacion"),$(".catalogo__cotizacion__texto"));
					checkboxFunciones($(".catalogo__licitacion"),$(".catalogo__licitacion__texto"));
					checkboxFunciones($(".catalogo__menorCuantiaObras"),$(".catalogo__menorCuantiaObras__texto"));
					checkboxFunciones($(".catalogo__cotizacionObras"),$(".catalogo__cotizacionObras__texto"));
					checkboxFunciones($(".catalogo__licitacionObras"),$(".catalogo__licitacionObras__texto"));
					checkboxFunciones($(".catalogo__precioObras"),$(".catalogo__precioObras__texto"));
					checkboxFunciones($(".catalogo__contratacionDirecta"),$(".catalogo__contratacionDirecta__texto"));
					checkboxFunciones($(".catalogo__contratacionListaCorta"),$(".catalogo__contratacionListaCorta__texto"));
					checkboxFunciones($(".catalogo__contratacionConcursoPu"),$(".catalogo__contratacionConcursoPu__texto"));

					funcion__solo__numero__montos($(".solo__numero__montos"));
               		funcion__cambio__de__numero($(".solo__numero__montos"));
	
					insertar__contrataciones__publicas_seguimiento($("#guardarCatalogoContraloriaDesarrollo"));
	
				}
	
		   
			
	
		}).catch((error) => {
	
	
	
		});
	
	
	}
	/*===================================================
	=          NO  Contratación Publica POA            =
	===================================================*/
	
	var noContratacionPublicaPoaSeguimiento = function (idItem,trimestre) {

			var tabla = document.getElementById('divNoContratacionPublicaSeguimiento');

				tabla.insertAdjacentHTML('beforeend','<div class="col-sm-6" centre>Ingrese Justificación para No Contratación</div>');

				tabla.insertAdjacentHTML('beforeend','<div class="col-sm-12"><textarea id="justificacion_no_contratacion" name="justificacion_no_contratacion" class="justificacion_no_contratacion" style="width:100%;"></textarea></div>');
				
				tabla.insertAdjacentHTML('beforeend','<div class="col col-12 d d-flex justify-content-center flex-wrap"><a type="button" class="btn btn-primary  left__margen boton__enlacesOcultos" id="guardarNoContratacion" name="guardarNoContratacion" idpaidindicador="6288">Guardar</a>&nbsp;&nbsp;&nbsp;&nbsp;</div>');
			
				$("#guardarNoContratacion").attr("idItem",idItem);
				$("#guardarNoContratacion").attr("trimestre",trimestre);

				insertar__registro_contrataciones__publicas_seguimiento2($("#guardarNoContratacion"),"No",$("#justificacion_no_contratacion"));

	}

	/*===================================
	=            JURISDICCION           =
	===================================*/
	
	// var guardar_zonales_juridicciones1=function(parametro1,parametro2,parametro3,tipo){

	// 	$(parametro3).click(function(e) {

	// 		$(parametro1).html(' ');
	// 		$(".oculto__trimestrales").hide();

	// 		var paqueteDeDatos = new FormData();

	// 		paqueteDeDatos.append('tipo',tipo);
	// 		paqueteDeDatos.append('idOrganismos',parametro2);

	// 		$.ajax({

	// 			type:"POST",
	// 			url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
	// 			contentType: false,
	// 			data:paqueteDeDatos,
	// 			processData: false,
	// 			cache: false, 
	// 			success:function(response){

	// 				$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

	// 					var elementos=JSON.parse(response);

	// 					var indicadorInformacion=elementos['indicadorInformacion'];

	// 					for (z of indicadorInformacion) {

	// 						let trimestresV="";

	// 						if($("#trimestreEvaluador").val()=="primerTrimestre"){
	// 							trimestresV=z.primertrimestre;
	// 						}else if($("#trimestreEvaluador").val()=="segundoTrimestre"){
	// 							trimestresV=z.segundotrimestre;
	// 						}else if($("#trimestreEvaluador").val()=="tercerTrimestre"){
	// 							trimestresV=z.tercertrimestre;
	// 						}else if($("#trimestreEvaluador").val()=="cuartoTrimestre"){
	// 							trimestresV=z.cuartotrimestre;
	// 						}
				
	// 							//$(parametro1).append('<tr class="filaIndicadora'+z.idActividades+'"><td style="font-weight:bold;"><center>'+z.idActividades+'</center></td><td>'+z.nombreActividades+'</td><td>'+z.indicador+'</td><td><center><input type="checkbox" id="idActi'+z.idActividades+'" name="idActi'+z.idActividades+'" class="checkeds__dinamicos__indicadores"/></center></td></tr>');
	// 							//checkeds__recorridos($(".checkeds__dinamicos__indicadores"),$("#idActi"+z.idActividades),$("#contadorIndicador"),$(".oculto__trimestrales"),$(".contenedor__trimestres"),[z.idActividades,z.nombreActividades,z.indicador,trimestresV,z.metaindicador],parametro2,$("#trimestreEvaluador").val());
								
	// 							 $(parametro1).append('<tr id="filaIndicadora"class="filaIndicadora'+z.idActividades+'"><td style="font-weight:bold;"><center>'+z.idActividades+'</center></td><td>'+z.nombreActividades+'</td><td>'+z.indicador+'</td><td><input type="text" id="totalProgramado'+z.idActividades+'" name="totalProgramado'+z.idActividades+'" value="'+trimestresV+'" class="solo__numeros ancho__total__input text-center obligatorios" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idActividades+'"><input type="text" id="totalEjecutado'+z.idActividades+'" name="totalEjecutado'+z.idActividades+'" value="'+trimestresV+'" class="solo__numeros ancho__total__input text-center obligatorios" /><div class="rotulo'+z.idActividades+'" style="text-align:center; widht:100%;"></div></td><td><input type="file" accept="application/pdf" id="documentoSustento'+z.idActividades+'" name="documentoSustento'+z.idActividades+'" class="ancho__total__input obligatorios'+z.idActividades+'" /></td><td><a id="guardar'+z.idActividades+'" parametro7="'+parametro2+'" parametro8="'+$("#trimestreEvaluador").val()+'" name="guardar'+z.idActividades+'" idContador="'+z.idActividades+'" class="btn btn-primary"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></td></tr>');								 
				

	// 							 funcion__cambio__de__numero($("#totalEjecutado"+z.idActividades));
	// 							 funcion__solo__numero($(".solo__numeros"));							 
	// 							 //funcion_porcentajes__colores($("#totalEjecutado"+z.idActividades),$("#totalProgramado"+z.idActividades).val(),$(".celdas"+z.idActividades),$(".rotulo"+z.idActividades),z.metaindicador);
								
	// 							 $("#guardar"+z.idActividades).click(function(e) {

	// 								let idContador=$(this).attr('idContador');
	// 								let parametro7=$(this).attr('parametro7');
	// 								let parametro8=$(this).attr('parametro8');

	// 								console.log(idContador,parametro7,parametro8)
									
	// 								funcion__guardado__general2023($("#guardar"+idContador),$(".obligatorios"+idContador),[$("#totalProgramado"+idContador).val(),$("#totalEjecutado"+idContador).val(),parametro7,idContador,parametro8],$("#documentoSustento"+idContador),"seguimiento__indicadores2023",$(".filaIndicadora"+idContador),$(".oculto__trimestrales"));

	// 							}); 
	// 						// }
 					

	// 					}


	// 				});		

	// 			},
	// 			error:function(){

	// 			}
					
	// 		});		

	// 	});			

	// }

/*=====  End of Indicadores  ======*/


var indicadores__funcionales_POASEGUIMIENTO2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){

	$(parametro1).click(function(e) {

		$(parametro2).html(' ');

		var paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo',parametro5);
		paqueteDeDatos.append('idOrganismos',parametro3);
		paqueteDeDatos.append('trimestres',parametro4);

		$.ajax({

			type:"POST",
			url:"modelosBd/POA_SEGUIMIENTO/selector.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

				$.getScript("layout/scripts/js/seguimiento/seguimientoGlobal.js",function(){

					$(".fila__corresponsal").remove()

					var elementos=JSON.parse(response);

					var indicadorInformacion=elementos['indicadorInformacion'];

					if (parametro5=="sueldos__seguimientos__tablas") {

						$(".cuerpo__sueldos__slaraios__seguimientos__2").html(" ");

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__corresponsal fila__'+z.idSueldosSeguimeintos+'"><td><center>'+z.mes+'</center></td><td><center>'+z.cedula+'</center></td><td><center>'+z.tipoCargo+'</center></td><td><center>'+z.nombres+'</center></td><td><input type="text" id="sueldoProgramado'+z.idSueldosSeguimeintos+'" name="sueldoProgramado'+z.idSueldosSeguimeintos+'" value="'+z.sueldoSalarioPlanificado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__sueldo'+z.idSueldosSeguimeintos+'"><input type="text" id="sueldoEjecutado'+z.idSueldosSeguimeintos+'" name="sueldoEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.sueldoSalarioEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__sueldos'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="aporteProgramado'+z.idSueldosSeguimeintos+'" name="aporteProgramado'+z.idSueldosSeguimeintos+'" value="'+z.aporteIessPlanificado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__aporte'+z.idSueldosSeguimeintos+'"><input type="text" id="aporteEjecutado'+z.idSueldosSeguimeintos+'" name="aporteEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.aporteIessEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__aporte'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="decimoTercerProgramado'+z.idSueldosSeguimeintos+'" name="decimoTercerProgramado'+z.idSueldosSeguimeintos+'" value="'+z.decimoTerceroPlanificado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__decimoTercer'+z.idSueldosSeguimeintos+'"><input type="text" id="decimoTercerEjecutado'+z.idSueldosSeguimeintos+'" name="decimoTercerEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.decimoTerceroEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__decimoTercer'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="decimoCuartoProgramado'+z.idSueldosSeguimeintos+'" name="decimoCuartoProgramado'+z.idSueldosSeguimeintos+'" value="'+z.decimoCuartoPlanificado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__decimoCuarto'+z.idSueldosSeguimeintos+'"><input type="text" id="decimoCuartoEjecutado'+z.idSueldosSeguimeintos+'" name="decimoCuartoEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.decimoCuartoEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__decimoCuarto'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="fondosReservaProgramado'+z.idSueldosSeguimeintos+'" name="fondosReservaProgramado'+z.idSueldosSeguimeintos+'" value="'+z.fondosReservasPlanificado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__fondo'+z.idSueldosSeguimeintos+'"><input type="text" id="fondosReservaEjecutado'+z.idSueldosSeguimeintos+'" name="fondosReservaEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.fondosReservasEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__fondosReservas'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="editarInfor'+z.idSueldosSeguimeintos+'" name="editarInfor'+z.idSueldosSeguimeintos+'" idPrincipal="'+z.idSueldosSeguimeintos+'" idContador="'+z.idSueldosSeguimeintos+'" class="editar__ides"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarInfor'+z.idSueldosSeguimeintos+'" name="eliminarInfor'+z.idSueldosSeguimeintos+'" idPrincipal="'+z.idSueldosSeguimeintos+'" idContador="'+z.idSueldosSeguimeintos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__sueldos__slaraios__seguimientos__2").append('<tr><td><center>'+z.mes+'</center></td><td><center>'+z.cedula+'</center></td><td><center>'+z.tipoCargo+'</center></td><td><center>'+z.nombres+'</center></td><td>'+z.sueldoSalarioPlanificado+'</td><td>'+z.sueldoSalarioEjecutado+'</td><td>'+z.aporteIessPlanificado+'</td><td>'+z.aporteIessEjecutado+'</td><td>'+z.decimoTerceroPlanificado+'</td><td>'+z.decimoTerceroEjecutado+'</td><td>'+z.decimoCuartoPlanificado+'</td><td>'+z.decimoCuartoEjecutado+'</td><td>'+z.fondosReservasPlanificado+'</td><td>'+z.fondosReservasEjecutado+'</td></tr>');

								funcion__cambio__de__numero($("#sueldoEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#aporteEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#decimoTercerEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#decimoCuartoEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#fondosReservaEjecutado"+z.idSueldosSeguimeintos));

								funcion__solo__numero__montos($(".solo__numeros__montos"));

								// funcion_porcentajes__colores__auto__ejecutables($("#sueldoEjecutado"+z.idSueldosSeguimeintos),$("#sueldoProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__sueldo"+z.idSueldosSeguimeintos),$(".rotulo__sueldos"+z.idSueldosSeguimeintos));

								// funcion_porcentajes__colores__auto__ejecutables($("#aporteEjecutado"+z.idSueldosSeguimeintos),$("#aporteProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__aporte"+z.idSueldosSeguimeintos),$(".rotulo__aporte"+z.idSueldosSeguimeintos));

								// funcion_porcentajes__colores__auto__ejecutables($("#decimoTercerEjecutado"+z.idSueldosSeguimeintos),$("#decimoTercerProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__decimoTercer"+z.idSueldosSeguimeintos),$(".rotulo__decimoTercer"+z.idSueldosSeguimeintos));

								// funcion_porcentajes__colores__auto__ejecutables($("#decimoCuartoEjecutado"+z.idSueldosSeguimeintos),$("#decimoCuartoProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__decimoCuarto"+z.idSueldosSeguimeintos),$(".rotulo__decimoCuarto"+z.idSueldosSeguimeintos));

								// funcion_porcentajes__colores__auto__ejecutables($("#fondosReservaEjecutado"+z.idSueldosSeguimeintos),$("#fondosReservaProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__fondo"+z.idSueldosSeguimeintos),$(".rotulo__fondosReservas"+z.idSueldosSeguimeintos));



								// funcion_porcentajes__colores($("#sueldoEjecutado"+z.idSueldosSeguimeintos),$("#sueldoProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__sueldo"+z.idSueldosSeguimeintos),$(".rotulo__sueldos"+z.idSueldosSeguimeintos),4888888888889);

								// funcion_porcentajes__colores($("#aporteEjecutado"+z.idSueldosSeguimeintos),$("#aporteProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__aporte"+z.idSueldosSeguimeintos),$(".rotulo__aporte"+z.idSueldosSeguimeintos),4888888888889);

								// funcion_porcentajes__colores($("#decimoTercerEjecutado"+z.idSueldosSeguimeintos),$("#decimoTercerProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__decimoTercer"+z.idSueldosSeguimeintos),$(".rotulo__decimoTercer"+z.idSueldosSeguimeintos),4888888888889);

								// funcion_porcentajes__colores($("#decimoCuartoEjecutado"+z.idSueldosSeguimeintos),$("#decimoCuartoProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__decimoCuarto"+z.idSueldosSeguimeintos),$(".rotulo__decimoCuarto"+z.idSueldosSeguimeintos),4888888888889);

								// funcion_porcentajes__colores($("#fondosReservaEjecutado"+z.idSueldosSeguimeintos),$("#fondosReservaProgramado"+z.idSueldosSeguimeintos).val(),$(".celda__fondo"+z.idSueldosSeguimeintos),$(".rotulo__fondosReservas"+z.idSueldosSeguimeintos),4888888888889);

								$("#eliminarInfor"+z.idSueldosSeguimeintos).click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
									
									funcion__eliminar__general(idPrincipal,'eliminar__sueldos__salarios__seguimiento');

								}); 

								$(".cuerpo__sueldos__slaraios__seguimientos__desvinculaciones").append('<tr class="fila__corresponsal fila__desvinculacion__'+z.idSueldosSeguimeintos+'"><td><center>'+z.mes+'</center></td><td><center>'+z.cedula+'</center></td><td><center>'+z.tipoCargo+'</center></td><td><center>'+z.nombres+'</center></td><td><input type="text" id="desaucioProgramado'+z.idSueldosSeguimeintos+'" name="desaucioProgramado'+z.idSueldosSeguimeintos+'" value="'+z.compensacionDeshaucioProgramado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__desaucio'+z.idSueldosSeguimeintos+'"><input type="text" id="desaucioEjecutado'+z.idSueldosSeguimeintos+'" name="desaucioEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.compensacionDeshaucioEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__desaucio'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="despidoProgramado'+z.idSueldosSeguimeintos+'" name="despidoProgramado'+z.idSueldosSeguimeintos+'" value="'+z.despidoIntepestivoProgramado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__despido'+z.idSueldosSeguimeintos+'"><input type="text" id="despidoEjecutado'+z.idSueldosSeguimeintos+'" name="despidoEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.despidoIntepestivoEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__despido'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="renunciaProgramado'+z.idSueldosSeguimeintos+'" name="renunciaProgramado'+z.idSueldosSeguimeintos+'" value="'+z.reunciaVoluntariaProgramado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__renuncia'+z.idSueldosSeguimeintos+'"><input type="text" id="renunciaEjecutado'+z.idSueldosSeguimeintos+'" name="renunciaEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.renunciaVoluntariaEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__renuncia'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><input type="text" id="vacacionesProgramado'+z.idSueldosSeguimeintos+'" name="vacacionesProgramado'+z.idSueldosSeguimeintos+'" value="'+z.vacacionesProgramado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'" style="border:none;" disabled="disabled"/></td><td class="celda__vacaciones'+z.idSueldosSeguimeintos+'"><input type="text" id="vacacionesEjecutado'+z.idSueldosSeguimeintos+'" name="vacacionesEjecutado'+z.idSueldosSeguimeintos+'" value="'+z.vacionesEjecutado+'" class="solo__numeros__montos ancho__total__input text-center obligatorios'+z.idSueldosSeguimeintos+'"/><div class="rotulo__vacaciones'+z.idSueldosSeguimeintos+'" style="text-align:center; widht:100%;"></div></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="editarInforDesvinculaciones'+z.idSueldosSeguimeintos+'" name="editarInforDesvinculaciones'+z.idSueldosSeguimeintos+'" idPrincipal="'+z.idSueldosSeguimeintos+'" idContador="'+z.idSueldosSeguimeintos+'" class="editar__ides"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

								funcion__cambio__de__numero($("#desaucioEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#despidoEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#renunciaEjecutado"+z.idSueldosSeguimeintos));
								funcion__cambio__de__numero($("#vacacionesEjecutado"+z.idSueldosSeguimeintos));

								funcion__solo__numero__montos($(".solo__numeros__montos"));


								$("#editarInforDesvinculaciones"+z.idSueldosSeguimeintos).click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
																		
									funcion__editar__general($("#editarInforDesvinculaciones"+idContador),$(".obligatorios__nos"+idContador),"editar__sueldos__salarios__desvinculaciones",[idPrincipal,$("#desaucioEjecutado"+idContador).val(),$("#despidoEjecutado"+idContador).val(),$("#renunciaEjecutado"+idContador).val(),$("#vacacionesEjecutado"+idContador).val(),idContador,$("#organismoIdPrin").val()],false,false,false);

								}); 


								$("#editarInfor"+z.idSueldosSeguimeintos).click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
									
									funcion__editar__general($("#editarInfor"+idContador),$(".obligatorios__nos"+idContador),"editar__sueldos__salarios",[idPrincipal,$("#sueldoEjecutado"+idContador).val(),$("#aporteEjecutado"+idContador).val(),$("#decimoTercerEjecutado"+idContador).val(),$("#decimoCuartoEjecutado"+idContador).val(),$("#fondosReservaEjecutado"+idContador).val(),idContador,$("#organismoIdPrin").val()],false,false,false);

								}); 

								
						}

						var indicadorInformacion2=elementos['indicadorInformacion2'];

						if (indicadorInformacion2!="" && indicadorInformacion2!=null) {

							for(d of indicadorInformacion2){

								$(".cuerpo__sueldos__edis__com").append('<tr class="fila__corresponsal fila__'+d.idComprobante__general+'"><td><a href="documentos/seguimiento/planilla/'+d.planilla+'" target="_blank">'+d.planilla+'</a></td><td><a href="documentos/seguimiento/rol/'+d.rol+'" target="_blank">'+d.rol+'</a></td><td><a href="documentos/seguimiento/comprobante/'+d.comprobante+'" target="_blank">'+d.comprobante+'</a></td><td><center>'+d.mes+'</center></td><td><center>'+d.trimestre+'</center></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__s'+d.idComprobante__general+'" name="eliminarInfor'+d.idComprobante__general+'" idPrincipal="'+d.idComprobante__general+'" idContador="'+d.idComprobante__general+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

								$("#eliminarInfor__s"+d.idComprobante__general).click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
											
									funcion__eliminar__general(idPrincipal,'eliminar__sueldos__salarios__seguimiento__comprobantes');

								}); 


							}


						}else{

							$("#comprobantes__sueldos__salarios").hide();

						}


					}

					if (parametro5=="indicadores__seguimientos__tablas") {

						$(".cuerpo__indicadores__seguimientos__2").html(" ");

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__corresponsal fila__'+z.idModificaIndicadores+'"><td>'+z.idActividades+'</td><td>'+z.nombreActividades+'</td><td>'+z.nombreIndicador+'</td><td><input type="text" id="totalProgramado'+z.idActividades+'" name="totalProgramado'+z.idActividades+'" value="'+z.totalProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idActividades+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idActividades+'"><input type="text" id="totalEjecutado'+z.idActividades+'" name="totalEjecutado'+z.idActividades+'" value="'+z.totalEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idActividades+'" /><div class="rotulo'+z.idActividades+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="file" id="documentoSustento'+z.idActividades+'" name="documentoSustento'+z.idActividades+'" class="ancho__total__input" /><div class="documento__seguimiento'+z.idActividades+'"></div></center></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="editarInfor'+z.idActividades+'" name="editarInfor'+z.idActividades+'" idPrincipal="'+z.idModificaIndicadores+'" idContador="'+z.idActividades+'" class="editar__ides"><i class="fa fa-pencil-square-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarInfor'+z.idActividades+'" name="eliminarInfor'+z.idActividades+'" idPrincipal="'+z.idModificaIndicadores+'" idContador="'+z.idActividades+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');


							$(".cuerpo__indicadores__seguimientos__2").append('<tr><td>'+z.idActividades+'</td><td>'+z.nombreActividades+'</td><td>'+z.nombreIndicador+'</td><td>'+z.totalProgramado+'</td><td>'+z.totalEjecutado+'</td></tr>');

							$(".documento__seguimiento"+z.idActividades).append('<a href="documentos/seguimiento/indicadoresDocumento/'+z.documento+'" target="_blank" class="text-center">'+z.documento+'</a>');

							funcion__cambio__de__numero($("#totalEjecutado"+z.idActividades));

							funcion__solo__numero($(".solo__numeros"));

							funcion_porcentajes__colores($("#totalEjecutado"+z.idActividades),$("#totalProgramado"+z.idActividades).val(),$(".celdas"+z.idActividades),$(".rotulo"+z.idActividades),4888888888889);

							//funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idActividades),$("#totalProgramado"+z.idActividades).val(),$(".celdas"+z.idActividades),$(".rotulo"+z.idActividades));

							$("#editarInfor"+z.idActividades).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__editar__general($("#editarInfor"+idContador),$(".obligatorios"+idContador),"editar__indicadores",[idPrincipal,$("#totalEjecutado"+idContador).val(),idContador,$("#organismoIdPrin").val()],$("#documentoSustento"+idContador));

							}); 


							$("#eliminarInfor"+z.idActividades).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__indicador__seguimiento');

							}); 

						}

					}



					if (parametro5=="indicadores__seguimientos__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2']; 
						
						console.log("VER INDICADOR NRO 2");
						console.log(indicadorInformacion2);
						if (indicadorInformacion2!=null && indicadorInformacion2!="") {

							for (l of indicadorInformacion2) {

								$(".cuerpo__indicadores__seguimientos__2__estado__cuenta").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.id_estado_cuenta+'"><td>'+l.fecha+'</td><td>'+l.trimestre+'</td><td><a href="../../../../documentos/seguimiento/estadosCuenta//'+l.documento+'" target="_blank">'+l.documento+'</a></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.id_estado_cuenta+'" name="eliminarInfor__otros'+l.id_estado_cuenta+'" idPrincipal="'+l.id_estado_cuenta+'" idContador="'+l.id_estado_cuenta+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.id_estado_cuenta).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__administrativos');

									}); 				

							}

						}else{

							$("#indicadores__seguimientos__2__estado_cuenta").hide();

						}

				
						

					}




					if (parametro5=="honorarios__seguimientos__tablas") {


						var indicadorInformacion2=elementos['indicadorInformacion2'];
						var indicadorInformacion3=elementos['indicadorInformacion3'];

						if (indicadorInformacion3!=null && indicadorInformacion3!="") {

							for (l of indicadorInformacion3) {

								$(".otros__honorarios").append('<tr class="fila__corresponsal fila__otros__'+l.idOtrosHonorarios+'"><td>'+l.nombres+'</td><td><a href="documentos/seguimiento/otrosHonorarios/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosHonorarios+'" name="eliminarInfor__otros'+l.idOtrosHonorarios+'" idPrincipal="'+l.idOtrosHonorarios+'" idContador="'+l.idOtrosHonorarios+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosHonorarios).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__honorarios');

									}); 				

							}

						}else{

							$("#otros__honorarios__edicion").hide();

						}

						if (indicadorInformacion2!=null && indicadorInformacion2!="") {

							for (c of indicadorInformacion2) {
								
								$(".factureros__honorarios").append('<tr class="fila__corresponsal fila__fac__'+c.idFacturaHonorarios+'"><td>'+c.nombres+'</td><td><a href="documentos/seguimiento/facturasHonorarios/'+c.documento+'" target="_blank">'+c.documento+'</a></td><td>'+c.numeroFactura+'</td><td>'+c.fechaFactura+'</td><td>'+c.ruc+'</td><td>'+c.autorizacion+'</td><td>'+c.monto+'</td><td>'+c.mes+'</td><td>'+c.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros__hono'+c.idFacturaHonorarios+'" name="eliminarInfor__factureros__hono'+c.idFacturaHonorarios+'" idPrincipal="'+c.idFacturaHonorarios+'" idContador="'+c.idFacturaHonorarios+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');


									$("#eliminarInfor__factureros__hono"+c.idFacturaHonorarios).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__facturas__honorarios');

									}); 

							}

						}else{

							$("#honorarios__facturas__edicion").hide();

						}

						$(".cuerpo__honorarios__seguimientos__2").html(' ');

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__corresponsal fila__'+z.idHonorariosSeguimientos+'"><td>'+z.mes+'</td><td>'+z.cedula+'</td><td>'+z.cargo+'</td><td>'+z.nombres+'</td><td><input type="text" id="mensualProgramado'+z.idHonorariosSeguimientos+'" name="mensualProgramado'+z.idHonorariosSeguimientos+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idHonorariosSeguimientos+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idHonorariosSeguimientos+'"><input type="text" id="mensualEjecutado'+z.idHonorariosSeguimientos+'" name="mensualEjecutado'+z.idHonorariosSeguimientos+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idHonorariosSeguimientos+'" /><div class="rotulo'+z.idHonorariosSeguimientos+'" style="text-align:center; widht:100%;"></div></td><td>'+z.observaciones+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor'+z.idHonorariosSeguimientos+'" name="eliminarInfor'+z.idHonorariosSeguimientos+'" idPrincipal="'+z.idHonorariosSeguimientos+'" idContador="'+z.idHonorariosSeguimientos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__honorarios__seguimientos__2").append('<tr><td>'+z.mes+'</td><td>'+z.cedula+'</td><td>'+z.cargo+'</td><td>'+z.nombres+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td><td>'+z.observaciones+'</td></tr>');

							if (z.facturas!='no' && z.facturas!=undefined && z.facturas!=null) {

								$(".documento__factura"+z.idHonorariosSeguimientos).append('<a href="documentos/seguimiento/facturas/'+z.facturas+'" target="_blank" class="text-center">'+z.facturas+'</a>');

							}else{
								$(".documento__factura"+z.idHonorariosSeguimientos).append('N/A');
							}

							
							if (z.cheques!='no' && z.cheques!=undefined && z.cheques!=null) {
								
								$(".documento__cheque"+z.idHonorariosSeguimientos).append('<a href="documentos/seguimiento/cheques/'+z.cheques+'" target="_blank" class="text-center">'+z.cheques+'</a>');
								
							}else{
								$(".documento__cheque"+z.idHonorariosSeguimientos).append('N/A');
							}


							if (z.ruc!='no' && z.ruc!=undefined && z.ruc!=null) {
								
								$(".documento__ruc"+z.idHonorariosSeguimientos).append('<a href="documentos/seguimiento/ruc/'+z.ruc+'" target="_blank" class="text-center">'+z.ruc+'</a>');
								
							}else{
								$(".documento__ruc"+z.idHonorariosSeguimientos).append('N/A');
							}


							if (z.otrosHabilitantes!='no' && z.otrosHabilitantes!=undefined && z.otrosHabilitantes!=null) {
								
								$(".documento__otrosHa"+z.idHonorariosSeguimientos).append('<a href="documentos/seguimiento/otrosHabilitantes/'+z.otrosHabilitantes+'" target="_blank" class="text-center">'+z.otrosHabilitantes+'</a>');
								
							}else{
								$(".documento__otrosHa"+z.idHonorariosSeguimientos).append('N/A');
							}

							funcion_porcentajes__colores($("#mensualEjecutado"+z.idHonorariosSeguimientos),$("#mensualProgramado"+z.idHonorariosSeguimientos).val(),$(".celdas"+z.idHonorariosSeguimientos),$(".rotulo"+z.idHonorariosSeguimientos),4888888888889);

							funcion_porcentajes__colores__auto__ejecutables($("#mensualEjecutado"+z.idHonorariosSeguimientos),$("#mensualProgramado"+z.idHonorariosSeguimientos).val(),$(".celdas"+z.idHonorariosSeguimientos),$(".rotulo"+z.idHonorariosSeguimientos));

							$("#editarInfor"+z.idHonorariosSeguimientos).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__editar__general($("#editarInfor"+idContador),$(".obligatorios"+idContador),"editar__honorarios",[idPrincipal,$("#mensualEjecutado"+idContador).val(),idContador,$("#organismoIdPrin").val()],$("#factura"+idContador),$("#cheque"+idContador),$("#ruc"+idContador),$("#otrosHa"+idContador));

							}); 


							$("#eliminarInfor"+z.idHonorariosSeguimientos).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__honorarios__seguimiento');

							}); 


						}

					}

console.log("VER PARAMETRO 5");
console.log(parametro5);
					if (parametro5=="administrativo__seguimientos__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2']; 
						var indicadorInformacion3=elementos['indicadorInformacion3'];
						var indicadorInformacion4=elementos['indicadorInformacion4'];

						if (indicadorInformacion3!=null && indicadorInformacion3!="") {

							for (l of indicadorInformacion3) {

								$(".otros__administrativos").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosAdministrativos+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otrosHabilitantes__administrativo/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosAdministrativos+'" name="eliminarInfor__otros'+l.idOtrosAdministrativos+'" idPrincipal="'+l.idOtrosAdministrativos+'" idContador="'+l.idOtrosAdministrativos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosAdministrativos).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__administrativos');

									}); 				

							}

						}else{

							$("#otros__editas__administativos").hide();

						}

				
						if (indicadorInformacion2!=null && indicadorInformacion2!="") {

							for (l of indicadorInformacion2) {
								
								$(".factureros__administrativos").append('<tr class="fila__corresponsal fila__fac__'+l.idFacturaAdministrativos+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/facturas__administrativo/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.numeroFactura+'</td><td>'+l.fechaFactura+'</td><td>'+l.ruc+'</td><td>'+l.autorizacion+'</td><td>'+l.monto+'</td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros'+l.idFacturaAdministrativos+'" name="eliminarInfor__factureros'+l.idFacturaAdministrativos+'" idPrincipal="'+l.idFacturaAdministrativos+'" idContador="'+l.idFacturaAdministrativos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');


									$("#eliminarInfor__factureros"+l.idFacturaAdministrativos).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__facturas__administrativos');

									}); 

							}

						}else{

							$("#administrativos__editares").hide();

						}

						$(".cuerpo__administrativo__seguimientos__2").html(' ');

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idAdministrativoSegui+' fila__corresponsal"><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td><input type="text" id="totalProgramado'+z.idAdministrativoSegui+'" name="totalProgramado'+z.idAdministrativoSegui+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idAdministrativoSegui+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idAdministrativoSegui+'"><input type="text" id="totalEjecutado'+z.idAdministrativoSegui+'" name="totalEjecutado'+z.idAdministrativoSegui+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idAdministrativoSegui+'" readonly=""/><div class="rotulo'+z.idAdministrativoSegui+'" style="text-align:center; widht:100%;"></div></td><td>'+z.observaciones+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor'+z.idAdministrativoSegui+'" name="eliminarInfor'+z.idAdministrativoSegui+'" idPrincipal="'+z.idAdministrativoSegui+'" idContador="'+z.idAdministrativoSegui+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__administrativo__seguimientos__2").append('<tr><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td><td>'+z.observaciones+'</td></tr>');


							if (z.factura!='no' && z.factura!=undefined && z.factura!=null) {

								$(".documento__factura"+z.idAdministrativoSegui).append('<a href="documentos/seguimiento/facturas__administrativo/'+z.factura+'" target="_blank" class="text-center">'+z.factura+'</a>');

							}else{
								$(".documento__factura"+z.idAdministrativoSegui).append('N/A');
							}

							
							if (z.otrosHabilitantes!='no' && z.otrosHabilitantes!=undefined && z.otrosHabilitantes!=null) {
								
								$(".documento__Otros"+z.idAdministrativoSegui).append('<a href="documentos/seguimiento/otrosHabilitantes__administrativo/'+z.otrosHabilitantes+'" target="_blank" class="text-center">'+z.otrosHabilitantes+'</a>');
								
							}else{
								$(".documento__Otros"+z.idAdministrativoSegui).append('N/A');
							}



							funcion__cambio__de__numero($("#totalEjecutado"+z.idAdministrativoSegui));

							funcion__solo__numero($(".solo__numeros"));

							funcion_porcentajes__colores($("#totalEjecutado"+z.idAdministrativoSegui),$("#totalProgramado"+z.idAdministrativoSegui).val(),$(".celdas"+z.idAdministrativoSegui),$(".rotulo"+z.idAdministrativoSegui),4888888888889);

							funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idAdministrativoSegui),$("#totalProgramado"+z.idAdministrativoSegui).val(),$(".celdas"+z.idAdministrativoSegui),$(".rotulo"+z.idAdministrativoSegui));


							$("#editarInfor"+z.idAdministrativoSegui).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__editar__general($("#editarInfor"+idContador),$(".obligatorios"+idContador),"editar__indicadores",[idPrincipal,$("#totalEjecutado"+idContador).val(),idContador,$("#organismoIdPrin").val()],$("#documentoFactura"+idContador),$("#documentoOtros"+idContador));

							}); 



							$("#eliminarInfor"+z.idAdministrativoSegui).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__adminsitrativos__seguimiento');

							}); 


						}

					}

					console.log("PARAMETRO 4 VER")
					console.log(indicadorInformacion4)

					if (parametro5=="administrativo__seguimientos__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2']; 
						var indicadorInformacion3=elementos['indicadorInformacion3'];
						var indicadorInformacion4=elementos['indicadorInformacion4'];

						if (indicadorInformacion4!=null && indicadorInformacion4!="") {

							for (l of indicadorInformacion4) {

								$(".carga_datos_estado_cuenta_EP").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.id_estado_cuenta+'"><td>'+l.fecha+'</td><td>'+l.trimestre+'</td><td><a href="../../../../documentos/seguimiento/estadosCuenta//'+l.documento+'" target="_blank">'+l.documento+'</a></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.id_estado_cuenta+'" name="eliminarInfor__otros'+l.id_estado_cuenta+'" idPrincipal="'+l.id_estado_cuenta+'" idContador="'+l.id_estado_cuenta+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.id_estado_cuenta).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__administrativos');

									}); 				

							}

						}else{

							$("#estado_de_ceunta_EP").hide();

						}

				
						

					}


					if (parametro5=="competencia__seguimientos__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2'];
						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__competencia__administrativos__2").html(' ');

						if(indicadorInformacion3!=null && indicadorInformacion3!=""){

							for (l of indicadorInformacion3) {

								$(".otros__competencia").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosCompetencia+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otrosCompetencia/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosCompetencia+'" name="eliminarInfor__otros'+l.idOtrosCompetencia+'" idPrincipal="'+l.idOtrosCompetencia+'" idContador="'+l.idOtrosCompetencia+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosCompetencia).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__competencia__s');

									}); 				

							}

						}else{

							$("#otros__competencias__us").hide();

						}

						if(indicadorInformacion2!=null && indicadorInformacion2!=""){

							for (l of indicadorInformacion2) {
								
								$(".factureros__administrativos").append('<tr class="fila__corresponsal fila__fac__'+l.idFacturaCompetencia+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/facturasCompetencias/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.numeroFactura+'</td><td>'+l.fechaFactura+'</td><td>'+l.ruc+'</td><td>'+l.autorizacion+'</td><td>'+l.monto+'</td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros__competencias'+l.idFacturaCompetencia+'" name="eliminarInfor__factureros__competencias'+l.idFacturaCompetencia+'" idPrincipal="'+l.idFacturaCompetencia+'" idContador="'+l.idFacturaCompetencia+'" class="eliminar__ides eliminarIdes__competencia"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

								$(".eliminarIdes__competencia").click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
										
									funcion__eliminar__general(idPrincipal,'eliminar__competencias__seguimmientos__facturas');

								}); 


							}

						}else{

							$("#facturas__seguimientos__competencias__u").hide();

						}

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idCompetencias+' fila__corresponsal"><td>'+z.mes+'</td><td>'+z.nombreEvento+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td><input type="text" id="totalProgramado'+z.idCompetencias+'" name="totalProgramado'+z.idCompetencias+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idCompetencias+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idCompetencias+'"><input type="text" id="totalEjecutado'+z.idCompetencias+'" name="totalEjecutado'+z.idCompetencias+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idCompetencias+'" readonly=""/><div class="rotulo'+z.idCompetencias+'" style="text-align:center; widht:100%;"></div></td><td>'+z.observaciones+'</td><td>'+z.cantidadBienes+'</td><td>'+z.registra_Contratacion+'</td><td>'+z.justificacion+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__competencia'+z.idCompetencias+'" name="eliminarInfor__competencia'+z.idCompetencias+'" idPrincipal="'+z.idCompetencias+'" idContador="'+z.idCompetencias+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__competencia__administrativos__2").append('<tr><td>'+z.mes+'</td><td>'+z.nombreEvento+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td><td>'+z.observaciones+'</td><td>'+z.cantidadBienes+'</td></tr>');

							funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idCompetencias),$("#totalProgramado"+z.idCompetencias).val(),$(".celdas"+z.idCompetencias),$(".rotulo"+z.idCompetencias));

							$("#eliminarInfor__competencia"+z.idCompetencias).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__competencias__seguimiento');

							}); 


						}

					}


					if (parametro5=="mantenimiento__seguimientos__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2'];
						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__mantenimiento__seguimientos__2").html(' ');

						if(indicadorInformacion3!=null && indicadorInformacion3!=""){

							for (l of indicadorInformacion3) {

								$(".otros__mantenimiento").append('<tr class="fila__corresponsal fila__otros__'+l.idOtrosMantenimiento+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otrosMantenimiento/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros__mantenimiento'+l.idOtrosMantenimiento+'" name="eliminarInfor__otros__mantenimiento'+l.idOtrosMantenimiento+'" idPrincipal="'+l.idOtrosMantenimiento+'" idContador="'+l.idOtrosMantenimiento+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros__mantenimiento"+l.idOtrosMantenimiento).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__mantenimiento');

									}); 				

							}

						}else{

							$(".tabla__mantenimiento__otros__principales").hide();

						}

						if(indicadorInformacion2!=null && indicadorInformacion2!=""){

							for (l of indicadorInformacion2) {
								
								$(".factureros__mantenimiento").append('<tr class="fila__corresponsal fila__fac__'+l.idFacturaMantenimiento+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/facturasMantenimiento/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.numeroFactura+'</td><td>'+l.fechaFactura+'</td><td>'+l.ruc+'</td><td>'+l.autorizacion+'</td><td>'+l.monto+'</td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros'+l.idFacturaMantenimiento+'" name="eliminarInfor__factureros'+l.idFacturaMantenimiento+'" idPrincipal="'+l.idFacturaMantenimiento+'" idContador="'+l.idFacturaMantenimiento+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');


									$("#eliminarInfor__factureros"+l.idFacturaMantenimiento).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__facturas__administrativos');

									}); 

							}

						}else{

							$(".tabla__mantenimiento__principal").hide();
							
						}

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis'+z.idMantenimiento+' fila__corresponsal"><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.detallarTipoIn+'</td><td><input type="text" id="totalProgramado'+z.idMantenimiento+'" name="totalProgramado'+z.idMantenimiento+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idMantenimiento+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idMantenimiento+'"><input type="text" id="totalEjecutado'+z.idMantenimiento+'" name="totalEjecutado'+z.idMantenimiento+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idMantenimiento+'" readonly=""/><div class="rotulo'+z.idMantenimiento+'" style="text-align:center; widht:100%;"></div></td><td>'+z.observaciones+'</td><td>'+z.registra_Contratacion+'</td><td>'+z.justificacion+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor'+z.idMantenimiento+'" name="eliminarInfor'+z.idMantenimiento+'" idPrincipal="'+z.idMantenimiento+'" idContador="'+z.idMantenimiento+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');


							$(".cuerpo__mantenimiento__seguimientos__2").append('<tr><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.detallarTipoIn+'</td><td>'+z.provincias+'</td><td>'+z.direccionCompleta+'</td><td>'+z.estado+'</td><td>'+z.tipoMantenimiento+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td><td>'+z.observaciones+'</td></tr>');

							if (z.factura!='no' && z.factura!=undefined && z.factura!=null) {

								$(".documento__factura"+z.idMantenimiento).append('<a href="documentos/seguimiento/facturas__administrativo/'+z.factura+'" target="_blank" class="text-center">'+z.factura+'</a>');

							}else{
								$(".documento__factura"+z.idMantenimiento).append('N/A');
							}

							
							if (z.otrosHabilitantes!='no' && z.otrosHabilitantes!=undefined && z.otrosHabilitantes!=null) {
								
								$(".documento__Otros"+z.idMantenimiento).append('<a href="documentos/seguimiento/otrosHabilitantes__administrativo/'+z.otrosHabilitantes+'" target="_blank" class="text-center">'+z.otrosHabilitantes+'</a>');
								
							}else{
								$(".documento__Otros"+z.idMantenimiento).append('N/A');
							}



							funcion__cambio__de__numero($("#totalEjecutado"+z.idMantenimiento));

							funcion__solo__numero($(".solo__numeros"));

							funcion_porcentajes__colores($("#totalEjecutado"+z.idMantenimiento),$("#totalProgramado"+z.idMantenimiento).val(),$(".celdas"+z.idMantenimiento),$(".rotulo"+z.idMantenimiento),4888888888889);

							funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idMantenimiento),$("#totalProgramado"+z.idMantenimiento).val(),$(".celdas"+z.idMantenimiento),$(".rotulo"+z.idMantenimiento));


							$("#editarInfor"+z.idMantenimiento).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');

								$(".fila__seguis"+idContador).remove();
								
								funcion__editar__general($("#editarInfor"+idContador),$(".obligatorios"+idContador),"editar__indicadores",[idPrincipal,$("#totalEjecutado"+idContador).val(),idContador,$("#organismoIdPrin").val()],$("#documentoFactura"+idContador),$("#documentoOtros"+idContador));

							}); 



							$("#eliminarInfor"+z.idMantenimiento).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');

								$(".fila__seguis"+idContador).remove();
								
								funcion__eliminar__general(idContador,'eliminar__poa__mantenenimientos__nuevo');

							}); 


						}

					}

					if (parametro5=="competencia__implementacion__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2'];
						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__competencia__implementaciones__2").html(' ');

						if (indicadorInformacion3!=null && indicadorInformacion3!="") {

							for (l of indicadorInformacion3) {

								$(".otros__implementacion").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosInstalaciones+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otrosInstalaciones/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosInstalaciones+'" name="eliminarInfor__otros'+l.idOtrosInstalaciones+'" idPrincipal="'+l.idOtrosInstalaciones+'" idContador="'+l.idOtrosInstalaciones+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$(".eliminar__ides").click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__implementacion');

									}); 				

							}

						}else{

							$("#otros__implementaciones__ver").hide();

						}


						if (indicadorInformacion2!=null && indicadorInformacion2!="") {

							for (l of indicadorInformacion2) {
								
								$(".factureros__implementacion").append('<tr class="fila__corresponsal fila__fac__'+l.idFacturaInstalaciones+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/facturasImplementacion/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.numeroFactura+'</td><td>'+l.fechaFactura+'</td><td>'+l.ruc+'</td><td>'+l.autorizacion+'</td><td>'+l.monto+'</td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros__competencias'+l.idFacturaInstalaciones+'" name="eliminarInfor__factureros__competencias'+l.idFacturaInstalaciones+'" idPrincipal="'+l.idFacturaInstalaciones+'" idContador="'+l.idFacturaInstalaciones+'" class="eliminar__ides eliminarIdes__competencia"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

								$(".eliminarIdes__competencia").click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
										
									funcion__eliminar__general(idPrincipal,'eliminar__implementacion__seguimmientos__facturas');

								}); 


							}

						}else{

							$("#factureros__implementarciones__ver").hide();

						}



						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idImplementacion+' fila__corresponsal"><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td><input type="text" id="totalProgramado'+z.idImplementacion+'" name="totalProgramado'+z.idImplementacion+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idImplementacion+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idImplementacion+'"><input type="text" id="totalEjecutado'+z.idImplementacion+'" name="totalEjecutado'+z.idImplementacion+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idImplementacion+'" readonly=""/><div class="rotulo'+z.idImplementacion+'" style="text-align:center; widht:100%;"></div></td><td>'+z.observaciones+'</td><td>'+z.cantidadBienes+'</td><td>'+z.registra_Contratacion+'</td><td>'+z.justificacion+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__competencia'+z.idImplementacion+'" name="eliminarInfor__competencia'+z.idImplementacion+'" idPrincipal="'+z.idImplementacion+'" idContador="'+z.idImplementacion+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__competencia__implementaciones__2").append('<tr><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td><td>'+z.observaciones+'</td><td>'+z.cantidadBienes+'</td></tr>');

							funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idImplementacion),$("#totalProgramado"+z.idImplementacion).val(),$(".celdas"+z.idImplementacion),$(".rotulo"+z.idImplementacion));

							$("#eliminarInfor__competencia"+z.idImplementacion).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__implementacion__seguimiento');

							}); 


						}

					}

					if (parametro5=="capacitacion__seguimiento__tablas__ms") {

						var indicadorInformacion2=elementos['indicadorInformacion2'];
						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__capacitacion__vs__2").html(' ');


						if (indicadorInformacion3!=null && indicadorInformacion3!="") {

							for (l of indicadorInformacion3) {

								$(".otros__implementacion").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosCapacitacion+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otrosCapacitacion/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosCapacitacion+'" name="eliminarInfor__otros'+l.idOtrosCapacitacion+'" idPrincipal="'+l.idOtrosCapacitacion+'" idContador="'+l.idOtrosCapacitacion+'" class="eliminar__ides eliminas__ides__capac"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$(".eliminas__ides__capac").click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__capacitacion__ver');

									}); 				

							}

						}else{

							$("#capacitacion__otros__ver").hide();

						}

						if (indicadorInformacion2!=null && indicadorInformacion2!="") {

							for (l of indicadorInformacion2) {
								
								$(".factureros__implementacion").append('<tr class="fila__corresponsal fila__fac__'+l.idFacturaCapacitacion+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/facturasCapacitacion/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.numeroFactura+'</td><td>'+l.fechaFactura+'</td><td>'+l.ruc+'</td><td>'+l.autorizacion+'</td><td>'+l.monto+'</td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros__competencias'+l.idFacturaCapacitacion+'" name="eliminarInfor__factureros__competencias'+l.idFacturaCapacitacion+'" idPrincipal="'+l.idFacturaCapacitacion+'" idContador="'+l.idFacturaCapacitacion+'" class="eliminar__ides eliminarIdes__competencia"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

								$(".eliminarIdes__competencia").click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
										
									funcion__eliminar__general(idPrincipal,'eliminar__implementacion__seguimmientos__facturas__CAPACI');

								}); 


							}

						}else{

							$("#capacitacion__factureros__v").hide();

						}


						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idCapacitacion+' fila__corresponsal"><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td><input type="text" id="totalProgramado'+z.idCapacitacion+'" name="totalProgramado'+z.idCapacitacion+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idCapacitacion+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idCapacitacion+'"><input type="text" id="totalEjecutado'+z.idCapacitacion+'" name="totalEjecutado'+z.idCapacitacion+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idCapacitacion+'" readonly=""/><div class="rotulo'+z.idCapacitacion+'" style="text-align:center; widht:100%;"></div><td>'+z.registra_Contratacion+'</td><td>'+z.justificacion+'</td></td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__competencia'+z.idCapacitacion+'" name="eliminarInfor__competencia'+z.idCapacitacion+'" idPrincipal="'+z.idCapacitacion+'" idContador="'+z.idCapacitacion+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__capacitacion__vs__2").append('<tr><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td></tr>');

							funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idCapacitacion),$("#totalProgramado"+z.idCapacitacion).val(),$(".celdas"+z.idCapacitacion),$(".rotulo"+z.idCapacitacion));

							$("#eliminarInfor__competencia"+z.idCapacitacion).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__capacitacion__seguimiento__2');

							}); 


						}

					}

					if (parametro5=="recreativos__seguimiento__tablas") {

						var indicadorInformacion2=elementos['indicadorInformacion2'];
						var indicadorInformacion3=elementos['indicadorInformacion3'];

						for (l of indicadorInformacion3) {

							$(".otros__recreativos").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosRecreativo+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otrosRecreativo/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosRecreativo+'" name="eliminarInfor__otros'+l.idOtrosRecreativo+'" idPrincipal="'+l.idOtrosRecreativo+'" idContador="'+l.idOtrosRecreativo+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
							

								$("#eliminarInfor__otros"+l.idOtrosRecreativo).click(function(e) {

									let idContador=$(this).attr('idContador');
									let idPrincipal=$(this).attr('idPrincipal');
									
									funcion__eliminar__general(idPrincipal,'eliminar__otros__recreativo');

								}); 				

						}

						for (l of indicadorInformacion2) {
							
							$(".factureros__recreativos").append('<tr class="fila__corresponsal fila__fac__'+l.idFacturaRecreativo+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/facturasRecreativo/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.numeroFactura+'</td><td>'+l.fechaFactura+'</td><td>'+l.ruc+'</td><td>'+l.autorizacion+'</td><td>'+l.monto+'</td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__factureros__competencias'+l.idFacturaRecreativo+'" name="eliminarInfor__factureros__competencias'+l.idFacturaRecreativo+'" idPrincipal="'+l.idFacturaRecreativo+'" idContador="'+l.idFacturaRecreativo+'" class="eliminar__ides eliminarIdes__recreativo"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".eliminarIdes__recreativo").click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
									
								funcion__eliminar__general(idPrincipal,'eliminar__implementacion__seguimmientos__facturas__RECREATIVOS');

							}); 


						}

						$(".cuerpo__recreativo__segumientos__2").html(' ');


						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idRecreativos+' fila__corresponsal"><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td><input type="text" id="totalProgramado'+z.idRecreativos+'" name="totalProgramado'+z.idRecreativos+'" value="'+z.mensualProgramado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idRecreativos+'" style="border:none;" disabled="disabled" /></td><td class="celdas'+z.idRecreativos+'"><input type="text" id="totalEjecutado'+z.idRecreativos+'" name="totalEjecutado'+z.idRecreativos+'" value="'+z.mensualEjecutado+'" class="solo__numeros ancho__total__input text-center obligatorios'+z.idRecreativos+'" readonly=""/><div class="rotulo'+z.idRecreativos+'" style="text-align:center; widht:100%;"></div></td><td>'+z.registra_Contratacion+'</td><td>'+z.justificacion+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__competencia'+z.idRecreativos+'" name="eliminarInfor__competencia'+z.idRecreativos+'" idPrincipal="'+z.idRecreativos+'" idContador="'+z.idRecreativos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__recreativo__segumientos__2").append('<tr><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td></tr>');

							funcion_porcentajes__colores__auto__ejecutables($("#totalEjecutado"+z.idRecreativos),$("#totalProgramado"+z.idRecreativos).val(),$(".celdas"+z.idRecreativos),$(".rotulo"+z.idRecreativos));

							$("#eliminarInfor__competencia"+z.idRecreativos).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__recreacion__seguimiento__2');

							}); 


						}

					}



					if (parametro5=="recreativos__formativo__seguimiento") {
						$(".cuerpo__formativos__2").html(' ');

						var indicadorInformacion3=elementos['indicadorInformacion3'];

						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!="") {


							for (l of indicadorInformacion3) {

								$(".formativo__otros__tecnicos__cuerpo").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosCompetenciasTecnicas+'"><td><a href="documentos/seguimiento/otrosCompentencia_formativo/'+l.documento+'" target="_blank">'+l.documento+'</a></td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosCompetenciasTecnicas+'" name="eliminarInfor__otros'+l.idOtrosCompetenciasTecnicas+'" idPrincipal="'+l.idOtrosCompetenciasTecnicas+'" idContador="'+l.idOtrosCompetenciasTecnicas+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosCompetenciasTecnicas).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__formativo__ver');

									}); 				

							}

						}else{

							$(".formativo__otros__tecnicos").hide();

						}

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idCompetenciaFormativo+' fila__corresponsal"><td>'+z.nombreEvento+'</td><td>'+z.oro+'</td><td>'+z.plata+'</td><td>'+z.bronce+'</td><td>'+z.total+'</td><td>'+z.cuarOc+'</td><td>'+z.analisis+'</td><td>'+z.beneficiariosMujeres+'</td><td>'+z.beneficiariosHombres+'</td><td>'+z.totalT+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td><td>'+z.observacionesTecnicas+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__formativo'+z.idCompetenciaFormativo+'" name="eliminarInfor__formativo'+z.idCompetenciaFormativo+'" idPrincipal="'+z.idCompetenciaFormativo+'" idContador="'+z.idCompetenciaFormativo+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__formativos__2").append('<tr><td>'+z.nombreEvento+'</td><td>'+z.oro+'</td><td>'+z.plata+'</td><td>'+z.bronce+'</td><td>'+z.total+'</td><td>'+z.cuarOc+'</td><td>'+z.analisis+'</td><td>'+z.beneficiariosMujeres+'</td><td>'+z.beneficiariosHombres+'</td><td>'+z.totalT+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td><td>'+z.observacionesTecnicas+'</td></tr>');

							$("#eliminarInfor__formativo"+z.idCompetenciaFormativo).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__formativos__seguimiento');

							}); 


						}

					}


					if (parametro5=="recreativos__altos__seguimiento") {


						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__altos__2").html(' ');


						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!="") {


							for (l of indicadorInformacion3) {

								$(".alto__otros__tecnicos__cuerpo").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosCompetenciasAltos+'"><td><a href="documentos/seguimiento/otrosCompentencia_alto/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosCompetenciasAltos+'" name="eliminarInfor__otros'+l.idOtrosCompetenciasAltos+'" idPrincipal="'+l.idOtrosCompetenciasAltos+'" idContador="'+l.idOtrosCompetenciasAltos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosCompetenciasAltos).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__faltosf__ver');

									}); 				

							}

						}else{

							$(".alto__otros__tecnicos").hide();

						}

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idCompetenciaAltos+' fila__corresponsal"><td>'+z.nombreEvento+'</td><td>'+z.oro+'</td><td>'+z.plata+'</td><td>'+z.bronce+'</td><td>'+z.total+'</td><td>'+z.cuarOc+'</td><td>'+z.analisis+'</td><td>'+z.beneficiariosMujeres+'</td><td>'+z.beneficiariosHombres+'</td><td>'+z.totalT+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__alto'+z.idCompetenciaAltos+'" name="eliminarInfor__alto'+z.idCompetenciaAltos+'" idPrincipal="'+z.idCompetenciaAltos+'" idContador="'+z.idCompetenciaAltos+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__altos__2").append('<tr class="fila__seguis__administrativos'+z.idCompetenciaAltos+' fila__corresponsal"><td>'+z.nombreEvento+'</td><td>'+z.oro+'</td><td>'+z.plata+'</td><td>'+z.bronce+'</td><td>'+z.total+'</td><td>'+z.cuarOc+'</td><td>'+z.analisis+'</td><td>'+z.beneficiariosMujeres+'</td><td>'+z.beneficiariosHombres+'</td><td>'+z.totalT+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td></tr>');

							$("#eliminarInfor__alto"+z.idCompetenciaAltos).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');

								$(".fila__seguis__administrativos"+idContador).remove();
								
								funcion__eliminar__general(idPrincipal,'eliminar__altos__seguimiento');

							}); 


						}

					}



					if (parametro5=="mantenimiento__tecnicos__seguimiento__tablas") {

						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__mantenimiento__tecnicos__2").html(' ');

						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!="") {


							for (l of indicadorInformacion3) {

								$(".otros__mantenimiento__tecnicos").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosMantenimientoTecnico+'"><td><a href="documentos/seguimiento/otrosMantenimiento__tecnicos/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosMantenimientoTecnico+'" name="eliminarInfor__otros'+l.idOtrosMantenimientoTecnico+'" idPrincipal="'+l.idOtrosMantenimientoTecnico+'" idContador="'+l.idOtrosMantenimientoTecnico+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosMantenimientoTecnico).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__mantenimiento__tecnicos__ver');

									}); 				

							}

						}else{

							$(".mantenimiento__items__evolutivos__tecnicos").hide();

						}


						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idMantenimientoTec+' fila__corresponsal"><td>'+z.detallarTipoIn+'</td><td>'+z.planificadoInicial+'</td><td>'+z.ejecutadoInicial+'</td><td>'+z.planificadoFinal+'</td><td>'+z.ejectuadoFinal+'</td><td>'+z.porcentaje+'</td><td>'+z.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__mantenimiento__tecnicos'+z.idMantenimientoTec+'" name="eliminarInfor__mantenimiento__tecnicos'+z.idMantenimientoTec+'" idPrincipal="'+z.idMantenimientoTec+'" idContador="'+z.idMantenimientoTec+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__mantenimiento__tecnicos__2").append('<tr><td>'+z.detallarTipoIn+'</td><td>'+z.provincias+'</td><td>'+z.direccionCompleta+'</td><td>'+z.estado+'</td><td>'+z.tipoMantenimiento+'</td><td>'+z.mensualProgramado+'</td><td>'+z.mensualEjecutado+'</td><td>'+z.observaciones+'</td><td>'+z.planificadoInicial+'</td><td>'+z.ejecutadoInicial+'</td><td>'+z.planificadoFinal+'</td><td>'+z.ejectuadoFinal+'</td><td>'+z.porcentaje+'</td><td>'+z.trimestre+'</td></tr>');

							$("#eliminarInfor__mantenimiento__tecnicos"+z.idMantenimientoTec).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__mantenimientos__tecnicos');

							}); 


						}

					}



					if (parametro5=="capacitacion__seguimiento__tablas") {


						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__capacitacion__2").html(' ');


						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!="") {


							for (l of indicadorInformacion3) {

								$(".otros__capacitacion__tecnicos").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosCapacitacionTecnico+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.idOtrosCapacitacionTecnico+'</td><td><a href="documentos/seguimiento/otrosCpacitacion_tecnico/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosCapacitacionTecnico+'" name="eliminarInfor__otros'+l.idOtrosCapacitacionTecnico+'" idPrincipal="'+l.idOtrosCapacitacionTecnico+'" idContador="'+l.idOtrosCapacitacionTecnico+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosCapacitacionTecnico).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');

										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__tecnico__capacitacion__ver');

									}); 				

							}

						}else{

							$(".tabla__capacitacion__tecnicos").hide();

						}							

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idCapacitacionTec+' fila__corresponsal"><td>'+z.nombreEvento+'</td><td>'+z.planificadoInicial+'</td><td>'+z.ejecutadoInicial+'</td><td>'+z.planificadoFinal+'</td><td>'+z.ejectuadoFinal+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__alto'+z.idCapacitacionTec+'" name="eliminarInfor__alto'+z.idCapacitacionTec+'" idPrincipal="'+z.idCapacitacionTec+'" idContador="'+z.idCapacitacionTec+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__capacitacion__2").append('<tr class="fila__seguis__administrativos'+z.idCapacitacionTec+' fila__corresponsal"><td>'+z.nombreEvento+'</td><td>'+z.planificadoInicial+'</td><td>'+z.ejecutadoInicial+'</td><td>'+z.planificadoFinal+'</td><td>'+z.ejectuadoFinal+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td></tr>');

							$("#eliminarInfor__alto"+z.idCapacitacionTec).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__capacitacion__seguimiento');

							}); 


						}

					}


					if (parametro5=="recreacion__seguimiento__tablas") {


						var indicadorInformacion3=elementos['indicadorInformacion3'];

						$(".cuerpo__recreacion__2").html(' ');

						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!="") {


							for (l of indicadorInformacion3) {

								$(".recreativo__otros__tecnicos__cuerpo").append('<tr class="fila__corresponsal fila__otros__administrativos__'+l.idOtrosRT+'"><td>'+l.itemPreesupuestario+'</td><td>'+l.nombreItem+'</td><td><a href="documentos/seguimiento/otros__recreativos__tecnicos/'+l.documento+'" target="_blank">'+l.documento+'</a></td><td>'+l.mes+'</td><td>'+l.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__otros'+l.idOtrosRT+'" name="eliminarInfor__otros'+l.idOtrosRT+'" idPrincipal="'+l.idOtrosRT+'" idContador="'+l.idOtrosRT+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');			
								

									$("#eliminarInfor__otros"+l.idOtrosRT).click(function(e) {

										let idContador=$(this).attr('idContador');
										let idPrincipal=$(this).attr('idPrincipal');
										
										funcion__eliminar__general(idPrincipal,'eliminar__otros__tecnico__recreativos__tecnicos');

									}); 				

							}

						}else{

							$(".recreativo__otros__tecnicos__si").hide();

						}

						for (z of indicadorInformacion) {

							$(parametro2).append('<tr class="fila__seguis__administrativos'+z.idCompetenciaSeguimiento+' fila__corresponsal"><td>'+z.nombreEvento+'</td><td>'+z.fechaInicioP+'</td><td>'+z.fechaInicioEjecutado+'</td><td>'+z.fechaFinP+'</td><td>'+z.fechaFinEjecutado+'</td><td>'+z.beneficiariosHombres+'</td><td>'+z.beneficiariosMujeres+'</td><td>'+z.totalT+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td><td><nav class="btn-pluss-wrapper"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="eliminarInfor__alto'+z.idCompetenciaSeguimiento+'" name="eliminarInfor__alto'+z.idCompetenciaSeguimiento+'" idPrincipal="'+z.idCompetenciaSeguimiento+'" idContador="'+z.idCompetenciaSeguimiento+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td></tr>');

							$(".cuerpo__recreacion__2").append('<tr><td>'+z.nombreEvento+'</td><td>'+z.fechaInicioP+'</td><td>'+z.fechaInicioEjecutado+'</td><td>'+z.fechaFinP+'</td><td>'+z.fechaFinEjecutado+'</td><td>'+z.beneficiariosHombres+'</td><td>'+z.beneficiariosMujeres+'</td><td>'+z.totalT+'</td><td>'+z.tipoOrganizacion+'</td><td>'+z.trimestre+'</td></tr>');

							$("#eliminarInfor__alto"+z.idCompetenciaSeguimiento).click(function(e) {

								let idContador=$(this).attr('idContador');
								let idPrincipal=$(this).attr('idPrincipal');
								
								funcion__eliminar__general(idPrincipal,'eliminar__recreacion__seguimiento');

							}); 


						}

					}



				});		

			},
			error:function(){

			}
				
		});		

	});			

}	



