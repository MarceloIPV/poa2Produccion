<?php
	
	extract($_POST);

	require_once "../../config/config2.php";
	require_once "../../config/files.php";

	/*============================================
	=            Parametros Iniciales            =
	============================================*/
	
	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');	

	$hora_actual2= date('s');
	

	$hora__dos=date('H:i');

	$anioa=date('Y');

	//$anioa='2022';

	/*=====  End of Parametros Iniciales e ======*/
	
	session_start();

		

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];



	$objeto= new usuarioAcciones();

	switch ($tipo) {

		case "incrementos__guardar":

			$idUsuario__sesion=$_SESSION["idUsuario"];


			$objeto->insertSingleRow('poa_inversion',['nombreInversion','inversionQueda','ejercicioFiscal','estado','fecha','hora','montoAjustado','perioIngreso','totalInversion'],array(':nombreInversion' => $montoTotalIncremento,':inversionQueda' => $montoTotalIncremento,':ejercicioFiscal' => $aniosPeriodos__ingesos."-01-01",':estado' => 'A',':fecha' => $fecha_actual,':hora' => $hora_actual,':montoAjustado' => $montoTotalIncremento,':perioIngreso' => $aniosPeriodos__ingesos,':totalInversion' => $montoIngresadoModificacion__incrementos));


			$maximoE=$objeto->getObtenerInformacionGeneral("SELECT MAX(idInversion) AS maximo FROM poa_inversion;");

			$objeto->insertSingleRow('poa_inversion_usuario',['idUsuario','idInversion','idOrganismo','perioIngreso','incrementoDecremento'],array(':idUsuario' => $idUsuario__sesion,':idInversion' => $maximoE[0][maximo],':idOrganismo' => $idOrganismo,':perioIngreso' => $aniosPeriodos__ingesos,':incrementoDecremento' => "incremento"));

			$mensaje=1;
			$jason['mensaje']=$mensaje;


		break;


		case "decrementos__guardar":

			$idUsuario__sesion=$_SESSION["idUsuario"];

			$objeto->insertSingleRow('poa_inversion',['nombreInversion','inversionQueda','ejercicioFiscal','estado','fecha','hora','montoAjustado','perioIngreso','totalInversion'],array(':nombreInversion' => $montoTotalIncremento,':inversionQueda' => $montoTotalIncremento,':ejercicioFiscal' => $aniosPeriodos__ingesos."-01-01",':estado' => 'A',':fecha' => $fecha_actual,':hora' => $hora_actual,':montoAjustado' => $montoTotalIncremento,':perioIngreso' => $aniosPeriodos__ingesos,':totalInversion' => $montoIngresadoModificacion__incrementos));


			$maximoE=$objeto->getObtenerInformacionGeneral("SELECT MAX(idInversion) AS maximo FROM poa_inversion;");

			$objeto->insertSingleRow('poa_inversion_usuario',['idUsuario','idInversion','idOrganismo','perioIngreso','incrementoDecremento'],array(':idUsuario' => $idUsuario__sesion,':idInversion' => $maximoE[0][maximo],':idOrganismo' => $idOrganismo,':perioIngreso' => $aniosPeriodos__ingesos,':incrementoDecremento' => "decremento"));

			$mensaje=1;
			$jason['mensaje']=$mensaje;


		break;


		case "envioOrganismoDeportivo":

			$idOrganismoSession=$_SESSION["idOrganismoSession"];

			$compartativos=$objeto->getObtenerInformacionGeneral("SELECT idIncrementos FROM poa_incrementos_ingreso WHERE idOrganismo='$idOrganismoSession' AND perioIngreso='$aniosPeriodos__ingesos';");

			if (empty($compartativos[0][idIncrementos])) {
				
				$directorPlani=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

				$objeto->insertSingleRow('poa_incrementos_ingreso',['idUsuario','idOrganismo','fecha','hora','comentario','perioIngreso','estado','tramite'],array(':idUsuario' => $directorPlani[0][id_usuario],':idOrganismo' => $idOrganismoSession,':fecha' => $fecha_actual,':hora' => $hora_actual,':comentario' => null,':perioIngreso' => $aniosPeriodos__ingesos,':estado' => 'E',':tramite' => $tipoTramite));


			}else{


				$conexionRecuperada= new conexion();
		 		$conexionEstablecida=$conexionRecuperada->cConexion();	


				$query="UPDATE poa_incrementos_ingreso SET estado='E',comentario='$comentario' WHERE idOrganismo='$idOrganismoSession' AND perioIngreso='$aniosPeriodos__ingesos';";
				$resultado= $conexionEstablecida->exec($query);

			}


			$mensaje=1;
			$jason['mensaje']=$mensaje;


		break;


		case "observar__incrementos__decrementos":

			$conexionRecuperada= new conexion();
	 		$conexionEstablecida=$conexionRecuperada->cConexion();	


			$query="UPDATE poa_incrementos_ingreso SET estado='O',comentario='$comentario' WHERE idIncrementos='$idIncrementos';";
			$resultado= $conexionEstablecida->exec($query);

			$mensaje=1;
			$jason['mensaje']=$mensaje;


		break;


		case "incrementos__guardar__resolucion":

			$conexionRecuperada= new conexion();
	 		$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$nombre__archivo=$idOrganismo."__".$fecha_actual.".pdf";

			$direccion1="../../documentos/incrementos/resolucionDirectorPlanificacion/";

			$inversionUsuario__max=$objeto->getObtenerInformacionGeneral("SELECT idInversionUsuario FROM poa_inversion_usuario WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idInversionUsuario DESC LIMIT 1;");


			$documento=$objeto->getEnviarPdf($_FILES["documentoFinal"]['type'],$_FILES["documentoFinal"]['size'],$_FILES["documentoFinal"]['tmp_name'],$_FILES["documentoFinal"]['name'],$direccion1,$nombre__archivo);

			$objeto->insertSingleRow('poa_incrementos_ingreso_final',['idOrganismo','perioIngreso','fecha','hora','tipoTramite','idIncrementos','idInversionUsuario','documento'],array(':idOrganismo' => $idOrganismo,':perioIngreso' => $aniosPeriodos__ingesos,':fecha' => $fecha_actual,':hora' => $hora_actual,':tipoTramite' => $tipoTramite,':idIncrementos' => $idIncrementos,':idInversionUsuario' => $inversionUsuario__max[0][idInversionUsuario],':documento' => $nombre__archivo));


			$query="DELETE FROM poa_incrementos_ingreso  WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';";
			$resultado= $conexionEstablecida->exec($query);


			$query2="UPDATE poa_inversion_usuario SET incrementoDecremento=NULL WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';";
			$resultado2= $conexionEstablecida->exec($query2);

			$mensaje=1;
			$jason['mensaje']=$mensaje;


		break;

	}

	echo json_encode($jason);