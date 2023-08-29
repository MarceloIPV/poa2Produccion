<?php $objetoInformacion= new usuarioAcciones();?>

<?php $componentes= new componentes();?>

<?php $componentesTablas= new componentesTablas();?>


<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<input type="hidden" id="idOrganismo">
		<input type="hidden" id="periodo">

		
		<input type="date" name="selectMesInicio" id="selectMesInicio">
		<input type="date" name="selectMesFin" id="selectMesFin">
		
		<table id="tablaResumenTransferencias" class="col col-12 cell-border">

			<thead>

				<tr>
					<th><center>AÑO</center></th>
					<th><center>ENTIDAD</center></th>
					<th><center>NOMBRE ENTIDAD</center></th>
					<th><center>Nro. CUR</center></th>
					<th><center>ESTADO</center></th>
					<th><center>RUC</center></th>
					<th><center>BENEFICIARIO</center></th>
					<th><center>DESCRIPCIÓN</center></th>
					<th><center>MONTO</center></th>
					<th><center>FECHA DE PAGO</center></th>
					<th><center>NÚMERO DE CUENTA MONETARIA DESTINO</center></th>
					<th><center>FECHA DE CONFIRMACIÓN</center></th>
					<th><center>NOMBRE ENTIDAD BANCARIA</center></th>

				</tr>

			</thead>

		</table>

	</section>

</div>



<script>

$.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/datatables.js",function(){
  
    datatabletsSeguimientoRevisorVacio2($("#tablaResumenTransferencias"),"tablaResumenTransferencias","Reporte de Transferencias","",[ $("#idUsuarioC").val()],false);

    

});



   
</script>