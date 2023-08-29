<?php

	class plantilla{


		// carpetas
		private static $nomenclatura='.view.php';

		private static $vista = 'vistas/'; 

		private static $vistaGeneral = 'vistasGenerales/'; 

		private static $contenidoVistas = 'contenidoVistas/'; 

		private static $menuSeccionales = 'menuSeccionales/'; 

		private static $dasboard = 'dasboard/'; 

		private static $componentes = 'componentes/'; 
		
		// nomenclaturas iniciales

		private $rutaInicial='ingreso';

		private static $header = 'header'; 
		private static $header2 = 'header2'; 
		private static $header3 = 'header3';
		private static $header4 = 'header4';
		private static $header5 = 'header5';
		private static $header6 = 'header6';

		private static $menu = 'menu'; 

		private static $footer = 'footer'; 

		
		/*====================================================
		=            Funciones principales clases            =
		====================================================*/
		
		public static function ctrPlantilla(){

			include "controladores/controladorPlantilla/plantilla.general.controlador.php";

		}


		public function plantillaHead(){

			if($_GET["ruta"]=="modificaciones") {

				require_once self::$vista.self::$vistaGeneral.self::$header2.self::$nomenclatura;

			}else if($_GET["ruta"]=="dashboard" || $_GET["ruta"]=="infraestructuraOrganismo"  || $_GET["ruta"]=="modificacionesInformes" || $_GET["ruta"]=="modificacionesCuadroAvances" || $_GET["ruta"]=="estadoTramitesModificaciones"){

				require_once self::$vista.self::$vistaGeneral.self::$header3.self::$nomenclatura;

			}else if($_GET["ruta"]=="crearInformacion" || $_GET["ruta"]=="modificacionesOrganismo"  || $_GET["ruta"]=="modificacionesMontos" || $_GET["ruta"]=="modificacionesSueldosSalarios" || $_GET["ruta"]=="modificacionesDesvinculacion"){

				require_once self::$vista.self::$vistaGeneral.self::$header4.self::$nomenclatura;

			}else if($_GET["ruta"]=="modificarInformacion"){

				require_once self::$vista.self::$vistaGeneral.self::$header5.self::$nomenclatura;

			}else if($_GET["ruta"]=="modificacionesRevisor" || $_GET["ruta"]=="modificacionesRevisorRecomendados" || $_GET["ruta"]=="modificacionesRecibidosPlanificacion" || $_GET["ruta"]=="modificacionesRecibidosPlanificacionRecomendados" || $_GET["ruta"]=="modificacionesRecibidosPlanificacionRecomendadosNotificacion"  || $_GET["ruta"]=="reporteriaModi" || $_GET["ruta"]=="modificacionesRevisorInfra" || $_GET["ruta"]=="modificacionesRevisorInfraRecomendados" || $_GET["ruta"]=="modificacionesRevisorSubsecretaria" || $_GET["ruta"]=="modificacionesRevisorSubsecretariaRecomendados"){

				require_once self::$vista.self::$vistaGeneral.self::$header6.self::$nomenclatura;

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$header.self::$nomenclatura;

			}

			

		}	

		public function disparadorEstilosDasboards(){

			if (isset($_GET["ruta"])) {

				if($_GET["ruta"]!="ingreso" || $_GET["ruta"]!="capacitacion") {

					require_once self::$vista.self::$vistaGeneral."estilosDasboards".self::$nomenclatura;

				}

			}

		}		
		
		public function plantillaMenu(){


			if (isset($_GET["ruta"])) {

				if($_GET["ruta"]!="ingreso" && $_GET["ruta"]!="capacitacion" && $_GET["ruta"]!="paidPoaSeleccion") {

					require_once self::$vista.self::$vistaGeneral.self::$dasboard."menuDasboardPrincipal".self::$nomenclatura;

				}else{

					require_once self::$vista.self::$vistaGeneral.self::$menu.self::$nomenclatura;

				}

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$menu.self::$nomenclatura;

			}

		}	


		public function disparadorMenu(){

			if (isset($_GET["ruta"])) {

				switch ($_GET["ruta"]) {

					case "ingreso":
						require_once self::$vista.self::$vistaGeneral.self::$menuSeccionales."ingresoMenu".self::$nomenclatura;
					break;

				}

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$menuSeccionales."ingresoMenu".self::$nomenclatura;

			}

		}


		public function plantillaContenido(){

			if (isset($_GET["ruta"])) {
				
				if($_GET["ruta"]=="generalDeporteEA" || $_GET["ruta"]=="paidRubrosEncuentroActivo"){
					require_once self::$vista.self::$contenidoVistas."PAID_DESARROLLO/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="generalDeporteAR" || $_GET["ruta"]=="paidRubrosEventos" || $_GET["ruta"]=="paidRubrosInterdisciplinario" || $_GET["ruta"]=="paidRubrosNecesidadesGenerales" || $_GET["ruta"]=="paidRubrosNecesidadesIndividuales"){
					require_once self::$vista.self::$contenidoVistas."paid-alto-rendimiento/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="paidencuentroactivo" || $_GET["ruta"]=="paidAsignacion" || $_GET["ruta"]=="paidAsignacionDesarrollo" || $_GET["ruta"]=="paidfortalecimiento" || $_GET["ruta"]=="reporteriaAsignacion" || $_GET["ruta"]=="reporteriaAsignacionDesarrollo"){
					require_once self::$vista.self::$contenidoVistas."PAID-ADMINISTRACION/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="modificacionesOrganismo" || $_GET["ruta"]=="dashboard" || $_GET["ruta"]=="infraestructuraOrganismo" || $_GET["ruta"]=="modificacionesMontos" || $_GET["ruta"]=="modificacionesSueldosSalarios" || $_GET["ruta"]=="modificacionesDesvinculacion" || $_GET["ruta"]=="modificacionesInformes" || $_GET["ruta"]=="modificacionesCuadroAvances" || $_GET["ruta"]=="modificarInformacion" || $_GET["ruta"]=="crearInformacion" || $_GET["ruta"]=="estadoTramitesModificaciones" || $_GET["ruta"]=="reporteriaModi"){
					require_once self::$vista.self::$contenidoVistas."POA_MODIFICACIONES/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="modificacionesRevisor" || $_GET["ruta"]=="modificacionesRevisorRecomendados" || $_GET["ruta"]=="modificacionesRecibidosPlanificacion" || $_GET["ruta"]=="modificacionesRecibidosPlanificacionRecomendados" || $_GET["ruta"]=="modificacionesRecibidosPlanificacionRecomendadosNotificacion" || $_GET["ruta"]=="reporteriaModificacionesA" || $_GET["ruta"]=="modificacionesRevisorInfra" || $_GET["ruta"]=="modificacionesRevisorInfraRecomendados" || $_GET["ruta"]=="modificacionesRevisorSubsecretaria" || $_GET["ruta"]=="modificacionesRevisorSubsecretariaRecomendados"){
					require_once self::$vista.self::$contenidoVistas."POA_MODIFICACIONES_REVISOR/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="seguimientoAnexos"){
					require_once self::$vista.self::$contenidoVistas."DOCUMENTOS_ANEXOS2022/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="administracionModificaciones"){
					require_once self::$vista.self::$contenidoVistas."ADMINISTRACION_MODIFICACIONES/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="bloqueador" || $_GET["ruta"]=="bloqueador2" || $_GET["ruta"]=="bloqueadorFinancieros"){
					require_once self::$vista.self::$contenidoVistas."BLOQUEADOR/".$_GET["ruta"].self::$nomenclatura;
				}else if($_GET["ruta"]=="reporteAnexosOD" || $_GET["ruta"]=="jurisdicciones" || $_GET["ruta"]=="seguimientoRE" || $_GET["ruta"]=="seguimientoRE" || $_GET["ruta"]=="seguimiento" || $_GET["ruta"]=="seguimientoRecomendadosPresupuestario" || $_GET["ruta"]=="seguimientoRe" ){

					if(isset($_SESSION["selectorAniosA"])){
						if(intval($_SESSION["selectorAniosA"])>=2022){
							require_once self::$vista.self::$contenidoVistas."POA_SEGUIMIENTO/".$_GET["ruta"].self::$nomenclatura;
						}else{
							require_once self::$vista.self::$contenidoVistas.$_GET["ruta"].self::$nomenclatura;
						}

						
					}else{
						require_once self::$vista.self::$contenidoVistas.$_GET["ruta"].self::$nomenclatura;
					}
					
				}else{
					require_once self::$vista.self::$contenidoVistas.$_GET["ruta"].self::$nomenclatura;
				}

			}else{

				require_once self::$vista.self::$contenidoVistas.$this->rutaInicial.self::$nomenclatura;

			}


		}

		public function plantillaFooter(){

			if (isset($_GET["ruta"])) {

				if ($_GET["ruta"]=="ingreso") {
					require_once self::$vista.self::$vistaGeneral.self::$footer.self::$nomenclatura;
				}else{
					require_once self::$vista.self::$vistaGeneral."footerIngreso".self::$nomenclatura;
				}

			}else{

				require_once self::$vista.self::$vistaGeneral.self::$footer.self::$nomenclatura;

			}

		}	

		/*=====  End of Funciones principales clases  ======*/
		


	}