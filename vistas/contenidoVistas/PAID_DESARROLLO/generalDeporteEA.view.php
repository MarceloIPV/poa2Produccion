
<?php $componentes= new componentes();

$componentesPaid= new componentesPaid();

session_start();

$tipoProyecto=1;

$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
?>

<?php $objetoInformacion= new usuarioAcciones();?>

<?php $informacionObjeto=$objetoInformacion->getInformacionCompletaOrganismoDeportivo();?>


<?php $idOrganismoSession=$informacionObjeto[0][idOrganismo];?>

<input type="hidden" id="identificador" name="identificador" value="0">


<div class="content-wrapper d d-flex flex-column align-items-center">
	
		<?=$componentes->getContenidoActividadesPAID("tablaPAIDGeneral1","

		<tr>
			<th colspan='5' class='uppercase__texto monto__especial__titulo'>
			<center>Monto: ".number_format((float)$inversionOrganismo[0][nombreInversion], 2, '.', '')."</center>
			</th>
		</tr>

		<tr class='monto__despejarEnvio'>
			<th colspan='2' class='uppercase__texto'>
			<center>Monto por asignar: ".number_format((float)$inversionRestante, 2, '.', '')."</center>
			</th>
			<th colspan='3' class='uppercase__texto'>
			<center>Monto asignado: ".number_format((float)$inversionOrganismoQueda[0][sumaItemTotal], 2, '.', '')."</center>
			</th>
		</tr>
		
		<tr>
			<th style='width:10%!important;'>
			<center>Nro.</center>
			</th>
			<th style='width:20%!important;'>
			<center>Componente</center>
			</th>

			<th style='width:20%!important;'>
			<center>Indicador</center>

			</th>
			<th style='width:10%!important;'>
			<center>Planificar Indicador</center>
			</th>
			<th style='width:15%!important;'>
			<center>Rubros</center>
			</th>
		</tr> "
		
		,"
		
		<tr>
			<td class='uppercase__texto' >
			<center style='font-size: 14px;'>1</center>
			</td>
			<td>
			<center style='font-size: 14px;'>Viajes</center>
			</td>
			
			<td>
			<center style='font-size: 14px;'>Eventos</center>

			</td>
			<td>
			<center style='font-size: 14px;'><button type'button' class='btn btn-success'style='width=200px;'  data-bs-toggle='modal' data-bs-target='#modalActividad'> Ver </button></center>
			</td>
			<td>
			<center style='font-size: 14px;'><button type'button' class='btn btn-success'style='width=200px;'  data-bs-toggle='modal' data-bs-target='#itemsCargados1'> Ver </button></center>
			</td>
		</tr>

		");
		
		?>		
	
	
</div>


<?=$componentesPaid->getModalIndicadorPaid("modalActividad".$valor2,"formModalActividades".$valor2,"PLANIFICACIÓN DE INDICADORES", "insertar".$informacionSeleccionada[$clave]['idActividades'] , ["PLANIFICACIÓN DE INDICADORES","I Trimestre","II Trimestre","III Trimestre","IV Trimestre","Meta Anual del indicador"] , ["planificacionIndicadores","primerTrimestre".$valor2,"segundoTrimestre".$valor2,"tercerTrimestre".$valor2,"cuartoTrimestre".$valor2,"metaAnualIndicador".$valor2,"botonItems".$valor2] , ["textos","input","input","input","input","input","boton"],["textos","numero","numero","numero","numero","disabled","boton"],"<i class='fas fa-save'></i>&nbsp;&nbsp;GUARDAR");?>


<?=$componentesPaid->getModalGeneralRubroPaid("itemsCargados1","Rubros","itemsModalContentAc","<center style='font-size: 14px;'> <a data-dismiss='modal' class='btn btn-success' data-bs-toggle='modal' data-bs-target='#itemsCargados'>Ver</a></center>");?>


<?=$componentesPaid->getModalGeneralPaid("itemsCargados","Rubros","itemsModalContentAc","agregarItemsAc","verItemsAc","tablaItjem__paid",["Item","Ítem presupuestario"],"contenedorItemsTablaAc");?>

<script>
	
</script>