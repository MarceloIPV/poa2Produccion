<?php

ob_start();

extract($_POST);

require_once "../../config/config2.php";

require_once "../../modelosBd/convertirLetras/NumeroALetras.php";

require_once "../../config/files.php";

use Luecano\NumeroALetras\NumeroALetras;



/*============================================
	=            Parametros Iniciales            =
	============================================*/

date_default_timezone_set("America/Guayaquil");

$fecha_actual = date('Y-m-d');

$hora_actual = date('H:i:s');

$hora_actual2 = date('s');
/*=====  End of Parametros Iniciales  ======*/


session_start();

$aniosPeriodos__ingesos = $_SESSION["selectorAniosA"];

$objeto = new usuarioAcciones();

$idOrganismo = $idOrganismo__m;

$informacionCompleto = $objeto->getInformacionCompletaOrganismoDeportivoConsu($idOrganismo);
$informacionCompletoDosI = $objeto->getInformacionCompletaOrganismoDeportivoConsuDos($idOrganismo);


$directorConjunto = $objeto->getDirectorPlani();


$funcionario = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',a.nombre,a.apellido) AS nombreFuncionario,(SELECT a1.descripcionFisicamenteEstructura FROM th_fisicamenteestructura AS a1 WHERE a1.id_FisicamenteEstructura=a.fisicamenteEstructura LIMIT 1) AS descripcionInfraestructurasF,(SELECT a1.id_FisicamenteEstructura FROM th_fisicamenteestructura AS a1 WHERE a1.id_FisicamenteEstructura=a.fisicamenteEstructura LIMIT 1) AS idFisicamenteEstructuras FROM th_usuario AS a WHERE a.id_usuario='$idUsuarioEn';");

$director = $objeto->getObtenerInformacionGeneral("SELECT (SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM th_usuario AS a1 WHERE a1.id_usuario=a.PersonaACargo LIMIT 1) AS nombreDirector,(SELECT a1.PersonaACargo FROM th_usuario AS a1 WHERE a1.id_usuario=a.PersonaACargo LIMIT 1) AS PersonaACargoDirector FROM th_usuario AS a WHERE a.id_usuario='$idUsuarioEn';");

if (isset($idOrganismo)) {
	$fecha__anios__periodos = $objeto->getObtenerInformacionGeneral("SELECT fecha FROM poa_preliminar_envio WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';");
}

// $subsecretarios=$objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',nombre,apellido) AS nombreSubses FROM th_usuario WHERE id_usuario='".$director[0][PersonaACargoDirector]."';");

if ($tipoPdf != "asignacionTecho" && $tipoPdf != "asignacion__paid__presupuestarias") {

	$finanCompara = false;
	$instaCompara = false;
	$subsesCompara = false;

	/*=====================================================
	=            Rangos ministerio del deporte            =
	=====================================================*/

	$corInsta = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreInsta FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='1' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$directorPlanificacion = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreUsuario,c.descripcionFisicamenteEstructura,d.nombre FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario INNER JOIN th_fisicamenteestructura AS c ON c.id_FisicamenteEstructura=a.fisicamenteEstructura INNER JOIN th_roles AS d ON d.id_rol=b.id_rol WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$corFinan = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreFinan FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='2' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$subsesAcFi = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreSubsesA FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='7' AND a.fisicamenteEstructura='26' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");


	$subsesAlto__rendimiento__modificaciones = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreSubsesA FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='7' AND a.fisicamenteEstructura='24' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");


	/*=====================================
	=            Planificación            =
	=====================================*/

	$cor__planificacion = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreInsta FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='3' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$dir__planificacion = $objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreInsta FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");


	/*=====  End of Planificación  ======*/


	$preliminarEnvio = $objeto->getObtenerInformacionGeneral("SELECT fecha FROM poa_preliminar_envio WHERE idOrganismo='$idOrganismo';");

	$fechaAsinacion = $objeto->getObtenerInformacionGeneral("SELECT fecha,nombreInversion FROM poa_inversion_usuario AS a INNER JOIN poa_inversion AS b ON a.idInversion=b.idInversion WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idInversionUsuario DESC;");

	$tipoOrganismo = $objeto->getObtenerInformacionGeneral("SELECT b.nombreTipo FROM poa_competencia_organismo_competencia AS a INNER JOIN poa_tipo_organismo AS b ON a.idTipoOrganismo=b.idTipoOrganismo WHERE a.idOrganismo='$idOrganismo' AND (b.nombreTipo LIKE '%ecuatorianas por%' OR b.nombreTipo LIKE '%pico Ecuatoriano%'  OR b.nombreTipo LIKE '%Federaciones Ecuatorianas de Deporte Adaptado%' OR b.nombreTipo LIKE '%Militar Ecuatoriana%' OR b.nombreTipo LIKE '%Policial Ecuatoriana%' OR b.nombreTipo LIKE '%discapacidad%' OR b.nombreTipo LIKE '%adaptado%');");

	$tipoOrganismoDiscapaci = $objeto->getObtenerInformacionGeneral("SELECT b.nombreTipo FROM poa_competencia_organismo_competencia AS a INNER JOIN poa_tipo_organismo AS b ON a.idTipoOrganismo=b.idTipoOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.nombreTipo LIKE '%adaptado%' OR b.nombreTipo LIKE '%discapa%';");

	$tipoOrganismoFormativo = $objeto->getObtenerInformacionGeneral("SELECT b.nombreTipo FROM poa_competencia_organismo_competencia AS a INNER JOIN poa_tipo_organismo AS b ON a.idTipoOrganismo=b.idTipoOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.nombreTipo LIKE '%deportivas provinciales%' OR b.nombreTipo LIKE '%deportivas estudiantiles%' OR b.nombreTipo LIKE '%deportivas estudiantiles%' OR b.nombreTipo LIKE '%ecuador%';");

	$tipoOrganismoAltoRendimiento = $objeto->getObtenerInformacionGeneral("SELECT b.nombreTipo FROM poa_competencia_organismo_competencia AS a INNER JOIN poa_tipo_organismo AS b ON a.idTipoOrganismo=b.idTipoOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.nombreTipo LIKE '%Ecuatoriano%' OR b.nombreTipo LIKE '%Ecuatoriana%' OR b.nombreTipo LIKE '%ecuatorianas%' OR b.nombreTipo LIKE '%por deporte%';");

	$tipoOrganismoRecreativo = $objeto->getObtenerInformacionGeneral("SELECT b.nombreTipo FROM poa_competencia_organismo_competencia AS a INNER JOIN poa_tipo_organismo AS b ON a.idTipoOrganismo=b.idTipoOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.nombreTipo LIKE '%Ligas Deportivas Barriales y Parroquiales del ecuador%' OR b.nombreTipo LIKE '%Asociaciones de ligas barriales y parroquiales%' OR b.nombreTipo LIKE '%Federaciones de ligas provinciales y cantonales, ligas deportivas barriales y parroquiales del Distrito Metropolitano de Quito%';");

	$tipoOrganismoZonales = $objeto->getObtenerInformacionGeneral("SELECT b.nombreTipo FROM poa_competencia_organismo_competencia AS a INNER JOIN poa_tipo_organismo AS b ON a.idTipoOrganismo=b.idTipoOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.nombreTipo LIKE '%deportivas cantonales%' OR b.nombreTipo LIKE '%Deportivas Barriales y Parroquiales%';");


	/*================================================
	=            Suma actividades e itmes            =
	================================================*/

	$actividad1 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='1' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	$actividad2 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='2' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	$actividad3 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='3' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	$actividad4 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='4' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	$actividad5 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='5' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	$actividad6 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='6' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	$actividad7 = $objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS sumaItem FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='7' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	/*=====  End of Suma actividades e itmes  ======*/


	/*==================================
	=            Suma meses            =
	==================================*/

	$enero = $objeto->getObtenerInformacionGeneral("SELECT SUM(enero) AS enero FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$febrero = $objeto->getObtenerInformacionGeneral("SELECT SUM(febrero) AS febrero FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$marzo = $objeto->getObtenerInformacionGeneral("SELECT SUM(marzo) AS marzo FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$abril = $objeto->getObtenerInformacionGeneral("SELECT SUM(abril) AS abril FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$mayo = $objeto->getObtenerInformacionGeneral("SELECT SUM(mayo) AS mayo FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$junio = $objeto->getObtenerInformacionGeneral("SELECT SUM(junio) AS junio FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$julio = $objeto->getObtenerInformacionGeneral("SELECT SUM(julio) AS julio FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$agosto = $objeto->getObtenerInformacionGeneral("SELECT SUM(agosto) AS agosto FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$septiembre = $objeto->getObtenerInformacionGeneral("SELECT SUM(septiembre) AS septiembre FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$octubre = $objeto->getObtenerInformacionGeneral("SELECT SUM(octubre) AS octubre FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$noviembre = $objeto->getObtenerInformacionGeneral("SELECT SUM(noviembre) AS noviembre FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
	$diciembre = $objeto->getObtenerInformacionGeneral("SELECT SUM(diciembre) AS diciembre FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

	/*=====  End of Suma meses  ======*/




	if (!empty($tipoOrganismoDiscapaci[0][nombreTipo])) {

		$variableDireccion_c = "organizaciones deportivas de Deporte Adaptado para personas con discapacidad";
	} else if (!empty($tipoOrganismoFormativo[0][nombreTipo])) {

		$variableDireccion_c = "organizaciones deportivas de Deporte formativo";
	} else if (!empty($tipoOrganismoAltoRendimiento[0][nombreTipo])) {

		$variableDireccion_c = "organizaciones deportivas de Alto rendimiento";
	} else if (!empty($tipoOrganismoRecreativo[0][nombreTipo])) {

		$variableDireccion_c = "organizaciones deportivas de Recreación";
	} else {

		$variableDireccion_c = "organizaciones zonales";
	}


	if (!empty($tipoOrganismo[0][nombreTipo])) {
		$variableTipoOrganizacion = "para la Dirección de Deporte Convencional para el Alto Rendimiento y Dirección de Deporte para Personas con Discapacidad";
	} else {
		$variableTipoOrganizacion = "para la Dirección de Deporte Formativo y Educación física y Dirección de Recreación";
	}


	/*=====  End of Rangos ministerio del deporte  ======*/

	$arrayAsignacion = explode("-", $fechaAsinacion[0][fecha]);

	setlocale(LC_TIME, "spanish");

	$anioAsignacion = date($arrayAsignacion[0]);
	$mesAsignacion = date($arrayAsignacion[1]);
	$dateObjAsignacion   = DateTime::createFromFormat('!m', $mesAsignacion);
	$monthNameAsignacion = strftime('%B', $dateObjAsignacion->getTimestamp());
	$diaAsignacion = date($arrayAsignacion[2]);


	setlocale(LC_TIME, "spanish");

	$arrayAsignacionDos = explode("-", $preliminarEnvio[0][fecha]);

	$anioAsignacionDos = date($arrayAsignacionDos[0]);
	$mesAsignacionDos = date($arrayAsignacionDos[1]);
	$dateObjAsignacionDos   = DateTime::createFromFormat('!m', $mesAsignacionDos);

	if (!empty($dateObjAsignacionDos)) {

		$monthNameAsignacionDos = strftime('%B', $dateObjAsignacionDos->getTimestamp());
		$diaAsignacionDos = date($arrayAsignacionDos[2]);
	}


	if ($funcionario[0][idFisicamenteEstructuras] == "13" or $funcionario[0][idFisicamenteEstructuras] == "19") {

		$subrectariaNombres = "SUBSECRETARIA DE DESARROLLO DE LA ACTIVIDAD FÍSICA";
	} else if ($funcionario[0][idFisicamenteEstructuras] == "12" or $funcionario[0][idFisicamenteEstructuras] == "14") {

		$subrectariaNombres = "SUBSECRETARIA DE DEPORTE DE ALTO RENDIMIENTO";

		if ($funcionario[0][idFisicamenteEstructuras] == "12") {

			$altoRendimientoDirecciones__modficaciones = "DIRECCIÓN DE DEPORTE CONVENCIONAL PARA EL ALTO RENDIMIENTO";
		} else if ($funcionario[0][idFisicamenteEstructuras] == "14") {

			$altoRendimientoDirecciones__modficaciones = "DIRECCIÓN DE DEPORTE PARA PERSONAS CON DISCAPACIDAD";
		}
	} else if ($funcionario[0][idFisicamenteEstructuras] == "5" or $funcionario[0][idFisicamenteEstructuras] == "7") {

		$subrectariaNombres = "COORDINACIÓN GENERAL ADMINISTRATIVA FINANCIERA";
	} else if ($funcionario[0][idFisicamenteEstructuras] == "6" or $funcionario[0][idFisicamenteEstructuras] == "15") {

		$subrectariaNombres = "COORDINACION DE ADMINISTRACION E INFRAESTRUCTURA DEPORTIVA";
	}else if($funcionario[0][idFisicamenteEstructuras] == "18"){
		$DireccionPlanificacion = "DIRECCIÓN DE PLANIFICACIÓN E INVERSIÓN";
	}
}



$inversion__maximo = $objeto->getObtenerInformacionGeneral("SELECT MAX(idInversion) AS maximo FROM poa_inversion WHERE perioIngreso='$aniosPeriodos__ingesos';");


/*==============================
	=            Fechas            =
	==============================*/

setlocale(LC_TIME, "spanish");

$anio = date('Y');

//$anio="2022";

$anio__acutal = date('m');

$mes = date('m');

$dateObj   = DateTime::createFromFormat('!m', $mes);
$monthName = strftime('%B', $dateObj->getTimestamp());

$dia = date('d');

/*=====  End of Fechas  ======*/



$horizontal = false;

switch ($tipoPdf) {


	case "informeNotificacion__Incrementos__Decrementos":

		if ($tipoInforme == "incremento") {
			$tipoInformeA = "Incremento";
		} else if ($tipoInforme == "decremento") {
			$tipoInformeA = "Decremento";
		}

		$parametro1 = VARIABLE__BACKEND . "incrementosDecrementos/notificacion".$tipoInformeA."/";
		$parametro2 = $idOrganismo . "__" . "Notificacion" . $tipoInformeA . "__" . $fecha_actual . "__" . $hora_actual2;
		$parametro3 = $idOrganismo . "__" . "Notificacion" . $tipoInformeA . "__" . $fecha_actual . "__" . $hora_actual2;

		if ($tipoInforme == "incremento") {
			$tipoInformeT = "INCREMENTO";
			$signo = "+";
		} else if ($tipoInforme == "decremento") {
			$tipoInformeT = "DECREMENTO";
			$signo = "-";
		}

		$documentoCuerpo .= "
						<table style='width:100%!important;'>
							<tr>
								<th>
								
									<center>
										".$DireccionPlanificacion."
									</center>
								
								</th>
							</tr>
						</table>";

		$documentoCuerpo .= "

							<table style='width:100%!important; margin-top:2em;'>
			
								<tr>

									<th>

										<center>

											INFORME DE NOTIFICACIÓN DE " . $tipoInformeT ."

										</center>

									</th>

								</tr>

							</table>

							<br><br>
							<table>
								<thead>
									<tr>
										<th style='width:30%!important';>DECLARACIÓN NRO. Nro.</th>
										<td>" . $inversion__maximo[0][maximo] . "</td>
									</tr>
									<tr>
										<th style='width:30%!important;'>Fecha:</th>
										<td>" . $fecha_actual . "</td> 
									</tr>
									<tr>
										<th style='width:30%!important;'>Hora:</th>
										<td>" . $hora_actual . "</td> 
									</tr>
								</thead>
							</table>
							<br>


							<table style='width:100%!important; margin-top:2em;'>

								<tr>

									<th>
										<center>

										APLICATIVO DE SEGUIMIENTO Y EVALUACIÓN AL POA" . $aniosPeriodos__ingesos . "

										</center>
									
									</th>

								</tr>

							</table>

							<table style='width:100%!important; margin-top:2em;'>

								<thead>
									<tr>
										<th style='width:30%!important';>ORGANIZACIÓN DEPORTIVA:</th>
										<td>" . strtoupper($informacionCompleto[0][nombreOrganismo]) . "</td>
									</tr>
									<tr>
										<th style='width:30%!important;'>NÚMERO DE RUC:</th>
										<td>" . $informacionCompleto[0][ruc] . "</td> 
									</tr>
									<tr>
										<th style='width:30%!important;'>CORREO ELECTRÓNICO:</th>
										<td>" . $informacionCompleto[0][correo] . "</td> 
									</tr>
								</thead>

							</table>
							<br>
						
							<table style='width:100%!important; margin-top:2em;'>

								<thead>
									<tr>
										<th style='width:30%!important';>AÑO REPORTADO:</th>
										<td>" . $aniosPeriodos__ingesos . "</td>
									</tr>
								</thead>

							</table>

				
							<table style='width:100%!important; margin-top:2em;'>
								<tr>
									<td style='text-align:justify!important;'>
										En mi calidad de representante legal de la <span style='font-weight:bold!important;'>" . $informacionCompleto[0][nombreOrganismo] . "</span> CERTIFICO que los procedimientos de contratación pública EJECUTADOS y detallados para la adquisición de bienes, contratación de servicios, consultorías y obras a financiados con recursos públicos se encuentran de conformidad a lo establecido en la Ley Orgánica del Sistema Nacional de Contratación Pública, su Reglamento General de aplicación, resoluciones expedidas por el SERCOP y demás normativa legal vigente. Además, CONFIRMO que esta Organización Deportiva cumple con lo establecido en las Normas de Control Interno, Reglamento General Sustitutivo para la Administración, Utilización, Manejo y Control de los Bienes e Inventarios del Sector Público, Reglamento Sustitutivo para el Control de los Vehículos del Sector Público y demás normas emitidas por la Contraloría General del Estado.
									</td>
								</tr>
                                
							</table>
							
							<table style='width:100%!important; margin-top:2em;'>
								<tr>
									<th style='width:30%!important';>VALOR $tipoInformeT:</th>
									<td>" . $montoIngresadoModificacion__incrementos . "</td>
								</tr>
								<tr>
									<th style='width:30%!important';>VALOR TECHO $signo $tipoInformeT:</th>
									<td>" . $total__Incrementos_M_ . "</td>
								</tr>
							
							</table>
							";


							if($btnEnviarNotificacion == 1){

								$directorPlani=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

								$inserta=$objeto->insertSingleRow('poa_incrementos_notificacion',['idUsuario','idOrganismo','fecha','hora','perioIngreso','estado','documento'],array(':idUsuario' => $directorPlani[0][id_usuario],':idOrganismo' => $idOrganismo,':fecha' => $fecha_actual,':hora' => $hora_actual,':perioIngreso' => $aniosPeriodos__ingesos,':estado' => 'E',':documento' => "$parametro3.pdf"));
							}


		break;
}


?>

<html>

<head>

	<link href="../../layout/styles/css/estilosPdf.css" rel="stylesheet" type="text/css" media="all">

</head>

<body>

	<?php if ($aniosPeriodos__ingesos == "2022") { ?>
		<div id="" style="position: relative; left: 10%;">
			<img src="../../images/headerPdf.png" />
		</div>

		<div id="footer">
			<img src="../../images/footer.png" />
		</div>
	<?php } else { ?>
		<div id="" style="position: relative; left: 10%;">
			<img style=" width:20%!important; margin-bottom:2em!important;" src="../../images/headerPdf2.png" />
		</div>

		<div id="footer">
			<img style=" width:100%!important; margin-top:0em!important; margin-bottom:0em!important;" src="../../images/footer2.png" />
		</div>
	<?php } ?>


	<div id="content">

		<?= $documentoCuerpo ?>

	</div>

</body>

</html>

<?php

include_once "../../dompdf/autoload.inc.php";

use Dompdf\Dompdf;

$dompdf = new Dompdf();

if ($horizontal == true) {
	// Definimos el tamaño y orientación del papel que queremos.h
	$dompdf->setPaper('A3', 'landscape');
}



$dompdf->loadHtml(ob_get_clean());

$dompdf->render();

$canvas = $dompdf->get_canvas();
$canvas->page_text(510, 12, "Página {PAGE_NUM} de {PAGE_COUNT}", "helvetica", 8, array(0, 0, 0)); //header//header
$canvas->page_text(54, 778, "", "helvetica", 8, array(0, 0, 0)); //footer

$contenido = $dompdf->output();

$nombreDelDocumento = $parametro1  .$parametro3 . ".pdf";

$bytes = file_put_contents($nombreDelDocumento, $contenido);


if ($tipoPdf != "") {

	$dompdf->stream($parametro2);
}
