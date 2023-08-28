$(document).ready(function () {

$.getScript("layout/scripts/js/modificacionRevisor/datatablets.js",function(){
	datatablets($("#reasignacionModificaciones"),"reasignacionModificaciones",1);
	datatablets($("#reasignacionModificaciones__recomendaciones"),"reasignacionModificaciones__recomendaciones",2);
	datatablets($("#reasignacionModificaciones__recomendaciones__planificacion"),"reasignacionModificaciones__recomendaciones__planificacion",3);
	datatablets($("#reasignacionModificaciones__recomendaciones__planificacion__recomendacion"),"reasignacionModificaciones__recomendaciones__planificacion__recomendacion",4);
	datatablets($("#reasignacionModificaciones__recomendaciones__planificacion__recomendacion__quipux"),"reasignacionModificaciones__recomendaciones__planificacion__recomendacion__quipux",5);
	datatablets__funcio__repor($("#reasignacionModificaciones__recomendaciones__planificacion__general__organismo__funcionario"),"reasignacionModificaciones__recomendaciones__planificacion__general__organismo__funcionario",1);

	datatablets__organismo($("#reasignacionModificaciones__recomendaciones__planificacion__general__organismo"),"reasignacionModificaciones__recomendaciones__planificacion__general__organismo",1);

	datatablets($("#reasignacionModificaciones__infra"),"reasignacionModificaciones__infra",1);
	datatablets($("#reasignacionModificaciones__subsess"),"reasignacionModificaciones__subsess",1);

	datatablets($("#reasignacionModificaciones__recomendaciones__infra"),"reasignacionModificaciones__recomendaciones__infra",2);
	datatablets($("#reasignacionModificaciones__recomendaciones__subsess"),"reasignacionModificaciones__recomendaciones__subsess",2);


});

$.getScript("layout/scripts/js/modificacionRevisor/insertar.js",function(){
	asignar__lineas__modificaciones($("#enviarModificacionesC"),"formularioConfiguracion");
	recomendar__analista__lineas__modificaciones($("#enviarModificacionesArecomienda"),"formularioConfiguracion");
	recomendar__lineas__modificaciones($("#enviarModificacionesCRecomienda"),"formularioConfiguracion");
	recomendar__lineas__modificaciones__planificacion($("#enviarModificacionesPlanificacionC"),"formularioConfiguracion");
	recomendar__lineas__modificaciones__planificacion__analistas($("#enviarModificacionesArecomiendaPLanificacionRecomienda"),"formularioConfiguracion");
	no__corresponde__tramites($("#noCorresponde"),"formularioConfiguracion");
	recomendar__lineas__modificaciones__planificacion__quipux($("#enviarRecomendacionConQuipux"),"formularioConfiguracion");
});  



});
