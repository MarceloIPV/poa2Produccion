<?php $objetoInformacion= new usuarioAcciones();?>

<?php $componentes= new componentes();?>

<?php $componentesTablas= new componentesTablas();?>


<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<table id="seguimiento__tablas__alto__rendimientos__recomendados" class="col col-12 cell-border">

			<thead>

				<tr>
					<!-- <th><center>JURISDICCIÓN</center></th> -->
					<th><center>RUC</center></th>
					<th><center>ORGANIZACIÓN DEPORTIVA</center></th>
					<!-- <th><center>PROVINCIA</center></th>
					<th><center>CANTÓN</center></th>
					<th><center>PARROQUIA</center></th> -->
					<th><center>SEMESTRE<br>REPORTADO</center></th>
					<!-- <th><center>FECHA ENVÍO<br>DE INFORMACIÓN</center></th>
					<th><center>E-SIGEF2</center></th> -->
					<!-- <th><center>TIPO DE<br>ORGANIZACIÓN</center></th> -->
					<th><center>REVISAR</center></th>

				</tr>

			</thead>

		</table>

	</section>

</div>


<!--=============================
=            Modales            =
==============================-->

<?=$componentesTablas->get__modal__plantilla__inicios__seguimientos__alto__recomendados("reasignarSeguimientos__altosRecomendados","SECCIÓN DE REPORTERÍA","principal__seguimiento__reportes__altos__recomendados");?>

<!--====  End of Modales  ====-->
