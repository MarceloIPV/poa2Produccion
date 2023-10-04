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

		case "eliminar__incre__decrementos":

			$conexionRecuperada= new conexion();
	 		$conexionEstablecida=$conexionRecuperada->cConexion();	

			$idUsuario__sesion=$_SESSION["idUsuario"];

			$elementos=$objeto->getObtenerInformacionGeneral("SELECT idInversionUsuario,idInversion FROM poa_inversion_usuario WHERE idOrganismo='$idOrganismo' AND incrementoDecremento='$identificador__pagina' AND perioIngreso='$aniosPeriodos__ingesos';");

			foreach ($elementos as $valor) {

			 	$query="DELETE FROM poa_inversion_usuario WHERE idInversionUsuario='".$valor['idInversionUsuario']."';";
			 	$resultado= $conexionEstablecida->exec($query);


			 	$query2="DELETE FROM poa_inversion WHERE idInversion='".$valor['idInversion']."';";
			 	$resultado2= $conexionEstablecida->exec($query2);

			}

			$mensaje=1;
			$jason['mensaje']=$mensaje;


		break;



	}

	echo json_encode($jason);