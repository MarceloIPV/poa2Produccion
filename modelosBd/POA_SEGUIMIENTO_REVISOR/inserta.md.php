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
    
	/*=====  End of Parametros Iniciales  ======*/
	

	$objeto= new usuarioAcciones();

	switch ($tipo) {

	
		case  "recomendacion__tecnicos":

			$nombre__archivo=$idOrganismo."__".$idUSeguimientos."__".$fecha_actual."__".$periodo.".pdf";

			$superior__inmediatos=$objeto->getObtenerInformacionGeneral("SELECT PersonaACargo FROM th_usuario WHERE id_usuario='$idUSeguimientos';");

			$super__var=$superior__inmediatos[0][PersonaACargo];

			if ($rotulo__recomendado=="alto__rendimientos") {

				$direccion1=VARIABLE__BACKEND."seguimiento/informes__altos/";

				$documento=$objeto->getEnviarPdf($_FILES["archivoSubido__seguimientos"]['type'],$_FILES["archivoSubido__seguimientos"]['size'],$_FILES["archivoSubido__seguimientos"]['tmp_name'],$_FILES["archivoSubido__seguimientos"]['name'],$direccion1,$nombre__archivo);

				$inserta=$objeto->getInsertaNormal('poa_seguimiento_recomendado_tecnico', array("`idInformacionEnviada`, ","`trimestre`, ","`idOrganismo`, ","`numeroConvenio`, ","`administradorConvenio`, ","`documentoDesignacion`, ","`meta1`, ","`meta2`, ","`meta3`, ","`meta4`, ","`meta5`, ","`meta6`, ","`meta7`, ","`meta8`, ","`resultado1`, ","`resultado2`, ","`resultado3`, ","`resultado4`, ","`resultado5`, ","`resultado6`, ","`resultado7`, ","`resultado8`, ","`porcentaje1`, ","`porcentaje2`, ","`porcentaje3`, ","`porcentaje4`, ","`porcentaje5`, ","`porcentaje6`, ","`porcentaje7`, ","`porcentaje8`, ","`indicador`, ","`oro`, ","`plata`, ","`bronce`, ","`presenta1`, ","`presenta2`, ","`presenta3`, ","`presenta4`, ","`presenta5`, ","`presenta6`, ","`presenta7`, ","`presenta8`, ","`observacion`, ","`recomendacion`, ","`archivo`, ","`idUsuario`, ","`fecha`, ","`hora`, ","`tipo`, ","`perioIngreso`"),array("'$periodo', ","'$idOrganismo', ","'$numeroConvenio__paid', ","'$administradorConvenio__paid', ","'$documentoAsignacionConvenio__paid', ","'$eventos__eje__alto', ","'$eventos__eje__alto__parti', ","'$implementacion__de__eje__alto__meta', ","'$beneficiarios__de__eje__alto__meta', ","'$preparacion__de__eje__alto__meta', ","' ', ","' ', ","'$metaProgramadaArray', ","'$meta__eje__alto', ","'$meta__eje__alto__parti', ","'$implementacion__de__eje__alto__resultado', ","'$beneficiarios__de__eje__alto__resultado', ","'$preparacion__de__eje__alto__resultado', ","' ', ","' ', ","'$metaResultadoArray', ","'$porcentaje__c__eje__alto', ","'$porcentaje__c__eje__alto__parti', ","'$porcentaje__c__implementacion__de__e__alto', ","'$porcentaje__c__beneficiarios__de__e__alto', ","'$porcentaje__c__preparacion__de__e__alto', ","' ', ","' ', ","'$porcentajeCumplimientoArray', ","'$indicadorArray', ","'$oro__alto', ","'$plata__alto', ","'$bronce__alto', ","'$reporte__tabla__alto', ","'$listados__tabla__alto', ","'$informe__tabla__alto', ","'$registro__tabla__alto', ","'$asistentes__tabla__alto', ","'$actas__tabla__alto', ","'$cumplimientos__tabla__alto', ","' ', ","'$observaciones__alto__seguis', ","'$recomendaciones__alto__seguis', ","'$nombre__archivo', ","'$idUSeguimientos', ","'$fecha_actual', ","'$hora_actual', ","'$rotulo__recomendado', ","'$aniosPeriodos__ingesos'"));

				$conexionRecuperada= new conexion();
	 			$conexionEstablecida=$conexionRecuperada->cConexion();		
	 			
	 			$query="UPDATE poa_trimestrales SET estadoAl='T',estadoAlR='$super__var' WHERE idOrganismo='$idOrganismo' AND tipoTrimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos';";
				$resultado= $conexionEstablecida->exec($query);
		

			}else if($rotulo__recomendado=="formativo"){

				$direccion1=VARIABLE__BACKEND."seguimiento/informe__formativos/";

				$documento=$objeto->getEnviarPdf($_FILES["archivoSubido__seguimientos"]['type'],$_FILES["archivoSubido__seguimientos"]['size'],$_FILES["archivoSubido__seguimientos"]['tmp_name'],$_FILES["archivoSubido__seguimientos"]['name'],$direccion1,$nombre__archivo);

				$inserta=$objeto->getInsertaNormal('poa_seguimiento_recomendado_tecnico', array("`idInformacionEnviada`, ","`trimestre`, ","`idOrganismo`, ","`numeroConvenio`, ","`administradorConvenio`, ","`documentoDesignacion`, ","`meta1`, ","`meta2`, ","`meta3`, ","`meta4`, ","`meta5`, ","`meta6`, ","`meta7`, ","`meta8`, ","`resultado1`, ","`resultado2`, ","`resultado3`, ","`resultado4`, ","`resultado5`, ","`resultado6`, ","`resultado7`, ","`resultado8`, ","`porcentaje1`, ","`porcentaje2`, ","`porcentaje3`, ","`porcentaje4`, ","`porcentaje5`, ","`porcentaje6`, ","`porcentaje7`, ","`porcentaje8`, ","`indicador`, ","`oro`, ","`plata`, ","`bronce`, ","`presenta1`, ","`presenta2`, ","`presenta3`, ","`presenta4`, ","`presenta5`, ","`presenta6`, ","`presenta7`, ","`presenta8`, ","`observacion`, ","`recomendacion`, ","`archivo`, ","`idUsuario`, ","`fecha`, ","`hora`, ","`tipo`, ","`perioIngreso`"),array("'$periodo', ","'$idOrganismo', ","'$numeroConvenio__paid', ","'$administradorConvenio__paid', ","'$documentoAsignacionConvenio__paid', ","'$eventos__eje__alto', ","'$eventos__eje__alto__parti', ","'$implementacion__de__eje__alto__meta', ","'$beneficiarios__de__eje__alto__meta', ","'$preparacion__de__eje__alto__meta', ","'$beneficiarios__capa__de__eje__alto__meta', ","'$beneficiarios__even__prepa__de__eje__alto__meta', ","'$metaProgramadaArray', ","'$meta__eje__alto', ","'$meta__eje__alto__parti', ","'$implementacion__de__eje__alto__resultado', ","'$beneficiarios__de__eje__alto__resultado', ","'$preparacion__de__eje__alto__resultado', ","'$beneficiarios__capa__de__eje__alto__resultado', ","'$beneficiarios__even__prepa__de__eje__alto__resultado', ","'$metaResultadoArray', ","'$porcentaje__c__eje__alto', ","'$porcentaje__c__eje__alto__parti', ","'$porcentaje__c__implementacion__de__e__alto', ","'$porcentaje__c__beneficiarios__de__e__alto', ","'$porcentaje__c__preparacion__de__e__alto', ","'$porcentaje__c__beneficiarios__capa__de__e__alto', ","'$porcentaje__c__even__prepa__capa__de__e__alto', ","'$porcentajeCumplimientoArray', ","'$indicadorArray', ","'$oro__alto', ","'$plata__alto', ","'$bronce__alto', ","'$reporte__tabla__alto', ","'$listados__tabla__alto', ","'$informe__tabla__alto', ","'$registro__tabla__alto', ","'$asistentes__tabla__alto', ","'$actas__tabla__alto', ","' ', ","' ', ","'$observaciones__alto__seguis', ","'$recomendaciones__alto__seguis', ","'$nombre__archivo', ","'$idUSeguimientos', ","'$fecha_actual', ","'$hora_actual', ","'$rotulo__recomendado', ","'$aniosPeriodos__ingesos'"));


				$conexionRecuperada= new conexion();
	 			$conexionEstablecida=$conexionRecuperada->cConexion();		
	 			
	 			$query="UPDATE poa_trimestrales SET estadoF='T',estadoFR='$super__var' WHERE idOrganismo='$idOrganismo' AND tipoTrimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos';";
				$resultado= $conexionEstablecida->exec($query);
				
			}else if($rotulo__recomendado=="contratacionPublica"){


				$nombre__archivo1="Actividad1__".$idOrganismo."__".$idUSeguimientos."__".$fecha_actual."__".$periodo.".pdf";
				$nombre__archivo2="ContratacionPublica__".$idOrganismo."__".$idUSeguimientos."__".$fecha_actual."__".$periodo.".pdf";

				$direccion1=VARIABLE__BACKEND."seguimiento/informes__contratacion/";

				$documento=$objeto->getEnviarPdf($_FILES["archivoSubido__seguimientos"]['type'],$_FILES["archivoSubido__seguimientos"]['size'],$_FILES["archivoSubido__seguimientos"]['tmp_name'],$_FILES["archivoSubido__seguimientos"]['name'],$direccion1,$nombre__archivo1);

				$documento=$objeto->getEnviarPdf($_FILES["archivoSubido__seguimientos2"]['type'],$_FILES["archivoSubido__seguimientos2"]['size'],$_FILES["archivoSubido__seguimientos2"]['tmp_name'],$_FILES["archivoSubido__seguimientos2"]['name'],$direccion1,$nombre__archivo2);

				$inserta=$objeto->getInsertaNormal('poa_seguimiento_recomendado_tecnico', array("`idInformacionEnviada`, ","`trimestre`, ","`idOrganismo`, ","`numeroConvenio`, ","`administradorConvenio`, ","`documentoDesignacion`, ","`meta1`, ","`meta2`, ","`meta3`, ","`meta4`, ","`meta5`, ","`meta6`, ","`meta7`, ","`meta8`, ","`resultado1`, ","`resultado2`, ","`resultado3`, ","`resultado4`, ","`resultado5`, ","`resultado6`, ","`resultado7`, ","`resultado8`, ","`porcentaje1`, ","`porcentaje2`, ","`porcentaje3`, ","`porcentaje4`, ","`porcentaje5`, ","`porcentaje6`, ","`porcentaje7`, ","`porcentaje8`, ","`indicador`, ","`oro`, ","`plata`, ","`bronce`, ","`presenta1`, ","`presenta2`, ","`presenta3`, ","`presenta4`, ","`presenta5`, ","`presenta6`, ","`presenta7`, ","`presenta8`, ","`observacion`, ","`recomendacion`, ","`archivo`, ","`idUsuario`, ","`fecha`, ","`hora`, ","`tipo`, ","`perioIngreso`"),array("'$periodo', ","'$idOrganismo', ","'$numeroConvenio__paid', ","'$administradorConvenio__paid', ","'$documentoAsignacionConvenio__paid', ","'$eventos__eje__alto', ","'$eventos__eje__alto__parti', ","'$implementacion__de__eje__alto__meta', ","'$beneficiarios__de__eje__alto__meta', ","'$preparacion__de__eje__alto__meta', ","'$beneficiarios__capa__de__eje__alto__meta', ","'$beneficiarios__even__prepa__de__eje__alto__meta', ","'$metaProgramadaArray', ","'$meta__eje__alto', ","'$meta__eje__alto__parti', ","'$implementacion__de__eje__alto__resultado', ","'$beneficiarios__de__eje__alto__resultado', ","'$preparacion__de__eje__alto__resultado', ","'$beneficiarios__capa__de__eje__alto__resultado', ","'$beneficiarios__even__prepa__de__eje__alto__resultado', ","'$metaResultadoArray', ","'$porcentaje__c__eje__alto', ","'$porcentaje__c__eje__alto__parti', ","'$porcentaje__c__implementacion__de__e__alto', ","'$porcentaje__c__beneficiarios__de__e__alto', ","'$porcentaje__c__preparacion__de__e__alto', ","'$porcentaje__c__beneficiarios__capa__de__e__alto', ","'$porcentaje__c__even__prepa__capa__de__e__alto', ","'$porcentajeCumplimientoArray', ","'$indicadorArray', ","'$oro__alto', ","'$plata__alto', ","'$bronce__alto', ","'$reporte__tabla__alto', ","'$listados__tabla__alto', ","'$informe__tabla__alto', ","'$registro__tabla__alto', ","'$asistentes__tabla__alto', ","'$actas__tabla__alto', ","' ', ","' ', ","'$observaciones__alto__seguis', ","'$recomendaciones__alto__seguis', ","'$nombre__archivo1', ","'$idUSeguimientos', ","'$fecha_actual', ","'$hora_actual', ","'Actividad1', ","'$aniosPeriodos__ingesos'"));

				$inserta=$objeto->getInsertaNormal('poa_seguimiento_recomendado_tecnico', array("`idInformacionEnviada`, ","`trimestre`, ","`idOrganismo`, ","`numeroConvenio`, ","`administradorConvenio`, ","`documentoDesignacion`, ","`meta1`, ","`meta2`, ","`meta3`, ","`meta4`, ","`meta5`, ","`meta6`, ","`meta7`, ","`meta8`, ","`resultado1`, ","`resultado2`, ","`resultado3`, ","`resultado4`, ","`resultado5`, ","`resultado6`, ","`resultado7`, ","`resultado8`, ","`porcentaje1`, ","`porcentaje2`, ","`porcentaje3`, ","`porcentaje4`, ","`porcentaje5`, ","`porcentaje6`, ","`porcentaje7`, ","`porcentaje8`, ","`indicador`, ","`oro`, ","`plata`, ","`bronce`, ","`presenta1`, ","`presenta2`, ","`presenta3`, ","`presenta4`, ","`presenta5`, ","`presenta6`, ","`presenta7`, ","`presenta8`, ","`observacion`, ","`recomendacion`, ","`archivo`, ","`idUsuario`, ","`fecha`, ","`hora`, ","`tipo`, ","`perioIngreso`"),array("'$periodo', ","'$idOrganismo', ","'$numeroConvenio__paid', ","'$administradorConvenio__paid', ","'$documentoAsignacionConvenio__paid', ","'$eventos__eje__alto', ","'$eventos__eje__alto__parti', ","'$implementacion__de__eje__alto__meta', ","'$beneficiarios__de__eje__alto__meta', ","'$preparacion__de__eje__alto__meta', ","'$beneficiarios__capa__de__eje__alto__meta', ","'$beneficiarios__even__prepa__de__eje__alto__meta', ","'$metaProgramadaArray', ","'$meta__eje__alto', ","'$meta__eje__alto__parti', ","'$implementacion__de__eje__alto__resultado', ","'$beneficiarios__de__eje__alto__resultado', ","'$preparacion__de__eje__alto__resultado', ","'$beneficiarios__capa__de__eje__alto__resultado', ","'$beneficiarios__even__prepa__de__eje__alto__resultado', ","'$metaResultadoArray', ","'$porcentaje__c__eje__alto', ","'$porcentaje__c__eje__alto__parti', ","'$porcentaje__c__implementacion__de__e__alto', ","'$porcentaje__c__beneficiarios__de__e__alto', ","'$porcentaje__c__preparacion__de__e__alto', ","'$porcentaje__c__beneficiarios__capa__de__e__alto', ","'$porcentaje__c__even__prepa__capa__de__e__alto', ","'$porcentajeCumplimientoArray', ","'$indicadorArray', ","'$oro__alto', ","'$plata__alto', ","'$bronce__alto', ","'$reporte__tabla__alto', ","'$listados__tabla__alto', ","'$informe__tabla__alto', ","'$registro__tabla__alto', ","'$asistentes__tabla__alto', ","'$actas__tabla__alto', ","' ', ","' ', ","'$observaciones__alto__seguisContratacion', ","'$recomendaciones__alto__seguisContratacion', ","'$nombre__archivo2', ","'$idUSeguimientos', ","'$fecha_actual', ","'$hora_actual', ","'ContratacionPublica', ","'$aniosPeriodos__ingesos'"));


				$conexionRecuperada= new conexion();
	 			$conexionEstablecida=$conexionRecuperada->cConexion();		
	 			
	 			$query="UPDATE poa_trimestrales SET financiero='T',financieroR='$super__var' WHERE idOrganismo='$idOrganismo' AND tipoTrimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos';";
				$resultado= $conexionEstablecida->exec($query);
				
			}else{

				$direccion1=VARIABLE__BACKEND."seguimiento/informe__recreativos/";

				$documento=$objeto->getEnviarPdf($_FILES["archivoSubido__seguimientos"]['type'],$_FILES["archivoSubido__seguimientos"]['size'],$_FILES["archivoSubido__seguimientos"]['tmp_name'],$_FILES["archivoSubido__seguimientos"]['name'],$direccion1,$nombre__archivo);

				$inserta=$objeto->getInsertaNormal('poa_seguimiento_recomendado_tecnico', array("`idInformacionEnviada`, ","`trimestre`, ","`idOrganismo`, ","`numeroConvenio`, ","`administradorConvenio`, ","`documentoDesignacion`, ","`meta1`, ","`meta2`, ","`meta3`, ","`meta4`, ","`meta5`, ","`meta6`, ","`meta7`, ","`meta8`, ","`resultado1`, ","`resultado2`, ","`resultado3`, ","`resultado4`, ","`resultado5`, ","`resultado6`, ","`resultado7`, ","`resultado8`, ","`porcentaje1`, ","`porcentaje2`, ","`porcentaje3`, ","`porcentaje4`, ","`porcentaje5`, ","`porcentaje6`, ","`porcentaje7`, ","`porcentaje8`, ","`indicador`, ","`oro`, ","`plata`, ","`bronce`, ","`presenta1`, ","`presenta2`, ","`presenta3`, ","`presenta4`, ","`presenta5`, ","`presenta6`, ","`presenta7`, ","`presenta8`, ","`observacion`, ","`recomendacion`, ","`archivo`, ","`idUsuario`, ","`fecha`, ","`hora`, ","`tipo`, ","`perioIngreso`"),array("'$periodo', ","'$idOrganismo', ","'$numeroConvenio__paid', ","'$administradorConvenio__paid', ","'$documentoAsignacionConvenio__paid', ","'$eventos__eje__alto', ","'$eventos__eje__alto__parti', ","'$implementacion__de__eje__alto__meta', ","'$beneficiarios__de__eje__alto__meta', ","'$preparacion__de__eje__alto__meta', ","' ', ","' ', ","'$metaProgramadaArray', ","'$meta__eje__alto', ","'$meta__eje__alto__parti', ","'$implementacion__de__eje__alto__resultado', ","'$beneficiarios__de__eje__alto__resultado', ","'$preparacion__de__eje__alto__resultado', ","' ', ","' ', ","'$metaResultadoArray', ","'$porcentaje__c__eje__alto', ","'$porcentaje__c__eje__alto__parti', ","'$porcentaje__c__implementacion__de__e__alto', ","'$porcentaje__c__beneficiarios__de__e__alto', ","'$porcentaje__c__preparacion__de__e__alto', ","' ', ","' ', ","'$porcentajeCumplimientoArray', ","'$indicadorArray', ","'$hombres__alto', ","'$mujeres__alto', ","'$personas__con__discapacidad__alto', ","'$reporte__tabla__alto', ","'$listados__tabla__alto', ","'$informe__tabla__alto', ","'$registro__tabla__alto', ","'$asistentes__tabla__alto', ","' ', ","' ', ","' ', ","'$observaciones__alto__seguis', ","'$recomendaciones__alto__seguis', ","'$nombre__archivo', ","'$idUSeguimientos', ","'$fecha_actual', ","'$hora_actual', ","'$rotulo__recomendado', ","'$aniosPeriodos__ingesos'"));


				$conexionRecuperada= new conexion();
	 			$conexionEstablecida=$conexionRecuperada->cConexion();		
	 			
	 			$query="UPDATE poa_trimestrales SET financiero='T',financieroR='$super__var' WHERE idOrganismo='$idOrganismo' AND tipoTrimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos';";
				$resultado= $conexionEstablecida->exec($query);

			}

			$inserta2=$objeto->getInsertaNormal('poa_seguimiento_recomienda_tecnicos', array("`idRecomendacionFuncionario`, ","`idFuncionario`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`trimestre`, ","`observacionesTecnicas`, ",'`tipo`, ','`fisicamente`, ', '`perioIngreso`'),array("'$super__var', ","'$idOrganismo', ","'$fecha_actual', ","'$hora_actual', ","'$periodo', ","'$observaciones__alto__seguis', ",'"Recomendado", ',"'$fisicamenteE', ","'$aniosPeriodos__ingesos'"));
			

			$mensaje=1;
			$jason['mensaje']=$mensaje;		

		break;

		case  "recomienda__recomendado__seguimientos_ccontratacion_publica":

			$conexionRecuperada= new conexion();
	 		$conexionEstablecida=$conexionRecuperada->cConexion();	


	 		if ($idRol==2) {
	 				
				$direccion1=VARIABLE__BACKEND."seguimiento/informes__contratacion/";

				$documento=$objeto->getEnviarPdf($_FILES["documentos__tecnicos_actividad1"]['type'],$_FILES["documentos__tecnicos_actividad1"]['size'],$_FILES["documentos__tecnicos_actividad1"]['tmp_name'],$_FILES["documentos__tecnicos_actividad1"]['name'],$direccion1,$nombreDocumentoactividad1);

				$documento1=$objeto->getEnviarPdf($_FILES["documentos__tecnicos_Contratacion"]['type'],$_FILES["documentos__tecnicos_Contratacion"]['size'],$_FILES["documentos__tecnicos_Contratacion"]['tmp_name'],$_FILES["documentos__tecnicos_Contratacion"]['name'],$direccion1,$nombreDocumentoContratacion);

	 			 $query="UPDATE poa_trimestrales SET financieroR='$selects__superiores' WHERE idOrganismo='$organismoOculto__modal' AND tipoTrimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos';";

	 			 $inserta2=$objeto->getInsertaNormal('poa_seguimiento_recomienda_tecnicos', array("`idRecomendacionFuncionario`, ","`idFuncionario`, ","`idOrganismo`, ","`fecha`, ","`hora`, ","`trimestre`, ","`observacionesTecnicas`, ",'`tipo`, ','`fisicamente`, ','`perioIngreso`'),array("'$selects__superiores', ","'$organismoOculto__modal', ","'$fecha_actual', ","'$hora_actual', ","'$periodo', ","'$observacionesReasignaciones', ",'"Recomendado", ',"'$fisicamenteE', ","'$aniosPeriodos__ingesos'"));


	 		}else{

				$direccion1=VARIABLE__BACKEND."seguimiento/informes__contratacion/";

				$documento=$objeto->getEnviarPdf($_FILES["documentos__tecnicos_actividad1"]['type'],$_FILES["documentos__tecnicos_actividad1"]['size'],$_FILES["documentos__tecnicos_actividad1"]['tmp_name'],$_FILES["documentos__tecnicos_actividad1"]['name'],$direccion1,$nombreDocumentoactividad1);

				$documento1=$objeto->getEnviarPdf($_FILES["documentos__tecnicos_Contratacion"]['type'],$_FILES["documentos__tecnicos_Contratacion"]['size'],$_FILES["documentos__tecnicos_Contratacion"]['tmp_name'],$_FILES["documentos__tecnicos_Contratacion"]['name'],$direccion1,$nombreDocumentoContratacion);
				
		 		$director__seguimientos=$objeto->getObtenerInformacionGeneral("SELECT a.id_usuario FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='20' AND a.estadoUsuario='A' ORDER BY a.id_usuario DESC LIMIT 1");
				
		 		$idDirector__Seguis=$director__seguimientos[0][id_usuario];


				 $query="UPDATE poa_trimestrales SET financieroR='0' WHERE idOrganismo='$organismoOculto__modal' AND tipoTrimestre='$periodo' AND perioIngreso='$aniosPeriodos__ingesos';";
				 

				$insercion="INSERT INTO `ezonshar_mdepsaddb`.`poa_seguimiento_recomienda_tecnicos` (`idFuncionario`, `idOrganismo`, `fecha`, `hora`, `trimestre`, `observacionesTecnicas`, `tipo`, `fisicamente`, `perioIngreso`) VALUES ( '$idDirector__Seguis', '$organismoOculto__modal', '$fecha_actual', '$hora_actual', '$periodo', '$observacionesReasignaciones', 'Recomendado', '$fisicamenteE', '$aniosPeriodos__ingesos');";

				$resultado1= $conexionEstablecida->exec($insercion);

	 		}
	 			
	 		
			$resultado= $conexionEstablecida->exec($query);


			$mensaje=1;
			$jason['mensaje']=$mensaje;		
	 		

		break;




		case  "guardar__archivos__transferencia":

			

			$conexionRecuperada= new conexion();
	 		$conexionEstablecida=$conexionRecuperada->cConexion();	

			if($mes == "Enero" || $mes == "Julio"){

				$nombre__archivo1=$nombreArchivo."__".$mes."__".$anioa.".csv";
				
   
				$direccion1=VARIABLE__BACKEND."seguimiento/documentos_transferencia/";
   
				$documento=$objeto->getEnviarEXCELCSV($_FILES["nombreDocumentoactividad1"]['type'],$_FILES["nombreDocumentoactividad1"]['size'],$_FILES["nombreDocumentoactividad1"]['tmp_name'],$_FILES["nombreDocumentoactividad1"]['name'],$direccion1,$nombre__archivo1);
   

				
			}else{
				$nombre__archivo1=$nombreArchivo."__".$mes."__".$anioa.".csv";

   
				$direccion1=VARIABLE__BACKEND."seguimiento/documentos_transferencia/";
   
				$documento=$objeto->getEnviarEXCELCSV($_FILES["nombreDocumentoactividad1"]['type'],$_FILES["nombreDocumentoactividad1"]['size'],$_FILES["nombreDocumentoactividad1"]['tmp_name'],$_FILES["nombreDocumentoactividad1"]['name'],$direccion1,$nombre__archivo1);

				unlink($direccion1.$nombreArchivo."__".$mesAnterior."__".$anioa.".csv");
			}



			// $direccion1="../../documentos/seguimiento/documentos_transferencia/";

			// $documento=$objeto->getEnviarPdf($_FILES["documentos__tecnicos_actividad1"]['type'],$_FILES["documentos__tecnicos_actividad1"]['size'],$_FILES["documentos__tecnicos_actividad1"]['tmp_name'],$_FILES["informe__recomendado"]['name'],$direccion1,$nombreDocumentoactividad1);

			// $documento1=$objeto->getEnviarPdf($_FILES["documentos__tecnicos_Contratacion"]['type'],$_FILES["documentos__tecnicos_Contratacion"]['size'],$_FILES["documentos__tecnicos_Contratacion"]['tmp_name'],$_FILES["informe__recomendado"]['name'],$direccion1,$nombreDocumentoContratacion);

	 			

			$mensaje=1;
			$jason['mensaje']=$mensaje;		
	 		

		break;

		case  "insertar__archivos__transferencia":

			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();	

			$nombre__archivo1=$nombreArchivo."__".$mes."__".$anioa.".csv";

			$direccion1=VARIABLE__BACKEND."seguimiento/documentos_transferencia/". $nombre__archivo1;

	
			if($nombreArchivo == "Bancos"){

					$sql="DELETE FROM poa_seguimiento_bancos";
							
					$resultado= $conexionEstablecida->exec($sql);

				 // Open uploaded CSV file with read-only mode
					$csvFile = fopen($direccion1, 'r');

					// Skip the first line
					fgetcsv($csvFile);
			
					// Parse data from CSV file line by line        
					while (($getData = fgetcsv($csvFile, 10000, ";")) !== FALSE)
					{

						// Get row data
						$nit = $getData[19];
						$nomBeneficiario = $getData[20];  
						$cur = $getData[9]; 
						$entidad = $getData[5];
						$entidad1=$getData[6];
						$entidad2=$getData[7];   
						$cuentaMonetariaDestino = $getData[13];   
						 
						$nombreEntidadBancaria = $getData[27];   
						$fechaConfirmacion = $getData[26];   
					
						if(strlen($nit) == 12){
							$nit = "0".$nit;
						}
			
						$insercion="INSERT INTO `ezonshar_mdepsaddb`.`poa_seguimiento_bancos` ( `nit`, `nomBeneficiario`, `cur`, `entidad`, `cuentaMonetariaDestino`, `nombreEntidadBancaria`, `fechaConfirmacion`) VALUES ( '$nit', '$nomBeneficiario', $cur, CONCAT ( $entidad,'-', IF($entidad1<10, CONCAT ('000', $entidad1),$entidad1), '-',CONCAT ('000', $entidad2 )), '$cuentaMonetariaDestino', '$nombreEntidadBancaria', STR_TO_DATE(REPLACE('$fechaConfirmacion','/',' '), '%d %m %Y')); ";

						
						$resultado1= $conexionEstablecida->exec($insercion);

						}
						
					
			
					// Close opened CSV file
					fclose($csvFile);

			
				
			}else{
				$sql="DELETE FROM poa_seguimiento_transferencias";
							
					$resultado= $conexionEstablecida->exec($sql);

				$csvFile = fopen($direccion1, 'r');

					// Skip the first line
					fgetcsv($csvFile);
			
					// Parse data from CSV file line by line        
					while (($getData = fgetcsv($csvFile, 10000, ";")) !== FALSE)
					{
						// Get row data
						$nit = $getData[8];
						$cur = $getData[3]; 
						$entidad = $getData[1];   
						$nombreEntidad = $getData[2];   
						$nomBeneficiario = $getData[20];   
						$descripcion = $getData[9];   
						$monto = $getData[13];   
						$fechaPago = $getData[19];   
						$anio = $getData[0]; 
						$estado = $getData[10]; 
						$monto =str_replace(",", ".", "$monto");
					
						if(strlen($nit) == 12){
							$nit = "0".$nit;
						}
			
						$insercion="INSERT INTO `poa_seguimiento_transferencias` (`nit`, `cur`, `entidad`, `nombreEntidad`, `estado`, `nomBeneficiario`, `descripcion`, `monto`, `fechaPago`, `anio`) VALUES ('$nit', $cur, '$entidad', '$nombreEntidad', '$estado', '$nomBeneficiario', '$descripcion', $monto, STR_TO_DATE(REPLACE('$fechaPago','/',' '), '%d %m %Y'), $anio);";

						
						$resultado1= $conexionEstablecida->exec($insercion);

						}
						
					
			
					// Close opened CSV file
					fclose($csvFile);
				
			}

			$mensaje=1;
			$jason['mensaje']=$mensaje;	

		break;



		//******************************* Guardado info seleccionable infraestructura ********************************//


		case  "seguimiento__infraestructura_reporte":


			$arrayInformacion = json_decode($prametros);
			
			$direccion=VARIABLE__BACKEND."seguimiento/indicadoresDocumento/";

			$inserta=$objeto->getInsertaNormal('poa_seguimiento_reporte_infraestructura', array("`id_reporte_infraestructura`, ","`detalle`, ","`idOrganismo`, ","`idMantenimiento`, ","`fecha`, ","`perioIngreso`"),array("'$arrayInformacion[0]', ","'$arrayInformacion[1]', ","'$arrayInformacion[2]', ","'$fecha_actual', ","'$aniosPeriodos__ingesos'"));

			$mensaje=1;
			$jason['mensaje']=$mensaje;

		break;


		//******************************* Guardado fechas plazos ********************************//


		case  "guarda__seguimientos__plazos":

			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();

			$arrayD = json_decode($array);

			if ($trimestre=="primerTrimestre") {
				$columnaFecha="fechaTrimestre1";
				$columnaEstado="estadoTrimestre1";
			}else if($trimestre=="segundoTrimestre"){
				$columnaFecha="fechaTrimestre2";
				$columnaEstado="estadoTrimestre2";		
			}else if($trimestre=="tercerTrimestre"){
				$columnaFecha="fechaTrimestre3";
				$columnaEstado="estadoTrimestre3";		
			}else if($trimestre=="cuartoTrimestre"){
				$columnaFecha="fechaTrimestre4";
				$columnaEstado="estadoTrimestre4";		
			}


			foreach ($arrayD as $clave => $valor) {

				
				$select_ifExist=$objeto->getObtenerInformacionGeneral("SELECT idPlazos__seguimientos FROM poa_seguimiento_plazos WHERE idOrganismo = '$valor' AND perioIngreso='$aniosPeriodos__ingesos';");
				
				if (!empty($select_ifExist[0][idPlazos__seguimientos])) {
					
					$query="UPDATE `poa_seguimiento_plazos` SET  `$columnaFecha` = '$fecha' , `$columnaEstado` = '$estado', `fecha`='$fecha_actual' WHERE idOrganismo = '$valor' AND perioIngreso='$aniosPeriodos__ingesos'  ;";
					
					$resultado= $conexionEstablecida->exec($query);
					

				}else{
					$query="INSERT INTO `poa_seguimiento_plazos` ( `$columnaFecha`, `$columnaEstado`, `fecha`, `idOrganismo`, `perioIngreso` ) VALUES ('$fecha','$estado','$fecha_actual','$valor','$aniosPeriodos__ingesos' ) ;";

					$resultado= $conexionEstablecida->exec($query);
					
				}

				
				
			}


			$mensaje=1;
			$jason['mensaje']=$mensaje;		
	 		

		break;

		//******************************* Guardado fechas plazos ********************************//


		case  "guarda__seguimientos__plazos__personal":

			$conexionRecuperada= new conexion();
			$conexionEstablecida=$conexionRecuperada->cConexion();

			if ($trimestre=="primerTrimestre") {
				$columnaFecha="fechaTrimestre1";
				$columnaEstado="estadoTrimestre1";
				$columnaDocumento="documentoTrimestre1";
			}else if($trimestre=="segundoTrimestre"){
				$columnaFecha="fechaTrimestre2";
				$columnaEstado="estadoTrimestre2";	
				$columnaDocumento="documentoTrimestre2";	
			}else if($trimestre=="tercerTrimestre"){
				$columnaFecha="fechaTrimestre3";
				$columnaEstado="estadoTrimestre3";	
				$columnaDocumento="documentoTrimestre3";	
			}else if($trimestre=="cuartoTrimestre"){
				$columnaFecha="fechaTrimestre4";
				$columnaEstado="estadoTrimestre4";	
				$columnaDocumento="documentoTrimestre4";	
			}

			$nombre__archivo1=$tipoDocumento."__".$idOrganismo."__".$trimestre."__".$aniosPeriodos__ingesos.".pdf";
				
   
			$direccion1=VARIABLE__BACKEND."seguimiento/documentos_plazos/";

			$documento=$objeto->getEnviarPdf($_FILES["nombreDocumentoactividad1"]['type'],$_FILES["nombreDocumentoactividad1"]['size'],$_FILES["nombreDocumentoactividad1"]['tmp_name'],$_FILES["nombreDocumentoactividad1"]['name'],$direccion1,$nombre__archivo1);
			
			$select_ifExist=$objeto->getObtenerInformacionGeneral("SELECT idPlazos__seguimientos, $columnaDocumento FROM poa_seguimiento_plazos WHERE idOrganismo = '$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos';");
			
			if (!empty($select_ifExist[0][idPlazos__seguimientos])) {
				
				unlink($direccion1.$select_ifExist[0][$columnaDocumento]);
				$query="UPDATE `poa_seguimiento_plazos` SET  `$columnaFecha` = '$fecha' , `$columnaEstado` = '$tipoDocumento', `$columnaDocumento` = '$nombre__archivo1', `fecha`='$fecha_actual' WHERE idOrganismo = '$idOrganismo' AND perioIngreso='$aniosPeriodos__ingesos'  ;";
				
				$resultado= $conexionEstablecida->exec($query);
				

			}else{
				$query="INSERT INTO `poa_seguimiento_plazos` ( `$columnaFecha`, `$columnaEstado`, `fecha`, `idOrganismo`, `perioIngreso`, `$columnaDocumento` ) VALUES ('$fecha','$tipoDocumento','$fecha_actual','$idOrganismo','$aniosPeriodos__ingesos','$nombre__archivo1' ) ;";

				$resultado= $conexionEstablecida->exec($query);
				
			}

			$mensaje=1;
			$jason['mensaje']=$mensaje;		
	 		

		break;

  } 
 
 
  echo json_encode($jason);