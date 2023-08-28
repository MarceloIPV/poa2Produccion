


var honorarios_data = function (parametro1, parametro2, parametro3) {

	$(parametro1).on('change', function () {

		var paqueteDeDatos = new FormData();

		let idSueldos = $(this).val();

		paqueteDeDatos.append("tipo", parametro3);
		paqueteDeDatos.append("idSueldos", idSueldos);

		$.ajax({

			type: "POST",
			url: "modelosBd/inserta/seleccionaAccionesDisminucion.md.php",
			contentType: false,
			data: paqueteDeDatos,
			processData: false,
			cache: false,
			success: function (response) {

				var elementos = JSON.parse(response);
				var indicadorInformacion = elementos['indicadorInformacion'];
				var dataBloqueos=elementos['dataBloqueos'];

				if (dataBloqueos!="" && dataBloqueos!=" " && dataBloqueos!=null && dataBloqueos!=undefined) {

					for (var i = 0; i < dataBloqueos.length; i++) {
						$("#actividad__modificaciones__destino__modificaciones2__seleccion option[value='"+dataBloqueos[i]+"']").hide();
					}

				}

				for (z of indicadorInformacion) {
					$("#cedula").val(z.cedula);
					$("#cargo").val(z.cargo);
					$("#tipo__cargo").val(z.tipoCargo);
					$("#honorarioMensual").val(z.honorarioMensual);
					$("#idHonorarios").val(z.idHonorarios);
					$("#enero__origen").val(parseFloat(z.enero).toFixed(2));
					$("#febrero__origen").val(parseFloat(z.febrero).toFixed(2));
					$("#marzo__origen").val(parseFloat(z.marzo).toFixed(2));
					$("#abril__origen").val(parseFloat(z.abril).toFixed(2));
					$("#mayo__origen").val(parseFloat(z.mayo).toFixed(2));
					$("#junio__origen").val(parseFloat(z.junio).toFixed(2));
					$("#julio__origen").val(parseFloat(z.julio).toFixed(2));
					$("#agosto__origen").val(parseFloat(z.agosto).toFixed(2));
					$("#septiembre__origen").val(parseFloat(z.septiembre).toFixed(2));
					$("#octubre__origen").val(parseFloat(z.octubre).toFixed(2));
					$("#noviembre__origen").val(parseFloat(z.noviembre).toFixed(2));
					$("#diciembre__origen").val(parseFloat(z.diciembre).toFixed(2));
					$("#total__origen").val(parseFloat(z.total).toFixed(2));

					$("#eneroOrigen__restando").val(parseFloat(z.enero).toFixed(2));
					$("#febreroOrigen__restando").val(parseFloat(z.febrero).toFixed(2));
					$("#marzoOrigen__restando").val(parseFloat(z.marzo).toFixed(2));
					$("#abrilOrigen__restando").val(parseFloat(z.abril).toFixed(2));
					$("#mayoOrigen__restando").val(parseFloat(z.mayo).toFixed(2));
					$("#junioOrigen__restando").val(parseFloat(z.junio).toFixed(2));
					$("#julioOrigen__restando").val(parseFloat(z.julio).toFixed(2));
					$("#agostoOrigen__restando").val(parseFloat(z.agosto).toFixed(2));
					$("#septiembreOrigen__restando").val(parseFloat(z.septiembre).toFixed(2));
					$("#octubreOrigen__restando").val(parseFloat(z.octubre).toFixed(2));
					$("#noviembreOrigen__restando").val(parseFloat(z.noviembre).toFixed(2));
					$("#diciembreOrigen__restando").val(parseFloat(z.diciembre).toFixed(2));
					
				}

				$(".oculto__tabla__destino").show();

			},
			error: function () {

			}

		});

	});

}




var honorarios_data_sueldos = function (parametro1, parametro2, parametro3) {

	$(parametro1).on('change', function () {

		var paqueteDeDatos = new FormData();

		let idSueldos = $(this).val();

		paqueteDeDatos.append("tipo", parametro3);
		paqueteDeDatos.append("idSueldos", idSueldos);

		$.ajax({

			type: "POST",
			url: "modelosBd/inserta/seleccionaAccionesDisminucion.md.php",
			contentType: false,
			data: paqueteDeDatos,
			processData: false,
			cache: false,
			success: function (response) {

				var elementos = JSON.parse(response);
				var indicadorInformacion = elementos['indicadorInformacion'];
				var dataBloqueos=elementos['dataBloqueos'];

				if (dataBloqueos!="" && dataBloqueos!=" " && dataBloqueos!=null && dataBloqueos!=undefined) {

					for (var i = 0; i < dataBloqueos.length; i++) {
						$("#actividad__modificaciones__destino__modificaciones2__seleccion option[value='"+dataBloqueos[i]+"']").hide();
					}

				}

				for (z of indicadorInformacion) {

					/*=======================================
					=            Datos generales            =
					=======================================*/

					$("#cedula").val(z.cedula);
					$("#cargo").val(z.cargo);
					$("#tipo__cargo").val(z.tipoCargo);
					$("#honorarioMensual").val(z.tiempoTrabajo);
					$("#mensualizaDecimoTercero").val(z.mensualizaTercera);
					$("#mensualizaDecimoCuarto").val(z.menusalizaCuarta);					
					
					
					/*=====  End of Datos generales  ======*/

					/*=============================================================
					=            Asignación de bonificaciones en meses            =
					=============================================================*/

					let divididosTercero=parseFloat(z.decimoTercera)/12;
					let divididosCuarto=parseFloat(z.decimoCuarta)/12;
					
					$("#enero__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#enero__origen__decimo__cuarto").val(divididosCuarto):$("#enero__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#enero__origen__decimo__tercero").val(divididosTercero):$("#enero__origen__decimo__tercero").val(0);
					$("#enero__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#enero__origen__salarios").val(z.sueldoSalario);
					
					$("#enero__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#enero__origen__decimo__cuarto__restante").val(divididosCuarto):$("#enero__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#enero__origen__decimo__tercero__restante").val(divididosTercero):$("#enero__origen__decimo__tercero__restante").val(0);
					$("#enero__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#enero__origen__salarios__restante").val(z.sueldoSalario);


					$("#febrero__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#febrero__origen__decimo__cuarto").val(divididosCuarto):$("#febrero__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#febrero__origen__decimo__tercero").val(divididosTercero):$("#febrero__origen__decimo__tercero").val(0);
					$("#febrero__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#febrero__origen__salarios").val(z.sueldoSalario);

					$("#febrero__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#febrero__origen__decimo__cuarto__restante").val(divididosCuarto):$("#febrero__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#febrero__origen__decimo__tercero__restante").val(divididosTercero):$("#febrero__origen__decimo__tercero__restante").val(0);
					$("#febrero__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#febrero__origen__salarios__restante").val(z.sueldoSalario);


					$("#marzo__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#marzo__origen__decimo__cuarto").val(divididosCuarto): z.regimen=="Costa" ? $("#marzo__origen__decimo__cuarto").val(z.decimoCuarta) : $("#marzo__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#marzo__origen__decimo__tercero").val(divididosTercero):$("#marzo__origen__decimo__tercero").val(0);
					$("#marzo__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#marzo__origen__salarios").val(z.sueldoSalario);

					$("#marzo__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#marzo__origen__decimo__cuarto__restante").val(divididosCuarto): z.regimen=="Costa" ? $("#marzo__origen__decimo__cuarto__restante").val(z.decimoCuarta) : $("#marzo__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#marzo__origen__decimo__tercero__restante").val(divididosTercero):$("#marzo__origen__decimo__tercero__restante").val(0);
					$("#marzo__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#marzo__origen__salarios__restante").val(z.sueldoSalario);


					$("#abril__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#abril__origen__decimo__cuarto").val(divididosCuarto):$("#abril__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#abril__origen__decimo__tercero").val(divididosTercero):$("#abril__origen__decimo__tercero").val(0);
					$("#abril__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#abril__origen__salarios").val(z.sueldoSalario);

					$("#abril__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#abril__origen__decimo__cuarto__restante").val(divididosCuarto):$("#abril__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#abril__origen__decimo__tercero__restante").val(divididosTercero):$("#abril__origen__decimo__tercero__restante").val(0);
					$("#abril__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#abril__origen__salarios__restante").val(z.sueldoSalario);


					$("#mayo__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#mayo__origen__decimo__cuarto").val(divididosCuarto):$("#mayo__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#mayo__origen__decimo__tercero").val(divididosTercero):$("#mayo__origen__decimo__tercero").val(0);
					$("#mayo__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#mayo__origen__salarios").val(z.sueldoSalario);

					$("#mayo__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#mayo__origen__decimo__cuarto__restante").val(divididosCuarto):$("#mayo__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#mayo__origen__decimo__tercero__restante").val(divididosTercero):$("#mayo__origen__decimo__tercero__restante").val(0);
					$("#mayo__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#mayo__origen__salarios__restante").val(z.sueldoSalario);

					$("#junio__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#junio__origen__decimo__cuarto").val(divididosCuarto):$("#junio__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#junio__origen__decimo__tercero").val(divididosTercero):$("#junio__origen__decimo__tercero").val(0);
					$("#junio__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#junio__origen__salarios").val(z.sueldoSalario);


					$("#junio__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#junio__origen__decimo__cuarto__restante").val(divididosCuarto):$("#junio__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#junio__origen__decimo__tercero__restante").val(divididosTercero):$("#junio__origen__decimo__tercero__restante").val(0);
					$("#junio__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#junio__origen__salarios__restante").val(z.sueldoSalario);

					$("#julio__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#julio__origen__decimo__cuarto").val(divididosCuarto):$("#julio__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#julio__origen__decimo__tercero").val(divididosTercero):$("#julio__origen__decimo__tercero").val(0);
					$("#julio__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#julio__origen__salarios").val(z.sueldoSalario);


					$("#julio__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#julio__origen__decimo__cuarto__restante").val(divididosCuarto):$("#julio__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#julio__origen__decimo__tercero__restante").val(divididosTercero):$("#julio__origen__decimo__tercero__restante").val(0);
					$("#julio__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#julio__origen__salarios__restante").val(z.sueldoSalario);

					$("#agosto__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#agosto__origen__decimo__cuarto").val(divididosCuarto): z.regimen=="Amazonia" || z.regimen=="Sierra"  ? $("#agosto__origen__decimo__cuarto").val(z.decimoCuarta) : $("#agosto__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#agosto__origen__decimo__tercero").val(divididosTercero):$("#agosto__origen__decimo__tercero").val(0);
					$("#agosto__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#agosto__origen__salarios").val(z.sueldoSalario);


					$("#agosto__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#agosto__origen__decimo__cuarto__restante").val(divididosCuarto): z.regimen=="Amazonia" || z.regimen=="Sierra"  ? $("#agosto__origen__decimo__cuarto__restante").val(z.decimoCuarta) : $("#agosto__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#agosto__origen__decimo__tercero__restante").val(divididosTercero):$("#agosto__origen__decimo__tercero__restante").val(0);
					$("#agosto__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#agosto__origen__salarios__restante").val(z.sueldoSalario);


					$("#septiembre__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#septiembre__origen__decimo__cuarto").val(divididosCuarto):$("#septiembre__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#septiembre__origen__decimo__tercero").val(divididosTercero):$("#septiembre__origen__decimo__tercero").val(0);
					$("#septiembre__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#septiembre__origen__salarios").val(z.sueldoSalario);


					$("#septiembre__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#septiembre__origen__decimo__cuarto__restante").val(divididosCuarto):$("#septiembre__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#septiembre__origen__decimo__tercero__restante").val(divididosTercero):$("#septiembre__origen__decimo__tercero__restante").val(0);
					$("#septiembre__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#septiembre__origen__salarios__restante").val(z.sueldoSalario);


					$("#octubre__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#octubre__origen__decimo__cuarto").val(divididosCuarto):$("#octubre__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#octubre__origen__decimo__tercero").val(divididosTercero):$("#octubre__origen__decimo__tercero").val(0);
					$("#octubre__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#octubre__origen__salarios").val(z.sueldoSalario);



					$("#octubre__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#octubre__origen__decimo__cuarto__restante").val(divididosCuarto):$("#octubre__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#octubre__origen__decimo__tercero__restante").val(divididosTercero):$("#octubre__origen__decimo__tercero__restante").val(0);
					$("#octubre__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#octubre__origen__salarios__restante").val(z.sueldoSalario);


					$("#noviembre__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#noviembre__origen__decimo__cuarto").val(divididosCuarto):$("#noviembre__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#noviembre__origen__decimo__tercero").val(divididosTercero):$("#noviembre__origen__decimo__tercero").val(0);
					$("#noviembre__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#noviembre__origen__salarios").val(z.sueldoSalario);


					$("#noviembre__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#noviembre__origen__decimo__cuarto__restante").val(divididosCuarto):$("#noviembre__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#noviembre__origen__decimo__tercero__restante").val(divididosTercero):$("#noviembre__origen__decimo__tercero__restante").val(0);
					$("#noviembre__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#noviembre__origen__salarios__restante").val(z.sueldoSalario);

					$("#diciembre__origen__aporte__patronal").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#diciembre__origen__decimo__cuarto").val(divididosCuarto):$("#diciembre__origen__decimo__cuarto").val(0);
					z.mensualizaTercera=='si' ? $("#diciembre__origen__decimo__tercero").val(divididosTercero):$("#diciembre__origen__decimo__tercero").val(z.decimoTercera);
					$("#diciembre__origen__fondos__de__reserva").val(z.fondosReserva);
					$("#diciembre__origen__salarios").val(z.sueldoSalario);


					$("#diciembre__origen__aporte__patronal__restante").val(z.aportePatronal);
					z.menusalizaCuarta=='si' ? $("#diciembre__origen__decimo__cuarto__restante").val(divididosCuarto):$("#diciembre__origen__decimo__cuarto__restante").val(0);
					z.mensualizaTercera=='si' ? $("#diciembre__origen__decimo__tercero__restante").val(divididosTercero):$("#diciembre__origen__decimo__tercero__restante").val(z.decimoTercera);
					$("#diciembre__origen__fondos__de__reserva__restante").val(z.fondosReserva);
					$("#diciembre__origen__salarios__restante").val(z.sueldoSalario);

					/*=====  End of Asignación de bonificaciones en meses  ======*/
					
					
					/*==============================================
					=            Asignación de recursos            =
					==============================================*/
					
					let sumatores=0;

					sumatores=parseFloat(z.sueldoSalario)+parseFloat(z.aportePatronal)+parseFloat(z.decimoTercera)+parseFloat(z.decimoCuarta)+parseFloat(z.fondosReserva);

					$("#total__origenBeneficios").val(parseFloat(sumatores).toFixed(2));

					$("#idHonorarios").val(z.idHonorarios);
					$("#enero__origen").val(parseFloat(z.enero).toFixed(2));
					$("#febrero__origen").val(parseFloat(z.febrero).toFixed(2));
					$("#marzo__origen").val(parseFloat(z.marzo).toFixed(2));
					$("#abril__origen").val(parseFloat(z.abril).toFixed(2));
					$("#mayo__origen").val(parseFloat(z.mayo).toFixed(2));
					$("#junio__origen").val(parseFloat(z.junio).toFixed(2));
					$("#julio__origen").val(parseFloat(z.julio).toFixed(2));
					$("#agosto__origen").val(parseFloat(z.agosto).toFixed(2));
					$("#septiembre__origen").val(parseFloat(z.septiembre).toFixed(2));
					$("#octubre__origen").val(parseFloat(z.octubre).toFixed(2));
					$("#noviembre__origen").val(parseFloat(z.noviembre).toFixed(2));
					$("#diciembre__origen").val(parseFloat(z.diciembre).toFixed(2));
					$("#total__origen").val(parseFloat(z.total).toFixed(2));

					
					$("#enero__origen__restante").val(parseFloat(z.enero).toFixed(2));
					$("#febrero__origen__restante").val(parseFloat(z.febrero).toFixed(2));
					$("#marzo__origen__restante").val(parseFloat(z.marzo).toFixed(2));
					$("#abril__origen__restante").val(parseFloat(z.abril).toFixed(2));
					$("#mayo__origen__restante").val(parseFloat(z.mayo).toFixed(2));
					$("#junio__origen__restante").val(parseFloat(z.junio).toFixed(2));
					$("#julio__origen__restante").val(parseFloat(z.julio).toFixed(2));
					$("#agosto__origen__restante").val(parseFloat(z.agosto).toFixed(2));
					$("#septiembre__origen__restante").val(parseFloat(z.septiembre).toFixed(2));
					$("#octubre__origen__restante").val(parseFloat(z.octubre).toFixed(2));
					$("#noviembre__origen__restante").val(parseFloat(z.noviembre).toFixed(2));
					$("#diciembre__origen__restante").val(parseFloat(z.diciembre).toFixed(2));
					

					/*=====  End of Asignación de recursos  ======*/
					
				}

				$(".oculto__tabla__destino").show();


				/*==================================================
				=            Obteniendo datas iniciales            =
				==================================================*/
				var sumarSueldosModificaciones__auto__llamados=function(clase__origen,total__fila){

					let sumadorClases=0;

					$(clase__origen).each(function(index) {
						sumadorClases=parseFloat(sumadorClases)+parseFloat($(this).val());
					});

					$(total__fila).val(parseFloat(sumadorClases).toFixed(2));

				}

				sumarSueldosModificaciones__auto__llamados($(".origen__aporte__patronal__restante__clase"),$("#total__origen__patronal"));
				sumarSueldosModificaciones__auto__llamados($(".origen__decimo__tercero__restante__clase"),$("#total__origen__decimo__tercero"));	
				sumarSueldosModificaciones__auto__llamados($(".origen__decimo__cuarto__restante__clase"),$("#total__origen__decimo__cuarto"));	
				sumarSueldosModificaciones__auto__llamados($(".origen__fondos__de__reserva__restante__clase"),$("#total__origen__fondos__de__reserva"));	
				sumarSueldosModificaciones__auto__llamados($(".origen__salarios__restante__clase"),$("#total__origen__salarios"));					
				
				
				/*=====  End of Obteniendo datas iniciales  ======*/
				

			},
			error: function () {

			}

		});



				/*==================================================
				=            Obteniendo datas iniciales            =
				==================================================*/
				
				var sumarSueldosModificaciones__auto__llamados=function(clase__origen,total__fila,selector){

					$(selector).on('change', function (e){

						let sumadorClases=0;

						$(clase__origen).each(function(index) {
							sumadorClases=parseFloat(sumadorClases)+parseFloat($(this).val());
						});

						$(total__fila).val(parseFloat(sumadorClases).toFixed(2));

					});

				}

				sumarSueldosModificaciones__auto__llamados($(".origen__aporte__patronal__restante__clase"),$("#total__origen__patronal"),$("#persona_sueldos_data"));				
				
				
				/*=====  End of Obteniendo datas iniciales  ======*/
				

	});

}


var sueldos_honorarios_data = function (parametro1, parametro2) {

	indicador = 1;

	$.ajax({

		data: { indicador: indicador, idOrganismo: parametro2 },
		dataType: 'html',
		type: 'POST',
		url: 'modelosBd/validaciones/selectorDisminucion.modelo.php'

	}).done(function (listar__lugar) {

		$(parametro1).html(listar__lugar);


	}).fail(function () { });

}



var sueldos_sueldos_data = function (parametro1, parametro2) {

	indicador = 2;

	$.ajax({

		data: { indicador: indicador, idOrganismo: parametro2 },
		dataType: 'html',
		type: 'POST',
		url: 'modelosBd/validaciones/selectorDisminucion.modelo.php'

	}).done(function (listar__lugar) {

		$(parametro1).html(listar__lugar);


	}).fail(function () { });

}
