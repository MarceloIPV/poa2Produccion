/*=================================
=            Funciones            =
=================================*/

function datatabletsConfiguration(tabla){

var table=$(tabla).DataTable({

	"language":{
		"sProcessing":     "Procesando...",
		"sLengthMenu":     "Mostrar _MENU_ registros",
		"sZeroRecords":    "No se encontraron resultados",
		"sEmptyTable":     "Ningún dato disponible en esta tabla",
		"sInfo":           "Mostrando registros del _START_ al _END_ de un total de _TOTAL_",
		"sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
		"sInfoFiltered":   "(filtrado de un total de _MAX_ registros)",
		"sInfoPostFix":    "",
		"sSearch":         "Buscar:",
		"sUrl":            "",
		"sInfoThousands":  ",",
		"sLoadingRecords": "No existen datos",
		"oPaginate":{
			"sFirst":    "Primero",
			"sLast":     "Último",
			"sNext":     "Siguiente",
			"sPrevious": "Anterior"
		},
		"oAria": {
			"sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
			"sSortDescending": ": Activar para ordenar la columna de manera descendente"
		}
	},
	dom: 'Bfrtip',
	buttons: [
		'excel'
	],
	"bLengthChange": false,
	"pagingType": "full_numbers",
	"Paginate": true,
	"pagingType": "full_numbers",
	"retrieve": true, 
	"paging":false, 
	"pageLength":false,
	});

	return table;

}

/*=====  End of Funciones ======*/

/*=============================================================
=            Funcion tabla parametros distinguidos            =
=============================================================*/

function obtenerTrimestres(parametro5){

	var array=new Array();

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

	array.push(valor1);	
	array.push(valor2);	
	array.push(valor3);	
	array.push(equiparable);	

	return array;

}

/*=====  End of Funcion tabla parametros distinguidos  ======*/


/*=========================================================
=            Funcion de armamento de la tablas            =
=========================================================*/

var visualizar__actividades__mantenimiento=function(informacionObtenida,table,parametro5,parametro1,parametro4){


	for(z of informacionObtenida){

		var arrayRecibido=obtenerTrimestres(parametro5);

		/*===============================
		=            Destino            =
		===============================*/

		table.row.add([
				z.itemPreesupuestario,
				z.nombreItem,
				z.nombreInfras,
				z.tipoIntervencion,
				z.detallarTipoIn,
				z.tipoMantenimiento,
				z.materialesServicios,
				'<input type="checkbox" id="checked'+z.idMantenimiento+'" name="checked'+z.idMantenimiento+'" class="checkeds__dinamicos__mantenimiento"/>'
		]).draw(false);

		checkeds__recorridos__general_mantenimiento_presupuestario($(".checkeds__dinamicos__mantenimiento"),$("#checked"+z.idMantenimiento),$("#contadorIndicador2"),$("#trimestreEvaluador").val(),z.idMantenimiento,$(parametro1),$(parametro4),[z.idMantenimiento,z.totalTotales,arrayRecibido[0],arrayRecibido[1],arrayRecibido[2],z.totalTotales,z.esigef,z.totalCompletados,z.idItem],'mantenimiento__guardar','mantenimiento__guardar__facturas','mantenimiento__guardar__otros',false,125);	
					
	}

}


/*=====  End of Funcion de armamento de la tablas  ======*/
