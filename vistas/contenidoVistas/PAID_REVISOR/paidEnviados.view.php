
<?php $componentes= new componentes();?>

<?php $componentesPaid= new componentesPaid();?>


<div class="content-wrapper">

	<input type="hidden" id="idOrganismo__principalAsgnacion" />

	<section class="content row d d-flex justify-content-center">

		<?=$componentes->getComponentes(1,"ASIGNACIÓN DE PRESUPUESTO");?>

		<div class="row">

		<table id="organismoSubses__paid" class="col col-12 cell-border">

			<thead>

				<tr>

					<th><center>Ruc</center></th>
					<th><center>Organismo deportivo</center></th>
					<th><center>Email</center></th>
					<th><center>Teléfonos</center></th>
					<th><center>Tipo organismo</center></th>
					<th><center>Representante</center></th>
					<th><center>Fecha<br>envío PAID</center></th>
					<th><center>Provincia</center></th>
					<th><center>Reasignar</center></th>
				</tr>

			</thead>

		</table>

		</div>

	</section>

</div>


<?=$componentesPaid->modalReenvioPaid("modalReenvioPaid","formReenvio__paid");?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("matrizPaidModales__revisor","form__paid__general","paidGeneral__revisor",["Componente","Indicador","Rubro","ID Item Presupuestario","Nombre Item","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","Valor Total"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("indicadoresPaidModales","form__paid__indicadores","paidIndicadores__revisor",["Indicadores","Primer Trimestre","Segundo Trimestre","Tercer Trimestre","Cuarto Trimestre","Valor Total"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("eventosPaidModales","form__paid__eventosM","paidEventos__revisor",["Actividad Deportiva","Deporte","Modalidad","Evento","Prueba","Categoría","Fecha inicio","Fecha fin","Pais","Sede Ciudad","N. Atletas","N. Oficina","N.Días","N.Pax","Valor total","Observaciones"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("interdisiplinarioModal","form__interdiciplinarios__eventosM","paidInterdiciplinarios__revisor",["Cédula","Modalidad","Sexo","Cargo","Nombres","Apellidos","Fecha inicio","Fecha fin","Valor Mes Acordado Atl.","N. Meses","Valor total","Sector"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("necesidadesIndividualesModal","form__individuales__eventosM","paidIndividuales__revisor",["Modalidad","Nombres","Apellidos","Artículo","Cantidad","Valor unitario","Valor Total","Sector"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("necesidadesGeneralesModal","form__necesidadesGenerales__eventosM","paidNecesidadesGenerales__revisor",["Modalidad","Articulo","Cantidad","Valor unitario","Valor total","Sector"]);?>


<?=$componentes->modalReenvioPaid__datatablets__inicial("ecuentroActivoModal","form__ecnuentro__eventosM","paidEncuentroAc__revisor",["Nombre","Sede","Institución","Fecha inicio","Fecha fin","Deporte","Categoría","Mujeres","Hombres","Entrenadores","Valor total","Observaciones"]);?>

<script>


	    
$.getScript("layout/scripts/js/PAID_REVISOR_JS/datatablets.js",function(){

    datatabletsPaidRevisor($("#organismoSubses__paid"),"organismoSubses__paid",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([8],["boton"],["<center><button class='reasignarTramites__paid estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#modalReenvioPaid'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funrion__reasignar__paid"],[false],[false],false);
});

</script>