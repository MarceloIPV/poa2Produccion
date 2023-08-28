<?php
	
	extract($_POST);

	require_once "../../config/config2.php";

	/*============================================
	=            Parametros Iniciales            =
	============================================*/
	
	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');

	$hora_actual2= date('s');

	$hora__dos=date('H:i');

	$anioa=date('Y');
	

	
    session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
	$idOrganismoSession=$_SESSION["idOrganismoSession"];
    
	/*=====  End of Parametros Iniciales  ======*/
	

	$objeto= new usuarioAcciones();

	switch ($tipo) {

	

	    case  "insertar__tipo__de__contratacion_paid":
		
			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();	

		
			$query="INSERT INTO `poa_paid_catalogo_contraloria` ( `catalogo__elect`, `catalogo__subasta`, `catalogo__infima`, `catalogo__menorCuantia`, `catalogo__cotizacion`, `catalogo__licitacion`, `catalogo__menorCuantiaObras`, `catalogo__cotizacionObras`, `catalogo__licitacionObras`, `catalogo__precioObras`, `catalogo__contratacionDirecta`, `catalogo__contratacionListaCorta`, `catalogo__contratacionConcursoPu`, `catalogo__elect__texto`, `catalogo__subasta__texto`, `catalogo__infima__texto`, `catalogo__menorCuantia__texto`, `catalogo__cotizacion__texto`, `catalogo__licitacion__texto`, `catalogo__menorCuantiaObras__texto`, `catalogo__cotizacionObras__texto`, `catalogo__licitacionObras__texto`, `catalogo__precioObras__texto`, `catalogo__contratacionDirecta__texto`, `catalogo__contratacionListaCorta__texto`, `catalogo__contratacionConcursoPu__texto`, `noAplica__3`, `idOrganismo`, `perioIngreso`, `idComponente`, `idRubros`, `idAsignacion`, `identificador`, `idItem`) VALUES ( 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ','no', '$idOrganismoSession', '$aniosPeriodos__ingesos', '$idComponentes', '$idRubros', '$idAsignacion', '$identificador', '$idItem');";
			$resultado= $conexionEstablecida->exec($query);

			$mensaje=1;
			$jason['mensaje']=$mensaje;

   		break;

		case  "guardar__recreativo__tecnicos":

			$arrayInformacion = json_decode($parametros);

			$inserta=$objeto->getInsertaNormal('poa_seguimiento_recreativo_tecnico', array("`idCompetenciaSeguimiento`, ","`idAdministrativo`, ","`trimestre`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`observacionesTecnicas`, ","`porcentaje`, ","`beneficiariosHombres`, ","`beneficiariosMujeres`, ","`totalT`, ","`fechaInicioP`, ","`fechaInicioEjecutado`, ","`fechaFinP`, ","`fechaFinEjecutado`, ","`tipoEvento`, ","`eventoTareaE`, ","`nivel`, ","`total`, ","`nombreOrganismo`, ","`ruc`, ","`tipoOrganizacion`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$arrayInformacion[3]', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[6]', ","'$arrayInformacion[7]', ","'$arrayInformacion[8]', ","'$arrayInformacion[9]', ","'$arrayInformacion[10]', ","'$arrayInformacion[11]', ","'$arrayInformacion[12]', ","'$arrayInformacion[13]', ","'$arrayInformacion[14]', ","'$arrayInformacion[15]', ","'$arrayInformacion[16]', ","'$arrayInformacion[17]', ","'$arrayInformacion[18]', ","'$aniosPeriodos__ingesos'"));


			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;	


		case  "capacitacion__guardar__otros":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/otrosCapacitacion/";

			$nombre__archivo1=$fecha_actual."__".$arrayInformacion[0]."__".$hora_actual2.".pdf";

			$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);


			$inserta=$objeto->getInsertaNormal('poa_seguimiento_otros_capacitacion', array("`idOtrosCapacitacion`, ","`documento`, ","`fecha`, ","`mes`, ","`trimestre`, ","`idActividadAc`, ","`idOrganismo`, ","`perioIngreso`"),array("'$nombre__archivo1', ","'$fecha_actual', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$arrayInformacion[0]', ","'$arrayInformacion[3]', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		case  "competencias__guardar__otros":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/otrosCompetencia/";

			$nombre__archivo1=$fecha_actual."__".$arrayInformacion[0]."__".$hora_actual2.".pdf";

			$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);


			$inserta=$objeto->getInsertaNormal('poa_seguimiento_otros_competencia', array("`idOtrosCompetencia`, ","`documento`, ","`fecha`, ","`mes`, ","`trimestre`, ","`idActividadAc`, ","`idOrganismo`, ","`perioIngreso`"),array("'$nombre__archivo1', ","'$fecha_actual', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$arrayInformacion[0]', ","'$arrayInformacion[3]', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		




//*************************************************** ESTADO DE CUENTA **************************************//
		case  "guardar_estado_de_cuenta2023":
			$nombre__archivo=$fecha_actual."__".$idOrganismo."__".$hora_actual2."__.pdf";
			$direccion1="../../documentos/seguimiento/estadosCuenta/";
			$documento=$objeto->getEnviarPdf($_FILES["estado_cuenta"]['type'],$_FILES["estado_cuenta"]['size'],$_FILES["estado_cuenta"]['tmp_name'],$_FILES["estado_cuenta"]['name'],$direccion1,$nombre__archivo);
			
			// $inserta=$objeto->getInsertaNormal('poa_seguimiento_estado_cuenta', array("`id_estado_cuenta`, ","`idOrganismo`, ","`documento`, ","`fecha`, ","`hora`,","`trimestre`, ","`perioIngreso`"),array("'$idOrganismo', ","'$nombre__archivo', ","'$fecha_actual', ","'$hora_actual', ","'$trimestre', ","'$aniosPeriodos__ingesos'"));
			// $mensaje=1;
			// $jason['mensaje']=$mensaje;	

			$conexionRecuperada= new conexion();
	$conexionEstablecida=$conexionRecuperada->cConexion();			

		$query="INSERT INTO `poa_seguimiento_estado_cuenta`(`idOrganismo`, `documento`, `fecha`, `hora`, `trimestre`, `perioIngreso`) VALUES ('$idOrganismo','$nombre__archivo','$fecha_actual', '$hora_actual', '$trimestre','$aniosPeriodos__ingesos')";
	
	$resultado= $conexionEstablecida->exec($query);

	 $mensaje=1;
	 $jason['mensaje']=$mensaje;
		break;


//*************************************************** DECLARACION DE RECURSOS PUBLICOS **************************************//
		case  "guardar_declaracion_recusos2023":
			$nombre__archivo=$fecha_actual."__".$idOrganismo."__".$hora_actual2."__.pdf";
			$direccion1="../../documentos/seguimiento/declaracion_recursos_publicos/";
			$documento=$objeto->getEnviarPdf($_FILES["declaracion_rp"]['type'],$_FILES["declaracion_rp"]['size'],$_FILES["declaracion_rp"]['tmp_name'],$_FILES["declaracion_rp"]['name'],$direccion1,$nombre__archivo);


			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();			
			if($btnEnviar == 1){
				$query="INSERT INTO `poa_seguimiento_declaracion`(`documento`, `idOrganismo`, `fecha`, `trimestre`, `perioIngreso`, `hora`) VALUES ('$nombre__archivo','$idOrganismo','$fecha_actual','$trimestre','$aniosPeriodos__ingesos','$hora_actual')";
				//$query="INSERT INTO `poa_seguimiento_declaracion_recursos_publicos`(`documento`, `fecha`, `hora`, `trimestre`, `IdOrganismo`, `perioIngreso`) VALUES ('$nombre__archivo','$fecha_actual','$hora_actual','$trimestre','$idOrganismo','$aniosPeriodos__ingesos')";
			

			$resultado= $conexionEstablecida->exec($query);

		}
			$mensaje=1;
			$jason['mensaje']=$mensaje;	
		break;

//******************************* Guardado de Indicadores (Meta Programado Meta ejecutado Doc Sustento) ********************************//
		case  "seguimiento__indicadores2023":

			$arrayInformacion = json_decode($prametros);

			$nombre__archivo=$fecha_actual."__".$arrayInformacion[2]."__".$arrayInformacion[3].".pdf";
			$direccion="../../documentos/seguimiento/indicadoresDocumento/";

			$documento=$objeto->getEnviarPdf($_FILES["archivo"]['type'],$_FILES["archivo"]['size'],$_FILES["archivo"]['tmp_name'],$_FILES["archivo"]['name'],$direccion,$nombre__archivo);

			$inserta=$objeto->getInsertaNormal('poa_indicadores_seguimiento', array("`idModificaIndicadores`, ","`totalProgramado`, ","`totalEjecutado`, ","`documento`, ","`idOrganismo`, ","`idActividad`, ","`trimestre`, ","`fecha`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$nombre__archivo', ","'$arrayInformacion[2]', ","'$arrayInformacion[3]', ","'$arrayInformacion[4]', ","'$fecha_actual', ","'$aniosPeriodos__ingesos'"));

			$mensaje=1;
			$jason['mensaje']=$mensaje;

		break;

//*************************************************** competencias_presupuestario__guardar **************************************//
		case  "competencias__guardar":

			$arrayInformacion = json_decode($parametros);

			$inserta=$objeto->getInsertaNormal('poa_segimiento_competencias', array("`idCompetencias`, ","`mensualProgramado`, ","`mensualEjecutado`, ","`mes`, ","`trimestre`, ","`idAdministrativo`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`observaciones`, ","`cantidadBienes`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[7]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$arrayInformacion[8]', ","'$arrayInformacion[9]', ","'$aniosPeriodos__ingesos'"));


			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		//*************************************************** competencias_presupuestario__guardar **************************************//
		case  "capacitacion__guardar":

			$arrayInformacion = json_decode($parametros);
		

			$inserta=$objeto->getInsertaNormal('poa_segimiento_capacitacion', array("`idCapacitacion`, ","`mensualProgramado`, ","`mensualEjecutado`, ","`mes`, ","`trimestre`, ","`idAdministrativo`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`observaciones`, ","`cantidadBienes`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[7]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$arrayInformacion[8]', ","'$arrayInformacion[9]', ","'$aniosPeriodos__ingesos'"));
		
		
			$mensaje=1;
		
			$jason['mensaje']=$mensaje;
		
		
		break;

		//*************************************************** mantenimeinto_presupuestario__guardar **************************************//

		case  "mantenimiento__guardar__otros":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/otrosMantenimiento/";

			$nombre__archivo1=$fecha_actual."__".$arrayInformacion[0]."__".$hora_actual2.".pdf";

			$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);


			$inserta=$objeto->getInsertaNormal('poa_seguimiento_otros_mantenimiento', array("`idOtrosMantenimiento`, ","`documento`, ","`fecha`, ","`mes`, ","`trimestre`, ","`idActividadAc`, ","`idOrganismo`, ","`perioIngreso`"),array("'$nombre__archivo1', ","'$fecha_actual', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$arrayInformacion[0]', ","'$arrayInformacion[3]', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		case  "mantenimiento__guardar":

			$arrayInformacion = json_decode($parametros);

			$inserta=$objeto->getInsertaNormal('poa_segimiento_mantenimiento', array("`idMantenimiento`, ","`mensualProgramado`, ","`mensualEjecutado`, ","`mes`, ","`trimestre`, ","`idAdministrativo`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`observaciones`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[7]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$arrayInformacion[8]', ","'$aniosPeriodos__ingesos'"));


			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		//*************************************************** recreativo_presupuesto__guardar__otros **************************************//


		case  "recreativo__guardar__otros":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/otrosRecreativo/";

			$nombre__archivo1=$fecha_actual."__".$arrayInformacion[0]."__".$hora_actual2.".pdf";

			$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);


			$inserta=$objeto->getInsertaNormal('poa_seguimiento_otros_recreativo', array("`idOtrosRecreativo`, ","`documento`, ","`fecha`, ","`mes`, ","`trimestre`, ","`idActividadAc`, ","`idOrganismo`, ","`perioIngreso`"),array("'$nombre__archivo1', ","'$fecha_actual', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$arrayInformacion[0]', ","'$arrayInformacion[3]', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		case  "recreativo__guardar":

			$arrayInformacion = json_decode($parametros);

			$inserta=$objeto->getInsertaNormal('poa_segimiento_recreativos', array("`idRecreativos`, ","`mensualProgramado`, ","`mensualEjecutado`, ","`mes`, ","`trimestre`, ","`idAdministrativo`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`observaciones`, ","`cantidadBienes`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[7]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$arrayInformacion[8]', ","'$arrayInformacion[9]', ","'$aniosPeriodos__ingesos'"));


			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		//***************************************************implementacion_deportiva_presupuesto__guardar__otros **************************************//


		case  "implementacion__guardar__otros":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/otrosInstalaciones/";

			$nombre__archivo1=$fecha_actual."__".$arrayInformacion[0]."__".$hora_actual2.".pdf";

			$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);


			$inserta=$objeto->getInsertaNormal('poa_seguimiento_otros_instalaciones', array("`idOtrosInstalaciones`, ","`documento`, ","`fecha`, ","`mes`, ","`trimestre`, ","`idActividadAc`, ","`idOrganismo`, ","`perioIngreso`"),array("'$nombre__archivo1', ","'$fecha_actual', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$arrayInformacion[0]', ","'$arrayInformacion[3]', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		case  "implementacion__guardar":

			$arrayInformacion = json_decode($parametros);

			$inserta=$objeto->getInsertaNormal('poa_segimiento_implementacion', array("`idImplementacion`, ","`mensualProgramado`, ","`mensualEjecutado`, ","`mes`, ","`trimestre`, ","`idAdministrativo`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`observaciones`, ","`cantidadBienes`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[7]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$arrayInformacion[8]', ","'$arrayInformacion[9]', ","'$aniosPeriodos__ingesos'"));


			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;


		//***************************************************administrativo_presupuesto__guardar__otros **************************************//

		case  "otros__administrativas":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/otrosHabilitantes__administrativo/";

			$nombre__archivo1=$fecha_actual."__".$arrayInformacion[0]."__".$hora_actual2.".pdf";

			$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);


			$inserta=$objeto->getInsertaNormal('poa_seguimiento_otros_administrativos', array("`idOtrosAdministrativos`, ","`documento`, ","`fecha`, ","`mes`, ","`trimestre`, ","`idActividadAc`, ","`idOrganismo`, ","`perioIngreso`"),array("'$nombre__archivo1', ","'$fecha_actual', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$arrayInformacion[0]', ","'$arrayInformacion[3]', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		case  "administrativos__seguimientos":

			$arrayInformacion = json_decode($parametros);

			$direccion1="../../documentos/seguimiento/facturas__administrativo/";
			$direccion2="../../documentos/seguimiento/otrosHabilitantes__administrativo/";

			if (isset($archivo1)) {

				$nombre__archivo1="no";

			}else{

				$nombre__archivo1=$fecha_actual."__".$arrayInformacion[3]."__".$hora_actual2.".pdf";

				$documento=$objeto->getEnviarPdf($_FILES["archivo1"]['type'],$_FILES["archivo1"]['size'],$_FILES["archivo1"]['tmp_name'],$_FILES["archivo1"]['name'],$direccion1,$nombre__archivo1);

			}

			if (isset($archivo2)) {
				
				$nombre__archivo2="no";

			}else{

				$nombre__archivo2=$fecha_actual."__".$arrayInformacion[3]."__".$hora_actual2.".pdf";

				$documento=$objeto->getEnviarPdf($_FILES["archivo2"]['type'],$_FILES["archivo2"]['size'],$_FILES["archivo2"]['tmp_name'],$_FILES["archivo2"]['name'],$direccion2,$nombre__archivo2);

			}



			$inserta=$objeto->getInsertaNormal('poa_seguimiento_administrativo', array("`idAdministrativoSegui`, ","`mensualProgramado`, ","`mensualEjecutado`, ","`factura`, ","`otrosHabilitantes`, ","`mes`, ","`trimestre`, ","`idAdministrativo`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$nombre__archivo1', ","'$nombre__archivo2', ","'$arrayInformacion[4]', ","'$arrayInformacion[5]', ","'$arrayInformacion[7]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$hora_actual', ","'$aniosPeriodos__ingesos'"));
			
			$mensaje=1;

			$jason['mensaje']=$mensaje;


		break;

		//***************************************************insertar__tipo__de__contratacion_seguimiento **************************************//


		case  "insertar__tipo__de__contratacion_seguimiento":
		
			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();	
		
			$query="INSERT INTO `poa_catalogo_contraloria_seguimiento` ( `catalogo__elect`, `catalogo__subasta`, `catalogo__infima`, `catalogo__menorCuantia`, `catalogo__cotizacion`, `catalogo__licitacion`, `catalogo__menorCuantiaObras`, `catalogo__cotizacionObras`, `catalogo__licitacionObras`, `catalogo__precioObras`, `catalogo__contratacionDirecta`, `catalogo__contratacionListaCorta`, `catalogo__contratacionConcursoPu`, `catalogo__elect__texto`, `catalogo__elect__cantidad`, `catalogo__elect__monto`, `catalogo__subasta__texto`, `catalogo__subasta__cantidad`, `catalogo__subasta__monto`, `catalogo__infima__texto`, `catalogo__infima__cantidad`, `catalogo__infima__monto`, `catalogo__menorCuantia__texto`, `catalogo__menorCuantia__cantidad`, `catalogo__menorCuantia__monto`, `catalogo__cotizacion__texto`, `catalogo__cotizacion__cantidad`, `catalogo__cotizacion__monto`, `catalogo__licitacion__texto`, `catalogo__licitacion__cantidad`, `catalogo__licitacion__monto`, `catalogo__menorCuantiaObras__texto`, `catalogo__menorCuantiaObras__cantidad`, `catalogo__menorCuantiaObras__monto`, `catalogo__cotizacionObras__texto`, `catalogo__cotizacionObras__cantidad`, `catalogo__cotizacionObras__monto`, `catalogo__licitacionObras__texto`, `catalogo__licitacionObras__cantidad`, `catalogo__licitacionObras__monto`, `catalogo__precioObras__texto`, `catalogo__precioObras__cantidad`, `catalogo__precioObras__monto`, `catalogo__contratacionDirecta__texto`, `catalogo__contratacionDirecta__cantidad`, `catalogo__contratacionDirecta__monto`, `catalogo__contratacionListaCorta__texto`, `catalogo__contratacionListaCorta__cantidad`, `catalogo__contratacionListaCorta__monto`, `catalogo__contratacionConcursoPu__texto`, `catalogo__contratacionConcursoPu__cantidad`, `catalogo__contratacionConcursoPu__monto`, `idOrganismo`, `idItemCatalogo`, `perioIngreso`, `noAplica__3`, `idActividad`, `trimestre`) VALUES ('no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', 'no', ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, ' ',0,0, '$idOrganismoSession', '$idItem', '$aniosPeriodos__ingesos', 'no', '$idActividad','$trimestre' );";
			$resultado= $conexionEstablecida->exec($query);

			$mensaje=1;
			$jason['mensaje']=$mensaje;

   		break;

		//***************************************************registro__contratacion__seguimiento **************************************//


		case  "registro__contratacion__seguimiento":
		
			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();	
		
			$query="INSERT INTO `poa_registro_contratacion` ( `registra_Contratacion`, `justificacion`, `idOrganismo`, `idItemCatalogo`, `perioIngreso`, `idActividad`,`trimestre`) SELECT '$registro','$justificacion','$idOrganismoSession', '$idItem', '$aniosPeriodos__ingesos', NULL,'$trimestre' WHERE NOT EXISTS (SELECT * FROM `poa_registro_contratacion`  WHERE idOrganismo = '$idOrganismoSession' AND idItemCatalogo='$idItem' AND perioIngreso='$aniosPeriodos__ingesos' and trimestre='$trimestre' ) ;";
			$resultado= $conexionEstablecida->exec($query);

			$mensaje=1;
			$jason['mensaje']=$mensaje;

   		break;


  }

 
		
    

	echo json_encode($jason);