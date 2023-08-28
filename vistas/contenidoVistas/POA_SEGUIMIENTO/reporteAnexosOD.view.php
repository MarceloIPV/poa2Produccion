<?php $objetoInformacion= new usuarioAcciones();?>

<?php $componentes= new componentes();?>

<?php $componentesTablas= new componentesTablas();?>


<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		

		<div class="mt-4">

			<table id="seguimiento__reportes__anexosOD" class="col col-12 cell-border">

				<thead>

					<tr>

						<th><center>RUC</center></th>
						<th><center>ORGANIZACIÓN DEPORTIVA</center></th>
						<th><center>I TRIMESTRE</center></th>
						<th><center>REPORTES EMITIDOS</center></th>
						<th><center>II TRIMESTRE</center></th>
						<th><center>REPORTES EMITIDOS</center></th>
						<th><center>III TRIMESTRE</center></th>
						<th><center>REPORES EMITIDOS</center></th>
						<th><center>IV TRIMESTRE</center></th>
						<th><center>REPORES EMITIDOS</center></th>
						<th><center>AÑO</center></th>

					</tr>

				</thead>

			</table>

		</div>

	</section>

</div>

<!--=============================
=            Modales            =
==============================-->

<?=$componentesTablas->get__modal__plantilla__inicios__se__2guimientos__se__2guimientos__d__recomendados__reporterias__recorridos__reportesAnexos__se__2s("reasignarSeguimientos__recorridos__anexosRes","SECCIÓN DE REPORTES ANEXOS","principal__recorridos__bodys__reportesAnexos__Res");?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("autogestion__se__2","Autogestión","seguimiento__autogestiones__2",["Detalle autogestión","Monto autogestión","Detalle de reinversión en el reporte educación física y/o recreación","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("indicadores__se__2","Indicadores","seguimiento__indicadores__2",["Actividad","Total programado","Total ejecutado","Trimestre","Año","Documento"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("administrativo__se__2","001 - Operación y funcionamiento de organizaciones deportivas y escenarios deportivos - Ejecución Presupuestaria","seguimiento__administrativas__2",["Ítem","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("mantenimiento__se__2","002 - Mantenimiento de escenarios e infraestructura deportiva - Ejecución presupuestaria","seguimiento__mantenimientos__2",["Ítem","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("mantenimientoTec__se__2","002 - Mantenimiento de escenarios e infraestructura deportiva - Información técnica","seguimiento__mantenimientosTec__2",["Ítem","Planificado inicial","Ejecutado inicial","Planificado final","Ejecutado final","Observaciones","Porcentaje","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("capacitacion__se__2","003 - Capacitación deportiva o de recreación - Ejecución presupuestaria","seguimiento__capacitacion__2",["Ítem","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("capacitacionTec__se__2","003 - Capacitación deportiva o de recreación - Información técnica","seguimiento__capacitacionTecni__2",["Ítem","Planificación inicial","Ejecución inicial","Planificación final","Ejecución final","Observaciones Técnicas","Porcentaje","Beneficiarios Hombres","Beneficiarios mujeres","Total","Tipo organización","Ruc","Nombre organismo","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("sueldos__se__2","004 - Operación deportiva - Sueldos y salarios","seguimiento__sueldos__salarios__2",['Actividad',"Cédula","Nombre","Sueldo planificado","Sueldo ejecutado","Aporte Iess planificado","Aporte Iess ejectuado","Décimo tercero planificado","Décimo tercero ejecutado","Décimo cuarto planificado","Décimo cuarto ejecutado","Fondos de reserva planificado","Fondos de reserva ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("honorarios__se__2","004 - Operación deportiva - Honorarios","seguimiento__honorarios__2",["Actividad","Cédula","Nombres","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("competencia__se__2","005 - Eventos de preparación y competencia - Ejecución presupuestaria","seguimiento__competencia__2",["Ítem","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("competenciaForma__se__2","005 - Eventos de preparación y competencia - Deporte Formativo - Información técnica","seguimiento__competenciaFor__2",["Ítem","Evento","Oro","Plata","Bronce","Total","C/O","Analisis","Observaciones Técnicas","Porcentaje","Benefeiciarios hombres","Beneficiarios mujeres","Total beneficiarios","Tipo organización","Ruc","Nombre organismo","Fecha","Fecha","Fecha","Fecha 4","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("competenciaAlto__se__2","005 - Eventos de preparación y competencia - Alto Rendimiento - Información técnica","seguimiento__competenciaAlto__2",["Ítem","Evento","Oro","Plata","Bronce","Total","C/O","Analisis","Observaciones Técnicas","Porcentaje","Benefeiciarios hombres","Beneficiarios mujeres","Total beneficiarios","Tipo organización","Ruc","Nombre organismo","Fecha","Fecha","Fecha","Fecha 4","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("recreativo__se__2","006 - Actividades recreativas - Ejecución presupuestaria","seguimiento__recreativo__2",["Ítem","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("recreativoTec__se__2","006 - Actividades recreativas - Información técnica","seguimiento__recreativoTec__2",["Ítem","Observaciones","Porcentaje","Beneficiarios hombres","Beneficiarios mujeres","Total","Fecha inicio planificacdo","Fecha inicio ejecutado","Fecha fin planificado","Fecha fin ejecutado","Tipo evento","Evento tarea","Nivel","Total","Tipo organización","Nombre organismo","Trimestre","Año"]);?>

<?=$componentesTablas->getModalConfiguracion__reporteria__organismos__seguimientos2("implementacion__se__2","007 - implementación deportiva  - Ejecución presupuestaria e Información Técnica","seguimiento__implementacion__2",["Ítem","Mensual programado","Mensual ejecutado","Mes","Trimestre","Año"]);?>


<!--====  End of Modales  ====-->


<script>

$.getScript("layout/scripts/js/POA_SEGUIMIENTO_JS/datatables2.js",function(){

datatabletsSeguimientoVacio($("#seguimiento__reportes__anexosOD"), "seguimiento__reportes__anexosOD","Reporte_y_Anexos",objetos([2,3,4,5,6,7,8,9,10],["boton","texto__separadores__2","boton","texto__separadores__2","boton","texto__separadores__2","boton","texto__separadores__2","texto"],["<center><button class='reasignar__seguimientos__recorridos__boton__anexos__reportes estilo__botonDatatablets btn btn-info pointer__botones' idTrimestres='1' data-toggle='modal' data-target='#reasignarSeguimientos__recorridos__anexosRes'><i class='fas fa-user-edit'></i></button><center>",2,"<center><button class='reasignar__seguimientos__recorridos__boton__anexos__reportes estilo__botonDatatablets btn btn-warning pointer__botones' idTrimestres='2'  data-toggle='modal' data-target='#reasignarSeguimientos__recorridos__anexosRes'><i class='fas fa-user-edit'></i></button><center>",3,"<center><button class='reasignar__seguimientos__recorridos__boton__anexos__reportes estilo__botonDatatablets btn btn-info pointer__botones' idTrimestres='3'  data-toggle='modal' data-target='#reasignarSeguimientos__recorridos__anexosRes'><i class='fas fa-user-edit'></i></button><center>",4,"<center><button class='reasignar__seguimientos__recorridos__boton__anexos__reportes estilo__botonDatatablets btn btn-warning pointer__botones' idTrimestres='4'  data-toggle='modal' data-target='#reasignarSeguimientos__recorridos__anexosRes'><i class='fas fa-user-edit'></i></button><center>",5,8],[false],[false],6),"");

});
</script>