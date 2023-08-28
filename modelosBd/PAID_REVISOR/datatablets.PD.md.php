<?php
	
	extract($_POST);

	require_once "../../config/config2.php";
	
	$objeto= new usuarioAcciones();
	$anioA = date('Y');
	$anio = date('Y');

	$corPlanificas=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='3' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$corInsta=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='4' AND a.fisicamenteEstructura='1' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$directorPlanificacion=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1;");

	$planificacion=$corPlanificas[0][id_usuario];
	$instalaciones=$corInsta[0][id_usuario];
	$directorVariables=$directorPlanificacion[0][id_usuario];

	session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
	$idOrganismoSession=$_SESSION["idOrganismoSession"];

    switch ($tipo) {


		case "paidJuegosNacionales":

			$query="SELECT nombres,sede,instituciones, fechaInicio, fechFin, deportes, categoria, mujeres, hombres, entrenadores, valorTotal, observaciones, idEncuentroActivo FROM poa_paid_encuentroactivo where idOrganismo='$idOrganismoSession' AND perioIngreso='$aniosPeriodos__ingesos';";
			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;


		case "organismoSubses__paid":

			if ($datos[2]=="24" && $datos[1]=="7") {

				$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo,a.identificador,(SELECT ROUND(a1.monto,2) FROM poa_paid_asignacion_dos as a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.estado='A' ORDER BY a1.idAsignacion DESC LIMIT 1) AS montoA FROM poa_paid_envioinicial AS a WHERE identificador='0' AND (idUsuarioS='$datos[0]' OR idUsuarioS IS NULL) AND a.perioIngreso='$aniosPeriodos__ingesos';";

			}else if ($datos[2]=="26" && $datos[1]=="7") {

				$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo,a.identificador,(SELECT ROUND(a1.monto,2) FROM poa_paid_asignacion_dos as a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.estado='A' ORDER BY a1.idAsignacion DESC LIMIT 1) AS montoA FROM poa_paid_envioinicial AS a WHERE identificador='1' AND (idUsuarioS='$datos[0]' OR idUsuarioS IS NULL) AND a.perioIngreso='$aniosPeriodos__ingesos';";

			}else{

				$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo,a.identificador,(SELECT ROUND(a1.monto,2) FROM poa_paid_asignacion_dos as a1 WHERE a1.idOrganismo=a.idOrganismo AND a1.estado='A' ORDER BY a1.idAsignacion DESC LIMIT 1) AS montoA FROM poa_paid_envioinicial AS a WHERE idUsuarioS='$datos[0]' AND a.observado IS NULL AND a.perioIngreso='$aniosPeriodos__ingesos';";


			}


			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "organismoSubses__paid__recomiendas":

			$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo, a.documento,a.identificador FROM poa_paid_envioinicial AS a WHERE idUsuarioR='$datos[0]' AND a.perioIngreso='$aniosPeriodos__ingesos';";


			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "organismoSubses__paid__recomiendas__final__reporteria":

			if ($datos[0]==12 || $datos[0]==24) {
				
				$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo, a.documento,a.identificador FROM poa_paid_envioinicial AS a WHERE identificador='0' AND a.perioIngreso='$aniosPeriodos__ingesos';";

			}else if($datos[0]==26 || $datos[0]==19 || $datos[0]==19){

				$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo, a.documento,a.identificador FROM poa_paid_envioinicial AS a WHERE identificador='1' AND a.perioIngreso='$aniosPeriodos__ingesos';";				


			}else{

				$query="SELECT (SELECT a1.ruc FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS ruc,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreOrganismo,(SELECT a1.correo FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS correo,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a1.telefonoOficina FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS telefonoOficina,(SELECT a2.nombreTipo FROM poa_competencia_organismo_competencia AS a1 INNER JOIN poa_tipo_organismo AS a2 WHERE a1.idTipoOrganismo=a2.idTipoOrganismo LIMIT 1) AS nombreTipo,(SELECT a1.nombreResponsablePoa FROM poa_organismo AS a1 WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreResponsablePoa,(SELECT a2.nombreProvincia FROM poa_organismo AS a1 INNER JOIN in_md_provincias AS a2 ON a1.idProvincia=a2.idProvincia WHERE a1.idOrganismo=a.idOrganismo LIMIT 1) AS nombreProvincia,a.fecha,a.idOrganismo, a.documento,a.identificador FROM poa_paid_envioinicial AS a WHERE (identificador='0' OR identificador='1') AND a.perioIngreso='$aniosPeriodos__ingesos';";

			}
			

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;
	

		case "paidGeneral__revisor":

			$query="SELECT b.nombreComponentes,d.nombreIndicadores,c.nombreRubros,f.itemPreesupuestario , f.nombreItem,e.enero,e.febrero,e.marzo,e.abril,e.mayo,e.junio,e.julio,e.agosto,e.septiembre,e.octubre,e.noviembre,e.diciembre,e.totalSumaItem FROM poa_paid_asignacion AS a INNER JOIN poa_paid_componentes AS b ON a.idComponentes=b.idComponentes INNER JOIN poa_paid_rubros AS c ON c.idRubros=a.idRubros INNER JOIN poa_paid_indicadores AS d ON d.idIndicadores=b.idIndicador  INNER JOIN poa_paid_programacion_financiera as e on e.idRubro = c.idRubros INNER JOIN poa_paid_item as f on e.idItemSelector=f.idItem INNER JOIN poa_paid_catalogo_contraloria as g on g.idItem = f.idItem  WHERE a.idOrganismo='$datos[0]' AND a.perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets2($query);

			echo json_encode($dataTablets);

		break;	

		case "paidIndicadores__revisor":

			$query="select b.nombreIndicadores, a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador from poa_paid_indicadores_organismos as a INNER JOIN poa_paid_indicadores as b on a.idIndicador=b.idIndicadores where a.idOrganismo='$datos[0]' and a.perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		
		case "paidIndicadores__revisor":

			$query="select b.nombreIndicadores, a.primertrimestre,a.segundotrimestre,a.tercertrimestre,a.cuartotrimestre,a.metaindicador from poa_paid_indicadores_organismos as a INNER JOIN poa_paid_indicadores as b on a.idIndicador=b.idIndicadores where a.idOrganismo='$datos[0]' and a.perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "paidEncuentroAc__revisor":

			$query="SELECT nombres,sede,instituciones, fechaInicio, fechFin, deportes, categoria, mujeres, hombres, entrenadores, valorTotal, observaciones, idEncuentroActivo FROM poa_paid_encuentroactivo where idOrganismo='$datos[0]' AND perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "paidEventos__revisor":

			$query="SELECT a.actividadDeportiva, a.deporte, a.modalidad, a.nombreEvento, a.prueba, a.categoria, a.fechaInicio, a.fechaFin, a.pais, a.sede, a.numeroOficina, a.numeroAtletas, a.numeroDias, a.numeroPax, a.valorTotal, a.Observaciones, a.idEventos
			FROM `poa_paid_eventos` AS a WHERE  idOrganismo ='$datos[0]' AND a.perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "paidNecesidadesGenerales__revisor":

			$query="SELECT modalidad, articulo, cantidad, valorUnitario, valorTotal, sector, idNecesidadesGenerales FROM poa_paid_necesidades_generales where idOrganismo='$datos[0]' AND  perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "paidIndividuales__revisor":

			$query="SELECT modalidad, nombres, apellidos, articulo, cantidad, valorUnitario, valorTotal, sector, idNecesidadesIndividuales FROM poa_paid_necesidades_individuales where idOrganismo='$datos[0]' AND perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "paidInterdiciplinarios__revisor":

			$query="SELECT a.cedula, a.modalidad, a.sexo, a.cargo, a.nombres, a.apellidos, a.fechaInicio, a.fechaFin, a.valor, a.numeroMeses, a.valorTotal, a.sector, a.idIterdisciplinario 
			FROM poa_paid_interdisciplinario AS a WHERE idOrganismo='$datos[0]' AND a.perioIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	
		


    }

