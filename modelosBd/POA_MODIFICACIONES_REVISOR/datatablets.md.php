<?php
	
	extract($_POST);

	require_once "../../config/config2.php";
	
	$objeto= new usuarioAcciones();
	$anioA = date('Y');
	$anio = date('Y');

	session_start();

	$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
	$rolFun=$_SESSION["idRol"];
	$fisicamenteEstructura=$_SESSION["fisicamenteEstructura"];
	$idFuncionario=$_SESSION["idUsuario"];

	switch ($identificador) {


		case "reasignacionModificaciones__recomendaciones__planificacion__general__organismo__funcionario":


			$query="SELECT (SELECT COUNT(idModificacionDerfinitiva)  FROM poa_modificaciones_envio_inicial AS a1 WHERE a1.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a1.idModificacionDerfinitiva) AS contador,a.fecha,b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.periodoIngreso='$aniosPeriodos__ingesos' ORDER BY a.idOrganismo;";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		



		case "reasignacionModificaciones__recomendaciones__planificacion__recomendacion__quipux":

			$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioPlaR='1' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		


		case "reasignacionModificaciones__recomendaciones__planificacion__recomendacion":

			$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioPlaR='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		


		case "reasignacionModificaciones__recomendaciones__planificacion":

			if ($rolFun==4) {
					
				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE (a.idUsuarioR='$idFuncionario' OR a.idUsuarioInfraR='$idFuncionario' OR a.idInstalacionesR='$idFuncionario' OR a.idUsuarioFinanR='$idFuncionario') AND a.periodoIngreso='$aniosPeriodos__ingesos';";


			}else{

				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioPla='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

			}
		
			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		


		case "reasignacionModificaciones__recomendaciones":

			if (($rolFun==7 || $rolFun==2)  && ($fisicamenteEstructura==12 || $fisicamenteEstructura==24 || $fisicamenteEstructura==26 || $fisicamenteEstructura==13 || $fisicamenteEstructura==19 || $fisicamenteEstructura==25 || $fisicamenteEstructura==14)) {
					
				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioR='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";


			}else if(($rolFun==4 || $rolFun==2) && ($fisicamenteEstructura==1 || $fisicamenteEstructura==6 || $fisicamenteEstructura==15)){

				if ($fisicamenteEstructura==1 && $rolFun==4) {
					
					$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE (a.idUsuarioInfraR='$idFuncionario'  OR a.idInstalacionesR='$idFuncionario' OR a.idUsuarioInfraR='2'  OR a.idInstalacionesR='2' AND a.periodoIngreso='$aniosPeriodos__ingesos') AND a.periodoIngreso='$aniosPeriodos__ingesos';";

				}else if($rolFun==2 &&  $fisicamenteEstructura==6){

					$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idInstalacionesR='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

				}else if($rolFun==2 &&  $fisicamenteEstructura==15){

					$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioInfraR='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

				}

			}else if(($rolFun==4 || $rolFun==2) && ($fisicamenteEstructura==2 || $fisicamenteEstructura==5)){

				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioFinanR='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

			}
			$dataTablets=$objeto->getDatatablets2($query);
			echo json_encode($dataTablets);

		break;		

		case "reasignacionModificaciones":

			if ($rolFun==7) {

				if ($fisicamenteEstructura==24){
					
					$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuario=0 AND a.periodoIngreso='$aniosPeriodos__ingesos' AND (d.nombreTipo LIKE '%ecuatorianas por%' OR d.nombreTipo LIKE '%pico Ecuatoriano%'  OR d.nombreTipo LIKE '%Federaciones Ecuatorianas de Deporte Adaptado%' OR d.nombreTipo LIKE '%Militar Ecuatoriana%' OR d.nombreTipo LIKE '%Policial Ecuatoriana%' AND a.periodoIngreso='$aniosPeriodos__ingesos') AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";

				}else{
					
					$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuario=0 AND a.periodoIngreso='$aniosPeriodos__ingesos' AND (d.nombreTipo LIKE '%cantonales%' OR d.nombreTipo LIKE '%comunitarias%'  OR d.nombreTipo LIKE '%deportivas provinciales%' OR d.nombreTipo LIKE '%barriales y parroquiales%' OR d.nombreTipo LIKE '%Federaciones provinciales de ligas%' OR d.nombreTipo LIKE '%Federaciones provinciales de ligas%' OR d.nombreTipo LIKE '%Federaciones provinciales de ligas%' OR d.nombreTipo LIKE '%Federaciones provinciales de ligas%' OR d.nombreTipo LIKE '%Federaciones deportivas provinciales de r%' OR d.nombreTipo LIKE '%Nacional de Ligas Deportivas%' OR d.nombreTipo LIKE '%Nacional del Ecuador%' OR d.nombreTipo LIKE '%de Deporte Universitario%' OR d.nombreTipo LIKE '%Estudiantil%' OR d.nombreTipo LIKE '%Rurales%') AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";

				}
				

			}else if($fisicamenteEstructura==1 && $rolFun==4){

				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioInfra=0 AND (SELECT a1.idOrigenDestino FROM poa_modificaciones_origen_destino AS a1 WHERE a1.actividadDestino='2' AND a1.idModificacionDerfinitiva=a.idModificacionDerfinitiva LIMIT 1) AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";

			}else if($fisicamenteEstructura==2 && $rolFun==4){

				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioFinan=0 AND (SELECT a1.idOrigenDestino FROM poa_modificaciones_origen_destino AS a1 WHERE a1.actividadDestino='1' AND a1.idModificacionDerfinitiva=a.idModificacionDerfinitiva LIMIT 1) AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";

			}else{

				$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE (a.idUsuario='$idFuncionario' OR a.idUsuarioFinan='$idFuncionario' OR a.idUsuarioInfra='$idFuncionario'  OR a.idInstalaciones='$idFuncionario') AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";
				
			}
		
			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;		

		case "reasignacionModificaciones__infra":

			$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioInfra='$idFuncionario'  OR a.idInstalaciones='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "reasignacionModificaciones__subsess":

			$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuario='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos' GROUP BY a.idOrganismo;";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	

		case "reasignacionModificaciones__recomendaciones__infra":

			$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE (a.idInstalacionesR='$idFuncionario' OR a.idUsuarioInfraR='$idFuncionario') AND a.periodoIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	


		case "reasignacionModificaciones__recomendaciones__subsess":

			$query="SELECT b.ruc,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS organismo,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreTipo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreTipo,(SELECT a1.nombreProvincia FROM in_md_provincias AS a1 WHERE a1.idProvincia=b.idProvincia LIMIT 1) AS nombreProvincia,a.idModificacionDerfinitiva,a.idOrganismo FROM poa_modificaciones_envio_inicial AS a INNER JOIN poa_organismo AS b ON a.idOrganismo=b.idOrganismo INNER JOIN poa_competencia_organismo_competencia AS c ON c.idOrganismo=a.idOrganismo INNER JOIN poa_tipo_organismo AS d ON d.idTipoOrganismo=c.idTipoOrganismo WHERE a.idUsuarioR='$idFuncionario' AND a.periodoIngreso='$aniosPeriodos__ingesos';";

			$dataTablets=$objeto->getDatatablets($query);
			echo json_encode($dataTablets);

		break;	



	}


