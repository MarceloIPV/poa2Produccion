/*==========================================
=            Selects superiores            =
==========================================*/

var superioresSelectsContratacionPublica=function(parametro1){
	

	let idUsuarioC=$("#idUsuarioC").val();

	indicador=57;
	

	$.ajax({

	  data: {indicador:indicador,idUsuarioC:idUsuarioC},
      dataType: 'html',
      type:'POST',
	  url:'modelosBd/validaciones/selector.modelo.php'

	}).done(function(lista_tipo__organismos){

	  $(parametro1).html(lista_tipo__organismos);


	}).fail(function(){

	  

	});

}

/*=====  End of Selects superiores  ======*/


	var agregarDatatablets__competencia__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
	$(parametro1).click(function (e){

		
  
		$(".contenedor__sueldos__salarios").html(" ");
  
		var paqueteDeDatos = new FormData();
  
		paqueteDeDatos.append('tipo','competencias__competencias__implementacion__tablas__2');
  
		paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
		paqueteDeDatos.append("anio2",parametro5);
		paqueteDeDatos.append("trimestres",$("#trimestreN").val());
  
		$.ajax({
  
			type:"POST",
			url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){
  
			$.getScript("layout/scripts/js/validacionBasica.js",function(){
  
				let elementos=JSON.parse(response);
  
				let indicadorInformacion2=elementos['indicadorInformacion2'];
				let indicadorInformacion3=elementos['indicadorInformacion3'];
  
			
				datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,"Reportes y Anexos","",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);
  
				if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
					$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");
					$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasCompetencia btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
					$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");
  
					const facturasCompetencia = [];

					for(z of indicadorInformacion2){
  
						$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+z.itemPreesupuestario+'</td><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.monto+'</td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasCompetencias/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');
						
						facturasCompetencia.push($("#filesFrontend").val()+"seguimiento/facturasCompetencias/"+z.documento);
  
					}	
					
					descargarPorZipArchivos($(".btnDescargarFacturasCompetencia"),facturasCompetencia,"FacturasCompetencia"+$("#trimestreN").val())
					
  
				}
  
				if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
					$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
					$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosCompetencia btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
					$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Documento</th></tr></table>");
  
					const documentosCompetencia = [];

					for(w of indicadorInformacion3){
  
						$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.itemPreesupuestario+'</td><td>'+w.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCompetencia/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');
						
						documentosCompetencia.push($("#filesFrontend").val()+"seguimiento/otrosCompetencia/"+w.documento);
  
					}	
					
					descargarPorZipArchivos($(".btnDescargarDocumentosCompetencia"),documentosCompetencia,"DocumentosCompetencia"+$("#trimestreN").val())
					
  
				}
  
  
			});	
  
			},
			error:function(){
  
			}
					
		});	  	
  
	});
  
	}

	

	var agregarDatatablets__competencia__altos__formativos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','competencias__competencias__altos__altos__implementacion__tablas__2__formativos');

			paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",$("#trimestreN").val());

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion3=elementos['indicadorInformacion3'];


					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosCompetenciaFormativo btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Evento</th><th>Documento</th></tr></table>");

						const documentosCompetencia = [];

						for(z of indicadorInformacion3){

							$(".contenido__tablas__facturas__sueldos").append('<tr><td>'+z.nombreEvento+'</a></td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCompentencia_formativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');

							documentosCompetencia.push($("#filesFrontend").val()+"seguimiento/otrosCompentencia_formativo/"+z.documento);
  
						}	
						
						descargarPorZipArchivos($(".btnDescargarDocumentosCompetenciaFormativo"),documentosCompetencia,"DocumentosCompetencia"+$("#trimestreN").val())
					}


				}); 

				},
				error:function(){

				}
						
			});     

		});

		}

	var agregarDatatablets=function(parametro1,parametro2,parametro3,parametro4,parametro5,parametro6){
  
			$(parametro1).click(function (e){
	
				$(".contenedor__sueldos__salarios").html(" ");
	

				datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro6,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);
			});
	
	}


	var agregarDatatablets__indicadores2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);


		});

	}

	var agregarDatatablets__implementacion__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
			$(parametro1).click(function (e){

	
				$(".contenedor__sueldos__salarios").html(" ");
	
				var paqueteDeDatos = new FormData();
	
				paqueteDeDatos.append('tipo','competencia__implementacion__tablas__2');
	
				paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
				paqueteDeDatos.append("anio2",parametro5);
				paqueteDeDatos.append("trimestres",$("#trimestreN").val());
			
				$.ajax({
	
					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
					contentType: false,
					data:paqueteDeDatos,
					processData: false,
					cache: false, 
					success:function(response){
	
					$.getScript("layout/scripts/js/validacionBasica.js",function(){
	
						let elementos=JSON.parse(response);
	
						let indicadorInformacion2=elementos['indicadorInformacion2'];
						let indicadorInformacion3=elementos['indicadorInformacion3'];
	
						

						datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);
	
						if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
							$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");
							$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasImplementacion btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");
	
							const facturasImplementacion = [];
							
							for(z of indicadorInformacion2){
	
								$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.trimestre+'</td><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.monto+'</td></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasImplementacion/'+z.documento+'" target="_blank">'+z.documento+'</a></tr>');
	
								facturasImplementacion.push($("#filesFrontend").val()+"seguimiento/facturasImplementacion/"+z.documento);

							}	
							descargarPorZipArchivos($(".btnDescargarFacturasImplementacion"),facturasImplementacion,"FacturasImplementacion"+$("#trimestreN").val())

	
						}
	
						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
							$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
							$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosImplementacion btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Documento</th></tr></table>");
	
							const documentosImplementacion = [];

							for(w of indicadorInformacion3){
	
								$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.itemPreesupuestario+'</td><td>'+w.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosInstalaciones/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');

								documentosImplementacion.push($("#filesFrontend").val()+"seguimiento/otrosInstalaciones/"+w.documento);
	
							}		

							descargarPorZipArchivos($(".btnDescargarDocumentosImplementacion"),documentosImplementacion,"DocumentosImplementacion"+$("#trimestreN").val())

	
						}
	
	
					});	
	
					},
					error:function(){
	
					}
							
				});	  	
	
			});
	
	}
	
	var agregarDatatablets__competencia__altos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','competencias__competencias__altos__altos__implementacion__tablas__2');

			paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",$("#trimestreN").val());

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion3=elementos['indicadorInformacion3'];


					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {

						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosCompetenciaAltoTecnico btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");

						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Evento</th><th>Documento</th></tr></table>");

						const documentosCompetenciaAltoTecnico = [];

						for(z of indicadorInformacion3){

							$(".contenido__tablas__facturas__sueldos").append('<tr><td>'+z.nombreEvento+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCompentencia_alto/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');

							documentosCompetenciaAltoTecnico.push($("#filesFrontend").val()+"seguimiento/otrosCompentencia_alto/"+z.documento);
						}                           

						descargarPorZipArchivos($(".btnDescargarDocumentosCompetenciaAltoTecnico"),documentosCompetenciaAltoTecnico,"DocumentosCompetenciaAltoRendimientoTecnico"+$("#trimestreN").val())
					}


				}); 

				},
				error:function(){

				}
						
			});     

		});

		}

	var agregarDatatablets__sueldos__salarios2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
			$(parametro1).click(function (e){
	
				$(".contenedor__sueldos__salarios").html(" ");
	
				var paqueteDeDatos = new FormData();
	
				paqueteDeDatos.append('tipo','sueldos__seguimientos__tablas__2');
	
				paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
				paqueteDeDatos.append("anio2",parametro5);
				paqueteDeDatos.append("trimestres",$("#trimestreN").val());
	
				$.ajax({
	
					type:"POST",
					url:"modelosBd/inserta/seleccionaAcciones.md.php",
					contentType: false,
					data:paqueteDeDatos,
					processData: false,
					cache: false, 
					success:function(response){
	
					$.getScript("layout/scripts/js/validacionBasica.js",function(){
	
						let elementos=JSON.parse(response);
	
						let indicadorInformacion3=elementos['indicadorInformacion3'];
					
						datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);
	
	
						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
	
							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Planilla</th><th>Rol</th><th>Comprobante</th><th>Mes</th></tr></table>");
	
							for(z of indicadorInformacion3){
	
								$(".contenido__tablas__facturas__sueldos").append('<tr><td><a href="'+$("#filesFrontend").val()+'seguimiento/planilla/'+z.planilla+'" target="_blank">'+z.planilla+'</a></td><td><a href="'+$("#filesFrontend").val()+'seguimiento/rol/'+z.rol+'" target="_blank">'+z.rol+'</a></td><td><a href="'+$("#filesFrontend").val()+'seguimiento/comprobante/'+z.comprobante+'" target="_blank">'+z.comprobante+'</a></td><td>'+z.mes+'</td></tr>');
	
							}							
	
						}
	
	
					});	
	
					},
					error:function(){
	
					}
							
				});	  	
	
			});
	
	}
	
	
	
	var agregarDatatablets__honorarios__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','honorarios__seguimientos__tablas__2');

			paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",$("#trimestreN").val());

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasHonorarios btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Cédula</th><th>Nombre</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");

						const facturasHonorarios = [];

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.trimestre+'</td><td>'+z.mes+'</td><td>'+z.cedula+'</td><td>'+z.nombres+'</td><td>'+z.monto+'</td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasHonorarios/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');

							facturasHonorarios.push($("#filesFrontend").val()+"seguimiento/facturasHonorarios/"+z.documento);

						}		
						descargarPorZipArchivos($(".btnDescargarFacturasHonorarios"),facturasHonorarios,"FacturasHonorarios"+$("#trimestreN").val())


					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosHonorarios btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Cédula</th><th>Nombre</th><th>Documento</th></tr></table>");

						const documentosHonorarios = [];

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.cedula+'</td><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosHonorarios/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');

							documentosHonorarios.push($("#filesFrontend").val()+"seguimiento/otrosHonorarios/"+w.documento);

						}	
						
						descargarPorZipArchivos($(".btnDescargarDocumentosHonorarios"),documentosHonorarios,"DocumentosHonorarios"+$("#trimestreN").val())
						

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

	}

	var agregarDatatablets__administrativos__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
			$(parametro1).click(function (e){
	
				$(".contenedor__sueldos__salarios").html(" ");
	
				var paqueteDeDatos = new FormData();
	
				paqueteDeDatos.append('tipo','administrativo__seguimientos__tablas__2');
	
				paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
				paqueteDeDatos.append("anio2",parametro5);
				paqueteDeDatos.append("trimestres",$("#trimestreN").val());
	
				$.ajax({
	
					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
					contentType: false,
					data:paqueteDeDatos,
					processData: false,
					cache: false, 
					success:function(response){
	
					$.getScript("layout/scripts/js/validacionBasica.js",function(){
	
						let elementos=JSON.parse(response);
	
						let indicadorInformacion2=elementos['indicadorInformacion2'];
						let indicadorInformacion3=elementos['indicadorInformacion3'];

						datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);
	
						if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
							$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");

							$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasAdministrativo btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");

							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");

							const facturasAdministrativos = [];

	
							for(z of indicadorInformacion2){
	
								$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.trimestre+'</td><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.monto+'</td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturas__administrativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');
								
								facturasAdministrativos.push($("#filesFrontend").val()+"seguimiento/facturas__administrativo/"+z.documento);
							}		
							
							console.log(facturasAdministrativos)

							descargarPorZipArchivos($(".btnDescargarFacturasAdministrativo"),facturasAdministrativos,"FacturasAdministrativo"+$("#trimestreN").val())
						}


						

						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
	
							$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
							$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosAdministrativo btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Documento</th></tr></table>");

							const documentosAdministrativos = [];

							for(w of indicadorInformacion3){
	
								$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.itemPreesupuestario+'</td><td>'+w.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosHabilitantes__administrativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');
	
								documentosAdministrativos.push($("#filesFrontend").val()+"seguimiento/otrosHabilitantes__administrativo/"+w.documento);
							}							
	
							descargarPorZipArchivos($(".btnDescargarDocumentosAdministrativo"),documentosAdministrativos,"DocumentosAdministrativo"+$("#trimestreN").val())
						}
	
	
					});	
	
					},
					error:function(){
	
					}
							
				});	  	
	
			});
	
	}
	
	var agregarDatatablets__mantenimiento__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','mantenimiento__seguimientos__tablas__2');

			paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",$("#trimestreN").val());

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasMantenimiento btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");

						const facturasMantenimiento = [];
						
						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.trimestre+'</td><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombres+'</td><td>'+z.monto+'</td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasMantenimiento/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');

							facturasMantenimiento.push($("#filesFrontend").val()+"seguimiento/facturasMantenimiento/"+z.documento);
						}							

						descargarPorZipArchivos($(".btnDescargarFacturasMantenimiento"),facturasMantenimiento,"FacturasMantenimiento"+$("#trimestreN").val())
					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosMantenimiento btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Documento</th></tr></table>");

						const documentosMantenimiento = [];

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.itemPreesupuestario+'</td><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosMantenimiento/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');

							documentosMantenimiento.push($("#filesFrontend").val()+"seguimiento/otrosHabilitantes__administrativo/"+w.documento);

						}	
						
						descargarPorZipArchivos($(".btnDescargarDocumentosMantenimiento"),documentosMantenimiento,"DocumentosMantenimiento"+$("#trimestreN").val())

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

	}

	var agregarDatatablets__capacitacion__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','capacitacion__seguimiento__tablas__ms__2');

			paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",$("#trimestreN").val());

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion2=elementos['indicadorInformacion2'];
					let indicadorInformacion3=elementos['indicadorInformacion3'];


					datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);

					if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasCapacitacion btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");

						const facturasCapacitacion = [];

						for(z of indicadorInformacion2){

							$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.trimestre+'</td><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombres+'</td><td>'+z.monto+'</td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasCapacitacion/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');
							
							facturasCapacitacion.push($("#filesFrontend").val()+"seguimiento/facturasCapacitacion/"+z.documento);

						}	
						
						descargarPorZipArchivos($(".btnDescargarFacturasCapacitacion"),facturasCapacitacion,"FacturasCapacitacion"+$("#trimestreN").val())
						

					}

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosCapacitacion btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Documento</th></tr></table>");

						const documentosCapacitacion = [];

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.itemPreesupuestario+'</td><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCapacitacion/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');

							documentosCapacitacion.push($("#filesFrontend").val()+"seguimiento/otrosCapacitacion/"+w.documento);

						}
						descargarPorZipArchivos($(".btnDescargarDocumentosCapacitacion"),documentosCapacitacion,"DocumentosCapacitacion"+$("#trimestreN").val())


					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

		}

	var agregarDatatablets__recreativo__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
			$(parametro1).click(function (e){
	
				$(".contenedor__sueldos__salarios").html(" ");
	
				var paqueteDeDatos = new FormData();
	
				paqueteDeDatos.append('tipo','recreativos__seguimiento__tablas__2');
	
				paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
				paqueteDeDatos.append("anio2",parametro5);
				paqueteDeDatos.append("trimestres",$("#trimestreN").val());
	
				$.ajax({
	
					type:"POST",
					url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
					contentType: false,
					data:paqueteDeDatos,
					processData: false,
					cache: false, 
					success:function(response){
	
					$.getScript("layout/scripts/js/validacionBasica.js",function(){
	
						let elementos=JSON.parse(response);
	
						let indicadorInformacion2=elementos['indicadorInformacion2'];
						let indicadorInformacion3=elementos['indicadorInformacion3'];
	
						datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);
	
						if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
							$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Facturas</h4>");
							$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarFacturasRecreativo btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Monto</th><th>Numero de Factura</th><th>Fecha Factura</th><th>RUC</th><th>Autorización</th><th>Documento</th></tr></table>");

							const facturasRecreativo = [];
	
							for(z of indicadorInformacion2){
	
								$(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.trimestre+'</td><td>'+z.mes+'</td><td>'+z.itemPreesupuestario+'</td><td>'+z.nombreItem+'</td><td>'+z.monto+'</td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasRecreativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');
	
								facturasRecreativo.push($("#filesFrontend").val()+"seguimiento/facturasRecreativo/"+z.documento);
							}	
							
							descargarPorZipArchivos($(".btnDescargarFacturasRecreativo"),facturasRecreativo,"FacturasRecreativo"+$("#trimestreN").val())
	
						}
	
						if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
							$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
							$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosRecreativo btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
							$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Mes</th><th>Código del item</th><th>Item</th><th>Documento</th></tr></table>");

							const documentosRecreativo = [];
	
							for(w of indicadorInformacion3){
	
								$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.mes+'</td><td>'+w.itemPreesupuestario+'</td><td>'+w.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosRecreativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');
	
								documentosRecreativo.push($("#filesFrontend").val()+"seguimiento/otrosRecreativo/"+w.documento);
							}	
							
							descargarPorZipArchivos($(".btnDescargarDocumentosRecreativo"),documentosRecreativo,"DocumentosRecreativo"+$("#trimestreN").val())
	
						}
	
	
					});	
	
					},
					error:function(){
	
					}
							
				});	  	
	
			});
	
	}

	var agregarDatatablets__recreativo__tecnico__seguimientos2023=function(parametro1,parametro2,parametro3,parametro4,parametro5){
  
		$(parametro1).click(function (e){

			$(".contenedor__sueldos__salarios").html(" ");

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','recreacion__seguimiento__documentos__tecnicos');

			paqueteDeDatos.append("idOrganismo",$("#idOrganismo").val());
			paqueteDeDatos.append("anio2",parametro5);
			paqueteDeDatos.append("trimestres",$("#trimestreN").val());

			$.ajax({

				type:"POST",
				url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
				contentType: false,
				data:paqueteDeDatos,
				processData: false,
				cache: false, 
				success:function(response){

				$.getScript("layout/scripts/js/validacionBasica.js",function(){

					let elementos=JSON.parse(response);

					let indicadorInformacion3=elementos['indicadorInformacion3'];

					datatabletsSeguimientoRevisorVacio($("#"+parametro3),parametro3,parametro5,"",[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);

					if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
						$(".contenedor__sueldos__salarios").append("<h4 style='text-align:center' class='texto__evidenciales titulo__enfasis text-center'>Documentos de Respaldo</h4>");
						$(".contenedor__sueldos__salarios").append("<br><a class='btnDescargarDocumentosRecreativoTecnico btn btn-warning pointer__botones' >DESCARGAR TODO</a><br>");
						$(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios1'><tr><th>Trimestre</th><th>Evento</th><th>Documento</th></tr></table>");

						const documentosRecreativo = [];

						for(w of indicadorInformacion3){

							$(".contenido__tablas__facturas__honorarios1").append('<tr><td>'+w.trimestre+'</td><td>'+w.nombreEvento+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otros__recreativos__tecnicos/'+w.documento+'" target="_blank">'+w.documento+'</a></td></tr>');

							documentosRecreativo.push($("#filesFrontend").val()+"seguimiento/otros__recreativos__tecnicos/"+w.documento);
						}	
						
						descargarPorZipArchivos($(".btnDescargarDocumentosRecreativoTecnico"),documentosRecreativo,"DocumentosRecreativo"+$("#trimestreN").val())

					}


				});	

				},
				error:function(){

				}
						
			});	  	

		});

}
	

	var seleccionTabsRecorrido=function(boton,idOrganismo,periodo){

        $(boton).on("click",function(e){

			var activeTabContent = $(boton).attr('area');

			$('#tabChange').val(activeTabContent);

			idOrganismoVALOR=$(idOrganismo).val()

			PeriodoValor=$(periodo).val()

            $(".cuerpo__contenedor__recorridos tr").remove();

			var paqueteDeDatos = new FormData();

			paqueteDeDatos.append('tipo','enviar__infor__data__seguimientos__recorridos');
	  
			paqueteDeDatos.append("idOrganismo",idOrganismoVALOR);
	  
			paqueteDeDatos.append("periodo", PeriodoValor);
	
			paqueteDeDatos.append("area",$('#tabChange').val());

            $.ajax({
        
                type:"POST",
                url:"modelosBd/POA_SEGUIMIENTO_REVISOR/selector.md.php",
                contentType: false,
                data:paqueteDeDatos,
                processData: false,
                cache: false, 
                async:false,
                success:function(response){
        
                $.getScript("layout/scripts/js/validacionBasica.js",function(){
                        
                    var elementos=JSON.parse(response);
        
                    var envio__informaciones=elementos['envio__informaciones'];
        
                    for (w of envio__informaciones) {
        
                        $(".cuerpo__contenedor__recorridos").append('<tr><td>'+w.fecha+'</td><td>'+w.tipo+'</td><td>'+w.estructura+'</td><td>'+w.usuarioActual+'</td><td>'+w.observacionesTecnicas+'</td></tr>')
        
                    }
        
                });
        
                },
                error:function(){
        
                }
                        
            });	

        });


	}
			
	
	
  






	

	
	

	


  