var agregarDatatablets__paid__administrativo__2023=function(parametro1,parametro3,parametro5,objetos,classBtnEditar,classBtnEliminar){
  
    $(parametro1).click(function (e){

        $("#"+parametro3).DataTable().destroy();

        datatabletsSeguimientoPaidAdminstradorVacio($("#"+parametro3),parametro3,parametro5,objetos,[$("#idOrganismo").val(),$("#trimestreN").val(),parametro5],false);

        funcion__editar_tabla_paid_administrador("#"+parametro3+" tbody",classBtnEditar,$("#"+parametro3));
        funcion__eliminar_tabla_paid_administrador("#"+parametro3+" tbody",classBtnEliminar, $("#"+parametro3),classBtnEliminar);
    });

}

var AsignarMontoPAIDInfraestructura = function (tipo) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("idComponente", $("#JuegosNacionalesIDCOMPONENTE").val());
    paqueteDeDatos.append("idRubro", $("#JuegosNacionalesIDRUBRO").val()); 

    $.ajax({
        
        type:"POST",
        url:"modelosBd/PAID_INFRAESTRUCTURA/selector.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        async: false,
        success:function(response){

            let elementos=JSON.parse(response);

            let informacion=elementos['indicadorInformacion'];

            for (z of informacion) {

            

                if(z.TotalPlanificado==null){
                    $("#MontoAsignadoInfraestructura").text("$ 0");
                    $("#MontoAsignadoInfraestructura").attr("valor",0);
    
                    
    
                    var val = parseFloat( $("#MontoJN").attr("valor"));
    
                    var sum = 0;
    
                    var res = val - sum;
    
                   
    
                    $("#MontoPorAsignarInfraestructura").attr("valor", res.toFixed(2));
    
                    $("#MontoPorAsignarInfraestructura").text("$ " + res.toLocaleString());
    
    
                }else{
    
                    let num=parseFloat(z.TotalPlanificado)
    
                    $("#MontoAsignadoInfraestructura").text("$ "+num.toLocaleString());
                    $("#MontoAsignadoInfraestructura").attr("valor",z.TotalPlanificado);
    
                    var val = parseFloat(z.montos);
    
                    var res = val - z.TotalPlanificado;
    
                    $("#MontoPorAsignarInfraestructura").attr("valor", res.toFixed(2));
    
                    $("#MontoPorAsignarInfraestructura").text("$ " + res.toLocaleString());
                    
    
                }
            }
            
            


        

        },
        error:function(){

        }
                
    });	

    

}

var agregarInformacion_Informes_PAID_Infraestructura=function(boton){
  
    $(boton).click(function (e){

              e.preventDefault();
        
              var paqueteDeDatos = new FormData();
        
              paqueteDeDatos.append('tipo','obtenerInformacionODPAIDInfraestructura');
        
            
            $.ajax({
        
                type:"POST",
                url:"modelosBd/PAID_INFRAESTRUCTURA/selector.md.php",
                contentType: false,
                data:paqueteDeDatos,
                processData: false,
                cache: false, 
                success:function(response){
        
                    let elementos=JSON.parse(response);
        
                    let informacion=elementos['indicadorInformacion'];
                    
                    for (w of informacion) {
        
                        $(".nombre__organizacion__deportivas").text(w.nombreOrganismo);
                        $("#nombre__organizacion__deportivas").val(w.nombreOrganismo);

                        $(".ruc__organizacion__deportivas").text(w.ruc);
                        $("#ruc__organizacion__deportivas").val(w.ruc);

                        $(".acuerdo__ministerial__organizacion__deportivas").text(w.numeroDeAcuerdo + ' ' + w.fechaDeAcuerdoMinisterial);
                        $("#acuerdo__ministerial__organizacion__deportivas").val(w.numeroDeAcuerdo + ' ' + w.fechaDeAcuerdoMinisterial);

                        $(".presidente__organizacion__deportivas").text(w.presidente);
                        $("#presidente__organizacion__deportivas").val(w.presidente);

                        $(".direccion__organizacion__deportivas").text(w.direccion);
                        $("#direccion__organizacion__deportivas").val(w.direccion);
        
                        $(".correo__organizacion__deportivas").text(w.correo);
                        $("#correo__organizacion__deportivas").val(w.correo);
        
        
                    }
        
                
        
                },
                error:function(){
        
                }
                        
            });	  	
        
          
    });

}


var AsignarMontoPlanificadosGENERALTOTALInfraestructura = function (tipo,valoren0, identificador, valorPlanificado,valorporPlanificar) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("identificador", identificador);

    $.ajax({
        
        type:"POST",
        url:"modelosBd/PAID_INFRAESTRUCTURA/selector.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        async: false,
        success:function(response){

            let elementos=JSON.parse(response);

            let informacion=elementos['indicadorInformacion'];
            
            for (z of informacion) {

           

                if(z.TotalPlanificado==null){
                   
                    $("#"+valorPlanificado).text("Monto Planificado $ 0");
                    $("#"+valorPlanificado).attr("valor",0);
    
                    var val = ($("#montoPaidGeneralDesarrollo").attr("valor"));
    
                    var sum = 0;
    
                    var res = val - sum;
    
                    $("#"+valorporPlanificar).attr("valor", res.toFixed(2));
    
                    $("#"+valorporPlanificar).text("Monto Por Planificar $ " + res.toLocaleString());
    
                   
                }else{
    
                  
    
                    var totalPlanificado = parseFloat(z.TotalPlanificado);
    
                    $("#"+valorPlanificado).text("Monto Planificado $ "+totalPlanificado.toLocaleString());
                    $("#"+valorPlanificado).attr("valor",totalPlanificado.toFixed(2));
                    
                    var val = ($("#montoPaidGeneralDesarrollo").attr("valor"));
    
                    var res = val - z.TotalPlanificado;
    
                    $("#"+valorporPlanificar).attr("valor", res.toFixed(2));
    
                    $("#"+valorporPlanificar).text("Monto Por Planificar $ " + res.toLocaleString());
    
    
                }
            }

        

        },
        error:function(){

        }
                
    });	 

   


}





var tablaPrincipalInfraestructura = function (tipo, identificador) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("identificador", identificador);

   
    axios({
        method: "post",
        url: "modelosBd/PAID_DESARROLLO/selector.md.php",
        data: paqueteDeDatos,
        headers: { "Content-Type": "multipart/form-data" },
    }).then((response) => {

        var tabla = document.getElementById('tablaPAIDGeneralInfra');

        let y=0;

        for (z of response.data.informacion) {
            if(z.montos > 0){

           
            var fila = tabla.insertRow();
            

            var celda1 = fila.insertCell(0);
            var celda2 = fila.insertCell(1);
            var celda3 = fila.insertCell(2);
            var celda4 = fila.insertCell(3);
            var celda5 = fila.insertCell(4);

            celda1.setAttribute('align','center');
            celda2.setAttribute('align','center');
            celda3.setAttribute('align','center');
            celda4.setAttribute('align','center');
            celda5.setAttribute('align','center');

            celda1.innerHTML = (y=y+1);
            celda2.innerHTML = z.nombreComponentes;
            celda3.innerHTML = z.nombreIndicadores;
            celda4.innerHTML ='<button type"button" id="btnVerIndicador'+z.idComponentes+'" class="btn btn-success"style="width=200px;" data-bs-toggle="modal" data-bs-target="#modalActividadDesarrollo">VER</button>';
            celda5.innerHTML = '<button type"button" class="btn btn-success"style="width=200px;" id="item'+z.idComponentes+'" idComponentes="'+z.idComponentes+'" idAsignacion="'+z.idAsignacion+'" data-bs-toggle="modal" data-bs-target="#RubrosCargadosDesarrollo">VER</button>';

            $("#btnVerIndicador"+z.idComponentes).attr('idComponentes',z.idComponentes);
            $("#btnVerIndicador"+z.idComponentes).attr('identificador',identificador);
            $("#btnVerIndicador"+z.idComponentes).attr('idIndicadores',z.idIndicadores);
            
            obtenerRubrosInfraestructura($("#item"+z.idComponentes),"obtener_rubros_inversion",identificador);

            obtenerIndicadoresRubroDesarrollo($("#btnVerIndicador"+z.idComponentes),"obtener_indicadores_inversion")
        
            }
        }

        

    }).catch((error) => {

    });

}



var obtenerRubrosInfraestructura = function (boton,tipo,identificador) {

    $(boton).click(function (e){

        let idComponentes=$(this).attr('idComponentes');
        let idAsignacion=$(this).attr('idAsignacion');
        
        let paqueteDeDatos = new FormData();

        paqueteDeDatos.append("tipo", tipo);
        paqueteDeDatos.append("idComponentes", idComponentes);
        paqueteDeDatos.append("idAsignacion", idAsignacion);
        paqueteDeDatos.append("identificador", identificador);

        

        axios({
            method: "post",
            url: "modelosBd/PAID_DESARROLLO/selector.md.php",
            data: paqueteDeDatos,
            headers: { "Content-Type": "multipart/form-data" },
        }).then((response) => {

            

            var tabla = document.getElementById('rubroslistaDesarrollo');

            let y=0;
    
            for (z of response.data.informacion) {

                var valorMonto=parseFloat(z.montos)

                
                if(valorMonto>0){
                
                var fila = tabla.insertRow();

                var celda1 = fila.insertCell(0);
                var celda2 = fila.insertCell(1);
                var celda3 = fila.insertCell(2);
                var celda4 = fila.insertCell(3);
                var celda5 = fila.insertCell(4);
                var celda6 = fila.insertCell(5);

                celda1.setAttribute('align','center');
               
                celda2.setAttribute('align','center');
                celda3.setAttribute('align','center');
                celda4.setAttribute('align','center');
                celda5.setAttribute('align','center');
                celda6.setAttribute('align','center');

                

                celda1.innerHTML = '<p style="font-size: 15px">'+(y=y+1)+'</p>';
                celda2.innerHTML = '<p style="font-size: 15px">'+z.nombreRubros+'</p>';
                celda3.innerHTML = '<p style="font-size: 15px">$ '+valorMonto.toLocaleString()+'</p>';
                celda4.innerHTML = '<p style="font-size: 15px" id="valorAsignado'+z.idRubros+'" class="restar__montos"></p>';
                celda5.innerHTML = '<p style="font-size: 15px" id="valorPorAsignar'+z.idRubros+'"></p>';
                celda6.innerHTML = '<a data-dismiss="modal" id="rubros__'+z.idRubros+'__'+idComponentes+'"  class="btn btn-primary" data-bs-toggle="modal" nombreRubro="'+z.nombreRubros+'" idRubros="'+z.idRubros+'" idAsignacion="'+idAsignacion+'" idComponentes="'+idComponentes+'" identificador="'+identificador+'" data-bs-target="#itemsCargadosDesarrollo">Ver</a>';

                obtenerRubros__items_Desarrollo($("#rubros__" +z.idRubros+"__"+idComponentes), "obtener__rubros__items__inversion", identificador);
        
                AsignarMontoPlanificadosGENERAInfra("obtener_valor_total_paid_infraestructura",valorMonto.toFixed(2),idComponentes,z.idRubros,"valorAsignado"+z.idRubros,"valorPorAsignar"+z.idRubros);  

                AsignarIdRubroJN("obtener_idRubro_JN",identificador);

                $("#valorAsignado"+z.idRubros).text($("#montoAsignadoDesarrollo").attr("valor"));
                $("#valorPorAsignar"+z.idRubros).text($("#montoPorAsignarDesarrollo").attr("valor"));

                deshabilitarBtnPaidGeneral("#valorPorAsignar"+z.idRubros,"#rubros__" +z.idRubros+"__"+idComponentes,"#itemsCargadosDesarrollo","#modalDatosInconclusos")


                }else{

                }
            
                
            }

        }).catch((error) => {

        });

    });

}


var AsignarMontoPlanificadosGENERAInfra = function (tipo,valoren0, idComponente, idRubro, valorPlanificado,valorporPlanificar) {

    let paqueteDeDatos = new FormData();

    paqueteDeDatos.append("tipo", tipo);
    paqueteDeDatos.append("idComponente", idComponente);
    paqueteDeDatos.append("idRubro", idRubro); 

    $.ajax({
        
        type:"POST",
        url:"modelosBd/PAID_INFRAESTRUCTURA/selector.md.php",
        contentType: false,
        data:paqueteDeDatos,
        processData: false,
        cache: false, 
        success:function(response){

            let elementos=JSON.parse(response);

         

            let informacion=elementos['indicadorInformacion'];
            

            for (z of informacion) {

           
            
                if(z.TotalPlanificado==null){
                   
                    $("#"+valorPlanificado).text("$ 0");
                    $("#"+valorPlanificado).attr("valor",0);
    
                    var val = parseFloat(valoren0);
    
                    var sum = 0;
    
                    var res = val - sum;
    
                    $("#"+valorporPlanificar).attr("valor", res.toFixed(2));
    
                    $("#"+valorporPlanificar).text("$ " + res.toLocaleString());
    
                   
                }else{
                    var totalPlanificado = parseFloat(z.TotalPlanificado);
    
                    $("#"+valorPlanificado).text("$ "+totalPlanificado.toLocaleString());
                    $("#"+valorPlanificado).attr("valor",totalPlanificado.toFixed(2));
                    
                    var val = parseFloat(z.montos);
    
                    var res = val - z.TotalPlanificado;
    
                    $("#"+valorporPlanificar).attr("valor", res.toFixed(2));
    
                    $("#"+valorporPlanificar).text("$ " + res.toLocaleString());
    
    
                }
            }

        

        },
        error:function(){

        }
                
    });	 

   


}