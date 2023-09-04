
var datatableSeguimientoRegistro=function(tabla,tipo){
  //alert("DATA TABLE2");
    
      /*==================================================
      =            Obtener número de columnas            =
      ==================================================*/
  
      let contadorCol=$('#'+tipo+' > thead > tr > th').length;
      let contadorRestar=contadorCol - 1;
  
      //=====  End of Obtener número de columnas  ======/
      
      /*=================================================================
      =            Construir columnas para editar y eliminar            =
      =================================================================*/
      //$('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Editar</center></th>');
      $('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Eliminar</center></th>');
      //=====  End of Construir columnas para editar y eliminar  ======/
      
      /*==============================================
      =            Establecer datatablets            =
      ==============================================*/
      
      var table =$(tabla).DataTable({
      
        "language":{
      
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar MENU registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando registros del START al END de un total de TOTAL",
          "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
          "sInfoFiltered":   "(filtrado de un total de MAX registros)",
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
  
       // dom: 'Bfrtip',
        // buttons: [
        //      'excel',
        //       {
        //         extend: 'pdf',
        //         text: 'PDF',
        //         orientation: 'landscape',
        //         customize:function(doc) {
  
        //             doc.defaultStyle.fontSize = 6;
  
        //             doc.styles.title = {
        //                 color: 'black',
        //                 fontSize: '8',
        //                 alignment: 'center',
        //                 margin:'0'                                                
        //             }
  
        //             doc.styles.tableHeader = {
  
        //                 fillColor:'#311b92',
        //                 fontSize: '8',
        //                 color:'white',
        //                 alignment:'center',
                                        
        //             }
  
        //         }
  
        //     }
        // ],
      
        "bLengthChange": false,
        "pagingType": "full_numbers",
        "Paginate": true,
        "pagingType": "full_numbers",
        "retrieve": true, 
        "paging": true, 
        "pageLength":4,
        
      
      
        //  "ajax":{
      
        //    "method":"POST",
        //   "url":"modelosBd/inserta/seleccionaAcciones.md.php", 
        //   "data": { 
        //      "tipo": tipo,
  
           
        //    }  
      
        //  },
      
        "aoColumnDefs":[
          
          /*{
            
            "aTargets":contadorCol, 
            "mRender": (function (data, type, row) {
      
              return '<div class="w-full flex justify-center" align="center"><button class="btn btn-success dt-editar"><i class="fas fa-pen"></i></button></div>';
      
             }) 
      
          },*/
      
          {
            
            "aTargets":(contadorCol), 
            "mRender": (function (data, type, row) {
      
              return '<div class="w-full flex justify-center" align="center"><button class="btn btn-warning dt-delete"><i class="fas fa-trash"></i></button></div>';
      
             }) 
      
          }   
      
        ]
      
      });
      
     //=====  End of Establecer datatablets  ======//
      
      funcion__eliminar("#"+tipo+" tbody",table,contadorCol,tipo);
}

var datatableSeguimientoJurisdiccion=function(tabla,tipo){
  //alert("DATA TABLE2");
    
      /*==================================================
      =            Obtener número de columnas            =
      ==================================================*/
  
      let contadorCol=$('#'+tipo+' > thead > tr > th').length;
      let contadorRestar=contadorCol - 1;
  
      //=====  End of Obtener número de columnas  ======/
      
      /*=================================================================
      =            Construir columnas para editar y eliminar            =
      =================================================================*/
      //$('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Editar</center></th>');
      $('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Eliminar</center></th>');
      //=====  End of Construir columnas para editar y eliminar  ======/
      
      /*==============================================
      =            Establecer datatablets            =
      ==============================================*/
      
      var table =$(tabla).DataTable({
      
        "language":{
      
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar MENU registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando registros del START al END de un total de TOTAL",
          "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
          "sInfoFiltered":   "(filtrado de un total de MAX registros)",
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
  
       // dom: 'Bfrtip',
        // buttons: [
        //      'excel',
        //       {
        //         extend: 'pdf',
        //         text: 'PDF',
        //         orientation: 'landscape',
        //         customize:function(doc) {
  
        //             doc.defaultStyle.fontSize = 6;
  
        //             doc.styles.title = {
        //                 color: 'black',
        //                 fontSize: '8',
        //                 alignment: 'center',
        //                 margin:'0'                                                
        //             }
  
        //             doc.styles.tableHeader = {
  
        //                 fillColor:'#311b92',
        //                 fontSize: '8',
        //                 color:'white',
        //                 alignment:'center',
                                        
        //             }
  
        //         }
  
        //     }
        // ],
      
        "bLengthChange": false,
        "pagingType": "full_numbers",
        "Paginate": true,
        "pagingType": "full_numbers",
        "retrieve": true, 
        "paging": true, 
        "pageLength":4,
        
      
      
         "ajax":{
      
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
  
           
           }  
      
         },
      
        "aoColumnDefs":[
          
          /*{
            
            "aTargets":contadorCol, 
            "mRender": (function (data, type, row) {
      
              return '<div class="w-full flex justify-center" align="center"><button class="btn btn-success dt-editar"><i class="fas fa-pen"></i></button></div>';
      
             }) 
      
          },*/
      
          {
            
            "aTargets":(contadorCol), 
            "mRender": (function (data, type, row) {
      
              return '<div class="w-full flex justify-center" align="center"><button class="btn btn-warning dt-delete"><i class="fas fa-trash"></i></button></div>';
      
             }) 
      
          }   
      
        ]
      
      });
      
     //=====  End of Establecer datatablets  ======//
      
      funcion__eliminar("#"+tipo+" tbody",table,contadorCol,tipo);
}
      
  
      
      /*======================================
      =            Eliminar datos            =
      ======================================*/
      var funcion__eliminar=function(tbody,table,contadorCol,tipo){
  
      
  
      $(tbody).on("click","button.dt-delete",function(e){
  
        
  
      e.preventDefault();
      
      let data=table.row($(this).parents("tr")).data();
   
  
      $this = $(this);
      let dtRow = $this.parents('tr');
      
      alertify.confirm('Eliminar', '¿Está seguro de eliminar?', function(){ 
      
      let paqueteDeDatos = new FormData();
      paqueteDeDatos.append("tipo",tipo);
      paqueteDeDatos.append("id",data[contadorCol]);
  
      console.log(data[contadorCol])
      
      axios({
        method: "post",
        url: "modelosBd/POA_SEGUIMIENTO_JS/selector.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {
      
        if (response.data.mensaje==true) {
          alertify.set("notifier","position", "top-center");
          alertify.notify("Registro realizado correctamente", "success", 1, function(){});
          table.row(dtRow[0].rowIndex-1).remove().draw( false );
  
        }
      
      }).catch(( error ) => {
        alertify.set("notifier","position", "top-center");
        alertify.notify("No se puede realizar la acción", "error", 2, function(){});
      });
      
      },
  
      function(){ 
        alertify.set("notifier","position", "top-center");
        alertify.notify("Acción cancelada", "error", 2, function(){});
      });
      
      });
      
      }
      
      //=====  End of Eliminar datos  ======//
  
  
  
  
      var funcion__reasignar__seguimientos__recorridos__anexos__reportes=function(tbody,table){
  
        $(tbody).on("click","button.reasignar__seguimientos__recorridos__boton__anexos__reportes",function(e){
      
          e.preventDefault();
      
          var paqueteDeDatos = new FormData();
      
          var data=table.row($(this).parents("tr")).data();
      
          let variableTrimestral=$(this).attr('idTrimestres');
      
          if (variableTrimestral==1) {
            trimestreN="Primer Trimestre";
          }else if (variableTrimestral==2){
            trimestreN="Segundo Trimestre";
          }else if (variableTrimestral==3){
            trimestreN="Tercer Trimestre";
          }else if (variableTrimestral==4){
            trimestreN="Cuarto Trimestre";
          }
      
          if (variableTrimestral==1) {
            trimestreN__2="primerTrimestre";
          }else if (variableTrimestral==2){
            trimestreN__2="segundoTrimestre";
          }else if (variableTrimestral==3){
            trimestreN__2="tercerTrimestre";
          }else if (variableTrimestral==4){
            trimestreN__2="cuartoTrimestre";
          }
      
          let selector__anios__se=$("#selector__anios__se").val();
      
        var paqueteDeDatos2 = new FormData();
      
        paqueteDeDatos2.append('tipo','seguimiento__global__interacciones');
      
        paqueteDeDatos2.append("idOrganismo",data[7]);
        paqueteDeDatos2.append("anio2",selector__anios__se);
        paqueteDeDatos2.append("trimestres",trimestreN__2);
      
          $("#idOrganismo").val(data[7]);
          $("#trimestreEvaluadorDos").val(trimestreN__2);
      
        $.ajax({
      
          type:"POST",
          url:"modelosBd/inserta/seleccionaAcciones.md.php",
          contentType: false,
          data:paqueteDeDatos2,
          processData: false,
          cache: false, 
          success:function(response){
      
          let elementos=JSON.parse(response);
      
          let envio__informaciones=elementos['envio__informaciones'];
              let envio__informaciones__documentos=elementos['envio__informaciones__documentos'];
      
              $(".contendor__bodys__entrantes").append('<form class="col col-12 text-center mt-4" action="modelosBd/pdf/pdf.modelo.php" method="post"><input type="hidden" name="idOrganismo" value="'+data[7]+'" /><input type="hidden" id="tipoPdf" name="tipoPdf" value="documento__seguimiento__final" /><input type="hidden" id="trimestreEvaluadorDos" name="trimestreEvaluadorDos" value="'+trimestreN__2+'"/><button class="btn btn-info"><i class="fa fa-cloud" aria-hidden="true"></i>&nbsp;&nbsp;GENERAR PDF</button></form>');
              
      
          for(z of envio__informaciones){
      
            if (z.autogestionT==null || z.autogestionT==undefined || z.autogestionT=="" || z.autogestionT==" ") {
      
                $(".autogestion__verificables").hide();
      
            }else{
      
                $(".autogestion__verificables").show();
      
            }
      
            if (z.indicadoresT==null || z.indicadoresT==undefined || z.indicadoresT=="" || z.indicadoresT==" ") {
      
                $(".indicadores__verificables").hide();
      
            }else{
      
                $(".indicadores__verificables").show();
      
            }
      
            if (z.sueldosT==null || z.sueldosT==undefined || z.sueldosT=="" || z.sueldosT==" ") {
      
                $(".sueldos__verificables").hide();
      
            }else{
      
                $(".sueldos__verificables").show();
      
            }
      
            if (z.honorariosT==null || z.honorariosT==undefined || z.honorariosT=="" || z.honorariosT==" ") {
      
                $(".honorarios__verificables").hide();
      
            }else{
      
                $(".honorarios__verificables").show();
      
            }
      
      
            if (z.administrativoT==null || z.administrativoT==undefined || z.administrativoT=="" || z.administrativoT==" ") {
      
                $(".administrativos__verificables").hide();
      
            }else{
      
                $(".administrativos__verificables").show();
      
            }
      
            if (z.mantenimientoT==null || z.mantenimientoT==undefined || z.mantenimientoT=="" || z.mantenimientoT==" ") {
      
                $(".mantenimiento__verificables").hide();
      
            }else{
      
                $(".mantenimiento__verificables").show();
      
            }
      
      
            if (z.mantenimientoTT==null || z.mantenimientoTT==undefined || z.mantenimientoTT=="" || z.mantenimientoTT==" ") {
      
                $(".mantenimientoTEC__verificables").hide();
      
            }else{
      
                $(".mantenimientoTEC__verificables").show();
      
            }
      
      
            if (z.capacitacionT==null || z.capacitacionT==undefined || z.capacitacionT=="" || z.capacitacionT==" ") {
      
                $(".capacitacion__verificables").hide();
      
            }else{
      
                $(".capacitacion__verificables").show();
      
            }
      
            if (z.capacitacionTT==null || z.capacitacionTT==undefined || z.capacitacionTT=="" || z.capacitacionTT==" ") {
      
                $(".capacitacionTecnicos__verificables").hide();
      
            }else{
      
                $(".capacitacionTecnicos__verificables").show();
      
            }
      
            if (z.competenciaT==null || z.competenciaT==undefined || z.competenciaT=="" || z.competenciaT==" ") {
      
                $(".competencias__verificables").hide();
      
            }else{
      
                $(".competencias__verificables").show();
      
            }
      
            if (z.competenciaFor==null || z.competenciaFor==undefined || z.competenciaFor=="" || z.competenciaFor==" ") {
      
                $(".competenciasForma__verificables").hide();
      
            }else{
      
                $(".competenciasForma__verificables").show();
      
            }
      
      
            if (z.altoT==null || z.altoT==undefined || z.altoT=="" || z.altoT==" ") {
      
                $(".competenciasAlto__verificables").hide();
      
            }else{
      
                $(".competenciasAlto__verificables").show();
      
            }
      
            if (z.recreacionT==null || z.recreacionT==undefined || z.recreacionT=="" || z.recreacionT==" ") {
      
                $(".recreativo__verificables").hide();
      
            }else{
      
                $(".recreativo__verificables").show();
      
            }
      
            if (z.recreativosTT==null || z.recreativosTT==undefined || z.recreativosTT=="" || z.recreativosTT==" ") {
      
                $(".recreativoTecnicos__verificables").hide();
      
            }else{
      
                $(".recreativoTecnicos__verificables").show();
                          $(".recreativo__verificables").show();
      
            }
      
      
            if (z.implementacionT==null || z.implementacionT==undefined || z.implementacionT=="" || z.implementacionT==" ") {
      
                $(".implementacion__verificables").hide();
      
            }else{
      
                $(".implementacion__verificables").show();
      
            }
      
      
          }							
      
          $(".texto__evidenciales").text(data[1]+" ("+trimestreN+")");
      
            
          
          agregarDatatablets($("#autogestionPoas__in__2"),"seguimiento__autogestiones__2","Autogestiones","",variableTrimestral); 
  
          agregarDatatablets($("#mantenimientoTec__in__2"),"seguimiento__mantenimientosTec__2","002 - Mantenimiento de escenarios e infraestructura deportiva - Información técnica","",variableTrimestral); 	
          agregarDatatablets($("#capacitacionTec__in__2"),"seguimiento__capacitacionTecni__2","003 - Capacitación deportiva o de recreación - Información técnica","",variableTrimestral);
      
          agregarDatatablets($("#competenciaFormativa__in__2"),"seguimiento__competenciaFor__2","005 - Eventos de preparación y competencia - Deporte Formativo - Información técnica","",variableTrimestral); 
      
          agregarDatatablets($("#competenciaAlto__in__2"),"seguimiento__competenciaAlto__2","005 - Eventos de preparación y competencia - Alto Rendimiento - Información técnica","",variableTrimestral); 
      
          agregarDatatablets($("#recreativoTec__in__2"),"seguimiento__recreativoTec__2","006 - Actividades recreativas - Información técnica","",variableTrimestral); 
  
          agregarDatatablets($("#indicadores__in__2"),"seguimiento__indicadores__2","Indicadores",objetos([5],["enlace"],['documento'],[$("#filesFrontend").val()+"seguimiento/indicadoresDocumento/"],["documento"]),variableTrimestral); 
   
      
              var agregarDatatablets__competencia__altos__formativos=function(parametro1,parametro2,parametro3,parametro4,parametro5){
      
              $(parametro1).click(function (e){
      
                  $(".contenedor__sueldos__salarios").html(" ");
      
                  var paqueteDeDatos = new FormData();
      
                  paqueteDeDatos.append('tipo','competencias__competencias__altos__altos__implementacion__tablas__2__formativos');
      
                  paqueteDeDatos.append("idOrganismo",data[7]);
                  paqueteDeDatos.append("anio2",parametro5);
                  paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
      
                          if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                              $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Documento</th></tr></table>");
      
                              for(z of indicadorInformacion3){
      
                                  $(".contenido__tablas__facturas__sueldos").append('<tr><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCompentencia_formativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');
      
                              }                           
      
                          }
      
      
                      }); 
      
                      },
                      error:function(){
      
                      }
                              
                  });     
      
              });
      
              }
      
              agregarDatatablets__competencia__altos__formativos($("#competenciaFormativa__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2",variableTrimestral,selector__anios__se); 
      
      
      
              var agregarDatatablets__competencia__altos=function(parametro1,parametro2,parametro3,parametro4,parametro5){
      
              $(parametro1).click(function (e){
      
                  $(".contenedor__sueldos__salarios").html(" ");
      
                  var paqueteDeDatos = new FormData();
      
                  paqueteDeDatos.append('tipo','competencias__competencias__altos__altos__implementacion__tablas__2');
      
                  paqueteDeDatos.append("idOrganismo",data[7]);
                  paqueteDeDatos.append("anio2",parametro5);
                  paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
      
                          if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                              $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__sueldos'><tr><th>Documento</th></tr></table>");
      
                              for(z of indicadorInformacion3){
      
                                  $(".contenido__tablas__facturas__sueldos").append('<tr><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCompentencia_alto/'+z.documento+'" target="_blank">'+z.documento+'</a></td></tr>');
      
                              }                           
      
                          }
      
      
                      }); 
      
                      },
                      error:function(){
      
                      }
                              
                  });     
      
              });
      
              }
      
              agregarDatatablets__competencia__altos($("#competenciaAlto__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2",variableTrimestral,selector__anios__se); 
      
      
          var agregarDatatablets__sueldos__salarios=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','sueldos__seguimientos__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
  
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
      
      
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
      
          agregarDatatablets__sueldos__salarios($("#sueldos__in__2"),"seguimiento__sueldos__salarios__2",variableTrimestral,selector__anios__se,"004 - Operación deportiva - Sueldos y salarios"); 
      
  
  
          var agregarDatatablets__honorarios__seguimientos=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','honorarios__seguimientos__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
  
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
      
              
      
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasHonorarios/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosHonorarios/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__honorarios__seguimientos($("#honorarios__in__2"),"seguimiento__honorarios__2",variableTrimestral,selector__anios__se,"004 - Operación deportiva - Honorarios"); 
      
      
          var agregarDatatablets__administrativos__seguimientos=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','administrativo__seguimientos__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
  
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
      
      
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturas__administrativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosHabilitantes__administrativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__administrativos__seguimientos($("#administrativo__in__2"),"seguimiento__administrativas__2",variableTrimestral,selector__anios__se,"001 - Operación y funcionamiento de organizaciones deportivas y escenarios deportivos - Ejecución Presupuestaria"); 
      
          var agregarDatatablets__mantenimiento__seguimientos=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','mantenimiento__seguimientos__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
  
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
  
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasMantenimiento/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosMantenimiento/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__mantenimiento__seguimientos($("#mantenimiento__in__2"),"seguimiento__mantenimientos__2",variableTrimestral,selector__anios__se,"002 - Mantenimiento de escenarios e infraestructura deportiva - Ejecución presupuestaria"); 
      
      
          var agregarDatatablets__capacitacion__seguimientos=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','capacitacion__seguimiento__tablas__ms__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
  
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
      
              
      
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasCapacitacion/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCapacitacion/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__capacitacion__seguimientos($("#capacitacion__in__2"),"seguimiento__capacitacion__2",variableTrimestral,selector__anios__se,"003 - Capacitación deportiva o de recreación - Ejecución presupuestaria"); 
      
      
          var agregarDatatablets__competencia__seguimientos2023=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','competencias__competencias__implementacion__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
      
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
      
      
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasCompetencias/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombreItem+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosCompetencia/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__competencia__seguimientos2023($("#competencia__in__2"),"seguimiento__competencia__2",variableTrimestral,selector__anios__se,"005 - Eventos de preparación y competencia - Ejecución presupuestaria"); 
      
      
        var agregarDatatablets__recreativo__seguimientos=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','recreativos__seguimiento__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
  
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
      
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasRecreativo/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosRecreativo/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__recreativo__seguimientos($("#recreativo__in__2"),"seguimiento__recreativo__2",variableTrimestral,selector__anios__se,"006 - Actividades recreativas - Ejecución presupuestaria"); 
      
      
        var agregarDatatablets__implementacion__seguimientos=function(parametro1,parametro3,parametro4,parametro5,nombreArchivo){
      
          $(parametro1).click(function (e){
      
            $(".contenedor__sueldos__salarios").html(" ");
      
            var paqueteDeDatos = new FormData();
      
            paqueteDeDatos.append('tipo','competencia__implementacion__tablas__2');
      
            paqueteDeDatos.append("idOrganismo",data[7]);
            paqueteDeDatos.append("anio2",parametro5);
            paqueteDeDatos.append("trimestres",trimestreN__2);
      
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
      
                let indicadorInformacion2=elementos['indicadorInformacion2'];
                let indicadorInformacion3=elementos['indicadorInformacion3'];
      
                datatabletsSeguimientoVacio($("#"+parametro3+""), parametro3,nombreArchivo,"",parametro4);
                
      
                if (indicadorInformacion2!=null && indicadorInformacion2!=undefined && indicadorInformacion2!=" " && indicadorInformacion2!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Número de factura</th><th>Fecha de factura</th><th>Ruc</th><th>Autorización</th><th>Monto</th><th>Mes</th></tr></table>");
      
                  for(z of indicadorInformacion2){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+z.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/facturasImplementacion/'+z.documento+'" target="_blank">'+z.documento+'</a></td><td>'+z.numeroFactura+'</td><td>'+z.fechaFactura+'</td><td>'+z.ruc+'</td><td>'+z.autorizacion+'</td><td>'+z.monto+'</td><td>'+z.mes+'</td></tr>');
      
                  }							
      
                }
      
                if (indicadorInformacion3!=null && indicadorInformacion3!=undefined && indicadorInformacion3!=" " && indicadorInformacion3!="") {
      
                  $(".contenedor__sueldos__salarios").append("<table class='contenido__tablas__facturas__honorarios'><tr><th>Nombre</th><th>Documento</th><th>Mes</th></tr></table>");
      
                  for(w of indicadorInformacion3){
      
                    $(".contenido__tablas__facturas__honorarios").append('<tr><td>'+w.nombres+'</td><td><a href="'+$("#filesFrontend").val()+'seguimiento/otrosInstalaciones/'+w.documento+'" target="_blank">'+w.documento+'</a></td><td>'+w.mes+'</td></tr>');
      
                  }							
      
                }
      
      
              });	
      
              },
              error:function(){
      
              }
                  
            });	  	
      
          });
      
          }
      
          agregarDatatablets__implementacion__seguimientos($("#implementacion__in__2"),"seguimiento__implementacion__2",variableTrimestral,selector__anios__se,"007 - implementación deportiva  - Ejecución presupuestaria e Información Técnica"); 
      
      
      
          },
          error:function(){
      
          }
                
        });	  	
          
        });
      
      }
  
  
  
      var datatabletsSeguimientoVacio=function(tabla,tipo,nombreDocumento,enlaceDocumento,datos){

      
        /*==================================================
        =            Obtener número de columnas            =
        ==================================================*/
    
        let contadorCol=$('#'+tipo+' > thead > tr > th').length;
        let contadorRestar=contadorCol - 1;
    
        //=====  End of Obtener número de columnas  ======/
        
        /*=================================================================
        =            Construir columnas para editar y eliminar            =
        =================================================================*/
        //$('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Editar</center></th>');
        //$('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Eliminar</center></th>');
        //=====  End of Construir columnas para editar y eliminar  ======/
        
        /*==============================================
        =            Establecer datatablets            =
        ==============================================*/
        
        var table =$(tabla).DataTable({
        
          "language":{
        
            "sProcessing":     "Procesando...",
            "sLengthMenu":     "Mostrar MENU registros",
            "sZeroRecords":    "No se encontraron resultados",
            "sEmptyTable":     "Ningún dato disponible en esta tabla",
            "sInfo":           "Mostrando registros del START al END de un total de TOTAL",
            "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
            "sInfoFiltered":   "(filtrado de un total de MAX registros)",
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
            {
              
              extend: 'excel',
              className: 'btn-excel',
              title:nombreDocumento,
              text: '<button  class="buttonD" ><i class="fas fa-file-excel" style="color: #277c41; font-size: 36px;" ></i></button>',
          },
        
          {
            extend: 'pdf',
            title:nombreDocumento,
            text: '<button  class="buttonD" ><i class="fas fa-file-pdf " style="color: #BF0D0D; font-size: 36px;"></i></button>',
          
            orientation: 'landscape',
            customize:function(doc) {
    
                doc.defaultStyle.fontSize = 6;
    
                doc.styles.title = {
                    color: 'black',
                    fontSize: '6',
                    alignment: 'center',
                    margin:'0'                                                
                }
                doc.styles.tableHeader = {
    
                  fillColor:'#311b92',
                  fontSize: '6',
                  color:'white',
                  alignment:'center',
                                  
              }
              
    
              }
    
            }
        ],
        
          "bLengthChange": false,
          "pagingType": "full_numbers",
          "Paginate": true,
          "pagingType": "full_numbers",
          "retrieve": true, 
          "paging": true, 
          "pageLength":10,
  
          fixedHeader: true,
  
          "initComplete": function (settings, json) {  
            $(tabla).wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
          },
        
        
          "ajax":{
        
            "method":"POST",
          "url":"modelosBd/POA_SEGUIMIENTO/datatablets.PD.md.php", 
          "data": { 
            "tipo": tipo,
            "datos": datos
            
          }  
        
          },
        
      
            "aoColumnDefs":enlaceDocumento
          
        
        });
  
        
        
        
       //=====  End of Establecer datatablets  ======//
        
        funcion__eliminar("#"+tipo+" tbody",table,contadorCol,tipo);
  
        funcion__reasignar__seguimientos__recorridos__anexos__reportes("#"+tipo+" tbody",table);
        
    }
  
  
  
  
  
    var datatabletsSeguimientoCompleto=function(tabla,tipo){
  
      /*==================================================
      =            Obtener número de columnas            =
      ==================================================*/
      let contadorCol=$('#'+tipo+' > thead > tr > th').length;
      let contadorRestar=contadorCol - 1;
      /=====  End of Obtener número de columnas  ======/
      
      /*=================================================================
      =            Construir columnas para editar y eliminar            =
      =================================================================*/
      $('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Editar</center></th>');
      $('#'+tipo).find('th').eq(contadorCol).after('<th COLSPAN=1><center>Eliminar</center></th>');
      /=====  End of Construir columnas para editar y eliminar  ======/
      
      /*==============================================
      =            Establecer datatablets            =
      ==============================================*/
      
      var table =$(tabla).DataTable({
      
        "language":{
      
          "sProcessing":     "Procesando...",
          "sLengthMenu":     "Mostrar MENU registros",
          "sZeroRecords":    "No se encontraron resultados",
          "sEmptyTable":     "Ningún dato disponible en esta tabla",
          "sInfo":           "Mostrando registros del START al END de un total de TOTAL",
          "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
          "sInfoFiltered":   "(filtrado de un total de MAX registros)",
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
                    {
                      
                      extend: 'excel',
                      className: 'btn-excel',
                      text: '<button  class="buttonD" ><i class="fas fa-file-excel" style="color: #277c41; font-size: 36px;" ></i></button>',
         
                  
                      
    
                  },
                
                  {
                    extend: 'pdf',
                    text: '<button  class="buttonD" ><i class="fas fa-file-pdf " style="color: #BF0D0D; font-size: 36px;"></i></button>',
                   
                    orientation: 'landscape',
                    customize:function(doc) {
      
                        doc.defaultStyle.fontSize = 6;
      
                        doc.styles.title = {
                            color: 'black',
                            fontSize: '6',
                            alignment: 'center',
                            margin:'0'                                                
                        }
                        doc.styles.tableHeader = {
    
                          fillColor:'#311b92',
                          fontSize: '6',
                          color:'white',
                          alignment:'center',
                                          
                      }
                      
      
                      }
      
                    }
        ],
      
        "bLengthChange": false,
        "pagingType": "full_numbers",
        "Paginate": true,
        "pagingType": "full_numbers",
        "retrieve": true, 
        "paging": true, 
        "pageLength":4,
        "initComplete": function (settings, json) {  
          $(tabla).wrap("<div style='overflow:auto; width:100%;position:relative;'></div>");            
        },
      
      
        "ajax":{
      
          "method":"POST",
          "url":"modelosBd/POA_SEGUIMIENTO/datatablets.PD.md.php", 
          "data": { 
            "tipo": tipo,
          
          }  
      
        },
      
        "aoColumnDefs":[
      
          {
            
            "aTargets":contadorCol, 
            "mRender": (function (data, type, row) {
      
              return '<div class="w-full flex justify-center" align="center"><button data-bs-toggle="modal" class="btn btn-primary dt-editar"><i class="fas fa-pen"></i></button></div>'
      
             }) 
      
           },
      
          // {
            
          //   "aTargets":(contadorCol+1), 
          //   "mRender": (function (data, type, row) {
      
          //     return '<div class="w-full flex justify-center" align="center"><button class="btn btn-warning dt-delete"><i class="fas fa-trash"></i></button></div>';
      
          //    }) 
      
          // }   
      
        ]
      
      });
      
      /=====  End of Establecer datatablets  ======/
      
      funcion__eliminar("#"+tipo+" tbody",table,contadorCol,tipo);
      
      
      }
  
  //*********************************************************************************//

  //     var datatablesSeguimientoZonales=function(tabla,tipo){

  //       /*==================================================
  //       =            Obtener número de columnas            =
  //       ==================================================*/
  //       let contadorCol=$('#'+tipo+' > thead > tr > th').length;
  //       let contadorRestar=contadorCol - 1;
  //       /=====  End of Obtener número de columnas  ======/
        
  //       /*=================================================================
  //       =            Construir columnas para editar y eliminar            =
  //       =================================================================*/
  //       $('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Editar</center></th>');
  //       $('#'+tipo).find('th').eq(contadorCol).after('<th COLSPAN=1><center>Eliminar</center></th>');
  //       /=====  End of Construir columnas para editar y eliminar  ======/
        
  //       /*==============================================
  //       =            Establecer datatablets            =
  //       ==============================================*/
        
  //       var table =$(tabla).DataTable({
        
  //         "language":{
        
  //           "sProcessing":     "Procesando...",
  //           "sLengthMenu":     "Mostrar MENU registros",
  //           "sZeroRecords":    "No se encontraron resultados",
  //           "sEmptyTable":     "Ningún dato disponible en esta tabla",
  //           "sInfo":           "Mostrando registros del START al END de un total de TOTAL",
  //           "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
  //           "sInfoFiltered":   "(filtrado de un total de MAX registros)",
  //           "sInfoPostFix":    "",
  //           "sSearch":         "Buscar:",
  //           "sUrl":            "",
  //           "sInfoThousands":  ",",
  //           "sLoadingRecords": "No existen datos",
  //           "oPaginate":{
  //             "sFirst":    "Primero",
  //             "sLast":     "Último",
  //             "sNext":     "Siguiente",
  //             "sPrevious": "Anterior"
  //           },
  //           "oAria": {
  //             "sSortAscending":  ": Activar para ordenar la columna de manera ascendente",
  //             "sSortDescending": ": Activar para ordenar la columna de manera descendente"
  //           }
  //         },
  //         dom: 'Bfrtip',
  //         buttons: [
  //                     {
                        
  //                       extend: 'excel',
  //                       className: 'btn-excel',
  //                       text: '<button  class="buttonD" ><i class="fas fa-file-excel" style="color: #277c41; font-size: 36px;" ></i></button>',
           
                    
                        
      
  //                   },
                  
  //                   {
  //                     extend: 'pdf',
  //                     text: '<button  class="buttonD" ><i class="fas fa-file-pdf " style="color: #BF0D0D; font-size: 36px;"></i></button>',
                     
  //                     orientation: 'landscape',
  //                     customize:function(doc) {
        
  //                         doc.defaultStyle.fontSize = 6;
        
  //                         doc.styles.title = {
  //                             color: 'black',
  //                             fontSize: '6',
  //                             alignment: 'center',
  //                             margin:'0'                                                
  //                         }
  //                         doc.styles.tableHeader = {
      
  //                           fillColor:'#311b92',
  //                           fontSize: '6',
  //                           color:'white',
  //                           alignment:'center',
                                            
  //                       }
                        
        
  //                       }
        
  //                     }
  //         ],
        
  //         "bLengthChange": false,
  //         "pagingType": "full_numbers",
  //         "Paginate": true,
  //         "pagingType": "full_numbers",
  //         "retrieve": true, 
  //         "paging": true, 
  //         "pageLength":20,
        
        
  //         "ajax":{
        
  //           "method":"POST",
  //           "url":"modelosBd/POA_SEGUIMIENTO/datatablets.PD.md.php", 
  //           "data": { 
  //             "tipo": tipo,
             
  //           }  
        
  //         },
        
  //         "aoColumnDefs":[


  // // {
              
  //           //   "aTargets":(contadorCol+1), 
  //           //   "mRender": (function (data, type, row) {
        
  //           //     return '<nav id="colorNav" style="position: relative; top: -5em!important;"><tr><td><div class="col-md-12"><select class="form-select" id="idSelectJurisdiccion" aria-label="Default select example"><option value="0">Selecciona una opción</option><option value="9">Planta Central</option><option value="1">Zonal1</option><option value="2">Zonal2</option><option value="3">Zonal3</option><option value="4">Zonal4</option><option value="6">Zonal6</option><option value="7">Zonal7</option><option value="8">Zonal8</option></select></div></td><td><a id=""   name="" class="btn btn-primary"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></td></tr></nav>';
        
  //           //    }) 
        
  //           // } 



        
  //           // {
              
  //           //   "aTargets":contadorCol, 
  //           //   "mRender": (function (data, type, row) {
        
  //           //     return '<div class="w-full flex justify-center" align="center"><button data-bs-toggle="modal" class="btn btn-primary dt-editar"><i class="fas fa-pen"></i></button></div>'
        
  //           //    }) 
        
  //           // },
        
            
        
  //         ]
        
  //       });
        
  //       /=====  End of Establecer datatablets  ======/
        
  //       funcion__eliminar("#"+tipo+" tbody",table,contadorCol,tipo);
        
        
  //       }

//********************************************************************************************//

var datatablesSeguimientoZonales = function (tabla, tipo) {

  // alert("Datatables");
  /*==================================================
  =            Obtener número de columnas            =
  ==================================================*/
  let contadorCol = $('#' + tipo + ' > thead > tr > th').length;
  let contadorRestar = contadorCol - 1;
//alert($('#' + tipo + ' > thead > tr > th')[6])

  //=====  End of Obtener número de columnas  ======//

  /*=================================================================
  =            Construir columnas para editar y eliminar            =
  =================================================================*/
  $('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>JURISDICCIÓN</center></th>');
  $('#'+tipo).find('th').eq(contadorCol).after('<th COLSPAN=1><center>ACCION</center></th>');
  //=====  End of Construir columnas para editar y eliminar  ======//

  /*==============================================
  =            Establecer datatablets            =
  ==============================================*/

  var table = $(tabla).DataTable({

    "language": {

      "sProcessing": "Procesando...",
      "sLengthMenu": "Mostrar MENU registros",
      "sZeroRecords": "No se encontraron resultados",
      "sEmptyTable": "Ningún dato disponible en esta tabla",
      "sInfo": "Mostrando registros del START al END de un total de TOTAL",
      "sInfoEmpty": "Mostrando registros del 0 al 0 de un total de 0",
      "sInfoFiltered": "(filtrado de un total de MAX registros)",
      "sInfoPostFix": "",
      "sSearch": "Buscar:",
      "sUrl": "",
      "sInfoThousands": ",",
      "sLoadingRecords": "No existen datos",
      "oPaginate": {
        "sFirst": "Primero",
        "sLast": "Último",
        "sNext": "Siguiente",
        "sPrevious": "Anterior"
      },
      "oAria": {
        "sSortAscending": ": Activar para ordenar la columna de manera ascendente",
        "sSortDescending": ": Activar para ordenar la columna de manera descendente"
      }
    },

    dom: 'Bfrtip',
    buttons: [
        {
          
          extend: 'excel',
          className: 'btn-excel',
          text: '<button  class="buttonD" ><i class="fas fa-file-excel" style="color: #277c41; font-size: 36px;" ></i></button>',

      
          

      },
    
      {
        extend: 'pdf',
        text: '<button  class="buttonD" ><i class="fas fa-file-pdf " style="color: #BF0D0D; font-size: 36px;"></i></button>',
      
        orientation: 'landscape',
        customize:function(doc) {

            doc.defaultStyle.fontSize = 6;

            doc.styles.title = {
                color: 'black',
                fontSize: '6',
                alignment: 'center',
                margin:'0'                                                
            }
            doc.styles.tableHeader = {

              fillColor:'#311b92',
              fontSize: '6',
              color:'white',
              alignment:'center',
                              
          }
          

          }

        }
    ],

    "bLengthChange": false,
    "pagingType": "full_numbers",
    "Paginate": true,
    "pagingType": "full_numbers",
    "retrieve": true,
    "paging": true,
    "pageLength": 50,
    "scrollX": true,


    "ajax": {

      "method":"POST",
      "url":"modelosBd/POA_SEGUIMIENTO/datatablets.PD.md.php", 
      "data": { 
      "tipo": tipo,
      }

    },

    "aoColumnDefs": [


      

      {

        "aTargets": (contadorCol),
        "mRender": (function (data, type, row) {

          return '<div class="col-md-12"><select class="form-select idSelectJurisdiccion" id="idSelectJurisdiccion" aria-label="Default select example"><option value="0">Selecciona una opción</option><option value="PLANTA CENTRAL">PLANTA CENTRAL</option><option value="ZONAL 1">ZONAL 1</option><option value="ZONAL 2">ZONAL 2</option><option value="ZONAL 3">ZONAL 3</option><option value="ZONAL 4">ZONAL 4</option><option value="ZONAL 6">ZONAL 6</option><option value="ZONAL 7">ZONAL 7</option><option value="ZONAL 8">ZONAL 8</option></select></div>';

        })

      },

      {
        //"aTargets": (contadorCol),
        "aTargets":(contadorCol+1), 
        "mRender": (function (data, type, row) {
  
           return '<div class="w-full flex justify-center" align="center"><button class="btn btn-primary guardar_datos"><i class="fa fa-floppy-o"></i></button></div>';

          //return '<div class="w-full flex justify-center" align="center"><button class="btn btn-warning dt-delete"><i class="fas fa-trash"></i></button></div>';

  
         }) 
  
      }  

    ]

  });

  //=====  End of Establecer datatablets  ======//

     funcion__actualizar_jurisdiccion("#"+tipo+" tbody", table, contadorCol, tipo);
  // funcion__actualizar_jurisdiccion($(".guardar_datos"),$("#idSelectJurisdiccion"));
  
  //funcion__eliminar("#" + tipo + " tbody", table, contadorCol, tipo);
  

  
}

/*======================================
=            Eliminar datos            =
======================================*/
var funcion__actualizar_jurisdiccion = function (tbody, table, contadorCol, tipo) {

  $(tbody).on("click", "button.guardar_datos", function (e) {
    
    e.preventDefault();
var row = $(this).closest('tr');
  var selectedValue = row.find('.idSelectJurisdiccion').val();
  console.log(selectedValue)

   
  let data=table.row($(this).parents("tr")).data();
 

  $this = $(this);
  let dtRow = $this.parents('tr');
    
    alertify.confirm('¿Está seguro de ACTUALIZAR?', '¿Está seguro de actualizar jurisdicción?', function () {      
 
     
      let paqueteDeDatos = new FormData();
      paqueteDeDatos.append("tipo", "actualizar_zona_jurisdiccion");
      paqueteDeDatos.append("id", data[contadorCol]);
      paqueteDeDatos.append("nombreZonal", selectedValue);

      axios({
        method: "post",
        url: "modelosBd/POA_SEGUIMIENTO/actualizacion.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {

        if (response.data.mensaje == true) {
          alertify.set("notifier", "position", "top-center");
          alertify.notify("Registro realizado correctamente", "success", 5, function () { });
          table.ajax.reload();
          
          

        }

      }).catch((error) => {
        alertify.set("notifier", "position", "top-center");
        alertify.notify("No se puede realizar la acción", "error", 5, function () { });
      });

    },
      function () {
        alertify.set("notifier", "position", "top-center");
        alertify.notify("Acción cancelada", "error", 5, function () { });
      });

  });

}

//=====  End of Eliminar datos  ======//

// var funcion__actualizar_jurisdiccion=function(parametro1,parametro2){

//   $(parametro1).click(function(e){
//     alert("SIGO AQUI")

//       var confirm= alertify.confirm('¿Está seguro de guardar los información ingresada?','¿Está seguro de guardar los información ingresada?',null,null).set('labels', {ok:'Confirmar', cancel:'Cancelar'});  

//       confirm.set({transition:'slide'});  

//       confirm.set('onok', function(){ 
      

//         var paqueteDeDatos = new FormData();

        
//         paqueteDeDatos.append("tipo","consulta_datos_exite_pdf_contratacion__publicaa");

//         let idOrganismo=$("#organismoIdPrin").val();				
//         let trimestre=$("#trimestreEvaluador").val();
        
//         paqueteDeDatos.append("declaracion_cp",$(parametro3)[0].files[0]);					
//         paqueteDeDatos.append("trimestre",trimestre);
//         paqueteDeDatos.append("idOrganismo",idOrganismo);

//         $.ajax({

//           type:"POST",
//           url:"modelosBd/inserta/seleccionaAcciones.md.php",
//           contentType: false,
//           data:paqueteDeDatos,
//           processData: false,
//           cache: false, 
//           success:function(response){
//          var elementos=JSON.parse(response);	
//          console.log("RESPONSE33333");
//          console.log(response);

//           if(response.length > 0){
//             paqueteDeDatos.append("tipo","eliminar_declaracion_publica");
            
//             $.ajax({
//               type:"POST",
//               url:"modelosBd/inserta/seleccionaAcciones.md.php",
//               contentType: false,
//               data:paqueteDeDatos,
//               processData: false,
//               cache: false, 
//               success:function(response){							
                
//                 paqueteDeDatos.append("tipo","guardar_contratacion__publica");
//                 $.ajax({
//                   type:"POST",
//                   url:"modelosBd/inserta/insertaAcciones.md.php",
//                   contentType: false,
//                   data:paqueteDeDatos,
//                   processData: false,
//                   cache: false, 
//                   success:function(response){
                    
//                     var elementos=JSON.parse(response);							
                    
//                     var mensaje=elementos['mensaje'];
                    
//                     if(mensaje==1){
      
//                       alertify.set("notifier","position", "top-center");
//                       alertify.notify("Registro realizado correctamente", "success", 5, function(){});
      
//                       $(parametro1).show();	
//                     }
                    
//                   },
//                   error:function(){
//                   }
                  
//                 });
//               },
//               error:function(){
//               }
              
//             });
//           }else{
            
//               paqueteDeDatos.append("tipo","guardar_contratacion__publica");
//               $.ajax({

//                 type:"POST",
//                 url:"modelosBd/inserta/insertaAcciones.md.php",
//                 contentType: false,
//                 data:paqueteDeDatos,
//                 processData: false,
//                 cache: false, 
//                 success:function(response){
                
//                   var elementos=JSON.parse(response);				
//                   var mensaje=elementos['mensaje'];
                  
//                   if(mensaje==1){

//                     alertify.set("notifier","position", "top-center");
//                     alertify.notify("Registro realizado correctamente", "success", 5, function(){});

//                     $(parametro1).show();	
//                   }
                  
//                 },
//                 error:function(){
//                 }
                
//               });	

//           };
                      
//         },
//         error:function(){
//         }
          
//         });		

//       });  

//         confirm.set('oncancel', function(){ //callbak al pulsar botón negativo
//         alertify.set("notifier","position", "top-center");
//         alertify.notify("Acción cancelada", "error", 1, function(){

//           $(parametro1).show();

//         }); 
//       }); 


    

//   });

// }
//=====  End of Editar datos  ======//


/*======================================
=            Eliminar datos            =
======================================*/
var funcion__eliminar = function (tbody, table, contadorCol, tipo) {

  $(tbody).on("click", "button.dt-delete", function (e) {

    e.preventDefault();

    let data = table.row($(this).parents("tr")).data();
    $this = $(this);
    let dtRow = $this.parents('tr');

    alertify.confirm('¿Está seguro de eliminar?', '', function () {

      let paqueteDeDatos = new FormData();
      paqueteDeDatos.append("tipo", tipo);
      paqueteDeDatos.append("id", data[contadorCol]);
      paqueteDeDatos.append("nombreZonal", nombreZonal);

      axios({
        method: "post",
        url: "modelosBd/POA_SEGUIMIENTO/actualizacion.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
      }).then((response) => {

        if (response.data.mensaje == true) {
          alertify.set("notifier", "position", "top-center");
          alertify.notify("Registro realizado correctamente", "success", 5, function () { });
          table.row(dtRow[0].rowIndex - 1).remove().draw(false);
          
        }

      }).catch((error) => {
        alertify.set("notifier", "position", "top-center");
        alertify.notify("No se puede realizar la acción", "error", 5, function () { });
      });

    },
      function () {
        alertify.set("notifier", "position", "top-center");
        alertify.notify("Acción cancelada", "error", 5, function () { });
      });

  });

}

//=====


var datatabletsDesarollo2=function(tabla,tipo){

  
  /*==================================================
  =            Obtener número de columnas            =
  ==================================================*/

  let contadorCol=$('#'+tipo+' > thead > tr > th').length;
  let contadorRestar=contadorCol - 1;

  //=====  End of Obtener número de columnas  ======/
  
  /*=================================================================
  =            Construir columnas para editar y eliminar            =
  =================================================================*/
  //$('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Editar</center></th>');
  $('#'+tipo).find('th').eq(contadorRestar).after('<th COLSPAN=1><center>Eliminar</center></th>');
  //=====  End of Construir columnas para editar y eliminar  ======/
  
  /*==============================================
  =            Establecer datatablets            =
  ==============================================*/
  
  var table =$(tabla).DataTable({
  
    "language":{
  
      "sProcessing":     "Procesando...",
      "sLengthMenu":     "Mostrar MENU registros",
      "sZeroRecords":    "No se encontraron resultados",
      "sEmptyTable":     "Ningún dato disponible en esta tabla",
      "sInfo":           "Mostrando registros del START al END de un total de TOTAL",
      "sInfoEmpty":      "Mostrando registros del 0 al 0 de un total de 0",
      "sInfoFiltered":   "(filtrado de un total de MAX registros)",
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
      {
        
        extend: 'excel',
        className: 'btn-excel',
        text: '<button  class="buttonD" ><i class="fas fa-file-excel" style="color: #277c41; font-size: 36px;" ></i></button>',

    
        

    },
  
    {
      extend: 'pdf',
      text: '<button  class="buttonD" ><i class="fas fa-file-pdf " style="color: #BF0D0D; font-size: 36px;"></i></button>',
     
      orientation: 'landscape',
      customize:function(doc) {

          doc.defaultStyle.fontSize = 6;

          doc.styles.title = {
              color: 'black',
              fontSize: '6',
              alignment: 'center',
              margin:'0'                                                
          }
          doc.styles.tableHeader = {

            fillColor:'#311b92',
            fontSize: '6',
            color:'white',
            alignment:'center',
                            
        }
        

        }

      }
  ],
  
    "bLengthChange": false,
    "pagingType": "full_numbers",
    "Paginate": true,
    "pagingType": "full_numbers",
    "retrieve": true, 
    "paging": true, 
    "pageLength":4,
    

  
    "ajax":{
  
      "method":"POST",
      "url":"modelosBd/POA_SEGUIMIENTO/datatablets.PD.md.php", 
      "data": { 
        "tipo": tipo,

        "idcomponentePAID": $("#JuegosNacionalesIDCOMPONENTE").val(),
        "idrubroPAID": $("#JuegosNacionalesIDRUBRO").val()
      }  
  
    },
  
    "aoColumnDefs":[
      
      /*{
        
        "aTargets":contadorCol, 
        "mRender": (function (data, type, row) {
  
          return '<div class="w-full flex justify-center" align="center"><button class="btn btn-success dt-editar"><i class="fas fa-pen"></i></button></div>';
  
         }) 
  
      },*/
  
      {
        
        "aTargets":(contadorCol), 
        "mRender": (function (data, type, row) {
  
          return '<div class="w-full flex justify-center" align="center"><button class="btn btn-warning dt-delete"><i class="fas fa-trash"></i></button></div>';
  
         }) 
  
      }   
  
    ]
  
  });
  
 //=====  End of Establecer datatablets  ======//
  
  funcion__eliminar("#"+tipo+" tbody",table,contadorCol,tipo);
}
  

  
  /*======================================
  =            Eliminar datos            =
  ======================================*/
  var funcion__eliminar=function(tbody,table,contadorCol,tipo){



  $(tbody).on("click","button.dt-delete",function(e){

    alert("hhhhh")

  e.preventDefault();
  
  let data=table.row($(this).parents("tr")).data();


  $this = $(this);
  let dtRow = $this.parents('tr');
  
  alertify.confirm('Eliminar', '¿Está seguro de eliminar?', function(){ 
  
  let paqueteDeDatos = new FormData();
  paqueteDeDatos.append("tipo",tipo);
  paqueteDeDatos.append("id",data[contadorCol]);

  console.log(data[contadorCol])
  
  axios({
    method: "post",
    url: "modelosBd/POA_SEGUIMIENTO/actualizacion.md.php",
    data: paqueteDeDatos,
    headers: { "Content-Type": "multipart/form-data" },
  }).then((response) => {
  
    if (response.data.mensaje==true) {
      alertify.set("notifier","position", "top-center");
      alertify.notify("Registro realizado correctamente", "success", 1, function(){});
      table.row(dtRow[0].rowIndex-1).remove().draw( false );

     

    }
  
  }).catch(( error ) => {
    alertify.set("notifier","position", "top-center");
    alertify.notify("No se puede realizar la acción", "error", 2, function(){});
  });
  
  },

  function(){ 
    alertify.set("notifier","position", "top-center");
    alertify.notify("Acción cancelada", "error", 2, function(){});
  });
  
  });
  
  }
  
  //=====  End of Eliminar datos  ======//

