
<div class="modal fade" id="rubro4" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" style="min-width:70%!important;">		
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">NECESIDADES GENERALES</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
      	<div class="col-md-12" class="col col-12 cell-border"  style="overflow: scroll;">
       <table id="paidRubrosEventos" >
				<thead>
					<tr align="center">
					<th COLSPAN=1><center>Modalidad</center></th>
						<th COLSPAN=1><center>Articulo</center></th>
						<th COLSPAN=1><center>Cantidad</center></th>
						<th COLSPAN=1><center> Valor / Unidad US</center></th>	
						<th COLSPAN=1><center>Valor Total</center></th>
						<th COLSPAN=1><center>Sector</center></th>
					</TR>
				</thead>
                <tbody>
				<tr>
					<?php 
                    
						$id =$_POST["id"];
                        require_once "../../config/config2.php";
                        $objeto= new usuarioAcciones();
                        $sql001="SELECT * from poa_paid_necesidades_generales where idOrganismo='$id'";
                     
                        $indicadorInformacion=$objeto->getObtenerInformacionGeneral($sql001);
                        $jason['indicadorInformacion']=$indicadorInformacion;

					foreach ($indicadorInformacion as $row)
					{
						$prt0 = $row[""];
						$prt1 = $row['modalidad'];
						$prt2 = $row['articulo'];
						$prt3 = $row['cantidad'];
						$prt4 = $row['valorUnitario'];
						$prt5 = $row['valorTotal'];
						$prt6 = $row['sector'];
                        
						?>

						<td>
							<center>
								<label><?php echo $prt1; ?></label>								
							</center>
						</td>
					
						<td>
							<center>
								<label><?php echo $prt2; ?></label>								
							</center>
						</td>
						<td>
							<center>
                            <label><?php echo $prt3; ?></label>						
							</center>
						</td>
						<td>
							<center>
							<label><?php echo $prt4; ?></label>						
							</center>
						</td>
						<td>
							<center>
                            <label><?php echo $prt5; ?></label>						
							</center>
						</td>
						<td>
							<center>
							<label><?php echo $prt6; ?></label>						
							</center>
						</td>
						
						
					

					</tr>
				<?php 	} ?>
			</tbody>




			</table>
      </div>
      </div>
      <div class="modal-footer">
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
      </div>
    </div>
  </div>
</div>