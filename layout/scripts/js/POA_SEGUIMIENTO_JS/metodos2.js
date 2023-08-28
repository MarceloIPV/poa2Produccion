

crear_DataTable2("dt_segui_indicadores")


function crear_DataTable2(idDatatable){

    $("#"+idDatatable + " thead").remove();
  
    const myTable = document.getElementById(idDatatable);
  
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
  }


  var agregarDatatablets=function(btnAccion,idDatatable,nombreArchivo,archivo,datos){

    $(btnAccion).click(function (e){
      

      datatabletsSeguimientoVacio($("#"+idDatatable+""), idDatatable,nombreArchivo,archivo,datos);
  
    });
  
  }


  function crear_DataTable(idDatatable,nombreDatatable,listaTitulos){

    $("#"+idDatatable + " thead").remove();
  
    const myTable = document.getElementById(idDatatable);
  
    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
  
    // create table header cells
    for (let i = 0; i < listaTitulos.length; i++) {
      const th = document.createElement("th");
      th.textContent = listaTitulos[i];
      tr.appendChild(th);
    }
  
    thead.appendChild(tr);
  
    
    myTable.insertAdjacentElement("beforeend", thead);
    
  
    nombreDatatable($("#"+idDatatable+""), idDatatable);
  
  }


 


 /*=====================================
          =           Honorarioss           =
          =====================================*/



  var checkeds__recorridos__general__Honorarios=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

    $(parametro2).click(function(e){
  
      $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
  
        var condicion = $(parametro2).is(":checked");
  
        $(parametro7).html(' ');
        console.log("parametro7");
        console.log(parametro7);
        if ($(parametro3).val()!=0) {
  
            $(parametro2).prop("checked", false);
            alertify.set("notifier","position", "top-center");
          alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
  
        }
  
        if (condicion) {
  
          $(parametro3).val(1);
  
          let pestana1="";
          let pestana2="";
          let pestana3="";
  
  
          if (parametro4=="primerTrimestre") {
            rotulos = ['Enero', 'Febrero', 'Marzo'];
          }else if (parametro4=="segundoTrimestre") {
            rotulos = ['Abril', 'Mayo', 'Junio'];
          }else if (parametro4=="tercerTrimestre") {
            rotulos = ['Julio', 'Agosto', 'Septiembre'];
          }else if (parametro4=="cuartoTrimestre") {
            rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
          }
  
          let totalTotales=0;
  
  
          if (parametro8[7]==null) {
  
            totalTotales=parseFloat(parametro8[5]) - 0;
  
          }else{
  
            totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);
  
          }
  
          pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de respaldo<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';
  
          pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';
  
          pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	
  
          /*=============================
          =            Función acordión   =
          =============================*/
          
          acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
          
          /*=====  End of Función acordión  ======*/
  
          if (parametro13==125) {
  
            $(".otros__dados__documentos").text('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
  
          }else if (parametro13==126) { 
  
            $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');
  
          }else if (parametro13==158) { 
  
            $(".otros__dados__documentos").text('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados.');
  
          }else if (parametro13==425) { 
  
            $(".otros__dados__documentos").text('Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros, copia del contrato');
  
          }
  
  
          /*==============================================
          =            Funcion maximo digitos            =
          ==============================================*/
          
          var longitudCaracteres=function(parametro1,parametro2,counter){
  
          $(parametro1).keyup(function(e){
  
             if($(this).val().length > parametro2){
  
                  $(this).val($(this).val().substr(0, parametro2));
  
                  counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
  
                  counter.css("color","red");
  
              }else{
  
                // counter.html("<strong>"+$(this).val().length +"</strong>");
  
                counter.css("color","black");
  
                counter.css("font-size","10px");
  
              }
  
  
           });
  
          }				
  
          longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
          longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
          longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
          
          /*=====  End of Funcion maximo digitos  ======*/
          
  
  
          /*==================================================
          =            Obtener valores efectuados            =
          ==================================================*/
          
          var valorEfectuado=$(".efectuadorMontos").val();
  
          $("#valorAsignado__meses").val(valorEfectuado);			
          
          /*=====  End of Obtener valores efectuados  ======*/
          
          /*===============================================
          =            Removiendo obligatorios            =
          ===============================================*/
          
  
          
          if (parametro8[6]!=null && parametro8[6]!="") {
  
            $(".fila__facturas"+parametro8[0]).hide();
            $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
            $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
            $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
            $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
            $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
            $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
  
            $("#facturas"+parametro8[0]).removeClass('obligatorios');
            $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
            $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
            $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
            $("#monto"+parametro8[0]).removeClass('obligatorios');
            $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');
  
            $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');
  
          }
          
          
          if (parametro8[6]!=null && parametro8[6]!="") {
  
            $(".fila__facturas__2"+parametro8[0]).hide();
            $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
            $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
            $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
            $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
            $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
            $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
  
            $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
            $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
            $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
            $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
            $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
            $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
            $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
          }				
          
  
  
          
          if (parametro8[6]!=null && parametro8[6]!="") {
  
            $(".fila__facturas__3"+parametro8[0]).hide();
            $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
            $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
            $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
            $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
            $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
            $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
  
            $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
            $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
            $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
            $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
            $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
            $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
            $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
          }				
          
          
          
          /*=====  End of Removiendo obligatorios  ======*/
          
          if (parametro12==1) {
  
            $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');
  
            $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');
  
            $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');
  
  
          }
          
          /*============================================
          =            Funciones necesarias            =
          ============================================*/
  
          funcion__solo__numero__montos($(".solo__numeros__montos"));	
          funcion__solo__numero($(".solo__numeros"));
  
          funcion__cambio__de__numero($("#monto"+parametro8[0]));
          funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
          funcion__cambio__de__numero($("#monto__3"+parametro8[0]));
  
          funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
          funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
          funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));
  
          funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);
  
          funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);
  
          funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
          
          funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
  
          funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
  
          funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
          
          
          /*=====  End of Funciones necesarias  ======*/
  
          /*====================================
          =            Click al dar            =
          ====================================*/
          
  
          $("#monto"+parametro8[0]).on('input', function () {
  
            funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
  
          });					
          
          
  
          $("#monto__2"+parametro8[0]).on('input', function () {
  
            funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
  
          });					
          
  
  
          $("#monto__3"+parametro8[0]).on('input', function () {
  
            funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
  
          });					
          
          
          /*=====  End of Click al dar  ======*/
          
  
          /*============================================
          =            Variables utilizadas            =
          ============================================*/
          
          let contado=0;
          let contado2=0;
          
          /*=====  End of Variables utilizadas  ======*/

          /*============================================
          =            Filas Agregadas Honorarios    =
          ============================================*/


          $("#Febrero-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__2"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
                funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
            
    
                $("#eliminarOtros__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')
    
                  funcion__agregar__filas($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	

          $("#Mayo-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__2"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
                funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
            
    
                $("#eliminarOtros__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')
    
                  funcion__agregar__filas($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	

          $("#Agosto-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__2"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
                funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
            
    
                $("#eliminarOtros__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')
    
                  funcion__agregar__filas($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	
          
          $("#Noviembre-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__2"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
                funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
            
    
                $("#eliminarOtros__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado__2"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')
    
                  funcion__agregar__filas($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });		



          
           
            for(i=0;i<4;i++){

              contado2++;
             
              let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
              let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
             
              
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){

               	
            
                funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
            
    
                $("#eliminarOtros"+contado2).click(function(event) {

                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')

                  funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
        

					
						

          $("#Enero-tab").on('click', function () {

            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
					  let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            $(".col__otros__habili"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){

               	
            
                funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
            
    
                $("#eliminarOtros"+contado2).click(function(event) {

                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')

                  funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	

          $("#Abril-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
					  let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            $(".col__otros__habili"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){

               	
            
                funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
            
    
                $("#eliminarOtros"+contado2).click(function(event) {

                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')

                  funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	

          $("#Julio-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
					  let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            $(".col__otros__habili"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){

               	
            
                funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
            
    
                $("#eliminarOtros"+contado2).click(function(event) {

                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')

                  funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	
          
          $("#Octubre-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
					  let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            $(".col__otros__habili"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){

               	
            
                funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
            
    
                $("#eliminarOtros"+contado2).click(function(event) {

                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
    
                  funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
    
                });	
    
                $("#guardarOtros__agregado"+contado2).click(function(event) {
    
                  let idContador=$(this).attr('idContador');
                  let idPrincipal=$(this).attr('idPrincipal');
                  let rotulo=$(this).attr('rotulo');
                  let idContador2=$(this).attr('idContador2');
                  nombreArchivo=$(this).attr('nombre')

                  funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
    
    
                });	
  
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });		




          $("#Marzo-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__3"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
           
    
                funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

						$("#eliminarOtros__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');

							funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

						});	

						$("#guardarOtros__agregado__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');
							let rotulo=$(this).attr('rotulo');
							let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')
							funcion__agregar__filas($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


						});	
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	

          $("#Junio-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__3"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
           
    
                funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

						$("#eliminarOtros__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');

							funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

						});	

						$("#guardarOtros__agregado__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');
							let rotulo=$(this).attr('rotulo');
							let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')
							funcion__agregar__filas($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


						});	
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	

          $("#Septiembre-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__3"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
           
    
                funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

						$("#eliminarOtros__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');

							funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

						});	

						$("#guardarOtros__agregado__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');
							let rotulo=$(this).attr('rotulo');
							let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')
							funcion__agregar__filas($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


						});	
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });	
          
          $("#Diciembre-tab").on('click', function () {
           
            let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
            
            $(".col__otros__habili__3"+idContador +" td").remove();
  
            for(i=0;i<4;i++){

              contado2++;
    
              
              
              var spanArchivo = ""
              if(i==0){
                spanArchivo="Hoja de Vida "
              }else if(i==1)
              {
                spanArchivo="Documentos Contratación "
              }else if(i==2)
              {
                spanArchivo="RUC "
              }else if(i==3)
              {
                spanArchivo="OTROS "
              }
  
              if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
              }
  
              if($("#datosHonorarios").val()==""){
  
           
    
                funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

						$("#eliminarOtros__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');

							funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

						});	

						$("#guardarOtros__agregado__3"+contado2).click(function(event) {

							let idContador=$(this).attr('idContador');
							let idPrincipal=$(this).attr('idPrincipal');
							let rotulo=$(this).attr('rotulo');
							let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')
							funcion__agregar__filas($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


						});	
  
                
              }
                
  
  
  
                  $("#datosHonorarios").val("")
              }
          });		
          
            




            
          
          /*=====  End of Filas Agregadas  ======*/
  
        	
          
          /*===================================
          =            Guardadores            =
          ===================================*/
  
          $("#guardarFac"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
  
            $(this).hide();
  
            let contador__n=$("#autorizacion"+idContador).val();
            let contador__n2=$("#numeroRuc"+idContador).val();
  
            if (contador__n.length>=10 && contador__n2.length>=13) {
  
              funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));
  
            }else{
  
              alertify.set("notifier","position", "top-center");
              alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});
  
              $(this).show();
  
  
            }
  
  
          });	
  
          $("#guardarFac__2"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
  
            $(this).hide();
  
            
            let contador__n=$("#autorizacion__2"+idContador).val();
            let contador__n2=$("#numeroRuc__2"+idContador).val();
  
            if (contador__n.length>=10 && contador__n2.length>=13) {
  
              funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));
  
            }else{
  
              alertify.set("notifier","position", "top-center");
              alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});
  
              $(this).show();
  
  
            }
  
          });	
  
  
          $("#guardarFac__3"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
  
            $(this).hide();
  
            
            let contador__n=$("#autorizacion__3"+idContador).val();
            let contador__n2=$("#numeroRuc__3"+idContador).val();
  
            if (contador__n.length>=10 && contador__n2.length>=13) {
  
              funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));
  
            }else{
  
              alertify.set("notifier","position", "top-center");
              alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});
  
              $(this).show();
  
  
            }
  
          });	
  
  
          $("#guardarOtrosF"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
          });	
          $("#guardarOtrosF2"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
          });	
  
  
  
          $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
          });	
  
  
  
  
          $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));
  
  
          });	
  
  
  
          /*=====  End of Guardadores  ======*/		
  
          /*===========================================
          =            Guardados generales            =
          ===========================================*/
          
          $("#guardarAdministrativos"+parametro8[0]).click(function(e) {

           

            var validador = validacionRegistro( $(".obligatorioOtros__1"));
	          validacionRegistroMostrarErrores( $(".obligatorioOtros__1"));

            var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
	          validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));

            if (validador == false && validador2 == false) {

              alertify.set("notifier", "position", "top-center");
              alertify.notify("Campos obligatorios", "error", 5, function () { });
          
              $(parametro1).show();
          
            } else {
              

            
  
            let idContador=$(this).attr('idContador');
            let idFila=$("#idPrincipal"+idContador).val();
  
            let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);
  
            if (mensualito==0) {
  
              $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
              $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
              $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
              $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
              $("#monto"+idContador).removeClass('obligatorio__'+idContador);
              $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);
  
              $("#facturas"+idContador).removeClass('obligatorios');
              $("#fechaDocumento"+idContador).removeClass('obligatorios');
              $("#numeroRuc"+idContador).removeClass('obligatorios');
              $("#autorizacion"+idContador).removeClass('obligatorios');
              $("#monto"+idContador).removeClass('obligatorios');
              $("#numeroFactura"+idContador).removeClass('obligatorios');
  
              $("#cantidad__bien__1"+idContador).removeClass('obligatorios');
  
            }				
  
            $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
            $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);
  
            $(this).hide();
  
            if (parametro12==1) {
  
              funcion__guardado__matricez($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));
  
            }else{
  
              funcion__guardado__matricez($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));
  
            }
  
          } 
  
          }); 
  
  
          $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {
  
            let idContador=$(this).attr('idContador');
            let idFila=$("#idPrincipal"+idContador).val();
  
            let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);
  
            if (mensualito==0) {
  
              $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
              $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
              $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
              $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
              $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
              $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);
  
              $("#facturas__2"+idContador).removeClass('obligatorios__2');
              $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
              $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
              $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
              $("#monto__2"+idContador).removeClass('obligatorios__2');
              $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');
  
              $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
              
            }
  
            $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
            $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);
  
            $(this).hide();
  
            if (parametro12==1) {
  
              funcion__guardado__matricez($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));
  
            }else{
  
  
              funcion__guardado__matricez($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));
  
            }
  
            
  
          }); 
  
          $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {
  
            let idContador=$(this).attr('idContador');
            let idFila=$("#idPrincipal"+idContador).val();
  
            let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);
  
            if (mensualito==0) {
  
              $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
              $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
              $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
              $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
              $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
              $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);
  
              $("#facturas__3"+idContador).removeClass('obligatorios__3');
              $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
              $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
              $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
              $("#monto__3"+idContador).removeClass('obligatorios__3');
              $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');
  
              $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
              
            }
  
  
            $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
            $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);
  
            $(this).hide();
  
            if (parametro12==1) {
  
              funcion__guardado__matricez($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));
  
            }else{
  
              funcion__guardado__matricez($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));
  
            }
  
            
  
          }); 				
          
          /*=====  End of Guardados generales  ======*/
          
  
  
        }else{
  
          $(parametro3).val(0);
  
          $(parametro7).html(' ');
  
        }
  
      });
  
    });
  
  }




 /*=====================================
          =           tecnicos__matenimientos           =
          =====================================*/




  
  var checkeds__recorridos__general__tecnicos__matenimientos__escenarios=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13,parametro14){

    $(parametro2).click(function(e){
  
      $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
  
        var condicion = $(parametro2).is(":checked");
  
        $(parametro7).html(' ');
  
        if ($(parametro3).val()!=0) {
  
            $(parametro2).prop("checked", false);
            alertify.set("notifier","position", "top-center");
          alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
  
        }
  
        if (condicion) {
  
          $(parametro3).val(1);
  
          let pestana1="";
          let pestana2="";
          let pestana3="";
  
  
          if (parametro4=="primerTrimestre") {
            rotulos = ['Enero', 'Febrero', 'Marzo'];
          }else if (parametro4=="segundoTrimestre") {
            rotulos = ['Abril', 'Mayo', 'Junio'];
          }else if (parametro4=="tercerTrimestre") {
            rotulos = ['Julio', 'Agosto', 'Septiembre'];
          }else if (parametro4=="cuartoTrimestre") {
            rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
          }
          
          pestana1='<a href="documentos/formatos/Formato de Informe OD Seg y evaluacion mantenimiento CAID 2023.docx" download center><button type="button" class="btn btn-primary" center>Descargar Formato</button></a><table class="filaIndicadora__administra'+parametro8[0]+'"><thead><tr class="fila__medallas__'+parametro8[0]+'"><th rowspan="2" colspan="1" style="display:none!important;"><center>Evento tarea<br>/ejecutado</center></th><th rowspan="2" colspan="1" style="display:none!important;"><center>Predicción<br>de resultados</center></th><th rowspan="1" colspan="5" class="resultado__col"><center>RESULTADOS ALCANZADOS</center></th><th rowspan="2" colspan="1"><center>Analisis técnico<br>de la<br>participación</center></th><th rowspan="2" colspan="1" class="oculto__avances" style="display:none!important;"><center>% Porcentaje<br>avance</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><th><center>Oro</center></th><th><center>Plata</center></th><th><center>Bronce</center></th><th><center>Total<br>medallas</center></th><th class="oculto__en__alto"><center>4TO al 8VO</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><td style="display:none!important;"><center><select id="eventoTa'+parametro8[0]+'" name="eventoTa'+parametro8[0]+'" class="ancho__total__input"><option value="no">No</option><option value="si">Si</option></select></center></td><td style="display:none!important;"><center><textarea id="prediccionR'+parametro8[0]+'" name="prediccionR'+parametro8[0]+'" style="font-size:11px!important;" class="prediccionR'+parametro8[0]+' ancho__total__textareas"></textarea></center></td><td><center><input type="text" id="oro'+parametro8[0]+'" name="oro'+parametro8[0]+'" value="0" class="oro'+parametro8[0]+' sumas__medallas__'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><input type="text" id="plata'+parametro8[0]+'" name="plata'+parametro8[0]+'" value="0" class="plata'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="bronce'+parametro8[0]+'" value="0" name="bronce'+parametro8[0]+'" class="bronce'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="totalMedallas'+parametro8[0]+'" name="totalMedallas'+parametro8[0]+'" value="0" class="totalMedallas'+parametro8[0]+' ancho__total__input obligatorios solo__numeros" readonly=""/></center></td><td><center><input type="text" id="cuartoOctavo'+parametro8[0]+'" name="cuartoOctavo'+parametro8[0]+'" value="0" class="oculto__en__alto cuartoOctavo'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><textarea id="analisisPar'+parametro8[0]+'" name="analisisPar'+parametro8[0]+'" style="font-size:11px!important;" class="analisisPar'+parametro8[0]+' ancho__total__textareas obligatorios"></textarea></center></td><td style="display:none!important;"><center><input type="text" id="porcentajeA__medallas'+parametro8[0]+'" name="porcentajeA__medallas'+parametro8[0]+'" class="porcentajeA__medallas'+parametro8[0]+' ancho__total__input solo__numeros"/></center></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__no'+parametro8[0]+'"><th rowspan="1" colspan="2" class="fecha__inicio'+parametro8[0]+'">Fecha de inicio</th><th rowspan="1" colspan="2" class="fecha__fin'+parametro8[0]+'">Fecha fin</th><th rowspan="2" colspan="1" class="porcentaje__filas'+parametro8[0]+'">% avance</th></tr><tr class="fila__no'+parametro8[0]+'"><th>Planificado</th><th>Ejecutado</th><th>Planificado</th><th>Ejecutado</th></tr></thead></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tbody><tr class="fila__no'+parametro8[0]+'"><td><center><input type="date" id="planificadoInicio'+parametro8[0]+'" name="planificadoInicio'+parametro8[0]+'" class="planificadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><input type="date" id="ejecutadoInicio'+parametro8[0]+'" name="ejecutadoInicio'+parametro8[0]+'" class="ejecutadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><input type="date" id="planificadoFin'+parametro8[0]+'" name="planificadoFin'+parametro8[0]+'" class="planificadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td><center><input type="date" id="ejecutadoFin'+parametro8[0]+'" name="ejecutadoFin'+parametro8[0]+'" class="ejecutadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td style="display:flex;"><input type="text" id="porcentajeA'+parametro8[0]+'" name="porcentajeA'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros"/></td></tr><tr class="fila__alto__ren'+parametro8[0]+'" style="display:none!important;"><td colspan="1"><input type="text" id="tipoEventos'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="2"><input type="text" id="eventoTarea__ejecutado'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="nivel'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="totalEjecutados__al'+parametro8[0]+'" class="ancho__total__input solo__numeros"/></td></tr></table><table><tr class="fila__capacitas'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__2'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__3'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'" style="display:none!important;"><td colspan="3"><input type="text" id="mujeresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/><td><input type="text" id="hombresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/></td><td><input type="text" id="totalB'+parametro8[0]+'" class="enlaces__b ancho__total__input" value="0" readonly=""/></td></td></tr></table><table class="tipo__organizacion__evento'+parametro8[0]+'"><tbody><tr class="filaIndicadora__administra'+parametro8[0]+'"><td>Seleccione tipo de organización del evento</td><td><select id="tipoParticipas'+parametro8[0]+'" class="ancho__total__input obligatorios" idContador="'+parametro8[0]+'"><option value="">--Seleccione tipo organización del evento</option><option value="participacion">Participación</option><option value="organizacion">Organización</option></select><input id="rucOrganizacion'+parametro8[0]+'" class="ancho__total__input solo__numeros" style="display:none!important;" placeholder="Ingrese ruc organización"/><input id="nombreOrganizacion'+parametro8[0]+'" class="ancho__total__input" placeholder="Ingrese nombre organización" style="display:none!important;"/></td></tr></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__alto__ren'+parametro8[0]+'"><th colspan="11"><center>Resultados</center></th><th><a class="btn btn-warning" id="agregarResuls'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><th style="width:10px!important;"><center>N-</center></th><th><center>Deporte</center></th><th><center>Modalidad</center></th><th><center>Tipo<br>de<br>prueba</center></th><th><center>Marca<br>alcanzada</center></th><th><center>Convocatoria<br>a juegos<br>disciplina<br>/discapacidad</center></th><th><center>Género</center></th><th><center>Categoría deportiva</center></th><th><center>Nombres</center></th><th><center>Apellidos</center></th><th><center>Provincia<br>representación</center></th><th><center>Acciones</center></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><td>'+1+'</td><td colspan="1"><select id="deportes'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td colspan="1"><input type="text" id="modalidad'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="genero'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="nombres'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="apellidos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="provinciaRe'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td><nav class="btn-pluss-wrapper fila__otrosHabilitantes'+parametro8[0]+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarFila__parE'+parametro8[0]+'" name="guardarFila__parE'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFila__parE"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li></ul></div></nav></td></tr><tbody class="filas__resultados'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="documentos__centrados"><th colspan="4"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;" class="otros__altos__modificas">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"></tr></tbody><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="2" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="3"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="5"><center><a class="btn btn-primary" id="guardarTecnicos'+parametro8[0]+'" name="guardarTecnicos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';			
      
  
          /*=============================
          =            Función acordión   =
          =============================*/
          
          acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7,0);
          
          /*=====  End of Función acordión  ======*/
  
  
          if (parametro14==3 || parametro14==80) {
  
            $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, informe médico y disciplinario de atletas, registro fotográfico, registro de resultados emitidos por el organizador del evento');
  
          }else if (parametro14==2) {
  
            $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, registro fotográfico');
  
          }else if (parametro14==2) {
  
            $(".otros__altos__modificas").html('Listado de participantes, registro fotográfico');
  
          }else if(parametro14==25){
  
            $(".otros__altos__modificas").html('Informe de cumplimiento trimestral rehabilitación y readecuación, contratos, planillas generadas, cronograma de ejecución, solicitudes de pago, facturas, CUR de pagos, Garantías Técnicas, planos AS Built, Actas de recepción provisional y / o definitiva, registro fotográfico antes y después de la intervención');
  
          }else if(parametro14==105){
  
            $(".otros__altos__modificas").html('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
  
  
          }else if(parametro14==1){
  
            $(".otros__altos__modificas").html('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados');
  
  
          }
  
  
          
          var longitudCaracteres=function(parametro1,parametro2,counter){
  
          $(parametro1).keyup(function(e){
  
             if($(this).val().length > parametro2){
  
                  $(this).val($(this).val().substr(0, parametro2));
  
                  counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
  
                  counter.css("color","red");
  
              }else{
  
                // counter.html("<strong>"+$(this).val().length +"</strong>");
  
                counter.css("color","black");
  
                counter.css("font-size","10px");
  
              }
  
  
           });
  
          }				
  
          longitudCaracteres($("#rucOrganizacion"+parametro8[0]),13,$(".counter__Cedula"));
  
  
          /*==============================
          =            Fechas            =
          ==============================*/
          
          $("#planificadoInicio"+parametro8[0]).val(parametro8[8]);
          $("#planificadoFin"+parametro8[0]).val(parametro8[9]);
  
          
          funcion__solo__numero($(".solo__numeros"));
  
          /*=====  End of Fechas  ======*/
  
  
          /*===========================================
          =            Fechas relacionales            =
          ===========================================*/
  
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]));
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]));
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoFin"+parametro8[0]));
  
          // funcion_porcentajes__fechas__porcentajes($("#ejecutadoFin"+parametro8[0]),$("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]),$("#porcentajeA"+parametro8[0]));
          
          /*=====  End of Fechas relacionales  ======*/
  
  
          /*==================================================
          =            Select tipo organizaciones            =
          ==================================================*/
  
          $("#tipoParticipas"+parametro8[0]).change(function(e) {
  
            let idContador=$(this).attr('idContador');
  
            if ($(this).val()=="participacion") {
  
              $("#rucOrganizacion"+idContador).removeAttr('style');
              $("#nombreOrganizacion"+idContador).removeAttr('style');
  
            }else{
              $("#rucOrganizacion"+idContador).attr('style','display:none;');
              $("#nombreOrganizacion"+idContador).attr('style','display:none;');
  
            }
  
  
          }); 				
          
          /*=====  End of Select tipo organizaciones  ======*/
          
          if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
  
            $(".porcentaje__filas"+parametro8[0]).hide();
            $("#porcentajeA"+parametro8[0]).hide();
            $("#porcentajeA"+parametro8[0]).val(0);
  
          }
  
  
          if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
            
          }else{
            $(".tipo__organizacion__evento"+parametro8[0]).remove();
          }
  
          if (parametro14==2 || parametro14==80) {
  
            // $(".fila__no"+parametro8[0]).remove();
  
  
          }else{
        
            $(".fila__medallas__"+parametro8[0]).remove();
          }
  
          if (parametro14==1) {
  
            $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO  DE LA CAPACITACIÓN');
            $(".fecha__fin"+parametro8[0]).text('FECHA FIN DE LA CAPACITACIÓN');
  
          }
  
          if (parametro14==3 || parametro14==2 || parametro14==80) {
  
            $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO ');
            $(".fecha__fin"+parametro8[0]).text('FECHA FIN');
  
            deportes__function($("#deportes"+parametro8[0]));
            provincias__function($("#provinciaRe"+parametro8[0]));
  
          }else{
  
            $(".fila__alto__ren"+parametro8[0]).remove();
  
          }
  
          if (parametro14==2 || parametro14==80) {
  
            $(".fila__alto__ren"+parametro8[0]).remove();
  
          }
  
          if (parametro14==2 || parametro14==3 || parametro14==4 || parametro14==80) {
  
            $(".fila__capacitas"+parametro8[0]).append('<th rowspan="1" colspan="5">BENEFICIARIOS</th>');
  
            $(".fila__capacitas__2"+parametro8[0]).append('<th rowspan="1" colspan="3">MUJERES</th><th rowspan="1" colspan="1">HOMBRES</th><th rowspan="1" colspan="1">TOTAL</th>');
  
            $(".fila__capacitas__3"+parametro8[0]).removeAttr('style');
  
            funcion__sumador__real($("#mujeresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
            funcion__sumador__real($("#hombresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
  
            funcion__solo__numero($(".solo__numeros"));
  
            funcion__cambio__de__numero($("#mujeresB"+parametro8[0]));			
            funcion__cambio__de__numero($("#hombresB"+parametro8[0]));	
  
            funcion__cambio__de__numero($("#oro"+parametro8[0]));	
            funcion__cambio__de__numero($("#plata"+parametro8[0]));	
            funcion__cambio__de__numero($("#bronce"+parametro8[0]));	
  
  
            funcion__sumador__real($("#oro"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
            funcion__sumador__real($("#plata"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
            funcion__sumador__real($("#bronce"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
  
          }
  
  
          /*=====================================
          =            Agretar otros            =
          =====================================*/
  
  
          $("#guardarFila__parE"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarFila__parE"+idContador),[idContador,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
  
  
          });	
  
          let contado3=1;
  
          if (parametro14==80) {
  
            $(".oculto__en__alto").hide();
  
            // $(".resultado__col").removeAttr('colspan');
            // $(".resultado__col").attr('colspan','4');
  
          }
  
  
          $("#agregarResuls"+parametro8[0]).click(function(event) {
  
            contado3++;
  
            let idContador=$(this).attr('idContador');
  
            funcion__agregarFilas($(".filas__resultados"+idContador),['<td>'+contado3+'</td><td colspan="1"><select id="deportes'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td colspan="1"><input type="text" id="modalidad'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="genero'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="nombres'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="apellidos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="provinciaRe'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td><nav class="btn-pluss-wrapper otrosHabilitantes'+contado3+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado3+'" name="guardarOtros__agregado__2'+contado3+'" idPrincipal="'+idContador+'" idContador="'+contado3+'" class="editar__ides" idContador2="'+contado3+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarResul'+contado3+'" name="eliminarResul'+contado3+'" idPrincipal="'+contado3+'" idContador="'+idContador+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td>'],idContador,contado3,"resultados__eventos");		
  
              $("#eliminarResul"+contado3).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__resultados__eventos"+idContador+idPrincipal));
  
              });	
  
  
  
              $("#guardarOtros__agregado__2"+contado3).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                $(this).hide();
  
                funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
  
  
              });							
  
              deportes__function($("#deportes"+contado3));
              provincias__function($("#provinciaRe"+contado3));
  
  
          });	
          
  
  
          $("#guardarOtrosF"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtrosF"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro12,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
          });	
  
          let contado2=0;
  
  
        //--------------------------------------------------

          

          for(i=0;i<3;i++){

            contado2++;
  
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
          
            $(".col__otros__habili__2"+idContador +" td").remove();
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="INFORME EJECUCIÓN DE REHABILITACIÓN Y/O MANTENIMIENTOS PLANIFICADOS"
            }else if(i==1)
            {
              spanArchivo="RESPALDOS DEL INFORME "
            }else if(i==2)
            {
              spanArchivo="OTROS "
            }

            funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
  
            $("#eliminarOtros"+contado2).click(function(event) {

              let idContador=$(this).attr('idContador');
              let idPrincipal=$(this).attr('idPrincipal');

              funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));

            });	

            $("#guardarOtros__agregado"+contado2).click(function(event) {

              let idContador=$(this).attr('idContador');
              let idPrincipal=$(this).attr('idPrincipal');
              let rotulo=$(this).attr('rotulo');
              let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')

              funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro12,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


            });	

            }
          
          /*=====  End of Agretar otros  ======*/
  
          /*=========================================
          =            Guardar generales            =
          =========================================*/
          
          
          $("#guardarTecnicos"+parametro8[0]).click(function(e) {
  
            let idContador=$(this).attr('idContador');
  
            let rucOrganizacion=$("#rucOrganizacion"+idContador).val();
  
            let nombreOrganizacion=$("#nombreOrganizacion"+idContador).val();
  
            let tipoParticipas=$("#tipoParticipas"+idContador).val();
  
            $(this).hide();
  
            if (parametro14==3 || parametro14==4) {
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,parametro4,$("#organismoIdPrin").val(),$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#hombresB"+idContador).val(),$("#mujeresB"+idContador).val(),$("#totalB"+idContador).val(),$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#tipoEventos"+idContador).val(),$("#eventoTarea__ejecutado"+idContador).val(),$("#nivel"+idContador).val(),$("#totalEjecutados__al"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
  
            }else if (parametro14==2 || parametro14==80) {
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),$("#eventoTa"+idContador).val(),$("#prediccionR"+idContador).val(),$("#oro"+idContador).val(),$("#plata"+idContador).val(),$("#bronce"+idContador).val(),$("#totalMedallas"+idContador).val(),$("#cuartoOctavo"+idContador).val(),$("#analisisPar"+idContador).val(),$("#porcentajeA__medallas"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas,$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val()],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
            }else{
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
            }
  
  
          }); 
          
          
          /*=====  End of Guardar generales   ======*/
          
          
  
        }else{
  
          $(parametro3).val(0);
  
          $(parametro7).html(' ');
  
        }
  
      });
  
    });
  
  }

 /*==================================================
          =           tecnicos__Alto Rend           =
 ====================================================*/


  var checkeds__recorridos__general__tecnicos__Alto=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13,parametro14){

    $(parametro2).click(function(e){
  
      $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
  
        var condicion = $(parametro2).is(":checked");
  
        $(parametro7).html(' ');
  
        if ($(parametro3).val()!=0) {
  
            $(parametro2).prop("checked", false);
            alertify.set("notifier","position", "top-center");
          alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
  
        }
  
        if (condicion) {
  
          $(parametro3).val(1);
  
          let pestana1="";
          let pestana2="";
          let pestana3="";
  
  
          if (parametro4=="primerTrimestre") {
            rotulos = ['Enero', 'Febrero', 'Marzo'];
          }else if (parametro4=="segundoTrimestre") {
            rotulos = ['Abril', 'Mayo', 'Junio'];
          }else if (parametro4=="tercerTrimestre") {
            rotulos = ['Julio', 'Agosto', 'Septiembre'];
          }else if (parametro4=="cuartoTrimestre") {
            rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
          }
  
          pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><thead><tr class="fila__medallas__'+parametro8[0]+'"><th rowspan="2" colspan="1" style="display:none!important;"><center>Evento tarea<br>/ejecutado</center></th><th rowspan="2" colspan="1" style="display:none!important;"><center>Predicción<br>de resultados</center></th><th rowspan="1" colspan="5" class="resultado__col"><center>RESULTADOS ALCANZADOS</center></th><th rowspan="2" colspan="1"><center>Analisis técnico<br>de la<br>participación</center></th><th rowspan="2" colspan="1" class="oculto__avances" style="display:none!important;"><center>% Porcentaje<br>avance</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><th><center>Oro</center></th><th><center>Plata</center></th><th><center>Bronce</center></th><th><center>Total<br>medallas</center></th><th class="oculto__en__alto"><center>4TO al 8VO</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><td style="display:none!important;"><center><select id="eventoTa'+parametro8[0]+'" name="eventoTa'+parametro8[0]+'" class="ancho__total__input"><option value="no">No</option><option value="si">Si</option></select></center></td><td style="display:none!important;"><center><textarea id="prediccionR'+parametro8[0]+'" name="prediccionR'+parametro8[0]+'" style="font-size:11px!important;" class="prediccionR'+parametro8[0]+' ancho__total__textareas"></textarea></center></td><td><center><input type="text" id="oro'+parametro8[0]+'" name="oro'+parametro8[0]+'" value="0" class="oro'+parametro8[0]+' sumas__medallas__'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><input type="text" id="plata'+parametro8[0]+'" name="plata'+parametro8[0]+'" value="0" class="plata'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="bronce'+parametro8[0]+'" value="0" name="bronce'+parametro8[0]+'" class="bronce'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="totalMedallas'+parametro8[0]+'" name="totalMedallas'+parametro8[0]+'" value="0" class="totalMedallas'+parametro8[0]+' ancho__total__input obligatorios solo__numeros" readonly=""/></center></td><td><center><input type="text" id="cuartoOctavo'+parametro8[0]+'" name="cuartoOctavo'+parametro8[0]+'" value="0" class="oculto__en__alto cuartoOctavo'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><textarea id="analisisPar'+parametro8[0]+'" name="analisisPar'+parametro8[0]+'" style="font-size:11px!important;" class="analisisPar'+parametro8[0]+' ancho__total__textareas obligatorios"></textarea></center></td><td style="display:none!important;"><center><input type="text" id="porcentajeA__medallas'+parametro8[0]+'" name="porcentajeA__medallas'+parametro8[0]+'" class="porcentajeA__medallas'+parametro8[0]+' ancho__total__input solo__numeros"/></center></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__no'+parametro8[0]+'"><th rowspan="1" colspan="2" class="fecha__inicio'+parametro8[0]+'">Fecha de inicio</th><th rowspan="1" colspan="2" class="fecha__fin'+parametro8[0]+'">Fecha fin</th><th rowspan="2" colspan="1" class="porcentaje__filas'+parametro8[0]+'">% avance</th></tr><tr class="fila__no'+parametro8[0]+'"><th></th><th>Ejecutado</th><th></th><th>Ejecutado</th></tr></thead></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tbody><tr class="fila__no'+parametro8[0]+'"><td><center></center></td><td><center><input type="date" id="ejecutadoInicio'+parametro8[0]+'" name="ejecutadoInicio'+parametro8[0]+'" class="ejecutadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><center><input type="date" id="ejecutadoFin'+parametro8[0]+'" name="ejecutadoFin'+parametro8[0]+'" class="ejecutadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td style="display:flex;"><input type="text" id="porcentajeA'+parametro8[0]+'" name="porcentajeA'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros"/></td></tr><tr class="fila__alto__ren'+parametro8[0]+'" style="display:none!important;"><td colspan="1"><input type="text" id="tipoEventos'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="2"><input type="text" id="eventoTarea__ejecutado'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="nivel'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="totalEjecutados__al'+parametro8[0]+'" class="ancho__total__input solo__numeros"/></td></tr></table><table><tr class="fila__capacitas'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__2'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__3'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'" style="display:none!important;"><td colspan="3"><input type="text" id="mujeresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/><td><input type="text" id="hombresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/></td><td><input type="text" id="totalB'+parametro8[0]+'" class="enlaces__b ancho__total__input" value="0" readonly=""/></td></td></tr></table><table class="tipo__organizacion__evento'+parametro8[0]+'"><tbody><tr class="filaIndicadora__administra'+parametro8[0]+'"><td>Seleccione tipo de organización del evento</td><td><select id="tipoParticipas'+parametro8[0]+'" class="ancho__total__input obligatorios" idContador="'+parametro8[0]+'"><option value="">--Seleccione tipo organización del evento</option><option value="participacion">Participación</option><option value="organizacion">Organización</option></select><input id="rucOrganizacion'+parametro8[0]+'" class="ancho__total__input solo__numeros" style="display:none!important;" placeholder="Ingrese ruc organización"/><input id="nombreOrganizacion'+parametro8[0]+'" class="ancho__total__input" placeholder="Ingrese nombre organización" style="display:none!important;"/></td></tr></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__alto__ren'+parametro8[0]+'"><th colspan="11"><center>Resultados</center></th><th><a class="btn btn-warning" id="agregarResuls'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><th style="width:10px!important;"><center>N-</center></th><th><center>Deporte</center></th><th><center>Modalidad</center></th><th><center>Tipo<br>de<br>prueba</center></th><th><center>Marca<br>alcanzada</center></th><th><center>Convocatoria<br>a juegos<br>disciplina<br>/discapacidad</center></th><th><center>Género</center></th><th><center>Categoría deportiva</center></th><th><center>Nombres</center></th><th><center>Apellidos</center></th><th><center>Provincia<br>representación</center></th><th><center>Acciones</center></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><td>'+1+'</td><td colspan="1"><select id="deportes'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td colspan="1"><input type="text" id="modalidad'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="genero'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="nombres'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="apellidos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="provinciaRe'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td><nav class="btn-pluss-wrapper fila__otrosHabilitantes'+parametro8[0]+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarFila__parE'+parametro8[0]+'" name="guardarFila__parE'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFila__parE"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li></ul></div></nav></td></tr><tbody class="filas__resultados'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="documentos__centrados"><th colspan="4"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;" class="otros__altos__modificas">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"></tr></tbody><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="2" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="3"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="5"><center><a class="btn btn-primary" id="guardarTecnicos'+parametro8[0]+'" name="guardarTecnicos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';			
      
  
          /*=============================
          =            Función acordión   =
          =============================*/
          
          acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7,0);
          
          /*=====  End of Función acordión  ======*/
  
  
          if (parametro14==3 || parametro14==80) {
  
            $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, informe médico y disciplinario de atletas, registro fotográfico, registro de resultados emitidos por el organizador del evento');
  
          }else if (parametro14==2) {
  
            $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, registro fotográfico');
  
          }else if (parametro14==2) {
  
            $(".otros__altos__modificas").html('Listado de participantes, registro fotográfico');
  
          }else if(parametro14==25){
  
            $(".otros__altos__modificas").html('Informe de cumplimiento trimestral rehabilitación y readecuación, contratos, planillas generadas, cronograma de ejecución, solicitudes de pago, facturas, CUR de pagos, Garantías Técnicas, planos AS Built, Actas de recepción provisional y / o definitiva, registro fotográfico antes y después de la intervención');
  
          }else if(parametro14==105){
  
            $(".otros__altos__modificas").html('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
  
  
          }else if(parametro14==1){
  
            $(".otros__altos__modificas").html('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados');
  
  
          }
  
  
          
          var longitudCaracteres=function(parametro1,parametro2,counter){
  
          $(parametro1).keyup(function(e){
  
             if($(this).val().length > parametro2){
  
                  $(this).val($(this).val().substr(0, parametro2));
  
                  counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
  
                  counter.css("color","red");
  
              }else{
  
                // counter.html("<strong>"+$(this).val().length +"</strong>");
  
                counter.css("color","black");
  
                counter.css("font-size","10px");
  
              }
  
  
           });
  
          }				
  
          longitudCaracteres($("#rucOrganizacion"+parametro8[0]),13,$(".counter__Cedula"));
  
  
          /*==============================
          =            Fechas            =
          ==============================*/
          
          $("#planificadoInicio"+parametro8[0]).val(parametro8[8]);
          $("#planificadoFin"+parametro8[0]).val(parametro8[9]);
  
          
          funcion__solo__numero($(".solo__numeros"));
  
          /*=====  End of Fechas  ======*/
  
  
          /*===========================================
          =            Fechas relacionales            =
          ===========================================*/
  
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]));
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]));
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoFin"+parametro8[0]));
  
          // funcion_porcentajes__fechas__porcentajes($("#ejecutadoFin"+parametro8[0]),$("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]),$("#porcentajeA"+parametro8[0]));
          
          /*=====  End of Fechas relacionales  ======*/
  
  
          /*==================================================
          =            Select tipo organizaciones            =
          ==================================================*/
  
          $("#tipoParticipas"+parametro8[0]).change(function(e) {
  
            let idContador=$(this).attr('idContador');
  
            if ($(this).val()=="participacion") {
  
              $("#rucOrganizacion"+idContador).removeAttr('style');
              $("#nombreOrganizacion"+idContador).removeAttr('style');
  
            }else{
              $("#rucOrganizacion"+idContador).attr('style','display:none;');
              $("#nombreOrganizacion"+idContador).attr('style','display:none;');
  
            }
  
  
          }); 				
          
          /*=====  End of Select tipo organizaciones  ======*/
          
          if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
  
            $(".porcentaje__filas"+parametro8[0]).hide();
            $("#porcentajeA"+parametro8[0]).hide();
            $("#porcentajeA"+parametro8[0]).val(0);
  
          }
  
  
          if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
            
          }else{
            $(".tipo__organizacion__evento"+parametro8[0]).remove();
          }
  
          if (parametro14==2 || parametro14==80) {
  
            // $(".fila__no"+parametro8[0]).remove();
  
  
          }else{
        
            $(".fila__medallas__"+parametro8[0]).remove();
          }
  
          if (parametro14==1) {
  
            $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO  DE LA CAPACITACIÓN');
            $(".fecha__fin"+parametro8[0]).text('FECHA FIN DE LA CAPACITACIÓN');
  
          }
  
          if (parametro14==3 || parametro14==2 || parametro14==80) {
  
            $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO ');
            $(".fecha__fin"+parametro8[0]).text('FECHA FIN');
  
            deportes__function($("#deportes"+parametro8[0]));
            provincias__function($("#provinciaRe"+parametro8[0]));
  
          }else{
  
            $(".fila__alto__ren"+parametro8[0]).remove();
  
          }
  
          if (parametro14==2 || parametro14==80) {
  
            $(".fila__alto__ren"+parametro8[0]).remove();
  
          }
  
          if (parametro14==2 || parametro14==3 || parametro14==4 || parametro14==80) {
  
            $(".fila__capacitas"+parametro8[0]).append('<th rowspan="1" colspan="5">BENEFICIARIOS REALES</th>');
  
            $(".fila__capacitas__2"+parametro8[0]).append('<th rowspan="1" colspan="3">MUJERES</th><th rowspan="1" colspan="1">HOMBRES</th><th rowspan="1" colspan="1">TOTAL</th>');
  
            $(".fila__capacitas__3"+parametro8[0]).removeAttr('style');
  
            funcion__sumador__real($("#mujeresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
            funcion__sumador__real($("#hombresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
  
            funcion__solo__numero($(".solo__numeros"));
  
            funcion__cambio__de__numero($("#mujeresB"+parametro8[0]));			
            funcion__cambio__de__numero($("#hombresB"+parametro8[0]));	
  
            funcion__cambio__de__numero($("#oro"+parametro8[0]));	
            funcion__cambio__de__numero($("#plata"+parametro8[0]));	
            funcion__cambio__de__numero($("#bronce"+parametro8[0]));	
            funcion__cambio__de__numero($("#capacitadores"+parametro8[0]));	
  
  
            funcion__sumador__real($("#oro"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
            funcion__sumador__real($("#plata"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
            funcion__sumador__real($("#bronce"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
  
          }
  
  
          /*=====================================
          =            Agretar otros            =
          =====================================*/
  
  
          $("#guardarFila__parE"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarFila__parE"+idContador),[idContador,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
  
  
          });	
  
          let contado3=1;
  
          if (parametro14==80) {
  
            $(".oculto__en__alto").hide();
  
            // $(".resultado__col").removeAttr('colspan');
            // $(".resultado__col").attr('colspan','4');
  
          }
  
  
          $("#agregarResuls"+parametro8[0]).click(function(event) {
  
            contado3++;
  
            let idContador=$(this).attr('idContador');
  
            funcion__agregarFilas($(".filas__resultados"+idContador),['<td>'+contado3+'</td><td colspan="1"><select id="deportes'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td colspan="1"><input type="text" id="modalidad'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="genero'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="nombres'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="apellidos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="provinciaRe'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td><nav class="btn-pluss-wrapper otrosHabilitantes'+contado3+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado3+'" name="guardarOtros__agregado__2'+contado3+'" idPrincipal="'+idContador+'" idContador="'+contado3+'" class="editar__ides" idContador2="'+contado3+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarResul'+contado3+'" name="eliminarResul'+contado3+'" idPrincipal="'+contado3+'" idContador="'+idContador+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td>'],idContador,contado3,"resultados__eventos");		
  
              $("#eliminarResul"+contado3).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__resultados__eventos"+idContador+idPrincipal));
  
              });	
  
  
  
              $("#guardarOtros__agregado__2"+contado3).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                $(this).hide();
  
                funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
  
  
              });							
  
              deportes__function($("#deportes"+contado3));
              provincias__function($("#provinciaRe"+contado3));
  
  
          });	
          
  
  
          $("#guardarOtrosF"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtrosF"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro12,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
          });	
  
          let contado2=0;
  
  
        //--------------------------------------------------

          

          for(i=0;i<4;i++){

            contado2++;
  
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
          
            $(".col__otros__habili__2"+idContador +" td").remove();
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="Listado de asistencia de atletas suscritos por el entrenador"
            }else if(i==1)
            {
              spanArchivo="Informe médico y disciplinario de atletas"
            }else if(i==2)
            {
              spanArchivo="Registro fotográfico"
            }else if(i==3)
            {
              spanArchivo="Registro de resultados emitidos por el organizador del evento"
            }

            funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
  
            $("#eliminarOtros"+contado2).click(function(event) {

              let idContador=$(this).attr('idContador');
              let idPrincipal=$(this).attr('idPrincipal');

              funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));

            });	

            $("#guardarOtros__agregado"+contado2).click(function(event) {

              let idContador=$(this).attr('idContador');
              let idPrincipal=$(this).attr('idPrincipal');
              let rotulo=$(this).attr('rotulo');
              let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')

              funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro12,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


            });	

            }
          
          /*=====  End of Agretar otros  ======*/
  
          /*=========================================
          =            Guardar generales            =
          =========================================*/
          
          
          $("#guardarTecnicos"+parametro8[0]).click(function(e) {

            var validador = validacionRegistro( $(".obligatorioOtros__1"));
	          validacionRegistroMostrarErrores( $(".obligatorioOtros__1"));

            var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
	          validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));

            if (validador == false && validador2 == false) {

              alertify.set("notifier", "position", "top-center");
              alertify.notify("Campos obligatorios", "error", 5, function () { });
          
              $(parametro1).show();
          
            } else {

           
  
            let idContador=$(this).attr('idContador');
  
            let rucOrganizacion=$("#rucOrganizacion"+idContador).val();
  
            let nombreOrganizacion=$("#nombreOrganizacion"+idContador).val();
  
            let tipoParticipas=$("#tipoParticipas"+idContador).val();
  
            $(this).hide();
  
            if (parametro14==3 || parametro14==4) {
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,parametro4,$("#organismoIdPrin").val(),$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#hombresB"+idContador).val(),$("#mujeresB"+idContador).val(),$("#totalB"+idContador).val(),$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#tipoEventos"+idContador).val(),$("#eventoTarea__ejecutado"+idContador).val(),$("#nivel"+idContador).val(),$("#totalEjecutados__al"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
  
            }else if (parametro14==2 || parametro14==80) {
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),$("#eventoTa"+idContador).val(),$("#prediccionR"+idContador).val(),$("#oro"+idContador).val(),$("#plata"+idContador).val(),$("#bronce"+idContador).val(),$("#totalMedallas"+idContador).val(),$("#cuartoOctavo"+idContador).val(),$("#analisisPar"+idContador).val(),$("#porcentajeA__medallas"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas,null,$("#ejecutadoInicio"+idContador).val(),null,$("#ejecutadoFin"+idContador).val()],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
            }else{
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
            }
          }
  
          }); 
          
          
          /*=====  End of Guardar generales   ======*/
          
          
  
        }else{
  
          $(parametro3).val(0);
  
          $(parametro7).html(' ');
  
        }
  
      });
  
    });
  
  }

   /*==================================================
          =           ttecnicos__capacitaciones           =
 ====================================================*/


  var checkeds__recorridos__general__tecnicos__capacitaciones=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13,parametro14){

    $(parametro2).click(function(e){
  
      $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
  
        var condicion = $(parametro2).is(":checked");
  
        $(parametro7).html(' ');
  
        if ($(parametro3).val()!=0) {
  
            $(parametro2).prop("checked", false);
            alertify.set("notifier","position", "top-center");
          alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
  
        }
  
        if (condicion) {
  
          $(parametro3).val(1);
  
          let pestana1="";
          let pestana2="";
          let pestana3="";
  
  
          if (parametro4=="primerTrimestre") {
            rotulos = ['Enero', 'Febrero', 'Marzo'];
          }else if (parametro4=="segundoTrimestre") {
            rotulos = ['Abril', 'Mayo', 'Junio'];
          }else if (parametro4=="tercerTrimestre") {
            rotulos = ['Julio', 'Agosto', 'Septiembre'];
          }else if (parametro4=="cuartoTrimestre") {
            rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
          }
  
          pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><thead><tr class="fila__medallas__'+parametro8[0]+'"><th rowspan="2" colspan="1" style="display:none!important;"><center>Evento tarea<br>/ejecutado</center></th><th rowspan="2" colspan="1" style="display:none!important;"><center>Predicción<br>de resultados</center></th><th rowspan="1" colspan="5" class="resultado__col"><center>RESULTADOS ALCANZADOS</center></th><th rowspan="2" colspan="1"><center>Analisis técnico<br>de la<br>participación</center></th><th rowspan="2" colspan="1" class="oculto__avances" style="display:none!important;"><center>% Porcentaje<br>avance</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><th><center>Oro</center></th><th><center>Plata</center></th><th><center>Bronce</center></th><th><center>Total<br>medallas</center></th><th class="oculto__en__alto"><center>4TO al 8VO</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><td style="display:none!important;"><center><select id="eventoTa'+parametro8[0]+'" name="eventoTa'+parametro8[0]+'" class="ancho__total__input"><option value="no">No</option><option value="si">Si</option></select></center></td><td style="display:none!important;"><center><textarea id="prediccionR'+parametro8[0]+'" name="prediccionR'+parametro8[0]+'" style="font-size:11px!important;" class="prediccionR'+parametro8[0]+' ancho__total__textareas"></textarea></center></td><td><center><input type="text" id="oro'+parametro8[0]+'" name="oro'+parametro8[0]+'" value="0" class="oro'+parametro8[0]+' sumas__medallas__'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><input type="text" id="plata'+parametro8[0]+'" name="plata'+parametro8[0]+'" value="0" class="plata'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="bronce'+parametro8[0]+'" value="0" name="bronce'+parametro8[0]+'" class="bronce'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="totalMedallas'+parametro8[0]+'" name="totalMedallas'+parametro8[0]+'" value="0" class="totalMedallas'+parametro8[0]+' ancho__total__input obligatorios solo__numeros" readonly=""/></center></td><td><center><input type="text" id="cuartoOctavo'+parametro8[0]+'" name="cuartoOctavo'+parametro8[0]+'" value="0" class="oculto__en__alto cuartoOctavo'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><textarea id="analisisPar'+parametro8[0]+'" name="analisisPar'+parametro8[0]+'" style="font-size:11px!important;" class="analisisPar'+parametro8[0]+' ancho__total__textareas obligatorios"></textarea></center></td><td style="display:none!important;"><center><input type="text" id="porcentajeA__medallas'+parametro8[0]+'" name="porcentajeA__medallas'+parametro8[0]+'" class="porcentajeA__medallas'+parametro8[0]+' ancho__total__input solo__numeros"/></center></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__no'+parametro8[0]+'"><th rowspan="1" colspan="2" class="fecha__inicio'+parametro8[0]+'">Fecha de inicio</th><th rowspan="1" colspan="2" class="fecha__fin'+parametro8[0]+'">Fecha fin</th><th rowspan="2" colspan="1" class="porcentaje__filas'+parametro8[0]+'">% avance</th></tr><tr class="fila__no'+parametro8[0]+'"><th>Planificado</th><th>Ejecutado</th><th>Planificado</th><th>Ejecutado</th></tr></thead></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tbody><tr class="fila__no'+parametro8[0]+'"><td><center><input type="date" id="planificadoInicio'+parametro8[0]+'" name="planificadoInicio'+parametro8[0]+'" class="planificadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><input type="date" id="ejecutadoInicio'+parametro8[0]+'" name="ejecutadoInicio'+parametro8[0]+'" class="ejecutadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><input type="date" id="planificadoFin'+parametro8[0]+'" name="planificadoFin'+parametro8[0]+'" class="planificadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td><center><input type="date" id="ejecutadoFin'+parametro8[0]+'" name="ejecutadoFin'+parametro8[0]+'" class="ejecutadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td style="display:flex;"><input type="text" id="porcentajeA'+parametro8[0]+'" name="porcentajeA'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros"/></td></tr><tr class="fila__alto__ren'+parametro8[0]+'" style="display:none!important;"><td colspan="1"><input type="text" id="tipoEventos'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="2"><input type="text" id="eventoTarea__ejecutado'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="nivel'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="totalEjecutados__al'+parametro8[0]+'" class="ancho__total__input solo__numeros"/></td></tr></table><table><tr class="fila__capacitas'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__2'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__3'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'" style="display:none!important;"><td colspan="3"><input type="text" id="mujeresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/><td><input type="text" id="hombresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/></td><td><input type="text" id="totalB'+parametro8[0]+'" class="enlaces__b ancho__total__input" value="0" readonly=""/></td></td></tr></table><table class="tipo__organizacion__evento'+parametro8[0]+'"><thead><th><center>Número Capacitadores</center></th></thead><td><center><input type="text" id="capacitadores'+parametro8[0]+'" name="capacitadores'+parametro8[0]+'" value="0"  class="capacitadores'+parametro8[0]+' solo__numeros"/></center></td></table><table class="tipo__organizacion__evento'+parametro8[0]+'"><tbody><tr class="filaIndicadora__administra'+parametro8[0]+'"><td>Seleccione tipo de organización del evento</td><td><select id="tipoParticipas'+parametro8[0]+'" class="ancho__total__input obligatorios" idContador="'+parametro8[0]+'"><option value="">--Seleccione tipo organización del evento</option><option value="participacion">Participación</option><option value="organizacion">Organización</option></select><input id="rucOrganizacion'+parametro8[0]+'" class="ancho__total__input solo__numeros" style="display:none!important;" placeholder="Ingrese ruc organización"/><input id="nombreOrganizacion'+parametro8[0]+'" class="ancho__total__input" placeholder="Ingrese nombre organización" style="display:none!important;"/></td></tr></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__alto__ren'+parametro8[0]+'"><th colspan="11"><center>Resultados</center></th><th><a class="btn btn-warning" id="agregarResuls'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><th style="width:10px!important;"><center>N-</center></th><th><center>Deporte</center></th><th><center>Modalidad</center></th><th><center>Tipo<br>de<br>prueba</center></th><th><center>Marca<br>alcanzada</center></th><th><center>Convocatoria<br>a juegos<br>disciplina<br>/discapacidad</center></th><th><center>Género</center></th><th><center>Categoría deportiva</center></th><th><center>Nombres</center></th><th><center>Apellidos</center></th><th><center>Provincia<br>representación</center></th><th><center>Acciones</center></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><td>'+1+'</td><td colspan="1"><select id="deportes'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td colspan="1"><input type="text" id="modalidad'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="genero'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="nombres'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="apellidos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="provinciaRe'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td><nav class="btn-pluss-wrapper fila__otrosHabilitantes'+parametro8[0]+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarFila__parE'+parametro8[0]+'" name="guardarFila__parE'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFila__parE"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li></ul></div></nav></td></tr><tbody class="filas__resultados'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="documentos__centrados"><th colspan="4"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;" class="otros__altos__modificas">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"></tr></tbody><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="2" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="3"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="5"><center><a class="btn btn-primary" id="guardarTecnicos'+parametro8[0]+'" name="guardarTecnicos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';			
      
  
          /*=============================
          =            Función acordión   =
          =============================*/
          
          acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7,0);
          
          /*=====  End of Función acordión  ======*/
  
  
          if (parametro14==3 || parametro14==80) {
  
            $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, informe médico y disciplinario de atletas, registro fotográfico, registro de resultados emitidos por el organizador del evento');
  
          }else if (parametro14==2) {
  
            $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, registro fotográfico');
  
          }else if (parametro14==2) {
  
            $(".otros__altos__modificas").html('Listado de participantes, registro fotográfico');
  
          }else if(parametro14==25){
  
            $(".otros__altos__modificas").html('Informe de cumplimiento trimestral rehabilitación y readecuación, contratos, planillas generadas, cronograma de ejecución, solicitudes de pago, facturas, CUR de pagos, Garantías Técnicas, planos AS Built, Actas de recepción provisional y / o definitiva, registro fotográfico antes y después de la intervención');
  
          }else if(parametro14==105){
  
            $(".otros__altos__modificas").html('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
  
  
          }else if(parametro14==1){
  
            $(".otros__altos__modificas").html('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados');
  
  
          }
  
  
          
          var longitudCaracteres=function(parametro1,parametro2,counter){
  
          $(parametro1).keyup(function(e){
  
             if($(this).val().length > parametro2){
  
                  $(this).val($(this).val().substr(0, parametro2));
  
                  counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
  
                  counter.css("color","red");
  
              }else{
  
                // counter.html("<strong>"+$(this).val().length +"</strong>");
  
                counter.css("color","black");
  
                counter.css("font-size","10px");
  
              }
  
  
           });
  
          }				
  
          longitudCaracteres($("#rucOrganizacion"+parametro8[0]),13,$(".counter__Cedula"));
  
  
          /*==============================
          =            Fechas            =
          ==============================*/
          
          $("#planificadoInicio"+parametro8[0]).val(parametro8[8]);
          $("#planificadoFin"+parametro8[0]).val(parametro8[9]);
  
          
          funcion__solo__numero($(".solo__numeros"));
  
          /*=====  End of Fechas  ======*/
  
  
          /*===========================================
          =            Fechas relacionales            =
          ===========================================*/
  
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]));
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]));
          funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoFin"+parametro8[0]));
  
          // funcion_porcentajes__fechas__porcentajes($("#ejecutadoFin"+parametro8[0]),$("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]),$("#porcentajeA"+parametro8[0]));
          
          /*=====  End of Fechas relacionales  ======*/
  
  
          /*==================================================
          =            Select tipo organizaciones            =
          ==================================================*/
  
          $("#tipoParticipas"+parametro8[0]).change(function(e) {
  
            let idContador=$(this).attr('idContador');
  
            if ($(this).val()=="participacion") {
  
              $("#rucOrganizacion"+idContador).removeAttr('style');
              $("#nombreOrganizacion"+idContador).removeAttr('style');
  
            }else{
              $("#rucOrganizacion"+idContador).attr('style','display:none;');
              $("#nombreOrganizacion"+idContador).attr('style','display:none;');
  
            }
  
  
          }); 				
          
          /*=====  End of Select tipo organizaciones  ======*/
          
          if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
  
            $(".porcentaje__filas"+parametro8[0]).hide();
            $("#porcentajeA"+parametro8[0]).hide();
            $("#porcentajeA"+parametro8[0]).val(0);
  
          }
  
  
          if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
            
          }else{
            $(".tipo__organizacion__evento"+parametro8[0]).remove();
          }
  
          if (parametro14==2 || parametro14==80) {
  
            // $(".fila__no"+parametro8[0]).remove();
  
  
          }else{
        
            $(".fila__medallas__"+parametro8[0]).remove();
          }
  
          if (parametro14==1) {
  
            $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO  DE LA CAPACITACIÓN');
            $(".fecha__fin"+parametro8[0]).text('FECHA FIN DE LA CAPACITACIÓN');
  
          }
  
          if (parametro14==3 || parametro14==2 || parametro14==80) {
  
            $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO ');
            $(".fecha__fin"+parametro8[0]).text('FECHA FIN');
  
            deportes__function($("#deportes"+parametro8[0]));
            provincias__function($("#provinciaRe"+parametro8[0]));
  
          }else{
  
            $(".fila__alto__ren"+parametro8[0]).remove();
  
          }
  
          if (parametro14==2 || parametro14==80) {
  
            $(".fila__alto__ren"+parametro8[0]).remove();
  
          }
  
          funcion__cambio__de__numero($("#capacitadores"+parametro8[0]));	
          if (parametro14==1||parametro14==2 || parametro14==3 || parametro14==4 || parametro14==80) {
  
            $(".fila__capacitas"+parametro8[0]).append('<th rowspan="1" colspan="5">BENEFICIARIOS REALES</th>');
  
            $(".fila__capacitas__2"+parametro8[0]).append('<th rowspan="1" colspan="3">MUJERES</th><th rowspan="1" colspan="1">HOMBRES</th><th rowspan="1" colspan="1">TOTAL</th>');
  
            $(".fila__capacitas__3"+parametro8[0]).removeAttr('style');
  
            funcion__sumador__real($("#mujeresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
            funcion__sumador__real($("#hombresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
  
            funcion__solo__numero($(".solo__numeros"));
  
            funcion__cambio__de__numero($("#mujeresB"+parametro8[0]));			
            funcion__cambio__de__numero($("#hombresB"+parametro8[0]));	
  
            funcion__cambio__de__numero($("#oro"+parametro8[0]));	
            funcion__cambio__de__numero($("#plata"+parametro8[0]));	
            funcion__cambio__de__numero($("#bronce"+parametro8[0]));	
            
  
  
            funcion__sumador__real($("#oro"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
            funcion__sumador__real($("#plata"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
            funcion__sumador__real($("#bronce"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
  
          }
  
  
          /*=====================================
          =            Agretar otros            =
          =====================================*/
  
  
          $("#guardarFila__parE"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarFila__parE"+idContador),[idContador,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
  
  
          });	
  
          let contado3=1;
  
          if (parametro14==80) {
  
            $(".oculto__en__alto").hide();
  
            // $(".resultado__col").removeAttr('colspan');
            // $(".resultado__col").attr('colspan','4');
  
          }
  
  
          $("#agregarResuls"+parametro8[0]).click(function(event) {
  
            contado3++;
  
            let idContador=$(this).attr('idContador');
  
            funcion__agregarFilas($(".filas__resultados"+idContador),['<td>'+contado3+'</td><td colspan="1"><select id="deportes'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td colspan="1"><input type="text" id="modalidad'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="genero'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="nombres'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="apellidos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="provinciaRe'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td><nav class="btn-pluss-wrapper otrosHabilitantes'+contado3+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado3+'" name="guardarOtros__agregado__2'+contado3+'" idPrincipal="'+idContador+'" idContador="'+contado3+'" class="editar__ides" idContador2="'+contado3+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarResul'+contado3+'" name="eliminarResul'+contado3+'" idPrincipal="'+contado3+'" idContador="'+idContador+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td>'],idContador,contado3,"resultados__eventos");		
  
              $("#eliminarResul"+contado3).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__resultados__eventos"+idContador+idPrincipal));
  
              });	
  
  
  
              $("#guardarOtros__agregado__2"+contado3).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                $(this).hide();
  
                funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
  
  
              });							
  
              deportes__function($("#deportes"+contado3));
              provincias__function($("#provinciaRe"+contado3));
  
  
          });	
          
  
  
          $("#guardarOtrosF"+parametro8[0]).click(function(event) {
  
            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulos');
  
            $(this).hide();
  
            funcion__agregar__filas__2($("#guardarOtrosF"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro12,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
          });	
  
          let contado2=0;
  
  
        //--------------------------------------------------

          

          for(i=0;i<3;i++){

            contado2++;
  
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
          
            $(".col__otros__habili__2"+idContador +" td").remove();
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="Listado de asistentes"
            }else if(i==1)
            {
              spanArchivo="Fotocopia de certificados de capacitación"
            }else if(i==2)
            {
              spanArchivo="Registro fotográfico de la capacitación"
            }

            funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
  
            $("#eliminarOtros"+contado2).click(function(event) {

              let idContador=$(this).attr('idContador');
              let idPrincipal=$(this).attr('idPrincipal');

              funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));

            });	

            $("#guardarOtros__agregado"+contado2).click(function(event) {

              let idContador=$(this).attr('idContador');
              let idPrincipal=$(this).attr('idPrincipal');
              let rotulo=$(this).attr('rotulo');
              let idContador2=$(this).attr('idContador2');
              nombreArchivo=$(this).attr('nombre')

              funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro12,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


            });	

            }
          
          /*=====  End of Agretar otros  ======*/
  
          /*=========================================
          =            Guardar generales            =
          =========================================*/
          
          
          $("#guardarTecnicos"+parametro8[0]).click(function(e) {
  
            let idContador=$(this).attr('idContador');
  
            let rucOrganizacion=$("#rucOrganizacion"+idContador).val();
  
            let nombreOrganizacion=$("#nombreOrganizacion"+idContador).val();
  
            let tipoParticipas=$("#tipoParticipas"+idContador).val();
  
            $(this).hide();
  
            if (parametro14==3 || parametro14==4) {
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,parametro4,$("#organismoIdPrin").val(),$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#hombresB"+idContador).val(),$("#mujeresB"+idContador).val(),$("#totalB"+idContador).val(),$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#tipoEventos"+idContador).val(),$("#eventoTarea__ejecutado"+idContador).val(),$("#nivel"+idContador).val(),$("#totalEjecutados__al"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
  
            }else if (parametro14==2 || parametro14==80) {
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),$("#eventoTa"+idContador).val(),$("#prediccionR"+idContador).val(),$("#oro"+idContador).val(),$("#plata"+idContador).val(),$("#bronce"+idContador).val(),$("#totalMedallas"+idContador).val(),$("#cuartoOctavo"+idContador).val(),$("#analisisPar"+idContador).val(),$("#porcentajeA__medallas"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas,null,$("#ejecutadoInicio"+idContador).val(),null,$("#ejecutadoFin"+idContador).val()],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
            }else{
  
              funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas,$("#capacitadores"+idContador).val()],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
  
            }
  
            $(parametro7).html(' ');
          }); 
          
          
          /*=====  End of Guardar generales   ======*/
          
          
  
        }else{
  
          $(parametro3).val(0);
  
          $(parametro7).html(' ');
  
        }
  
      });
  
    });
  
  }


   /*=====================================
          =           tecnicos__Formativo          =
          =====================================*/


  var checkeds__recorridos__general__tecnicos__Form=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13,parametro14){

            $(parametro2).click(function(e){
          
              $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
          
                var condicion = $(parametro2).is(":checked");
          
                $(parametro7).html(' ');
          
                if ($(parametro3).val()!=0) {
          
                    $(parametro2).prop("checked", false);
                    alertify.set("notifier","position", "top-center");
                  alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
          
                }
          
                if (condicion) {
          
                  $(parametro3).val(1);
          
                  let pestana1="";
                  let pestana2="";
                  let pestana3="";
          
          
                  if (parametro4=="primerTrimestre") {
                    rotulos = ['Enero', 'Febrero', 'Marzo'];
                  }else if (parametro4=="segundoTrimestre") {
                    rotulos = ['Abril', 'Mayo', 'Junio'];
                  }else if (parametro4=="tercerTrimestre") {
                    rotulos = ['Julio', 'Agosto', 'Septiembre'];
                  }else if (parametro4=="cuartoTrimestre") {
                    rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
                  }
          
                  pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><thead><tr class="fila__medallas__'+parametro8[0]+'"><th rowspan="2" colspan="1" style="display:none!important;"><center>Evento tarea<br>/ejecutado</center></th><th rowspan="2" colspan="1" style="display:none!important;"><center>Predicción<br>de resultados</center></th><th rowspan="1" colspan="5" class="resultado__col"><center>RESULTADOS ALCANZADOS</center></th><th rowspan="2" colspan="1"><center>Analisis técnico<br>de la<br>participación</center></th><th rowspan="2" colspan="1" class="oculto__avances" style="display:none!important;"><center>% Porcentaje<br>avance</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><th><center>Oro</center></th><th><center>Plata</center></th><th><center>Bronce</center></th><th><center>Total<br>medallas</center></th><th class="oculto__en__alto"><center>4TO al 8VO</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><td style="display:none!important;"><center><select id="eventoTa'+parametro8[0]+'" name="eventoTa'+parametro8[0]+'" class="ancho__total__input"><option value="no">No</option><option value="si">Si</option></select></center></td><td style="display:none!important;"><center><textarea id="prediccionR'+parametro8[0]+'" name="prediccionR'+parametro8[0]+'" style="font-size:11px!important;" class="prediccionR'+parametro8[0]+' ancho__total__textareas"></textarea></center></td><td><center><input type="text" id="oro'+parametro8[0]+'" name="oro'+parametro8[0]+'" value="0" class="oro'+parametro8[0]+' sumas__medallas__'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><input type="text" id="plata'+parametro8[0]+'" name="plata'+parametro8[0]+'" value="0" class="plata'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="bronce'+parametro8[0]+'" value="0" name="bronce'+parametro8[0]+'" class="bronce'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="totalMedallas'+parametro8[0]+'" name="totalMedallas'+parametro8[0]+'" value="0" class="totalMedallas'+parametro8[0]+' ancho__total__input obligatorios solo__numeros" readonly=""/></center></td><td><center><input type="text" id="cuartoOctavo'+parametro8[0]+'" name="cuartoOctavo'+parametro8[0]+'" value="0" class="oculto__en__alto cuartoOctavo'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><textarea id="analisisPar'+parametro8[0]+'" name="analisisPar'+parametro8[0]+'" style="font-size:11px!important;" class="analisisPar'+parametro8[0]+' ancho__total__textareas obligatorios"></textarea></center></td><td style="display:none!important;"><center><input type="text" id="porcentajeA__medallas'+parametro8[0]+'" name="porcentajeA__medallas'+parametro8[0]+'" class="porcentajeA__medallas'+parametro8[0]+' ancho__total__input solo__numeros"/></center></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__no'+parametro8[0]+'"><th rowspan="1" colspan="2" class="fecha__inicio'+parametro8[0]+'">Fecha de inicio</th><th rowspan="1" colspan="2" class="fecha__fin'+parametro8[0]+'">Fecha fin</th><th rowspan="2" colspan="1" class="porcentaje__filas'+parametro8[0]+'">% avance</th></tr><tr class="fila__no'+parametro8[0]+'"><th></th><th>Ejecutado</th><th></th><th>Ejecutado</th></tr></thead></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tbody><tr class="fila__no'+parametro8[0]+'"><td><center></center></td><td><center><input type="date" id="ejecutadoInicio'+parametro8[0]+'" name="ejecutadoInicio'+parametro8[0]+'" class="ejecutadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><center><input type="date" id="ejecutadoFin'+parametro8[0]+'" name="ejecutadoFin'+parametro8[0]+'" class="ejecutadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td style="display:flex;"><input type="text" id="porcentajeA'+parametro8[0]+'" name="porcentajeA'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros"/></td></tr><tr class="fila__alto__ren'+parametro8[0]+'" style="display:none!important;"><td colspan="1"><input type="text" id="tipoEventos'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="2"><input type="text" id="eventoTarea__ejecutado'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="nivel'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="totalEjecutados__al'+parametro8[0]+'" class="ancho__total__input solo__numeros"/></td></tr></table><table><tr class="fila__capacitas'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__2'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__3'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'" style="display:none!important;"><td colspan="3"><input type="text" id="mujeresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/><td><input type="text" id="hombresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/></td><td><input type="text" id="totalB'+parametro8[0]+'" class="enlaces__b ancho__total__input" value="0" readonly=""/></td></td></tr></table><table class="tipo__organizacion__evento'+parametro8[0]+'"><tbody><tr class="filaIndicadora__administra'+parametro8[0]+'"><td>Seleccione tipo de organización del evento</td><td><select id="tipoParticipas'+parametro8[0]+'" class="ancho__total__input obligatorios" idContador="'+parametro8[0]+'"><option value="">--Seleccione tipo organización del evento</option><option value="participacion">Participación</option><option value="organizacion">Organización</option></select><input id="rucOrganizacion'+parametro8[0]+'" class="ancho__total__input solo__numeros" style="display:none!important;" placeholder="Ingrese ruc organización"/><input id="nombreOrganizacion'+parametro8[0]+'" class="ancho__total__input" placeholder="Ingrese nombre organización" style="display:none!important;"/></td></tr></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__alto__ren'+parametro8[0]+'"><th colspan="11"><center>Resultados</center></th><th><a class="btn btn-warning" id="agregarResuls'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><th style="width:10px!important;"><center>N-</center></th><th><center>Deporte</center></th><th><center>Modalidad</center></th><th><center>Tipo<br>de<br>prueba</center></th><th><center>Marca<br>alcanzada</center></th><th><center>Convocatoria<br>a juegos<br>disciplina<br>/discapacidad</center></th><th><center>Género</center></th><th><center>Categoría deportiva</center></th><th><center>Nombres</center></th><th><center>Apellidos</center></th><th><center>Provincia<br>representación</center></th><th><center>Acciones</center></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><td>'+1+'</td><td colspan="1"><select id="deportes'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td colspan="1"><input type="text" id="modalidad'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="genero'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="nombres'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="apellidos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="provinciaRe'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td><nav class="btn-pluss-wrapper fila__otrosHabilitantes'+parametro8[0]+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarFila__parE'+parametro8[0]+'" name="guardarFila__parE'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFila__parE"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li></ul></div></nav></td></tr><tbody class="filas__resultados'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="documentos__centrados"><th colspan="4"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;" class="otros__altos__modificas">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"></tr></tbody><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="2" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="3"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="5"><center><a class="btn btn-primary" id="guardarTecnicos'+parametro8[0]+'" name="guardarTecnicos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';			
              
          
                  /*=============================
                  =            Función acordión   =
                  =============================*/
                  
                  acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7,0);
                  
                  /*=====  End of Función acordión  ======*/
          
          
                  if (parametro14==3 || parametro14==80) {
          
                    $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, informe médico y disciplinario de atletas, registro fotográfico, registro de resultados emitidos por el organizador del evento');
          
                  }else if (parametro14==2) {
          
                    $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, registro fotográfico');
          
                  }else if (parametro14==2) {
          
                    $(".otros__altos__modificas").html('Listado de participantes, registro fotográfico');
          
                  }else if(parametro14==25){
          
                    $(".otros__altos__modificas").html('Informe de cumplimiento trimestral rehabilitación y readecuación, contratos, planillas generadas, cronograma de ejecución, solicitudes de pago, facturas, CUR de pagos, Garantías Técnicas, planos AS Built, Actas de recepción provisional y / o definitiva, registro fotográfico antes y después de la intervención');
          
                  }else if(parametro14==105){
          
                    $(".otros__altos__modificas").html('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
          
          
                  }else if(parametro14==1){
          
                    $(".otros__altos__modificas").html('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados');
          
          
                  }
          
          
                  
                  var longitudCaracteres=function(parametro1,parametro2,counter){
          
                  $(parametro1).keyup(function(e){
          
                     if($(this).val().length > parametro2){
          
                          $(this).val($(this).val().substr(0, parametro2));
          
                          counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
          
                          counter.css("color","red");
          
                      }else{
          
                        // counter.html("<strong>"+$(this).val().length +"</strong>");
          
                        counter.css("color","black");
          
                        counter.css("font-size","10px");
          
                      }
          
          
                   });
          
                  }				
          
                  longitudCaracteres($("#rucOrganizacion"+parametro8[0]),13,$(".counter__Cedula"));
          
          
                  /*==============================
                  =            Fechas            =
                  ==============================*/
                  
                  $("#planificadoInicio"+parametro8[0]).val(parametro8[8]);
                  $("#planificadoFin"+parametro8[0]).val(parametro8[9]);
          
                  
                  funcion__solo__numero($(".solo__numeros"));
          
                  /*=====  End of Fechas  ======*/
          
          
                  /*===========================================
                  =            Fechas relacionales            =
                  ===========================================*/
          
                  funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]));
                  funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]));
                  funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoFin"+parametro8[0]));
          
                  // funcion_porcentajes__fechas__porcentajes($("#ejecutadoFin"+parametro8[0]),$("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]),$("#porcentajeA"+parametro8[0]));
                  
                  /*=====  End of Fechas relacionales  ======*/
          
          
                  /*==================================================
                  =            Select tipo organizaciones            =
                  ==================================================*/
          
                  $("#tipoParticipas"+parametro8[0]).change(function(e) {
          
                    let idContador=$(this).attr('idContador');
          
                    if ($(this).val()=="participacion") {
          
                      $("#rucOrganizacion"+idContador).removeAttr('style');
                      $("#nombreOrganizacion"+idContador).removeAttr('style');
          
                    }else{
                      $("#rucOrganizacion"+idContador).attr('style','display:none;');
                      $("#nombreOrganizacion"+idContador).attr('style','display:none;');
          
                    }
          
          
                  }); 				
                  
                  /*=====  End of Select tipo organizaciones  ======*/
                  
                  if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
          
                    $(".porcentaje__filas"+parametro8[0]).hide();
                    $("#porcentajeA"+parametro8[0]).hide();
                    $("#porcentajeA"+parametro8[0]).val(0);
          
                  }
          
          
                  if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
                    
                  }else{
                    $(".tipo__organizacion__evento"+parametro8[0]).remove();
                  }
          
                  if (parametro14==2 || parametro14==80) {
          
                    // $(".fila__no"+parametro8[0]).remove();
          
          
                  }else{
                
                    $(".fila__medallas__"+parametro8[0]).remove();
                  }
          
                  if (parametro14==1) {
          
                    $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO  DE LA CAPACITACIÓN');
                    $(".fecha__fin"+parametro8[0]).text('FECHA FIN DE LA CAPACITACIÓN');
          
                  }
          
                  if (parametro14==3 || parametro14==2 || parametro14==80) {
          
                    $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO ');
                    $(".fecha__fin"+parametro8[0]).text('FECHA FIN');
          
                    deportes__function($("#deportes"+parametro8[0]));
                    provincias__function($("#provinciaRe"+parametro8[0]));
          
                  }else{
          
                    $(".fila__alto__ren"+parametro8[0]).remove();
          
                  }
          
                  if (parametro14==2 || parametro14==80) {
          
                    $(".fila__alto__ren"+parametro8[0]).remove();
          
                  }
          
                  if (parametro14==2 || parametro14==3 || parametro14==4 || parametro14==80) {
          
                    $(".fila__capacitas"+parametro8[0]).append('<th rowspan="1" colspan="5">BENEFICIARIOS REALES</th>');
          
                    $(".fila__capacitas__2"+parametro8[0]).append('<th rowspan="1" colspan="3">MUJERES</th><th rowspan="1" colspan="1">HOMBRES</th><th rowspan="1" colspan="1">TOTAL</th>');
          
                    $(".fila__capacitas__3"+parametro8[0]).removeAttr('style');
          
                    funcion__sumador__real($("#mujeresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
                    funcion__sumador__real($("#hombresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
          
                    funcion__solo__numero($(".solo__numeros"));
          
                    funcion__cambio__de__numero($("#mujeresB"+parametro8[0]));			
                    funcion__cambio__de__numero($("#hombresB"+parametro8[0]));	
          
                    funcion__cambio__de__numero($("#oro"+parametro8[0]));	
                    funcion__cambio__de__numero($("#plata"+parametro8[0]));	
                    funcion__cambio__de__numero($("#bronce"+parametro8[0]));	
                    funcion__cambio__de__numero($("#capacitadores"+parametro8[0]));	
          
          
                    funcion__sumador__real($("#oro"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
                    funcion__sumador__real($("#plata"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
                    funcion__sumador__real($("#bronce"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
          
                  }
          
          
                  /*=====================================
                  =            Agretar otros            =
                  =====================================*/
          
          
                  $("#guardarFila__parE"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
          
                    $(this).hide();
          
                    funcion__agregar__filas__2($("#guardarFila__parE"+idContador),[idContador,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
          
          
                  });	
          
                  let contado3=1;
          
                  if (parametro14==80) {
          
                    $(".oculto__en__alto").hide();
          
                    // $(".resultado__col").removeAttr('colspan');
                    // $(".resultado__col").attr('colspan','4');
          
                  }
          
          
                  $("#agregarResuls"+parametro8[0]).click(function(event) {
          
                    contado3++;
          
                    let idContador=$(this).attr('idContador');
          
                    funcion__agregarFilas($(".filas__resultados"+idContador),['<td>'+contado3+'</td><td colspan="1"><select id="deportes'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td colspan="1"><input type="text" id="modalidad'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="genero'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="nombres'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><input type="text" id="apellidos'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"/></td><td colspan="1"><select id="provinciaRe'+contado3+'" class="ancho__total__input obligatorios obligatorios__resul__e'+contado3+'"></select></td><td><nav class="btn-pluss-wrapper otrosHabilitantes'+contado3+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado3+'" name="guardarOtros__agregado__2'+contado3+'" idPrincipal="'+idContador+'" idContador="'+contado3+'" class="editar__ides" idContador2="'+contado3+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarResul'+contado3+'" name="eliminarResul'+contado3+'" idPrincipal="'+contado3+'" idContador="'+idContador+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></td>'],idContador,contado3,"resultados__eventos");		
          
                      $("#eliminarResul"+contado3).click(function(event) {
          
                        let idContador=$(this).attr('idContador');
                        let idPrincipal=$(this).attr('idPrincipal');
          
                        funcion__eliminarFilas($(".fila__resultados__eventos"+idContador+idPrincipal));
          
                      });	
          
          
          
                      $("#guardarOtros__agregado__2"+contado3).click(function(event) {
          
                        let idContador=$(this).attr('idContador');
                        let idPrincipal=$(this).attr('idPrincipal');
          
                        $(this).hide();
          
                        funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),$("#deportes"+idContador).val(),$("#modalidad"+idContador).val(),$("#tipoPrueba"+idContador).val(),$("#marcaAlcanzada"+idContador).val(),$("#convocatoriaJuegos"+idContador).val(),$("#genero"+idContador).val(),$("#categoriaDeportiva"+idContador).val(),$("#nombres"+idContador).val(),$("#apellidos"+idContador).val(),$("#provinciaRe"+idContador).val()],$(".obligatorios__resul__e"+idContador),'eventos__resultados',"fila__otrosHabilitantes",idContador,false);
          
          
                      });							
          
                      deportes__function($("#deportes"+contado3));
                      provincias__function($("#provinciaRe"+contado3));
          
          
                  });	
                  
          
          
                  $("#guardarOtrosF"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulos');
          
                    $(this).hide();
          
                    funcion__agregar__filas__2($("#guardarOtrosF"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro12,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
          
          
                  });	
          
                  let contado2=0;
          
          
                //--------------------------------------------------
        
                  
        
                  for(i=0;i<3;i++){
        
                    contado2++;
          
                    let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                  
                    $(".col__otros__habili__2"+idContador +" td").remove();
                    
                    var spanArchivo = ""
                    if(i==0){
                      spanArchivo="Registro fotográfico de los eventos deportivos"
                    }else if(i==1)
                    {
                      spanArchivo="Listados de asistencia de atletas"
                    }else if(i==2)
                    {
                      spanArchivo="Resultados"
                    }
        
                    funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
                    $("#eliminarOtros"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
        
                      funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
        
                    });	
        
                    $("#guardarOtros__agregado"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
                      let rotulo=$(this).attr('rotulo');
                      let idContador2=$(this).attr('idContador2');
                      nombreArchivo=$(this).attr('nombre')
        
                      funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro12,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
        
        
                    });	
        
                    }
                  
                  /*=====  End of Agretar otros  ======*/
          
                  /*=========================================
                  =            Guardar generales            =
                  =========================================*/
                  
                  
                  $("#guardarTecnicos"+parametro8[0]).click(function(e) {
          
                    let idContador=$(this).attr('idContador');
          
                    let rucOrganizacion=$("#rucOrganizacion"+idContador).val();
          
                    let nombreOrganizacion=$("#nombreOrganizacion"+idContador).val();
          
                    let tipoParticipas=$("#tipoParticipas"+idContador).val();
          
                    $(this).hide();
          
                    if (parametro14==3 || parametro14==4) {
          
                      funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,parametro4,$("#organismoIdPrin").val(),$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#hombresB"+idContador).val(),$("#mujeresB"+idContador).val(),$("#totalB"+idContador).val(),$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#tipoEventos"+idContador).val(),$("#eventoTarea__ejecutado"+idContador).val(),$("#nivel"+idContador).val(),$("#totalEjecutados__al"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
          
          
                    }else if (parametro14==2 || parametro14==80) {
          
                      funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),$("#eventoTa"+idContador).val(),$("#prediccionR"+idContador).val(),$("#oro"+idContador).val(),$("#plata"+idContador).val(),$("#bronce"+idContador).val(),$("#totalMedallas"+idContador).val(),$("#cuartoOctavo"+idContador).val(),$("#analisisPar"+idContador).val(),$("#porcentajeA__medallas"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas,null,$("#ejecutadoInicio"+idContador).val(),null,$("#ejecutadoFin"+idContador).val()],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
          
                    }else{
          
                      funcion__guardado__matricez($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#organismoIdPrin").val(),parametro4,$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#mujeresB"+idContador).val(),$("#hombresB"+idContador).val(),$("#totalB"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);
          
                    }
          
          
                  }); 
                  
                  
                  /*=====  End of Guardar generales   ======*/
                  
                  
          
                }else{
          
                  $(parametro3).val(0);
          
                  $(parametro7).html(' ');
          
                }
          
              });
          
            });
          
  }

 /*=====================================
          =           tecnicos__recreativo         =
          =====================================*/

var checkeds__recorridos__general__tecnicos__matenimientos__recreativo=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13,parametro14){

            $(parametro2).click(function(e){
          
              $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
          
                var condicion = $(parametro2).is(":checked");
          
                $(parametro7).html(' ');
          
                if ($(parametro3).val()!=0) {
          
                    $(parametro2).prop("checked", false);
                    alertify.set("notifier","position", "top-center");
                  alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
          
                }
          
                if (condicion) {
          
                  $(parametro3).val(1);
          
                  let pestana1="";
                  let pestana2="";
                  let pestana3="";
          
          
                  if (parametro4=="primerTrimestre") {
                    rotulos = ['Enero', 'Febrero', 'Marzo'];
                  }else if (parametro4=="segundoTrimestre") {
                    rotulos = ['Abril', 'Mayo', 'Junio'];
                  }else if (parametro4=="tercerTrimestre") {
                    rotulos = ['Julio', 'Agosto', 'Septiembre'];
                  }else if (parametro4=="cuartoTrimestre") {
                    rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
                  }
                  
                  pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><thead><tr class="fila__medallas__'+parametro8[0]+'"><th rowspan="2" colspan="1" style="display:none!important;"><center>Evento tarea<br>/ejecutado</center></th><th rowspan="2" colspan="1" style="display:none!important;"><center>Predicción<br>de resultados</center></th><th rowspan="1" colspan="5" class="resultado__col"><center>RESULTADOS ALCANZADOS</center></th><th rowspan="2" colspan="1"><center>Analisis técnico<br>de la<br>participación</center></th><th rowspan="2" colspan="1" class="oculto__avances" style="display:none!important;"><center>% Porcentaje<br>avance</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><th><center>Oro</center></th><th><center>Plata</center></th><th><center>Bronce</center></th><th><center>Total<br>medallas</center></th><th class="oculto__en__alto"><center>4TO al 8VO</center></th></tr><tr class="fila__medallas__'+parametro8[0]+'"><td style="display:none!important;"><center><select id="eventoTa'+parametro8[0]+'" name="eventoTa'+parametro8[0]+'" class="ancho__total__input"><option value="no">No</option><option value="si">Si</option></select></center></td><td style="display:none!important;"><center><textarea id="prediccionR'+parametro8[0]+'" name="prediccionR'+parametro8[0]+'" style="font-size:11px!important;" class="prediccionR'+parametro8[0]+' ancho__total__textareas"></textarea></center></td><td><center><input type="text" id="oro'+parametro8[0]+'" name="oro'+parametro8[0]+'" value="0" class="oro'+parametro8[0]+' sumas__medallas__'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><input type="text" id="plata'+parametro8[0]+'" name="plata'+parametro8[0]+'" value="0" class="plata'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="bronce'+parametro8[0]+'" value="0" name="bronce'+parametro8[0]+'" class="bronce'+parametro8[0]+' ancho__total__input obligatorios solo__numeros sumas__medallas__'+parametro8[0]+'"/></center></td><td><center><input type="text" id="totalMedallas'+parametro8[0]+'" name="totalMedallas'+parametro8[0]+'" value="0" class="totalMedallas'+parametro8[0]+' ancho__total__input obligatorios solo__numeros" readonly=""/></center></td><td><center><input type="text" id="cuartoOctavo'+parametro8[0]+'" name="cuartoOctavo'+parametro8[0]+'" value="0" class="oculto__en__alto cuartoOctavo'+parametro8[0]+' ancho__total__input obligatorios solo__numeros"/></center></td><td><center><textarea id="analisisPar'+parametro8[0]+'" name="analisisPar'+parametro8[0]+'" style="font-size:11px!important;" class="analisisPar'+parametro8[0]+' ancho__total__textareas obligatorios"></textarea></center></td><td style="display:none!important;"><center><input type="text" id="porcentajeA__medallas'+parametro8[0]+'" name="porcentajeA__medallas'+parametro8[0]+'" class="porcentajeA__medallas'+parametro8[0]+' ancho__total__input solo__numeros"/></center></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__no'+parametro8[0]+'"><th rowspan="1" colspan="2" class="fecha__inicio'+parametro8[0]+'">Fecha de inicio</th><th rowspan="1" colspan="2" class="fecha__fin'+parametro8[0]+'">Fecha fin</th><th rowspan="2" colspan="1" class="porcentaje__filas'+parametro8[0]+'">% avance</th></tr><tr class="fila__no'+parametro8[0]+'"><th>Planificado</th><th>Ejecutado</th><th>Planificado</th><th>Ejecutado</th></tr></thead></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tbody><tr class="fila__no'+parametro8[0]+'"><td><center><input type="date" id="planificadoInicio'+parametro8[0]+'" name="planificadoInicio'+parametro8[0]+'" class="planificadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><input type="date" id="ejecutadoInicio'+parametro8[0]+'" name="ejecutadoInicio'+parametro8[0]+'" class="ejecutadoInicio'+parametro8[0]+' ancho__total__input obligatorios"/></center></td><td><center><input type="date" id="planificadoFin'+parametro8[0]+'" name="planificadoFin'+parametro8[0]+'" class="planificadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td><center><input type="date" id="ejecutadoFin'+parametro8[0]+'" name="ejecutadoFin'+parametro8[0]+'" class="ejecutadoFin'+parametro8[0]+' ancho__total__input"/></center></td><td style="display:flex;"><input type="text" id="porcentajeA'+parametro8[0]+'" name="porcentajeA'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros"/></td></tr><tr class="fila__alto__ren'+parametro8[0]+'" style="display:none!important;"><td colspan="1"><input type="text" id="tipoEventos'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="2"><input type="text" id="eventoTarea__ejecutado'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="nivel'+parametro8[0]+'" class="ancho__total__input"/></td><td colspan="1"><input type="text" id="totalEjecutados__al'+parametro8[0]+'" class="ancho__total__input solo__numeros"/></td></tr></table><table><tr class="fila__capacitas'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__2'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'"></tr><tr class="fila__capacitas__3'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+' filaIndicadora__administra'+parametro8[0]+'" style="display:none!important;"><td colspan="3"><input type="text" id="mujeresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/><td><input type="text" id="hombresB'+parametro8[0]+'" value="0" class="enlaces__b sumas__'+parametro8[0]+' ancho__total__input solo__numeros"/></td><td><input type="text" id="totalB'+parametro8[0]+'" class="enlaces__b ancho__total__input" value="0" readonly=""/></td></td></tr></table><table class="tipo__organizacion__evento'+parametro8[0]+'"><tbody><tr class="filaIndicadora__administra'+parametro8[0]+'"><td>Seleccione tipo de organización del evento</td><td><select id="tipoParticipas'+parametro8[0]+'" class="ancho__total__input obligatorios" idContador="'+parametro8[0]+'"><option value="">--Seleccione tipo organización del evento</option><option value="participacion">Participación</option><option value="organizacion">Organización</option></select><input id="rucOrganizacion'+parametro8[0]+'" class="ancho__total__input solo__numeros" style="display:none!important;" placeholder="Ingrese ruc organización"/><input id="nombreOrganizacion'+parametro8[0]+'" class="ancho__total__input" placeholder="Ingrese nombre organización" style="display:none!important;"/></td></tr></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="fila__alto__ren'+parametro8[0]+'"><th colspan="11"><center>Resultados</center></th><th><a class="btn btn-warning" id="agregarResuls'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><th style="width:10px!important;"><center>N-</center></th><th><center>Deporte</center></th><th><center>Modalidad</center></th><th><center>Tipo<br>de<br>prueba</center></th><th><center>Marca<br>alcanzada</center></th><th><center>Convocatoria<br>a juegos<br>disciplina<br>/discapacidad</center></th><th><center>Género</center></th><th><center>Categoría deportiva</center></th><th><center>Nombres</center></th><th><center>Apellidos</center></th><th><center>Provincia<br>representación</center></th><th><center>Acciones</center></th></tr><tr class="fila__alto__ren'+parametro8[0]+'"><td>'+1+'</td><td colspan="1"><select id="deportes'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td colspan="1"><input type="text" id="modalidad'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="tipoPrueba'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="marcaAlcanzada'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="convocatoriaJuegos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="genero'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"><option value="Masculino">Masculino</option><option value="Femenino">Femenino</option></select></td><td colspan="1"><input type="text" id="categoriaDeportiva'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="nombres'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><input type="text" id="apellidos'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"/></td><td colspan="1"><select id="provinciaRe'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorios__resul__e'+parametro8[0]+'"></select></td><td><nav class="btn-pluss-wrapper fila__otrosHabilitantes'+parametro8[0]+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarFila__parE'+parametro8[0]+'" name="guardarFila__parE'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFila__parE"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li></ul></div></nav></td></tr><tbody class="filas__resultados'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="documentos__centrados"><th colspan="4"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;" class="otros__altos__modificas"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"></tr></tbody><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="2" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="3"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="5"><center><a class="btn btn-primary" id="guardarTecnicos'+parametro8[0]+'" name="guardarTecnicos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';			
              
          
                  /*=============================
                  =            Función acordión   =
                  =============================*/
                  
                  acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7,0);
                  
                  /*=====  End of Función acordión  ======*/
          
          
                  if (parametro14==3 || parametro14==80) {
          
                    $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, informe médico y disciplinario de atletas, registro fotográfico, registro de resultados emitidos por el organizador del evento');
          
                  }else if (parametro14==2) {
          
                    $(".otros__altos__modificas").html('Listado de asistencia de atletas suscrito por el entrenador, registro fotográfico');
          
                  }else if (parametro14==2) {
          
                    $(".otros__altos__modificas").html('Listado de participantes, registro fotográfico');
          
                  }else if(parametro14==25){
          
                    $(".otros__altos__modificas").html('Informe de cumplimiento trimestral rehabilitación y readecuación, contratos, planillas generadas, cronograma de ejecución, solicitudes de pago, facturas, CUR de pagos, Garantías Técnicas, planos AS Built, Actas de recepción provisional y / o definitiva, registro fotográfico antes y después de la intervención');
          
                  }else if(parametro14==105){
          
                    $(".otros__altos__modificas").html('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
          
          
                  }else if(parametro14==1){
          
                    $(".otros__altos__modificas").html('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados');
          
          
                  }
          
                  
                  var longitudCaracteres=function(parametro1,parametro2,counter){
          
                  $(parametro1).keyup(function(e){
          
                     if($(this).val().length > parametro2){
          
                          $(this).val($(this).val().substr(0, parametro2));
          
                          counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
          
                          counter.css("color","red");
          
                      }else{
          
                        // counter.html("<strong>"+$(this).val().length +"</strong>");
          
                        counter.css("color","black");
          
                        counter.css("font-size","10px");
          
                      }
          
          
                   });
          
                  }				
          
                  longitudCaracteres($("#rucOrganizacion"+parametro8[0]),13,$(".counter__Cedula"));
          
          
                  /*==============================
                  =            Fechas            =
                  ==============================*/
                  
                  $("#planificadoInicio"+parametro8[0]).val(parametro8[8]);
                  $("#planificadoFin"+parametro8[0]).val(parametro8[9]);
          
                  
                  funcion__solo__numero($(".solo__numeros"));
          
                  /*=====  End of Fechas  ======*/
          
          
                  /*===========================================
                  =            Fechas relacionales            =
                  ===========================================*/
          
                  funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]));
                  funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]));
                  funcion_porcentajes__fechas($("#planificadoInicio"+parametro8[0]),$("#ejecutadoFin"+parametro8[0]));
          
                  // funcion_porcentajes__fechas__porcentajes($("#ejecutadoFin"+parametro8[0]),$("#planificadoInicio"+parametro8[0]),$("#planificadoFin"+parametro8[0]),$("#ejecutadoInicio"+parametro8[0]),$("#porcentajeA"+parametro8[0]));
                  
                  /*=====  End of Fechas relacionales  ======*/
          
          
                  /*==================================================
                  =            Select tipo organizaciones            =
                  ==================================================*/
          
                  $("#tipoParticipas"+parametro8[0]).change(function(e) {
          
                    let idContador=$(this).attr('idContador');
          
                    if ($(this).val()=="participacion") {
          
                      $("#rucOrganizacion"+idContador).removeAttr('style');
                      $("#nombreOrganizacion"+idContador).removeAttr('style');
          
                    }else{
                      $("#rucOrganizacion"+idContador).attr('style','display:none;');
                      $("#nombreOrganizacion"+idContador).attr('style','display:none;');
          
                    }
          
          
                  }); 				
                  
                  /*=====  End of Select tipo organizaciones  ======*/
                  
                  if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
          
                    $(".porcentaje__filas"+parametro8[0]).hide();
                    $("#porcentajeA"+parametro8[0]).hide();
                    $("#porcentajeA"+parametro8[0]).val(0);
          
                  }
          
          
                  if (parametro14==1 || parametro14==2 || parametro14==80 || parametro14==3 || parametro14==4) {
                    
                  }else{
                    $(".tipo__organizacion__evento"+parametro8[0]).remove();
                  }
          
                  if (parametro14==2 || parametro14==80) {
          
                    // $(".fila__no"+parametro8[0]).remove();
          
          
                  }else{
                
                    $(".fila__medallas__"+parametro8[0]).remove();
                  }
          
                  if (parametro14==1) {
          
                    $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO  DE LA CAPACITACIÓN');
                    $(".fecha__fin"+parametro8[0]).text('FECHA FIN DE LA CAPACITACIÓN');
          
                  }
          
                  if (parametro14==3 || parametro14==2 || parametro14==80) {
          
                    $(".fecha__inicio"+parametro8[0]).text('FECHA INICIO ');
                    $(".fecha__fin"+parametro8[0]).text('FECHA FIN');
          
                    deportes__function($("#deportes"+parametro8[0]));
                    provincias__function($("#provinciaRe"+parametro8[0]));
          
                  }else{
          
                    $(".fila__alto__ren"+parametro8[0]).remove();
          
                  }
          
                  if (parametro14==2 || parametro14==80) {
          
                    $(".fila__alto__ren"+parametro8[0]).remove();
          
                  }
          
                  if (parametro14==2 || parametro14==3 || parametro14==4 || parametro14==80) {
          
                    $(".fila__capacitas"+parametro8[0]).append('<th rowspan="1" colspan="5">BENEFICIARIOS REALES</th>');
          
                    $(".fila__capacitas__2"+parametro8[0]).append('<th rowspan="1" colspan="3">MUJERES</th><th rowspan="1" colspan="1">HOMBRES</th><th rowspan="1" colspan="1">TOTAL</th>');
          
                    $(".fila__capacitas__3"+parametro8[0]).removeAttr('style');
          
                    funcion__sumador__real($("#mujeresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
                    funcion__sumador__real($("#hombresB"+parametro8[0]),$("#totalB"+parametro8[0]),$(".sumas__"+parametro8[0]));
          
                    funcion__solo__numero($(".solo__numeros"));
          
                    funcion__cambio__de__numero($("#mujeresB"+parametro8[0]));			
                    funcion__cambio__de__numero($("#hombresB"+parametro8[0]));	
          
                    funcion__cambio__de__numero($("#oro"+parametro8[0]));	
                    funcion__cambio__de__numero($("#plata"+parametro8[0]));	
                    funcion__cambio__de__numero($("#bronce"+parametro8[0]));	
          
          
                    funcion__sumador__real($("#oro"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
                    funcion__sumador__real($("#plata"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
                    funcion__sumador__real($("#bronce"+parametro8[0]),$("#totalMedallas"+parametro8[0]),$(".sumas__medallas__"+parametro8[0]));
          
                  }
          
   
                  let contado2=0;
    
                  for(i=0;i<2;i++){
        
                    contado2++;
          
                    let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                  
                    $(".col__otros__habili__2"+idContador +" td").remove();
                    
                    var spanArchivo = ""
                    if(i==0){
                      spanArchivo="Registro fotográfico de los eventos recreativos"
                    }else if(i==1)
                    {
                      spanArchivo="Listado de participantes de eventos recreativos"
                    }
        
                    funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
                    $("#eliminarOtros"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
        
                      funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
        
                    });	
        
                    $("#guardarOtros__agregado"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
                      let rotulo=$(this).attr('rotulo');
                      let idContador2=$(this).attr('idContador2');
                      nombreArchivo=$(this).attr('nombre')
        
                      funcion__agregar__filas($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro12,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
        
        
                    });	
        
                    }
                  
                  /*=====  End of Agretar otros  ======*/
          
                  /*=========================================
                  =            Guardar generales            =
                  =========================================*/
                  
                  
                  $("#guardarTecnicos"+parametro8[0]).click(function(e) {
          
                    let idContador=$(this).attr('idContador');
          
                    let rucOrganizacion=$("#rucOrganizacion"+idContador).val();
          
                    let nombreOrganizacion=$("#nombreOrganizacion"+idContador).val();
          
                    let tipoParticipas=$("#tipoParticipas"+idContador).val();


          
                    $(this).hide();

                    var validador = validacionRegistro( $(".obligatorioOtros__1"));
                    validacionRegistroMostrarErrores( $(".obligatorioOtros__1"));
        
                    var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
                    validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));
        
                    if (validador == false && validador2 == false) {
        
                      alertify.set("notifier", "position", "top-center");
                      alertify.notify("Campos obligatorios", "error", 5, function () { });
                  
                      $(parametro1).show();
                  
                    } else {

          
                    if (parametro14==3 || parametro14==4) {
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarTecnicos"+idContador),$(".obligatorios"),[idContador,parametro4,$("#organismoIdPrin").val(),$("#observaciones__tecnicas__"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#hombresB"+idContador).val(),$("#mujeresB"+idContador).val(),$("#totalB"+idContador).val(),$("#planificadoInicio"+idContador).val(),$("#ejecutadoInicio"+idContador).val(),$("#planificadoFin"+idContador).val(),$("#ejecutadoFin"+idContador).val(),$("#porcentajeA"+idContador).val(),$("#tipoEventos"+idContador).val(),$("#eventoTarea__ejecutado"+idContador).val(),$("#nivel"+idContador).val(),$("#totalEjecutados__al"+idContador).val(),rucOrganizacion,nombreOrganizacion,tipoParticipas],false,false,false,false,parametro13,false,false,false,false,"#rotulo-tab",$(".filaIndicadora__administra"+parametro8[0]),true);

                    }
          
                    }
                  }); 
                  
                  
                  /*=====  End of Guardar generales   ======*/
                  
                  
          
                }else{
          
                  $(parametro3).val(0);
          
                  $(parametro7).html(' ');
          
                }
          
              });
          
            });
          
}

/*=====================================
  =           capacitacion_presupuestaria           =
=====================================*/



var checkeds__recorridos__general__capacitacion_presupuestaria=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

            $(parametro2).click(function(e){
          
              $.getScript("layout/scripts/js/validacionesGenerales.js",function(){
          
                var condicion = $(parametro2).is(":checked");
          
                $(parametro7).html(' ');
                console.log("parametro7");
                console.log(parametro7);
                if ($(parametro3).val()!=0) {
          
                    $(parametro2).prop("checked", false);
                    alertify.set("notifier","position", "top-center");
                  alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});
          
                }
          
                if (condicion) {
          
                  $(parametro3).val(1);
          
                  let pestana1="";
                  let pestana2="";
                  let pestana3="";

                  var confirm= alertify.confirm('¿Realizó contratación pública? SI / NO?','¿Realizó contratación pública? SI / NO',null,null).set('labels', {ok:'Si', cancel:'NO'});  

                  confirm.set({transition:'slide'});  
                      
                  confirm.set('onok', function(){ 

                    insertar__registro_contrataciones__publicas_seguimiento(parametro8[8],"SI","",parametro4);
          
                    $('#contrataciones__itemsSeguimiento').modal('show');
          
                    obtenerContratacionPublicaPoaSeguimiento("obtener_contratacion_Publica_Seguimiento",parametro8[8],parametro8[0],parametro4);
          
                  });  
                  confirm.set('oncancel', function(){ 
                    $('#contrataciones__NoitemsSeguimiento').modal('show');
                    noContratacionPublicaPoaSeguimiento(parametro8[8],parametro4);
                  }); 
          
          
                  if (parametro4=="primerTrimestre") {
                    rotulos = ['Enero', 'Febrero', 'Marzo'];
                  }else if (parametro4=="segundoTrimestre") {
                    rotulos = ['Abril', 'Mayo', 'Junio'];
                  }else if (parametro4=="tercerTrimestre") {
                    rotulos = ['Julio', 'Agosto', 'Septiembre'];
                  }else if (parametro4=="cuartoTrimestre") {
                    rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
                  }
          
                  let totalTotales=0;
          
          
                  if (parametro8[7]==null) {
          
                    totalTotales=parseFloat(parametro8[5]) - 0;
          
                  }else{
          
                    totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);
          
                  }
          
                  pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';
          
                  pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';
          
                  pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	
          
                  /*=============================
                  =            Función acordión   =
                  =============================*/
                  
                  acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
                  
                  /*=====  End of Función acordión  ======*/
          
                  if (parametro13==125) {
          
                    $(".otros__dados__documentos").text('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');
          
                  }else if (parametro13==126) { 
          
                    $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');
          
                  }else if (parametro13==158) { 
          
                    $(".otros__dados__documentos").text('Documentos de Respaldo');
          
                  }else if (parametro13==425) { 
          
                    $(".otros__dados__documentos").text('Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros, copia del contrato');
          
                  }
          
          
                  /*==============================================
                  =            Funcion maximo digitos            =
                  ==============================================*/
                  
                  var longitudCaracteres=function(parametro1,parametro2,counter){
          
                  $(parametro1).keyup(function(e){
          
                     if($(this).val().length > parametro2){
          
                          $(this).val($(this).val().substr(0, parametro2));
          
                          counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");
          
                          counter.css("color","red");
          
                      }else{
          
                        // counter.html("<strong>"+$(this).val().length +"</strong>");
          
                        counter.css("color","black");
          
                        counter.css("font-size","10px");
          
                      }
          
          
                   });
          
                  }				
          
                  longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
                  longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
                  longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
                  
                  /*=====  End of Funcion maximo digitos  ======*/
                  
          
          
                  /*==================================================
                  =            Obtener valores efectuados            =
                  ==================================================*/
                  
                  var valorEfectuado=$(".efectuadorMontos").val();
          
                  $("#valorAsignado__meses").val(valorEfectuado);			
                  
                  /*=====  End of Obtener valores efectuados  ======*/
                  
                  /*===============================================
                  =            Removiendo obligatorios            =
                  ===============================================*/
                  
          
                  
                  if (parametro8[6]!=null && parametro8[6]!="") {
          
                    $(".fila__facturas"+parametro8[0]).hide();
                    $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
                    $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
                    $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
                    $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
                    $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
                    $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          
                    $("#facturas"+parametro8[0]).removeClass('obligatorios');
                    $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
                    $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
                    $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
                    $("#monto"+parametro8[0]).removeClass('obligatorios');
                    $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');
          
                    $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');
          
                  }
                  
                  
                  if (parametro8[6]!=null && parametro8[6]!="") {
          
                    $(".fila__facturas__2"+parametro8[0]).hide();
                    $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
                    $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
                    $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
                    $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
                    $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
                    $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          
                    $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
                    $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
                    $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
                    $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
                    $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
                    $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
                    $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
                  }				
                  
          
          
                  
                  if (parametro8[6]!=null && parametro8[6]!="") {
          
                    $(".fila__facturas__3"+parametro8[0]).hide();
                    $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
                    $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
                    $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
                    $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
                    $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
                    $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          
                    $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
                    $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
                    $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
                    $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
                    $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
                    $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
                    $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
                  }				
                  
                  
                  
                  /*=====  End of Removiendo obligatorios  ======*/
                  
                  if (parametro12==1) {
          
                    $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');
          
                    $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');
          
                    $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');
          
          
                  }
                  
                  /*============================================
                  =            Funciones necesarias            =
                  ============================================*/
          
                  funcion__solo__numero__montos($(".solo__numeros__montos"));	
                  funcion__solo__numero($(".solo__numeros"));
          
                  funcion__cambio__de__numero($("#monto"+parametro8[0]));
                  funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
                  funcion__cambio__de__numero($("#monto__3"+parametro8[0]));
          
                  funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
                  funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
                  funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));
          
                  funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);
          
                  funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);
          
                  funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
                  
                  funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
          
                  funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
          
                  funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
                  
                  
                  /*=====  End of Funciones necesarias  ======*/
          
                  /*====================================
                  =            Click al dar            =
                  ====================================*/
                  
          
                  $("#monto"+parametro8[0]).on('input', function () {
          
                    funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
          
                  });					
                  
                  
          
                  $("#monto__2"+parametro8[0]).on('input', function () {
          
                    funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
          
                  });					
                  
          
          
                  $("#monto__3"+parametro8[0]).on('input', function () {
          
                    funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));
          
                  });					
                  
                  
                  /*=====  End of Click al dar  ======*/
                  
          
                  /*============================================
                  =            Variables utilizadas            =
                  ============================================*/
                  
                  let contado=0;
                  let contado2=0;
                  
                  /*=====  End of Variables utilizadas  ======*/
        
                  /*============================================
                  =            Filas Agregadas Honorarios    =
                  ============================================*/
        
        
                  $("#Febrero-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__2"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }

                        funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
                    
            
                        $("#eliminarOtros__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
            
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
            
            
                        });	
                          $("#datosHonorarios").val("")
                      }
                  });	
        
                  $("#Mayo-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__2"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
          
                        funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
                    
            
                        $("#eliminarOtros__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
            
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
            
            
                        });	
          
                          $("#datosHonorarios").val("")
                      }
                  });	
        
                  $("#Agosto-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__2"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
          
                        funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
                    
            
                        $("#eliminarOtros__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
            
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
            
            
                        });	
          
                          $("#datosHonorarios").val("")
                      }
                  });	
                  
                  $("#Noviembre-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__2"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
          
                      if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
                        Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
                      }
          
                      if($("#datosHonorarios").val()==""){
          
                        funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
                    
            
                        $("#eliminarOtros__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado__2"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
            
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
            
            
                        });	
          
          
                        
                      }
                        
          
          
          
                          $("#datosHonorarios").val("")
                      }
                  });		
        
        
        
                  
                   
                  for(i=0;i<5;i++){
        
                      contado2++;
                     
                      let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                      let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                     
                      
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
          
                     
        
                         
                    
                        funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
                    
            
                        $("#eliminarOtros"+contado2).click(function(event) {
        
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
        
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
            
            
                        });	
          
          
                        
                      
                        
          
          
          
                          $("#datosHonorarios").val("")
                  }
                
        
                  
                    
        
                  $("#Enero-tab").on('click', function () {
        
                    let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                   
                    
                    $(".col__otros__habili"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
                   
                    
                        funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
                    
            
                        $("#eliminarOtros"+contado2).click(function(event) {
        
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
        
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
            
            
                        });	
          
                          $("#datosHonorarios").val("")
                      }
                  });	
        
                  $("#Abril-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                   
                    
                    $(".col__otros__habili"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
                        funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
                    
            
                        $("#eliminarOtros"+contado2).click(function(event) {
        
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
        
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
            
            
                        });	

                          $("#datosHonorarios").val("")
                      }
                  });	
        
                  $("#Julio-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                   
                    
                    $(".col__otros__habili"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
                    
                        funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
                    
            
                        $("#eliminarOtros"+contado2).click(function(event) {
        
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
        
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
            
            
                        });	

                          $("#datosHonorarios").val("")
                      }
                  });	
                  
                  $("#Octubre-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
                   
                    
                    $(".col__otros__habili"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
                    
                        funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
                    
            
                        $("#eliminarOtros"+contado2).click(function(event) {
        
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
            
                          funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
            
                        });	
            
                        $("#guardarOtros__agregado"+contado2).click(function(event) {
            
                          let idContador=$(this).attr('idContador');
                          let idPrincipal=$(this).attr('idPrincipal');
                          let rotulo=$(this).attr('rotulo');
                          let idContador2=$(this).attr('idContador2');
                          nombreArchivo=$(this).attr('nombre')
        
                          funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
            
            
                        });	

                          $("#datosHonorarios").val("")
                      }
                  });		
        
        
        
        
                  $("#Marzo-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__3"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
            
                        funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		
        
                    $("#eliminarOtros__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
        
                      funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));
        
                    });	
        
                    $("#guardarOtros__agregado__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
                      let rotulo=$(this).attr('rotulo');
                      let idContador2=$(this).attr('idContador2');
                      nombreArchivo=$(this).attr('nombre')
                      funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));
        
        
                    });	
                          $("#datosHonorarios").val("")
                      }
                  });	
        
                  $("#Junio-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__3"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
            
                        funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		
        
                    $("#eliminarOtros__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
        
                      funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));
        
                    });	
        
                    $("#guardarOtros__agregado__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
                      let rotulo=$(this).attr('rotulo');
                      let idContador2=$(this).attr('idContador2');
                      nombreArchivo=$(this).attr('nombre')
                      funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));
        
        
                    });	
                          $("#datosHonorarios").val("")
                      }
                  });	
        
                  $("#Septiembre-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__3"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
            
                        funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		
        
                    $("#eliminarOtros__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
        
                      funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));
        
                    });	
        
                    $("#guardarOtros__agregado__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
                      let rotulo=$(this).attr('rotulo');
                      let idContador2=$(this).attr('idContador2');
                      nombreArchivo=$(this).attr('nombre')
                      funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));
        
        
                    });	
          
          
                          $("#datosHonorarios").val("")
                      }
                  });	
                  
                  $("#Diciembre-tab").on('click', function () {
                   
                    let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
                    let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
                    
                    $(".col__otros__habili__3"+idContador +" td").remove();
          
                    for(i=0;i<5;i++){
        
                      contado2++;
            
                      
                      
                      var spanArchivo = ""
                      if(i==0){
                        spanArchivo="RUC "
                      }else if(i==1)
                      {
                        spanArchivo="Informe de Cumplimiento "
                      }else if(i==2)
                      {
                        spanArchivo="Acta de Entrega-Recepción"
                      }else if(i==3)
                      {
                        spanArchivo="Contrato "
                      }else if(i==4)
                      {
                        spanArchivo="OTROS "
                      }
            
                        funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		
        
                    $("#eliminarOtros__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
        
                      funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));
        
                    });	
        
                    $("#guardarOtros__agregado__3"+contado2).click(function(event) {
        
                      let idContador=$(this).attr('idContador');
                      let idPrincipal=$(this).attr('idPrincipal');
                      let rotulo=$(this).attr('rotulo');
                      let idContador2=$(this).attr('idContador2');
                      nombreArchivo=$(this).attr('nombre')
                      funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));
        
        
                    });	
                          $("#datosHonorarios").val("")
                      }
                  });		
                  
                    
        
        
        
        
                    
                  
                  /*=====  End of Filas Agregadas  ======*/
          
                  
                  
                  /*===================================
                  =            Guardadores            =
                  ===================================*/
          
                  $("#guardarFac"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulo');
          
                    $(this).hide();
          
                    let contador__n=$("#autorizacion"+idContador).val();
                    let contador__n2=$("#numeroRuc"+idContador).val();
          
                    if (contador__n.length>=10 && contador__n2.length>=13) {
          
                      funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));
          
                    }else{
          
                      alertify.set("notifier","position", "top-center");
                      alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});
          
                      $(this).show();
          
          
                    }
          
          
                  });	
          
                  $("#guardarFac__2"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulo');
          
                    $(this).hide();
          
                    
                    let contador__n=$("#autorizacion__2"+idContador).val();
                    let contador__n2=$("#numeroRuc__2"+idContador).val();
          
                    if (contador__n.length>=10 && contador__n2.length>=13) {
          
                      funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));
          
                    }else{
          
                      alertify.set("notifier","position", "top-center");
                      alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});
          
                      $(this).show();
          
          
                    }
          
                  });	
          
          
                  $("#guardarFac__3"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulo');
          
                    $(this).hide();
          
                    
                    let contador__n=$("#autorizacion__3"+idContador).val();
                    let contador__n2=$("#numeroRuc__3"+idContador).val();
          
                    if (contador__n.length>=10 && contador__n2.length>=13) {
          
                      funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));
          
                    }else{
          
                      alertify.set("notifier","position", "top-center");
                      alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});
          
                      $(this).show();
          
          
                    }
          
                  });	
          
          
                  $("#guardarOtrosF"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulos');
          
                    $(this).hide();
          
                    funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
          
          
                  });	
                  $("#guardarOtrosF2"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulos');
          
                    $(this).hide();
          
                    funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
          
          
                  });	
          
          
          
                  $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulos');
          
                    $(this).hide();
          
                    funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
          
          
                  });	
          
          
          
          
                  $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {
          
                    let idContador=$(this).attr('idContador');
                    let idPrincipal=$(this).attr('idPrincipal');
                    let rotulo=$(this).attr('rotulos');
          
                    $(this).hide();
          
                    funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));
          
          
                  });	
          
          
          
                  /*=====  End of Guardadores  ======*/		
          
                  /*===========================================
                  =            Guardados generales            =
                  ===========================================*/
                  
                  $("#guardarAdministrativos"+parametro8[0]).click(function(e) {
        
                   
        
                    var validador = validacionRegistro( $(".obligatorioOtros__4"));
                    validacionRegistroMostrarErrores( $(".obligatorioOtros__4"));
        
              
        
                    if (validador == false) {
        
                      alertify.set("notifier", "position", "top-center");
                      alertify.notify("Campos obligatorios", "error", 5, function () { });
                  
                      $(parametro1).show();
                  
                    } else {
                      
        
                    
          
                    let idContador=$(this).attr('idContador');
                    let idFila=$("#idPrincipal"+idContador).val();
          
                    let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);
          
                    if (mensualito==0) {
          
                      $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
                      $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
                      $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
                      $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
                      $("#monto"+idContador).removeClass('obligatorio__'+idContador);
                      $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);
          
                      $("#facturas"+idContador).removeClass('obligatorios');
                      $("#fechaDocumento"+idContador).removeClass('obligatorios');
                      $("#numeroRuc"+idContador).removeClass('obligatorios');
                      $("#autorizacion"+idContador).removeClass('obligatorios');
                      $("#monto"+idContador).removeClass('obligatorios');
                      $("#numeroFactura"+idContador).removeClass('obligatorios');
          
                      $("#cantidad__bien__1"+idContador).removeClass('obligatorios');
          
                    }				
          
                    $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
                    $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);
          
                    $(this).hide();
          
                    if (parametro12==1) {
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));
          
                    }else{
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));
          
                    }
          
                  } 
          
                  }); 
          
          
                  $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {

                    var validador = validacionRegistro( $(".obligatorioOtros__4"));
                    validacionRegistroMostrarErrores( $(".obligatorioOtros__4"));
        
              
        
                    if (validador == false) {
        
                      alertify.set("notifier", "position", "top-center");
                      alertify.notify("Campos obligatorios", "error", 5, function () { });
                  
                      $(parametro1).show();
                  
                    } else {

                   
          
                    let idContador=$(this).attr('idContador');
                    let idFila=$("#idPrincipal"+idContador).val();
          
                    let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);
          
                    if (mensualito==0) {
          
                      $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
                      $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
                      $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
                      $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
                      $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
                      $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);
          
                      $("#facturas__2"+idContador).removeClass('obligatorios__2');
                      $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
                      $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
                      $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
                      $("#monto__2"+idContador).removeClass('obligatorios__2');
                      $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');
          
                      $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
                      
                    }
          
                    $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
                    $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);
          
                    $(this).hide();
          
                    if (parametro12==1) {
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));
          
                    }else{
          
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));
          
                    }
          
                  }
          
                  }); 
          
                  $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {

                    var validador = validacionRegistro( $(".obligatorioOtros__4"));
                    validacionRegistroMostrarErrores( $(".obligatorioOtros__4"));
        
              
        
                    if (validador == false) {
        
                      alertify.set("notifier", "position", "top-center");
                      alertify.notify("Campos obligatorios", "error", 5, function () { });
                  
                      $(parametro1).show();
                  
                    } else {
          
                    let idContador=$(this).attr('idContador');
                    let idFila=$("#idPrincipal"+idContador).val();
          
                    let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);
          
                    if (mensualito==0) {
          
                      $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
                      $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
                      $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
                      $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
                      $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
                      $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);
          
                      $("#facturas__3"+idContador).removeClass('obligatorios__3');
                      $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
                      $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
                      $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
                      $("#monto__3"+idContador).removeClass('obligatorios__3');
                      $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');
          
                      $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
                      
                    }
          
          
                    $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
                    $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);
          
                    $(this).hide();
          
                    if (parametro12==1) {
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));
          
                    }else{
          
                      funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));
          
                    }
          
                    }
          
                  }); 				
                  
                  /*=====  End of Guardados generales  ======*/
                  
          
          
                }else{
          
                  $(parametro3).val(0);
          
                  $(parametro7).html(' ');
          
                }
          
              });
          
            });
          
}
        


/*=====================================
  =           competencia_presupuesto          =
=====================================*/



var checkeds__recorridos__general_competencia_presupuesto=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

  $(parametro2).click(function(e){

    $.getScript("layout/scripts/js/validacionesGenerales.js",function(){

      var condicion = $(parametro2).is(":checked");

      $(parametro7).html(' ');
      console.log("parametro7");
      console.log(parametro7);
      if ($(parametro3).val()!=0) {

          $(parametro2).prop("checked", false);
          alertify.set("notifier","position", "top-center");
        alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});

      }

      if (condicion) {

        $(parametro3).val(1);

        let pestana1="";
        let pestana2="";
        let pestana3="";

        var confirm= alertify.confirm('¿Realizó contratación pública? SI / NO?','¿Realizó contratación pública? SI / NO',null,null).set('labels', {ok:'Si', cancel:'NO'});  

        confirm.set({transition:'slide'});  
            
        confirm.set('onok', function(){ 

          insertar__registro_contrataciones__publicas_seguimiento(parametro8[8],"SI","",parametro4);

          $('#contrataciones__itemsSeguimiento').modal('show');

          obtenerContratacionPublicaPoaSeguimiento("obtener_contratacion_Publica_Seguimiento",parametro8[8],parametro8[0],parametro4);

        });  
        confirm.set('oncancel', function(){ 
          $('#contrataciones__NoitemsSeguimiento').modal('show');
          noContratacionPublicaPoaSeguimiento(parametro8[8],parametro4);
        }); 

        if (parametro4=="primerTrimestre") {
          rotulos = ['Enero', 'Febrero', 'Marzo'];
        }else if (parametro4=="segundoTrimestre") {
          rotulos = ['Abril', 'Mayo', 'Junio'];
        }else if (parametro4=="tercerTrimestre") {
          rotulos = ['Julio', 'Agosto', 'Septiembre'];
        }else if (parametro4=="cuartoTrimestre") {
          rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
        }

        let totalTotales=0;


        if (parametro8[7]==null) {

          totalTotales=parseFloat(parametro8[5]) - 0;

        }else{

          totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);

        }

        pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de Respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	

        /*=============================
        =            Función acordión   =
        =============================*/
        
        acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
        
        /*=====  End of Función acordión  ======*/

        if (parametro13==125) {

          $(".otros__dados__documentos").text('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');

        }else if (parametro13==126) { 

          $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');

        }else if (parametro13==158) { 

          $(".otros__dados__documentos").text('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados.');

        }else if (parametro13==425) { 

          $(".otros__dados__documentos").text('Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros, copia del contrato');

        }


        /*==============================================
        =            Funcion maximo digitos            =
        ==============================================*/
        
        var longitudCaracteres=function(parametro1,parametro2,counter){

        $(parametro1).keyup(function(e){

           if($(this).val().length > parametro2){

                $(this).val($(this).val().substr(0, parametro2));

                counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

                counter.css("color","red");

            }else{

              // counter.html("<strong>"+$(this).val().length +"</strong>");

              counter.css("color","black");

              counter.css("font-size","10px");

            }


         });

        }				

        longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
        
        /*=====  End of Funcion maximo digitos  ======*/
        


        /*==================================================
        =            Obtener valores efectuados            =
        ==================================================*/
        
        var valorEfectuado=$(".efectuadorMontos").val();

        $("#valorAsignado__meses").val(valorEfectuado);			
        
        /*=====  End of Obtener valores efectuados  ======*/
        
        /*===============================================
        =            Removiendo obligatorios            =
        ===============================================*/
        

        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas"+parametro8[0]).hide();
          $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);

          $("#facturas"+parametro8[0]).removeClass('obligatorios');
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
          $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
          $("#monto"+parametro8[0]).removeClass('obligatorios');
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');

          $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');

        }
        
        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__2"+parametro8[0]).hide();
          $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);

          $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
        }				
        


        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__3"+parametro8[0]).hide();
          $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);

          $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
        }				
        
        
        
        /*=====  End of Removiendo obligatorios  ======*/
        
        if (parametro12==1) {

          $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');

          $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');

          $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');


        }
        
        /*============================================
        =            Funciones necesarias            =
        ============================================*/

        funcion__solo__numero__montos($(".solo__numeros__montos"));	
        funcion__solo__numero($(".solo__numeros"));

        funcion__cambio__de__numero($("#monto"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__3"+parametro8[0]));

        funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));

        funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
        
        funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
        
        
        /*=====  End of Funciones necesarias  ======*/

        /*====================================
        =            Click al dar            =
        ====================================*/
        

        $("#monto"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        

        $("#monto__2"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        


        $("#monto__3"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        
        /*=====  End of Click al dar  ======*/
        

        /*============================================
        =            Variables utilizadas            =
        ============================================*/
        
        let contado=0;
        let contado2=0;
        
        /*=====  End of Variables utilizadas  ======*/

        /*============================================
        =            Filas Agregadas Honorarios    =
        ============================================*/


        $("#Febrero-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Mayo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Agosto-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Noviembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }



              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	


                $("#datosHonorarios").val("")
            }
        });		



        
         
        for(i=0;i<8;i++){

        

          contado2++;
                     
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          
          var spanArchivo = ""
          if(i==0){
            spanArchivo="RUC "
          }else if(i==1)
          {
            spanArchivo="Informe de Cumplimiento "
          }else if(i==2)
          {
            spanArchivo="Acta de Entrega-Recepción"
          }else if(i==3)
          {
            spanArchivo="Contrato "
          }else if(i==4)
          {
            spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
          }else if(i==5)
          {
            spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
          }else if(i==6)
          {
            spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
          }else if(i==7)
          {
            spanArchivo="OTROS "
          }

           

               
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	


              
            
              



                $("#datosHonorarios").val("")
        }
      

        
          

        $("#Enero-tab").on('click', function () {

          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
         
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Abril-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Julio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Octubre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });		




        $("#Marzo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Junio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Septiembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	


                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Diciembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contrato "
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP  "
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo  "
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });		
        
          




          
        
        /*=====  End of Filas Agregadas  ======*/

        
        
        /*===================================
        =            Guardadores            =
        ===================================*/

        $("#guardarFac"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          let contador__n=$("#autorizacion"+idContador).val();
          let contador__n2=$("#numeroRuc"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }


        });	

        $("#guardarFac__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__2"+idContador).val();
          let contador__n2=$("#numeroRuc__2"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarFac__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__3"+idContador).val();
          let contador__n2=$("#numeroRuc__3"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarOtrosF"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	
        $("#guardarOtrosF2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	



        $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));


        });	




        $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


        });	



        /*=====  End of Guardadores  ======*/		

        /*===========================================
        =            Guardados generales            =
        ===========================================*/
        
        $("#guardarAdministrativos"+parametro8[0]).click(function(e) {

          

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
            $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
            $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
            $("#monto"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);

            $("#facturas"+idContador).removeClass('obligatorios');
            $("#fechaDocumento"+idContador).removeClass('obligatorios');
            $("#numeroRuc"+idContador).removeClass('obligatorios');
            $("#autorizacion"+idContador).removeClass('obligatorios');
            $("#monto"+idContador).removeClass('obligatorios');
            $("#numeroFactura"+idContador).removeClass('obligatorios');

            $("#cantidad__bien__1"+idContador).removeClass('obligatorios');

          }				

          $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
          $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }

        

        }); 


        $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);

            $("#facturas__2"+idContador).removeClass('obligatorios__2');
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
            $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
            $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
            $("#monto__2"+idContador).removeClass('obligatorios__2');
            $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');

            $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
            
          }

          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }else{


            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }

          

        }); 

        $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);

            $("#facturas__3"+idContador).removeClass('obligatorios__3');
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
            $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
            $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
            $("#monto__3"+idContador).removeClass('obligatorios__3');
            $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');

            $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
            
          }


          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }

          

        }); 				
        
        /*=====  End of Guardados generales  ======*/
        


      }else{

        $(parametro3).val(0);

        $(parametro7).html(' ');

      }

    });

  });

}

/*=====================================
  =           mantenimiento_presupuestario        =
=====================================*/

var checkeds__recorridos__general_mantenimiento_presupuestario=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

  $(parametro2).click(function(e){

    $.getScript("layout/scripts/js/validacionesGenerales.js",function(){

      var condicion = $(parametro2).is(":checked");

      $(parametro7).html(' ');
      console.log("parametro7");
      console.log(parametro7);
      if ($(parametro3).val()!=0) {

          $(parametro2).prop("checked", false);
          alertify.set("notifier","position", "top-center");
        alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});

      }

      if (condicion) {

        $(parametro3).val(1);

        let pestana1="";
        let pestana2="";
        let pestana3="";

        var confirm= alertify.confirm('¿Realizó contratación pública? SI / NO?','¿Realizó contratación pública? SI / NO',null,null).set('labels', {ok:'Si', cancel:'NO'});  

        confirm.set({transition:'slide'});  
            
        confirm.set('onok', function(){ 

          insertar__registro_contrataciones__publicas_seguimiento(parametro8[8],"SI","",parametro4);

          $('#contrataciones__itemsSeguimiento').modal('show');

          obtenerContratacionPublicaPoaSeguimiento("obtener_contratacion_Publica_Seguimiento",parametro8[8],parametro8[0],parametro4);

        });  
        confirm.set('oncancel', function(){ 
          $('#contrataciones__NoitemsSeguimiento').modal('show');
          noContratacionPublicaPoaSeguimiento(parametro8[8],parametro4);
        }); 

        if (parametro4=="primerTrimestre") {
          rotulos = ['Enero', 'Febrero', 'Marzo'];
        }else if (parametro4=="segundoTrimestre") {
          rotulos = ['Abril', 'Mayo', 'Junio'];
        }else if (parametro4=="tercerTrimestre") {
          rotulos = ['Julio', 'Agosto', 'Septiembre'];
        }else if (parametro4=="cuartoTrimestre") {
          rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
        }

        let totalTotales=0;


        if (parametro8[7]==null) {

          totalTotales=parseFloat(parametro8[5]) - 0;

        }else{

          totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);

        }

        pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	

        /*=============================
        =            Función acordión   =
        =============================*/
        
        acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
        
        /*=====  End of Función acordión  ======*/

        if (parametro13==125) {

          $(".otros__dados__documentos").text('Documentación de Respaldo');

        }else if (parametro13==126) { 

          $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');

        }else if (parametro13==158) { 

          $(".otros__dados__documentos").text('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados.');

        }else if (parametro13==425) { 

          $(".otros__dados__documentos").text('Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros, copia del contrato');

        }


        /*==============================================
        =            Funcion maximo digitos            =
        ==============================================*/
        
        var longitudCaracteres=function(parametro1,parametro2,counter){

        $(parametro1).keyup(function(e){

           if($(this).val().length > parametro2){

                $(this).val($(this).val().substr(0, parametro2));

                counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

                counter.css("color","red");

            }else{

              // counter.html("<strong>"+$(this).val().length +"</strong>");

              counter.css("color","black");

              counter.css("font-size","10px");

            }


         });

        }				

        longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
        
        /*=====  End of Funcion maximo digitos  ======*/
        


        /*==================================================
        =            Obtener valores efectuados            =
        ==================================================*/
        
        var valorEfectuado=$(".efectuadorMontos").val();

        $("#valorAsignado__meses").val(valorEfectuado);			
        
        /*=====  End of Obtener valores efectuados  ======*/
        
        /*===============================================
        =            Removiendo obligatorios            =
        ===============================================*/
        

        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas"+parametro8[0]).hide();
          $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);

          $("#facturas"+parametro8[0]).removeClass('obligatorios');
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
          $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
          $("#monto"+parametro8[0]).removeClass('obligatorios');
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');

          $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');

        }
        
        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__2"+parametro8[0]).hide();
          $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);

          $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
        }				
        


        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__3"+parametro8[0]).hide();
          $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);

          $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
        }				
        
        
        
        /*=====  End of Removiendo obligatorios  ======*/
        
        if (parametro12==1) {

          $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');

          $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');

          $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');


        }
        
        /*============================================
        =            Funciones necesarias            =
        ============================================*/

        funcion__solo__numero__montos($(".solo__numeros__montos"));	
        funcion__solo__numero($(".solo__numeros"));

        funcion__cambio__de__numero($("#monto"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__3"+parametro8[0]));

        funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));

        funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
        
        funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
        
        
        /*=====  End of Funciones necesarias  ======*/

        /*====================================
        =            Click al dar            =
        ====================================*/
        

        $("#monto"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        

        $("#monto__2"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        


        $("#monto__3"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        
        /*=====  End of Click al dar  ======*/
        

        /*============================================
        =            Variables utilizadas            =
        ============================================*/
        
        let contado=0;
        let contado2=0;
        
        /*=====  End of Variables utilizadas  ======*/

        /*============================================
        =            Filas Agregadas Honorarios    =
        ============================================*/


        $("#Febrero-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Mayo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Agosto-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Noviembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }

            if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
              Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
            }

            if($("#datosHonorarios").val()==""){

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	


              
            }
              



                $("#datosHonorarios").val("")
            }
        });		



        
         
        for(i=0;i<5;i++){

            contado2++;
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }

           

               
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	


              
            
              



                $("#datosHonorarios").val("")
        }
      

        
          

        $("#Enero-tab").on('click', function () {

          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
         
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Abril-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Julio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Octubre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });		




        $("#Marzo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Junio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Septiembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	


                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Diciembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<5;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==4)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });		
        
          




          
        
        /*=====  End of Filas Agregadas  ======*/

        
        
        /*===================================
        =            Guardadores            =
        ===================================*/

        $("#guardarFac"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          let contador__n=$("#autorizacion"+idContador).val();
          let contador__n2=$("#numeroRuc"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }


        });	

        $("#guardarFac__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__2"+idContador).val();
          let contador__n2=$("#numeroRuc__2"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarFac__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__3"+idContador).val();
          let contador__n2=$("#numeroRuc__3"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarOtrosF"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	
        $("#guardarOtrosF2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	



        $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));


        });	




        $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


        });	



        /*=====  End of Guardadores  ======*/		

        /*===========================================
        =            Guardados generales            =
        ===========================================*/
        
        $("#guardarAdministrativos"+parametro8[0]).click(function(e) {

         

          var validador = validacionRegistro( $(".obligatorioOtros__1"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__1"));

          var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));

          if (validador == false && validador2 == false) {

            alertify.set("notifier", "position", "top-center");
            alertify.notify("Campos obligatorios", "error", 5, function () { });
        
            $(parametro1).show();
        
          } else {
            

          

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
            $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
            $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
            $("#monto"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);

            $("#facturas"+idContador).removeClass('obligatorios');
            $("#fechaDocumento"+idContador).removeClass('obligatorios');
            $("#numeroRuc"+idContador).removeClass('obligatorios');
            $("#autorizacion"+idContador).removeClass('obligatorios');
            $("#monto"+idContador).removeClass('obligatorios');
            $("#numeroFactura"+idContador).removeClass('obligatorios');

            $("#cantidad__bien__1"+idContador).removeClass('obligatorios');

          }				

          $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
          $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }

        } 

        }); 


        $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);

            $("#facturas__2"+idContador).removeClass('obligatorios__2');
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
            $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
            $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
            $("#monto__2"+idContador).removeClass('obligatorios__2');
            $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');

            $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
            
          }

          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }else{


            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }

          

        }); 

        $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);

            $("#facturas__3"+idContador).removeClass('obligatorios__3');
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
            $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
            $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
            $("#monto__3"+idContador).removeClass('obligatorios__3');
            $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');

            $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
            
          }


          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }

          

        }); 				
        
        /*=====  End of Guardados generales  ======*/
        


      }else{

        $(parametro3).val(0);

        $(parametro7).html(' ');

      }

    });

  });

}

/*=====================================
  =           recreativo_presupuestario        =
=====================================*/

var checkeds__recorridos__general_recreativo_presupuestario=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

  $(parametro2).click(function(e){

    $.getScript("layout/scripts/js/validacionesGenerales.js",function(){

      var condicion = $(parametro2).is(":checked");

      $(parametro7).html(' ');
      console.log("parametro7");
      console.log(parametro7);
      if ($(parametro3).val()!=0) {

          $(parametro2).prop("checked", false);
          alertify.set("notifier","position", "top-center");
        alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});

      }

      if (condicion) {

        $(parametro3).val(1);

        let pestana1="";
        let pestana2="";
        let pestana3="";

        var confirm= alertify.confirm('¿Realizó contratación pública? SI / NO?','¿Realizó contratación pública? SI / NO',null,null).set('labels', {ok:'Si', cancel:'NO'});  

        confirm.set({transition:'slide'});  
            
        confirm.set('onok', function(){ 

          insertar__registro_contrataciones__publicas_seguimiento(parametro8[8],"SI","",parametro4);

          $('#contrataciones__itemsSeguimiento').modal('show');

          obtenerContratacionPublicaPoaSeguimiento("obtener_contratacion_Publica_Seguimiento",parametro8[8],parametro8[0],parametro4);

        });  
        confirm.set('oncancel', function(){ 
          $('#contrataciones__NoitemsSeguimiento').modal('show');
          noContratacionPublicaPoaSeguimiento(parametro8[8],parametro4);
        }); 

        if (parametro4=="primerTrimestre") {
          rotulos = ['Enero', 'Febrero', 'Marzo'];
        }else if (parametro4=="segundoTrimestre") {
          rotulos = ['Abril', 'Mayo', 'Junio'];
        }else if (parametro4=="tercerTrimestre") {
          rotulos = ['Julio', 'Agosto', 'Septiembre'];
        }else if (parametro4=="cuartoTrimestre") {
          rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
        }

        let totalTotales=0;


        if (parametro8[7]==null) {

          totalTotales=parseFloat(parametro8[5]) - 0;

        }else{

          totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);

        }

        pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	

        /*=============================
        =            Función acordión   =
        =============================*/
        
        acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
        
        /*=====  End of Función acordión  ======*/

        if (parametro13==125) {

          $(".otros__dados__documentos").text('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');

        }else if (parametro13==126) { 

          $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');

        }else if (parametro13==158) { 

          $(".otros__dados__documentos").text('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados.');

        }else if (parametro13==425) { 

          $(".otros__dados__documentos").text('Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros, copia del contrato');

        }


        /*==============================================
        =            Funcion maximo digitos            =
        ==============================================*/
        
        var longitudCaracteres=function(parametro1,parametro2,counter){

        $(parametro1).keyup(function(e){

           if($(this).val().length > parametro2){

                $(this).val($(this).val().substr(0, parametro2));

                counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

                counter.css("color","red");

            }else{

              // counter.html("<strong>"+$(this).val().length +"</strong>");

              counter.css("color","black");

              counter.css("font-size","10px");

            }


         });

        }				

        longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
        
        /*=====  End of Funcion maximo digitos  ======*/
        


        /*==================================================
        =            Obtener valores efectuados            =
        ==================================================*/
        
        var valorEfectuado=$(".efectuadorMontos").val();

        $("#valorAsignado__meses").val(valorEfectuado);			
        
        /*=====  End of Obtener valores efectuados  ======*/
        
        /*===============================================
        =            Removiendo obligatorios            =
        ===============================================*/
        

        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas"+parametro8[0]).hide();
          $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);

          $("#facturas"+parametro8[0]).removeClass('obligatorios');
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
          $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
          $("#monto"+parametro8[0]).removeClass('obligatorios');
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');

          $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');

        }
        
        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__2"+parametro8[0]).hide();
          $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);

          $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
        }				
        


        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__3"+parametro8[0]).hide();
          $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);

          $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
        }				
        
        
        
        /*=====  End of Removiendo obligatorios  ======*/
        
        if (parametro12==1) {

          $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');

          $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');

          $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');


        }
        
        /*============================================
        =            Funciones necesarias            =
        ============================================*/

        funcion__solo__numero__montos($(".solo__numeros__montos"));	
        funcion__solo__numero($(".solo__numeros"));

        funcion__cambio__de__numero($("#monto"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__3"+parametro8[0]));

        funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));

        funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
        
        funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
        
        
        /*=====  End of Funciones necesarias  ======*/

        /*====================================
        =            Click al dar            =
        ====================================*/
        

        $("#monto"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        

        $("#monto__2"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        


        $("#monto__3"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        
        /*=====  End of Click al dar  ======*/
        

        /*============================================
        =            Variables utilizadas            =
        ============================================*/
        
        let contado=0;
        let contado2=0;
        
        /*=====  End of Variables utilizadas  ======*/

        /*============================================
        =            Filas Agregadas Honorarios    =
        ============================================*/


        $("#Febrero-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Mayo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Agosto-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Noviembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

            if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
              Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
            }

            if($("#datosHonorarios").val()==""){

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	


              
            }
              



                $("#datosHonorarios").val("")
            }
        });		



        
         
        for(i=0;i<8;i++){

            contado2++;
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }

            
               
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	


              
            
              



                $("#datosHonorarios").val("")
        }
      

        
          

        $("#Enero-tab").on('click', function () {

          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
         
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Abril-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Julio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Octubre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });		




        $("#Marzo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Junio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Septiembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	


                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Diciembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<8;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento "
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción"
            }else if(i==3)
            {
              spanArchivo="Contratos"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP"
            }else if(i==5)
            {
              spanArchivo="Listado de Beneficiarios de Bonos Deportivos  "
            }else if(i==6)
            {
              spanArchivo="Listado de Beneficiarios de Incentivo Deportivo"
            }else if(i==7)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });		
        
          




          
        
        /*=====  End of Filas Agregadas  ======*/

        
        
        /*===================================
        =            Guardadores            =
        ===================================*/

        $("#guardarFac"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          let contador__n=$("#autorizacion"+idContador).val();
          let contador__n2=$("#numeroRuc"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }


        });	

        $("#guardarFac__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__2"+idContador).val();
          let contador__n2=$("#numeroRuc__2"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarFac__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__3"+idContador).val();
          let contador__n2=$("#numeroRuc__3"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarOtrosF"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	
        $("#guardarOtrosF2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	



        $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));


        });	




        $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


        });	



        /*=====  End of Guardadores  ======*/		

        /*===========================================
        =            Guardados generales            =
        ===========================================*/
        
        $("#guardarAdministrativos"+parametro8[0]).click(function(e) {


          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
            $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
            $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
            $("#monto"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);

            $("#facturas"+idContador).removeClass('obligatorios');
            $("#fechaDocumento"+idContador).removeClass('obligatorios');
            $("#numeroRuc"+idContador).removeClass('obligatorios');
            $("#autorizacion"+idContador).removeClass('obligatorios');
            $("#monto"+idContador).removeClass('obligatorios');
            $("#numeroFactura"+idContador).removeClass('obligatorios');

            $("#cantidad__bien__1"+idContador).removeClass('obligatorios');

          }				

          $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
          $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }

        

        }); 


        $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);

            $("#facturas__2"+idContador).removeClass('obligatorios__2');
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
            $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
            $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
            $("#monto__2"+idContador).removeClass('obligatorios__2');
            $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');

            $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
            
          }

          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }else{


            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }

          

        }); 

        $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);

            $("#facturas__3"+idContador).removeClass('obligatorios__3');
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
            $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
            $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
            $("#monto__3"+idContador).removeClass('obligatorios__3');
            $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');

            $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
            
          }


          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }

          

        }); 				
        
        /*=====  End of Guardados generales  ======*/
        


      }else{

        $(parametro3).val(0);

        $(parametro7).html(' ');

      }

    });

  });

}



/*=====================================
  =           implementacion_deportiva_presupuestario      =
=====================================*/

var checkeds__recorridos__general_implementacion_deportiva=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

  $(parametro2).click(function(e){

    $.getScript("layout/scripts/js/validacionesGenerales.js",function(){

      var condicion = $(parametro2).is(":checked");

      $(parametro7).html(' ');
      console.log("parametro7");
      console.log(parametro7);
      if ($(parametro3).val()!=0) {

          $(parametro2).prop("checked", false);
          alertify.set("notifier","position", "top-center");
        alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});

      }

      if (condicion) {

        $(parametro3).val(1);

        let pestana1="";
        let pestana2="";
        let pestana3="";

        var confirm= alertify.confirm('¿Realizó contratación pública? SI / NO?','¿Realizó contratación pública? SI / NO',null,null).set('labels', {ok:'Si', cancel:'NO'});  

        confirm.set({transition:'slide'});  
            
        confirm.set('onok', function(){ 

          insertar__registro_contrataciones__publicas_seguimiento(parametro8[8],"SI","",parametro4);

          $('#contrataciones__itemsSeguimiento').modal('show');

          obtenerContratacionPublicaPoaSeguimiento("obtener_contratacion_Publica_Seguimiento",parametro8[8],parametro8[0],parametro4);

        });  
        confirm.set('oncancel', function(){ 
          $('#contrataciones__NoitemsSeguimiento').modal('show');
          noContratacionPublicaPoaSeguimiento(parametro8[8],parametro4);
        }); 

        if (parametro4=="primerTrimestre") {
          rotulos = ['Enero', 'Febrero', 'Marzo'];
        }else if (parametro4=="segundoTrimestre") {
          rotulos = ['Abril', 'Mayo', 'Junio'];
        }else if (parametro4=="tercerTrimestre") {
          rotulos = ['Julio', 'Agosto', 'Septiembre'];
        }else if (parametro4=="cuartoTrimestre") {
          rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
        }

        let totalTotales=0;


        if (parametro8[7]==null) {

          totalTotales=parseFloat(parametro8[5]) - 0;

        }else{

          totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);

        }

        pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Documentación de Respaldo</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Documentación de Respaldo</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	

        /*=============================
        =            Función acordión   =
        =============================*/
        
        acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
        
        /*=====  End of Función acordión  ======*/

        if (parametro13==125) {

          $(".otros__dados__documentos").text('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');

        }else if (parametro13==126) { 

          $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');

        }else if (parametro13==158) { 

          $(".otros__dados__documentos").text('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados.');

        }else if (parametro13==425) { 

          $(".otros__dados__documentos").text('Documentación de Respaldo');

        }


        /*==============================================
        =            Funcion maximo digitos            =
        ==============================================*/
        
        var longitudCaracteres=function(parametro1,parametro2,counter){

        $(parametro1).keyup(function(e){

           if($(this).val().length > parametro2){

                $(this).val($(this).val().substr(0, parametro2));

                counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

                counter.css("color","red");

            }else{

              // counter.html("<strong>"+$(this).val().length +"</strong>");

              counter.css("color","black");

              counter.css("font-size","10px");

            }


         });

        }				

        longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
        
        /*=====  End of Funcion maximo digitos  ======*/
        


        /*==================================================
        =            Obtener valores efectuados            =
        ==================================================*/
        
        var valorEfectuado=$(".efectuadorMontos").val();

        $("#valorAsignado__meses").val(valorEfectuado);			
        
        /*=====  End of Obtener valores efectuados  ======*/
        
        /*===============================================
        =            Removiendo obligatorios            =
        ===============================================*/
        

        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas"+parametro8[0]).hide();
          $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);

          $("#facturas"+parametro8[0]).removeClass('obligatorios');
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
          $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
          $("#monto"+parametro8[0]).removeClass('obligatorios');
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');

          $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');

        }
        
        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__2"+parametro8[0]).hide();
          $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);

          $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
        }				
        


        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__3"+parametro8[0]).hide();
          $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);

          $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
        }				
        
        
        
        /*=====  End of Removiendo obligatorios  ======*/
        
        if (parametro12==1) {

          $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');

          $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');

          $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');


        }
        
        /*============================================
        =            Funciones necesarias            =
        ============================================*/

        funcion__solo__numero__montos($(".solo__numeros__montos"));	
        funcion__solo__numero($(".solo__numeros"));

        funcion__cambio__de__numero($("#monto"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__3"+parametro8[0]));

        funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));

        funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
        
        funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
        
        
        /*=====  End of Funciones necesarias  ======*/

        /*====================================
        =            Click al dar            =
        ====================================*/
        

        $("#monto"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        

        $("#monto__2"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        


        $("#monto__3"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        
        /*=====  End of Click al dar  ======*/
        

        /*============================================
        =            Variables utilizadas            =
        ============================================*/
        
        let contado=0;
        let contado2=0;
        
        /*=====  End of Variables utilizadas  ======*/

        /*============================================
        =            Filas Agregadas Honorarios    =
        ============================================*/


        $("#Febrero-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Mayo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Agosto-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Noviembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }

            if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
              Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
            }

            if($("#datosHonorarios").val()==""){

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	


              
            }
              



                $("#datosHonorarios").val("")
            }
        });		



        
         
        for(i=0;i<7;i++){

            contado2++;
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }

           

               
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	


              
            
              



                $("#datosHonorarios").val("")
        }
      

        
          

        $("#Enero-tab").on('click', function () {

          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
         
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Abril-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Julio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Octubre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });		




        $("#Marzo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Junio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Septiembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	


                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Diciembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<7;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Orden de Compra o de Servicio"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción del Proveedor "
            }else if(i==3)
            {
              spanArchivo="Acta de Entrega-Recepción del Usuario Final"
            }else if(i==4)
            {
              spanArchivo="Contrato "
            }else if(i==5)
            {
              spanArchivo="Factura "
            }else if(i==6)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });		
        
          




          
        
        /*=====  End of Filas Agregadas  ======*/

        
        
        /*===================================
        =            Guardadores            =
        ===================================*/

        $("#guardarFac"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          let contador__n=$("#autorizacion"+idContador).val();
          let contador__n2=$("#numeroRuc"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }


        });	

        $("#guardarFac__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__2"+idContador).val();
          let contador__n2=$("#numeroRuc__2"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarFac__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__3"+idContador).val();
          let contador__n2=$("#numeroRuc__3"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarOtrosF"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	
        $("#guardarOtrosF2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	



        $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));


        });	




        $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


        });	



        /*=====  End of Guardadores  ======*/		

        /*===========================================
        =            Guardados generales            =
        ===========================================*/
        
        $("#guardarAdministrativos"+parametro8[0]).click(function(e) {

          var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));
          var validador3 = validacionRegistro( $(".obligatorioOtros__3"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__3"));
          var validador4 = validacionRegistro( $(".obligatorioOtros__4"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__4"));
          var validador5 = validacionRegistro( $(".obligatorioOtros__5"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__5"));
          var validador6 = validacionRegistro( $(".obligatorioOtros__6"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__6"));

          if (validador2 == false && validador3 == false && validador4 == false && validador5 == false && validador6 == false) {

            alertify.set("notifier", "position", "top-center");
            alertify.notify("Campos obligatorios", "error", 5, function () { });
        
            $(parametro1).show();
        
          } else {
            

          

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
            $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
            $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
            $("#monto"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);

            $("#facturas"+idContador).removeClass('obligatorios');
            $("#fechaDocumento"+idContador).removeClass('obligatorios');
            $("#numeroRuc"+idContador).removeClass('obligatorios');
            $("#autorizacion"+idContador).removeClass('obligatorios');
            $("#monto"+idContador).removeClass('obligatorios');
            $("#numeroFactura"+idContador).removeClass('obligatorios');

            $("#cantidad__bien__1"+idContador).removeClass('obligatorios');

          }				

          $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
          $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }

        } 

        }); 


        $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {

          var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));
          var validador3 = validacionRegistro( $(".obligatorioOtros__3"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__3"));
          var validador4 = validacionRegistro( $(".obligatorioOtros__4"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__4"));
          var validador5 = validacionRegistro( $(".obligatorioOtros__5"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__5"));
          var validador6 = validacionRegistro( $(".obligatorioOtros__6"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__6"));

          if (validador2 == false && validador3 == false && validador4 == false && validador5 == false && validador6 == false) {

            alertify.set("notifier", "position", "top-center");
            alertify.notify("Campos obligatorios", "error", 5, function () { });
        
            $(parametro1).show();
        
          } else {
            

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);

            $("#facturas__2"+idContador).removeClass('obligatorios__2');
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
            $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
            $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
            $("#monto__2"+idContador).removeClass('obligatorios__2');
            $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');

            $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
            
          }

          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }else{


            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }


          }

        }); 

        $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {

          var validador2 = validacionRegistro( $(".obligatorioOtros__2"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__2"));
          var validador3 = validacionRegistro( $(".obligatorioOtros__3"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__3"));
          var validador4 = validacionRegistro( $(".obligatorioOtros__4"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__4"));
          var validador5 = validacionRegistro( $(".obligatorioOtros__5"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__5"));
          var validador6 = validacionRegistro( $(".obligatorioOtros__6"));
          validacionRegistroMostrarErrores( $(".obligatorioOtros__6"));

          if (validador2 == false && validador3 == false && validador4 == false && validador5 == false && validador6 == false) {

            alertify.set("notifier", "position", "top-center");
            alertify.notify("Campos obligatorios", "error", 5, function () { });
        
            $(parametro1).show();
        
          } else {
            

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);

            $("#facturas__3"+idContador).removeClass('obligatorios__3');
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
            $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
            $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
            $("#monto__3"+idContador).removeClass('obligatorios__3');
            $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');

            $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
            
          }


          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }

          

          }

        }); 				
        
        /*=====  End of Guardados generales  ======*/
        


      }else{

        $(parametro3).val(0);

        $(parametro7).html(' ');

      }

    });

  });

}

/*=====================================
  =           administrativo_presupuestario        =
=====================================*/

var checkeds__recorridos__general_administrativo_presupuestario=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8,parametro9,parametro10,parametro11,parametro12,parametro13){

  $(parametro2).click(function(e){

    $.getScript("layout/scripts/js/validacionesGenerales.js",function(){

      var condicion = $(parametro2).is(":checked");

      $(parametro7).html(' ');
      console.log("parametro7");
      console.log(parametro7);

      if ($(parametro3).val()!=0) {

          $(parametro2).prop("checked", false);
          alertify.set("notifier","position", "top-center");
          alertify.notify("Se puede seleccionar un ítem a la vez", "error", 5, function(){});

          
      }

      if (condicion) {

        

        $(parametro3).val(1);

        var confirm= alertify.confirm('¿Realizó contratación pública? SI / NO?','¿Realizó contratación pública? SI / NO',null,null).set('labels', {ok:'Si', cancel:'NO'});  

        confirm.set({transition:'slide'});  
            
        confirm.set('onok', function(){ 

          insertar__registro_contrataciones__publicas_seguimiento(parametro8[8],"SI","",parametro4);

          $('#contrataciones__itemsSeguimiento').modal('show');

          obtenerContratacionPublicaPoaSeguimiento("obtener_contratacion_Publica_Seguimiento",parametro8[8],parametro8[0],parametro4);

        });  
        confirm.set('oncancel', function(){ 
          $('#contrataciones__NoitemsSeguimiento').modal('show');
          noContratacionPublicaPoaSeguimiento(parametro8[8],parametro4);
        }); 

        let pestana1="";
        let pestana2="";
        let pestana3="";


        if (parametro4=="primerTrimestre") {
          rotulos = ['Enero', 'Febrero', 'Marzo'];
        }else if (parametro4=="segundoTrimestre") {
          rotulos = ['Abril', 'Mayo', 'Junio'];
        }else if (parametro4=="tercerTrimestre") {
          rotulos = ['Julio', 'Agosto', 'Septiembre'];
        }else if (parametro4=="cuartoTrimestre") {
          rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
        }

        let totalTotales=0;


        if (parametro8[7]==null) {

          totalTotales=parseFloat(parametro8[5]) - 0;

        }else{

          totalTotales=parseFloat(parametro8[5]) - parseFloat(parametro8[7]);

        }

        pestana1='<table class="filaIndicadora__administra'+parametro8[0]+'"><tbody class="body__elementos"><tr class="documentos__centrados fila__facturas'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas'+parametro8[0]+'" name="facturas'+parametro8[0]+'" class="ancho__total__input obligatorios text-center facturas'+parametro8[0]+' obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros__montos obligatorio__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion'+parametro8[0]+'" class="ancho__total__input obligatorios solo__numeros obligatorio__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto'+parametro8[0]+'" class="ancho__total__input obligatorios obligatorio__'+parametro8[0]+' solo__numeros__montos elementos__sumados'+rotulos[0]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac'+parametro8[0]+'" name="guardarFac'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></nav></div></div></td></tr></tbody><tbody class="bodyFacturero__'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Documentación de respaldo<br><div style="font-size:8px!important; text-align:justify!important;"></div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[0]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes'+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"><div class="row"><div class="col col-9 text-center"></div></td></tr><tbody class="col__otros__habili'+parametro8[0]+'"></tbody></tr><tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__'+parametro8[0]+'" name="observaciones__tecnicas__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__1__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado'+parametro8[0]+'" name="mensualProgramado'+parametro8[0]+'" class="mensualProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado'+parametro8[0]+'" name="mensualEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado'+parametro8[0]+'" disabled=""/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra'+parametro8[0]+'"><tr><td colspan="2" style="display:flex; justify-content:center;"><center><a class="btn btn-primary" id="guardarAdministrativos'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana2='<table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr class="documentos__centrados fila__facturas__2'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__2'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></tr><tr class="fila__facturas__2'+parametro8[0]+' fila__facturas__2'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__2'+parametro8[0]+'" name="facturas__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 text-center facturas'+parametro8[0]+' obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__2'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros__montos obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__2'+parametro8[0]+'" class="ancho__total__input obligatorios__2 solo__numeros obligatorio__2__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__2 obligatorio__2__'+parametro8[0]+' solo__numeros__montos elementos__sumados__2'+rotulos[1]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__2'+parametro8[0]+'" name="guardarFac__2'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__2'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__2'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__2'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[1]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__2'+parametro8[0]+'"></tr><tbody class="col__otros__habili__2'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__2__'+parametro8[0]+'" name="observaciones__tecnicas__2__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__2__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__2'+parametro8[0]+'" name="mensualProgramado__2'+parametro8[0]+'" class="mensualProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__2'+parametro8[0]+'" name="mensualEjecutado__2'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__2'+parametro8[0]+'" disabled=""/><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__2'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__2'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

        pestana3='<table class="filaIndicadora__administra__3'+parametro8[0]+'"><thead><tr class="documentos__centrados fila__facturas__3'+parametro8[0]+'"><th colspan="1"><center>Información de la Factura</center></th><th><center><a class="btn btn-warning" id="agregarFacturas__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'" maximo="'+parametro8[5]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__facturas__3'+parametro8[0]+'"><th colspan="2" style="background:#01579b!important;"><div class="row"><div class="col col-2 text-center">Documento</div><div class="col col-2 text-center">Número<br>factura</div><div class="col col-2 text-center">Fecha<br>factura</div><div class="col col-2 text-center">Ruc</div><div class="col col-2 text-center">Autorización</div><div class="col col-2">Monto&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Acciones</div></th></th></tr><tr class="fila__facturas__3'+parametro8[0]+' fila__facturas__3'+parametro8[0]+'"><td colspan="2"><div class="row"><div class="col col-2"><input type="file" accept="application/pdf" id="facturas__3'+parametro8[0]+'" name="facturas__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 text-center facturas'+parametro8[0]+' obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroFactura__3'+parametro8[0]+'" class="ancho__total__input solo__numeros__montos obligatorios__3 obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de factura"/></div><div class="col col-2"><input type="date" id="fechaDocumento__3'+parametro8[0]+'" placeholder="Ingrese fecha del documento" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+'"/></div><div class="col col-2"><input type="text" id="numeroRuc__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número ruc"/></div><div class="col col-2"><input type="text" id="autorizacion__3'+parametro8[0]+'" class="ancho__total__input obligatorios__3 solo__numeros__montos obligatorio__3__'+parametro8[0]+'" placeholder="Ingrese número de autorización"></div><div class="col col col-1"><input type="text" id="monto__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="ancho__total__input obligatorios__3 obligatorio__3__'+parametro8[0]+' solo__numeros__montos elementos__sumados__3'+rotulos[2]+'" value="0"></div><div class="col col-1"><a class="btn btn-primary" style="cursor:pointer;" id="guardarFac__3'+parametro8[0]+'" name="guardarFac__3'+parametro8[0]+'" idPrincipal="'+parametro8[0]+'" idContador="'+parametro8[0]+'" class="guardarFac__3'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></div></div></td></tr><tbody class="bodyFacturero__3'+parametro8[0]+'"></tbody><tr class="documentos__centrados"><th colspan="1" class="otros__dados__documentos"><center>Otros documentos habilitantes<br><div style="font-size:8px!important; text-align:justify!important;">Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros</div></center></th><th><center><a class="btn btn-warning" id="agregarOtros__habilitantes__3'+parametro8[0]+'" idContador="'+parametro8[0]+'" rotulo="'+rotulos[2]+'"><i class="fa fa-plus" aria-hidden="true"></i></a></center></th></tr><tr class="fila__otrosHabilitantes__3'+parametro8[0]+''+parametro8[0]+'"><td colspan="2" style="display:flex; justify-content:center;"></nav></div></td></tr><tbody class="col__otros__habili__3'+parametro8[0]+'"></tbody></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="1" style="font-weight:bold;"><center>Observaciones</center></td><td colspan="1"><textarea id="observaciones__tecnicas__3__'+parametro8[0]+'" name="observaciones__tecnicas__3__'+parametro8[0]+'" class="ancho__total__input"></textarea></td></tr><tr class="fila__3__cantidades'+parametro8[0]+'"></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><th><center>Saldo anual asignado</center></th><th><center>Saldo anual restante</center></th><th><center>Monto programado</center></th><th><center>Monto ejecutado</center></th></tr><tr><td><center>'+parseFloat(parametro8[5]).toFixed(2)+'</center></td><td><input type="text" class="efectuadorMontos" style="border:none!important;" value="'+parseFloat(totalTotales).toFixed(2)+'"  readonly=""/></td></td><td><center><input type="text" id="mensualProgramado__3'+parametro8[0]+'" name="mensualProgramado__3'+parametro8[0]+'" class="mensualProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="mensualEjecutado__3'+parametro8[0]+'" name="mensualEjecutado__3'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios mensualEjecutado__3'+parametro8[0]+'" disabled=""/><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr></table><table class="filaIndicadora__administra__3'+parametro8[0]+'"><tr><td colspan="2"><center><a class="btn btn-primary" id="guardarAdministrativos__3'+parametro8[0]+'" name="guardarAdministrativos'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';	

        /*=============================
        =            Función acordión   =
        =============================*/
        
        acordion__general($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
        
        /*=====  End of Función acordión  ======*/

        if (parametro13==125) {

          $(".otros__dados__documentos").text('Informe de Cumplimiento Trimestral Rehabilitación y Readecuación y sus anexos; Informe Técnico de Ejecución de Mantenimientos Planificados; Reporte de Seguimiento y Evaluación Técnica 2022 - Declaración de Catastro.');

        }else if (parametro13==126) { 

          $(".otros__dados__documentos").text('RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Hojas de vida y documentos habilitantes de los profesionales contratados , Otros');

        }else if (parametro13==158) { 

          $(".otros__dados__documentos").text('Anexo listado de asistentes; Registro fotográfico de la capacitación; Copias de certificados.');

        }else if (parametro13==425) { 

          $(".otros__dados__documentos").text('Acta entrega recepción, Ordenes de compra generadas en el sistema SERCOP, RUC (Aplica cuando la actividad principal no concuerda con el gasto realizado), Otros, copia del contrato');

        }


        /*==============================================
        =            Funcion maximo digitos            =
        ==============================================*/
        
        var longitudCaracteres=function(parametro1,parametro2,counter){

        $(parametro1).keyup(function(e){

           if($(this).val().length > parametro2){

                $(this).val($(this).val().substr(0, parametro2));

                counter.html("Son máximo <strong>"+parametro2+" caracteres</strong>");

                counter.css("color","red");

            }else{

              // counter.html("<strong>"+$(this).val().length +"</strong>");

              counter.css("color","black");

              counter.css("font-size","10px");

            }


         });

        }				

        longitudCaracteres($("#numeroRuc"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__2"+parametro8[0]),13,$(".counter__Cedula"));
        longitudCaracteres($("#numeroRuc__3"+parametro8[0]),13,$(".counter__Cedula"));
        
        /*=====  End of Funcion maximo digitos  ======*/
        


        /*==================================================
        =            Obtener valores efectuados            =
        ==================================================*/
        
        var valorEfectuado=$(".efectuadorMontos").val();

        $("#valorAsignado__meses").val(valorEfectuado);			
        
        /*=====  End of Obtener valores efectuados  ======*/
        
        /*===============================================
        =            Removiendo obligatorios            =
        ===============================================*/
        

        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas"+parametro8[0]).hide();
          $("#facturas"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#autorizacion"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#monto"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorio__'+parametro8[0]);

          $("#facturas"+parametro8[0]).removeClass('obligatorios');
          $("#fechaDocumento"+parametro8[0]).removeClass('obligatorios');
          $("#numeroRuc"+parametro8[0]).removeClass('obligatorios');
          $("#autorizacion"+parametro8[0]).removeClass('obligatorios');
          $("#monto"+parametro8[0]).removeClass('obligatorios');
          $("#numeroFactura"+parametro8[0]).removeClass('obligatorios');

          $("#mensualEjecutado"+parametro8[0]).removeAttr('disabled');

        }
        
        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__2"+parametro8[0]).hide();
          $("#facturas__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#monto__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios2__'+parametro8[0]);

          $("#facturas__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#fechaDocumento__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroRuc__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#autorizacion__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#monto__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#numeroFactura__2"+parametro8[0]).removeClass('obligatorios__2');
          $("#mensualEjecutado__2"+parametro8[0]).removeAttr('disabled');
        }				
        


        
        if (parametro8[6]!=null && parametro8[6]!="") {

          $(".fila__facturas__3"+parametro8[0]).hide();
          $("#facturas__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#monto__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios3__'+parametro8[0]);

          $("#facturas__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#fechaDocumento__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroRuc__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#autorizacion__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#monto__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#numeroFactura__3"+parametro8[0]).removeClass('obligatorios__3');
          $("#mensualEjecutado__3"+parametro8[0]).removeAttr('disabled');
        }				
        
        
        
        /*=====  End of Removiendo obligatorios  ======*/
        
        if (parametro12==1) {

          $(".fila__1__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__1'+parametro8[0]+'" name="cantidad__bien__1'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios"/></td>');

          $(".fila__2__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__2'+parametro8[0]+'" name="cantidad__bien__2'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__2"/></td>');

          $(".fila__3__cantidades"+parametro8[0]).append('<td style="font-weight:bold;" colspan="1"><center>Cantidad bienes adquirida</center></td><td colspan="1"><input type="text" id="cantidad__bien__3'+parametro8[0]+'" name="cantidad__bien__3'+parametro8[0]+'" class="solo__numeros ancho__total__input obligatorios__3"/></td>>');


        }
        
        /*============================================
        =            Funciones necesarias            =
        ============================================*/

        funcion__solo__numero__montos($(".solo__numeros__montos"));	
        funcion__solo__numero($(".solo__numeros"));

        funcion__cambio__de__numero($("#monto"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__2"+parametro8[0]));
        funcion__cambio__de__numero($("#monto__3"+parametro8[0]));

        funcion__cambio__de__numero($("#mensualEjecutado"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__2"+parametro8[0]));
        funcion__cambio__de__numero($("#mensualEjecutado__3"+parametro8[0]));

        funcion_porcentajes__colores($("#mensualEjecutado"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado);

        funcion_porcentajes__colores($("#mensualEjecutado__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado);
        
        funcion__sumador__eventos($("#monto"+parametro8[0]),$("#mensualEjecutado"+parametro8[0]),$(".elementos__sumados"+rotulos[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__2"+parametro8[0]),$("#mensualEjecutado__2"+parametro8[0]),$(".elementos__sumados__2"+rotulos[1]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        funcion__sumador__eventos($("#monto__3"+parametro8[0]),$("#mensualEjecutado__3"+parametro8[0]),$(".elementos__sumados__3"+rotulos[2]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));				
        
        
        /*=====  End of Funciones necesarias  ======*/

        /*====================================
        =            Click al dar            =
        ====================================*/
        

        $("#monto"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto"+parametro8[0]),$("#mensualProgramado"+parametro8[0]).val(),$(".celdas"+parametro8[0]),$(".rotulo"+parametro8[0]),valorEfectuado,$("#mensualEjecutado"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        

        $("#monto__2"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__2"+parametro8[0]),$("#mensualProgramado__2"+parametro8[0]).val(),$(".celdas__2"+parametro8[0]),$(".rotulo__2"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__2"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        


        $("#monto__3"+parametro8[0]).on('input', function () {

          funcion_porcentajes__colores__montos($("#monto__3"+parametro8[0]),$("#mensualProgramado__3"+parametro8[0]).val(),$(".celdas__3"+parametro8[0]),$(".rotulo__3"+parametro8[0]),valorEfectuado,$("#mensualEjecutado__3"+parametro8[0]),$("#valorAsignado__meses"),parametro8[0],$(".efectuadorMontos"));

        });					
        
        
        /*=====  End of Click al dar  ======*/
        

        /*============================================
        =            Variables utilizadas            =
        ============================================*/
        
        let contado=0;
        let contado2=0;
        
        /*=====  End of Variables utilizadas  ======*/

        /*============================================
        =            Filas Agregadas Honorarios    =
        ============================================*/


        $("#Febrero-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Mayo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Agosto-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Noviembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__2"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__2"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }

            if( spanArchivo=="Hoja de Vida " || spanArchivo=="Documentos Contratación "){
              Selector_otros_Honorarios_Poa_Seguimiento("obtener_documentos_Honorarios",spanArchivo,idContador);
            }

            if($("#datosHonorarios").val()==""){

              funcion__agregarFilas($(".col__otros__habili__2"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__2'+contado2+'" name="otrosHabilitantes__2'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__2__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__2'+contado2+'" name="guardarOtros__agregado__2'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__2'+contado2+'" name="eliminarOtros__2'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__2");		
          
  
              $("#eliminarOtros__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes__2"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado__2"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')
  
                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__2"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__2__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));
  
  
              });	


              
            }
              



                $("#datosHonorarios").val("")
            }
        });		



        
         
        for(i=0;i<6;i++){

            contado2++;
           
            let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
            let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
           
            
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }

           

               
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	


              
            
              



                $("#datosHonorarios").val("")
        }
      

        
          

        $("#Enero-tab").on('click', function () {

          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
         
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Abril-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	

        $("#Julio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Octubre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes"+parametro8[0]).attr('rotulo');
         
          
          $(".col__otros__habili"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
          
              funcion__agregarFilas($(".col__otros__habili"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes'+contado2+'" name="otrosHabilitantes'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado'+contado2+'" name="guardarOtros__agregado'+contado2+'" idPrincipal="'+contado2+'"  nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros'+contado2+'" name="eliminarOtros'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes");		
          
  
              $("#eliminarOtros"+contado2).click(function(event) {

                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
  
                funcion__eliminarFilas($(".fila__otrosHabilitantes"+idPrincipal+idContador));
  
              });	
  
              $("#guardarOtros__agregado"+contado2).click(function(event) {
  
                let idContador=$(this).attr('idContador');
                let idPrincipal=$(this).attr('idPrincipal');
                let rotulo=$(this).attr('rotulo');
                let idContador2=$(this).attr('idContador2');
                nombreArchivo=$(this).attr('nombre')

                funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__"+idContador),parametro11,"otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));
  
  
              });	

                $("#datosHonorarios").val("")
            }
        });		




        $("#Marzo-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Junio-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });	

        $("#Septiembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	


                $("#datosHonorarios").val("")
            }
        });	
        
        $("#Diciembre-tab").on('click', function () {
         
          let idContador=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('idContador');
          let rotulo=$("#agregarOtros__habilitantes__3"+parametro8[0]).attr('rotulo');
          
          $(".col__otros__habili__3"+idContador +" td").remove();

          for(i=0;i<6;i++){

            contado2++;
  
            
            
            var spanArchivo = ""
            if(i==0){
              spanArchivo="RUC "
            }else if(i==1)
            {
              spanArchivo="Informe de Cumplimiento"
            }else if(i==2)
            {
              spanArchivo="Acta de Entrega-Recepción "
            }else if(i==3)
            {
              spanArchivo="Contrato"
            }else if(i==4)
            {
              spanArchivo="Órdenes de compra generadas en el sistema SERCOP "
            }else if(i==5)
            {
              spanArchivo="OTROS "
            }
  
              funcion__agregarFilas($(".col__otros__habili__3"+idContador),['<td colspan="2" style="display:flex; justify-content:center;"><div class="row" style="width:30vw;"><div class="col col-3 text-center"><span style="color:blue">'+spanArchivo+'</span></div><div class="col col-6 text-center"><input type="file" accept="application/pdf" id="otrosHabilitantes__3'+contado2+'" name="otrosHabilitantes__3'+contado2+'" class="ancho__total__input text-center otrosHabilitantes'+contado2+' obligatorioOtros__3__'+contado2+'"/></div><div class="col col-3 text-center"><nav class="btn-pluss-wrapper otrosHabilitantes'+contado2+'"><div href="#" class="btn-pluss"><ul><li><a style="cursor:pointer;" id="guardarOtros__agregado__3'+contado2+'" name="guardarOtros__agregado__3'+contado2+'" idPrincipal="'+contado2+'" nombre="'+spanArchivo+'" idContador="'+contado2+'" class="editar__ides" rotulo="'+rotulo+'" idContador2="'+idContador+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></li><li><a style="cursor:pointer;" id="eliminarOtros__3'+contado2+'" name="eliminarOtros__3'+contado2+'" idPrincipal="'+parametro8[0]+'" idContador="'+contado2+'" class="eliminar__ides"><i class="fa fa-trash" aria-hidden="true"></i></a></li></ul></div></nav></div></td>'],idContador,contado2,"otrosHabilitantes__3");		

          $("#eliminarOtros__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');

            funcion__eliminarFilas($(".fila__otrosHabilitantes__3"+idPrincipal+idContador));

          });	

          $("#guardarOtros__agregado__3"+contado2).click(function(event) {

            let idContador=$(this).attr('idContador');
            let idPrincipal=$(this).attr('idPrincipal');
            let rotulo=$(this).attr('rotulo');
            let idContador2=$(this).attr('idContador2');
            nombreArchivo=$(this).attr('nombre')
            funcion__agregar__filas_seguimiento_2023($("#guardarOtros__agregado__3"+idContador),[idContador2,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val(),nombreArchivo],$(".obligatorioOtros__3__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


          });	
                $("#datosHonorarios").val("")
            }
        });		
        
          




          
        
        /*=====  End of Filas Agregadas  ======*/

        
        
        /*===================================
        =            Guardadores            =
        ===================================*/

        $("#guardarFac"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          let contador__n=$("#autorizacion"+idContador).val();
          let contador__n2=$("#numeroRuc"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura"+idContador).val(),$("#fechaDocumento"+idContador).val(),$("#numeroRuc"+idContador).val(),$("#autorizacion"+idContador).val(),$("#monto"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }


        });	

        $("#guardarFac__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__2"+idContador).val();
          let contador__n2=$("#numeroRuc__2"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__2"+idContador).val(),$("#fechaDocumento__2"+idContador).val(),$("#numeroRuc__2"+idContador).val(),$("#autorizacion__2"+idContador).val(),$("#monto__2"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__2__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__2"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarFac__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulo');

          $(this).hide();

          
          let contador__n=$("#autorizacion__3"+idContador).val();
          let contador__n2=$("#numeroRuc__3"+idContador).val();

          if (contador__n.length>=10 && contador__n2.length>=13) {

            funcion__agregar__filas__2($("#guardarFac__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#numeroFactura__3"+idContador).val(),$("#fechaDocumento__3"+idContador).val(),$("#numeroRuc__3"+idContador).val(),$("#autorizacion__3"+idContador).val(),$("#monto__3"+idContador).val(),$("#organismoIdPrin").val()],$(".obligatorio__3__"+idContador),parametro10,"acciones__factureros__principal",idContador,$("#facturas__3"+idContador));

          }else{

            alertify.set("notifier","position", "top-center");
            alertify.notify("El campo autorización debe ser mayor o igual a 10 y ruc debe ser mayor o igual a 13 caracteres", "error", 5, function(){});

            $(this).show();


          }

        });	


        $("#guardarOtrosF"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	
        $("#guardarOtrosF2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes",idContador,$("#otrosHabilitantes"+idContador));


        });	



        $("#guardarOtrosF__2"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__2"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__2",idContador,$("#otrosHabilitantes__2"+idContador));


        });	




        $("#guardarOtrosF__3"+parametro8[0]).click(function(event) {

          let idContador=$(this).attr('idContador');
          let idPrincipal=$(this).attr('idPrincipal');
          let rotulo=$(this).attr('rotulos');

          $(this).hide();

          funcion__agregar__filas__2($("#guardarOtros__agregado__3"+idContador),[idPrincipal,rotulo,$("#trimestreEvaluador").val(),$("#organismoIdPrin").val()],$(".obligatorioOtros__"+idContador),parametro11,"fila__otrosHabilitantes__3",idContador,$("#otrosHabilitantes__3"+idContador));


        });	



        /*=====  End of Guardadores  ======*/		

        /*===========================================
        =            Guardados generales            =
        ===========================================*/
        
        $("#guardarAdministrativos"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas"+idContador).removeClass('obligatorio__'+idContador);
            $("#fechaDocumento"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroRuc"+idContador).removeClass('obligatorio__'+idContador);
            $("#autorizacion"+idContador).removeClass('obligatorio__'+idContador);
            $("#monto"+idContador).removeClass('obligatorio__'+idContador);
            $("#numeroFactura"+idContador).removeClass('obligatorio__'+idContador);

            $("#facturas"+idContador).removeClass('obligatorios');
            $("#fechaDocumento"+idContador).removeClass('obligatorios');
            $("#numeroRuc"+idContador).removeClass('obligatorios');
            $("#autorizacion"+idContador).removeClass('obligatorios');
            $("#monto"+idContador).removeClass('obligatorios');
            $("#numeroFactura"+idContador).removeClass('obligatorios');

            $("#cantidad__bien__1"+idContador).removeClass('obligatorios');

          }				

          $("#otrosHabilitantes"+idContador).removeClass('obligatorios');
          $("#otrosHabilitantes"+idContador).removeClass('obligatorio__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val(),$("#cantidad__bien__1"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos"+idContador),$(".obligatorios__na"),[$("#mensualProgramado"+idContador).val(),$("#mensualEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,idFila,idContador,$("#observaciones__tecnicas__"+idContador).val()],$("#facturas"+idContador),$("#otrosHabilitantes"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra",false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora__administra"+parametro8[0]));

          }

        

        }); 


        $("#guardarAdministrativos__2"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__2"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroRuc__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#autorizacion__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#monto__2"+idContador).removeClass('obligatorios2__'+idContador);
            $("#numeroFactura__2"+idContador).removeClass('obligatorios2__'+idContador);

            $("#facturas__2"+idContador).removeClass('obligatorios__2');
            $("#fechaDocumento__2"+idContador).removeClass('obligatorios__2');
            $("#numeroRuc__2"+idContador).removeClass('obligatorios__2');
            $("#autorizacion__2"+idContador).removeClass('obligatorios__2');
            $("#monto__2"+idContador).removeClass('obligatorios__2');
            $("#numeroFactura__2"+idContador).removeClass('obligatorios__2');

            $("#cantidad__bien__2"+idContador).removeClass('obligatorios');
            
          }

          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios__2');
          $("#otrosHabilitantes__2"+idContador).removeClass('obligatorios2__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val(),$("#cantidad__bien__2"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }else{


            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__2"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__2"+idContador).val(),$("#mensualEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,idFila,idContador,$("#observaciones__tecnicas__2__"+idContador).val()],$("#facturas__2"+idContador),$("#otrosHabilitantes__2"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__2",false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__administra__2"+parametro8[0]));

          }

          

        }); 

        $("#guardarAdministrativos__3"+parametro8[0]).click(function(e) {

          let idContador=$(this).attr('idContador');
          let idFila=$("#idPrincipal"+idContador).val();

          let mensualito=parseInt($("#mensualEjecutado__3"+idContador).val(), 10);

          if (mensualito==0) {

            $("#facturas__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroRuc__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#autorizacion__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#monto__3"+idContador).removeClass('obligatorios3__'+idContador);
            $("#numeroFactura__3"+idContador).removeClass('obligatorios3__'+idContador);

            $("#facturas__3"+idContador).removeClass('obligatorios__3');
            $("#fechaDocumento__3"+idContador).removeClass('obligatorios__3');
            $("#numeroRuc__3"+idContador).removeClass('obligatorios__3');
            $("#autorizacion__3"+idContador).removeClass('obligatorios__3');
            $("#monto__3"+idContador).removeClass('obligatorios__3');
            $("#numeroFactura__3"+idContador).removeClass('obligatorios__3');

            $("#cantidad__bien__3"+idContador).removeClass('obligatorios');
            
          }


          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios__3');
          $("#otrosHabilitantes__3"+idContador).removeClass('obligatorios3__'+idContador);

          $(this).hide();

          if (parametro12==1) {

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val(),$("#cantidad__bien__3"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }else{

            funcion__guardado__matricez_Seguimiento2023($("#guardarAdministrativos__3"+idContador),$(".obligatorios__na"),[$("#mensualProgramado__3"+idContador).val(),$("#mensualEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[2],parametro4,idFila,idContador,$("#observaciones__tecnicas__3__"+idContador).val()],$("#facturas__3"+idContador),$("#otrosHabilitantes__3"+idContador),false,false,parametro9,parametro4,"filaIndicadora__administra__3",false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__administra__3"+parametro8[0]));

          }

          

        }); 				
        
        /*=====  End of Guardados generales  ======*/
        


      }else{

        $(parametro3).val(0);

        $(parametro7).html(' ');

      }

    });

  });

}


/*=============================================
=            Funciones retornables            =
=============================================*/

function validacionRegistro2023(parametro1) {

	var sumadorErrores = 0;

	$(parametro1).each(function (index) {

		if ($(this).val() == "") {
			sumadorErrores++;
		}

	});

	if (sumadorErrores == 0) {
		return true;
	} else {
		return false;
	}

}

var validacionRegistroMostrarErrores2023 = function (parametro1) {
	//alert ("David Esta validacion")
	var sumadorErrores = 0;

	$(parametro1).each(function (index) {

		if ($(this).val() == "") {
			$(this).addClass('error');
		} else {
			$(this).removeClass('error');
		}

	});

}


/*====================================================
=               CHECKS SUELDOS SALARIOS              =
=====================================================*/
var checkeds__recorridos__sueldos__salarios2023=function(parametro1,parametro2,parametro3,parametro4,parameto5,parametro6,parametro7,parametro8){

	$(parametro2).click(function(e){

		$.getScript("layout/scripts/js/validacionesGenerales.js",function(){

			var condicion = $(parametro2).is(":checked");

			$(parametro7).html(' ');

			if ($(parametro3).val()!=0) {

			    $(parametro2).prop("checked", false);
			    alertify.set("notifier","position", "top-center");
				alertify.notify("Se puede seleccionar un empleado a la vez", "error", 5, function(){});

			}

			if (condicion) {

				$(parametro3).val(1);

				let pestana1="";
				let pestana2="";
				let pestana3="";

				if (parametro4=="primerTrimestre") {
					rotulos = ['Enero', 'Febrero', 'Marzo'];
				}else if (parametro4=="segundoTrimestre") {
					rotulos = ['Abril', 'Mayo', 'Junio'];
				}else if (parametro4=="tercerTrimestre") {
					rotulos = ['Julio', 'Agosto', 'Septiembre'];
				}else if (parametro4=="cuartoTrimestre") {
					rotulos = ['Octubre', 'Noviembre', 'Diciembre'];
				}


																//Ejecutado					//value="0" // Observaciones // Decimotercera remuneración //Decimocuarta remuneración  //Fondos de Reserva //Compensación por Desahucio //Despido Intempestivo //Por Renuncia Voluntaria //Compensación por Vacaciones no Gozadas por Cesación de Funciones
				pestana1='<div id="tablaContenedor"><table id="segui_sueldos" class="filaIndicadora'+parametro8[0]+'" id="dt_sueldos_salarios_inferior"><thead><tr><th colspan="2"></th><th colspan="2">'+rotulos[0]+'</th><th colspan="2">'+rotulos[1]+'</th><th colspan="2">'+rotulos[2]+'</th><th colspan="3">Total</th></tr><tr><th><center>Ítem</center></th><th><center>Nombre Ítem</center></th><th><center>Planificado</center></th><th><center>Ejecutado</center></th><th><center>Planificado</center></th><th><center>Ejecutado</center></th><th><center>Planificado</center></th><th><center>Ejecutado</center></th><th><center>Planificado</center></th><th><center>Ejecutado</center></th><th style=widht="100%"><center>Observaciones</center></th></tr></thead><tbody><tr><td><center>510106</center></td><td><center>Sueldo / Salario mensual</center></td><td><center><input type="text" id="sueldoProgramado'+parametro8[0]+'" name="sueldoProgramado'+parametro8[0]+'" class="sueldoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas'+parametro8[0]+'"><input type="text" id="sueldoEjecutado'+parametro8[0]+'" name="sueldoEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios sueldoEjecutado'+parametro8[0]+'" /><div class="" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="sueldoProgramado__2'+parametro8[0]+'" name="sueldoProgramado__2'+parametro8[0]+'" class="sueldoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal__2'+parametro8[0]+'" name="idPrincipal__2'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2'+parametro8[0]+'"><input type="text" id="sueldoEjecutado__2'+parametro8[0]+'" name="sueldoEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 sueldoEjecutado'+parametro8[0]+'" /><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="sueldoProgramado__3'+parametro8[0]+'" name="sueldoProgramado__3'+parametro8[0]+' sueldoProgramado'+parametro8[0]+'" class="sueldoProgramado__3'+parametro8[0]+' sueldoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal__3'+parametro8[0]+'" name="idPrincipal__3'+parametro8[0]+'" class="idPrincipal__3'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3'+parametro8[0]+'"><input type="text" id="sueldoEjecutado__3'+parametro8[0]+'" name="sueldoEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 sueldoEjecutado'+parametro8[0]+'" /><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="sueldoProgramado1'+parametro8[0]+'" name="sueldoProgramado'+parametro8[0]+'" class="" value="'+parseFloat(parametro8[1]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal'+parametro8[0]+'" name="idPrincipal'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdastotal'+parametro8[0]+'"><input type="text" id="sueldoEjecutado1'+parametro8[0]+'" name="sueldoEjecutado1'+parametro8[0]+'" value="0" readonly class="solo__numeros__montos ancho__total__input text-center obligatorios"/><div class="rotulo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510601</center></td><td><center>Aporte Patronal al IESS Mensual</center></td><td><center><input type="text" id="aporteProgramado'+parametro8[0]+'" name="aporteProgramado'+parametro8[0]+'" class="aporteProgramado'+parametro8[0]+'"  value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__aportes'+parametro8[0]+'"><input type="text" id="aporteEjecutado'+parametro8[0]+'" name="aporteEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios aporteEjecutado'+parametro8[0]+'" /><div class="rotulo__aportes'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="aporteProgramado__2'+parametro8[0]+'" name="aporteProgramado__2'+parametro8[0]+'" class="aporteProgramado'+parametro8[0]+'"  value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__aportes'+parametro8[0]+'"><input type="text" id="aporteEjecutado__2'+parametro8[0]+'" name="aporteEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 aporteEjecutado'+parametro8[0]+'" /><div class="rotulo__2__aportes'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="aporteProgramado__3'+parametro8[0]+'" name="aporteProgramado__3'+parametro8[0]+'" class="aporteProgramado'+parametro8[0]+'"  value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__aportes'+parametro8[0]+'"><input type="text" id="aporteEjecutado__3'+parametro8[0]+'" name="aporteEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 aporteEjecutado'+parametro8[0]+'" /><div class="rotulo__3__aportes'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="aporteProgramado1'+parametro8[0]+'" name="aporteProgramado'+parametro8[0]+'" class=""  value="0" style="border:none!important;" disabled="disabled" /></center></td><td class=""><input type="text" id="aporteEjecutado1'+parametro8[0]+'" name="aporteEjecutado'+parametro8[0]+'" value="0" readonly class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__aportes'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510203</center></td><td><center>Decimotercera remuneración</center></td><td><center><input type="text" id="decimoTercerProgramado'+parametro8[0]+'" name="decimoTercerProgramado'+parametro8[0]+'" class="decimoTercerProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__decimoTercer'+parametro8[0]+'"><input type="text" id="decimoTercerEjecutado'+parametro8[0]+'" name="decimoTercerEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios decimoTercerEjecutado'+parametro8[0]+'" /><div class="rotulo__decimoTercer'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="decimoTercerProgramado__2'+parametro8[0]+'" name="decimoTercerProgramado__2'+parametro8[0]+'" class="decimoTercerProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__decimoTercer'+parametro8[0]+'"><input type="text" id="decimoTercerEjecutado__2'+parametro8[0]+'" name="decimoTercerEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 decimoTercerEjecutado'+parametro8[0]+'" /><div class="rotulo__2__decimoTercer'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="decimoTercerProgramado__3'+parametro8[0]+'" name="decimoTercerProgramado__3'+parametro8[0]+'" class="decimoTercerProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__decimoTercer'+parametro8[0]+'"><input type="text" id="decimoTercerEjecutado__3'+parametro8[0]+'" name="decimoTercerEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 decimoTercerEjecutado'+parametro8[0]+'" /><div class="rotulo__3__decimoTercer'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="decimoTercerProgramado1'+parametro8[0]+'" name="decimoTercerProgramado'+parametro8[0]+'" class="" value="0" style="border:none!important;" disabled="disabled" /></center></td><td class="'+parametro8[0]+'"><input type="text" readonly id="decimoTercerEjecutado1'+parametro8[0]+'" name="decimoTercerEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__decimoTercer'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510204</center></td><td><center>Decimocuarta remuneración</center></td><td><center><input type="text" id="decimoCuartoProgramado'+parametro8[0]+'" name="decimoCuartoProgramado'+parametro8[0]+'" class="decimoCuartoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__decimoCuarto'+parametro8[0]+'"><input type="text" id="decimoCuartoEjecutado'+parametro8[0]+'" name="decimoCuartoEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios decimoCuartoEjecutado'+parametro8[0]+'" /><div class="rotulo__decimoCuarto'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="decimoCuartoProgramado__2'+parametro8[0]+'" name="decimoCuartoProgramado__2'+parametro8[0]+'" class="decimoCuartoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__decimoCuarto'+parametro8[0]+'"><input type="text" id="decimoCuartoEjecutado__2'+parametro8[0]+'" name="decimoCuartoEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 decimoCuartoEjecutado'+parametro8[0]+'" /><div class="rotulo__2__decimoCuarto'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="decimoCuartoProgramado__3'+parametro8[0]+'" name="decimoCuartoProgramado__3'+parametro8[0]+'" class="decimoCuartoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__decimoCuarto'+parametro8[0]+'"><input type="text" id="decimoCuartoEjecutado__3'+parametro8[0]+'" name="decimoCuartoEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 decimoCuartoEjecutado'+parametro8[0]+'" /><div class="rotulo__3__decimoCuarto'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="decimoCuartoProgramado1'+parametro8[0]+'" name="decimoCuartoProgramado'+parametro8[0]+'" class="" value="" style="border:none!important;" disabled="disabled" /></center></td><td class=""><input type="text" readonly id="decimoCuartoEjecutado1'+parametro8[0]+'" name="decimoCuartoEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__decimoCuarto'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510602</center></td><td><center>Fondos de Reserva</center></td><td><center><input type="text" id="fondosReservaProgramado'+parametro8[0]+'" name="fondosReservaProgramado'+parametro8[0]+'" class="fondosReservaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__fondosReserva'+parametro8[0]+'"><input type="text" id="fondosReservaEjecutado'+parametro8[0]+'" name="fondosReservaEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios fondosReservaEjecutado'+parametro8[0]+'" /><div class="rotulo__fondosReserva'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="fondosReservaProgramado__2'+parametro8[0]+'" name="fondosReservaProgramado__2'+parametro8[0]+'" class="fondosReservaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__fondosReserva'+parametro8[0]+'"><input type="text" id="fondosReservaEjecutado__2'+parametro8[0]+'" name="fondosReservaEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 fondosReservaEjecutado'+parametro8[0]+'"/><div class="rotulo__2__fondosReserva'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="fondosReservaProgramado__3'+parametro8[0]+'" name="fondosReservaProgramado__3'+parametro8[0]+'" class="fondosReservaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__fondosReserva'+parametro8[0]+'"><input type="text" id="fondosReservaEjecutado__3'+parametro8[0]+'" name="fondosReservaEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 fondosReservaEjecutado'+parametro8[0]+'" /><div class="rotulo__3__fondosReserva'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="fondosReservaProgramado1'+parametro8[0]+'" name="fondosReservaProgramado'+parametro8[0]+'" class="" value="0" style="border:none!important;" disabled="disabled" /></center></td><td class=""><input type="text" readonly id="fondosReservaEjecutado1'+parametro8[0]+'" name="fondosReservaEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__fondosReserva'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510704</center></td><td><center>Compensación por Desahucio</center></td><td><center><input type="text" id="compensacionDeshaucioProgramado'+parametro8[0]+'" name="compensacionDeshaucioProgramado'+parametro8[0]+'" class="compensacionDeshaucioProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[10]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__compensacion'+parametro8[0]+'"><input type="text" id="compensacionDeshaucioEjecutado'+parametro8[0]+'" name="compensacionDeshaucioEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[10]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compensacionDeshaucioEjecutado'+parametro8[0]+'" /><div class="rotulo__compensacionDeshaucio'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="compensacionDeshaucioProgramado__2'+parametro8[0]+'" name="compensacionDeshaucioProgramado__2'+parametro8[0]+'" class="compensacionDeshaucioProgramado__2'+parametro8[0]+' compensacionDeshaucioProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[11]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__compensacion__2'+parametro8[0]+'"><input type="text" id="compensacionDeshaucioEjecutado__2'+parametro8[0]+'" name="compensacionDeshaucioEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[11]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compensacionDeshaucioEjecutado__2'+parametro8[0]+' compensacionDeshaucioEjecutado'+parametro8[0]+'" /><div class="rotulo__compensacionDeshaucio__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="compensacionDeshaucioProgramado__3'+parametro8[0]+'" name="compensacionDeshaucioProgramado__3'+parametro8[0]+'" class="compensacionDeshaucioProgramado__3'+parametro8[0]+' compensacionDeshaucioProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[12]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__compensacion__3'+parametro8[0]+'"><input type="text" id="compensacionDeshaucioEjecutado__3'+parametro8[0]+'" name="compensacionDeshaucioEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[12]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compensacionDeshaucioEjecutado__3'+parametro8[0]+' compensacionDeshaucioEjecutado'+parametro8[0]+'" /><div class="rotulo__compensacionDeshaucio__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="compensacionDeshaucioProgramado1'+parametro8[0]+'" name="compensacionDeshaucioProgramado'+parametro8[0]+'" class="" value="0" style="border:none!important;" disabled="disabled" /></center></td><td class=""><input type="text" readonly id="compensacionDeshaucioEjecutado1'+parametro8[0]+'" name="compensacionDeshaucioEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__compensacionDeshaucio'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510703</center></td><td><center>Despido Intempestivo</center></td><td><center><input type="text" id="despidoIntepestivoProgramado'+parametro8[0]+'" name="despidoIntepestivoProgramado'+parametro8[0]+'" class="despidoIntepestivoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[13]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__intenpestivo'+parametro8[0]+'"><input type="text" id="despidoIntepestivoEjecutado'+parametro8[0]+'" name="despidoIntepestivoEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[13]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios despidoIntepestivoEjecutado'+parametro8[0]+'" /><div class="rotulo__despidoIntepestivo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="despidoIntepestivoProgramado__2'+parametro8[0]+'" name="despidoIntepestivoProgramado__2'+parametro8[0]+'" class="despidoIntepestivoProgramado__2'+parametro8[0]+' despidoIntepestivoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[14]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__intenpestivo__2'+parametro8[0]+'"><input type="text" id="despidoIntepestivoEjecutado__2'+parametro8[0]+'" name="despidoIntepestivoEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[14]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios despidoIntepestivoEjecutado__2'+parametro8[0]+' despidoIntepestivoEjecutado'+parametro8[0]+'" /><div class="rotulo__despidoIntepestivo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="despidoIntepestivoProgramado__3'+parametro8[0]+'" name="despidoIntepestivoProgramado__3'+parametro8[0]+'" class="despidoIntepestivoProgramado__3'+parametro8[0]+' despidoIntepestivoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[15]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__intenpestivo__3'+parametro8[0]+'"><input type="text" id="despidoIntepestivoEjecutado__3'+parametro8[0]+'" name="despidoIntepestivoEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[15]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios despidoIntepestivoEjecutado__3'+parametro8[0]+' despidoIntepestivoEjecutado'+parametro8[0]+'" /><div class="rotulo__despidoIntepestivo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="despidoIntepestivoProgramado1'+parametro8[0]+'" name="despidoIntepestivoProgramado'+parametro8[0]+'" class="" value="0" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__intenpestivo'+parametro8[0]+'"><input type="text" id="despidoIntepestivoEjecutado1'+parametro8[0]+'" readonly name="despidoIntepestivoEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__despidoIntepestivo'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510709</center></td><td><center>Por Renuncia Voluntaria</center></td><td><center><input type="text" id="reunciaVoluntariaProgramado'+parametro8[0]+'" name="reunciaVoluntariaProgramado'+parametro8[0]+'" class="reunciaVoluntariaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[16]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__renuncia'+parametro8[0]+'"><input type="text" id="renunciaVoluntariaEjecutado'+parametro8[0]+'" name="renunciaVoluntariaEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[16]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios renunciaVoluntariaEjecutado'+parametro8[0]+'" /><div class="rotulo__renunciaVoluntaria'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="reunciaVoluntariaProgramado__2'+parametro8[0]+'" name="reunciaVoluntariaProgramado__2'+parametro8[0]+'" class="reunciaVoluntariaProgramado__2'+parametro8[0]+' reunciaVoluntariaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[17]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__renuncia__2'+parametro8[0]+'"><input type="text" id="renunciaVoluntariaEjecutado__2'+parametro8[0]+'" name="renunciaVoluntariaEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[17]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios renunciaVoluntariaEjecutado__2'+parametro8[0]+' renunciaVoluntariaEjecutado'+parametro8[0]+'" /><div class="rotulo__renunciaVoluntaria__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="reunciaVoluntariaProgramado__3'+parametro8[0]+'" name="reunciaVoluntariaProgramado__3'+parametro8[0]+'" class="reunciaVoluntariaProgramado__3'+parametro8[0]+' reunciaVoluntariaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[18]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__renuncia__3'+parametro8[0]+'"><input type="text" id="renunciaVoluntariaEjecutado__3'+parametro8[0]+'" name="renunciaVoluntariaEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[18]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios renunciaVoluntariaEjecutado__3'+parametro8[0]+' renunciaVoluntariaEjecutado'+parametro8[0]+'" /><div class="rotulo__renunciaVoluntaria__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="reunciaVoluntariaProgramado1'+parametro8[0]+'" name="reunciaVoluntariaProgramado'+parametro8[0]+'" class="" value="0" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__renuncia'+parametro8[0]+'"><input type="text" id="renunciaVoluntariaEjecutado1'+parametro8[0]+'" readonly name="renunciaVoluntariaEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios" /><div class="rotulo__renunciaVoluntaria'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td><center>510707</center></td><td><center>Compensación por Vacaciones no Gozadas por Cesación de Funciones</center></td><td><center><input type="text" id="compesacionDesaucioProgramado'+parametro8[0]+'" name="compesacionDesaucioProgramado'+parametro8[0]+'" class="compesacionDesaucioProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[19]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__vacaciones'+parametro8[0]+'"><input type="text" id="compesacionDesahucioEjecutado'+parametro8[0]+'" name="compesacionDesahucioEjecutado'+parametro8[0]+'" value="'+parseFloat(parametro8[19]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compesacionDesahucioEjecutado3'+parametro8[0]+'" /><div class="rotulo__compesacionDesahucio'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="compesacionDesaucioProgramado__2'+parametro8[0]+'" name="compesacionDesaucioProgramado__2'+parametro8[0]+'" class="compesacionDesaucioProgramado__2'+parametro8[0]+' compesacionDesaucioProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[20]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__vacaciones__2'+parametro8[0]+'"><input type="text" id="compesacionDesahucioEjecutado__2'+parametro8[0]+'" name="compesacionDesahucioEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[20]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compesacionDesahucioEjecutado__2'+parametro8[0]+' compesacionDesahucioEjecutado3'+parametro8[0]+'" /><div class="rotulo__compesacionDesahucio__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="compesacionDesaucioProgramado__3'+parametro8[0]+'" name="compesacionDesaucioProgramado__3'+parametro8[0]+'" class="compesacionDesaucioProgramado__3'+parametro8[0]+' compesacionDesaucioProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[21]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__vacaciones__3'+parametro8[0]+'"><input type="text" id="compesacionDesahucioEjecutado__3'+parametro8[0]+'" name="compesacionDesahucioEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[21]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compesacionDesahucioEjecutado__3'+parametro8[0]+' compesacionDesahucioEjecutado3'+parametro8[0]+'" /><div class="rotulo__compesacionDesahucio__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><center><input type="text" id="compesacionDesaucioProgramado1'+parametro8[0]+'" name="compesacionDesaucioProgramado'+parametro8[0]+'" class="" value="0" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__vacaciones'+parametro8[0]+'"><input type="text" id="compesacionDesahucioEjecutado2'+parametro8[0]+'" readonly name="compesacionDesahucioEjecutado'+parametro8[0]+'" value="0" class="solo__numeros__montos ancho__total__input text-center obligatorios " /><div class="rotulo__compesacionDesahucio'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td><td><div class="col-md-12"><textarea placeholder="Observaciones" id="Observaciones" class="form-control"></textarea></div></td></tr><tr><td colspan="11"><center><a class="btn btn-primary" id="guardarSalarios'+parametro8[0]+'" name="guardarSalarios'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table></div>';

				// pestana2='<table class="filaIndicadora__2'+parametro8[0]+'"><thead><tr><th><center>Ítem</center></th><th><center>Nombre Ítem</center></th><th><center>Planificado</center></th><th><center>Ejecutado</center></th></tr></thead><tbody><tr><td><center>510106</center></td><td><center>Sueldo / Salario mensual</center></td><td><center><input type="text" id="sueldoProgramado__2'+parametro8[0]+'" name="sueldoProgramado__2'+parametro8[0]+'" class="sueldoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal__2'+parametro8[0]+'" name="idPrincipal__2'+parametro8[0]+'" class="idPrincipal'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2'+parametro8[0]+'"><input type="text" id="sueldoEjecutado__2'+parametro8[0]+'" name="sueldoEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 sueldoEjecutado'+parametro8[0]+'" /><div class="rotulo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510601</center></td><td><center>Aporte Patronal al IESS Mensual</center></td><td><center><input type="text" id="aporteProgramado__2'+parametro8[0]+'" name="aporteProgramado__2'+parametro8[0]+'" class="aporteProgramado'+parametro8[0]+'"  value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__aportes'+parametro8[0]+'"><input type="text" id="aporteEjecutado__2'+parametro8[0]+'" name="aporteEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 aporteEjecutado'+parametro8[0]+'" /><div class="rotulo__2__aportes'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510203</center></td><td><center>Decimotercera remuneración</center></td><td><center><input type="text" id="decimoTercerProgramado__2'+parametro8[0]+'" name="decimoTercerProgramado__2'+parametro8[0]+'" class="decimoTercerProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__decimoTercer'+parametro8[0]+'"><input type="text" id="decimoTercerEjecutado__2'+parametro8[0]+'" name="decimoTercerEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 decimoTercerEjecutado'+parametro8[0]+'" /><div class="rotulo__2__decimoTercer'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510204</center></td><td><center>Decimocuarta remuneración</center></td><td><center><input type="text" id="decimoCuartoProgramado__2'+parametro8[0]+'" name="decimoCuartoProgramado__2'+parametro8[0]+'" class="decimoCuartoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__decimoCuarto'+parametro8[0]+'"><input type="text" id="decimoCuartoEjecutado__2'+parametro8[0]+'" name="decimoCuartoEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2 decimoCuartoEjecutado'+parametro8[0]+'" /><div class="rotulo__2__decimoCuarto'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510602</center></td><td><center>Fondos de Reserva</center></td><td><center><input type="text" id="fondosReservaProgramado__2'+parametro8[0]+'" name="fondosReservaProgramado__2'+parametro8[0]+'" class="fondosReservaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__2__fondosReserva'+parametro8[0]+'"><input type="text" id="fondosReservaEjecutado__2'+parametro8[0]+'" name="fondosReservaEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__2" fondosReservaEjecutado'+parametro8[0]+'/><div class="rotulo__2__fondosReserva'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510704</center></td><td><center>Compensación por Desahucio</center></td><td><center><input type="text" id="compensacionDeshaucioProgramado__2'+parametro8[0]+'" name="compensacionDeshaucioProgramado__2'+parametro8[0]+'" class="compensacionDeshaucioProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[11]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__compensacion__2'+parametro8[0]+'"><input type="text" id="compensacionDeshaucioEjecutado__2'+parametro8[0]+'" name="compensacionDeshaucioEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[11]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compensacionDeshaucioEjecutado__2'+parametro8[0]+'" /><div class="rotulo__compensacionDeshaucio__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510703</center></td><td><center>Despido Intempestivo</center></td><td><center><input type="text" id="despidoIntepestivoProgramado__2'+parametro8[0]+'" name="despidoIntepestivoProgramado__2'+parametro8[0]+'" class="despidoIntepestivoProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[14]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__intenpestivo__2'+parametro8[0]+'"><input type="text" id="despidoIntepestivoEjecutado__2'+parametro8[0]+'" name="despidoIntepestivoEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[14]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios despidoIntepestivoEjecutado__2'+parametro8[0]+'" /><div class="rotulo__despidoIntepestivo__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510709</center></td><td><center>Por Renuncia Voluntaria</center></td><td><center><input type="text" id="reunciaVoluntariaProgramado__2'+parametro8[0]+'" name="reunciaVoluntariaProgramado__2'+parametro8[0]+'" class="reunciaVoluntariaProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[17]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__renuncia__2'+parametro8[0]+'"><input type="text" id="renunciaVoluntariaEjecutado__2'+parametro8[0]+'" name="renunciaVoluntariaEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[17]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios renunciaVoluntariaEjecutado__2'+parametro8[0]+'" /><div class="rotulo__renunciaVoluntaria__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510707</center></td><td><center>Compensación por Vacaciones no Gozadas por Cesación de Funciones</center></td><td><center><input type="text" id="compesacionDesaucioProgramado__2'+parametro8[0]+'" name="compesacionDesaucioProgramado__2'+parametro8[0]+'" class="compesacionDesaucioProgramado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[20]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__vacaciones__2'+parametro8[0]+'"><input type="text" id="compesacionDesahucioEjecutado__2'+parametro8[0]+'" name="compesacionDesahucioEjecutado__2'+parametro8[0]+'" value="'+parseFloat(parametro8[20]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compesacionDesahucioEjecutado__2'+parametro8[0]+'" /><div class="rotulo__compesacionDesahucio__2'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td colspan="4"><center><a class="btn btn-primary" id="guardarSalarios__2'+parametro8[0]+'" name="guardarSalarios__2'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

				//  pestana3='<table class="filaIndicadora__3'+parametro8[0]+'"><thead><tr><th><center>Ítem</center></th><th><center>Nombre Ítem</center></th><th><center>Planificado</center></th><th><center>Ejecutado</center></th></tr></thead><tbody><tr><td><center>510106</center></td><td><center>Sueldo / Salario mensual</center></td><td><center><input type="text" id="sueldoProgramado__3'+parametro8[0]+'" name="sueldoProgramado__3'+parametro8[0]+'" class="sueldoProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /><input type="hidden" id="idPrincipal__3'+parametro8[0]+'" name="idPrincipal__3'+parametro8[0]+'" class="idPrincipal__3'+parametro8[0]+'"  value="'+parametro8[0]+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3'+parametro8[0]+'"><input type="text" id="sueldoEjecutado__3'+parametro8[0]+'" name="sueldoEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[1]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 sueldoEjecutado'+parametro8[0]+'" /><div class="rotulo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510601</center></td><td><center>Aporte Patronal al IESS Mensual</center></td><td><center><input type="text" id="aporteProgramado__3'+parametro8[0]+'" name="aporteProgramado__3'+parametro8[0]+'" class="aporteProgramado'+parametro8[0]+'"  value="'+parseFloat(parametro8[2]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__aportes'+parametro8[0]+'"><input type="text" id="aporteEjecutado__3'+parametro8[0]+'" name="aporteEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[2]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 aporteEjecutado'+parametro8[0]+'" /><div class="rotulo__3__aportes'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510203</center></td><td><center>Decimotercera remuneración</center></td><td><center><input type="text" id="decimoTercerProgramado__3'+parametro8[0]+'" name="decimoTercerProgramado__3'+parametro8[0]+'" class="decimoTercerProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__decimoTercer'+parametro8[0]+'"><input type="text" id="decimoTercerEjecutado__3'+parametro8[0]+'" name="decimoTercerEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[3]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 decimoTercerEjecutado'+parametro8[0]+'" /><div class="rotulo__3__decimoTercer'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510204</center></td><td><center>Decimocuarta remuneración</center></td><td><center><input type="text" id="decimoCuartoProgramado__3'+parametro8[0]+'" name="decimoCuartoProgramado__3'+parametro8[0]+'" class="decimoCuartoProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__decimoCuarto'+parametro8[0]+'"><input type="text" id="decimoCuartoEjecutado__3'+parametro8[0]+'" name="decimoCuartoEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[4]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 decimoCuartoEjecutado'+parametro8[0]+'" /><div class="rotulo__3__decimoCuarto'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510602</center></td><td><center>Fondos de Reserva</center></td><td><center><input type="text" id="fondosReservaProgramado__3'+parametro8[0]+'" name="fondosReservaProgramado__3'+parametro8[0]+'" class="fondosReservaProgramado'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__3__fondosReserva'+parametro8[0]+'"><input type="text" id="fondosReservaEjecutado__3'+parametro8[0]+'" name="fondosReservaEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[5]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios__3 fondosReservaEjecutado'+parametro8[0]+'" /><div class="rotulo__3__fondosReserva'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510704</center></td><td><center>Compensación por Desahucio</center></td><td><center><input type="text" id="compensacionDeshaucioProgramado__3'+parametro8[0]+'" name="compensacionDeshaucioProgramado__3'+parametro8[0]+'" class="compensacionDeshaucioProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[12]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__compensacion__3'+parametro8[0]+'"><input type="text" id="compensacionDeshaucioEjecutado__3'+parametro8[0]+'" name="compensacionDeshaucioEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[12]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compensacionDeshaucioEjecutado__3'+parametro8[0]+'" /><div class="rotulo__compensacionDeshaucio__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510703</center></td><td><center>Despido Intempestivo</center></td><td><center><input type="text" id="despidoIntepestivoProgramado__3'+parametro8[0]+'" name="despidoIntepestivoProgramado__3'+parametro8[0]+'" class="despidoIntepestivoProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[15]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__intenpestivo__3'+parametro8[0]+'"><input type="text" id="despidoIntepestivoEjecutado__3'+parametro8[0]+'" name="despidoIntepestivoEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[15]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios despidoIntepestivoEjecutado__3'+parametro8[0]+'" /><div class="rotulo__despidoIntepestivo__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510709</center></td><td><center>Por Renuncia Voluntaria</center></td><td><center><input type="text" id="reunciaVoluntariaProgramado__3'+parametro8[0]+'" name="reunciaVoluntariaProgramado__3'+parametro8[0]+'" class="reunciaVoluntariaProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[18]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__renuncia__3'+parametro8[0]+'"><input type="text" id="renunciaVoluntariaEjecutado__3'+parametro8[0]+'" name="renunciaVoluntariaEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[18]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios renunciaVoluntariaEjecutado__3'+parametro8[0]+'" /><div class="rotulo__renunciaVoluntaria__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td><center>510707</center></td><td><center>Compensación por Vacaciones no Gozadas por Cesación de Funciones</center></td><td><center><input type="text" id="compesacionDesaucioProgramado__3'+parametro8[0]+'" name="compesacionDesaucioProgramado__3'+parametro8[0]+'" class="compesacionDesaucioProgramado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[21]).toFixed(2)+'" style="border:none!important;" disabled="disabled" /></center></td><td class="celdas__vacaciones__3'+parametro8[0]+'"><input type="text" id="compesacionDesahucioEjecutado__3'+parametro8[0]+'" name="compesacionDesahucioEjecutado__3'+parametro8[0]+'" value="'+parseFloat(parametro8[21]).toFixed(2)+'" class="solo__numeros__montos ancho__total__input text-center obligatorios compesacionDesahucioEjecutado__3'+parametro8[0]+'" /><div class="rotulo__compesacionDesahucio__3'+parametro8[0]+'" style="text-align:center; widht:100%;"></div></td></tr><tr><td colspan="4"><center><a class="btn btn-primary" id="guardarSalarios__3'+parametro8[0]+'" name="guardarSalarios__3'+parametro8[0]+'" idContador="'+parametro8[0]+'"><i class="fa fa-floppy-o" aria-hidden="true"></i></a></center></td></tr></tbody></table>';

						
	
				acordion__general_sueldos_salarios($(parametro7),parametro4,parameto5,pestana1,pestana2,pestana3,parametro7);
				let sumador1= parseFloat()
				sumarNumeros2($(".sueldoProgramado"+parametro8[0]),$("#sueldoProgramado1"+parametro8[0]));  
				sumarNumeros2($(".aporteProgramado"+parametro8[0]),$("#aporteProgramado1"+parametro8[0]));  
				sumarNumeros2($(".decimoTercerProgramado"+parametro8[0]),$("#decimoTercerProgramado1"+parametro8[0]));  
				sumarNumeros2($(".decimoCuartoProgramado"+parametro8[0]),$("#decimoCuartoProgramado1"+parametro8[0]));  
				sumarNumeros2($(".fondosReservaProgramado"+parametro8[0]),$("#fondosReservaProgramado1"+parametro8[0]));  
				sumarNumeros2($(".compensacionDeshaucioProgramado"+parametro8[0]),$("#compensacionDeshaucioProgramado1"+parametro8[0]));  
				sumarNumeros2($(".despidoIntepestivoProgramado"+parametro8[0]),$("#despidoIntepestivoProgramado1"+parametro8[0]));  
				sumarNumeros2($(".reunciaVoluntariaProgramado"+parametro8[0]),$("#reunciaVoluntariaProgramado1"+parametro8[0]));  

				sumarNumeros2($(".sueldoEjecutado"+parametro8[0]),$("#sueldoEjecutado1"+parametro8[0]));  
				sumarNumeros2($(".aporteEjecutado"+parametro8[0]),$("#aporteEjecutado1"+parametro8[0]));  
				sumarNumeros2($(".decimoTercerEjecutado"+parametro8[0]),$("#decimoTercerEjecutado1"+parametro8[0]));  
				sumarNumeros2($(".decimoCuartoEjecutado"+parametro8[0]),$("#decimoCuartoEjecutado1"+parametro8[0]));  
				sumarNumeros2($(".fondosReservaEjecutado"+parametro8[0]),$("#fondosReservaEjecutado1"+parametro8[0])); 
				sumarNumeros2($(".compensacionDeshaucioEjecutado"+parametro8[0]),$("#compensacionDeshaucioEjecutado1"+parametro8[0])); 
				sumarNumeros2($(".despidoIntepestivoEjecutado"+parametro8[0]),$("#despidoIntepestivoEjecutado1"+parametro8[0])); 
				sumarNumeros2($(".renunciaVoluntariaEjecutado"+parametro8[0]),$("#renunciaVoluntariaEjecutado1"+parametro8[0])); 
				sumarNumeros2($(".compesacionDesahucioEjecutado3"+parametro8[0]),$("#compesacionDesahucioEjecutado2"+parametro8[0])); 
				//sumarNumeross($(".sumadorNum"),$("#valorTotal"));  sueldoProgramado'+parametro8[0]+'  sueldoEjecutado'+parametro8[0]+' id="sueldoEjecutado1'+parametro8[0]+'"  rotulo'+parametro8[0]+' aporteEjecutado'+parametro8[0]+' decimoTercerEjecutado'+parametro8[0]+'  decimoCuartoEjecutado1  fondosReservaEjecutado'+parametro8[0]+'  compensacionDeshaucioEjecutado'+parametro8[0]+  sueldoProgramado'+parametro8[0]+'  aporteProgramado'+parametro8[0]+'  decimoTercerProgramado'+parametro8[0]+'  decimoCuartoProgramado'+parametro8[0]+'   fondosReservaProgramado'+parametro8[0]+' compensacionDeshaucioProgramado'+parametro8[0]+'  despidoIntepestivoProgramado'+parametro8[0]+'reunciaVoluntariaProgramado'+parametro8[0]+' despidoIntepestivoEjecutado'+parametro8[0]+' renunciaVoluntariaEjecutado'+parametro8[0]+' compesacionDesahucioEjecutado'+parametro8[0]+'
				sumarNumeross($(".sueldoProgramado"+parametro8[0]),$("#sueldoProgramado1"+parametro8[0]));  
				sumarNumeross($(".aporteProgramado"+parametro8[0]),$("#aporteProgramado1"+parametro8[0]));  
				sumarNumeross($(".decimoTercerProgramado"+parametro8[0]),$("#decimoTercerProgramado1"+parametro8[0]));  
				sumarNumeross($(".decimoCuartoProgramado"+parametro8[0]),$("#decimoCuartoProgramado1"+parametro8[0]));  
				sumarNumeross($(".fondosReservaProgramado"+parametro8[0]),$("#fondosReservaProgramado1"+parametro8[0]));  
				sumarNumeross($(".compensacionDeshaucioProgramado"+parametro8[0]),$("#compensacionDeshaucioProgramado1"+parametro8[0]));  
				sumarNumeross($(".despidoIntepestivoProgramado"+parametro8[0]),$("#despidoIntepestivoProgramado1"+parametro8[0]));  
				sumarNumeross($(".renunciaVoluntariaEjecutado"+parametro8[0]),$("#renunciaVoluntariaEjecutado1"+parametro8[0]));  

				sumarNumeross($(".sueldoEjecutado"+parametro8[0]),$("#sueldoEjecutado1"+parametro8[0]));  
				sumarNumeross($(".aporteEjecutado"+parametro8[0]),$("#aporteEjecutado1"+parametro8[0]));  
				sumarNumeross($(".decimoTercerEjecutado"+parametro8[0]),$("#decimoTercerEjecutado1"+parametro8[0]));  
				sumarNumeross($(".decimoCuartoEjecutado"+parametro8[0]),$("#decimoCuartoEjecutado1"+parametro8[0]));  
				sumarNumeross($(".fondosReservaEjecutado"+parametro8[0]),$("#fondosReservaEjecutado1"+parametro8[0]));  
				sumarNumeross($(".compensacionDeshaucioEjecutado"+parametro8[0]),$("#compensacionDeshaucioEjecutado1"+parametro8[0]));  
				sumarNumeross($(".despidoIntepestivoEjecutado"+parametro8[0]),$("#despidoIntepestivoEjecutado1"+parametro8[0]));  
				sumarNumeross($(".compesacionDesahucioEjecutado3"+parametro8[0]),$("#compesacionDesahucioEjecutado2"+parametro8[0]));  

				funcion__solo__numero($(".solo__numeros"));
				funcion__solo__numero__montos($(".solo__numeros__montos"));

				funcion__cambio__de__numero($("#sueldoEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#aporteEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#decimoTercerEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#decimoCuartoEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#fondosReservaEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#compensacionDeshaucioEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#despidoIntepestivoEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#renunciaVoluntariaEjecutado"+parametro8[0]));
				funcion__cambio__de__numero($("#compesacionDesahucioEjecutado"+parametro8[0]));

				funcion__cambio__de__numero($("#sueldoEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#aporteEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#decimoTercerEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#decimoCuartoEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#fondosReservaEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#compensacionDeshaucioEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#despidoIntepestivoEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#renunciaVoluntariaEjecutado__2"+parametro8[0]));
				funcion__cambio__de__numero($("#compesacionDesahucioEjecutado__2"+parametro8[0])); 

				funcion__cambio__de__numero($("#sueldoEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#aporteEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#decimoTercerEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#decimoCuartoEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#fondosReservaEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#compensacionDeshaucioEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#despidoIntepestivoEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#renunciaVoluntariaEjecutado__3"+parametro8[0]));
				funcion__cambio__de__numero($("#compesacionDesahucioEjecutado__3"+parametro8[0]));

				$("#guardarSalarios"+parametro8[0]).click(function(e) {
					let idContador=$(this).attr('idContador');
					//alert($("#aporteProgramado__2"+idContador).val());
					//alert (idContador);
					funcion__guardado__matricez__sueldos__salarios($("#guardarSalarios"+idContador),$(".obligatorios__na"),[$("#sueldoProgramado"+idContador).val(),$("#sueldoEjecutado"+idContador).val(),$("#aporteProgramado"+idContador).val(),$("#aporteEjecutado"+idContador).val(),$("#decimoTercerProgramado"+idContador).val(),$("#decimoTercerEjecutado"+idContador).val(),$("#decimoCuartoProgramado"+idContador).val(),$("#decimoCuartoEjecutado"+idContador).val(),$("#fondosReservaProgramado"+idContador).val(),$("#fondosReservaEjecutado"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal"+idContador).val(),rotulos[0],parametro4,$("#compensacionDeshaucioProgramado"+idContador).val(),$("#despidoIntepestivoProgramado"+idContador).val(),$("#reunciaVoluntariaProgramado"+idContador).val(),$("#compesacionDesaucioProgramado"+idContador).val(),$("#compensacionDeshaucioEjecutado"+idContador).val(),$("#despidoIntepestivoEjecutado"+idContador).val(),$("#renunciaVoluntariaEjecutado"+idContador).val(),$("#compesacionDesahucioEjecutado"+idContador).val()],$("#planillaIeess"+idContador),$("#rolPago"+idContador),$("#comprobantePago"+idContador),$(".filaIndicadora"+idContador),"sueldos__salarios__seguimientos",parametro4,false,false,false,"#"+rotulos[0]+"-tab",$(".filaIndicadora"+parametro8[0]));					//alert (idContador);
					funcion__guardado__matricez__sueldos__salarios($("#guardarSalarios"+idContador),$(".obligatorios__2"),[$("#sueldoProgramado__2"+idContador).val(),$("#sueldoEjecutado__2"+idContador).val(),$("#aporteProgramado__2"+idContador).val(),$("#aporteEjecutado__2"+idContador).val(),$("#decimoTercerProgramado__2"+idContador).val(),$("#decimoTercerEjecutado__2"+idContador).val(),$("#decimoCuartoProgramado__2"+idContador).val(),$("#decimoCuartoEjecutado__2"+idContador).val(),$("#fondosReservaProgramado__2"+idContador).val(),$("#fondosReservaEjecutado__2"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__2"+idContador).val(),rotulos[1],parametro4,$("#compensacionDeshaucioEjecutado__2"+idContador).val(),$("#despidoIntepestivoProgramado__2"+idContador).val(),$("#renunciaVoluntariaEjecutado__2"+idContador).val(),$("#compesacionDesahucioEjecutado__2"+idContador).val(),$("#compensacionDeshaucioProgramado__2"+idContador).val(),$("#despidoIntepestivoProgramado__2"+idContador).val(),$("#reunciaVoluntariaProgramado__2"+idContador).val(),$("#compesacionDesaucioProgramado__2"+idContador).val()],$("#planillaIeess__2"+idContador),$("#rolPago__2"+idContador),$("#comprobantePago__2"+idContador),$(".filaIndicadora__2"+idContador),"sueldos__salarios__seguimientos",parametro4,false,false,false,"#"+rotulos[1]+"-tab",$(".filaIndicadora__2"+parametro8[0]));					//alert (idContador);
					funcion__guardado__matricez__sueldos__salarios($("#guardarSalarios"+idContador),$(".obligatorios__3"),[$("#sueldoProgramado__3"+idContador).val(),$("#sueldoEjecutado__3"+idContador).val(),$("#aporteProgramado__3"+idContador).val(),$("#aporteEjecutado__3"+idContador).val(),$("#decimoTercerProgramado__3"+idContador).val(),$("#decimoTercerEjecutado__3"+idContador).val(),$("#decimoCuartoProgramado__3"+idContador).val(),$("#decimoCuartoEjecutado__3"+idContador).val(),$("#fondosReservaProgramado__3"+idContador).val(),$("#fondosReservaEjecutado__3"+idContador).val(),$("#organismoIdPrin").val(),$("#idPrincipal__3"+idContador).val(),rotulos[2],parametro4,$("#compensacionDeshaucioEjecutado__3"+idContador).val(),$("#despidoIntepestivoProgramado__3"+idContador).val(),$("#renunciaVoluntariaEjecutado__3"+idContador).val(),$("#compesacionDesahucioEjecutado__3"+idContador).val(),$("#compensacionDeshaucioProgramado__3"+idContador).val(),$("#despidoIntepestivoProgramado__3"+idContador).val(),$("#reunciaVoluntariaProgramado__3"+idContador).val(),$("#compesacionDesaucioProgramado__3"+idContador).val()],$("#planillaIeess__3"+idContador),$("#rolPago__3"+idContador),$("#comprobantePago__3"+idContador),$(".filaIndicadora__3"+idContador),"sueldos__salarios__seguimientos",parametro4,false,false,false,"#"+rotulos[2]+"-tab",$(".filaIndicadora__3"+parametro8[0]));
				}); 		
			}else{
				$(parametro3).val(0);
				$(parametro7).html(' ');

				$("#contadorIndicador").val(0);
				$("#contadorIndicador2").val(0);
			}
		});
	});
}    

