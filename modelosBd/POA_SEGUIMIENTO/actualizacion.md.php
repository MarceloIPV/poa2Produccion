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

        case  "actualiza__catalogoContraloria__seguimiento":

    
            $conexionRecuperada= new conexion();
            $conexionEstablecida=$conexionRecuperada->cConexion();	

        
            $query="UPDATE `poa_catalogo_contraloria_seguimiento` SET `catalogo__elect` = '$catalogo__elect', `catalogo__subasta` = '$catalogo__subasta', `catalogo__infima` = '$catalogo__infima', `catalogo__menorCuantia` = '$catalogo__menorCuantia', `catalogo__cotizacion` = '$catalogo__cotizacion', `catalogo__licitacion` = '$catalogo__licitacion', `catalogo__menorCuantiaObras` = '$catalogo__menorCuantiaObras', `catalogo__cotizacionObras` = '$catalogo__cotizacionObras', `catalogo__licitacionObras` = '$catalogo__licitacionObras', `catalogo__precioObras` = '$catalogo__precioObras', `catalogo__contratacionDirecta` = '$catalogo__contratacionDirecta', `catalogo__contratacionListaCorta` = '$catalogo__contratacionListaCorta', `catalogo__contratacionConcursoPu` = '$catalogo__contratacionConcursoPu', `catalogo__elect__texto` = '$catalogo__elect__texto', `catalogo__elect__cantidad` = '$catalogo__elect__cantidad', `catalogo__elect__monto` = '$catalogo__elect__monto', `catalogo__subasta__texto` = ' $catalogo__subasta__texto', `catalogo__subasta__cantidad` = '$catalogo__subasta__cantidad', `catalogo__subasta__monto` = '$catalogo__subasta__monto', `catalogo__infima__texto` = '$catalogo__infima__texto', `catalogo__infima__cantidad` = '$catalogo__infima__cantidad', `catalogo__infima__monto` = '$catalogo__infima__monto', `catalogo__menorCuantia__texto` = '$catalogo__menorCuantia__texto', `catalogo__menorCuantia__cantidad` = '$catalogo__menorCuantia__cantidad', `catalogo__menorCuantia__monto` = '$catalogo__menorCuantia__monto', `catalogo__cotizacion__texto` = '$catalogo__cotizacion__texto', `catalogo__cotizacion__cantidad` = '$catalogo__cotizacion__cantidad', `catalogo__cotizacion__monto` = '$catalogo__cotizacion__monto', `catalogo__licitacion__texto` = '$catalogo__licitacion__texto', `catalogo__licitacion__cantidad` = '$catalogo__licitacion__cantidad', `catalogo__licitacion__monto` = '$catalogo__licitacion__monto', `catalogo__menorCuantiaObras__texto` = '$catalogo__menorCuantiaObras__texto', `catalogo__menorCuantiaObras__cantidad` = '$catalogo__menorCuantiaObras__cantidad', `catalogo__menorCuantiaObras__monto` = '$catalogo__menorCuantiaObras__monto', `catalogo__cotizacionObras__texto` = '$catalogo__cotizacionObras__texto', `catalogo__cotizacionObras__cantidad` = '$catalogo__cotizacionObras__cantidad', `catalogo__cotizacionObras__monto` = '$catalogo__cotizacionObras__monto', `catalogo__licitacionObras__texto` = '$catalogo__licitacionObras__texto', `catalogo__licitacionObras__cantidad` = '$catalogo__licitacionObras__cantidad', `catalogo__licitacionObras__monto` = '$catalogo__licitacionObras__monto', `catalogo__precioObras__texto` = '$catalogo__precioObras__texto', `catalogo__precioObras__cantidad` = '$catalogo__precioObras__cantidad', `catalogo__precioObras__monto` = '$catalogo__precioObras__monto', `catalogo__contratacionDirecta__texto` = '$catalogo__contratacionDirecta__texto', `catalogo__contratacionDirecta__cantidad` = '$catalogo__contratacionDirecta__cantidad', `catalogo__contratacionDirecta__monto` = '$catalogo__contratacionDirecta__monto', `catalogo__contratacionListaCorta__texto` = '$catalogo__contratacionListaCorta__texto', `catalogo__contratacionListaCorta__cantidad` = '$catalogo__contratacionListaCorta__cantidad', `catalogo__contratacionListaCorta__monto` = '$catalogo__contratacionListaCorta__monto', `catalogo__contratacionConcursoPu__texto` = '$catalogo__contratacionConcursoPu__texto', `catalogo__contratacionConcursoPu__cantidad` = '$catalogo__contratacionConcursoPu__cantidad', `catalogo__contratacionConcursoPu__monto` = '$catalogo__contratacionConcursoPu__monto', `noAplica__3` = '$noAplica__3' WHERE `idCatalogo` = $idCatalogo";
            
            $resultado= $conexionEstablecida->exec($query);
    
            $mensaje=1;
            $jason['mensaje']=$mensaje;
    
        break;

		

    }

	echo json_encode($jason);

