<?php
	
	extract($_POST);

	
	define('CONTROLADOR7', '../../conexion/');

	require_once CONTROLADOR7.'conexion.php';

	require_once "../../config/config2.php";

	/*============================================
	=            Parametros Iniciales            =
	============================================*/
	
	date_default_timezone_set("America/Guayaquil");

	$anio = date('Y');

	//$anio='2022';

	$fecha_actual = date('Y-m-d');

	$hora_actual= date('H:i:s');	
	
	/*=====  End of Parametros Iniciales  ======*/

	session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
	

	$objeto= new usuarioAcciones();

	switch ($tipo) {


		case "selecciona__documentacion__generada__final__funcionario":

			$informacionObjeto=$objeto->getObtenerInformacionGeneral("SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS ruc, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS nombreOrganismo,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo) AS provincia,(SELECT a2.nombreCanton FROM poa_organismo AS a1 INNER JOIN in_md_canton AS a2 ON a1.idCanton=a2.idCanton WHERE a1.idOrganismo=a.idOrganismo) AS nombreCanton,(SELECT a2.nombreParroquia FROM poa_organismo AS a1 INNER JOIN in_md_parroquia AS a2 ON a1.idParroquia=a2.idParroquia WHERE a1.idOrganismo=a.idOrganismo) AS nombreParroquia,YEAR(a.fecha) AS anio,REPLACE(a.trimestre,'Trimestre','') AS trimestre,a.trimestre AS trimestreEnviado,a.documento FROM poa_seguimiento_declaracion AS a WHERE a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo,a.trimestre ORDER BY a.idOrganismo;");


			$jason['informacionObjeto']=$informacionObjeto;


		break;


		case "selecciona__documentacion__generada":

			$primerTrimestre=$objeto->getObtenerInformacionGeneral("SELECT fecha,trimestre,documento,perioIngreso FROM poa_seguimiento_declaracion WHERE idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre='primerTrimestre' ORDER BY idDeclaracion DESC LIMIT 1;");
			$segundoTrimestre=$objeto->getObtenerInformacionGeneral("SELECT fecha,trimestre,documento,perioIngreso FROM poa_seguimiento_declaracion WHERE idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre='segundoTrimestre' ORDER BY idDeclaracion DESC LIMIT 1;");
			$tercerTrimestre=$objeto->getObtenerInformacionGeneral("SELECT fecha,trimestre,documento,perioIngreso FROM poa_seguimiento_declaracion WHERE idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre='tercerTrimestre' ORDER BY idDeclaracion DESC LIMIT 1;");
			$cuartoTrimestre=$objeto->getObtenerInformacionGeneral("SELECT fecha,trimestre,documento,perioIngreso FROM poa_seguimiento_declaracion WHERE idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre='cuartoTrimestre' ORDER BY idDeclaracion DESC LIMIT 1;");

			$jason['primerTrimestre']=$primerTrimestre;
			$jason['segundoTrimestre']=$segundoTrimestre;
			$jason['tercerTrimestre']=$tercerTrimestre;
			$jason['cuartoTrimestre']=$cuartoTrimestre;

		break;

		case "lineas__modificaciones":

			$fisicamenteEstructura=$_SESSION["fisicamenteEstructura"];

			if ($fisicamenteEstructura==1 || $fisicamenteEstructura==6 || $fisicamenteEstructura==15) {

				$informacionObtenida=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosOrigen AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoOrigen,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosDestino AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoDestino,a.actividadOrigen AS idActividadesOrigen,a.actividadDestino AS idActividadesDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=c.idActividad WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='diferentes' AND a.actividadDestino='2' GROUP BY a.idOrigenDestino;");

				$informacionObtenida__honorarios="N/A";
				$informacionObtenida__honorarios__items="N/A";
				$informacionObtenida__sueldos__salarios="N/A";
				$informacionObtenida__sueldos__items="N/A";
				$informacionObtenida__desvinculaciones="N/A";

				$informacionObtenida__honorarios__varios="N/A";
				$informacionObtenida__sueldos__varios="N/A";
				$informacionObtenida__desvinculacion__varios="N/A";

				$informacionObtenida__honorarios__sueldos="N/A";
				$informacionObtenida__sueldos__honorarios="N/A";


			}else if ($fisicamenteEstructura==2 || $fisicamenteEstructura==5) {

				$informacionObtenida=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosOrigen AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoOrigen,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosDestino AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoDestino,a.actividadOrigen AS idActividadesOrigen,a.actividadDestino AS idActividadesDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=c.idActividad WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='diferentes' AND a.actividadDestino='1' GROUP BY a.idOrigenDestino;");

				$informacionObtenida__honorarios="N/A";
				$informacionObtenida__honorarios__items="N/A";
				$informacionObtenida__sueldos__salarios="N/A";
				$informacionObtenida__sueldos__items="N/A";
				$informacionObtenida__desvinculaciones="N/A";

				$informacionObtenida__honorarios__varios="N/A";
				$informacionObtenida__sueldos__varios="N/A";
				$informacionObtenida__desvinculacion__varios="N/A";

				$informacionObtenida__honorarios__sueldos="N/A";
				$informacionObtenida__sueldos__honorarios="N/A";


			}else if ($fisicamenteEstructura!=1 && $fisicamenteEstructura!=2) {

				$informacionObtenida=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosOrigen AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoOrigen,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosDestino AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoDestino,a.actividadOrigen AS idActividadesOrigen,a.actividadDestino AS idActividadesDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=c.idActividad WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='diferentes' AND (a.actividadDestino='3' OR a.actividadDestino='4' OR a.actividadDestino='5' OR a.actividadDestino='6' OR a.actividadDestino='7') GROUP BY a.idOrigenDestino;");


				$informacionObtenida__honorarios__varios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,CONCAT_WS(' ','OPERACIÓN DEPORTIVA') AS actividadDestino,c.nombres AS eventosDestino,c.nombres AS idFinancierioDestino,c.nombres AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,CONCAT_WS(' ','4') AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,c.idHonorarios AS idHonorariosDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios__item';");

				$informacionObtenida__sueldos__varios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,CONCAT_WS(' ','OPERACIÓN DEPORTIVA') AS actividadDestino,c.nombres AS eventosDestino,c.nombres AS idFinancierioDestino,c.nombres AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad, CONCAT_WS(' ','4') AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,c.idSueldos AS idSueldosDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos__item';");

				$informacionObtenida__desvinculacion__varios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=c.idActividad WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='desvinculacion';");



				$informacionObtenida__honorarios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(UPPER(a1.nombreItem), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioOrigen, (SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioDestino, (SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idHonorarios AS idHonorariosOrigen,c.idHonorarios AS idHonorariosDestino,a.idModificacionDerfinitiva,a.calificacion AS modificacionEstado,a.observaciones FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios' GROUP BY a.idOrigenDestino;");
	
				$informacionObtenida__honorarios__items=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idHonorarios AS idHonorariosOrigen,a.idModificacionDerfinitiva,a.calificacion AS modificacionEstado,a.observaciones FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios__item' GROUP BY a.idOrigenDestino;");

				$informacionObtenida__sueldos__salarios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen,c.idSueldos AS idSueldosDestino,a.idModificacionDerfinitiva,a.calificacion AS modificacionEstado,a.observaciones  FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos' GROUP BY a.idOrigenDestino;");

				$informacionObtenida__sueldos__items=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen,a.idModificacionDerfinitiva,a.calificacion AS modificacionEstado,a.observaciones FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos__item' GROUP BY a.idOrigenDestino;");

				$informacionObtenida__desvinculaciones=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=a.eventosDestino) AS idFinancierioDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=a.eventosDestino) AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino, a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,b.enero AS eneroDestino__sumando,b.febrero AS febreroDestino__sumando,b.marzo AS marzoDestino__sumando,b.abril AS abrilDestino__sumando,b.mayo AS mayoDestino__sumando,b.junio AS junioDestino__sumando,b.julio AS julioDestino__sumando,b.agosto AS agostoDestino__sumando,b.septiembre AS septiembreDestino__sumando,b.octubre AS octubreDestino__sumando,b.noviembre AS noviembreDestino__sumando,b.diciembre AS diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen,a.idModificacionDerfinitiva,a.calificacion AS modificacionEstado,a.observaciones FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino INNER JOIN poa_item AS d ON d.idItem=a.idFinancierioDestino  WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='desvinculacion' GROUP BY a.idOrigenDestino;");
		
				$informacionObtenida__honorarios__sueldos=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idHonorarios AS idHonorariosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios__item';");

				$informacionObtenida__sueldos__honorarios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(UPPER(a1.nombreItem), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos__item';");		

			}

			$informacionObtenida__documentos=$objeto->getObtenerInformacionGeneral("SELECT documentoAlto,documentoDesarrollo,documentoInstalaciones,documentoAdministrativo,documentoPlanificacion,documentoInfraestructura,idUsuarioInfraR,idInstalacionesR FROM poa_modificaciones_envio_inicial WHERE idModificacionDerfinitiva='$idLinea';");

			$listado__actividades__totales=$objeto->getObtenerInformacionGeneral("SELECT idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades FROM poa_actividades;");


			$actividadSuma__m1=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='1' GROUP BY idOrganismo;");
			$actividadSuma__m2=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='2' GROUP BY idOrganismo;");
			$actividadSuma__m3=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='3' GROUP BY idOrganismo;");
			$actividadSuma__m4=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='4' GROUP BY idOrganismo;");
			$actividadSuma__m5=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='5' GROUP BY idOrganismo;");
			$actividadSuma__m6=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='6' GROUP BY idOrganismo;");
			$actividadSuma__m7=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalPlanifiacionOrigen) AS totalInicial FROM poa_modificaciones_origen_destino WHERE idModificacionDerfinitiva='$idLinea' AND periodoIngreso='$aniosPeriodos__ingesos' AND actividadDestino='7' GROUP BY idOrganismo;");


			$jason['actividadSuma__m1']=$actividadSuma__m1[0][totalInicial];
			$jason['actividadSuma__m2']=$actividadSuma__m2[0][totalInicial];
			$jason['actividadSuma__m3']=$actividadSuma__m3[0][totalInicial];
			$jason['actividadSuma__m4']=$actividadSuma__m4[0][totalInicial];
			$jason['actividadSuma__m5']=$actividadSuma__m5[0][totalInicial];
			$jason['actividadSuma__m6']=$actividadSuma__m6[0][totalInicial];
			$jason['actividadSuma__m7']=$actividadSuma__m7[0][totalInicial];

			$jason['listado__actividades__totales']=$listado__actividades__totales;

			$jason['idUsuarioInfraRObtenido']=$informacionObtenida__documentos[0][idUsuarioInfraR];
			$jason['idInstalacionesRObtenido']=$informacionObtenida__documentos[0][idInstalacionesR];

			$jason['informacionObtenida']=$informacionObtenida;
			$jason['informacionObtenida__honorarios']=$informacionObtenida__honorarios;
			$jason['informacionObtenida__honorarios__items']=$informacionObtenida__honorarios__items;

			$jason['informacionObtenida__sueldos__salarios']=$informacionObtenida__sueldos__salarios;
			$jason['informacionObtenida__sueldos__items']=$informacionObtenida__sueldos__items;
			$jason['informacionObtenida__desvinculaciones']=$informacionObtenida__desvinculaciones;		

			$jason['informacionObtenida__documentos']=$informacionObtenida__documentos;	


			$jason['informacionObtenida__honorarios__varios']=$informacionObtenida__honorarios__varios;
			$jason['informacionObtenida__sueldos__varios']=$informacionObtenida__sueldos__varios;
			$jason['informacionObtenida__desvinculacion__varios']=$informacionObtenida__desvinculacion__varios;		

			$jason['informacionObtenida__honorarios__sueldos']=$informacionObtenida__honorarios__sueldos;
			$jason['informacionObtenida__sueldos__honorarios']=$informacionObtenida__sueldos__honorarios;

		break;

		case "modificaciones__enviadas":

			$idOrganismoSession=$_SESSION["idOrganismoSession"];

			$informacionObtenida=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosOrigen AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoOrigen,(SELECT a1.idPda FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera WHERE a1.nombreEvento=a.eventosDestino AND a2.idOrganismo=a.idOrganismo ORDER BY a1.idPda DESC LIMIT 1) AS idEventoDestino,a.actividadOrigen AS idActividadesOrigen,a.actividadDestino AS idActividadesDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=c.idActividad WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='diferentes';");

			$informacionObtenida__honorarios__varios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,CONCAT_WS(' ','OPERACIÓN DEPORTIVA') AS actividadDestino,c.nombres AS eventosDestino,c.nombres AS idFinancierioDestino,c.nombres AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,CONCAT_WS(' ','4') AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,c.idHonorarios AS idHonorariosDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios__item';");


			$informacionObtenida__sueldos__varios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,CONCAT_WS(' ','OPERACIÓN DEPORTIVA') AS actividadDestino,c.nombres AS eventosDestino,c.nombres AS idFinancierioDestino,c.nombres AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad, CONCAT_WS(' ','4') AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,c.idSueldos AS idSueldosDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos__item';");

			$informacionObtenida__desvinculacion__varios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=c.idActividad WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='desvinculacion';");


			$informacionObtenida__honorarios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(UPPER(a1.nombreItem), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioOrigen, (SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioDestino, (SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idHonorarios AS idHonorariosOrigen,c.idHonorarios AS idHonorariosDestino FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios';");

			$informacionObtenida__honorarios__items=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idHonorarios AS idHonorariosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios__item';");

			$informacionObtenida__sueldos__salarios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen,c.idSueldos AS idSueldosDestino  FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos';");

			$informacionObtenida__sueldos__items=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos__item';");

			$informacionObtenida__desvinculaciones=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=a.eventosDestino) AS idFinancierioDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=a.eventosDestino) AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino, a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,b.enero AS eneroDestino__sumando,b.febrero AS febreroDestino__sumando,b.marzo AS marzoDestino__sumando,b.abril AS abrilDestino__sumando,b.mayo AS mayoDestino__sumando,b.junio AS junioDestino__sumando,b.julio AS julioDestino__sumando,b.agosto AS agostoDestino__sumando,b.septiembre AS septiembreDestino__sumando,b.octubre AS octubreDestino__sumando,b.noviembre AS noviembreDestino__sumando,b.diciembre AS diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.idFinancierioOrigen WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='desvinculacion';");


				$informacionObtenida__honorarios__sueldos=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idHonorarios AS idHonorariosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='honorarios__item';");

			$informacionObtenida__sueldos__honorarios=$objeto->getObtenerInformacionGeneral("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,(SELECT a1.nombreItem FROM poa_item AS a1 WHERE a1.idItem='97') AS idFinancierioOrigen,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='97') AS itemPreesupuestarioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(UPPER(a1.nombreItem), 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_item AS a1 WHERE a1.idItem='71') AS idFinancierioDestino,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem='71') AS itemPreesupuestarioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,b.idActividad AS idOrigenActividad,c.idActividad AS idDestinoActividad,a.idFinancierioOrigen AS idMatrizOrigen, a.idFinancierioDestino AS idMatrizDestino,a.identificadorPaginaReal,b.idSueldos AS idSueldosOrigen FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idOrganismo='$idOrganismoSession' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.estado IS NULL AND a.identificadorPaginaReal='sueldos__item';");


			$jason['informacionObtenida']=$informacionObtenida;
			$jason['informacionObtenida__honorarios']=$informacionObtenida__honorarios;
			$jason['informacionObtenida__honorarios__items']=$informacionObtenida__honorarios__items;

			$jason['informacionObtenida__sueldos__salarios']=$informacionObtenida__sueldos__salarios;
			$jason['informacionObtenida__sueldos__items']=$informacionObtenida__sueldos__items;
			$jason['informacionObtenida__desvinculaciones']=$informacionObtenida__desvinculaciones;

			$jason['informacionObtenida__honorarios__sueldos']=$informacionObtenida__honorarios__sueldos;
			$jason['informacionObtenida__sueldos__honorarios']=$informacionObtenida__sueldos__honorarios;

			$jason['informacionObtenida__honorarios__varios']=$informacionObtenida__honorarios__varios;
			$jason['informacionObtenida__sueldos__varios']=$informacionObtenida__sueldos__varios;
			$jason['informacionObtenida__desvinculacion__varios']=$informacionObtenida__desvinculacion__varios;


		break; 

		case "honorarios__replicas":

			$informacion__obtenidas=$objeto->getObtenerInformacionGeneral("SELECT idHonorarios FROM poa_honorarios2022 WHERE idOrganismo='$idOrganismo' AND perioIngreso='$periodoIngresos' AND modifica IS NULL;");

			$resultados=$informacion__obtenidas[0][idHonorarios];


			$jason['resultados']=$resultados;


		break; 


		case "sueldos__replicas":

			$informacion__obtenidas=$objeto->getObtenerInformacionGeneral("SELECT idSueldos FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND perioIngreso='$periodoIngresos' AND modifica IS NULL;");

			$resultados=$informacion__obtenidas[0][idSueldos];


			$jason['resultados']=$resultados;


		break; 


		case "mantenimiento__id__enviados":

			$informacion__obtenidas=$objeto->getObtenerInformacionGeneral("SELECT a.*,a.enero AS eneroP,a.febrero AS febreroP,a.marzo AS marzoP,a.abril AS abrilP,a.mayo AS mayoP,a.junio AS junioP,a.julio AS julioP,a.agosto AS agostoP,a.septiembre AS septiembreP,a.octubre AS octubreP,a.noviembre AS noviembreP,a.diciembre AS diciembreP,a.total AS totalP,b.*,c.nombreItem,c.idItem,d.nombreProvincia FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem INNER JOIN in_md_provincias AS d ON d.idProvincia=a.provincia WHERE b.idOrganismo='$idOrganismo' AND b.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.nombreInfras;");


			$jason['informacion__obtenidas']=$informacion__obtenidas;


		break; 


		case "mantenimiento__id__enviados__modificaciones":

			$informacion__obtenidas=$objeto->getObtenerInformacionGeneral("SELECT a.*,a.enero AS eneroP,a.febrero AS febreroP,a.marzo AS marzoP,a.abril AS abrilP,a.mayo AS mayoP,a.junio AS junioP,a.julio AS julioP,a.agosto AS agostoP,a.septiembre AS septiembreP,a.octubre AS octubreP,a.noviembre AS noviembreP,a.diciembre AS diciembreP,a.total AS totalP,b.*,c.nombreItem,c.idItem,d.nombreProvincia FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem INNER JOIN in_md_provincias AS d ON d.idProvincia=a.provincia WHERE b.idOrganismo='$idOrganismo' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.modifica='E' ORDER BY a.nombreInfras;");


			$jason['informacion__obtenidas']=$informacion__obtenidas;


		break; 


		case "edicion__contratacion__encargada":

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT * FROM poa_catalogo_contraloria WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND idItemCatalogo='$idItem' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idCatalogo DESC LIMIT 1;");


			$jason['envio__informaciones']=$envio__informaciones;


		break; 

		case "seleccion__designacion__tramites__repors__finales":

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT a.idAsignacion,(SELECT a2.descripcionFisicamenteEstructura FROM th_usuario AS a1 INNER JOIN th_fisicamenteestructura AS a2 ON a2.id_FisicamenteEstructura=a1.fisicamenteEstructura WHERE a1.id_usuario=a.idUsuario LIMIT 1) AS area,CONCAT_WS(' ',a.fecha,a.hora) AS fechaHora,IF(a.tipoEntrada=3,'APROBADO',IF(a.tipoEntrada='9' OR a.tipoEntrada='8','OBSERVADO',IF(a.tipoEntrada=1 OR a.tipoEntrada=6,'RECOMENDADO','ASIGNADO'))) AS accion,(SELECT CONCAT_WS(' ',a2.nombre,a2.apellido) FROM poa_paid_reasignacion_seguimiento AS a1 INNER JOIN th_usuario AS a2 ON a1.idUsuario=a2.id_usuario WHERE a1.idAsignacion=(a.idAsignacion - 1)) AS de, (SELECT CONCAT_WS(' ',a1.nombre,a1.apellido) FROM th_usuario AS a1 WHERE a1.id_usuario=a.idUsuario) AS para,(SELECT ABS(DATEDIFF(a1.fecha, a.fecha)) FROM poa_paid_reasignacion_seguimiento AS a1 WHERE a1.idAsignacion=(a.idAsignacion - 1)) AS dias,a.observacion,(SELECT a1.documento FROM poa_paid_envioinicial AS a1 WHERE a1.idOrganismo=a.idOrganismo ORDER BY a1.idTramitePaid DESC LIMIT 1) AS informe,(SELECT a1.documentoFinal FROM poa_paid_envioinicial AS a1 WHERE a1.idOrganismo=a.idOrganismo ORDER BY a1.idTramitePaid DESC LIMIT 1) AS oficio FROM poa_paid_reasignacion_seguimiento AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idAsignacion ASC;");

			$envio__informaciones__2=$objeto->getObtenerInformacionGeneral("SELECT a1.documento FROM poa_paid_envioinicial AS a1 WHERE a1.idOrganismo='$idOrganismo' AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a1.idTramitePaid DESC LIMIT 1;");

			$envio__informaciones__3=$objeto->getObtenerInformacionGeneral("SELECT a1.documentoFinal FROM poa_paid_envioinicial AS a1 WHERE a1.idOrganismo='$idOrganismo' AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a1.idTramitePaid DESC LIMIT 1;");

			$jason['envio__informaciones']=$envio__informaciones;
			$jason['envio__informaciones__2']=$envio__informaciones__2;
			$jason['envio__informaciones__3']=$envio__informaciones__3;

		break; 

		case "seguimiento__control__cambios__negacion":

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT opcion1,opcion2,opcion3,opcion4,opcion5,opcion6,opcion7,opcion8,opcion9,opcion10,comentario1,comentario2,comentario3,comentario4,comentario5,comentario6,comentario7,comentario8,comentario9,comentario10,idTipo FROM poa_paid_comentarios_observaciones WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idComentarios DESC LIMIT 1;");

			$jason['idtipo']=$envio__informaciones[0][idTipo];


			$jason['envio__informaciones']=$envio__informaciones;

		break; 


		case "seleccionar__documentos__asignacion__paid":

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT nombreDocumento FROM poa_paid_documento_asignacion WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idDocumentosAsignacion DESC;");

			$documentoPaids=$envio__informaciones[0][nombreDocumento];

			$jason['documentoPaids']=$documentoPaids;

		break; 


		case "seguimiento__global__interacciones":

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT (SELECT a1.idAutogestion FROM poa_seguimiento_autogestion AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS autogestionT,(SELECT a1.idModificaIndicadores FROM poa_indicadores_seguimiento AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS indicadoresT,(SELECT a1.idOrganismo FROM poa_seguimiento_sueldos_salarios AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.periodo='$trimestres' LIMIT 1) AS sueldosT,(SELECT a1.idOrganismo FROM poa_seguimiento_honorarios AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS honorariosT, (SELECT a1.idOrganismo FROM poa_seguimiento_administrativo AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS administrativoT,(SELECT a.idOrganismo FROM poa_segimiento_mantenimiento AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS mantenimientoT,(SELECT a.idOrganismo FROM poa_seguimiento_mantenimiento_tecnico AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS mantenimientoTT,(SELECT a.idOrganismo FROM poa_segimiento_capacitacion AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS capacitacionT,(SELECT a.idOrganismo FROM poa_seguimiento_capacitacion_tecnico AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS capacitacionTT,(SELECT a.idOrganismo FROM poa_segimiento_competencias AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS competenciaT,(SELECT a.idOrganismo FROM poa_seguimiento_competencia_formativo AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS competenciaFor,(SELECT a.idOrganismo FROM poa_seguimiento_competencia_alto2 AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS altoT,(SELECT a.idOrganismo FROM poa_segimiento_recreativos AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS recreacionT,(SELECT a.idOrganismo FROM poa_seguimiento_recreativo_tecnico AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS recreativosTT,(SELECT a.idOrganismo FROM poa_segimiento_implementacion AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' AND a1.trimestre='$trimestres' LIMIT 1) AS implementacionT FROM poa_trimestrales AS a WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND a.tipoTrimestre='$trimestres';");

			$envio__informaciones__documentos=$objeto->getObtenerInformacionGeneral("SELECT documento FROM poa_seguimiento_docuento_final WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';");

			$jason['envio__informaciones']=$envio__informaciones;
			$jason['envio__informaciones__documentos']=$envio__informaciones__documentos;

		break; 


		case "enviar__infor__data__seguimientos__recorridos":

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT b.fecha,b.tipo,(SELECT a1.descripcionFisicamenteEstructura FROM th_fisicamenteestructura AS a1 WHERE a1.id_FisicamenteEstructura=b.fisicamente) AS estructura, (SELECT a1.usuario FROM th_usuario AS a1 WHERE a1.id_usuario=b.idFuncionario) AS usuarioActual,b.observacionesTecnicas FROM poa_organismo AS a INNER JOIN poa_seguimiento_recomienda_tecnicos AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.trimestre='$periodo' AND b.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY b.idRecomendacionFuncionario DESC;");

			$jason['envio__informaciones']=$envio__informaciones;

		break; 


		case "enviar__infor__data__seguimientos__f__r":


			$inversionPoas=$objeto->getObtenerInformacionGeneral("SELECT b.nombreInversion FROM poa_inversion_usuario AS a INNER JOIN poa_inversion AS b ON a.idInversion=b.idInversion WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY b.idInversion DESC LIMIT 1;");

			$poa__invers=$inversionPoas[0][nombreInversion];

			if ($periodo=="primerTrimestre") {
				$primero="enero";
				$segundo="febrero";
				$tercero="marzo";
			}else if($periodo=="segundoTrimestre"){
				$primero="abril";
				$segundo="mayo";
				$tercero="junio";
			}else if($periodo=="tercerTrimestre"){
				$primero="julio";
				$segundo="agosto";
				$tercero="septiembre";
			}else if($periodo=="cuartoTrimestre"){
				$primero="octubre";
				$segundo="noviembre";
				$tercero="diciembre";
			}


			if ($periodo=="primerTrimestre" OR $periodo=="segundoTrimestre") {
				$sumaSemestrales="SUM(a1.enero)+SUM(a1.febrero)+SUM(a1.marzo)+SUM(a1.abril)+SUM(a1.mayo)+SUM(a1.junio)";
			}else if($periodo=="segundoTrimestre"){
				$sumaSemestrales="SUM(a1.julio)+SUM(a1.agosto)+SUM(a1.septiembre)+SUM(a1.octubre)+SUM(a1.noviembre)+SUM(a1.diciembre)";
			}


			if ($periodo=="primerTrimestre") {
				$constula="a.trimestre='primerTrimestre'";
			}else if($periodo=="segundoTrimestre"){
				$constula="(a.trimestre='segundoTrimestre' OR a.trimestre='primerTrimestre')";
			}else if($periodo=="tercerTrimestre"){
				$constula="(a.trimestre='tercerTrimestre' OR a.trimestre='primerTrimestre' OR a.trimestre='segundoTrimestre')";
			}else if($periodo=="cuartoTrimestre"){
				$constula="(a.trimestre='cuartoTrimestre' OR a.trimestre='primerTrimestre' OR a.trimestre='segundoTrimestre' OR a.trimestre='tercerTrimestre')";
			}			


			if ($periodo=="primerTrimestre") {
				$constula2__3="a1.trimestre='primerTrimestre'";
			}else if($periodo=="segundoTrimestre"){
				$constula2__3="(a1.trimestre='segundoTrimestre' OR a1.trimestre='primerTrimestre')";
			}else if($periodo=="tercerTrimestre"){
				$constula2__3="(a1.trimestre='tercerTrimestre' OR a1.trimestre='primerTrimestre' OR a1.trimestre='segundoTrimestre')";
			}else if($periodo=="cuartoTrimestre"){
				$constula2__3="(a1.trimestre='cuartoTrimestre' OR a1.trimestre='primerTrimestre' OR a1.trimestre='segundoTrimestre' OR a1.trimestre='tercerTrimestre')";
			}		


			if ($periodo=="primerTrimestre") {
				$constula2__3__periodo="a1.periodo='primerTrimestre'";
			}else if($periodo=="segundoTrimestre"){
				$constula2__3__periodo="(a1.periodo='segundoTrimestre' OR a1.periodo='primerTrimestre')";
			}else if($periodo__periodo=="tercerTrimestre"){
				$constula2__3__periodo="(a1.periodo='tercerTrimestre' OR a1.periodo='primerTrimestre' OR a1.periodo='segundoTrimestre')";
			}else if($periodo=="cuartoTrimestre"){
				$constula2__3__periodo="(a1.periodo='cuartoTrimestre' OR a1.periodo='primerTrimestre' OR a1.periodo='segundoTrimestre' OR a1.periodo='tercerTrimestre')";
			}			



			$primer__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasP,SUM(a.ejecutado) AS ejecutadoSumasP FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='primerTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$segundo__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasS,SUM(a.ejecutado) AS ejecutadoSumasS FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='segundoTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$tercer__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasT,SUM(a.ejecutado) AS ejecutadoSumasT FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='tercerTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$cuarto__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasC,SUM(a.ejecutado) AS ejecutadoSumasC FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='cuartoTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");




				$sumas__programados=$objeto->getObtenerInformacionGeneral("SELECT a.idActividad,IFNULL((SELECT a1.idSeguimientoFinanciero FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3 LIMIT 1),0) AS idSeguimientoFinanciero,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.idActividad LIMIT 1) AS actividades,IF((SELECT a1.idOrganismo FROM poa_programacion_financiera_dos AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad) IS NOT NULL,(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad),(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad)) AS sumaPlanificacion,IFNULL((SELECT ROUND(SUM(a1.programado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3),0) AS programado,a.idActividad,IFNULL((SELECT ROUND(SUM(a1.planificado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3),0) AS planificado,IFNULL((SELECT ROUND(IFNULL(SUM(a1.sueldoSalarioEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.aporteIessEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.decimoTerceroEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.decimoCuartoEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.fondosReservasEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.mensualEjecutado),0),2) FROM poa_seguimiento_honorarios AS a1 INNER JOIN poa_honorarios2022 AS b ON a1.idHonorarios=b.idHonorarios WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_seguimiento_administrativo AS a1 INNER JOIN poa_actividadesadministrativas AS b ON a1.idAdministrativo=b.idActividadAd INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_mantenimiento AS a1 INNER JOIN poa_mantenimiento AS b ON a1.idAdministrativo=b.idMantenimiento INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_competencias AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_capacitacion AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_recreativos AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_implementacion AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) AS ejecutado FROM poa_programacion_financiera AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad;");


			$indicadores__altos=$objeto->getObtenerInformacionGeneral("SELECT (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.idActividad) AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a2.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS a2 ON a1.idLineaPolitica=a2.idIndicadores WHERE a1.idActividades=a.idActividad) AS nombreIndicador,a.totalProgramado,a.totalEjecutado FROM poa_indicadores_seguimiento AS a WHERE a.idOrganismo='$idOrganismo' AND $constula AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$autogestion__formativos=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.montoAu) AS montoAutogestionables FROM poa_segimiento_montos_autogestion AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND $constula GROUP BY idOrganismo;");

			$envio__tecnicos=$objeto->getObtenerInformacionGeneral("SELECT (SELECT CONCAT_WS(' ',a1.nombre,a1.apellido) FROM th_usuario AS a1  WHERE a.idFuncionario=a1.id_usuario) AS nombreCompleto,a.fecha,a.hora FROM poa_seguimiento_recomienda_tecnicos AS a WHERE a.trimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' ORDER BY a.idRecomendacionFuncionario DESC LIMIT 1;");

			if ($tipo__2=="FORMATIVO") {
				
				$documentos__tecnicos=$objeto->getObtenerInformacionGeneral("SELECT archivo,observacion,recomendacion FROM poa_seguimiento_recomendado_tecnico WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' AND tipo='formativo' ORDER BY idInformacionEnviada DESC LIMIT 1;");

			}else{

				$documentos__tecnicos=$objeto->getObtenerInformacionGeneral("SELECT archivo,observacion,recomendacion FROM poa_seguimiento_recomendado_tecnico WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' AND  tipo='recreativo' ORDER BY idInformacionEnviada DESC LIMIT 1;");

			}

			

			if (!empty($idUsuarioC)) {
				
				$envio__tecnicos__zonales=$objeto->getObtenerInformacionGeneral("SELECT zonal FROM th_usuario WHERE id_usuario='$idUsuarioC';");

				$zonal__eu=$envio__tecnicos__zonales[0][zonal];
				$jason['zonal__eu']=$zonal__eu;

			}


			$autogestionesV=$autogestion__formativos[0][montoAutogestionables];

			if (empty($primer__sumas[0][programadosSumasP])) {
				$primer__sumas__p=0;
			}else{
				$primer__sumas__p=$primer__sumas[0][programadosSumasP];
			}

			if (empty($primer__sumas[0][ejecutadoSumasP])) {
				$primer__sumas__e=0;
			}else{
				$primer__sumas__e=$primer__sumas[0][ejecutadoSumasP];
			}

			if (empty($segundo__sumas[0][programadosSumasS])) {
				$segundo__sumas__p=0;
			}else{
				$segundo__sumas__p=$segundo__sumas[0][programadosSumasS];
			}

						
			if (empty($segundo__sumas[0][ejecutadoSumasS])) {
				$segundo__sumas__e=0;
			}else{
				$segundo__sumas__e=$segundo__sumas[0][ejecutadoSumasS];
			}

			if (empty($tercer__sumas[0][programadosSumasT])) {
				$tercero__sumas__p=0;
			}else{
				$tercero__sumas__p=$tercer__sumas[0][programadosSumasT];
			}
			
			if (empty($tercer__sumas[0][ejecutadoSumasT])) {
				$tercero__sumas__e=0;
			}else{
				$tercero__sumas__e=$tercer__sumas[0][ejecutadoSumasT];
			}
			
			if (empty($cuarto__sumas[0][programadosSumasC])) {
				$cuarto__sumas__p=0;
			}else{
				$cuarto__sumas__p=$cuarto__sumas[0][programadosSumasC];
			}

			
			if (empty($cuarto__sumas[0][ejecutadoSumasC])) {
				$cuarto__sumas__e=0;
			}else{
				$cuarto__sumas__e=$cuarto__sumas[0][ejecutadoSumasC];
			}

			if(empty($autogestionesV)){

				$autogestionesV=0;

			}


			$jason['documentos__tecnicos']=$documentos__tecnicos;

			$jason['envio__tecnicos']=$envio__tecnicos;

			$jason['autogestionesV']=$autogestionesV;

			$jason['indicadores__altos']=$indicadores__altos;

			$jason['primer__sumas__p']=$primer__sumas__p;
			$jason['primer__sumas__e']=$primer__sumas__e;
			$jason['segundo__sumas__p']=$segundo__sumas__p;
			$jason['segundo__sumas__e']=$segundo__sumas__e;
			$jason['tercero__sumas__p']=$tercero__sumas__p;
			$jason['tercero__sumas__e']=$tercero__sumas__e;
			$jason['cuarto__sumas__p']=$cuarto__sumas__p;
			$jason['cuarto__sumas__e']=$cuarto__sumas__e;

			$jason['poa__invers']=$poa__invers;
			$jason['sumas__programados']=$sumas__programados;

		break;

		case "enviar__infor__data__seguimientos":


			$inversionPoas=$objeto->getObtenerInformacionGeneral("SELECT b.nombreInversion FROM poa_inversion_usuario AS a INNER JOIN poa_inversion AS b ON a.idInversion=b.idInversion WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY b.idInversion DESC LIMIT 1;");

			$poa__invers=$inversionPoas[0][nombreInversion];

			if ($periodo=="primerTrimestre") {
				$primero="enero";
				$segundo="febrero";
				$tercero="marzo";
			}else if($periodo=="segundoTrimestre"){
				$primero="abril";
				$segundo="mayo";
				$tercero="junio";
			}else if($periodo=="tercerTrimestre"){
				$primero="julio";
				$segundo="agosto";
				$tercero="septiembre";
			}else if($periodo=="cuartoTrimestre"){
				$primero="octubre";
				$segundo="noviembre";
				$tercero="diciembre";
			}

			if ($periodo=="primerTrimestre" OR $periodo=="segundoTrimestre") {
				$sumaSemestrales="SUM(a1.enero)+SUM(a1.febrero)+SUM(a1.marzo)+SUM(a1.abril)+SUM(a1.mayo)+SUM(a1.junio)";
			}else if($periodo=="tercerTrimestre" OR $periodo=="cuartoTrimestre"){
				$sumaSemestrales="SUM(a1.julio)+SUM(a1.agosto)+SUM(a1.septiembre)+SUM(a1.octubre)+SUM(a1.noviembre)+SUM(a1.diciembre)";
			}


			if ($periodo=="primerTrimestre") {
				$constula="a.trimestre='primerTrimestre'";
			}else if($periodo=="segundoTrimestre"){
				$constula="(a.trimestre='segundoTrimestre' OR a.trimestre='primerTrimestre')";
			}else if($periodo=="tercerTrimestre"){
				$constula="(a.trimestre='tercerTrimestre' OR a.trimestre='primerTrimestre' OR a.trimestre='segundoTrimestre')";
			}else if($periodo=="cuartoTrimestre"){
				$constula="(a.trimestre='cuartoTrimestre' OR a.trimestre='primerTrimestre' OR a.trimestre='segundoTrimestre' OR a.trimestre='tercerTrimestre')";
			}			


			if ($periodo=="primerTrimestre") {
				$constula2__3="a1.trimestre='primerTrimestre'";
			}else if($periodo=="segundoTrimestre"){
				$constula2__3="(a1.trimestre='segundoTrimestre' OR a1.trimestre='primerTrimestre')";
			}else if($periodo=="tercerTrimestre"){
				$constula2__3="(a1.trimestre='tercerTrimestre' OR a1.trimestre='primerTrimestre' OR a1.trimestre='segundoTrimestre')";
			}else if($periodo=="cuartoTrimestre"){
				$constula2__3="(a1.trimestre='cuartoTrimestre' OR a1.trimestre='primerTrimestre' OR a1.trimestre='segundoTrimestre' OR a1.trimestre='tercerTrimestre')";
			}			

			if ($periodo=="primerTrimestre") {
				$constula2__3__periodo="a1.periodo='primerTrimestre'";
			}else if($periodo=="segundoTrimestre"){
				$constula2__3__periodo="(a1.periodo='segundoTrimestre' OR a1.periodo='primerTrimestre')";
			}else if($periodo__periodo=="tercerTrimestre"){
				$constula2__3__periodo="(a1.periodo='tercerTrimestre' OR a1.periodo='primerTrimestre' OR a1.periodo='segundoTrimestre')";
			}else if($periodo=="cuartoTrimestre"){
				$constula2__3__periodo="(a1.periodo='cuartoTrimestre' OR a1.periodo='primerTrimestre' OR a1.periodo='segundoTrimestre' OR a1.periodo='tercerTrimestre')";
			}			


			$primer__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasP,SUM(a.ejecutado) AS ejecutadoSumasP FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='primerTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$segundo__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasS,SUM(a.ejecutado) AS ejecutadoSumasS FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='segundoTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$tercer__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasT,SUM(a.ejecutado) AS ejecutadoSumasT FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='tercerTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$cuarto__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.programado) AS programadosSumasC,SUM(a.ejecutado) AS ejecutadoSumasC FROM poa_seguimiento_reporteria AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.trimestre='cuartoTrimestre' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");


			$medallas__altos__sumas=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.oro) AS oro,SUM(a.plata) AS plata,SUM(a.bronce) AS bronce,SUM(a.total) AS total FROM poa_seguimiento_competencia_alto2 AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND $constula GROUP BY a.idOrganismo;");

			$sumas__programados=$objeto->getObtenerInformacionGeneral("SELECT a.idActividad,IFNULL((SELECT a1.idSeguimientoFinanciero FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3 LIMIT 1),0) AS idSeguimientoFinanciero,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.idActividad LIMIT 1) AS actividades,IF((SELECT a1.idOrganismo FROM poa_programacion_financiera_dos AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad) IS NOT NULL,(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad),(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad)) AS sumaPlanificacion,IF((SELECT ROUND(SUM(a1.programado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3) IS NULL OR (SELECT ROUND(SUM(a1.programado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3)=0,IF((SELECT a1.idOrganismo FROM poa_programacion_financiera_dos AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad) IS NOT NULL,(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad),(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad)),(SELECT ROUND(SUM(a1.programado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3)) AS programado,a.idActividad,IFNULL((SELECT ROUND(SUM(a1.planificado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3),0) AS planificado,IFNULL((SELECT ROUND(IFNULL(SUM(a1.sueldoSalarioEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.aporteIessEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.decimoTerceroEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.decimoCuartoEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.fondosReservasEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.mensualEjecutado),0),2) FROM poa_seguimiento_honorarios AS a1 INNER JOIN poa_honorarios2022 AS b ON a1.idHonorarios=b.idHonorarios WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_seguimiento_administrativo AS a1 INNER JOIN poa_actividadesadministrativas AS b ON a1.idAdministrativo=b.idActividadAd INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_mantenimiento AS a1 INNER JOIN poa_mantenimiento AS b ON a1.idAdministrativo=b.idMantenimiento INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_competencias AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_capacitacion AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_recreativos AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_implementacion AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND a1.perioIngreso='$aniosPeriodos__ingesos' GROUP BY c.idActividad),0) AS ejecutado FROM poa_programacion_financiera AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad;");
			//$sumas__programados=$objeto->getObtenerInformacionGeneral("SELECT a.idActividad,IFNULL((SELECT a1.idSeguimientoFinanciero FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3 LIMIT 1),0) AS idSeguimientoFinanciero,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.idActividad LIMIT 1) AS actividades,IF((SELECT a1.idOrganismo FROM poa_programacion_financiera_dos AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad) IS NOT NULL,(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad),(SELECT ROUND($sumaSemestrales,2) FROM poa_programacion_financiera AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a.idActividad=a1.idActividad GROUP BY a1.idActividad)) AS sumaPlanificacion,IFNULL((SELECT ROUND(SUM(a1.programado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3),0) AS programado,a.idActividad,IFNULL((SELECT ROUND(SUM(a1.planificado),2) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idActividad=a.idActividad AND a1.idOrganismo=a.idOrganismo AND a1.estado='A' AND $constula2__3),0) AS planificado,IFNULL((SELECT ROUND(IFNULL(SUM(a1.sueldoSalarioEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND YEAR(a1.fecha)='$anio' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.aporteIessEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND YEAR(a1.fecha)='$anio' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.decimoTerceroEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND YEAR(a1.fecha)='$anio' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.decimoCuartoEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND YEAR(a1.fecha)='$anio' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.fondosReservasEjecutado),0),2) FROM poa_seguimiento_sueldos_salarios AS a1 INNER JOIN poa_sueldossalarios2022 AS b ON a1.idSueldosSalarios=b.idSueldos WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3__periodo AND YEAR(a1.fecha)='$anio' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(IFNULL(SUM(a1.mensualEjecutado),0),2) FROM poa_seguimiento_honorarios AS a1 INNER JOIN poa_honorarios2022 AS b ON a1.idHonorarios=b.idHonorarios WHERE a1.idOrganismo=a.idOrganismo AND b.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY b.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_seguimiento_administrativo AS a1 INNER JOIN poa_actividadesadministrativas AS b ON a1.idAdministrativo=b.idActividadAd INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_mantenimiento AS a1 INNER JOIN poa_mantenimiento AS b ON a1.idAdministrativo=b.idMantenimiento INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_competencias AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_capacitacion AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_recreativos AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY c.idActividad),0) + IFNULL((SELECT ROUND(SUM(a1.mensualEjecutado),2) FROM poa_segimiento_implementacion AS a1 INNER JOIN poa_actdeportivas AS b ON a1.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON b.idProgramacionFinanciera=c.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a1.idOrganismo=a.idOrganismo AND c.idActividad=a.idActividad AND $constula2__3 AND YEAR(a1.fecha)='$anio' GROUP BY c.idActividad),0) AS ejecutado FROM poa_programacion_financiera AS a WHERE a.idOrganismo='$idOrganismo' GROUP BY a.idActividad;");


			$sumas__programados__denitivos=$objeto->getObtenerInformacionGeneral("SELECT (SELECT SUM(a1.programado) FROM poa_seguimiento_reporteria AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera AND $constula2__3 ORDER BY a1.idSeguimientoFinanciero DESC LIMIT 1) AS programado,(SELECT a1.planificado FROM poa_seguimiento_reporteria AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera AND $constula2__3 ORDER BY a1.idSeguimientoFinanciero DESC LIMIT 1) AS planificado,(SELECT a1.ejecutado FROM poa_seguimiento_reporteria AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera AND $constula2__3 ORDER BY a1.idSeguimientoFinanciero DESC LIMIT 1) AS ejecutado FROM poa_programacion_financiera AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo ORDER BY a.idActividad;");

			$variable__1__suma__programados=$sumas__programados__denitivos[0][programado];
			$variable__1__suma__ejecutado=$sumas__programados__denitivos[0][ejecutado];
			$variable__1__suma__planificado=$sumas__programados__denitivos[0][planificado];
			

			$indicadores__altos=$objeto->getObtenerInformacionGeneral("SELECT (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.idActividad) AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a2.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS a2 ON a1.idLineaPolitica=a2.idIndicadores WHERE a1.idActividades=a.idActividad) AS nombreIndicador,a.totalProgramado,a.totalEjecutado FROM poa_indicadores_seguimiento AS a WHERE a.idOrganismo='$idOrganismo' AND $constula AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$autogestion__formativos=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.montoAu) AS montoAutogestionables FROM poa_segimiento_montos_autogestion AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND $constula GROUP BY idOrganismo;");

			$envio__tecnicos=$objeto->getObtenerInformacionGeneral("SELECT (SELECT CONCAT_WS(' ',a1.nombre,a1.apellido) FROM th_usuario AS a1  WHERE a.idFuncionario=a1.id_usuario) AS nombreCompleto,a.fecha,a.hora FROM poa_seguimiento_recomienda_tecnicos AS a WHERE a.trimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' ORDER BY a.idRecomendacionFuncionario DESC LIMIT 1;");

			$documentos__tecnicos=$objeto->getObtenerInformacionGeneral("SELECT archivo,observacion,recomendacion FROM poa_seguimiento_recomendado_tecnico WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' AND tipo='alto__rendimientos' ORDER BY idInformacionEnviada DESC LIMIT 1;");

			$documentos__tecnico__2__seguimientos=$objeto->getObtenerInformacionGeneral("SELECT documentos,observaciones,recomendaciones FROM poa_seguimiento_recomendado_tecnico_seguimientos WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' ORDER BY idSeguimientosRecomendadosTe DESC LIMIT 1;");

			$envio__tecnicos__seguimientos=$objeto->getObtenerInformacionGeneral("SELECT (SELECT CONCAT_WS(' ',a1.nombre,a1.apellido) FROM th_usuario AS a1  WHERE a.idFuncionario=a1.id_usuario) AS nombreCompleto,a.fecha,a.hora FROM poa_seguimiento_recomienda_tecnicos AS a WHERE a.trimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND a.tipoE='SEGUIMIENTO' ORDER BY a.idRecomendacionFuncionario DESC LIMIT 1;");

			$envio__tecnicos__seguimientos__infraestructuras=$objeto->getObtenerInformacionGeneral("SELECT (SELECT CONCAT_WS(' ',a1.nombre,a1.apellido) FROM th_usuario AS a1  WHERE a.idFuncionario=a1.id_usuario) AS nombreCompleto,a.fecha,a.hora,a.documentoInfras,a.documentoInstalaciones FROM poa_seguimiento_recomienda_tecnicos AS a WHERE (a.documentoInstalaciones IS NOT NULL OR a.documentoInfras IS NOT NULL AND a.trimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND a.tipoE='INFRA') AND a.trimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND a.tipoE='INFRA' ORDER BY a.idRecomendacionFuncionario DESC LIMIT 1;");


			$variableInsta__docus="no";
			$thefolder__insta = "repositorio/poa/documentos/seguimiento/informesInstalaciones";


			if ($handler = opendir($thefolder__insta)) {

				while (false !== ($file = readdir($handler))) {

					if ($file==$envio__tecnicos__seguimientos__infraestructuras[0][documentoInstalaciones]) {
						$variableInsta__docus="si";
					}

				}

			}

			$variableInfra__docus="no";
			$thefolder__infra = "repositorio/poa/documentos/seguimiento/informesInfraestructuras";

			if ($handler2 = opendir($thefolder__infra)) {

				while (false !== ($file2 = readdir($handler2))) {

								echo $envio__tecnicos__seguimientos__infraestructuras[0][documentoInfras];

					if ($file2==$envio__tecnicos__seguimientos__infraestructuras[0][documentoInfras]) {
						$variableInfra__docus="si";
					}

				}

			}



			$jason['variableInsta__docus']=$variableInsta__docus;
			$jason['variableInfra__docus']=$variableInfra__docus;


			$nuevo__infras__seguimientos=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimiento FROM poa_segimiento_mantenimiento AS a WHERE a.trimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' ORDER BY a.idMantenimiento DESC LIMIT 1;");


			$trimestrales__i__enviados=$objeto->getObtenerInformacionGeneral("SELECT a.idEnviadorTrimestres FROM poa_trimestrales AS a WHERE a.tipoTrimestre='$periodo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND estadoIR='T' ORDER BY a.idEnviadorTrimestres DESC LIMIT 1;");

			if (!empty($nuevo__infras__seguimientos[0][idMantenimiento])) {
				$var_n_se_in=1;
			}else{
				$var_n_se_in=0;
			}

			if (!empty($trimestrales__i__enviados[0][idEnviadorTrimestres])) {
				$var_n_se_in__45=1;
			}else{
				$var_n_se_in__45=0;
			}


			if (!empty($idUsuarioC)) {
				
				$envio__tecnicos__zonales=$objeto->getObtenerInformacionGeneral("SELECT zonal FROM th_usuario WHERE id_usuario='$idUsuarioC';");

				$zonal__eu=$envio__tecnicos__zonales[0][zonal];
				$jason['zonal__eu']=$zonal__eu;

			}


			$autogestionesV=$autogestion__formativos[0][montoAutogestionables];


			if ($tipo__dos=="FORMATIVO") {

				$documentos__tecnicos__2=$objeto->getObtenerInformacionGeneral("SELECT archivo,observacion,recomendacion FROM poa_seguimiento_recomendado_tecnico WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' AND tipo='formativo' ORDER BY idInformacionEnviada DESC LIMIT 1;");

				$trimestrales__culminados=$objeto->getObtenerInformacionGeneral("SELECT idEnviadorTrimestres FROM poa_trimestrales WHERE perioIngreso='$aniosPeriodos__ingesos' AND tipoTrimestre='$periodo' AND idOrganismo='$idOrganismo' AND estadoFR='T';");

				$varaible__culminados=$trimestrales__culminados[0][idEnviadorTrimestres];

				$medallas__altos__formativos=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.oro) AS oro,SUM(a.plata) AS plata,SUM(a.bronce) AS bronce,SUM(a.total) AS total FROM poa_seguimiento_competencia_formativo AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND $constula GROUP BY a.idOrganismo;");


			}else if ($tipo__dos=="RECREACIÓN") {

				$documentos__tecnicos__2=$objeto->getObtenerInformacionGeneral("SELECT archivo,observacion,recomendacion FROM poa_seguimiento_recomendado_tecnico WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' AND  tipo='recreativo' ORDER BY idInformacionEnviada DESC LIMIT 1;");


				$trimestrales__culminados=$objeto->getObtenerInformacionGeneral("SELECT idEnviadorTrimestres FROM poa_trimestrales WHERE perioIngreso='$aniosPeriodos__ingesos' AND tipoTrimestre='$periodo' AND idOrganismo='$idOrganismo' AND estadoFR='T';");

				$medallas__altos__formativos=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.beneficiariosHombres) AS oro,SUM(a.beneficiariosMujeres) AS plata,SUM(a.totalT) AS bronce,SUM(a.total) AS total FROM poa_seguimiento_competencia_formativo AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND $constula GROUP BY a.idOrganismo;");

				$varaible__culminados=$trimestrales__culminados[0][idEnviadorTrimestres];

			}else{

				$documentos__tecnicos__2=$objeto->getObtenerInformacionGeneral("SELECT archivo,observacion,recomendacion FROM poa_seguimiento_recomendado_tecnico WHERE trimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo' AND  tipo='alto__rendimientos' ORDER BY idInformacionEnviada DESC LIMIT 1;");


				$trimestrales__culminados=$objeto->getObtenerInformacionGeneral("SELECT idEnviadorTrimestres FROM poa_trimestrales WHERE perioIngreso='$aniosPeriodos__ingesos' AND tipoTrimestre='$periodo' AND idOrganismo='$idOrganismo' AND estadoAlR='T';");

				$varaible__culminados=$trimestrales__culminados[0][idEnviadorTrimestres];

			}

			$trimestrales__inrA=$objeto->getObtenerInformacionGeneral("SELECT estadoIR,estadoInR FROM poa_trimestrales WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND tipoTrimestre='$periodo';");

			$estadoIR__estados=$trimestrales__inrA[0][estadoIR];
			$estadoINR__estados=$trimestrales__inrA[0][estadoInR];

			$jason['estadoIR__estados']=$estadoIR__estados;
			$jason['estadoINR__estados']=$estadoINR__estados;

			if (empty($primer__sumas[0][programadosSumasP])) {
				$primer__sumas__p=0;
			}else{
				$primer__sumas__p=$primer__sumas[0][programadosSumasP];
			}

			if (empty($primer__sumas[0][ejecutadoSumasP])) {
				$primer__sumas__e=0;
			}else{
				$primer__sumas__e=$primer__sumas[0][ejecutadoSumasP];
			}

			if (empty($segundo__sumas[0][programadosSumasS])) {
				$segundo__sumas__p=0;
			}else{
				$segundo__sumas__p=$segundo__sumas[0][programadosSumasS];
			}

						
			if (empty($segundo__sumas[0][ejecutadoSumasS])) {
				$segundo__sumas__e=0;
			}else{
				$segundo__sumas__e=$segundo__sumas[0][ejecutadoSumasS];
			}

			if (empty($tercer__sumas[0][programadosSumasT])) {
				$tercero__sumas__p=0;
			}else{
				$tercero__sumas__p=$tercer__sumas[0][programadosSumasT];
			}
			
			if (empty($tercer__sumas[0][ejecutadoSumasT])) {
				$tercero__sumas__e=0;
			}else{
				$tercero__sumas__e=$tercer__sumas[0][ejecutadoSumasT];
			}
			
			if (empty($cuarto__sumas[0][programadosSumasC])) {
				$cuarto__sumas__p=0;
			}else{
				$cuarto__sumas__p=$cuarto__sumas[0][programadosSumasC];
			}

			
			if (empty($cuarto__sumas[0][ejecutadoSumasC])) {
				$cuarto__sumas__e=0;
			}else{
				$cuarto__sumas__e=$cuarto__sumas[0][ejecutadoSumasC];
			}

			if(empty($autogestionesV)){

				$autogestionesV=0;

			}



			$jason['variable__1__suma__ejecutado']=$variable__1__suma__ejecutado;
			$jason['variable__1__suma__planificado']=$variable__1__suma__planificado;

			$jason['variable__1__suma__programados']=$variable__1__suma__programados;

			$jason['var_n_se_in__45']=$var_n_se_in__45;

			$jason['var_n_se_in']=$var_n_se_in;

			$jason['envio__tecnicos__seguimientos__infraestructuras']=$envio__tecnicos__seguimientos__infraestructuras;

			$jason['envio__tecnicos__seguimientos']=$envio__tecnicos__seguimientos;

			$jason['documentos__tecnico__2__seguimientos']=$documentos__tecnico__2__seguimientos;

			$jason['medallas__altos__formativos']=$medallas__altos__formativos;

			$jason['medallas__altos__sumas']=$medallas__altos__sumas;

			$jason['varaible__culminados']=$varaible__culminados;

			$jason['documentos__tecnicos__2']=$documentos__tecnicos__2;

			$jason['documentos__tecnicos']=$documentos__tecnicos;

			$jason['envio__tecnicos']=$envio__tecnicos;

			$jason['autogestionesV']=$autogestionesV;

			$jason['indicadores__altos']=$indicadores__altos;

			$jason['primer__sumas__p']=$primer__sumas__p;
			$jason['primer__sumas__e']=$primer__sumas__e;
			$jason['segundo__sumas__p']=$segundo__sumas__p;
			$jason['segundo__sumas__e']=$segundo__sumas__e;
			$jason['tercero__sumas__p']=$tercero__sumas__p;
			$jason['tercero__sumas__e']=$tercero__sumas__e;
			$jason['cuarto__sumas__p']=$cuarto__sumas__p;
			$jason['cuarto__sumas__e']=$cuarto__sumas__e;

			$jason['poa__invers']=$poa__invers;
			$jason['sumas__programados']=$sumas__programados;

		break;

		case "selecciona__separados__contenedores__de__items":

			$obtener__actividadItems=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_programacion_financiera WHERE idItem='$item' AND idOrganismo='$idOrganismo';");

			$actividades__e=$obtener__actividadItems[0][idActividad];


			$sueldosSalarios__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.sueldoSalarioEjecutado) AS sueldoSalarioEjecutado,SUM(a.aporteIessEjecutado) AS aporteIessEjecutado,SUM(a.decimoTerceroEjecutado) AS decimoTerceroEjecutado,SUM(a.decimoCuartoEjecutado) AS decimoCuartoEjecutado,SUM(a.fondosReservasEjecutado) AS fondosReservasEjecutado,SUM(a.compensacionDeshaucioEjecutado) AS compensacionDeshaucioEjecutado,SUM(a.despidoIntepestivoEjecutado) AS despidoIntepestivoEjecutado,SUM(a.renunciaVoluntariaEjecutado) AS renunciaVoluntariaEjecutado, SUM(a.vacionesEjecutado) AS vacionesEjecutado FROM poa_seguimiento_sueldos_salarios AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldosSalarios=b.idSueldos WHERE a.idOrganismo='$idOrganismo' AND a.periodo='$trimestreEvaluador' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='$idActividad'  GROUP BY a.idOrganismo;");


			$honorarios__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.mensualEjecutado) AS montoHono FROM poa_seguimiento_honorarios AS a INNER JOIN poa_honorarios2022 AS b ON a.idHonorarios=b.idHonorarios WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestreEvaluador' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='$idActividad' GROUP BY a.idOrganismo;");

			$actAdministrativas__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.mensualEjecutado) AS sumatores FROM poa_seguimiento_administrativo AS a INNER JOIN poa_actividadesadministrativas AS b ON a.idAdministrativo=b.idActividadAd INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idItem='$item' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestreEvaluador' AND a.idOrganismo='$idOrganismo' AND c.idActividad='$idActividad' GROUP BY a.idOrganismo ORDER BY a.idAdministrativoSegui DESC LIMIT 1;");


			$mantenimiento__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(mensualEjecutado) AS sumatores FROM poa_segimiento_mantenimiento AS a INNER JOIN poa_mantenimiento AS b ON a.idAdministrativo=b.idMantenimiento INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idItem='$item' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestreEvaluador' AND a.idOrganismo='$idOrganismo' AND c.idActividad='$idActividad' GROUP BY a.idOrganismo;");

			$capacitacion__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(mensualEjecutado) AS sumatores FROM poa_segimiento_capacitacion AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idItem='$item' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestreEvaluador' AND a.idOrganismo='$idOrganismo' AND c.idActividad='$idActividad' GROUP BY a.idOrganismo;");

			$competencia__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(mensualEjecutado) AS sumatores FROM poa_segimiento_competencias AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idItem='$item' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestreEvaluador' AND a.idOrganismo='$idOrganismo' AND c.idActividad='$idActividad' GROUP BY a.idOrganismo;");

			$recreativo__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(mensualEjecutado) AS sumatores FROM poa_segimiento_recreativos AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idItem='$item' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestreEvaluador' AND a.idOrganismo='$idOrganismo' AND c.idActividad='$idActividad' GROUP BY a.idOrganismo;");

			$instalaciones__seguimiento=$objeto->getObtenerInformacionGeneral("SELECT SUM(mensualEjecutado) AS sumatores FROM poa_segimiento_implementacion AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idItem='$item' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestreEvaluador' AND a.idOrganismo='$idOrganismo' AND c.idActividad='$idActividad' GROUP BY a.idOrganismo;");

			$consulta__reporterias=$objeto->getObtenerInformacionGeneral("SELECT programado,porcentaje FROM poa_seguimiento_reporteria WHERE idItem='$item' AND idOrganismo='$idOrganismo' AND trimestre='$trimestreEvaluador' AND idActividad='$idActividad' ORDER BY idSeguimientoFinanciero DESC LIMIT 1;");


			$programados=$consulta__reporterias[0][programado];
			$porcentaje=$consulta__reporterias[0][porcentaje];

			$variable__asignados=0;


			if (($item=="97" || $item==97 || $item=="38" || $item==38 || $item=="52" || $item==52 || $item=="53" || $item==53 || $item=="65" || $item==65 || $item=="49" || $item==49 || $item=="156" || $item==156 || $item=="94" || $item==94 || $item=="50" || $item==50)) {

			
				if ($item=="97" || $item==97) {
					$variable__asignados=$sueldosSalarios__seguimiento[0][sueldoSalarioEjecutado];
				}else if($item=="38" || $item==38){
					$variable__asignados=$sueldosSalarios__seguimiento[0][aporteIessEjecutado];
				}else if($item=="52" || $item==52){
					$variable__asignados=$sueldosSalarios__seguimiento[0][decimoCuartoEjecutado];
				}else if($item=="53" || $item==53){
					$variable__asignados=$sueldosSalarios__seguimiento[0][decimoTerceroEjecutado];
				}else if($item=="65" || $item==65){
					$variable__asignados=$sueldosSalarios__seguimiento[0][fondosReservasEjecutado];
				}else if($item=="49" || $item==49){
					$variable__asignados=$sueldosSalarios__seguimiento[0][compensacionDeshaucioEjecutado];
				}else if($item=="156" || $item==156){
					$variable__asignados=$sueldosSalarios__seguimiento[0][despidoIntepestivoEjecutado];
				}else if($item=="94" || $item==94){
					$variable__asignados=$sueldosSalarios__seguimiento[0][renunciaVoluntariaEjecutado];
				}else if($item=="50" || $item==50){
					$variable__asignados=$sueldosSalarios__seguimiento[0][vacionesEjecutado];
				}
			
			
			}else if(!empty($honorarios__seguimiento[0][montoHono]) && ($item=="71" || $item==71)){

				$variable__asignados=$honorarios__seguimiento[0][montoHono];

			}else if(!empty($actAdministrativas__seguimiento[0][sumatores])){

				$variable__asignados=$actAdministrativas__seguimiento[0][sumatores];

			}else if(!empty($mantenimiento__seguimiento[0][sumatores])){

				$variable__asignados=$mantenimiento__seguimiento[0][sumatores];

			}else if(!empty($capacitacion__seguimiento[0][sumatores])){

				$variable__asignados=$capacitacion__seguimiento[0][sumatores];

			}else if(!empty($competencia__seguimiento[0][sumatores])){

				$variable__asignados=$competencia__seguimiento[0][sumatores];

			}else if(!empty($recreativo__seguimiento[0][sumatores])){

				$variable__asignados=$recreativo__seguimiento[0][sumatores];

			}else if(!empty($instalaciones__seguimiento[0][sumatores])){

				$variable__asignados=$instalaciones__seguimiento[0][sumatores];

			}

			$jason['variable__asignados']=$variable__asignados;
			$jason['programados']=$programados;
			$jason['porcentaje']=$porcentaje;

		break;



		case "exel__poas__capacitacion__ver":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,a.fechaInicio,a.fechaFin,a.genero,a.categoria,ROUND(b.enero,2) AS enero,ROUND(b.febrero,2) AS febrero,ROUND(b.marzo,2) AS marzo,ROUND(b.abril,2) AS abril,ROUND(b.mayo,2) AS mayo,ROUND(b.junio,2) AS junio,ROUND(b.julio,2) AS julio,ROUND(b.agosto,2) AS agosto,ROUND(b.septiembre,2) AS septiembre,ROUND(b.octubre,2) AS octubre,ROUND(b.noviembre,2) AS noviembre,ROUND(b.diciembre,2) AS diciembre,ROUND(b.totalTotales,2) AS totalTotales,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=b.idItem) AS item,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS deporte FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='$idActividad' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,a.fechaInicio,a.fechaFin,a.genero,a.categoria,ROUND(b.enero,2) AS enero,ROUND(b.febrero,2) AS febrero,ROUND(b.marzo,2) AS marzo,ROUND(b.abril,2) AS abril,ROUND(b.mayo,2) AS mayo,ROUND(b.junio,2) AS junio,ROUND(b.julio,2) AS julio,ROUND(b.agosto,2) AS agosto,ROUND(b.septiembre,2) AS septiembre,ROUND(b.octubre,2) AS octubre,ROUND(b.noviembre,2) AS noviembre,ROUND(b.diciembre,2) AS diciembre,ROUND(b.totalTotales,2) AS totalTotales,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=b.idItem) AS item,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS deporte FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='$idActividad' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}

			

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "exel__poas__administrativo__ver":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadAd,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS justificacionActividad,a.cantidadBien,ROUND(b.enero,2) AS enero,ROUND(b.febrero,2) AS febrero,ROUND(b.marzo) AS marzo,ROUND(b.abril) AS abril,ROUND(b.mayo) AS mayo,ROUND(b.junio) AS junio,ROUND(b.julio) AS julio,ROUND(b.agosto) AS agosto,ROUND(b.septiembre) AS septiembre,ROUND(b.octubre) AS octubre,ROUND(b.noviembre) AS noviembre,ROUND(b.diciembre) AS diciembre,ROUND(b.totalTotales) AS totalTotales,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(z.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS z WHERE z.idItem=b.idItem LIMIT 1) AS nombreItem FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadAd,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS justificacionActividad,a.cantidadBien,ROUND(b.enero,2) AS enero,ROUND(b.febrero,2) AS febrero,ROUND(b.marzo) AS marzo,ROUND(b.abril) AS abril,ROUND(b.mayo) AS mayo,ROUND(b.junio) AS junio,ROUND(b.julio) AS julio,ROUND(b.agosto) AS agosto,ROUND(b.septiembre) AS septiembre,ROUND(b.octubre) AS octubre,ROUND(b.noviembre) AS noviembre,ROUND(b.diciembre) AS diciembre,ROUND(b.totalTotales) AS totalTotales,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(z.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS z WHERE z.idItem=b.idItem LIMIT 1) AS nombreItem FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			}

			

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "exel__poas__mantenimiento__ver":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimiento,a.nombreInfras,a.direccionCompleta,a.estado,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimiento,a.nombreInfras,a.direccionCompleta,a.estado,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "exel__poas__honorarios__ver":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idHonorarios,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_honorarios2022 AS a WHERE a.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idHonorarios,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_honorarios2022 AS a WHERE a.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}

			

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "exel__poas__sueldos__ver":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.tipoCargo,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_sueldossalarios2022 AS a WHERE a.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.tipoCargo,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_sueldossalarios2022 AS a WHERE a.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}

			

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "exel__poas__sueldos__ver__desvinculaciones":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idDesvinculacion,b.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,b.tipoCargo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.opcion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS opcion,a.montoDesvinculacion,a.enero,a.febreo,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_desvinculacion AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldos=b.idSueldos WHERE a.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idDesvinculacion,b.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,b.tipoCargo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.opcion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS opcion,a.montoDesvinculacion,a.enero,a.febreo,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_desvinculacion AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldos=b.idSueldos WHERE a.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			}

			
			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "exel__poas__items__ver":

			if ($especificidad=="si"){

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT  REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividad,a.idPoaEnviado, a.primertrimestre, a.segundotrimestre, a.tercertrimestre, a.cuartotrimestre, a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.modifica='I' AND  a.idOrganismo='$idOrganismo' AND  a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idPoaEnviado DESC;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT  REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividad,a.idPoaEnviado, a.primertrimestre, a.segundotrimestre, a.tercertrimestre, a.cuartotrimestre, a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.modifica='A' AND  a.idOrganismo='$idOrganismo' AND  a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idPoaEnviado DESC;");

				
			}

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "exel__poas__suministros__ver":

			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.tipo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEscenario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEscenario,b.luz,b.agua FROM poa_suministrosn AS a INNER JOIN poa_suministros AS b ON a.idSumi=b.idSumiN WHERE a.idOrganismo='$idOrganismo' AND a.modifica='I' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.tipo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEscenario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEscenario,b.luz,b.agua FROM poa_suministrosn AS a INNER JOIN poa_suministros AS b ON a.idSumi=b.idSumiN WHERE a.idOrganismo='$idOrganismo' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			}

			

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "exel__poas__generales__ver":


			if ($especificidad=="si") {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividad,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,b.itemPreesupuestario,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalTotales FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividad,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,b.itemPreesupuestario,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalTotales FROM poa_programacion_financiera_dos AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			}

			
			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "completa__informacion__salarios":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.cedula,a.cargo,a.tipoCargo,a.tiempoTrabajo,a.sueldoSalario,a.aportePatronal,a.decimoTercera,a.mensualizaTercera,a.decimoCuarta,a.menusalizaCuarta,a.fondosReserva,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_sueldossalarios2022 AS a WHERE a.idSueldos='$idSueldos' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;	

		case "selecciona__modificas__act":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idModificacionOr,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_programacion_financiera AS a1 INNER JOIN poa_item AS b ON a1.idItem=b.idItem WHERE a1.idProgramacionFinanciera=a.idFinancieroOrigen) AS itemOrigen,(SELECT b.itemPreesupuestario FROM poa_programacion_financiera AS a1 INNER JOIN poa_item AS b ON a1.idItem=b.idItem WHERE a1.idProgramacionFinanciera=a.idFinancieroOrigen) AS codigoItemOrigen,a.mesOrigen,a.montoAsignadoOrigen,a.disminucionOrigen,a.totalOrigen,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_programacion_financiera AS a1 INNER JOIN poa_item AS b ON a1.idItem=b.idItem WHERE a1.idProgramacionFinanciera=a.idFinancieroDestino) AS itemDestino,(SELECT b.itemPreesupuestario FROM poa_programacion_financiera AS a1 INNER JOIN poa_item AS b ON a1.idItem=b.idItem WHERE a1.idProgramacionFinanciera=a.idFinancieroDestino) AS codigoItemDestino,a.mesDestino,a.montoAsignadoDestino,a.aumentoDestino,a.totalDestino FROM poa_modificacion_organismo_actividades AS a WHERE a.idOrganismo='$idOrganismoPrincipal' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;	

		case "selecciona__restricciones":

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadModificacion,b.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.descripcion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS descripcion,IF(a.idUsuario='1','Administrador',(SELECT CONCAT_WS(' ',a1.nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM th_usuario AS a1 WHERE a1.id_usuario=a.idUsuario)) AS funcionario,a.fecha,a.hora FROM poa_modificacion_actividad_administra_origen AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem WHERE a.idActividadOrigen='$idOrigen' AND a.idActividadDestino='$idDestino' AND a.estado='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividadModificacion DESC;");


			$jason['indicadorInformacion']=$indicadorInformacion;

		break;	


		case "actividades__conjuntas":

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.permitido,a.descripcion,IF(a.idUsuario='1','Administrador',(SELECT CONCAT_WS(' ',a1.nombre,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM th_usuario AS a1 WHERE a1.id_usuario=a.idUsuario)) AS funcionario,a.hora,a.fecha FROM poa_modificacion_actividad_administra_origen AS a WHERE a.idActividadOrigen='$actividadP' AND a.idActividadDestino='$actividadB' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividadModificacion DESC LIMIT 1;");


	 		$query="SELECT a.idActividad,b.idItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,b.itemPreesupuestario FROM poa_item_actividad AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem WHERE a.idActividad='$actividadB' AND NOT EXISTS (SELECT t.idActividadModificacion FROM poa_modificacion_actividad_administra_origen AS t WHERE t.idItem=b.idItem AND t.idActividadOrigen='$actividadP' AND t.idActividadDestino='$actividadB') AND a.perioIngreso='$aniosPeriodos__ingesos';";
			$resultado = $conexionEstablecida->query($query);

			$listas="<option value='0'>--Elige ítem--</option>";

			 while($registro = $resultado->fetch()) {
			 	
			 	$listas.="<option value='".$registro["idItem"]."'>".utf8_decode(utf8_encode($registro["nombreItem"]))."</option>";

			 }



			$permitido =$indicadorInformacion[0][permitido];
			$descripcion =$indicadorInformacion[0][descripcion];
			$funcionario =$indicadorInformacion[0][funcionario];
			$hora =$indicadorInformacion[0][hora];
			$fecha =$indicadorInformacion[0][fecha];


			$jason['permitido']=$permitido;
			$jason['descripcion']=$descripcion;
			$jason['funcionario']=$funcionario;
			$jason['hora']=$hora;
			$jason['fecha']=$fecha;
			$jason['listas']=$listas;

		break;	

		case "modificacion__actividades":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  nombreActividades FROM poa_actividades;");

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;		


		case "selecciona__acciones__seguimiento__final__matriz":

		$modificacionDos=$objeto->getObtenerInformacionGeneral("SELECT idOrganismo FROM poa_programacion_financiera_dos WHERE idOrganismo='$organismo' AND perioIngreso='$aniosPeriodos__ingesos';");

		if (!empty($modificacionDos[0][idOrganismo])) {
			
			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,c.idActividades,CONCAT_WS('-',c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreActividades,CONCAT_WS('-',b.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreItem,a.enero+a.febrero+a.marzo AS primerTrimestre,a.abril+a.mayo+a.junio AS segundoTrimestre, a.julio+a.agosto+a.septiembre AS tercerTrimestre, a.octubre+a.noviembre+a.diciembre AS cuartoTrimestre,a.totalTotales,a.idItem FROM poa_programacion_financiera_dos AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$organismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad,b.idItem ORDER BY a.idActividad;");

		}else{

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,c.idActividades,CONCAT_WS('-',c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreActividades,CONCAT_WS('-',b.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreItem,a.enero+a.febrero+a.marzo AS primerTrimestre,a.abril+a.mayo+a.junio AS segundoTrimestre, a.julio+a.agosto+a.septiembre AS tercerTrimestre, a.octubre+a.noviembre+a.diciembre AS cuartoTrimestre,a.totalTotales,a.idItem FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$organismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad,b.idItem ORDER BY a.idActividad;");


		}		

		//}


		$jason['indicadorInformacion']=$indicadorInformacion;

		break;		

		case "seguimiento__guardables__seleccionables":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT llamada FROM poa_segimiento_confirmado WHERE idOrganismo='$organismoIdPrin' AND trimestre='$trimestreEvaluador' AND perioIngreso='$aniosPeriodos__ingesos';");


			$llamada=$indicadorInformacion2[0][llamada];
			$jason['llamada']=$llamada;

		break;


		case "autogestionDeportiva__selects":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT idAutogestion,autogestion FROM poa_seguimiento_autogestion WHERE idOrganismo='$idOrganismos' AND trimestre='$trimestre' AND perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.nombreInversion FROM poa_inversion AS a INNER JOIN poa_inversion_usuario AS b ON a.idInversion=b.idInversion WHERE b.idOrganismo='$idOrganismos' AND b.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT idMontosAutoGestion,detalleAu,montoAu,bienSer,detalleDos,trimestre,fecha FROM poa_segimiento_montos_autogestion WHERE idOrganismo='$idOrganismos' AND trimestre='$trimestre' AND perioIngreso='$aniosPeriodos__ingesos';");

			$autogestionV =$indicadorInformacion[0][autogestion];
			$inversioDos =$indicadorInformacion2[0][nombreInversion];

			$indicadorH=false;

			if (!empty($indicadorInformacion[0][idAutogestion])) {
			
				$indicadorH=true;

			}

			$jason['indicadorH']=$indicadorH;
			$jason['autogestionV']=$autogestionV;

			$jason['inversioDos']=$inversioDos;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "deportivas__implementacion__seguis":


			$array=array();

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$query="SELECT c.idItem FROM poa_segimiento_implementacion AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos';";
			 $resultado = $conexionEstablecida->query($query);

			 while($registro = $resultado->fetch()) {
			 	
			 	array_push($array,$registro["idItem"]);

			 }

			$verificadorRepetidos=implode(",", $array);

			// if (empty($verificadorRepetidos)) {

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='7';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_implementacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_implementacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='7' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_implementacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_implementacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='7' AND a.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY idActividad;");

			}


			// }else{

			// 	$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_implementacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_implementacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='7' AND b.idItem NOT IN ($verificadorRepetidos) ORDER BY idActividad;");


			// }


			$jason['indicadorInformacion']=$indicadorInformacion;

		break;



		case "deportivas__tecnico__recreativas":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='6';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreAlcanse, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) AS nombreAlcanse,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='6' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.nombreEvento ORDER BY idActividad;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreAlcanse, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) AS nombreAlcanse,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='6' GROUP BY a.nombreEvento ORDER BY idActividad;");

			}

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;



		case "deportivas__recreacion__seguis":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='6';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_recreacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_recreacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='6' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_recreacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_recreacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='6' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");

			}


			$jason['indicadorInformacion']=$indicadorInformacion;

		break;



		case "deportivas__tecnico__tecnico__seguis__altos":

			$array=array();

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$query="SELECT c.idItem FROM poa_seguimiento_competencia_alto AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos';";
			 $resultado = $conexionEstablecida->query($query);

			 while($registro = $resultado->fetch()) {
			 	
			 	array_push($array,$registro["idItem"]);

			 }

			$verificadorRepetidos=implode(",", $array);

			// if (empty($verificadorRepetidos)) {

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='5';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {
				
				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreAlcanse, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) AS nombreAlcanse,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.nombreEvento ORDER BY idActividad;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreAlcanse, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) AS nombreAlcanse,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.nombreEvento ORDER BY idActividad;");

			}

			// }else{

			// 	$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreAlcanse, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) AS nombreAlcanse,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5' AND b.idItem NOT IN ($verificadorRepetidos) GROUP BY a.nombreEvento ORDER BY idActividad;");

			// }


			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "deportivas__tecnico__tecnico__seguis":

			$array=array();

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$query="SELECT b.nombreEvento FROM poa_seguimiento_competencia_formativo AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos';";
			 $resultado = $conexionEstablecida->query($query);

			 while($registro = $resultado->fetch()) {

			 	$valor="a.nombreEvento!= '".$registro["nombreEvento"]."'";
			 	
			 	array_push($array,$valor);

			 }

			$verificadorRepetidos=implode(" AND ", $array);

				
			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='5';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS nombreProvincia, a.ciudadPais AS paisNombre,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS nombreProvincia,(SELECT a1.paisnombre FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");

			}



			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "deportivas__competencias__seguis":

			$array=array();

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$query="SELECT c.idItem FROM poa_segimiento_competencias AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos';";
			 $resultado = $conexionEstablecida->query($query);

			 while($registro = $resultado->fetch()) {
			 	
			 	array_push($array,$registro["idItem"]);

			 }

			$verificadorRepetidos=implode(",", $array);

			// if (empty($verificadorRepetidos)) {

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='5';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT a1.itemPreesupuestario FROM poa_item AS a1 WHERE a1.idItem=b.idItem) AS itemPreesupuestario,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=b.idItem) AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_competencias AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_competencias AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='5';");

			}else{
				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_competencias AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_competencias AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5' AND a.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY a.idPda DESC;");

			}

			// }else{

			// 	$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_competencias AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_competencias AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='5'  AND b.idItem NOT IN ($verificadorRepetidos) ORDER BY b.idActividad; ORDER BY idActividad;");

			// }

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "deportivas__tecnico__tecnico__seguis__capacitacion":

			$array=array();

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$query="SELECT b.nombreEvento FROM poa_seguimiento_capacitacion_tecnico AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos';";
			 $resultado = $conexionEstablecida->query($query);

			 while($registro = $resultado->fetch()) {

			 	$valor="a.nombreEvento!= '".$registro["nombreEvento"]."'";
			 	
			 	array_push($array,$valor);

			 }

			$verificadorRepetidos=implode(" AND ", $array);

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='3';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {			

			// if (empty($verificadorRepetidos)) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS nombreProvincia,(SELECT a1.paisnombre FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='3' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");


			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS nombreProvincia,(SELECT a1.paisnombre FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='3' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY idActividad;");

			}

			// }else{

			// 	$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte) AS nombreDeporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS nombreProvincia,(SELECT a1.paisnombre FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS paisNombre,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='3' AND $verificadorRepetidos ORDER BY idActividad;");

			// }

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "deportivas__tecnico__seguis":

			$array=array();

			$conexionRecuperada= new conexion();
 			$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		$query="SELECT c.idItem FROM poa_segimiento_capacitacion AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE c.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos';";
			 $resultado = $conexionEstablecida->query($query);

			 while($registro = $resultado->fetch()) {
			 	
			 	array_push($array,$registro["idItem"]);

			 }

			$verificadorRepetidos=implode(",", $array);

			// if (empty($verificadorRepetidos)) {
				
			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPda FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.idActividad='3';");

			if (!empty($indicadorInformacion__mos[0][idPda])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_capacitacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_capacitacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='3' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY b.idActividad;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_capacitacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_capacitacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='3' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY b.idActividad;");

			}

				

			// }else{

			// 	$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,a.nombreEvento,a.detalleBien,a.justificacionAd,a.canitdarBie,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales,(SELECT a1.mes FROM poa_segimiento_capacitacion AS a1 WHERE a1.idAdministrativo=a.idPda LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_segimiento_capacitacion AS a1 WHERE a1.idAdministrativo=a.idPda GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,a.fechaInicio,a.fechaFin FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND b.idActividad='3' AND b.idItem NOT IN ($verificadorRepetidos) ORDER BY b.idActividad;");

			// }

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "mantenimiento__seguis__tecnicos":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimiento FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			if (!empty($indicadorInformacion__mos[0][idMantenimiento])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT  a.idMantenimiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreInfras,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS provincia,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS direccionCompleta,a.estado,a.tipoRecursos,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoIntervencion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoIntervencion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.detallarTipoIn, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS detallarTipoIn,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoMantenimiento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoMantenimiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS materialesServicios,a.fechaUltimo,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales,(SELECT a1.trimestre FROM poa_seguimiento_mantenimiento_tecnico AS a1 WHERE a1.idAdministrativo=a.idMantenimiento LIMIT 1) AS mes FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON b.idItem=c.idItem WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idProgramacionFinanciera ORDER BY a.idMantenimiento DESC;");


			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT  a.idMantenimiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreInfras,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS provincia,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS direccionCompleta,a.estado,a.tipoRecursos,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoIntervencion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoIntervencion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.detallarTipoIn, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS detallarTipoIn,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoMantenimiento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoMantenimiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS materialesServicios,a.fechaUltimo,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales,(SELECT a1.trimestre FROM poa_seguimiento_mantenimiento_tecnico AS a1 WHERE a1.idAdministrativo=a.idMantenimiento LIMIT 1) AS mes FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON b.idItem=c.idItem WHERE b.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idProgramacionFinanciera ORDER BY a.idMantenimiento DESC;");

			}

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "mantenimiento__seguis":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimiento FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			if (!empty($indicadorInformacion__mos[0][idMantenimiento])) {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT  a.idMantenimiento,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreInfras,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoIntervencion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoIntervencion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoMantenimiento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoMantenimiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS materialesServicios,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef,a.detallarTipoIn, (SELECT a1.mes FROM poa_segimiento_mantenimiento AS a1 WHERE a1.idAdministrativo=a.idMantenimiento LIMIT 1) AS mes, (SELECT SUM(mensualEjecutado) FROM poa_segimiento_mantenimiento AS a1 WHERE a1.idAdministrativo=a.idMantenimiento GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON b.idItem=c.idItem WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idProgramacionFinanciera ORDER BY a.idMantenimiento DESC;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT  a.idMantenimiento,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreInfras,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoIntervencion, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoIntervencion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoMantenimiento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoMantenimiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS materialesServicios,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef,a.detallarTipoIn, (SELECT a1.mes FROM poa_segimiento_mantenimiento AS a1 WHERE a1.idAdministrativo=a.idMantenimiento LIMIT 1) AS mes, (SELECT SUM(mensualEjecutado) FROM poa_segimiento_mantenimiento AS a1 WHERE a1.idAdministrativo=a.idMantenimiento GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON b.idItem=c.idItem WHERE b.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idProgramacionFinanciera ORDER BY a.idMantenimiento DESC;");


			}


			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "mantenimiento__tecnicos__seguimiento__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimientoTec,a.planificadoInicial,a.ejecutadoInicial,a.planificadoFinal,a.ejectuadoFinal,a.trimestre,a.porcentaje,b.nombreInfras AS detallarTipoIn,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.provincia) AS provincias,b.direccionCompleta, b.estado,b.tipoMantenimiento FROM poa_seguimiento_mantenimiento_tecnico AS a INNER JOIN poa_mantenimiento AS b ON a.idAdministrativo=b.idMantenimiento WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosMantenimientoTecnico,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_mantenimiento_tecnico AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "recreacion__seguimiento__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idCompetenciaSeguimiento,b.nombreEvento,a.fechaInicioP,a.fechaInicioEjecutado,a.fechaFinP,a.fechaFinEjecutado,a.beneficiariosHombres,a.beneficiariosMujeres,a.totalT,a.tipoOrganizacion,a.trimestre FROM poa_seguimiento_recreativo_tecnico AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosRT,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_recreativo_tecnicos AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "capacitacion__seguimiento__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idCapacitacionTec,b.nombreEvento,a.planificadoInicial,a.ejecutadoInicial,a.planificadoFinal,a.ejectuadoFinal,a.tipoOrganizacion,a.trimestre FROM poa_seguimiento_capacitacion_tecnico AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");



			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCapacitacionTecnico,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_capacitacion_tecnico AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "recreativos__altos__seguimiento":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idCompetenciaAltos,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,a.evento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.predicionResultados, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS predicionResultados,a.oro,a.plata,a.bronce,a.total,a.cuarOc,a.analisis,a.trimestre,a.observacionesTecnicas,a.porcentaje,a.beneficiariosHombres,a.beneficiariosMujeres,a.totalT,a.tipoOrganizacion,a.ruc,a.nombreOrganismo FROM poa_seguimiento_competencia_alto2 AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCompetenciasAltos,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_competencia_alto AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;

			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "recreativos__formativo__seguimiento":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idCompetenciaFormativo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,a.evento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.predicionResultados, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS predicionResultados,a.oro,a.plata,a.bronce,a.total,a.cuarOc,a.analisis,a.trimestre,a.observacionesTecnicas,a.porcentaje,a.beneficiariosHombres,a.beneficiariosMujeres,a.totalT,a.tipoOrganizacion,a.ruc,a.nombreOrganismo,a.observacionesTecnicas FROM poa_seguimiento_competencia_formativo AS a INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCompetenciasTecnicas,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_competencia_formativos AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");



			$jason['indicadorInformacion']=$indicadorInformacion;

			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "mantenimiento__seguimientos__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idMantenimiento,a.mes,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.mensualProgramado,SUM(a.mensualEjecutado) AS mensualEjecutado,IF(a.observaciones IS NULL,' ',a.observaciones) AS observaciones,b.nombreInfras AS detallarTipoIn,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.provincia) AS provincias,b.direccionCompleta, b.estado,b.tipoMantenimiento FROM poa_segimiento_mantenimiento AS a INNER JOIN poa_mantenimiento AS b ON a.idAdministrativo=b.idMantenimiento INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE c.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY d.nombreItem,a.mes,b.idMantenimiento ORDER BY d.nombreItem,a.mes,a.idMantenimiento DESC;");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaMantenimiento,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idMantenimiento=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idMantenimiento=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_mantenimiento AS a WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosMantenimiento,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idMantenimiento=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idMantenimiento=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_mantenimiento AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "mantenimiento__seguimientos__tablas__2":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaMantenimiento,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_mantenimiento AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosMantenimiento,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_mantenimiento AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "capacitacion__seguimiento__tablas__ms__2":


			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaCapacitacion,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_capacitacion AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCapacitacion,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_capacitacion AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "capacitacion__seguimiento__tablas__ms":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idCapacitacion,a.mes,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.mensualProgramado,SUM(a.mensualEjecutado) AS mensualEjecutado,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento FROM poa_segimiento_capacitacion AS a   INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem  WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.nombreEvento,a.mes,b.idPda ORDER BY d.nombreItem,a.mes,a.idCapacitacion DESC;");


			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaCapacitacion,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_capacitacion AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCapacitacion,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_capacitacion AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "competencia__implementacion__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idImplementacion,a.mes,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.mensualProgramado,SUM(a.mensualEjecutado) AS mensualEjecutado,a.observaciones,a.cantidadBienes FROM poa_segimiento_implementacion AS a   INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem  WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY d.nombreItem,a.mes,b.idPda ORDER BY d.nombreItem,a.mes,a.idImplementacion DESC;");


			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaInstalaciones,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_instalaciones AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosInstalaciones,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_instalaciones AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "competencia__implementacion__tablas__2":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaInstalaciones,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_instalaciones AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosInstalaciones,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_instalaciones AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "competencias__competencias__altos__altos__implementacion__tablas__2":

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCompetenciasAltos,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_competencia_alto AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "competencias__competencias__altos__altos__implementacion__tablas__2__formativos":

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCompetenciasTecnicas,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_competencia_formativos AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "competencias__competencias__implementacion__tablas__2":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaCompetencia,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_competencia AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosHonorarios,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_honorarios AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "recreativos__seguimiento__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idRecreativos,a.mes,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.mensualProgramado,SUM(a.mensualEjecutado) AS mensualEjecutado,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento  FROM poa_segimiento_recreativos AS a   INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem  WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos'  GROUP BY b.nombreEvento,a.mes,b.idPda ORDER BY d.nombreItem,a.mes,a.idRecreativos DESC;");


			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaRecreativo,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_facturas_recreativo AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosRecreativo,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_otros_recreativo AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;		

		case "recreativos__seguimiento__tablas__2":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaRecreativo,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_facturas_recreativo AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosRecreativo,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_otros_recreativo AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;	

		case "competencia__seguimientos__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idCompetencias,a.mes,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.mensualProgramado,SUM(a.mensualEjecutado) AS mensualEjecutado,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,a.observaciones,a.cantidadBienes  FROM poa_segimiento_competencias AS a   INNER JOIN poa_actdeportivas AS b ON a.idAdministrativo=b.idPda INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem  WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' GROUP BY b.nombreEvento,a.mes,b.idPda ORDER BY b.nombreEvento,a.mes,a.idCompetencias DESC;");


			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaCompetencia,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_facturas_competencia AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCompetencia,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_otros_competencia AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "competencia__seguimientos__tablas__2":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaCompetencia,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_facturas_competencia AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosCompetencia,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actdeportivas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idPda=a.idActividadAc) AS itemPreesupuestario FROM poa_seguimiento_otros_competencia AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "administrativo__seguimientos__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idAdministrativoSegui,a.mes,d.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.mensualProgramado,SUM(a.mensualEjecutado) AS mensualEjecutado,IF(a.observaciones IS NULL,' ',a.observaciones) AS observaciones FROM poa_seguimiento_administrativo AS a INNER JOIN poa_actividadesadministrativas AS b ON a.idAdministrativo=b.idActividadAd INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE c.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY d.nombreItem,a.mes,b.idActividadAd ORDER BY d.nombreItem,a.mes,a.idAdministrativoSegui DESC;");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaAdministrativos,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_administrativo AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosAdministrativos,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_administrativos AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "administrativo__seguimientos__tablas__2":

	

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaAdministrativos,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_facturas_administrativo AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");


			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosAdministrativos,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a3.itemPreesupuestario, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 INNER JOIN poa_programacion_financiera AS a2 ON a2.idProgramacionFinanciera=a1.idProgramacionFinanciera INNER JOIN poa_item AS a3 ON a3.idItem=a2.idItem WHERE a1.idActividadAd=a.idActividadAc)  AS itemPreesupuestario FROM poa_seguimiento_otros_administrativos AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "administrativos__seguis":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadAd FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			if (!empty($indicadorInformacion__mos[0][idActividadAd])) {
			
				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadAd,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS justificacionActividad,a.cantidadBien,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef, (SELECT a1.mes FROM poa_seguimiento_administrativo AS a1 WHERE a1.idAdministrativo=a.idActividadAd LIMIT 1) AS mes, (SELECT SUM(mensualEjecutado) FROM poa_seguimiento_administrativo AS a1 WHERE a1.idAdministrativo=a.idActividadAd GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados  FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idItem;");


			} else {			

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadAd,c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS justificacionActividad,a.cantidadBien,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=b.idOrganismo) AS esigef, (SELECT a1.mes FROM poa_seguimiento_administrativo AS a1 WHERE a1.idAdministrativo=a.idActividadAd LIMIT 1) AS mes, (SELECT SUM(mensualEjecutado) FROM poa_seguimiento_administrativo AS a1 WHERE a1.idAdministrativo=a.idActividadAd GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados  FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idItem;");

			}


			$jason['indicadorInformacion']=$indicadorInformacion;

		break;


		case "honorarios__seguis":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT idHonorarios FROM poa_honorarios2022 WHERE modifica='A' AND idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos';");



			if (!empty($indicadorInformacion__mos[0][idHonorarios])) {
			
				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idHonorarios,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.cargo,a.honorarioMensual,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total AS totalTotales,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoCargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoCargo,(SELECT a1.mes FROM poa_seguimiento_honorarios AS a1 WHERE a1.idHonorarios=a.idHonorarios LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_seguimiento_honorarios AS a1 WHERE a1.idHonorarios=a.idHonorarios GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS esigef FROM poa_honorarios2022 AS a WHERE a.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY a.idHonorarios DESC;");

			}else{

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idHonorarios,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.cargo,a.honorarioMensual,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total AS totalTotales,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoCargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoCargo,(SELECT a1.mes FROM poa_seguimiento_honorarios AS a1 WHERE a1.idHonorarios=a.idHonorarios LIMIT 1) AS mes,(SELECT SUM(mensualEjecutado) FROM poa_seguimiento_honorarios AS a1 WHERE a1.idHonorarios=a.idHonorarios GROUP BY a1.idOrganismo LIMIT 1) AS totalCompletados,(SELECT a1.idEsigef FROM poa_esigef AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS esigef FROM poa_honorarios2022 AS a WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idHonorarios DESC;");

			}

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "sueldos__salarios__seguis":

			$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT idSueldos FROM poa_sueldossalarios2022 WHERE modifica='A' AND idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos';");

			$desvinculacion=$objeto->getObtenerInformacionGeneral("SELECT enero,febreo,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_modificacion_desvinculacion_inicio WHERE opcion='desahucio' AND idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idDesvinculacion DESC LIMIT 1;");

			$despido=$objeto->getObtenerInformacionGeneral("SELECT enero,febreo,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_modificacion_desvinculacion_inicio WHERE opcion='despido' AND idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idDesvinculacion DESC LIMIT 1;");

			$renuncia=$objeto->getObtenerInformacionGeneral("SELECT enero,febreo,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_modificacion_desvinculacion_inicio WHERE opcion='renuncia' AND idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idDesvinculacion DESC LIMIT 1;");

			$compensacion=$objeto->getObtenerInformacionGeneral("SELECT enero,febreo,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_modificacion_desvinculacion_inicio WHERE opcion='compensación' AND idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idDesvinculacion DESC LIMIT 1;");


			if (!empty($indicadorInformacion__mos[0][idSueldos])) {
				
					$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.cargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS cargo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoCargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoCargo,a.tiempoTrabajo,a.sueldoSalario,a.aportePatronal,a.decimoTercera,a.decimoCuarta,a.fondosReserva,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total,a.idOrganismo,(SELECT mes FROM poa_seguimiento_sueldos_salarios AS a1 WHERE a1.idSueldosSalarios=a.idSueldos LIMIT 1) AS mes,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroDesahucio,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroDesahucio,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoDesahucio,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilDesahucio,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoDesahucio,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioDesahucio,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioDesahucio,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoDesahucio,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreDesahucio,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreDesahucio,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreDesahucio,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreDesahucio,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroDespido,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroDespido,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoDespido,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilDespido,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoDespido,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioDespido,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioDespido,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoDespido,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreDespido,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreDespido,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreDespido,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreDespido,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroRenuncia,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroRenuncia,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoRenuncia,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilRenuncia,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoRenuncia,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioRenuncia,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioRenuncia,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoRenuncia,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreRenuncia,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreRenuncia,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreRenuncia,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreRenuncia,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroCompensacion,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroCompensacion,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoCompensacion,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilCompensacion,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoCompensacion,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioCompensacion,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioCompensacion,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoCompensacion,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreCompensacion,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreCompensacion,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreCompensacion,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreCompensacion FROM poa_sueldossalarios2022 AS a WHERE a.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idSueldos DESC;");

				}else{			

					$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.cargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS cargo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.tipoCargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS tipoCargo,a.tiempoTrabajo,a.sueldoSalario,a.aportePatronal,a.decimoTercera,a.decimoCuarta,a.fondosReserva,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total,a.idOrganismo,(SELECT mes FROM poa_seguimiento_sueldos_salarios AS a1 WHERE a1.idSueldosSalarios=a.idSueldos LIMIT 1) AS mes,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroDesahucio,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroDesahucio,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoDesahucio,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilDesahucio,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoDesahucio,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioDesahucio,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioDesahucio,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoDesahucio,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreDesahucio,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreDesahucio,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreDesahucio,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='desahucio' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreDesahucio,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroDespido,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroDespido,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoDespido,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilDespido,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoDespido,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioDespido,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioDespido,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoDespido,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreDespido,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreDespido,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreDespido,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='despido' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreDespido,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroRenuncia,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroRenuncia,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoRenuncia,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilRenuncia,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoRenuncia,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioRenuncia,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioRenuncia,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoRenuncia,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreRenuncia,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreRenuncia,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreRenuncia,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='renuncia' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreRenuncia,(SELECT a1.enero FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS eneroCompensacion,(SELECT a1.febreo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS febreroCompensacion,(SELECT a1.marzo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS marzoCompensacion,(SELECT a1.abril FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS abrilCompensacion,(SELECT a1.mayo FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS mayoCompensacion,(SELECT a1.junio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS junioCompensacion,(SELECT a1.julio FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS julioCompensacion,(SELECT a1.agosto FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS agostoCompensacion,(SELECT a1.septiembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS septiembreCompensacion,(SELECT a1.octubre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS octubreCompensacion,(SELECT a1.noviembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS noviembreCompensacion,(SELECT a1.diciembre FROM poa_modificacion_desvinculacion_inicio AS a1 WHERE a1.opcion='compensación' AND a1.idSueldos=a.idSueldos ORDER BY a1.idDesvinculacion DESC LIMIT 1) AS diciembreCompensacion FROM poa_sueldossalarios2022 AS a WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idSueldos DESC;");

				}


				$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "sueldos__seguimientos__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldosSeguimeintos,b.cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,a.idSueldosSalarios,a.sueldoSalarioPlanificado,a.sueldoSalarioEjecutado AS sueldoSalarioEjecutado,a.aporteIessPlanificado,a.aporteIessEjecutado AS aporteIessEjecutado,a.decimoTerceroPlanificado,a.decimoTerceroEjecutado AS decimoTerceroEjecutado,a.decimoCuartoPlanificado,a.decimoCuartoEjecutado AS decimoCuartoEjecutado,a.fondosReservasPlanificado,a.fondosReservasEjecutado AS fondosReservasEjecutado,a.planilla,a.comprobante,a.rol,a.mes,a.idOrganismo,a.idSueldosSalarios,b.tipoCargo,a.compensacionDeshaucioProgramado,a.despidoIntepestivoProgramado,a.reunciaVoluntariaProgramado,a.vacacionesProgramado,a.compensacionDeshaucioEjecutado,a.despidoIntepestivoEjecutado,a.renunciaVoluntariaEjecutado,a.vacionesEjecutado  FROM poa_seguimiento_sueldos_salarios AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldosSalarios=b.idSueldos WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.periodo='$trimestres' AND a.idOrganismo='$idOrganismos' ORDER BY b.nombres,a.mes,a.idSueldosSeguimeintos DESC;");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT idComprobante__general,planilla,rol,comprobante,mes,trimestre FROM poa_seguimiento__comprobante WHERE idOrganismo='$idOrganismos' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre='$trimestres' GROUP BY idComprobante__general;");


			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;

		break;

	case "sueldos__seguimientos__tablas__2":

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT idComprobante__general,planilla,rol,comprobante,mes,trimestre FROM poa_seguimiento__comprobante WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre='$trimestres' GROUP BY idComprobante__general;");

			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "honorarios__seguimientos__tablas":


			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idHonorariosSeguimientos,a.mes,b.cedula,b.nombres,a.mensualProgramado,a.mensualEjecutado,b.cargo,a.observaciones  FROM poa_seguimiento_honorarios AS a LEFT JOIN poa_honorarios2022 AS b ON a.idHonorarios=b.idHonorarios WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres' AND a.idOrganismo='$idOrganismos';");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaHonorarios,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,a.monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres FROM poa_honorarios2022 AS a1 WHERE a1.idHonorarios=a.idActividadAc) AS nombres FROM poa_seguimiento_facturas_honorarios AS a WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosHonorarios,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres FROM poa_honorarios2022 AS a1 WHERE a1.idHonorarios=a.idActividadAc) AS nombres FROM poa_seguimiento_otros_honorarios AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;


		case "honorarios__seguimientos__tablas__2":

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.idFacturaHonorarios,a.documento,a.numeroFactura,a.fechaFactura,a.ruc,a.autorizacion,a.monto,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres FROM poa_honorarios2022 AS a1 WHERE a1.idHonorarios=a.idActividadAc) AS nombres FROM poa_seguimiento_facturas_honorarios AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres';");

			$indicadorInformacion3=$objeto->getObtenerInformacionGeneral("SELECT a.idOtrosHonorarios,a.documento,a.mes,a.trimestre,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres FROM poa_honorarios2022 AS a1 WHERE a1.idHonorarios=a.idActividadAc) AS nombres FROM poa_seguimiento_otros_honorarios AS a WHERE a.idOrganismo='$idOrganismo' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion2']=$indicadorInformacion2;
			$jason['indicadorInformacion3']=$indicadorInformacion3;

		break;

		case "indicadores__seguimientos__tablas":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador,a.idModificaIndicadores,a.totalProgramado,a.totalEjecutado,a.documento,a.idOrganismo,a.trimestre,a.idActividad FROM poa_indicadores_seguimiento AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_indicadores AS c ON c.idIndicadores=b.idLineaPolitica WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres' GROUP BY a.idActividad ORDER BY a.idModificaIndicadores DESC;");

			$jason['indicadorInformacion']=$indicadorInformacion;

		break;

		case "indicadores__funcionales__seguimientos":

		$indicadorInformacion__mos=$objeto->getObtenerInformacionGeneral("SELECT a.idPoaEnviado FROM poa_poainicial AS a WHERE a.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' LIMIT 1;");


		if (!empty($indicadorInformacion__mos[0][idPoaEnviado])) {
			
				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_indicadores AS c ON c.idIndicadores=b.idLineaPolitica WHERE a.idOrganismo='$idOrganismos' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad,a.idPoaEnviado;");

			} else {

				$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_indicadores AS c ON c.idIndicadores=b.idLineaPolitica WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos'  GROUP BY a.idActividad  ORDER BY a.idActividad,a.idPoaEnviado;");
				
				// $indicadorInformacion=$objeto->getObtenerInformacionGeneral("(SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='1' AND a.idOrganismo='$idOrganismos' AND a.metaindicador>0 AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='1' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='2' AND a.idOrganismo='$idOrganismos' AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='2' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='3' AND a.idOrganismo='$idOrganismos' AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='3' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='4' AND a.idOrganismo='$idOrganismos' AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='4' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='5' AND a.idOrganismo='$idOrganismos' AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='5' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='6' AND a.idOrganismo='$idOrganismos' AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='6' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='7' AND a.idOrganismo='$idOrganismos' AND  NOT EXISTS (SELECT NULL FROM poa_indicadores_seguimiento AS t WHERE t.idActividad='7' AND t.idOrganismo='$idOrganismos') ORDER BY a.idPoaEnviado DESC LIMIT 1);");

			}
			

			$jason['indicadorInformacion']=$indicadorInformacion;


		break;
		
		case  "seleccionExcel":

			$check_modificaciones = json_decode($check_modificaciones);

			$idProgramacionFinanciera=array();
			$nombreItem=array();
			$enero=array();
			$febrero=array();
			$marzo=array();
			$abril=array();
			$mayo=array();
			$junio=array();
			$julio=array();
			$agosto=array();
			$septiembre=array();
			$octubre=array();
			$noviembre=array();
			$diciembre=array();
			$totalTotales=array();

			foreach ($check_modificaciones as $value) {
				
				$consulta=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalTotales FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem WHERE a.idProgramacionFinanciera='$value' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($idProgramacionFinanciera,$consulta[0][idProgramacionFinanciera]);
				array_push($nombreItem,$consulta[0][nombreItem]);
				array_push($enero,$consulta[0][enero]);
				array_push($febrero,$consulta[0][febrero]);
				array_push($marzo,$consulta[0][marzo]);
				array_push($abril,$consulta[0][abril]);
				array_push($mayo,$consulta[0][mayo]);
				array_push($junio,$consulta[0][junio]);
				array_push($julio,$consulta[0][julio]);
				array_push($agosto,$consulta[0][agosto]);
				array_push($septiembre,$consulta[0][septiembre]);
				array_push($octubre,$consulta[0][octubre]);
				array_push($noviembre,$consulta[0][noviembre]);
				array_push($diciembre,$consulta[0][diciembre]);
				array_push($totalTotales,$consulta[0][totalTotales]);

			}

			$jason['idProgramacionFinanciera']=$idProgramacionFinanciera;
			$jason['nombreItem']=$nombreItem;
			$jason['enero']=$enero;
			$jason['febrero']=$febrero;
			$jason['marzo']=$marzo;
			$jason['abril']=$abril;
			$jason['mayo']=$mayo;
			$jason['junio']=$junio;
			$jason['julio']=$julio;
			$jason['agosto']=$agosto;
			$jason['septiembre']=$septiembre;
			$jason['octubre']=$octubre;
			$jason['noviembre']=$noviembre;
			$jason['diciembre']=$diciembre;
			$jason['totalTotales']=$totalTotales;

		break;

		case  "ruc_i":

			$informacion__obtenidas=$objeto->getObtenerInformacionGeneral("SELECT a.idOrganismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreOrganismo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.idProvincia) AS nombreProvincia,(SELECT a1.nombreCanton FROM in_md_canton AS a1 WHERE a1.idCanton=a.idCanton) AS nombreCanton,(SELECT a1.nombreParroquia FROM in_md_parroquia AS a1 WHERE a1.idParroquia=a.idParroquia) AS nombreParroquia FROM poa_organismo AS a WHERE a.ruc='$rucOrganismo';");

			$jason['informacion__obtenidas']=$informacion__obtenidas;

		break;

		case  "observasEstados":

			$informacion__obtenidas=$objeto->getObtenerInformacionGeneral("SELECT documento,observaciones FROM poa_concluciones WHERE estadoObservacion='A' AND idOrganismo='$idOrganismos' AND tipoObservacion='$disgustador' AND perioIngreso='$aniosPeriodos__ingesos';");

			$jason['informacion__obtenidas']=$informacion__obtenidas;

		break;

		case  "seleccionasCoordinas":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");




			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=a.idActividad LIMIT 1)) AS indicador, a.primertrimestre AS primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador,a.idActividad FROM poa_poainicial AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC;");

			

			$obtenerArchivoCoordinas__infras=$objeto->getObtenerInformacionGeneral("SELECT documento FROM poa_concluciones WHERE (documento LIKE '%__1__4.pdf%' OR documento LIKE '%__1___15__4%') AND idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idObservacionesTecnicas DESC LIMIT 1;");

			$obtenerArchivoCoordinas__administrativos=$objeto->getObtenerInformacionGeneral("SELECT documento FROM poa_concluciones WHERE (documento LIKE '%__2__4.pdf%' OR documento LIKE '%__2___7__4.pdf%' OR (documento LIKE '%f__%' AND idOrganismo='1509')) AND idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idObservacionesTecnicas DESC LIMIT 2;");

			$obtenerArchivoCoordinas__subcess=$objeto->getObtenerInformacionGeneral("SELECT documento FROM poa_concluciones WHERE (documento LIKE '%__26__7.pdf%' OR documento LIKE '%__24__7.pdf%') AND idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idObservacionesTecnicas DESC LIMIT 1;");

			$obtenernombre__organismos=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreOrganismo FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$comprobador1=true;
			$comprobador2=true;
			$comprobador3=false;

			/*===================================
			=            Actividades            =
			===================================*/

			$coordinadorId=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='3' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC;");

			$directorId=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC;");



			$actividadUno=$objeto->getObtenerInformacionGeneral("SELECT a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_preliminar_envio AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND a.idActividad='1';");

			if (!empty($actividadUno[0][idOrganismo])) {

				$actividadFinanciero=$objeto->getObtenerInformacionGeneral("SELECT IF(financiero IS NOT NULL AND financiero2 IS NOT NULL,IF((SELECT idPoaInicial FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo=a.idOrganismo AND  b.idActividad='1' AND a.financieroE='".$coordinadorId[0][id_usuario]."' AND a.financieroE2='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' OR financieroE2='T' OR financieroE='E' LIMIT 1)IS NOT NULL,1,NULL),IF(financiero IS NOT NULL AND financiero2 IS NULL,IF((SELECT idPoaInicial FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo=a.idOrganismo AND  b.idActividad='1' AND a.financieroE='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' LIMIT 1) IS NOT NULL,1,NULL),IF(financiero IS NULL AND financiero2 IS NOT NULL,IF((SELECT idPoaInicial FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo=a.idOrganismo AND  b.idActividad='1' AND a.financieroE2='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' LIMIT 1) IS NOT NULL,1,NULL),1))) AS resultado FROM poa_preliminar_envio AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.idActividad='1' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad;");


				if ($actividadFinanciero[0][resultado]==1) {
					
					$comprobador1=true;

				}

			}else{

				$comprobador1=true;
	
			}

			$actividadDos=$objeto->getObtenerInformacionGeneral("SELECT a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_preliminar_envio AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND a.idActividad='2' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			if (!empty($actividadDos[0][idOrganismo])) {

				$actividadMantenimiento=$objeto->getObtenerInformacionGeneral("SELECT IF(instalaciones IS NOT NULL AND instlaaciones2 IS NOT NULL,IF((SELECT idPoaInicial FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo=a.idOrganismo AND  b.idActividad='2' AND a.instalacionesE='".$coordinadorId[0][id_usuario]."' AND a.instalacionesE2='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' LIMIT 1)IS NOT NULL,1,NULL),IF(instalaciones IS NOT NULL AND instlaaciones2 IS NULL,IF((SELECT idPoaInicial FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo=a.idOrganismo AND  b.idActividad='2' AND a.instalacionesE='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' LIMIT 1) IS NOT NULL,1,NULL),IF(instalaciones IS NULL AND instlaaciones2 IS NOT NULL,IF((SELECT idPoaInicial FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo=a.idOrganismo AND  b.idActividad='2' AND a.instlaaciones2='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' LIMIT 1) IS NOT NULL,1,NULL),1))) AS resultado FROM poa_preliminar_envio AS a INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND b.idActividad='2' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad;");


				if ($actividadMantenimiento[0][resultado]==1) {
					
					$comprobador2=true;

				}

			}else{

				$comprobador2=true;

			}		

			$actividadTres=$objeto->getObtenerInformacionGeneral("SELECT a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_preliminar_envio AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='3' OR a.idActividad='4' OR a.idActividad='5' OR a.idActividad='6' OR a.idActividad='7') AND a.perioIngreso='$aniosPeriodos__ingesos';");	

			if (!empty($actividadTres[0][idOrganismo])) {

				$actividadSubsecretario=$objeto->getObtenerInformacionGeneral("SELECT IF(a.subsecretariaE='".$coordinadorId[0][id_usuario]."' OR a.planificacion='".$directorId[0][id_usuario]."' OR a.subsecretaria=NULL,1,NULL) AS resultado FROM poa_preliminar_envio AS a  INNER JOIN poa_programacion_financiera AS b ON a.idOrganismo=b.idOrganismo WHERE a.idOrganismo='$idOrganismo' AND (b.idActividad='3' OR b.idActividad='4' OR b.idActividad='5' OR b.idActividad='6' OR b.idActividad='7') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad;");
					$comprobador3=true;


				if ($actividadSubsecretario[0][resultado]==1) {
					
					$comprobador3=true;

				}

			}else{

				$comprobador3=true;

			}		

			
			
			/*=====  End of Actividades  ======*/


			/*==========================================
			=            Actividad elegidas            =
			==========================================*/
			
			$actividad1=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera FROM poa_programacion_financiera AS a WHERE a.idActividad='1' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$actividad2=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera FROM poa_programacion_financiera AS a WHERE a.idActividad='2' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");

			$actividad3=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera FROM poa_programacion_financiera AS a WHERE a.idActividad='3' OR a.idActividad='4' OR a.idActividad='5' OR a.idActividad='6' OR a.idActividad='7' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");
			
			/*=====  End of Actividad elegidas  ======*/

			/*==========================================================
			=            Información general de actividades            =
			==========================================================*/
			
			$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");
			
			/*=====  End of Información general de actividades  ======*/

			/*===============================================
			=            Indicadores información            =
			===============================================*/
			
			$indicadorInformacion__dos=$objeto->getObtenerInformacionGeneral("(SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='1' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.metaindicador>0  ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='2' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='3' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='4' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='5' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='6' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='7' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1);");
			
			/*=====  End of Indicadores información  ======*/
			
			$indicadorInformacion__documento__planificacion__recibidos=$objeto->getObtenerInformacionGeneral("SELECT documentoPLanificacion FROM poa_preliminar_envio WHERE perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo';");

			$presupuestos__flujo__transferencias=$objeto->getObtenerInformacionGeneral("SELECT SUM(a.enero) AS enero, SUM(a.febrero) AS febrero, SUM(a.marzo) AS marzo, SUM(a.abril) AS abril, SUM(a.mayo) AS mayo, SUM(a.junio) AS junio, SUM(a.julio) AS julio, SUM(a.agosto) AS agosto, SUM(a.septiembre) AS septiembre, SUM(a.octubre) AS octubre, SUM(a.noviembre) AS noviembre, SUM(a.diciembre) AS diciembre, (SELECT a2.nombreInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a2.idInversion=a1.idInversion WHERE a1.idOrganismo=a.idOrganismo AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a2.idInversion DESC LIMIT 1) AS inversion FROM poa_programacion_financiera AS a WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;");
			
			
			$actividad1__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='1' GROUP BY a.idOrganismo;");

			$nombre1__flujo=$actividad1__flujo[0][actividadesNombre];
			$rubro1__flujo=$actividad1__flujo[0][suma];

			
			$actividad2__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='2' GROUP BY a.idOrganismo;");

			$nombre2__flujo=$actividad2__flujo[0][actividadesNombre];
			$rubro2__flujo=$actividad2__flujo[0][suma];

			$actividad3__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='3' GROUP BY a.idOrganismo;");

			$nombre3__flujo=$actividad3__flujo[0][actividadesNombre];
			$rubro3__flujo=$actividad3__flujo[0][suma];



			$actividad4__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='4' GROUP BY a.idOrganismo;");

			$nombre4__flujo=$actividad4__flujo[0][actividadesNombre];
			$rubro4__flujo=$actividad4__flujo[0][suma];


			$actividad5__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='5' GROUP BY a.idOrganismo;");

			$nombre5__flujo=$actividad5__flujo[0][actividadesNombre];
			$rubro5__flujo=$actividad5__flujo[0][suma];


			$actividad6__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='6' GROUP BY a.idOrganismo;");

			$nombre6__flujo=$actividad6__flujo[0][actividadesNombre];
			$rubro6__flujo=$actividad6__flujo[0][suma];



			$actividad7__flujo=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadesNombre,ROUND(SUM(a.totalTotales),2) AS suma  FROM poa_programacion_financiera AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='7' GROUP BY a.idOrganismo;");

			$nombre7__flujo=$actividad7__flujo[0][actividadesNombre];
			$rubro7__flujo=$actividad7__flujo[0][suma];

			$inversion__flujos=$objeto->getObtenerInformacionGeneral("SELECT b.nombreInversion FROM poa_inversion_usuario AS a INNER JOIN poa_inversion AS b ON a.idInversion=b.idInversion WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$documentoTransferencias__s=$objeto->getObtenerInformacionGeneral("SELECT documento FROM poa_flujo_transferencia WHERE perioIngreso='2023' AND idOrganismo='$idOrganismo' ORDER BY idFlujo DESC LIMIT 1;");

			$enviadorPoa_preEnvio=$objeto->getObtenerInformacionGeneral("SELECT documentoSubsess,documentoAdministrativo,documentoPlanificacion FROM poa_preliminar_envio WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';");

			$jason['documentoSubsess']=$enviadorPoa_preEnvio[0][documentoSubsess];
			$jason['documentoAdministrativo']=$enviadorPoa_preEnvio[0][documentoAdministrativo];
			$jason['documentoPlanificacion']=$enviadorPoa_preEnvio[0][documentoPlanificacion];

			$jason['documentoTransferencias__s']=$documentoTransferencias__s[0][documento];

			$jason['nombre1__flujo']=$nombre1__flujo;
			$jason['rubro1__flujo']=$rubro1__flujo;
			$jason['nombre2__flujo']=$nombre2__flujo;
			$jason['rubro2__flujo']=$rubro2__flujo;
			$jason['nombre3__flujo']=$nombre3__flujo;
			$jason['rubro3__flujo']=$rubro3__flujo;
			$jason['nombre4__flujo']=$nombre4__flujo;
			$jason['rubro4__flujo']=$rubro4__flujo;
			$jason['nombre5__flujo']=$nombre5__flujo;
			$jason['rubro5__flujo']=$rubro5__flujo;
			$jason['nombre6__flujo']=$nombre6__flujo;
			$jason['rubro6__flujo']=$rubro6__flujo;
			$jason['nombre7__flujo']=$nombre7__flujo;
			$jason['rubro7__flujo']=$rubro7__flujo;

			$jason['inversion__flujos']=$inversion__flujos[0][nombreInversion];

			$actividad1__en=$actividad1[0][idProgramacionFinanciera];
			$actividad2__en=$actividad2[0][idProgramacionFinanciera];
			$actividad3__en=$actividad3[0][idProgramacionFinanciera];

			$documentoPLanificacion=$indicadorInformacion__documento__planificacion__recibidos[0][documentoPLanificacion];

			$jason['presupuestos__flujo__transferencias']=$presupuestos__flujo__transferencias;

			$jason['obtenerAcCa']=$obtenerAcCa;
			$jason['indicadorInformacion__dos']=$indicadorInformacion__dos;


			$jason['actividad1__en']=$actividad1__en;
			$jason['actividad2__en']=$actividad2__en;
			$jason['actividad3__en']=$actividad3__en;

			$jason['comprobador1']=$comprobador1;
			$jason['comprobador2']=$comprobador2;
			$jason['comprobador3']=$comprobador3;


			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['indicadorInformacion']=$indicadorInformacion;

			$jason['obtenerArchivoCoordinas__infras']=$obtenerArchivoCoordinas__infras;
			$jason['obtenerArchivoCoordinas__administrativos']=$obtenerArchivoCoordinas__administrativos;
			$jason['obtenerArchivoCoordinas__subcess']=$obtenerArchivoCoordinas__subcess;
			$jason['obtenernombre__organismos']=$obtenernombre__organismos;

			$jason['documentoPLanificacion']=$documentoPLanificacion;


		break;	

		case  "seleccionaItemsEditables":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,idProgramacionFinanciera,totalSumaItem FROM poa_programacion_financiera WHERE idProgramacionFinanciera='$idEnviado' AND perioIngreso='$aniosPeriodos__ingesos';");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	

		case  "matricesSC":

			if ($idActividad==3 || $idActividad==5 || $idActividad==6 || $idActividad==7) {
				
				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT b.idActividad FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idOrganismo LIMIT 1;");

				$mensajeActividad="actDeportivas";

			}else if($idActividad==1){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo LIMIT 1;");

				

				$obtenerAcCahHono=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_honorarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo LIMIT 1;");

			
				$obtenerAcAdmini=$objeto->getObtenerInformacionGeneral("SELECT a.idActividadAd FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idOrganismo LIMIT 1;");

				$obtenerSuministros=$objeto->getObtenerInformacionGeneral("SELECT idOrganismo FROM poa_suministrosn WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';");


				if (!empty($obtenerAcCa[0][idActividad])) {
					
					$mensajeActividad="sueldos__salarios";

				}else{

					$mensajeActividad=false;

				}



				if (!empty($obtenerSuministros[0][idOrganismo])) {
					
					$jason['obtenerSuministros']=$obtenerSuministros;
					$mensajeSuministros="suministros";

				}else{

					$mensajeSuministros=false;

				}

				if (!empty($obtenerAcAdmini[0][idActividadAd])) {
					
					$jason['obtenerAcAdmini']=$obtenerAcAdmini;
					$mensajeAdministrativas="administrativas";

				}else{

					$mensajeAdministrativas=false;

				}


				// if (!empty($obtenerAcCahHono[0][idActividad])) {
					
				// 	$jason['obtenerAcCahHono']=$obtenerAcCahHono;
				// 	$mensajeActividadH="honorarios";

				// }else{

				// 	$mensajeActividadH=false;

				// }
				

			}else if($idActividad==4){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo LIMIT 1;");

				$mensajeActividad="sueldos__salarios";

				$obtenerAcCahHono=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_honorarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo LIMIT 1;");



				if (!empty($obtenerAcCa[0][idActividad])) {
					
					$mensajeActividad="sueldos__salarios";

				}else{

					$mensajeActividad=false;

				}


				if (!empty($obtenerAcCahHono)) {
					
					$jason['obtenerAcCahHono']=$obtenerAcCahHono;
					$mensajeActividadH="honorarios";

				}else{

					$mensajeActividadH=false;

				}

			}else if($idActividad==2){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT b.idActividad FROM poa_mantenimiento AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				$mensajeActividad="mantenimiento";

			}


			$jason['mensajeSuministros']=$mensajeSuministros;

			$jason['mensajeAdministrativas']=$mensajeAdministrativas;

			$jason['mensajeActividadH']=$mensajeActividadH;

			$jason['mensajeActividad']=$mensajeActividad;

			$jason['obtenerAcCa']=$obtenerAcCa;

		break;	


		case  "informacioSubsessFinan":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,c.nombreActividades,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,b.itemPreesupuestario AS subsecretaria FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			$obtenerInformacionPre=$objeto->getObtenerInformacionGeneral("SELECT a1.subsecretaria FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo='$idOrganismo' AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a1.idPoaInicial DESC LIMIT 1;");


			$obtenerInformacionPeriodos=$objeto->getObtenerInformacionGeneral("SELECT periodo FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$obtenerInformacionObservaciones=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.observaciones, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS observaciones,CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') ,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') ) AS nombreCompleto FROM poa_observacionesenviadas AS a INNER JOIN th_usuario AS b ON a.idUsuario=b.id_usuario WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			if ($fisicamenteE==27 || $fisicamenteE==28 || $fisicamenteE==29 || $fisicamenteE==30 || $fisicamenteE==31 || $fisicamenteE==32 || $fisicamenteE==33) {
				
				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') ,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.idActividad='1' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");


			}


			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividad LIMIT 1)) AS indicador,(SELECT a1.primertrimestre FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS primertrimestre,(SELECT a1.segundotrimestre FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS segundotrimestre,(SELECT a1.tercertrimestre FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS tercertrimestre,(SELECT a1.cuartotrimestre FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS cuartotrimestre,(SELECT a1.metaindicador FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS metaindicador,(SELECT a1.idActividad FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS idActividad  FROM poa_programacion_financiera AS b WHERE b.idOrganismo='$idOrganismo' AND b.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad;");


			$jason['indicadorInformacion']=$indicadorInformacion;


			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['obtenerAcCa']=$obtenerAcCa;

			$jason['obtenerInformacionPre']=$obtenerInformacionPre;

			$jason['obtenerInformacionObservaciones']=$obtenerInformacionObservaciones;

		break;	


		case  "informacioSubsessCoordina":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,c.nombreActividades,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,b.itemPreesupuestario AS subsecretaria FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			$obtenerInformacionPre=$objeto->getObtenerInformacionGeneral("SELECT a1.subsecretaria FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo='$idOrganismo' AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a1.idPoaInicial DESC LIMIT 1;");


			$obtenerInformacionPeriodos=$objeto->getObtenerInformacionGeneral("SELECT periodo FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$obtenerInformacionObservaciones=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.observaciones, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS observaciones,CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.apellido, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nombreCompleto FROM poa_observacionesenviadas AS a INNER JOIN th_usuario AS b ON a.idUsuario=b.id_usuario WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			if ($fisicamenteE==27 || $fisicamenteE==28 || $fisicamenteE==29 || $fisicamenteE==30 || $fisicamenteE==31 || $fisicamenteE==32 || $fisicamenteE==33) {
				
				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='3' OR a.idActividad='4' OR a.idActividad='5' OR a.idActividad='6' OR a.idActividad='7') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");


			}

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividad LIMIT 1)) AS indicador,(SELECT a1.primertrimestre FROM poa_poainicial AS a1 WHERE a1.idOrganismo=b.idOrganismo AND a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS primertrimestre,(SELECT a1.segundotrimestre FROM poa_poainicial AS a1 WHERE a1.idOrganismo=b.idOrganismo AND a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS segundotrimestre,(SELECT a1.tercertrimestre FROM poa_poainicial AS a1 WHERE a1.idOrganismo=b.idOrganismo AND a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS tercertrimestre,(SELECT a1.cuartotrimestre FROM poa_poainicial AS a1 WHERE a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS cuartotrimestre,(SELECT a1.metaindicador FROM poa_poainicial AS a1 WHERE a1.idOrganismo=b.idOrganismo AND a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS metaindicador,(SELECT a1.idActividad FROM poa_poainicial AS a1 WHERE a1.idOrganismo=b.idOrganismo AND a1.idActividad=b.idActividad ORDER BY a1.idPoaEnviado DESC LIMIT 1) AS idActividad  FROM poa_programacion_financiera AS b WHERE b.idOrganismo='$idOrganismo' AND b.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.idActividad;");


			$jason['indicadorInformacion']=$indicadorInformacion;

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['obtenerAcCa']=$obtenerAcCa;

			$jason['obtenerInformacionPre']=$obtenerInformacionPre;

			$jason['obtenerInformacionObservaciones']=$obtenerInformacionObservaciones;

		break;	


		case  "informacioSubsess__finan__rechazos":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			$obtenerInformacion__docus=$objeto->getObtenerInformacionGeneral("SELECT idFinancieroD,polizaOriginal,caucionOrginal,copiaCertificadoBancario,copiaRegistroD,copia_adminFinanciero,copia_adminGeneral,copia__registroIn,copia_acuerdoRegistro,copia_ruc FROM poa_financiero_documentos WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idFinancieroD DESC LIMIT 1;");

			$idFinancieroD=$obtenerInformacion__docus[0][idFinancieroD];

			$obtenerInformacion__docus__observas=$objeto->getObtenerInformacionGeneral("SELECT idDocumentos,polizaOriginal,caucionOrginal,copiaCertificadoBancario,copiaRegistroD,copia_adminFinanciero,copia_adminGeneral,copia__registroIn,copia_acuerdoRegistro,copia_ruc,observa__polizaOriginal,observa__caucionOrginal,observa__copiaCertificadoBancario,observa__copiaRegistroD,observa__copia_adminFinanciero,observa__copia_adminGeneral,observa__copia__registroIn,observa__copia_acuerdoRegistro,observa__copia_ruc FROM poa_documentos_calificados WHERE idOrganismo='$idOrganismo' AND idFinancieroD='$idFinancieroD' AND perioIngreso='$aniosPeriodos__ingesos';");

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['obtenerInformacion__docus']=$obtenerInformacion__docus;
			$jason['obtenerInformacion__docus__observas']=$obtenerInformacion__docus__observas;

		break;	


		case  "informacioSubsess__finan":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			$obtenerInformacion__docus=$objeto->getObtenerInformacionGeneral("SELECT polizaOriginal,caucionOrginal,copiaCertificadoBancario,copiaRegistroD,copia_adminFinanciero,copia_adminGeneral,copia__registroIn,copia_acuerdoRegistro,copia_ruc FROM poa_financiero_documentos WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idFinancieroD DESC LIMIT 1;");

			$obtenerInformacion__docus__negados=$objeto->getObtenerInformacionGeneral("SELECT polizaOriginal,caucionOrginal,copiaCertificadoBancario,copiaRegistroD,copia_adminFinanciero,copia_adminGeneral,copia__registroIn,copia_acuerdoRegistro,copia_ruc,observa__polizaOriginal,observa__caucionOrginal,observa__copiaCertificadoBancario,observa__copiaRegistroD,observa__copia_adminFinanciero,observa__copia_adminGeneral,observa__copia__registroIn,observa__copia_acuerdoRegistro,observa__copia_ruc FROM poa_documentos_calificados WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';");


			if(empty($obtenerInformacion__docus__negados[0][polizaOriginal])){

				$obtenerInformacion__docus__negados="no";

			}


			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['obtenerInformacion__docus']=$obtenerInformacion__docus;
			$jason['obtenerInformacion__docus__negados']=$obtenerInformacion__docus__negados;

		break;	

		case  "informacioSubsess":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			$obtenerInformacionPre=$objeto->getObtenerInformacionGeneral("SELECT a1.subsecretaria FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo='$idOrganismo' AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a1.idPoaInicial DESC LIMIT 1;");

			$obtenerInformacionPeriodos=$objeto->getObtenerInformacionGeneral("SELECT periodo FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$obtenerInformacionObservaciones=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.observaciones, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS observaciones,CONCAT_WS(' ',b.nombre,b.apellido) AS nombreCompleto FROM poa_observacionesenviadas AS a INNER JOIN th_usuario AS b ON a.idUsuario=b.id_usuario WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			/*====================================
			=             Actividades            =
			====================================*/
			
			$actividad3=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad3 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='3' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad4=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad4 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='4' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad5=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad5 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='5' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad6=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad6 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='6' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad7=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad7 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='7' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
			
			/*=====  End of  Actividades  ======*/
			

			if($fisicamenteE==18 || $fisicamenteE==20 || $fisicamenteE==27 || $fisicamenteE==28 || $fisicamenteE==29 || $fisicamenteE==30 || $fisicamenteE==31 || $fisicamenteE==32 || $fisicamenteE==33 || $fisicamenteE==34 || $idRolAd=="1"){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");


			}else if ($fisicamenteE==26 || $fisicamenteE==24 || $fisicamenteE=="12" || $fisicamenteE=="13" || $fisicamenteE=="14" || $fisicamenteE=="19" || $fisicamenteE=="13" || $fisicamenteE=="13" || $fisicamenteE=="13" || $fisicamenteE=="13" || $fisicamenteE=="13") {
				
				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='3' OR a.idActividad='4' OR a.idActividad='5' OR a.idActividad='6' OR a.idActividad='7') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");


			}else if($fisicamenteE==1 || $fisicamenteE==6 || $fisicamenteE==15 || $fisicamenteE==27 || $fisicamenteE==28 || $fisicamenteE==29 || $fisicamenteE==30 || $fisicamenteE==31 || $fisicamenteE==32 || $fisicamenteE==33){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='2') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");

			}else if($fisicamenteE==2 || $fisicamenteE==23 || $fisicamenteE==5 || $fisicamenteE==7){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='1') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");

			}

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("(SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='1' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.metaindicador>0  ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='2' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='3' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='4' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='5' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='6' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='7' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1);");


			$obtenerAcCa__reinstala=$objeto->getObtenerInformacionGeneral("SELECT instalacionesE,instalacionesE2,documentoInfraestructura,documentoInstalaciones,documentoSubsess,documentoAdministrativo,documentoCompras FROM poa_preliminar_envio WHERE perioIngreso='$aniosPeriodos__ingesos' AND idOrganismo='$idOrganismo';");

			$instalacionesE__variables=$obtenerAcCa__reinstala[0][instalacionesE];
			$instalacionesE2__variables=$obtenerAcCa__reinstala[0][instalacionesE2];
			$documentosInfra__variables=$obtenerAcCa__reinstala[0][documentoInfraestructura];
			$documentosInstala__variables=$obtenerAcCa__reinstala[0][documentoInstalaciones];

			$documentoAdministrativo=$obtenerAcCa__reinstala[0][documentoAdministrativo];
			$documentoSubsess=$obtenerAcCa__reinstala[0][documentoSubsess];
			$documentoCompras=$obtenerAcCa__reinstala[0][documentoCompras];

			$jason['documentoAdministrativo']=$documentoAdministrativo;
			$jason['documentoSubsess']=$documentoSubsess;
			$jason['documentoCompras']=$documentoCompras;

			$jason['instalacionesE__variables']=$instalacionesE__variables;
			$jason['instalacionesE2__variables']=$instalacionesE2__variables;


			$jason['documentosInfra__variables']=$documentosInfra__variables;
			$jason['documentosInstala__variables']=$documentosInstala__variables;

			$jason['obtenerAcCa']=$obtenerAcCa;


			$jason['indicadorInformacion']=$indicadorInformacion;
			
			$jason['obtenerInformacion']=$obtenerInformacion;
			

			$jason['obtenerInformacionPre']=$obtenerInformacionPre;

			$jason['obtenerInformacionObservaciones']=$obtenerInformacionObservaciones;

			/*===================================
			=            Actividades            =
			===================================*/
			
			$jason['actividad3']=$actividad3;
			$jason['actividad4']=$actividad4;
			$jason['actividad5']=$actividad5;
			$jason['actividad6']=$actividad6;
			$jason['actividad7']=$actividad7;
			
			/*=====  End of Actividades  ======*/
			

		break;	


		case  "informacioSubsess__modificas":

			$obtenerInformacionSever=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalTotales AS totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera_dos AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			if (!empty($obtenerInformacionSever[0][idActividades])) {
				
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalTotales AS totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera_dos AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			}else{

				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio, a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalTotales AS totalSumaItem,b.itemPreesupuestario AS subsecretaria,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad ASC;");

			}

			

			$obtenerInformacionPre=$objeto->getObtenerInformacionGeneral("SELECT a1.subsecretaria FROM poa_preliminar_envio AS a1 WHERE a1.idOrganismo='$idOrganismo' AND a1.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a1.idPoaInicial DESC LIMIT 1;");

			$obtenerInformacionPeriodos=$objeto->getObtenerInformacionGeneral("SELECT periodo FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$obtenerInformacionObservaciones=$objeto->getObtenerInformacionGeneral("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.observaciones, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS observaciones,CONCAT_WS(' ',b.nombre,b.apellido) AS nombreCompleto FROM poa_observacionesenviadas AS a INNER JOIN th_usuario AS b ON a.idUsuario=b.id_usuario WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			/*====================================
			=             Actividades            =
			====================================*/
			
			$actividad3=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad3 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='3' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad4=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad4 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='4' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad5=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad5 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='5' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad6=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad6 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='6' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");

			$actividad7=$objeto->getObtenerInformacionGeneral("SELECT SUM(totalSumaItem) AS totalActividad7 FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismo' AND idActividad='7' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idOrganismo;");
			
			/*=====  End of  Actividades  ======*/
			

			if($fisicamenteE==18 || $idRolAd=="1"){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");


			}else if ($fisicamenteE==26 || $fisicamenteE==24 || $fisicamenteE=="12" || $fisicamenteE=="13" || $fisicamenteE=="14" || $fisicamenteE=="19" || $fisicamenteE=="13" || $fisicamenteE=="13" || $fisicamenteE=="13" || $fisicamenteE=="13" || $fisicamenteE=="13") {
				
				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='3' OR a.idActividad='4' OR a.idActividad='5' OR a.idActividad='6' OR a.idActividad='7') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");


			}else if($fisicamenteE==1 || $fisicamenteE==6 || $fisicamenteE==15 || $fisicamenteE==27 || $fisicamenteE==28 || $fisicamenteE==29 || $fisicamenteE==30 || $fisicamenteE==31 || $fisicamenteE==32 || $fisicamenteE==33){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='2') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");

			}else if($fisicamenteE==2 || $fisicamenteE==23 || $fisicamenteE==5 || $fisicamenteE==7){

				$obtenerAcCa=$objeto->getObtenerInformacionGeneral("SELECT c.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,a.idOrganismo FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem INNER JOIN poa_actividades AS c ON c.idActividades=a.idActividad WHERE a.idOrganismo='$idOrganismo' AND (a.idActividad='1') AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idActividad ORDER BY a.idActividad ASC;");

			}

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("(SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='1' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.metaindicador>0  ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='2' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='3' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='4' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='5' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos'  ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='6' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1) UNION (SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,CONCAT_WS(' ',(SELECT CONCAT_WS('.- ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó'),REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) FROM poa_actividades AS a1 INNER JOIN poa_indicadores AS b1 ON a1.idLineaPolitica=b1.idIndicadores WHERE a1.idActividades=b.idActividades LIMIT 1)) AS indicador,a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador FROM poa_poainicial AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades WHERE a.idActividad='7' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPoaEnviado DESC LIMIT 1);");


			$jason['indicadorInformacion']=$indicadorInformacion;
			
			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['obtenerAcCa']=$obtenerAcCa;

			$jason['obtenerInformacionPre']=$obtenerInformacionPre;

			$jason['obtenerInformacionObservaciones']=$obtenerInformacionObservaciones;

			/*===================================
			=            Actividades            =
			===================================*/
			
			$jason['actividad3']=$actividad3;
			$jason['actividad4']=$actividad4;
			$jason['actividad5']=$actividad5;
			$jason['actividad6']=$actividad6;
			$jason['actividad7']=$actividad7;
			
			/*=====  End of Actividades  ======*/
			

		break;	

		case  "honorarios__modificaciones":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idHonorarios,cedula,nombres,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(cargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  cargo,honorarioMensual,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total,honorarioMensual,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(tipoCargo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  tipoCargo FROM poa_honorarios2022 WHERE idHonorarios='$idHonorarios' ORDER BY idHonorarios;");

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

		break;	


		case  "honorarios":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idHonorarios,cedula,nombres,cargo,honorarioMensual,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total,honorarioMensual,tipoCargo FROM poa_honorarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND modifica IS NULL AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idHonorarios;");

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

		break;	

		case  "honorarios__modifica":

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idHonorarios,cedula,nombres,cargo,honorarioMensual,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total,honorarioMensual,tipoCargo FROM poa_honorarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND modifica='A' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idHonorarios;");

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

		break;	

		case  "sueldosSalarios":

			$arrayInformacionE=array();
			$arrayInformacionA=array();

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idSueldos,cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,cargo,tipoCargo,tiempoTrabajo,sueldoSalario,aportePatronal,decimoTercera,mensualizaTercera,decimoCuarta,menusalizaCuarta,fondosReserva,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND modifica IS NULL AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY cedula ORDER BY idSueldos;");


			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

		break;	


		case  "sueldosSalarios__26":

			$arrayInformacionE=array();
			$arrayInformacionA=array();

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idSueldos,cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,cargo,tipoCargo,tiempoTrabajo,sueldoSalario,aportePatronal,decimoTercera,mensualizaTercera,decimoCuarta,menusalizaCuarta,fondosReserva,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND modifica IS NULL AND perioIngreso='$aniosPeriodos__ingesos' AND cedula='$marcador__psiciones' GROUP BY cedula;");


			$desahucio=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,a.idOrganismo,a.idDesvinculacion,a.enero,a.febreo,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_desvinculacion AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldos=b.idSueldos WHERE a.opcion='desahucio' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.cedula='$marcador__psiciones';");
			$despido=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,a.idOrganismo,a.idDesvinculacion,a.enero,a.febreo,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_desvinculacion AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldos=b.idSueldos WHERE a.opcion='despido' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.cedula='$marcador__psiciones';");
			$renuncia=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,a.idOrganismo,a.idDesvinculacion,a.enero,a.febreo,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_desvinculacion AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldos=b.idSueldos WHERE a.opcion='renuncia' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.cedula='$marcador__psiciones';");
			$compensacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSueldos,a.idOrganismo,a.idDesvinculacion,a.enero,a.febreo,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.total FROM poa_desvinculacion AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idSueldos=b.idSueldos WHERE a.opcion='compensaciÃ³n' AND a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.cedula='$marcador__psiciones';");

			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

			$jason['desahucio']=$desahucio;
			$jason['despido']=$despido;
			$jason['renuncia']=$renuncia;
			$jason['compensacion']=$compensacion;

		break;	


		case  "sueldosSalarios__27":

			$arrayInformacionE=array();
			$arrayInformacionA=array();

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idSueldos,cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,cargo,tipoCargo,tiempoTrabajo,sueldoSalario,aportePatronal,decimoTercera,mensualizaTercera,decimoCuarta,menusalizaCuarta,fondosReserva,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total FROM poa_sueldossalarios2022 WHERE idSueldos='$marcador__psiciones'  GROUP BY cedula;");
			
			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	

		case  "sueldosSalarios__modifica":

			$arrayInformacionE=array();
			$arrayInformacionA=array();

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT idSueldos,cedula,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombres,cargo,tipoCargo,tiempoTrabajo,sueldoSalario,aportePatronal,decimoTercera,mensualizaTercera,decimoCuarta,menusalizaCuarta,fondosReserva,enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre,total FROM poa_sueldossalarios2022 WHERE idOrganismo='$idOrganismo' AND idActividad='$idActividad' AND modifica='A' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idSueldos;");


			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

		break;	

		case  "suminitrosAEe":

			$arrayInformacionE=array();
			$arrayInformacionA=array();

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idSumi,a.tipo,a.nombreEscenario,GROUP_CONCAT(b.luz SEPARATOR '---') AS energia,GROUP_CONCAT(b.agua SEPARATOR '---') AS agua FROM poa_suministrosn AS a INNER JOIN poa_suministros AS b ON a.idSumi=b.idSumiN WHERE a.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND b.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idSumi;");


			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;


			$jason['obtenerInformacion']=$obtenerInformacion;
			$jason['idActividad']=$idActividad;

		break;	


		case  "actividadesDepor":

			$arrayInformacion=array();
			$arrayMatrizDC = json_decode($arrayMatrizD);

			$resultado = array_unique($arrayMatrizDC);

			for ($i=0; $i < count($resultado); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,c.Deporte,b.idItem,b.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem, GROUP_CONCAT(c.provincia SEPARATOR '---') AS provinciaId, GROUP_CONCAT(c.ciudadPais SEPARATOR '---') AS ciudadPaisId,GROUP_CONCAT(c.alcance SEPARATOR '---') AS alcanceId,GROUP_CONCAT(c.Deporte SEPARATOR '---') AS Deporte,GROUP_CONCAT(c.idPda SEPARATOR '---') AS idPda, GROUP_CONCAT(c.tipoFinanciamiento SEPARATOR '---') AS tipoFinanciamiento,GROUP_CONCAT(c.nombreEvento SEPARATOR '---') AS nombreEvento, GROUP_CONCAT((SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=c.Deporte) SEPARATOR '---') AS deporte,GROUP_CONCAT((SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=c.provincia)  SEPARATOR '---') AS provincia, GROUP_CONCAT((SELECT paisnombre FROM poa_pais AS a1 WHERE a1.id=c.ciudadPais)  SEPARATOR '---') AS ciudadPais,GROUP_CONCAT((SELECT nombreAlcanse FROM poa_alcanse AS a1 WHERE a1.idAlcanse=c.alcance) SEPARATOR '---') AS alcanceFuncion, GROUP_CONCAT(c.fechaInicio SEPARATOR '---') AS fechaInicio,GROUP_CONCAT(c.fechaFin SEPARATOR '---') AS fechaFin, GROUP_CONCAT(c.genero SEPARATOR '---') AS genero, GROUP_CONCAT(c.categoria SEPARATOR '---') AS categoria, GROUP_CONCAT(c.numeroEntreandores SEPARATOR '---') AS numeroEntreandores,GROUP_CONCAT(c.numeroAtletas SEPARATOR '---') AS numeroAtletas, GROUP_CONCAT(c.total SEPARATOR '---') AS total,GROUP_CONCAT(c.mBenefici SEPARATOR '---') AS mBenefici,GROUP_CONCAT(c.hBenefici SEPARATOR '---') AS hBenefici, GROUP_CONCAT(c.justificacionAd SEPARATOR '---') AS justificacionAd,GROUP_CONCAT(c.canitdarBie SEPARATOR '---') AS canitdarBie, GROUP_CONCAT(c.enero SEPARATOR '---') AS enero, GROUP_CONCAT(c.febrero SEPARATOR '---') AS febrero, GROUP_CONCAT(c.marzo SEPARATOR '---') AS marzo, GROUP_CONCAT(c.abril SEPARATOR '---') AS abril, GROUP_CONCAT(c.mayo SEPARATOR '---') AS mayo, GROUP_CONCAT(c.junio SEPARATOR '---') AS junio,GROUP_CONCAT(c.julio SEPARATOR '---') AS julio,GROUP_CONCAT(c.agosto SEPARATOR '---') AS agosto, GROUP_CONCAT(c.septiembre SEPARATOR '---') AS septiembre,GROUP_CONCAT(c.octubre SEPARATOR '---') AS octubre, GROUP_CONCAT(c.noviembre SEPARATOR '---') AS noviembre,GROUP_CONCAT(c.diciembre SEPARATOR '---') AS diciembre, GROUP_CONCAT(c.totalElem SEPARATOR '---') AS totalElem, GROUP_CONCAT(c.idProgramacionFinanciera SEPARATOR '---') AS idProgramacionFinanciera2, GROUP_CONCAT(c.detalleBien SEPARATOR '---') AS detalleBien FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem LEFT JOIN poa_actdeportivas AS c ON c.idProgramacionFinanciera=a.idProgramacionFinanciera WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$resultado[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.itemPreesupuestario,b.nombreItem;");

				array_push($arrayInformacion,$obtenerInformacion);

			}

				$obtenerInformacion__solitaraias__doces=$objeto->getObtenerInformacionGeneral("SELECT nombreEvento FROM poa_actdeportivas WHERE idPda='$idPda';");

				$nombreRela=$obtenerInformacion__solitaraias__doces[0][nombreEvento];


				$obtenerInformacion__solitaraias=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem , 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=b.idItem) AS nombreItem,b.idItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.nombreEvento='$nombreRela';");

			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			$jason['arrayInformacion']=$arrayInformacion;
			$jason['idActividad']=$idActividad;
			$jason['idItem']=$idItem;
			$jason['obtenerInformacion__solitaraias']=$obtenerInformacion__solitaraias;

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.tipoFinanciamiento,a.nombreEvento, a.Deporte,a.provincia,a.ciudadPais,a.alcance,a.fechaInicio,a.fechaFin,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.justificacionAd,a.canitdarBie,a.detalleBien FROM poa_actdeportivas AS a WHERE a.idOrganismo='$idOrganismo' AND estadoP='1' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idPda DESC LIMIT 1;");

			$jason['envio__informaciones']=$envio__informaciones;

		break;	

		case  "actividadesDepor__actualiza":

			$arrayInformacion=array();
			$arrayMatrizDC = json_decode($arrayMatrizD);

			$resultado = array_unique($arrayMatrizDC);

			// var_dump($resultado);

			for ($i=0; $i < count($resultado); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,c.Deporte,b.idItem,b.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem, GROUP_CONCAT(c.provincia SEPARATOR '---') AS provinciaId, GROUP_CONCAT(c.ciudadPais SEPARATOR '---') AS ciudadPaisId,GROUP_CONCAT(c.alcance SEPARATOR '---') AS alcanceId,GROUP_CONCAT(c.Deporte SEPARATOR '---') AS Deporte,GROUP_CONCAT(c.idPda SEPARATOR '---') AS idPda, GROUP_CONCAT(c.tipoFinanciamiento SEPARATOR '---') AS tipoFinanciamiento,GROUP_CONCAT(c.nombreEvento SEPARATOR '---') AS nombreEvento, GROUP_CONCAT((SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=c.Deporte) SEPARATOR '---') AS deporte,GROUP_CONCAT((SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=c.provincia)  SEPARATOR '---') AS provincia, GROUP_CONCAT((SELECT paisnombre FROM poa_pais AS a1 WHERE a1.id=c.ciudadPais)  SEPARATOR '---') AS ciudadPais,GROUP_CONCAT((SELECT nombreAlcanse FROM poa_alcanse AS a1 WHERE a1.idAlcanse=c.alcance) SEPARATOR '---') AS alcanceFuncion, GROUP_CONCAT(c.fechaInicio SEPARATOR '---') AS fechaInicio,GROUP_CONCAT(c.fechaFin SEPARATOR '---') AS fechaFin, GROUP_CONCAT(c.genero SEPARATOR '---') AS genero, GROUP_CONCAT(c.categoria SEPARATOR '---') AS categoria, GROUP_CONCAT(c.numeroEntreandores SEPARATOR '---') AS numeroEntreandores,GROUP_CONCAT(c.numeroAtletas SEPARATOR '---') AS numeroAtletas, GROUP_CONCAT(c.total SEPARATOR '---') AS total,GROUP_CONCAT(c.mBenefici SEPARATOR '---') AS mBenefici,GROUP_CONCAT(c.hBenefici SEPARATOR '---') AS hBenefici, GROUP_CONCAT(c.justificacionAd SEPARATOR '---') AS justificacionAd,GROUP_CONCAT(c.canitdarBie SEPARATOR '---') AS canitdarBie, GROUP_CONCAT(c.enero SEPARATOR '---') AS enero, GROUP_CONCAT(c.febrero SEPARATOR '---') AS febrero, GROUP_CONCAT(c.marzo SEPARATOR '---') AS marzo, GROUP_CONCAT(c.abril SEPARATOR '---') AS abril, GROUP_CONCAT(c.mayo SEPARATOR '---') AS mayo, GROUP_CONCAT(c.junio SEPARATOR '---') AS junio,GROUP_CONCAT(c.julio SEPARATOR '---') AS julio,GROUP_CONCAT(c.agosto SEPARATOR '---') AS agosto, GROUP_CONCAT(c.septiembre SEPARATOR '---') AS septiembre,GROUP_CONCAT(c.octubre SEPARATOR '---') AS octubre, GROUP_CONCAT(c.noviembre SEPARATOR '---') AS noviembre,GROUP_CONCAT(c.diciembre SEPARATOR '---') AS diciembre, GROUP_CONCAT(c.totalElem SEPARATOR '---') AS totalElem, GROUP_CONCAT(c.idProgramacionFinanciera SEPARATOR '---') AS idProgramacionFinanciera2, GROUP_CONCAT(c.detalleBien SEPARATOR '---') AS detalleBien FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem LEFT JOIN poa_actdeportivas AS c ON c.idProgramacionFinanciera=a.idProgramacionFinanciera WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$resultado[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY b.itemPreesupuestario,b.nombreItem;");

				array_push($arrayInformacion,$obtenerInformacion);

			}

				$obtenerInformacion__solitaraias__doces=$objeto->getObtenerInformacionGeneral("SELECT nombreEvento FROM poa_actdeportivas WHERE idPda='$idPda';");

				$nombreRela=$obtenerInformacion__solitaraias__doces[0][nombreEvento];


				$obtenerInformacion__solitaraias=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreItem , 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_item AS a1 WHERE a1.idItem=b.idItem) AS nombreItem,b.idItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem FROM poa_actdeportivas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.nombreEvento='$nombreRela';");

			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			$jason['arrayInformacion']=$arrayInformacion;
			$jason['idActividad']=$idActividad;
			$jason['idItem']=$idItem;
			$jason['obtenerInformacion__solitaraias']=$obtenerInformacion__solitaraias;

			$envio__informaciones=$objeto->getObtenerInformacionGeneral("SELECT a.idPda,a.tipoFinanciamiento,a.nombreEvento, a.Deporte,a.provincia,a.ciudadPais,a.alcance,a.fechaInicio,a.fechaFin,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,a.justificacionAd,a.canitdarBie,a.detalleBien FROM poa_actdeportivas AS a WHERE a.idOrganismo='$idOrganismo' AND estadoP='1' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.idActividad='$idActividad' GROUP BY a.idActividad ORDER BY a.idPda DESC LIMIT 1;");

			$jason['envio__informaciones']=$envio__informaciones;

		break;	

		case  "matricez":

			$arrayInformacion=array();
			$arrayMatrizDC = json_decode($arrayMatrizD);

			if ($tipo2=="actividad__administrativa") {
				
			for ($i=0; $i < count($arrayMatrizDC); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionBien,(SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$arrayMatrizDC[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($arrayInformacion,$obtenerInformacion);

			}

			}else if($tipo2=="poa__mantenimiento"){


			for ($i=0; $i < count($arrayMatrizDC); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS nombresInfras,(SELECT a1.provincia FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS provinciaMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS direccionCompleta, (SELECT a1.estado FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS estado, (SELECT a1.tipoRecursos FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoRecursos, (SELECT a1.tipoIntervencion FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoInvercion, (SELECT a1.detallarTipoIn FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS detallarTipoIn, (SELECT a1.tipoMantenimiento FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS materialesServicios, (SELECT a1.fechaUltimo FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS fechaUltimo, (SELECT a1.provincia FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS provincia  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$arrayMatrizDC[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($arrayInformacion,$obtenerInformacion);

			}

			}else{


			for ($i=0; $i < count($arrayMatrizDC); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionBien,(SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien,(SELECT a1.tipoFinanciamiento FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS tipoFinanciamiento,(SELECT a1.nombreEvento FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS nombreEvento,(SELECT a1.Deporte FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS deporte, (SELECT a1.provincia FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS provincia, (SELECT a1.ciudadPais FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS pais, (SELECT a1.alcance FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS alcanse, (SELECT a1.fechaInicio FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS fechaInicio, (SELECT a1.fechaFin FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS fechaFin, (SELECT a1.genero FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS genero, (SELECT a1.categoria FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS categoria, (SELECT a1.numeroEntreandores FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS numeroEntrenadores, (SELECT a1.numeroAtletas FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS numeroAtletas, (SELECT a1.total FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS total, (SELECT a1.mBenefici FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS mBenefi, (SELECT a1.hBenefici FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS hBenefi, (SELECT a1.justificacionAd FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS justificacionAd, (SELECT a1.canitdarBie FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS cantidadBie,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS nombresInfras,(SELECT a1.provincia FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS provinciaMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS direccionCompleta, (SELECT a1.estado FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS estado, (SELECT a1.tipoRecursos FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoRecursos, (SELECT a1.tipoIntervencion FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoInvercion, (SELECT a1.detallarTipoIn FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS detallarTipoIn, (SELECT a1.tipoMantenimiento FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS materialesServicios, (SELECT a1.fechaUltimo FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS fechaUltimo  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$arrayMatrizDC[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($arrayInformacion,$obtenerInformacion);

			}					

			}



	
			$obtenerInformacion__mantenimientos=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,a.nombreInfras,b.nombreProvincia,a.direccionCompleta,a.estado,a.tipoRecursos,a.tipoIntervencion,a.detallarTipoIn,a.tipoMantenimiento,a.materialesServicios,a.fechaUltimo,a.provincia FROM poa_mantenimiento AS a INNER JOIN in_md_provincias AS b ON a.provincia=b.idProvincia WHERE a.idOrganismo='$idOrganismo' AND a.idProgramacionFinanciera='0';");

			$obtenerInformacion__2=$obtenerInformacion__mantenimientos[0][idProgramacionFinanciera];


			$jason['obtenerInformacion__2']=$obtenerInformacion__2;

			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			
			$jason['arrayInformacion']=$arrayInformacion;
			$jason['idActividad']=$idActividad;
			$jason['idItem']=$idItem;

			$jason['obtenerInformacion__mantenimientos']=$obtenerInformacion__mantenimientos;


		break;	

		case  "matricez__actualizas":

			$arrayInformacion=array();
			$arrayMatrizDC = json_decode($arrayMatrizD);

			if ($tipo2=="actividad__administrativa") {
				
			for ($i=0; $i < count($arrayMatrizDC); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionBien,(SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$arrayMatrizDC[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($arrayInformacion,$obtenerInformacion);

			}

			}else if($tipo2=="poa__mantenimiento"){


			for ($i=0; $i < count($arrayMatrizDC); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS nombresInfras,(SELECT a1.provincia FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS provinciaMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS direccionCompleta, (SELECT a1.estado FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS estado, (SELECT a1.tipoRecursos FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoRecursos, (SELECT a1.tipoIntervencion FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoInvercion, (SELECT a1.detallarTipoIn FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS detallarTipoIn, (SELECT a1.tipoMantenimiento FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS materialesServicios, (SELECT a1.fechaUltimo FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS fechaUltimo, (SELECT a1.provincia FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS provincia  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$arrayMatrizDC[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($arrayInformacion,$obtenerInformacion);

			}

			}else{


			for ($i=0; $i < count($arrayMatrizDC); $i++) { 
	
				$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionBien,(SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien,(SELECT a1.tipoFinanciamiento FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS tipoFinanciamiento,(SELECT a1.nombreEvento FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS nombreEvento,(SELECT a1.Deporte FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS deporte, (SELECT a1.provincia FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS provincia, (SELECT a1.ciudadPais FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS pais, (SELECT a1.alcance FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS alcanse, (SELECT a1.fechaInicio FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS fechaInicio, (SELECT a1.fechaFin FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS fechaFin, (SELECT a1.genero FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS genero, (SELECT a1.categoria FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS categoria, (SELECT a1.numeroEntreandores FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS numeroEntrenadores, (SELECT a1.numeroAtletas FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS numeroAtletas, (SELECT a1.total FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS total, (SELECT a1.mBenefici FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS mBenefi, (SELECT a1.hBenefici FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS hBenefi, (SELECT a1.justificacionAd FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS justificacionAd, (SELECT a1.canitdarBie FROM poa_actdeportivas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY idPda DESC LIMIT 1) AS cantidadBie,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS nombresInfras,(SELECT a1.provincia FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS provinciaMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS direccionCompleta, (SELECT a1.estado FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS estado, (SELECT a1.tipoRecursos FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoRecursos, (SELECT a1.tipoIntervencion FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoInvercion, (SELECT a1.detallarTipoIn FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS detallarTipoIn, (SELECT a1.tipoMantenimiento FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS materialesServicios, (SELECT a1.fechaUltimo FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS fechaUltimo  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$arrayMatrizDC[$i]' AND a.perioIngreso='$aniosPeriodos__ingesos';");

				array_push($arrayInformacion,$obtenerInformacion);

			}					

			}



	
			$obtenerInformacion__mantenimientos=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,a.nombreInfras,b.nombreProvincia,a.direccionCompleta,a.estado,a.tipoRecursos,a.tipoIntervencion,a.detallarTipoIn,a.tipoMantenimiento,a.materialesServicios,a.fechaUltimo,a.provincia FROM poa_mantenimiento AS a INNER JOIN in_md_provincias AS b ON a.provincia=b.idProvincia WHERE a.idOrganismo='$idOrganismo' AND a.idProgramacionFinanciera='0';");

			$obtenerInformacion__2=$obtenerInformacion__mantenimientos[0][idProgramacionFinanciera];


			$jason['obtenerInformacion__2']=$obtenerInformacion__2;

			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			
			$jason['arrayInformacion']=$arrayInformacion;
			$jason['idActividad']=$idActividad;
			$jason['idItem']=$idItem;

			$jason['obtenerInformacion__mantenimientos']=$obtenerInformacion__mantenimientos;


		break;	


		case  "matricez__actualizas__2e":

			$arrayInformacion=array();
			$arrayMatrizDC = json_decode($arrayMatrizD);

			if ($tipo2=="actividad__administrativa") {

				$programaItem=$objeto->getObtenerInformacionGeneral("SELECT idItem FROM poa_programacion_financiera WHERE idProgramacionFinanciera='$itemEnviados';");

				$itemSatisfactorios=$programaItem[0][idItem];
					
				for ($i=0; $i < 1; $i++) { 
		
					$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,b.idItem,b.itemPreesupuestario,b.nombreItem,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalSumaItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionBien,(SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien  FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON b.idItem=a.idItem WHERE a.idActividad='$idActividad' AND a.idOrganismo='$idOrganismo' AND a.idItem='$itemSatisfactorios' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.modifica='E';");

					array_push($arrayInformacion,$obtenerInformacion);

				}

			}


	
			$obtenerInformacion__mantenimientos=$objeto->getObtenerInformacionGeneral("SELECT a.idProgramacionFinanciera,a.nombreInfras,b.nombreProvincia,a.direccionCompleta,a.estado,a.tipoRecursos,a.tipoIntervencion,a.detallarTipoIn,a.tipoMantenimiento,a.materialesServicios,a.fechaUltimo,a.provincia FROM poa_mantenimiento AS a INNER JOIN in_md_provincias AS b ON a.provincia=b.idProvincia WHERE a.idOrganismo='$idOrganismo' AND a.idProgramacionFinanciera='0';");

			$obtenerInformacion__2=$obtenerInformacion__mantenimientos[0][idProgramacionFinanciera];


			$jason['obtenerInformacion__2']=$obtenerInformacion__2;

			$regimen=$objeto->getObtenerInformacionGeneral("SELECT regimen FROM poa_organismo WHERE idOrganismo='$idOrganismo';");

			$jason['regimen']=$regimen;

			
			$jason['arrayInformacion']=$arrayInformacion;
			$jason['idActividad']=$idActividad;
			$jason['idItem']=$idItem;

			$jason['obtenerInformacion__mantenimientos']=$obtenerInformacion__mantenimientos;


		break;	


		case  "gruposItems":

			$arrayGrupo51=array();
			$arrayGrupo53=array();
			$arrayGrupo57=array();
			$arrayGrupo58=array();
			$arrayGrupo84=array();
			$arrayAguaLuz=array();
			$arrayGrupoHonorarios=array();


			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT a.idActividad,a.idItem,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem WHERE a.idOrganismo='$idOrganismoPrincipal' AND a.idActividad='$idActividades' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad;");

			foreach ($obtenerInformacion as $clave => $valor) {

				$grupo53=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS grupo53 FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%53%'  AND a.itemPreesupuestario!='530606');");


				foreach ($grupo53 as $claveGrupo53 => $valorGrupo53) {

					array_push($arrayGrupo53,$grupo53[$claveGrupo53]['grupo53']);

				}
				
				$grupo57=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS grupo57 FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%57%');");


				foreach ($grupo57 as $claveGrupo57 => $valorGrupo57) {

					array_push($arrayGrupo57,$grupo57[$claveGrupo57]['grupo57']);

				}

				$grupo58=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS grupo58 FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%58%');");


				foreach ($grupo58 as $claveGrupo58 => $valorGrupo58) {

					array_push($arrayGrupo58,$grupo58[$claveGrupo58]['grupo58']);

				}


				$grupo84=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS grupo84 FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%84%');");


				foreach ($grupo84 as $claveGrupo84 => $valorGrupo84) {

					array_push($arrayGrupo84,$grupo84[$claveGrupo84]['grupo84']);

				}

				$aguaLuz=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS aguaLuz FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%530101%' OR a.itemPreesupuestario LIKE '%530104%');");


				foreach ($aguaLuz as $claveAguaLuz => $valorAguaLuz) {

					array_push($arrayAguaLuz,$aguaLuz[$claveAguaLuz]['aguaLuz']);

				}



			}


			$obtenerInformacion22=$objeto->getObtenerInformacionGeneral("SELECT a.idActividad,a.idItem,b.itemPreesupuestario FROM poa_programacion_financiera AS a INNER JOIN poa_item AS b ON a.idItem=b.idItem WHERE a.idOrganismo='$idOrganismoPrincipal' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY a.idActividad;");

			foreach ($obtenerInformacion22 as $clave => $valor) {

				$grupoHonorarios=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS grupoHonorarios FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion22[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%530606%');");

				foreach ($grupoHonorarios as $claveGrupoHonorarios => $valorGrupoHonorarios) {

					array_push($arrayGrupoHonorarios,$grupoHonorarios[$claveGrupoHonorarios]['grupoHonorarios']);

				}



				$grupo51=$objeto->getObtenerInformacionGeneral("SELECT a.idItem AS grupo51 FROM poa_item AS a WHERE a.idItem='".$obtenerInformacion22[$clave]['idItem']."' AND (a.itemPreesupuestario LIKE '%51%');");

				foreach ($grupo51 as $claveGrupo51 => $valorGrupo51) {

					array_push($arrayGrupo51,$grupo51[$claveGrupo51]['grupo51']);

				}

			}


			$jason['arrayAguaLuz']=$arrayAguaLuz;

			$jason['obtenerInformacionItems']=$obtenerInformacion;

			$jason['arrayGrupo51']=$arrayGrupo51;
			$jason['arrayGrupo53']=$arrayGrupo53;
			$jason['arrayGrupo57']=$arrayGrupo57;
			$jason['arrayGrupo58']=$arrayGrupo58;
			$jason['arrayGrupo84']=$arrayGrupo84;
			$jason['arrayGrupoHonorarios']=$arrayGrupoHonorarios;

			$jason['idActividades']=$idActividades;

		break;	

		case  "actividadesPoas":

			$informacionSeleccionada=$objeto->getObtenerInformacionGeneral("SELECT a.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_indicadores AS a1 WHERE a1.idIndicadores=a.idLineaPolitica) AS indicador FROM poa_actividades AS a ORDER BY a.idActividades ASC;");

			$obtenerInformacion2=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_poainicial WHERE idOrganismo='$idOrganismoPrincipal' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idActividad ORDER BY idActividad ASC;");

			$obtenerInformacion3=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismoPrincipal' AND perioIngreso='$aniosPeriodos__ingesos'  GROUP BY idActividad ORDER BY idActividad ASC;");

	
			$jason['obtenerInformacion3']=$obtenerInformacion3;
			$jason['obtenerInformacion2']=$obtenerInformacion2;
			$jason['informacionSeleccionada']=$informacionSeleccionada;


		break;

		case  "actividadesPoas__modificaciones":

			$informacionSeleccionada=$objeto->getObtenerInformacionGeneral("SELECT a.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_indicadores AS a1 WHERE a1.idIndicadores=a.idLineaPolitica) AS indicador FROM poa_actividades AS a WHERE a.idActividades='$idActividad' ORDER BY a.idActividades ASC;");

			$obtenerInformacion2=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_poainicial WHERE idOrganismo='$idOrganismoPrincipal' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idActividad ORDER BY idActividad ASC;");

			$obtenerInformacion3=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismoPrincipal' AND perioIngreso='$aniosPeriodos__ingesos'  GROUP BY idActividad ORDER BY idActividad ASC;");

	
			$jason['obtenerInformacion3']=$obtenerInformacion3;
			$jason['obtenerInformacion2']=$obtenerInformacion2;
			$jason['informacionSeleccionada']=$informacionSeleccionada;


		break;

		case  "actividadesPoas__modificaciones__actualiza":

			$idOrganismoSession=$_SESSION["idOrganismoSession"];

			$informacionSeleccionada=$objeto->getObtenerInformacionGeneral("SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  nombreActividades,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_indicadores AS a1 WHERE a1.idIndicadores=b.idLineaPolitica) AS indicador FROM poa_poainicial AS z INNER JOIN poa_programacion_financiera AS a ON a.idActividad=z.idActividad  INNER JOIN poa_actividades AS b ON z.idActividad=b.idActividades  WHERE z.idOrganismo='$idOrganismoSession' AND z.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismoSession' AND a.perioIngreso='$aniosPeriodos__ingesos' AND z.idActividad!='4' AND a.idActividad!='4' AND z.idActividad!='1' AND a.idActividad!='1' AND z.idActividad!='2' AND a.idActividad!='2' AND (a.modifica IS NULL OR a.modifica='A' AND z.idOrganismo='$idOrganismoSession' AND z.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismoSession' AND a.perioIngreso='$aniosPeriodos__ingesos' AND z.idActividad>=5)  GROUP BY z.idActividad;");

			

			$obtenerInformacion2=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_poainicial WHERE idOrganismo='$idOrganismoPrincipal' AND perioIngreso='$aniosPeriodos__ingesos' GROUP BY idActividad ORDER BY idActividad ASC;");

			$obtenerInformacion3=$objeto->getObtenerInformacionGeneral("SELECT idActividad FROM poa_programacion_financiera WHERE idOrganismo='$idOrganismoPrincipal' AND perioIngreso='$aniosPeriodos__ingesos'  GROUP BY idActividad ORDER BY idActividad ASC;");

	
			$jason['obtenerInformacion3']=$obtenerInformacion3;
			$jason['obtenerInformacion2']=$obtenerInformacion2;
			$jason['informacionSeleccionada']=$informacionSeleccionada;


		break;


		case  "actividadesUso":

			$arrayInformacion = json_decode($arrayInformacion);

			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT primertrimestre,segundotrimestre,tercertrimestre,cuartotrimestre,metaindicador,idActividad FROM poa_poainicial WHERE idOrganismo='$arrayInformacion[0]' AND idActividad='$arrayInformacion[1]' AND perioIngreso='$aniosPeriodos__ingesos' ORDER BY idPoaEnviado DESC LIMIT 1;");

			$jason['informacionSeleccionada']=$obtenerInformacion;

		break;	


		case  "contratacion__publicas":

			$fisicamenteEstructura__ingresos=$_SESSION["fisicamenteEstructura"];

			if ($fisicamenteEstructura__ingresos==5 || $fisicamenteEstructura__ingresos==2) {


			// contadores
			$obtenerInformacion__1=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__elect='si' GROUP BY a.idOrganismo;");

			$obtenerInformacion__2=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__subasta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__3=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__infima='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__4=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__menorCuantia='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__5=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__cotizacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__6=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__licitacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__7=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__menorCuantiaObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__8=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__cotizacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__9=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__licitacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__10=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__precioObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__11=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__contratacionDirecta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__12=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__contratacionListaCorta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__13=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__contratacionConcursoPu='si' GROUP BY a.idOrganismo;");

			if (empty($obtenerInformacion__1[0][contadorCatalogo])) {
				$jason['obtenerInformacion__1']=0;
			} else {
				$jason['obtenerInformacion__1']=$obtenerInformacion__1[0][contadorCatalogo];
			}
			
			if (empty($obtenerInformacion__2[0][contadorCatalogo])) {
				$jason['obtenerInformacion__2']=0;
			} else {
				$jason['obtenerInformacion__2']=$obtenerInformacion__2[0][contadorCatalogo];
			}
			
			if (empty($obtenerInformacion__3[0][contadorCatalogo])) {
				$jason['obtenerInformacion__3']=0;
			} else {
				$jason['obtenerInformacion__3']=$obtenerInformacion__3[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__4[0][contadorCatalogo])) {
				$jason['obtenerInformacion__4']=0;
			} else {
				$jason['obtenerInformacion__4']=$obtenerInformacion__4[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__5[0][contadorCatalogo])) {
				$jason['obtenerInformacion__5']=0;
			} else {
				$jason['obtenerInformacion__5']=$obtenerInformacion__5[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__6[0][contadorCatalogo])) {
				$jason['obtenerInformacion__6']=0;
			} else {
				$jason['obtenerInformacion__6']=$obtenerInformacion__6[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__7[0][contadorCatalogo])) {
				$jason['obtenerInformacion__7']=0;
			} else {
				$jason['obtenerInformacion__7']=$obtenerInformacion__7[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__8[0][contadorCatalogo])) {
				$jason['obtenerInformacion__8']=0;
			} else {
				$jason['obtenerInformacion__8']=$obtenerInformacion__8[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__9[0][contadorCatalogo])) {
				$jason['obtenerInformacion__9']=0;
			} else {
				$jason['obtenerInformacion__9']=$obtenerInformacion__9[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__10[0][contadorCatalogo])) {
				$jason['obtenerInformacion__10']=0;
			} else {
				$jason['obtenerInformacion__10']=$obtenerInformacion__10[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__11[0][contadorCatalogo])) {
				$jason['obtenerInformacion__11']=0;
			} else {
				$jason['obtenerInformacion__11']=$obtenerInformacion__11[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__12[0][contadorCatalogo])) {
				$jason['obtenerInformacion__12']=0;
			} else {
				$jason['obtenerInformacion__12']=$obtenerInformacion__12[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__13[0][contadorCatalogo])) {
				$jason['obtenerInformacion__13']=0;
			} else {
				$jason['obtenerInformacion__13']=$obtenerInformacion__13[0][contadorCatalogo];
			}
			

			// sumas
			$obtenerInformacion__sumas__1=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__elect='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__2=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__subasta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__3=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__infima='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__4=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__menorCuantia='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__5=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__cotizacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__6=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__licitacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__7=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__menorCuantiaObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__8=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__cotizacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__9=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__licitacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__10=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__precioObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__11=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__contratacionDirecta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__12=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__contratacionListaCorta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__13=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo'  AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__contratacionConcursoPu='si' GROUP BY a.idOrganismo;");

			if (empty($obtenerInformacion__sumas__1[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__1']=0;
			} else {
				$jason['obtenerInformacion__sumas__1']=number_format($obtenerInformacion__sumas__1[0][sumadorTotales], 2, ',', '.');
			}
			
			if (empty($obtenerInformacion__sumas__2[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__2']=0;
			} else {
				$jason['obtenerInformacion__sumas__2']=number_format($obtenerInformacion__sumas__2[0][sumadorTotales], 2, ',', '.');
			}
			
			if (empty($obtenerInformacion__sumas__3[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__3']=0;
			} else {
				$jason['obtenerInformacion__sumas__3']=number_format($obtenerInformacion__sumas__3[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__4[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__4']=0;
			} else {
				$jason['obtenerInformacion__sumas__4']=number_format($obtenerInformacion__sumas__4[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__5[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__5']=0;
			} else {
				$jason['obtenerInformacion__sumas__5']=number_format($obtenerInformacion__sumas__5[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__6[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__6']=0;
			} else {
				$jason['obtenerInformacion__sumas__6']=number_format($obtenerInformacion__sumas__6[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__7[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__7']=0;
			} else {
				$jason['obtenerInformacion__sumas__7']=number_format($obtenerInformacion__sumas__7[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__8[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__8']=0;
			} else {
				$jason['obtenerInformacion__sumas__8']=number_format($obtenerInformacion__sumas__8[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__9[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__9']=0;
			} else {
				$jason['obtenerInformacion__sumas__9']=number_format($obtenerInformacion__sumas__9[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__10[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__10']=0;
			} else {
				$jason['obtenerInformacion__sumas__10']=number_format($obtenerInformacion__sumas__10[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__11[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__11']=0;
			} else {
				$jason['obtenerInformacion__sumas__11']=number_format($obtenerInformacion__sumas__11[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__12[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__12']=0;
			} else {
				$jason['obtenerInformacion__sumas__12']=number_format($obtenerInformacion__sumas__12[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__13[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__13']=0;
			} else {
				$jason['obtenerInformacion__sumas__13']=number_format($obtenerInformacion__sumas__13[0][sumadorTotales], 2, ',', '.');
			}
			
			

			}else{

			// contadores
			$obtenerInformacion__1=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__elect='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__2=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__subasta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__3=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__infima='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__4=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__menorCuantia='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__5=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__cotizacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__6=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__licitacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__7=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__menorCuantiaObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__8=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__cotizacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__9=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__licitacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__10=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__precioObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__11=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__contratacionDirecta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__12=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__contratacionListaCorta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__13=$objeto->getObtenerInformacionGeneral("SELECT COUNT(a.idCatalogo) AS contadorCatalogo FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.perioIngreso='$aniosPeriodos__ingesos' AND b.idOrganismo='$idOrganismo'AND catalogo__contratacionConcursoPu='si' GROUP BY a.idOrganismo;");

			if (empty($obtenerInformacion__1[0][contadorCatalogo])) {
				$jason['obtenerInformacion__1']=0;
			} else {
				$jason['obtenerInformacion__1']=$obtenerInformacion__1[0][contadorCatalogo];
			}
			
			if (empty($obtenerInformacion__2[0][contadorCatalogo])) {
				$jason['obtenerInformacion__2']=0;
			} else {
				$jason['obtenerInformacion__2']=$obtenerInformacion__2[0][contadorCatalogo];
			}
			
			if (empty($obtenerInformacion__3[0][contadorCatalogo])) {
				$jason['obtenerInformacion__3']=0;
			} else {
				$jason['obtenerInformacion__3']=$obtenerInformacion__3[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__4[0][contadorCatalogo])) {
				$jason['obtenerInformacion__4']=0;
			} else {
				$jason['obtenerInformacion__4']=$obtenerInformacion__4[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__5[0][contadorCatalogo])) {
				$jason['obtenerInformacion__5']=0;
			} else {
				$jason['obtenerInformacion__5']=$obtenerInformacion__5[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__6[0][contadorCatalogo])) {
				$jason['obtenerInformacion__6']=0;
			} else {
				$jason['obtenerInformacion__6']=$obtenerInformacion__6[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__7[0][contadorCatalogo])) {
				$jason['obtenerInformacion__7']=0;
			} else {
				$jason['obtenerInformacion__7']=$obtenerInformacion__7[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__8[0][contadorCatalogo])) {
				$jason['obtenerInformacion__8']=0;
			} else {
				$jason['obtenerInformacion__8']=$obtenerInformacion__8[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__9[0][contadorCatalogo])) {
				$jason['obtenerInformacion__9']=0;
			} else {
				$jason['obtenerInformacion__9']=$obtenerInformacion__9[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__10[0][contadorCatalogo])) {
				$jason['obtenerInformacion__10']=0;
			} else {
				$jason['obtenerInformacion__10']=$obtenerInformacion__10[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__11[0][contadorCatalogo])) {
				$jason['obtenerInformacion__11']=0;
			} else {
				$jason['obtenerInformacion__11']=$obtenerInformacion__11[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__12[0][contadorCatalogo])) {
				$jason['obtenerInformacion__12']=0;
			} else {
				$jason['obtenerInformacion__12']=$obtenerInformacion__12[0][contadorCatalogo];
			}
			

			if (empty($obtenerInformacion__13[0][contadorCatalogo])) {
				$jason['obtenerInformacion__13']=0;
			} else {
				$jason['obtenerInformacion__13']=$obtenerInformacion__13[0][contadorCatalogo];
			}
			

			// sumas
			$obtenerInformacion__sumas__1=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__elect='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__2=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__subasta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__3=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__infima='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__4=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__menorCuantia='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__5=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__cotizacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__6=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__licitacion='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__7=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__menorCuantiaObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__8=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__cotizacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__9=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__licitacionObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__10=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__precioObras='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__11=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__contratacionDirecta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__12=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__contratacionListaCorta='si' GROUP BY a.idOrganismo;");
			$obtenerInformacion__sumas__13=$objeto->getObtenerInformacionGeneral("SELECT ROUND(SUM(b.totalTotales),2) AS sumadorTotales FROM poa_catalogo_contraloria AS a INNER JOIN poa_programacion_financiera AS b ON a.idItemCatalogo=b.idItem WHERE a.perioIngreso='$aniosPeriodos__ingesos' AND a.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND b.idOrganismo='$idOrganismo'AND b.perioIngreso='$aniosPeriodos__ingesos' AND a.catalogo__contratacionConcursoPu='si' GROUP BY a.idOrganismo;");

			if (empty($obtenerInformacion__sumas__1[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__1']=0;
			} else {
				$jason['obtenerInformacion__sumas__1']=number_format($obtenerInformacion__sumas__1[0][sumadorTotales], 2, ',', '.');
			}
			
			if (empty($obtenerInformacion__sumas__2[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__2']=0;
			} else {
				$jason['obtenerInformacion__sumas__2']=number_format($obtenerInformacion__sumas__2[0][sumadorTotales], 2, ',', '.');
			}
			
			if (empty($obtenerInformacion__sumas__3[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__3']=0;
			} else {
				$jason['obtenerInformacion__sumas__3']=number_format($obtenerInformacion__sumas__3[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__4[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__4']=0;
			} else {
				$jason['obtenerInformacion__sumas__4']=number_format($obtenerInformacion__sumas__4[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__5[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__5']=0;
			} else {
				$jason['obtenerInformacion__sumas__5']=number_format($obtenerInformacion__sumas__5[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__6[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__6']=0;
			} else {
				$jason['obtenerInformacion__sumas__6']=number_format($obtenerInformacion__sumas__6[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__7[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__7']=0;
			} else {
				$jason['obtenerInformacion__sumas__7']=number_format($obtenerInformacion__sumas__7[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__8[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__8']=0;
			} else {
				$jason['obtenerInformacion__sumas__8']=number_format($obtenerInformacion__sumas__8[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__9[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__9']=0;
			} else {
				$jason['obtenerInformacion__sumas__9']=number_format($obtenerInformacion__sumas__9[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__10[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__10']=0;
			} else {
				$jason['obtenerInformacion__sumas__10']=number_format($obtenerInformacion__sumas__10[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__11[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__11']=0;
			} else {
				$jason['obtenerInformacion__sumas__11']=number_format($obtenerInformacion__sumas__11[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__12[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__12']=0;
			} else {
				$jason['obtenerInformacion__sumas__12']=number_format($obtenerInformacion__sumas__12[0][sumadorTotales], 2, ',', '.');
			}
			

			if (empty($obtenerInformacion__sumas__13[0][sumadorTotales])) {
				$jason['obtenerInformacion__sumas__13']=0;
			} else {
				$jason['obtenerInformacion__sumas__13']=number_format($obtenerInformacion__sumas__13[0][sumadorTotales], 2, ',', '.');
			}
			


			}



		break;	

		case  "administrativas":

			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionActividad, (SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.noviembre,b.octubre,b.diciembre,b.totalTotales FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND a.modifica IS NULL AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idProgramacionFinanciera;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	


		case  "administrativas__modifica":

			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.justificacionActividad, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS justificacionActividad, (SELECT a1.cantidadBien FROM poa_actividadesadministrativas AS a1 WHERE a1.idProgramacionFinanciera=a.idProgramacionFinanciera ORDER BY a1.idActividadAd DESC LIMIT 1) AS cantidadBien,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.noviembre,b.octubre,b.diciembre,b.totalTotales FROM poa_actividadesadministrativas AS a INNER JOIN poa_programacion_financiera AS b ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' GROUP BY a.idProgramacionFinanciera;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	


		case  "mantenimiento":

			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS nombreInfras,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 INNER JOIN poa_mantenimiento AS a2 ON a2.provincia=a1.idProvincia WHERE a2.idProgramacionFinanciera=b.idProgramacionFinanciera LIMIT 1) AS nombreProvincia,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS direccionCompleta,(SELECT a1.estado FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS estado,(SELECT a1.tipoRecursos FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoRecursos,(SELECT a1.tipoIntervencion FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoIntervencion,(SELECT a1.detallarTipoIn FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS detallarTipoIn,(SELECT a1.tipoMantenimiento FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS materialesServicios,(SELECT a1.fechaUltimo FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS fechaUltimo,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales FROM poa_programacion_financiera AS b INNER JOIN poa_item AS c ON c.idItem=b.idItem INNER JOIN poa_mantenimiento AS zL ON zL.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND zL.modifica IS NULL AND b.perioIngreso='$aniosPeriodos__ingesos'  GROUP BY zL.idProgramacionFinanciera ORDER BY zL.idMantenimiento;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	

		case  "mantenimiento__modifica":

			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreInfras, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS nombreInfras,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 INNER JOIN poa_mantenimiento AS a2 ON a2.provincia=a1.idProvincia WHERE a2.idProgramacionFinanciera=b.idProgramacionFinanciera LIMIT 1) AS nombreProvincia,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.direccionCompleta, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS direccionCompleta,(SELECT a1.estado FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS estado,(SELECT a1.tipoRecursos FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoRecursos,(SELECT a1.tipoIntervencion FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoIntervencion,(SELECT a1.detallarTipoIn FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS detallarTipoIn,(SELECT a1.tipoMantenimiento FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS tipoMantenimiento, (SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.materialesServicios, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS materialesServicios,(SELECT a1.fechaUltimo FROM poa_mantenimiento AS a1 WHERE a1.idProgramacionFinanciera=b.idProgramacionFinanciera ORDER BY a1.idMantenimiento DESC LIMIT 1) AS fechaUltimo,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,b.totalTotales FROM poa_programacion_financiera AS b INNER JOIN poa_item AS c ON c.idItem=b.idItem INNER JOIN poa_mantenimiento AS zL ON zL.idProgramacionFinanciera=b.idProgramacionFinanciera WHERE b.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND zL.modifica='A' AND b.perioIngreso='$aniosPeriodos__ingesos' GROUP BY zL.idProgramacionFinanciera ORDER BY zL.idMantenimiento;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	


		case  "actDeportivasIns":

			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte LIMIT 1) AS Deporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS provincia,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS ciudadPais,IF((SELECT a1.nombreAlcanse FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) IS NULL, 'INT',(SELECT a1.nombreAlcanse FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance)) AS alcance,a.fechaInicio,a.fechaFin,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.justificacionAd, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS detalleBien,a.canitdarBie,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.detalleBien, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS  justificacionAd,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,a.totalElem AS totalTotales FROM poa_programacion_financiera AS b INNER JOIN poa_actdeportivas AS a  ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND a.modifica IS NULL AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY b.idItem;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	


		case  "actDeportivasIns__modifica":

			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT c.itemPreesupuestario,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.tipoFinanciamiento,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreEvento, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreEvento,(SELECT a1.nombreDeporte FROM poa_deporte AS a1 WHERE a1.idDeporte=a.Deporte LIMIT 1) AS Deporte,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.provincia) AS provincia,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.paisnombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_pais AS a1 WHERE a1.id=a.ciudadPais) AS ciudadPais,IF((SELECT a1.nombreAlcanse FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance) IS NULL, 'INT',(SELECT a1.nombreAlcanse FROM poa_alcanse AS a1 WHERE a1.idAlcanse=a.alcance)) AS alcance,a.fechaInicio,a.fechaFin,a.genero,a.categoria,a.numeroEntreandores,a.numeroAtletas,a.total,a.mBenefici,a.hBenefici,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.justificacionAd, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS justificacionAd,a.canitdarBie,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.detalleBien, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS detalleBien,a.enero,a.febrero,a.marzo,a.abril,a.mayo,a.junio,a.julio,a.agosto,a.septiembre,a.octubre,a.noviembre,a.diciembre,b.totalTotales FROM poa_programacion_financiera AS b INNER JOIN poa_actdeportivas AS a  ON a.idProgramacionFinanciera=b.idProgramacionFinanciera INNER JOIN poa_item AS c ON c.idItem=b.idItem WHERE b.idOrganismo='$idOrganismo' AND b.idActividad='$idActividad' AND a.modifica='A' AND a.perioIngreso='$aniosPeriodos__ingesos' ORDER BY b.idItem;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	

		//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  COntratacion Recursos Publicos >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
		case  "consulta_datos_exite_pdf_contratacion_recursos_publicos":
			
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT documento, fecha, perioIngreso, trimestre as listaTrimestres FROM poa_seguimiento_declaracion WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre = '$trimestre' ORDER BY idDeclaracion DESC;");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	

		case  "eliminar_declaracion_recusos":

			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();	
				$query="DELETE FROM poa_seguimiento_declaracion WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre = '$trimestre'";		

			$resultado= $conexionEstablecida->exec($query);
		
			 $mensaje=1;
			 $jason['mensaje']=$mensaje;	
		break;

		//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  COntratacion Publica >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
		case  "consulta_datos_exite_pdf_contratacion__publicaa":
			//var_dump("INFO");
			//var_dump($obtenerInformacion);
			$obtenerInformacion=$objeto->getObtenerInformacionGeneral("SELECT documento, fecha, perioIngreso, trimestre as listaTrimestres2 FROM poa_seguimiento_declaracion_contratacion_publica WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre = '$trimestre' ORDER BY id_declaracion_contratacion_publica DESC;
			");

			$jason['obtenerInformacion']=$obtenerInformacion;

		break;	

		case  "eliminar_declaracion_publica":

			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();	
				$query="DELETE FROM poa_seguimiento_declaracion_contratacion_publica WHERE idOrganismo='$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos' AND trimestre = '$trimestre'";		

			$resultado= $conexionEstablecida->exec($query);
		
				$mensaje=1;
				$jason['mensaje']=$mensaje;	
		break;

//<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<  indicadores estado de cuenta >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>//
		case "indicadores__seguimientos__tablas_estado_cuenta":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador,a.idModificaIndicadores,a.totalProgramado,a.totalEjecutado,a.documento,a.idOrganismo,a.trimestre,a.idActividad FROM poa_indicadores_seguimiento AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_indicadores AS c ON c.idIndicadores=b.idLineaPolitica WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres' GROUP BY a.idActividad ORDER BY b.idActividades ASC;");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.id_estado_cuenta, a.fecha, a.trimestre, a.documento, a.id_estado_cuenta FROM poa_seguimiento_estado_cuenta AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;

		break;

		case "biscador__indicadores__seguimientos__tablas_estado_cuenta":

			$indicadorInformacion=$objeto->getObtenerInformacionGeneral("SELECT b.idActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreActividades,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombreIndicador, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreIndicador,a.idModificaIndicadores,a.totalProgramado,a.totalEjecutado,a.documento,a.idOrganismo,a.trimestre,a.idActividad FROM poa_indicadores_seguimiento AS a INNER JOIN poa_actividades AS b ON a.idActividad=b.idActividades INNER JOIN poa_indicadores AS c ON c.idIndicadores=b.idLineaPolitica WHERE a.idOrganismo='$idOrganismos' AND a.perioIngreso='$aniosPeriodos__ingesos' AND a.trimestre='$trimestres' AND b.nombreActividades LIKE '%$textoBuscar%' GROUP BY a.idActividad ORDER BY a.idModificaIndicadores DESC;");

			$indicadorInformacion2=$objeto->getObtenerInformacionGeneral("SELECT a.id_estado_cuenta, a.fecha, a.trimestre, a.documento, a.id_estado_cuenta FROM poa_seguimiento_estado_cuenta AS a WHERE a.idOrganismo='$idOrganismos' AND a.trimestre='$trimestres' AND a.perioIngreso='$aniosPeriodos__ingesos';");

			$jason['indicadorInformacion']=$indicadorInformacion;
			$jason['indicadorInformacion2']=$indicadorInformacion2;

		break;


	}

	echo json_encode($jason);





