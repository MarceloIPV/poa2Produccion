let tablaConstruccion=function(identificador,tabla){

	let paqueteDeDatos = new FormData();
	paqueteDeDatos.append("tipo",identificador);

	$.ajax({

		type:"POST",
		url:"modelosBd/inserta/seleccionaAcciones.md.php",
		contentType: false,
		data:paqueteDeDatos,
		processData: false,
		cache: false, 
		success:function(response){

		$.getScript("layout/scripts/js/modificacion/tramitesModificacionesValidaciones.js",function(){

			let elementos=JSON.parse(response);
			let informacionObtenida=elementos['informacionObtenida'];
			let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
			let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
			let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
			let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
			let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];
			let informacionObtenida__honorarios__sueldos=elementos['informacionObtenida__honorarios__sueldos'];
			let informacionObtenida__sueldos__honorarios=elementos['informacionObtenida__sueldos__honorarios'];
			let informacionObtenida__honorarios__varios=elementos['informacionObtenida__honorarios__varios'];
			let informacionObtenida__sueldos__varios=elementos['informacionObtenida__sueldos__varios'];
			let informacionObtenida__desvinculacion__varios=elementos['informacionObtenida__desvinculacion__varios'];


			var table = datatabletsConfiguration(tabla,[{target: 2,visible: false,},{target: 3,visible: false,},{target: 4,visible: false,},{target: 10,visible: false,},{target: 11,visible: false,},{target: 12,visible: false,},]);


			/*===========================================
			=            Visualizar columnas            =
			===========================================*/

			mostrarOcultarFilas($('#mostrarNuevo'),[2,3,4],table);
			mostrarOcultarFilas($('#mostrarNuevo1'),[10,11,12],table);		
					
			/*=====  End of Visualizar columnas  ======*/

			visualizar__actividades(informacionObtenida,table);

			
			visualizar__actividades(informacionObtenida__honorarios,table);
			visualizar__actividades(informacionObtenida__honorarios__items,table);
			visualizar__actividades(informacionObtenida__sueldos__salarios,table);
			visualizar__actividades(informacionObtenida__sueldos__items,table);
			visualizar__actividades(informacionObtenida__desvinculaciones,table);
			visualizar__actividades(informacionObtenida__honorarios__sueldos,table);
			visualizar__actividades(informacionObtenida__sueldos__honorarios,table);
			visualizar__actividades(informacionObtenida__honorarios__varios,table);
			visualizar__actividades(informacionObtenida__sueldos__varios,table);
			visualizar__actividades(informacionObtenida__desvinculacion__varios,table);

		});	

		},
		error:function(){

		}

	});	

}