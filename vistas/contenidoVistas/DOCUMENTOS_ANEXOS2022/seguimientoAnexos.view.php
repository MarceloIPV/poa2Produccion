<?php $componentes= new componentes();?>


<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<?=$componentes->getComponentes(1,"SEGUIMIENTO DOCUMENTOS 2022");?>

		<div class="row">

			<table id="table__documentos__2022" class="col col-12 cell-border">

				<thead>

					<tr>

						<th><center>ORGANISMO</center></th>
						<th><center>PROVINCIA</center></th>
						<th><center>CANTON</center></th>
						<th><center>PARROQUIA</center></th>
						<th><center>RUC</center></th>
						<th><center>TRIMESTRE</center></th>
						<th><center>TIPO DOCUMENTO</center></th>
						<th><center>DOCUMENTO</center></th>
	
					</tr>

				</thead>

			</table>

		</div>

	</section>

</div>

<script type="text/javascript">
	datatablets__funcio__repor($("#table__documentos__2022"),"documentos__seguimiento__2022","seguimiento");
</script>