<?php $objetoInformacion= new usuarioAcciones();?>

<?php $componentes= new componentes();?>

<?php $componentesTablas= new componentesTablas();?>


<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<table id="seguimiento__tablas__fisica__rendimientos__recomendados" class="col col-12 cell-border">

			<thead>

				<tr>

					<th><center>RUC</center></th>
					<th><center>ORGANIZACIÓN DEPORTIVA </center></th>
					<th><center>TRIMESTRE</center></th>
					<th><center>TIPO</center></th>
					<th><center>REVISAR</center></th>

				</tr>

			</thead>

		</table>

	</section>

</div>


<!--=============================
=            Modales            =
==============================-->

<?=$componentesTablas->get__modal__plantilla__inicios__seguimientos__fisicicos__f__r__recomendados("reasignarSeguimientos__altosRecomendados","SECCIÓN DE REPORTERÍA","principal__seguimiento__reportes__altos__recomendados");?>

<!--====  End of Modales  ====-->
