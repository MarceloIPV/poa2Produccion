<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<table id="reactivaciones_suspenciones_plazos" class="col col-12 cell-border">

			<thead>

				<tr>
					<th rowspan="2"><center>Jurisdicción</center></th>
					<th rowspan="2"><center>RUC</center></th>
					<th rowspan="2"><center>ORGANIZACIÓN DEPORTIVA</center></th>
					<th rowspan="2"><center>TIPO DE ORGANIZACIÓN DEPORTIVA</center></th>
					<th rowspan="2"><center>PROVINCIA</center></th>
					<th rowspan="2"><center>CORREO</center></th>
					<th rowspan="2"><center>AÑO APROBACIÓN <br>POA</center></th>
					<th rowspan="1" colspan="20"><center>TRIMESTRE</center></th>

				</tr>

				<tr>

					<th><center>I</center></th>
					<th><center>FECHA</center></th>
					<th><center>ESTADO PLAZO</center></th>
					<th><center>FECHA PLAZO</center></th>
					<th><center>DOCUMENTO PLAZO</center></th>
					<th><center>ESTADO TRANSFERENCIA</center></th>
					<th><center>II</center></th>
					<th><center>FECHA</center></th>
					<th><center>ESTADO PLAZO</center></th>
					<th><center>FECHA PLAZO</center></th>
					<th><center>DOCUMENTO PLAZO</center></th>
					<th><center>ESTADO TRANSFERENCIA</center></th>
					<th><center>IIII</center></th>
					<th><center>FECHA</center></th>
					<th><center>ESTADO PLAZO</center></th>
					<th><center>FECHA PLAZO</center></th>
					<th><center>DOCUMENTO PLAZO</center></th>
					<th><center>ESTADO TRANSFERENCIA</center></th>
					<th><center>IV</center></th>
					<th><center>FECHA</center></th>
					<th><center>ESTADO PLAZO</center></th>
					<th><center>FECHA PLAZO</center></th>
					<th><center>DOCUMENTO PLAZO</center></th>
					<th><center>ESTADO TRANSFERENCIA</center></th>
				</tr>

			</thead>

		</table>

	</section>

</div>


<script>

$.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/datatables.js",function(){
  
  datatabletsSeguimientoRevisorVacio($("#reactivaciones_suspenciones_plazos"),"reactivaciones_suspenciones_plazos","Reporte de Bloqueos",objetosSeguimiento2023([7,13,19,25,11,17,23,29],["enlaces__definidos__2","enlaces__definidos__2","enlaces__definidos__2","enlaces__definidos__2","enlaces__documentos__simples","enlaces__documentos__simples","enlaces__documentos__simples","enlaces__documentos__simples"],[7,13,19,25],[7,13,19,25],[$("#filesFrontend").val()+'seguimiento/documentos_plazos/',]),[$("#idUsuarioPrincipal").val(),$("#zonalUsuario").val(),$("#idRolAd").val()],["funcion__bloqueos__seguimientos2023"]);


});



</script>