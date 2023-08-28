var contadorAnonimoArray=new Array();


var execelGenerados=function(parametro1,parametro2,parametro3){

$(parametro1).click(function (e){

  var table = document.getElementById(parametro2); // id of table
  var tableHTML = table.outerHTML;
  var fileName = parametro3;

  var msie = window.navigator.userAgent.indexOf("MSIE ");

  // If Internet Explorer
  if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./)) {

    dummyFrame.document.open('txt/html', 'replace');
    dummyFrame.document.write(tableHTML);
    dummyFrame.document.close();
    dummyFrame.focus();
    return dummyFrame.document.execCommand('SaveAs', true, fileName);

  }else {

    var a = document.createElement('a');
    tableHTML = tableHTML.replace(/  /g, '').replace(/ /g, '%20'); // replaces spaces
    a.href = 'data:application/vnd.ms-excel,' + tableHTML;
    a.setAttribute('download', fileName);
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);

  }  

});

}

var datatablets__funcio__repor=function(tabla,identificador,parametro3){

/*==============================================
=            Establecer datatablets            =
==============================================*/

var table2 =$(tabla).DataTable({

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

  "bLengthChange": false,
  "pagingType": "full_numbers",
  "Paginate": true,
  "pagingType": "full_numbers",
  "retrieve": true, 
  "paging": true, 
  "pageLength":4,


  "ajax":{

    "method":"POST",
    "url":"modelosBd/POA_MODIFICACIONES_REVISOR/datatablets.md.php", 
    "data": { 
      "identificador": identificador
    }  

  },

  "aoColumnDefs":[

    {
      
      "aTargets":6, 
      "mRender": (function (data, type, row) {

      	var variable=" ";
		if (parametro3==1){
      		variable="ver__adiciones__generales__funcioanrios";
      	}


        return "<center><button class='"+variable+" estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#modalModificaciones__reasignaciones'>Reasignar</button><center>";

       }) 

    },

  ]

});

/*=====  End of Establecer datatablets  ======*/

funcion__recomendar__planificacion__general__ver__organismos__funcionarios("#"+identificador+" tbody",table2);


}

var funcion__recomendar__planificacion__general__ver__organismos__funcionarios=function(tbody,table){

$(tbody).on("click","button.ver__adiciones__generales__funcioanrios",function(e){

	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[3]);

		$("#idTramite").val(data[6]);
		$("#idOrganismo").val(data[7]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[6]);
		$(".idOrganismo__lineas").val(data[7]);


		$.ajax({

			type:"POST",
			url:"modelosBd/POA_MODIFICACIONES/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){
	        
				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];


				var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);

				informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val(),true);
				informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val(),true);
				informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val(),true);
				informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val(),true);
				informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val(),true);
				informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val(),true);


			});

			},
			error:function(){

			}
					
		});	

	}	

	contadorAnonimoArray.push(1);	


});

}



var datatablets__organismo=function(tabla,identificador,parametro3){

/*==============================================
=            Establecer datatablets            =
==============================================*/

var table2 =$(tabla).DataTable({

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

  "bLengthChange": false,
  "pagingType": "full_numbers",
  "Paginate": true,
  "pagingType": "full_numbers",
  "retrieve": true, 
  "paging": true, 
  "pageLength":4,


  "ajax":{

    "method":"POST",
    "url":"modelosBd/POA_MODIFICACIONES/datablets.md.php", 
    "data": { 
      "identificador": identificador
    }  

  },

  "aoColumnDefs":[

    {
      
      "aTargets":6, 
      "mRender": (function (data, type, row) {

      	var variable=" ";
		if (parametro3==1){
      		variable="ver__adiciones__generales";
      	}

        return "<center><button class='"+variable+" estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#modalModificaciones__reasignaciones'>Reasignar</button><center>";

       }) 

    },

  ]

});

/*=====  End of Establecer datatablets  ======*/

funcion__recomendar__planificacion__general__ver__organismos("#"+identificador+" tbody",table2);

}


var funcion__recomendar__planificacion__general__ver__organismos=function(tbody,table){

$(tbody).on("click","button.ver__adiciones__generales",function(e){

	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[3]);

		$("#idTramite").val(data[6]);
		$("#idOrganismo").val(data[7]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[6]);
		$(".idOrganismo__lineas").val(data[7]);


		$.ajax({

			type:"POST",
			url:"modelosBd/POA_MODIFICACIONES/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){
	        
				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];


				var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);

				informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val(),true);
				informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val(),true);
				informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val(),true);
				informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val(),true);
				informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val(),true);
				informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val(),true);


			});

			},
			error:function(){

			}
					
		});	

	}	

	contadorAnonimoArray.push(1);	

});

}



var datatablets=function(tabla,identificador,parametro3){

/*==============================================
=            Establecer datatablets            =
==============================================*/

var table =$(tabla).DataTable({

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

  "bLengthChange": false,
  "pagingType": "full_numbers",
  "Paginate": true,
  "pagingType": "full_numbers",
  "retrieve": true, 
  "paging": true, 
  "pageLength":4,


  "ajax":{

    "method":"POST",
    "url":"modelosBd/POA_MODIFICACIONES_REVISOR/datatablets.md.php", 
    "data": { 
      "identificador": identificador
    }  

  },

  "aoColumnDefs":[

    {
      
      "aTargets":4, 
      "mRender": (function (data, type, row) {

      	var variable=" ";

      	if (parametro3==1) {
      		variable="reasignar__modificaciones";
      	}else if (parametro3==2){
      		variable="recomendar__modificaciones";
      	}else if (parametro3==3){
      		variable="recomendar__modificaciones__planificacion";
      	}else if (parametro3==4){
      		variable="recomendar__modificaciones__planificacion__recomendacion";
      	}else if (parametro3==5){
      		variable="reasignacionModificaciones__recomendaciones__planificacion__recomendacion__quipux";
      	}

        return "<center><button class='"+variable+" estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#modalModificaciones__reasignaciones'>Reasignar</button><center>";

       }) 

    },

  ]

});

/*=====  End of Establecer datatablets  ======*/

funcion__asignar("#"+identificador+" tbody",table);
funcion__recomendar("#"+identificador+" tbody",table);
funcion__recomendar__planificacion("#"+identificador+" tbody",table);
funcion__recomendar__planificacion__recomendar("#"+identificador+" tbody",table);
funcion__recomendar__planificacion__recomendar__quipux("#"+identificador+" tbody",table);

}


var funcion__recomendar__planificacion__recomendar__quipux=function(tbody,table){

$(tbody).on("click","button.reasignacionModificaciones__recomendaciones__planificacion__recomendacion__quipux",function(e){

	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[1]);

		$("#idTramite").val(data[4]);
		$("#idOrganismo").val(data[5]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[4]);
		$(".idOrganismo__lineas").val(data[5]);


		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){
	        
				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];


				var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);

				informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val());
				informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val());
				informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val());
				informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val());
				informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val());
				informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val());

				if ($("#idRolAd").val()==4) {

					selector__recomendar__analista__planificacion__modificaciones__coordinadores($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==2) {

					selector__recomendar__analista__planificacion__modificaciones__diectores__quipux($(".selector__modificacion__lineas"));

				}

				let informacionObtenida__documentos=elementos['informacionObtenida__documentos'];

				for(x of informacionObtenida__documentos){

					if(x.documentoPlanificacion!="" && x.documentoPlanificacion!=" " && x.documentoPlanificacion!=undefined && x.documentoPlanificacion!=null){

						$("#documentoPlanificacion").attr('href','documentos/modificacion/informe/planificacion/'+x.documentoPlanificacion);

					}

				}	

			});

			},
			error:function(){

			}
					
		});	

	}	

	contadorAnonimoArray.push(1);

});

}


var funcion__recomendar__planificacion__recomendar=function(tbody,table){

$(tbody).on("click","button.recomendar__modificaciones__planificacion__recomendacion",function(e){


	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[1]);

		$("#idTramite").val(data[4]);
		$("#idOrganismo").val(data[5]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[4]);
		$(".idOrganismo__lineas").val(data[5]);


		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){
	        
				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];

        let informacionObtenida__honorarios__varios=elementos['informacionObtenida__honorarios__varios'];
        let informacionObtenida__sueldos__varios=elementos['informacionObtenida__sueldos__varios'];
        let informacionObtenida__desvinculacion__varios=elementos['informacionObtenida__desvinculacion__varios'];
        let informacionObtenida__honorarios__sueldos=elementos['informacionObtenida__honorarios__sueldos'];
        let informacionObtenida__sueldos__honorarios=elementos['informacionObtenida__sueldos__honorarios'];


				var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);

				informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val());
				informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val());
				informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val());
				informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val());
				informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val());
				informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val());

        informacionObtenida__honorarios__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__varios,table,$("#idRolAd").val());

        informacionObtenida__sueldos__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__varios,table,$("#idRolAd").val());

        informacionObtenida__desvinculacion__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculacion__varios,table,$("#idRolAd").val());

        informacionObtenida__honorarios__sueldos=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__sueldos,table,$("#idRolAd").val());

        informacionObtenida__sueldos__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__honorarios,table,$("#idRolAd").val());
		

				if ($("#idRolAd").val()==4) {

					selector__recomendar__analista__planificacion__modificaciones__coordinadores($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==2) {

					selector__recomendar__analista__planificacion__modificaciones__diectores($(".selector__modificacion__lineas"));

				}

				let informacionObtenida__documentos=elementos['informacionObtenida__documentos'];

				for(x of informacionObtenida__documentos){

					if(x.documentoPlanificacion!="" && x.documentoPlanificacion!=" " && x.documentoPlanificacion!=undefined && x.documentoPlanificacion!=null){

						$("#documentoPlanificacion").attr('href','documentos/modificacion/informe/planificacion/'+x.documentoPlanificacion);

					}

				}	

			});

			},
			error:function(){

			}
					
		});		

	}

	contadorAnonimoArray.push(1);

});

}

var funcion__recomendar__planificacion=function(tbody,table){

$(tbody).on("click","button.recomendar__modificaciones__planificacion",function(e){

	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[1]);

		$("#idTramite").val(data[4]);
		$("#idOrganismo").val(data[5]);
		$(".idOrganismo__lineas").val(data[5]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[4]);
		$("#tipoDocumento__D").val("planificacion");

		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){

				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];

        let informacionObtenida__honorarios__varios=elementos['informacionObtenida__honorarios__varios'];
        let informacionObtenida__sueldos__varios=elementos['informacionObtenida__sueldos__varios'];
        let informacionObtenida__desvinculacion__varios=elementos['informacionObtenida__desvinculacion__varios'];
        let informacionObtenida__honorarios__sueldos=elementos['informacionObtenida__honorarios__sueldos'];
        let informacionObtenida__sueldos__honorarios=elementos['informacionObtenida__sueldos__honorarios'];



				var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);

				informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val());
				informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val());
				informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val());
				informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val());
				informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val());
				informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val());


        informacionObtenida__honorarios__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__varios,table,$("#idRolAd").val());

        informacionObtenida__sueldos__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__varios,table,$("#idRolAd").val());

        informacionObtenida__desvinculacion__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculacion__varios,table,$("#idRolAd").val());

        informacionObtenida__honorarios__sueldos=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__sueldos,table,$("#idRolAd").val());

        informacionObtenida__sueldos__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__honorarios,table,$("#idRolAd").val());


				if ($("#idRolAd").val()==4) {

					selector__recomendar__cor__planificacion__modificaciones($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==2) {

					selector__recomendar__dir__planificacion__modificaciones($(".selector__modificacion__lineas"));

				}else{

					$(".modal__modificaciones__revisor__enviar__planifiacion").remove();
					$(".modal__modificaciones__analistas__enviar__planifiacion").show();

					selector__recomendar__analista__planificacion__modificaciones($(".selector__modificacion__lineas"));

				}

				if ($("#idRolAd").val()==3) {

					$(".ocultos__generar__pdf__planifiacion__modificaciones").show();

					let listado__actividades__totales=elementos['listado__actividades__totales'];

					let actividadSuma__m1=elementos['actividadSuma__m1'];
					let actividadSuma__m2=elementos['actividadSuma__m2'];
					let actividadSuma__m3=elementos['actividadSuma__m3'];
					let actividadSuma__m4=elementos['actividadSuma__m4'];
					let actividadSuma__m5=elementos['actividadSuma__m5'];
					let actividadSuma__m6=elementos['actividadSuma__m6'];
					let actividadSuma__m7=elementos['actividadSuma__m7'];

					let contador=0;

					for(x of listado__actividades__totales){

						if (contador==0 && actividadSuma__m1!=null && actividadSuma__m1!=undefined && actividadSuma__m1!="" && actividadSuma__m1!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m1+"</td><td><select id='select__1' name='select__1' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__1' name='texttarea__1' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						if (contador==1 && actividadSuma__m2!=null && actividadSuma__m2!=undefined && actividadSuma__m2!="" && actividadSuma__m2!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m2+"</td><td><select id='select__2' name='select__2' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__2' name='texttarea__2' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						if (contador==2 && actividadSuma__m3!=null && actividadSuma__m3!=undefined && actividadSuma__m3!="" && actividadSuma__m3!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m3+"</td><td><select id='select__3' name='select__3' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__3' name='texttarea__3' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						if (contador==3 && actividadSuma__m4!=null && actividadSuma__m4!=undefined && actividadSuma__m4!="" && actividadSuma__m4!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m4+"</td><td><select id='select__4' name='select__4' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__4' name='texttarea__4' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						if (contador==4 && actividadSuma__m5!=null && actividadSuma__m5!=undefined && actividadSuma__m5!="" && actividadSuma__m5!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m5+"</td><td><select id='select__5' name='select__5' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__5' name='texttarea__5' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						if (contador==5 && actividadSuma__m6!=null && actividadSuma__m6!=undefined && actividadSuma__m6!="" && actividadSuma__m6!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m6+"</td><td><select id='select__6' name='select__6' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__6' name='texttarea__6' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						if (contador==6 && actividadSuma__m7!=null && actividadSuma__m7!=undefined && actividadSuma__m7!="" && actividadSuma__m7!=" ") {
							$(".contenedor__matriz__analista").append("<tr><td>"+x.idActividades+" "+x.nombreActividades+"</td><td>"+actividadSuma__m7+"</td><td><select id='select__7' name='select__7' style='width:100%; height:30px;'><option value='aprobar'>Aprobar</option><option value='rechazar'>Rechazar</option></select><td><textarea id='texttarea__7' name='texttarea__7' style='width:100%; height:45px!important;'></textarea></td></tr>")

						}

						contador++;

					}


				}

				let informacionObtenida__documentos=elementos['informacionObtenida__documentos'];

				for(x of informacionObtenida__documentos){

					if(x.documentoInfraestructura!="" && x.documentoInfraestructura!=" " && x.documentoInfraestructura!=undefined && x.documentoInfraestructura!=null){

						$("#documentoInfraestructura").attr('href','documentos/modificacion/informe/infraestructura/'+x.documentoInfraestructura);
						$(".ver__infraestructura__modificaciones").show();

					}

					if (x.documentoInstalaciones!="" && x.documentoInstalaciones!=" " && x.documentoInstalaciones!=undefined && x.documentoInstalaciones!=null) {

						$("#documentoInstalaciones").attr('href','documentos/modificacion/informe/instalaciones/'+x.documentoInstalaciones);
						$(".ver__instalaciones__modificaciones").show();

					}

					if (x.documentoAdministrativo!="" && x.documentoAdministrativo!=" " && x.documentoAdministrativo!=undefined && x.documentoAdministrativo!=null) {

						$("#documentoAdministrativo").attr('href','documentos/modificacion/informe/administrativo/'+x.documentoAdministrativo);
						$(".ver__administrativo__modificaciones").show();

					}

					if (x.documentoAlto!="" && x.documentoAlto!=" " && x.documentoAlto!=undefined && x.documentoAlto!=null) {

						$("#documentoSubsecretaria").attr('href','documentos/modificacion/informe/altoRendimiento/'+x.documentoAlto);
						$(".ver__subsecretaria__modificaciones").show();

					}

					if(x.documentoDesarrollo!="" && x.documentoDesarrollo!=" " && x.documentoDesarrollo!=undefined && x.documentoDesarrollo!=null){

						$("#documentoSubsecretaria").attr('href','documentos/modificacion/informe/desarrollo/'+x.documentoDesarrollo);
						$(".ver__subsecretaria__modificaciones").show();

					}

				}			

			});

			},
			error:function(){

			}
					
		});		

	}

	contadorAnonimoArray.push(1);

});

}


var funcion__recomendar=function(tbody,table){

$(tbody).on("click","button.recomendar__modificaciones",function(e){

	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[1]);

		$("#idTramite").val(data[4]);
		$("#idOrganismo").val(data[5]);
		$(".idOrganismo__lineas").val(data[5]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[4]);


		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){
	        
				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];

        let informacionObtenida__honorarios__varios=elementos['informacionObtenida__honorarios__varios'];
        let informacionObtenida__sueldos__varios=elementos['informacionObtenida__sueldos__varios'];
        let informacionObtenida__desvinculacion__varios=elementos['informacionObtenida__desvinculacion__varios'];
        let informacionObtenida__honorarios__sueldos=elementos['informacionObtenida__honorarios__sueldos'];
        let informacionObtenida__sueldos__honorarios=elementos['informacionObtenida__sueldos__honorarios'];

				let informacionObtenida__documentos=elementos['informacionObtenida__documentos'];

					var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);

					informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val());
					informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val());
					informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val());
					informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val());
					informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val());
					informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val());


        informacionObtenida__honorarios__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__varios,table,$("#idRolAd").val());

        informacionObtenida__sueldos__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__varios,table,$("#idRolAd").val());

        informacionObtenida__desvinculacion__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculacion__varios,table,$("#idRolAd").val());

        informacionObtenida__honorarios__sueldos=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__sueldos,table,$("#idRolAd").val());

        informacionObtenida__sueldos__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__honorarios,table,$("#idRolAd").val());


				for(x of informacionObtenida__documentos){

					if($("#idRolAd").val()==2 && $("#fisicamenteE").val()==6){

						$("#descargarInformeM").attr('href','documentos/modificacion/informe/instalaciones/'+x.documentoInstalaciones);

					}else if ($("#fisicamenteE").val()==1 || $("#fisicamenteE").val()==15) {

						$("#descargarInformeM").attr('href','documentos/modificacion/informe/infraestructura/'+x.documentoInfraestructura);

					}else if ($("#fisicamenteE").val()==2 || $("#fisicamenteE").val()==5) {

						$("#descargarInformeM").attr('href','documentos/modificacion/informe/administrativo/'+x.documentoAdministrativo);

					}else if ($("#fisicamenteE").val()==24 || $("#fisicamenteE").val()==12 || $("#fisicamenteE").val()==14) {

						$("#descargarInformeM").attr('href','documentos/modificacion/informe/altoRendimiento/'+x.documentoAlto);

					}else{

						$("#descargarInformeM").attr('href','documentos/modificacion/informe/desarrollo/'+x.documentoDesarrollo);

					}

					if($("#idRolAd").val()==4 && $("#fisicamenteE").val()==1){

						$("#descargarInformeM2").attr('href','documentos/modificacion/informe/instalaciones/'+x.documentoInstalaciones);

					}

				}

				if($("#idRolAd").val()==4 && $("#fisicamenteE").val()==1){

					$(".nombre__infraestructura").text("Descargar pdf infraestructura");
					$(".cargar__infraestructura").text("Cargar pdf infraestructura");
					$(".oculto__solo__instalaciones__modificaciones").show();
					
				}


				if ($("#idRolAd").val()==4 && $("#fisicamenteE").val()==1) {

					let idUsuarioInfraRObtenido=elementos['idUsuarioInfraRObtenido'];
					let idInstalacionesRObtenido=elementos['idInstalacionesRObtenido'];

					selector__planificacion__recomendar__instalaciones($(".selector__modificacion__lineas"));

					if (idUsuarioInfraRObtenido=="2" || idUsuarioInfraRObtenido==2) {
						$(".bloque__1__inicial").hide();
						$(".texto__no__corespponde__infra").text("NO CORRESPONDE INFRAESTRUCTURA");
						$("#noCorresponde__infra__var").val(1);
					}


					if (idInstalacionesRObtenido=="2" || idInstalacionesRObtenido==2) {
						$(".oculto__solo__instalaciones__modificaciones").hide();
						$(".texto__no__corespponde__instalaciones").text("NO CORRESPONDE INSTALACIONES DEPORTIVAS");
						$("#noCorresponde__instalaciones__var").val(1);
					}


				}else if ($("#idRolAd").val()==4 && $("#fisicamenteE").val()==2) {

					selector__planificacion__recomendar($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==7 && $("#fisicamenteE").val()==24) {

					selector__planificacion__recomendar($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==7 && $("#fisicamenteE").val()==26) {

					selector__planificacion__recomendar($(".selector__modificacion__lineas"));

				}else if(($("#idRolAd").val()==2)){

					selector__general__modificar__recomendar($(".selector__modificacion__lineas"));

				}

				 if ($("#idRolAd").val()==4 || $("#idRolAd").val()==7) {

				 	$("#enviarModificacionesCRecomienda").text("VALIDAR");

				 }


			});

			},
			error:function(){

			}
					
		});	

	}

	contadorAnonimoArray.push(1);

});

}


var funcion__asignar=function(tbody,table){

$(tbody).on("click","button.reasignar__modificaciones",function(e){

	e.preventDefault();

	let incluyeVeinte = contadorAnonimoArray.includes(1);

	if (incluyeVeinte===false) {

		let data=table.row($(this).parents("tr")).data();

		$(".textos__titulos").text(data[1]);

		$("#idTramite").val(data[4]);
		$("#idOrganismo").val(data[5]);
		$(".idOrganismo__lineas").val(data[5]);

		let paqueteDeDatos = new FormData();

		paqueteDeDatos.append('tipo','lineas__modificaciones');
		paqueteDeDatos.append('idLinea',data[4]);

		$.ajax({

			type:"POST",
			url:"modelosBd/inserta/seleccionaAcciones.md.php",
			contentType: false,
			data:paqueteDeDatos,
			processData: false,
			cache: false, 
			success:function(response){

			$.getScript("layout/scripts/js/modificacionRevisor/selector.js",function(){
	        
				let elementos=JSON.parse(response);
				let informacionObtenida=elementos['informacionObtenida'];
				let informacionObtenida__honorarios=elementos['informacionObtenida__honorarios'];
				let informacionObtenida__honorarios__items=elementos['informacionObtenida__honorarios__items'];
				let informacionObtenida__sueldos__salarios=elementos['informacionObtenida__sueldos__salarios'];
				let informacionObtenida__sueldos__items=elementos['informacionObtenida__sueldos__items'];
				let informacionObtenida__desvinculaciones=elementos['informacionObtenida__desvinculaciones'];

        let informacionObtenida__honorarios__varios=elementos['informacionObtenida__honorarios__varios'];
        let informacionObtenida__sueldos__varios=elementos['informacionObtenida__sueldos__varios'];
        let informacionObtenida__desvinculacion__varios=elementos['informacionObtenida__desvinculacion__varios'];
        let informacionObtenida__honorarios__sueldos=elementos['informacionObtenida__honorarios__sueldos'];
        let informacionObtenida__sueldos__honorarios=elementos['informacionObtenida__sueldos__honorarios'];


				let contador=0;

				let eventoOrigen="";
				let eventosDestino="";
				let tipoTramite="";		

				if ($("#variable__inve").length && $("#idRolAd").val()!=3) {
				  var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12,18]);
				}else{
					var table = datatabletsConfiguration($("#tabla__0__modificaciones__editar"),[2,3,4,10,11,12]);
				}



				informacionObtenida=="N/A" ? " " : visualizar__actividades(informacionObtenida,table,$("#idRolAd").val());
				informacionObtenida__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios,table,$("#idRolAd").val());
				informacionObtenida__honorarios__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__items,table,$("#idRolAd").val());
				informacionObtenida__sueldos__salarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__salarios,table,$("#idRolAd").val());
				informacionObtenida__sueldos__items=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__items,table,$("#idRolAd").val());
				informacionObtenida__desvinculaciones=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculaciones,table,$("#idRolAd").val());

        informacionObtenida__honorarios__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__varios,table,$("#idRolAd").val());

        informacionObtenida__sueldos__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__varios,table,$("#idRolAd").val());

        informacionObtenida__desvinculacion__varios=="N/A" ? " " : visualizar__actividades(informacionObtenida__desvinculacion__varios,table,$("#idRolAd").val());

        informacionObtenida__honorarios__sueldos=="N/A" ? " " : visualizar__actividades(informacionObtenida__honorarios__sueldos,table,$("#idRolAd").val());

        informacionObtenida__sueldos__honorarios=="N/A" ? " " : visualizar__actividades(informacionObtenida__sueldos__honorarios,table,$("#idRolAd").val());



				$("#idUsuarioEn").val($("#idUsuarioC").val());

				if ($("#idRolAd").val()==4 && $("#fisicamenteE").val()==1) {

					selector__coordinacion__infraestructura($(".selector__modificacion__lineas"));

					$(".selector__modificacion__lineas").attr('multiple','multiple[]');

					$(".selector__modificacion__lineas").attr('style','height:100px!important;');

				}else if ($("#idRolAd").val()==4 && $("#fisicamenteE").val()==2) {

					selector__coordinacion__administracion($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==7 && $("#fisicamenteE").val()==24) {

					selector__subsecretaria__alto__rendimiento($(".selector__modificacion__lineas"));

				}else if ($("#idRolAd").val()==7 && $("#fisicamenteE").val()==26) {

					selector__subsecretaria__desarrollo($(".selector__modificacion__lineas"));

				}else if(($("#idRolAd").val()==2)){

					selector__general($(".selector__modificacion__lineas"));

				}else if(($("#idRolAd").val()==3)){

					selector__general__analistas($(".selector__modificacion__lineas"));

					$(".rotulo__devolver__a").text("Devolver a");

					$(".modal__modificaciones__revisor__enviar").remove();
					$(".modal__modificaciones__analistas__enviar").show();

					$(".nombre__visualizador").text("Dar click en el check para evaluar las modificaciones");

				}

				if ($("#idRolAd").val()!="3" && $("#idRolAd").val()!=3) {

					$(".fila__modificaciones__califica__analistas").remove();


				}else{

					// $("#visualizar__informacionModificaciones").attr('checked','checked');

					// $(".no__visible__modificaciones").show();

					if ($("#fisicamenteE").val()==12 || $("#fisicamenteE").val()==24 || $("#fisicamenteE").val()==14) {

						$("#tipoDocumento__D").val("alto");
						$(".modal__body__alto__rendimiento").show();

					}else if($("#fisicamenteE").val()==26 || $("#fisicamenteE").val()==13){
						$("#tipoDocumento__D").val("formativo");
						$(".modal__body__alto__rendimiento__desarrollo__conclusiones").show();
					}else if($("#fisicamenteE").val()==25 || $("#fisicamenteE").val()==19){
						$("#tipoDocumento__D").val("recreativo");
						$(".modal__body__alto__rendimiento__desarrollo__conclusiones").show();
					}else if($("#fisicamenteE").val()==15 || $("#fisicamenteE").val()==6 || $("#fisicamenteE").val()==27 || $("#fisicamenteE").val()==28 || $("#fisicamenteE").val()==29 || $("#fisicamenteE").val()==30 || $("#fisicamenteE").val()==31 || $("#fisicamenteE").val()==32 || $("#fisicamenteE").val()==33){
						$("#tipoDocumento__D").val("infraestructura");
						$(".tabla__instalaciones__calificacion").show();
					}else if($("#fisicamenteE").val()==3 || $("#fisicamenteE").val()==18){
						$("#tipoDocumento__D").val("planificacion");
					}else if($("#fisicamenteE").val()==5){
						$("#tipoDocumento__D").val("administrativo");
						$(".tabla__administrativo__calificacion").show();
					}

					$("#enviarModificacionesArecomienda").text("REGISTRAR");

				}
	    

			});

			},
			error:function(){

			}
					
		});		

	}

	contadorAnonimoArray.push(1);

});

}