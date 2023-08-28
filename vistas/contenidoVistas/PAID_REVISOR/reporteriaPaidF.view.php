
<?php $componentes= new componentes();?>

<?php $componentesPaid= new componentesPaid();?>


<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<?=$componentes->getComponentes(1,"REPORTERÍA PAID");?>

		<input type="hidden" id="idOrganismo__principalAsgnacion" />

		<div class="row">

		<table id="organismoSubses__paid__recomiendas__final__reporteria" class="col col-12 cell-border">

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


<?=$componentesPaid->modalReenvioPaid__recomiendas__final__recomiendas("modalReenvioPaid__recomiendas__final__recomiendas","formReenvio__paid__recomiendas__reporterias__evidencias");?>


<?=$componentes->modalReenvioPaid__datatablets__inicial("matrizPaidModales__revisor","form__paid__general","paidGeneral__revisor",["Programa","Proyecto","Componentes","Rubros","Monto rubro","Ítem","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","Valor Total"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("indicadoresPaidModales","form__paid__indicadores","paidIndicadores__revisor",["Programa","Indicadores","Componentes","Beneficiarios","Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio","Agosto","Septiembre","Octubre","Noviembre","Diciembre","Valor Total"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("eventosPaidModales","form__paid__eventosM","paidEventos__revisor",["Actividad deportiva","Deporte","Modalidad","Evento","Prueba","Categoría","Fecha inicio","Fecha fin","Sede","N. Oficina","N. Atletas","N.Días","N.Pax","Valor total","Observaciones"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("interdisiplinarioModal","form__interdiciplinarios__eventosM","paidInterdiciplinarios__revisor",["Cédula","Modalidad","Sexo","Cargo","Nombres","Apellidos","Fecha inicio","Fecha fin","Valor","N. Meses","Valor total","Sector"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("necesidadesIndividualesModal","form__individuales__eventosM","paidIndividuales__revisor",["Modalidad","Nombres","Apellidos","Artículo","Cantidad","Valor unitario","Valor Total","Sector"]);?>


<?=$componentes->modalReenvioPaid__datatablets__inicial("necesidadesGeneralesModal","form__necesidadesGenerales__eventosM","paidNecesidadesGenerales__revisor",["Modalidad","Articulo","Cantidad","Valor unitario","Valor total"]);?>

<?=$componentes->modalReenvioPaid__datatablets__inicial("ecuentroActivoModal","form__ecnuentro__eventosM","paidEncuentroAc__revisor",["Nombre","Sede","Institución","Fecha inicio","Fecha fin","Deporte","Categoría","Mujeres","Hombres","Entrenadores","Valor total","Observaciones"]);?>


<script>
	    
$.getScript("layout/scripts/js/PAID_REVISOR_JS/datatablets.js",function(){

	datatabletsPaidRevisor($("#organismoSubses__paid__recomiendas__final__reporteria"),"organismoSubses__paid__recomiendas__final__reporteria",[$("#idUsuarioC").val(),$("#idRolAd").val(),$("#fisicamenteE").val()],objetos([8],["boton"],["<center><button class='reasignarTramites__paid__recomiendas__repor__final estilo__botonDatatablets btn btn-info pointer__botones' data-toggle='modal' data-target='#modalReenvioPaid__recomiendas__final__recomiendas'><i class='fas fa-user-edit'></i></button><center>"],[false],[false]),1,["funrion__reasignar__paid__recomiendas__repoteria__recomiendas"],[false],[false],false);

   });

</script>