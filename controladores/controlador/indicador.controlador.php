<?php

	class componentes__incrementos__v1{

		public function getModalAtributosPdfs($parametro1,$parametro2,$signo,$parametro3,$parametro4){

			$modal="

				<div class='modal fade' id='$parametro1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				  <div class='modal-dialog' style='width:60%;'>
				    <div class='modal-content'>
				      <div class='modal-header'>
				        <h5 class='modal-title' id='exampleModalLabel'>$parametro2 <span id='titulo__od__organismos' style='text-transform:uppercase;'></span></h5>
				      </div>
					  <form action='modelosBd/pdf/pdfIncrementosD.modelo.php' method='post'>
				      <div class='modal-body'  style='width:100%;' >
						
					      <div style='display:flex; justify-content:center; width:100%;'>

							<div>Poa Aprobado</div>&nbsp;&nbsp;&nbsp;
							<input type='text' readonly id='montoTotal__Modificacion__incrementos' name='montoTotal__Modificacion__incrementos' class='montoTotalIncrementoTecho solo__numero__montos cambio__de__numero__f'/>

							<input type='hidden' id='btnEnviarNotificacion' name='btnEnviarNotificacion' value='1'/>

							<input type='hidden' id='idUsuarioEn' name='idUsuarioEn' value='$parametro4'/>

					      	<input type='hidden' id='idOrganismo__m' name='idOrganismo__m'/>

							<input type='hidden' id='tipoInforme' name='tipoInforme' value='$parametro3' />

							<input type='hidden' id='tipoPdf' name='tipoPdf' value='informeNotificacion__Incrementos__Decrementos' />

							&nbsp;
					      	<div>Ingresar el $parametro3</div>&nbsp;&nbsp;&nbsp;
					      	<input type='text' id='montoIngresadoModificacion__incrementos' name='montoIngresadoModificacion__incrementos' class='montoIncrementos solo__numero__montos campos__obligatorios' value='0'/>

					      </div>
						  <br>
						  <div  style='display:flex; justify-content:center; width:100%;'>
							<div>Poa Aprobado $signo $parametro3</div>&nbsp;&nbsp;&nbsp;
							<input type='text' readonly id='total__Incrementos_M_' name='total__Incrementos_M_' class=' solo__numero__montos cambio__de__numero__f' value='0'/> 
						  </div>
						
				      </div>
				      <div class='modal-footer'>
				        <button type='button' class='btn btn-primary' id='ingrementarValoGuardar'>Guardar</button>
				      </div>
					  </form>
				    </div>
				  </div>
				</div>

			";

			return $modal;

		} 

		public function getModalAtributosPdfs__aprobar($parametro1){

			$modal="

				<div class='modal fade' id='$parametro1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
				  <div class='modal-fullscreen-sm-down'>
				    <div class='modal-content'>
				      <div class='modal-header'>
				        <h5 class='modal-title' id='exampleModalLabel'>$parametro2 <span id='titulo__od__organismos' style='text-transform:uppercase;'></span></h5>
				      </div>

				      <div class='modal-body contenedor__bodyCMatriz row' style='width:100%;' style='display:flex; flex-direction:column; justify-content:center; align-items:center;'></div>

				      <div class='modal-body' style='width:100%;' >

					      <div style='display:flex; justify-content:center; flex-direction:column; width:100%;'>


					      	<input type='hidden' id='idOrganismo__m__n' name='idOrganismo__m__n' />

					      	<input type='hidden' id='tipo__organismos__m__n' name='tipo__organismos__m__n' />

					      	<input type='hidden' id='idIncrementos' name='idIncrementos' />

					      	<div style='font-weight:bold!important;'>Subir resolución</div>&nbsp;&nbsp;&nbsp;
					      	<input type='file' id='resolucionSubidas' name='resolucionSubidas' />

					      	<br>

					      	<div style='font-weight:bold!important;'>Fecha de resolución</div>&nbsp;&nbsp;&nbsp;
					      	<input type='date' id='resolucionSubidas__fecha' name='resolucionSubidas__fecha' />


					      </div>
		
				      </div>
				      <div class='modal-footer'>
				        <button type='button' class='btn btn-primary' id='guardarResolucion__incrementos'>Guardar</button>
				      </div>
				    </div>
				  </div>
				</div>

			";

			return $modal;

		} 

		public function getModalMatricezObserva2($parametro1,$parametro2){

			$modal="

			<div class='modal modal__ItemsGrup fade' id='$parametro1' aria-hidden='true'>

				<div class='modal-dialog' style='min-width:80%!important;'>

					<form class='modal-content $parametro2'>

						<div class='modal-header row'>

					        <div class='col col-11 text-center'>

					          <h5 class='modal-title titulo__mS'></h5>

					        </div>

					        <div class='col col-1'>

					          <button type='button' class='btn-close cerrar__modalRegistros' data-bs-dismiss='modal' aria-label='Close'><i class='far fa-times-circle'></i></button>

					        </div>

						</div>

						<div class='modal-body row contenedor__bodyCMatrizDefi'>

							


						</div>

					</form>

				</div>

			</div>

			";

			return $modal;


		}

	}