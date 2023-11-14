$(document).ready(function () {

    $("#divTablaAdaptado").hide();
    
    $.getScript("layout/scripts/js/validacionesGenerales.js",function(){

        sumarNumeross(".sumar_obra_fiscalizacion","#totalValores");

    });




    $.getScript("layout/scripts/js/PAID_INFRAESTRUCTURA/datatables.js",function(){

        

    });




    $.getScript("layout/scripts/js/PAID_INFRAESTRUCTURA/inserciones.js",function(){

        guardar_archivos_infraestructura("#guardarPlanos","#planosInput","Obra")
        guardar_archivos_infraestructura("#guardarEspecificacionTecnica","#especificacionTecnicaInput","Obra")
        guardar_archivos_infraestructura("#guardarPresupuestoReferencial","#presupuestoReferencialInput","Obra")
        guardar_archivos_infraestructura("#guardarAnalisisPrecios","#analisisPreciosInput","Obra")
        guardar_archivos_infraestructura("#guardarCronogramaValorado","#cronogramaValoradoInput","Obra")
        guardar_archivos_infraestructura("#guardarCalculoVolumenes","#calculoVolumenesInput","Obra")

        guardar_archivos_infraestructura("#guardarcertificadoNoTecnicos","#certificadoNoTecnicosInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardardeclaracionRevisionValidacion","#declaracionRevisionValidacionInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardardeclaracionAutorizacionIntervencion","#declaracionAutorizacionIntervencionInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardarestudioMercado","#estudioMercadoInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardarcopiaPredio","#copiaPredioInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardaracuerdoMinisterial","#acuerdoMinisterialInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardaregistroDirectorio","#registroDirectorioInput","Fiscaliacion")
        guardar_archivos_infraestructura("#guardarresolucionIntervencion","#resolucionIntervencionInput","Fiscaliacion")

        guardar_informe_Obra_infraestructura("#guardarArchivo__InfraObra","#archivoSubido__InfraObra",$("#paidInformeObraInfraestructura"))
        guardar_informe_fiscalizacion_infraestructura("#guardarArchivo__InfraFiscalizacion","#archivoSubido__InfraFiscalizacion",$("#paidInformeFiscalizacionInfraestructura"))
    });


    
    $.getScript("layout/scripts/js/PAID_INFRAESTRUCTURA/eliminaciones.js",function(){
        funcion__eliminar_tabla_informes_paid_infraestructura("#paidInformeObraInfraestructura tbody","eliminarInformeObraInfra",$("#paidInformeObraInfraestructura"),"eliminarTipoInfraestructura")
        
        funcion__eliminar_tabla_informes_paid_infraestructura("#paidInformeFiscalizacionInfraestructura tbody","eliminarInformeObraInfra",$("#paidInformeFiscalizacionInfraestructura"),"eliminarTipoInfraestructura")
       
    });



    $.getScript("layout/scripts/js/PAID_INFRAESTRUCTURA/actualizaciones.js",function(){

    });


   $.getScript("layout/scripts/js/PAID_INFRAESTRUCTURA/selector.js",function(){

    agregarInformacion_Informes_PAID_Infraestructura($("#btnNuevoInformeObraInfra"));
    
        
    tablaPrincipalInfraestructura("paid_general",$("#identificador").val()); 

    });



    $.getScript("layout/scripts/js/PAID_INFRAESTRUCTURA/metodos.js",function(){

        tipo__ubicaciones2023($("#selector__paises"),1037)
        tipo__ubicaciones2023($("#provincia__Datos"),1038)
        tipo__ubicaciones2023($("#canton__Datos"),1039)
        tipo__ubicaciones2023($("#parroquia__Datos"),1040)

        agregar__beneficiarios__paid__infraestructura($("#agregar__beneficiarios"),$(".cuerpo__indicadores__altos"));
        agregar__beneficiariosAdaptado__paid__infraestructura($("#agregar__beneficiariosAdaptado"),$(".cuerpo__beneficiarios__adaptado"));
        comprobar__checkbox__adaptado($("#registroDeporteAdaptadoPaid"),$(".divTablaAdaptado"));
        agregar__beneficiariosIndirectos__paid__infraestructura($("#agregar__beneficiariosIndirectos"),$(".cuerpo__beneficiarios__indirectos"));
        validacionCamposObligatoriosFormulario('.formularioInformeObraInfra');

        controlArchivosInfra("#planosInput");
        controlArchivosInfra("#especificacionTecnicaInput");
        controlArchivosInfra("#presupuestoReferencialInput");
        controlArchivosInfra("#analisisPreciosInput");
        controlArchivosInfra("#cronogramaValoradoInput");
        controlArchivosInfra("#calculoVolumenesInput");

        controlArchivosInfra("#certificadoNoTecnicosInput");
        controlArchivosInfra("#declaracionRevisionValidacionInput");
        controlArchivosInfra("#declaracionAutorizacionIntervencionInput");
        controlArchivosInfra("#estudioMercadoInput");
        controlArchivosInfra("#copiaPredioInput");
        controlArchivosInfra("#acuerdoMinisterialInput");
        controlArchivosInfra("#registroDirectorioInput");
        controlArchivosInfra("#resolucionIntervencionInput");

    });
    
   
   


    

  
    
      

});


