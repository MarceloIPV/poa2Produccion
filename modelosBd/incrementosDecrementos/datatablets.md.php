<?php
	
	extract($_POST);

	require_once "../../config/config2.php";
	
	$objeto= new usuarioAcciones();
	$anioA = date('Y');
	$anio = date('Y');

	session_start();


	$periodo__traido=$_SESSION["selectorAniosA"];

	switch ($identificador) {


		case "asignarPresupuestoMo__incrementos__v__1":

			$query="SELECT a.ruc,a.nombreOrganismo,d.nombreTipo as tipoOrganismo,a.correo,(SELECT CONCAT_WS(' ', a1.nombreProvincia) FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.idProvincia) AS nombreProvincia,(SELECT telefono FROM poa_usuario AS a1 WHERE a1.idUsuario=a.idUsuario LIMIT 1) AS telefonoOficina,(SELECT a2.nombreInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo ORDER BY a2.idInversion DESC LIMIT 1) AS nombreInversion, IFNULL((SELECT CONCAT_WS(' ','INCREMENTO') FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo AND a1.incrementoDecremento='incremento' ORDER BY a2.idInversion DESC LIMIT 1),'N/A') AS increDecre, IFNULL((SELECT CONCAT_WS(' ','INCREMENTO') FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo AND a1.incrementoDecremento='incremento' ORDER BY a2.idInversion DESC LIMIT 1),'N/A') AS increDecre ,a.idOrganismo, (SELECT a2.idInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo ORDER BY a2.idInversion DESC LIMIT 1) AS idInversion FROM poa_organismo AS a INNER JOIN poa_documentofinal AS b ON a.idOrganismo=b.idOrganismo LEFT JOIN poa_competencia_organismo_competencia AS c ON a.idOrganismo=c.idOrganismo LEFT JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE b.perioIngreso='$periodo__traido' AND NOT EXISTS (SELECT a1.idOrganismo FROM poa_inversion_usuario AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.incrementoDecremento='decremento') GROUP BY a.idOrganismo;";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		


		case "asignarPresupuestoMo__decrementos__v__1":

			$query="SELECT a.ruc,a.nombreOrganismo,d.nombreTipo as tipoOrganismo,a.correo,(SELECT CONCAT_WS(' ', a1.nombreProvincia) FROM in_md_provincias AS a1 WHERE a1.idProvincia=a.idProvincia) AS nombreProvincia,(SELECT telefono FROM poa_usuario AS a1 WHERE a1.idUsuario=a.idUsuario LIMIT 1) AS telefonoOficina,(SELECT a2.nombreInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo ORDER BY a2.idInversion DESC LIMIT 1) AS nombreInversion, IFNULL((SELECT CONCAT_WS(' ','DECREMENTO') FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo AND a1.incrementoDecremento='decremento' ORDER BY a2.idInversion DESC LIMIT 1),'N/A') AS increDecre, IFNULL((SELECT CONCAT_WS(' ','DECREMENTO') FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo AND a1.incrementoDecremento='decremento' ORDER BY a2.idInversion DESC LIMIT 1),'N/A') AS increDecre ,a.idOrganismo, (SELECT a2.idInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo ORDER BY a2.idInversion DESC LIMIT 1) AS idInversion FROM poa_organismo AS a INNER JOIN poa_documentofinal AS b ON a.idOrganismo=b.idOrganismo LEFT JOIN poa_competencia_organismo_competencia AS c ON a.idOrganismo=c.idOrganismo LEFT JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE b.perioIngreso='$periodo__traido' AND NOT EXISTS (SELECT a1.idOrganismo FROM poa_inversion_usuario AS a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.incrementoDecremento='incremento') GROUP BY a.idOrganismo;";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		

		case "asignarPresupuestoMo__revisor__v__1":

			$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS rucOrganismo,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS nombreOrganismo,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo) AS provincia,a.tramite,a.idOrganismo,a.idIncrementos FROM poa_incrementos_ingreso AS a WHERE a.perioIngreso='$periodo__traido' AND a.estado='E' AND NOT EXISTS (SELECT a1.idTramiteFinalIncrementos FROM poa_incrementos_ingreso_final AS a1 WHERE a1.idIncrementos=a.idIncrementos);";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		


		case "asignarPresupuestoMo__revisor__v__1__aprobados":

			$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS rucOrganismo,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo) AS nombreOrganismo,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo) AS provincia,a.tipoTramite,a.documento FROM poa_incrementos_ingreso_final AS a WHERE a.perioIngreso='$periodo__traido';";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		

		case "notificacionIncrementoDecremento__v1__":
			$query="SELECT b.ruc,b.nombreOrganismo,a.fecha,a.hora,a.estado,a.documento  FROM poa_incrementos_notificacion AS a INNER JOIN poa_organismo AS b ON a.idOrganismo = b.idOrganismo WHERE a.perioIngreso='$periodo__traido';";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);
		break;
	}


