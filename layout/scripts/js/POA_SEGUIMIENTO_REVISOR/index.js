$(document).ready(function () {

    $("#cerrarReporteTransferencias").hide()
    $("#verTablaBancos").hide()
    $("#divReporteTransferencias").hide()
    $("#divTablaTransferencias").hide()
    $("#divTablaBancos").hide()
    
    $.getScript("layout/scripts/js/validacionBasica.js",function(){



    });




    $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/datatables.js",function(){
        
    });




    $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/inserciones.js",function(){
        guardar_archivos_trasferencias("#guardarBancos","#archivoBancoCSV","Bancos");
        guardar_archivos_trasferencias("#guardarTransferencias","#archivoTransferenciaCSV","Transferencias");
        informacion__seguimiento__recomendadas_Contratacion_Publica($("#recomendarcontratacionPublica"));	
        informacion__analistas__reasignar__regresar__alto__recomendar__recomendados_Contratacion_Publica($("#recomendar__Contratacion__recomendados"));	
        
    });


    
    $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/eliminaciones.js",function(){
        
        
    });



    $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/actualizaciones.js",function(){
        informacion__analistas__reasignar__regresar__Contratacion__Publica__regresar__recomendados($("#devolver__altosReComendadosContratacion"));
        
        informacion__analistas__reasignar__regresar__Contratacion_Publica($("#regresarSeguimientos__a__contratacionPublica"));
        informacion__analistas__reasignar__Contratacion_Publica($("#reasignarSeguimientos__a__contratacionPublica"));

        informacion__analistas__reasignar__regresar__alto2023($("#regresarSeguimientos__a__actividad__fisicas2023"));	
        informacion__analistas__reasignar__altos2023($("#reasignarSeguimientos__a__actividad__fisicas2023"));

        informacion__analistas__reasignar__altos__infra__in2023($("#reasignarSeguimientos__a__actividad__fisicas__in2023"));	
		informacion__analistas__reasignar__altos__infra__in__regresa2023($("#regresarSeguimientos__a__actividad__fisicas__in2023"));
        
    });


   $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/selector.js",function(){

    superioresSelectsContratacionPublica($("#selects__superiores1"));

    agregarDatatablets__competencia__seguimientos2023($("#competencia__in__2"),$(".seguimiento__competencia__2"),"seguimiento__competencia__2"); 

    agregarDatatablets__competencia__altos__formativos2023($("#competenciaFormativa__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2"); 

    agregarDatatablets__indicadores2023($("#indicadores__in__2"),$(".seguimiento__indicadores__2"),"seguimiento__indicadores__2","","SAD"); 

    agregarDatatablets__implementacion__seguimientos2023($("#implementacion__in__2"),$(".seguimiento__implementacion__2"),"seguimiento__implementacion__2","","Implementacion"); 
   
    
	agregarDatatablets__competencia__altos2023($("#competenciaAlto__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2","","Alto Rendimiento"); 

    agregarDatatablets__sueldos__salarios2023($("#sueldos__in__2"),$(".seguimiento__sueldos__salarios__2"),"seguimiento__sueldos__salarios__2","","Sueldos y Salarios"); 

    agregarDatatablets__honorarios__seguimientos2023($("#honorarios__in__2"),$(".seguimiento__honorarios__2"),"seguimiento__honorarios__2","","Honorarios"); 

    agregarDatatablets__administrativos__seguimientos2023($("#administrativo__in__2"),$(".seguimiento__administrativas__2"),"seguimiento__administrativas__2","","001 - OPERACIÓN Y FUNCIONAMIENTO DE ORGANIZACIONES DEPORTIVAS Y ESCENARIOS DEPORTIVOS - EJECUCIÓN PRESUPUESTARIA"); 
	
	agregarDatatablets__mantenimiento__seguimientos2023($("#mantenimiento__in__2"),$(".seguimiento__mantenimientos__2"),"seguimiento__mantenimientos__2","","Mantenimiento"); 

    
	agregarDatatablets__capacitacion__seguimientos2023($("#capacitacion__in__2"),$(".seguimiento__capacitacion__2"),"seguimiento__capacitacion__2","","Capacitación"); 

    agregarDatatablets__recreativo__seguimientos2023($("#recreativo__in__2"),$(".seguimiento__recreativo__2"),"seguimiento__recreativo__2","","Recreativo"); 

    agregarDatatablets($("#autogestionPoas__in__2"),$(".seguimiento__autogestiones__2"),"seguimiento__autogestiones__2","","","asdad"); 
    agregarDatatablets($("#mantenimientoTec__in__2"),$(".seguimiento__mantenimientosTec__2"),"seguimiento__mantenimientosTec__2","","","asdad"); 	
    agregarDatatablets($("#capacitacionTec__in__2"),$(".seguimiento__capacitacionTecni__2"),"seguimiento__capacitacionTecni__2","","","asdad");

    agregarDatatablets($("#competenciaFormativa__in__2"),$(".seguimiento__competenciaFor__2"),"seguimiento__competenciaFor__2","","","asdad"); 

    agregarDatatablets($("#competenciaAlto__in__2"),$(".seguimiento__competenciaAlto__2"),"seguimiento__competenciaAlto__2","","","asdad"); 

    agregarDatatablets($("#recreativoTec__in__2"),$(".seguimiento__recreativoTec__2"),"seguimiento__recreativoTec__2","","","asdad"); 

    seleccionTabsRecorrido("#general-tab","#idOrganismo","#periodo")
    seleccionTabsRecorrido("#seguimiento-tab","#idOrganismo","#periodo")
    seleccionTabsRecorrido("#adFin-tab","#idOrganismo","#periodo")
    seleccionTabsRecorrido("#actFis-tab","#idOrganismo","#periodo")
    seleccionTabsRecorrido("#altoRen-tab","#idOrganismo","#periodo")
    seleccionTabsRecorrido("#infra-tab","#idOrganismo","#periodo")
    

  

    });



    $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/metodos.js",function(){

        cerrarModalReporteriaAnualRevisor("#btnCerrarReporteriaAnualRevisor");
        cerrartablaSeguimientoModal("#cerrarRecorridoSeguimeintoModal",".cuerpo__contenedor__recorridos","#reasignarSeguimientos__recorridos");
        
        agregarDatatabletsRefrescar($("#btn_documentacion__Generada__cp"),"dt_seguimiento__documentacionGenerada_cp_Revisor","Uso_Correcto_Contratacion_Publica",objetos([2],["enlace"],['documentoCP'],[$("#filesFrontend").val()+"declaracionTerminos/"],["documentoCP"]),"#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#autogestionPoas__in"),"seguimiento__autogestionesRevisor","Autogestion","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#documentacionGenerada__in"),"seguimiento__UsoCorrectoRecursosRevisor","Uso_Correcto_Recursos",objetos([2],["enlace"],['documento'],[$("#filesFrontend").val()+"seguimiento/declaracion_contratacion_publica/"],["documento"]),"#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#documentacionGenerada__in__final"),"seguimiento__reporte__trimestralRevisor","Reporte_Trimestral",objetos([2],["enlace"],['documentoSIF'],[$("#filesFrontend").val()+"final__seguimiento/"],["documentoSIF"]),"#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#administrativo__in"),"seguimiento__administrativasRevisor","001 - Operación y funcionamiento de organizaciones deportivas y escenarios deportivos - Ejecución Presupuestaria","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#indicadores__in"),"seguimiento__indicadoresRevisor","Indicadores","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#recreativo__in"),"seguimiento__recreativoRevisorPres","006 - Actividades recreativas - Ejecución presupuestaria","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#recreativoTec__in"),"seguimiento__recreativoTecRevisor","006 - Actividades recreativas - Información técnica","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#sueldos__in"),"seguimiento__sueldos__salariosRevisor","004 - Operación deportiva - Sueldos y salarios","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#honorarios__in"),"seguimiento__honorariosRevisor","004 - Operación deportiva - Honorarios","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#mantenimiento__in"),"seguimiento__mantenimientosPresRevisor","002 - Mantenimiento de escenarios e infraestructura deportiva - Ejecución presupuestaria","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#mantenimientoTec__in"),"seguimiento__mantenimientosTecRevisor","002 - Mantenimiento de escenarios e infraestructura deportiva - Información técnica","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#competencia__in"),"seguimiento__competenciaPresRevisor","005 - Eventos de preparación y competencia - Ejecución presupuestaria","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#competenciaFormativa__in"),"seguimiento__competenciaForRevisor","005 - Eventos de preparación y competencia - Deporte Formativo - Información técnica","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#implementacion__in"),"seguimiento__implementacionRevisor","007 - implementación deportiva  - Ejecución presupuestaria e Información Técnica","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#competenciaAlto__in"),"seguimiento__competenciaAltoRevisor","005 - Eventos de preparación y competencia - Alto Rendimiento - Información técnica","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#capacitacionTec__in"),"seguimiento__capacitacionTecniRevisor","003 - Capacitación deportiva o de recreación - Información técnica","","#idOrganismoReporteriaAnual");
        agregarDatatabletsRefrescar($("#capacitacion__in"),"seguimiento__capacitacionPresRevisor","003 - Capacitación deportiva o de recreación - Ejecución presupuestaria","","#idOrganismoReporteriaAnual");     

        agregarDatatabletsRefrescar($("#verReporteTransferencias"),"tabla_transferencias","RESUMEN TRANSFERENCIAS","","#idOrganismoReporteriaAnual");     
        agregarDatatabletsRefrescar($("#verReporteTransferencias"),"tabla_bancos","RESUMEN BANCOS","","#idOrganismoReporteriaAnual");     

        
        actualizaDatabletPorIDBoton($("#verTablaTransferencias"),"#tabla_transferencias")
        actualizaDatabletPorIDBoton($("#verTablaBancos"),"#tabla_bancos")
        actualizaDatabletPorIDBoton($("#cerrarReporteTransferencias"),"#tabla_transferencias")
        actualizaDatabletPorIDBoton($("#cerrarReporteTransferencias"),"#tabla_bancos")

        cerrarModalDatatable($("#cerrarReporteTransferencias"),"#tabla_bancos")
        cerrarModalDatatable($("#cerrarReporteTransferencias"),"#tabla_transferencias")

    
        cerrarModalDatatable($("#btnCerrarCP"),"#dt_seguimiento__documentacionGenerada_cp_Revisor")
        cerrarModalDatatable($("#btnCerrarAutogestiones"),"#seguimiento__autogestionesRevisor")
        cerrarModalDatatable($("#btnCerrarUsoRecursosPublicos"),"#seguimiento__UsoCorrectoRecursosRevisor")
        cerrarModalDatatable($("#btnCerrarReporteTrimestral"),"#seguimiento__reporte__trimestralRevisor")
        cerrarModalDatatable($("#btnCerrarAdministrativo"),"#seguimiento__administrativasRevisor")
        cerrarModalDatatable($("#btnCerrarIndicadores"),"#seguimiento__indicadoresRevisor")
        cerrarModalDatatable($("#btnCerrarRecreativoPres"),"#seguimiento__recreativoRevisorPres")
        cerrarModalDatatable($("#btnCerrarRecreativoTec"),"#seguimiento__recreativoTecRevisor")
        cerrarModalDatatable($("#btnCerrarSueldoSalarios"),"#seguimiento__sueldos__salariosRevisor")
        cerrarModalDatatable($("#btnCerrarHonorarios"),"#seguimiento__honorariosRevisor")
        cerrarModalDatatable($("#btnCerrarMantenimientoPresRevisor"),"#seguimiento__mantenimientosPresRevisor")
        cerrarModalDatatable($("#btnCerrarMantenimientoTecRevisor"),"#seguimiento__mantenimientosTecRevisor")
        cerrarModalDatatable($("#btnCerrarCompetenciaPresRevisor"),"#seguimiento__competenciaPresRevisor")
        cerrarModalDatatable($("#btnCerrarCompetenciaForRevisor"),"#seguimiento__competenciaForRevisor")
        cerrarModalDatatable($("#btnCerrarImplementacionRevisor"),"#seguimiento__implementacionRevisor")
        cerrarModalDatatable($("#btnCerrarCompetenciaAltRevisor"),"#seguimiento__competenciaAltoRevisor")
        cerrarModalDatatable($("#btnCerrarcapacitacionTecRevisor"),"#seguimiento__capacitacionTecniRevisor")
        cerrarModalDatatable($("#btnCerrarcapacitacionPresRevisor"),"#seguimiento__capacitacionPresRevisor")

        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__competencia__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__sueldos__salarios__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__indicadores__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__implementacion__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__honorarios__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__administrativas__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__mantenimientos__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__capacitacion__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__recreativo__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__autogestiones__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__mantenimientosTec__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__capacitacionTecni__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__competenciaFor__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__competenciaAlto__2")
        cerrarModalDatatable($(".cerrar__modalRegistros"),"#seguimiento__recreativoTec__2")

        deshabilitarUnCheck("#seguimiento__tables","#seguimiento__tables_Contratacion_Publica");
        
        subirArchivos("#seleccionarArchivoTransferencia","archivoTransferenciaCSV","#satCSV");
        subirArchivos("#seleccionarArchivoBancos","archivoBancoCSV","#sabCSV");
		

        regresarEstadoOriginalSubirArchivo("#btnCerrarSubirTransferencias",".drop_boxSubirArchivoTransferenciasCSV" ,"#satCSV");
        regresarEstadoOriginalSubirArchivo("#btnCerrarSubirBancos",".drop_boxSubirArchivoBancosCSV" ,"#sabCSV");
       
        ocultarBtnyDivDesarrollo($("#verReporteTransferencias"),$("#cerrarReporteTransferencias"),$("#divSubirTransferencias"),$("#divReporteTransferencias"))
        ocultarBtnyDivDesarrollo($("#cerrarReporteTransferencias"),$("#verReporteTransferencias"),$("#divReporteTransferencias"),$("#divSubirTransferencias"))
       
        ocultarBtnyDivDesarrollo($("#verTablaTransferencias"),$("#verTablaBancos"),$("#divTablaTransferencias"),$("#divTablaBancos"))
        ocultarBtnyDivDesarrollo($("#verTablaBancos"),$("#verTablaTransferencias"),$("#divTablaBancos"),$("#divTablaTransferencias"))

        buscarFiltradoDataTable("#selectMesInicio","#selectMesFin",$("#tablaResumenTransferencias"));
 
    });

    

  
    
      

});


