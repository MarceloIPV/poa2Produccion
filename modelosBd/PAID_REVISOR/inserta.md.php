<?php
	
	extract($_POST);

	require_once "../../config/config2.php";

	/*============================================
	=            Parametros Iniciales            =
	============================================*/
	
	date_default_timezone_set("America/Guayaquil");

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');

	
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

		
    }

	echo json_encode($jason);