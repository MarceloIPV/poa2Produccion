<?php 
	session_start();
	$objetoInformacion= new usuarioAcciones();
	$objeto= new usuarioAcciones();
	$conexionRecuperada= new conexion();
	$conexionEstablecida=$conexionRecuperada->cConexion();	
	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
	date_default_timezone_set("America/Guayaquil");
	$fecha_actual = date('Y-m-d');
	$hora_actual= date('H:i:s');
	$dia_actual = date('d');
?>

<?php $componentes= new componentes();?>

<?php $componentesTablas= new componentesTablas();?>



<div class="content-wrapper">

	<section class="content row d d-flex justify-content-center">

		<div class="contenedor__tabla__total">

		<table id="seguimiento__bloqueosTablaTrimestres__2__financieros" class="col col-12 cell-border">

			<thead>

				<tr>

					<th rowspan="2" style="vertical-align: middle!important;"><center>RUC</center></th>
					<th rowspan="2" style="vertical-align: middle!important;"><center>ORGANISMO DEPORTIVO</center></th>
					<th rowspan="2" style="vertical-align: middle!important;"><center>PROVINCIA</center></th>
					<th rowspan="1" colspan="2"><center>TRANSFERENCIAS</center></th>
					<th rowspan="2" style="vertical-align: middle!important;"><center>MOTIVO</center></th>
				</tr>

				<tr>

					<th rowspan="1" colspan="1"><center>ESTADO</center></th>

					<th rowspan="1" colspan="1" style="height: 130px;">

						<center>

							<nav id="colorNav" style="position: relative; top: -5em!important;">
							    <ul>
							        <li class="green">
							            <a href="#" class="fa fa-windows" style="text-align: center!important; display: flex; justify-content: center!important; padding: .5em;"><div style="position: relative;left: -7px; font-weight:  bold; color: white; width: 100%;">ACCIONES</br>+</div></a>
										<ul class="vertice__seguimiento__top">
							                <li><button class="btn btn-warning" id="seleccionarTodos__1__segundasoz__2" style="font-size:8px; width: 100%; padding-top:1em;padding-bottom: .5em;">SELECCIONAR TODOS</button></li>
							                <li><button class="btn btn-success seleccionarTodos__enviar__1__periodos__cierres__2" botonClass='bloquear' style="font-size:8px; width: 100%; padding-top:1em;padding-bottom: .5em;">CERRAR</button></li>
							                <li><button class="btn btn-info seleccionarTodos__enviar__1__periodos__cierres__2" botonClass='desbloquear' style="font-size:8px; width: 100%; padding-top:1em;padding-bottom: .5em;">ABRIR</button></li>
							            </ul>
							        </li>
							    </ul>
							</nav>							
							
						</center>
					
					</th>

				</tr>

			</thead>

		</table>

		</div>

	</section>

</div>


