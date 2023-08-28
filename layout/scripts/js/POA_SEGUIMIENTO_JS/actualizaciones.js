var insertar__contrataciones__publicas_seguimiento=function(boton){

    $(boton).click(function (e) {

         
            var idCatalogo = $(this).attr('idCatalogo');
          

            var paqueteDeDatos = new FormData();
    
            paqueteDeDatos.append('tipo','actualiza__catalogoContraloria__seguimiento');		
    
            var other_data = $('#formulario__tipo__contrataciones').serializeArray();
    
            $.each(other_data,function(key,input){
                paqueteDeDatos.append(input.name,input.value);
            });
    
        
            paqueteDeDatos.append("idCatalogo",idCatalogo);
          
            
    
            let catalogo__elect=validacionRegistro__retornables($("#catalogo__elect"));
            paqueteDeDatos.append("catalogo__elect",catalogo__elect);
    
            let catalogo__subasta=validacionRegistro__retornables($("#catalogo__subasta"));
            paqueteDeDatos.append("catalogo__subasta",catalogo__subasta);
    
            let catalogo__infima=validacionRegistro__retornables($("#catalogo__infima"));
            paqueteDeDatos.append("catalogo__infima",catalogo__infima);
    
            let catalogo__menorCuantia=validacionRegistro__retornables($("#catalogo__menorCuantia"));
            paqueteDeDatos.append("catalogo__menorCuantia",catalogo__menorCuantia);
    
            let catalogo__cotizacion=validacionRegistro__retornables($("#catalogo__cotizacion"));
            paqueteDeDatos.append("catalogo__cotizacion",catalogo__cotizacion);
    
            let catalogo__licitacion=validacionRegistro__retornables($("#catalogo__licitacion"));
            paqueteDeDatos.append("catalogo__licitacion",catalogo__licitacion);
    
            let catalogo__menorCuantiaObras=validacionRegistro__retornables($("#catalogo__menorCuantiaObras"));
            paqueteDeDatos.append("catalogo__menorCuantiaObras",catalogo__menorCuantiaObras);
    
            let catalogo__cotizacionObras=validacionRegistro__retornables($("#catalogo__cotizacionObras"));
            paqueteDeDatos.append("catalogo__cotizacionObras",catalogo__cotizacionObras);
    
            let catalogo__licitacionObras=validacionRegistro__retornables($("#catalogo__licitacionObras"));
            paqueteDeDatos.append("catalogo__licitacionObras",catalogo__licitacionObras);
    
            let catalogo__precioObras=validacionRegistro__retornables($("#catalogo__precioObras"));
            paqueteDeDatos.append("catalogo__precioObras",catalogo__precioObras);
    
            let catalogo__contratacionDirecta=validacionRegistro__retornables($("#catalogo__contratacionDirecta"));
            paqueteDeDatos.append("catalogo__contratacionDirecta",catalogo__contratacionDirecta);
    
            let catalogo__contratacionListaCorta=validacionRegistro__retornables($("#catalogo__contratacionListaCorta"));
            paqueteDeDatos.append("catalogo__contratacionListaCorta",catalogo__contratacionListaCorta);
    
            let catalogo__contratacionConcursoPu=validacionRegistro__retornables($("#catalogo__contratacionConcursoPu"));
            paqueteDeDatos.append("catalogo__contratacionConcursoPu",catalogo__contratacionConcursoPu);
    
            let noAplica__3=validacionRegistro__retornables($("#noAplica__3"));
            paqueteDeDatos.append("noAplica__3",noAplica__3);

            

            if(catalogo__elect == "no"){
                $("#catalogo__elect__texto").val(" ");
                
            }else if(catalogo__subasta == "no"){
                $("#catalogo__subasta__texto").val(" ");
            }else if(catalogo__infima == "no"){
                $("#catalogo__infima__texto").val(" ");
            }else if(catalogo__menorCuantia == "no"){
                $("#catalogo__menorCuantia__texto").val(" ");
            }else if(catalogo__cotizacion == "no"){
                $("#catalogo__cotizacion__texto").val(" ");
            }else if(catalogo__licitacion == "no"){
                $("#catalogo__licitacion__texto").val(" ");
            }else if(catalogo__menorCuantiaObras == "no"){
                $("#catalogo__menorCuantiaObras__texto").val(" ");
            }else if(catalogo__cotizacionObras == "no"){
                $("#catalogo__cotizacionObras__texto").val(" ");
            }else if(catalogo__licitacionObras == "no"){
                $("#catalogo__licitacionObras__texto").val(" ");
            }else if(catalogo__precioObras == "no"){
                $("#catalogo__precioObras__texto").val(" ");
            }else if(catalogo__contratacionDirecta == "no"){
                $("#catalogo__contratacionDirecta__texto").val(" ");
            }else if(catalogo__contratacionListaCorta == "no"){
                $("#catalogo__contratacionListaCorta__texto").val(" ");
            }else if(catalogo__contratacionConcursoPu == "no"){
                $("#catalogo__contratacionConcursoPu__texto").val(" ");
            }


            let catalogo__elect__cantidad=$("#catalogo__elect__cantidad").val();
            let catalogo__elect__monto=$("#catalogo__elect__monto").val();
            let catalogo__subasta__cantidad=$("#catalogo__subasta__cantidad").val();
            let catalogo__subasta__monto=$("#catalogo__subasta__monto").val();
            let catalogo__infima__cantidad=$("#catalogo__infima__cantidad").val();
            let catalogo__infima__monto=$("#catalogo__infima__monto").val();
            let catalogo__menorCuantia__cantidad=$("#catalogo__menorCuantia__cantidad").val();
            let catalogo__menorCuantia__monto=$("#catalogo__menorCuantia__monto").val();
            let catalogo__cotizacion__cantidad=$("#catalogo__cotizacion__cantidad").val();
            let catalogo__cotizacion__monto=$("#catalogo__cotizacion__monto").val();
            let catalogo__licitacion__cantidad=$("#catalogo__licitacion__cantidad").val();
            let catalogo__licitacion__monto=$("#catalogo__licitacion__monto").val();
            let catalogo__menorCuantiaObras__cantidad=$("#catalogo__menorCuantiaObras__cantidad").val();

            let catalogo__menorCuantiaObras__monto=$("#catalogo__menorCuantiaObras__monto").val();
            let catalogo__cotizacionObras__cantidad=$("#catalogo__cotizacionObras__cantidad").val();
            let catalogo__cotizacionObras__monto=$("#catalogo__cotizacionObras__monto").val();
            let catalogo__licitacionObras__cantidad=$("#catalogo__licitacionObras__cantidad").val();
            let catalogo__licitacionObras__monto=$("#catalogo__licitacionObras__monto").val();
            let catalogo__precioObras__cantidad=$("#catalogo__precioObras__cantidad").val();
            let catalogo__precioObras__monto=$("#catalogo__precioObras__monto").val();
            let catalogo__contratacionDirecta__cantidad=$("#catalogo__contratacionDirecta__cantidad").val();
            let catalogo__contratacionDirecta__monto=$("#catalogo__contratacionDirecta__monto").val();
            let catalogo__contratacionListaCorta__cantidad=$("#catalogo__contratacionListaCorta__cantidad").val();
            let catalogo__contratacionListaCorta__monto=$("#catalogo__contratacionListaCorta__monto").val();
            let catalogo__contratacionConcursoPu__cantidad=$("#catalogo__contratacionConcursoPu__cantidad").val();
            let catalogo__contratacionConcursoPu__monto=$("#catalogo__contratacionConcursoPu__monto").val();

            let catalogo__elect__texto=$("#catalogo__elect__texto").val();
            let catalogo__subasta__texto=$("#catalogo__subasta__texto").val();
            let catalogo__infima__texto=$("#catalogo__infima__texto").val();
            let catalogo__menorCuantia__texto=$("#catalogo__menorCuantia__texto").val();
            let catalogo__cotizacion__texto=$("#catalogo__cotizacion__texto").val();
            let catalogo__licitacion__texto=$("#catalogo__licitacion__texto").val();
            let catalogo__menorCuantiaObras__texto=$("#catalogo__menorCuantiaObras__texto").val();
            let catalogo__cotizacionObras__texto=$("#catalogo__cotizacionObras__texto").val();
            let catalogo__licitacionObras__texto=$("#catalogo__licitacionObras__texto").val();
            let catalogo__precioObras__texto=$("#catalogo__precioObras__texto").val();
            let catalogo__contratacionDirecta__texto=$("#catalogo__contratacionDirecta__texto").val();
            let catalogo__contratacionListaCorta__texto=$("#catalogo__contratacionListaCorta__texto").val();
            let catalogo__contratacionConcursoPu__texto=$("#catalogo__contratacionConcursoPu__texto").val();

          
            paqueteDeDatos.append("catalogo__elect__cantidad",catalogo__elect__cantidad);
            paqueteDeDatos.append("catalogo__elect__monto",catalogo__elect__monto);
            paqueteDeDatos.append("catalogo__subasta__cantidad",catalogo__subasta__cantidad);
            paqueteDeDatos.append("catalogo__subasta__monto",catalogo__subasta__monto);
            paqueteDeDatos.append("catalogo__infima__cantidad",catalogo__infima__cantidad);
            paqueteDeDatos.append("catalogo__infima__monto",catalogo__infima__monto);
            paqueteDeDatos.append("catalogo__menorCuantia__cantidad",catalogo__menorCuantia__cantidad);
            paqueteDeDatos.append("catalogo__menorCuantia__monto",catalogo__menorCuantia__monto);
            paqueteDeDatos.append("catalogo__cotizacion__cantidad",catalogo__cotizacion__cantidad);
            paqueteDeDatos.append("catalogo__cotizacion__monto",catalogo__cotizacion__monto);
            paqueteDeDatos.append("catalogo__licitacion__cantidad",catalogo__licitacion__cantidad);
            paqueteDeDatos.append("catalogo__licitacion__monto",catalogo__licitacion__monto);
            paqueteDeDatos.append("catalogo__menorCuantiaObras__cantidad",catalogo__menorCuantiaObras__cantidad);
   
            paqueteDeDatos.append("catalogo__menorCuantiaObras__monto",catalogo__menorCuantiaObras__monto);
            paqueteDeDatos.append("catalogo__cotizacionObras__cantidad",catalogo__cotizacionObras__cantidad);
            paqueteDeDatos.append("catalogo__cotizacionObras__monto",catalogo__cotizacionObras__monto);
            paqueteDeDatos.append("catalogo__licitacionObras__cantidad",catalogo__licitacionObras__cantidad);
            paqueteDeDatos.append("catalogo__licitacionObras__monto",catalogo__licitacionObras__monto);
            paqueteDeDatos.append("catalogo__precioObras__cantidad",catalogo__precioObras__cantidad);
            paqueteDeDatos.append("catalogo__precioObras__monto",catalogo__precioObras__monto);
            paqueteDeDatos.append("catalogo__contratacionDirecta__cantidad",catalogo__contratacionDirecta__cantidad);
            paqueteDeDatos.append("catalogo__contratacionDirecta__monto",catalogo__contratacionDirecta__monto);
            paqueteDeDatos.append("catalogo__contratacionListaCorta__cantidad",catalogo__contratacionListaCorta__cantidad);
            paqueteDeDatos.append("catalogo__contratacionListaCorta__monto",catalogo__contratacionListaCorta__monto);
            paqueteDeDatos.append("catalogo__contratacionConcursoPu__cantidad",catalogo__contratacionConcursoPu__cantidad);
            paqueteDeDatos.append("catalogo__contratacionConcursoPu__monto",catalogo__contratacionConcursoPu__monto);

            paqueteDeDatos.append("catalogo__elect__texto",catalogo__elect__texto);
            paqueteDeDatos.append("catalogo__subasta__texto",catalogo__subasta__texto);
            paqueteDeDatos.append("catalogo__infima__texto",catalogo__infima__texto);
            paqueteDeDatos.append("catalogo__menorCuantia__texto",catalogo__menorCuantia__texto);
            paqueteDeDatos.append("catalogo__cotizacion__texto",catalogo__cotizacion__texto);
            paqueteDeDatos.append("catalogo__licitacion__texto",catalogo__licitacion__texto);
            paqueteDeDatos.append("catalogo__menorCuantiaObras__texto",catalogo__menorCuantiaObras__texto);
            paqueteDeDatos.append("catalogo__cotizacionObras__texto",catalogo__cotizacionObras__texto);
            paqueteDeDatos.append("catalogo__licitacionObras__texto",catalogo__licitacionObras__texto);
            paqueteDeDatos.append("catalogo__precioObras__texto",catalogo__precioObras__texto);
            paqueteDeDatos.append("catalogo__contratacionDirecta__texto",catalogo__contratacionDirecta__texto);
            paqueteDeDatos.append("catalogo__contratacionListaCorta__texto",catalogo__contratacionListaCorta__texto);
            paqueteDeDatos.append("catalogo__contratacionConcursoPu__texto",catalogo__contratacionConcursoPu__texto);

          
alert('sadsad')

    
            axios({
                method: "post",
                url: "modelosBd/POA_SEGUIMIENTO/actualizacion.md.php",
                data: paqueteDeDatos,
                headers: { "Content-Type": "multipart/form-data" },
            }).then((response) => {
                
                mensaje =response.data.mensaje;

                console.log(response.data)
    
                if (mensaje==1) {
    
                    alertify.set("notifier","position", "top-center");
                    alertify.notify("Registro realizado correctamente", "success", 3, function(){});
    
                }
    
            }).catch((error) => {
            
            });

    });

}



