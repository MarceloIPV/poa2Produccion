<?php

/*===================================================
=            Llamando Funciòn php mailer            =
===================================================*/

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require '../../PHPMailer/src/Exception.php';
require '../../PHPMailer/src/PHPMailer.php';
require '../../PHPMailer/src/SMTP.php';
			
/*=====  End of Llamando Funciòn php mailer  ======*/


class usuarioAcciones{

	private static $baseInsercion="`ezonshar_mdepsaddb`";

	public function insertSingleRow($tabla,$campos,$task) {

		$conexionRecuperada= new Conexion();
	 	$conexionEstablecida=$conexionRecuperada->cConexion();

	 	try{

			$sql = "INSERT INTO $tabla (";
			$contador1=0;

		    foreach ($campos as $key => $valor) {

		    	$contador1++;

		    	if ($contador1==count($campos)) {
		       		$sql.=" `".$valor."`";
		    	}else{
		       		$sql.=" `".$valor."`, ";
		    	}

		    }

		    $sql.=") VALUES (";

		    $contador2=0;

		    foreach ($campos as $key => $valor) {

		    	$contador2++;

		    	if ($contador2==count($campos)) {
		       		$sql.=" :".$valor."";
		    	}else{
		       		$sql.=" :".$valor.", ";
		    	}
		        	
		    }

		    $sql.=");";

		    $resultado = $conexionEstablecida->prepare($sql);

		    return $resultado->execute($task);

		}catch(PDOException $e){

		    echo "ERROR: " . $e->getMessage();

		}

    }
	
	public function getInserta($parametro1,$parametro2,$parametro3,$parametro4,$parametro5){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$sql="INSERT INTO ".self::$baseInsercion.".".$parametro1."(";

 		for ($i=0; $i < count($parametro2); $i++) { 
 			
 			$sql.=$parametro2[$i];

 		}

 		$sql.=") VALUES (NULL,";

 		for ($i=0; $i < count($parametro3); $i++) { 

 			$sql.=$parametro3[$i];

 		}

 		$sql.=");";

 		$query = $conexionEstablecida->prepare($sql);

 		for ($z=0; $z < count($parametro4); $z++) { 

			$query->bindParam($parametro5[$z],$parametro4[$z],PDO::PARAM_STR);

 		}

 		$resultado=$query->execute();

 		return $resultado;

	}


	public function get__obtengoInformacion__modiIngresadas(){


		$aniosPeriodos__ingesos=$_SESSION["selectorAniosA"];
		$idOrganismoSession=$_SESSION["idOrganismoSession"];

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$query = $conexionEstablecida->prepare("SELECT estado FROM poa_modificaciones_envio_inicial WHERE idOrganismo='$idOrganismoSession' AND periodoIngreso='$aniosPeriodos__ingesos';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}	


	public function get__idOrganismo__sesiones(){

		$idOrganismoSession=$_SESSION["idOrganismoSession"];

		return $idOrganismoSession;

	}

	public function get__obtener__Selector__anios(){

		$selectorAnios=$_SESSION["selectorAniosA"];

		return $selectorAnios;

	}	

	public function getEliminarNormal($parametro1,$parametro2){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$sql="DELETE FROM $parametro1 WHERE idInterventor='$parametro2';";
		$resultado= $conexionEstablecida->exec($sql);

 		return $resultado;

	}


	public function getInsertaNormal($parametro1,$parametro2,$parametro3){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$sql="INSERT INTO ".self::$baseInsercion.".".$parametro1."(";

 		for ($i=0; $i < count($parametro2); $i++) { 
 			
 			$sql.=$parametro2[$i];

 		}

 		$sql.=") VALUES (NULL,";

 		for ($i=0; $i < count($parametro3); $i++) { 

 			$sql.=$parametro3[$i];

 		}

 		$sql.=");";

		$resultado= $conexionEstablecida->exec($sql);

 		return $resultado;

	}

	public function getMaximoFuncion($parametro1,$parametro2){


		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

		$query="SELECT MAX($parametro1) AS maximo FROM $parametro2;";
		$resultado = $conexionEstablecida->query($query);

		while($registro = $resultado->fetch()) {

			$idMaximo=$registro['maximo'];

		}

		return $idMaximo;

	}

	public function getInsertaMaximos($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$sql="INSERT INTO ".self::$baseInsercion.".".$parametro1."(";

 		for ($i=0; $i < count($parametro2); $i++) { 
 			
 			$sql.=$parametro2[$i];

 		}

 		$sql.=") VALUES (NULL,";

 		for ($i=0; $i < count($parametro3); $i++) { 

 			$sql.=$parametro3[$i];

 		}

 		$sql.=");";


		$query="SELECT MAX($parametro7) AS maximo FROM $parametro6;";
		$resultado = $conexionEstablecida->query($query);

		while($registro = $resultado->fetch()) {

			$idMaximo=$registro['maximo'];

		}


 		$query = $conexionEstablecida->prepare($sql);

 		for ($z=0; $z < count($parametro4); $z++) { 

 			if ($parametro4[$z]=="id") {
 				
 				$query->bindParam($parametro5[$z],$idMaximo,PDO::PARAM_STR);

 			}else{

 				$query->bindParam($parametro5[$z],$parametro4[$z],PDO::PARAM_STR);

 			}

 		}

 		$resultadoTotal=$query->execute();

 		return $resultadoTotal;

	}



	public function getActualiza($parametro1,$parametro2,$parametro3,$parametro4){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="UPDATE $parametro1 SET ";

		for ($i=0; $i < count($parametro2); $i++) { 

			$query.=$parametro2[$i];

		}

		$query.=" WHERE $parametro3=$parametro4;";

		$resultado= $conexionEstablecida->exec($query);

		return $resultado;



	}

	public function getActualiza__confirmado($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="UPDATE $parametro1 SET ";

		for ($i=0; $i < count($parametro2); $i++) { 

			$query.=$parametro2[$i];

		}

		$query.=" WHERE $parametro3='$parametro4' AND $parametro5='$parametro6';";

		$resultado= $conexionEstablecida->exec($query);

		return $resultado;



	}

	public function getActualiza__confirmado__2($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7,$parametro8){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="UPDATE $parametro1 SET ";

		for ($i=0; $i < count($parametro2); $i++) { 

			$query.=$parametro2[$i];

		}

		$query.=" WHERE $parametro3='$parametro4' AND $parametro5='$parametro6' AND $parametro7='$parametro8';";

		$resultado= $conexionEstablecida->exec($query);

		return $resultado;



	}

	public function getElimina($parametro1,$parametro2,$parametro3){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="DELETE FROM $parametro1 WHERE $parametro2='$parametro3'";
		$resultado= $conexionEstablecida->exec($query);

		return $query;


	}

	public function getElimina__indices($parametro1,$parametro2,$parametro3,$parametro4,$parametro5){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="DELETE FROM $parametro1 WHERE $parametro2='$parametro3' AND $parametro4='$parametro5'";
		$resultado= $conexionEstablecida->exec($query);

		return $query;


	}

	public function getElimina__indices__dos($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6,$parametro7){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="DELETE FROM $parametro1 WHERE $parametro2='$parametro3' AND $parametro4='$parametro5' AND $parametro6='$parametro7';";
		$resultado= $conexionEstablecida->exec($query);

		return $query;


	}


	public function getBuscador($parametro1,$parametro2,$parametro3){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="SELECT $parametro2 AS buscado FROM $parametro1 WHERE $parametro2='$parametro3' LIMIT 1;";
		$resultado = $conexionEstablecida->query($query);

		while($registro = $resultado->fetch()) {

			$buscado=$registro['buscado'];

		}

		if (!empty($buscado)) {
			return "no";
		}else{
			return "si";
		}

	}


	public function getBuscadorInicial($parametro1,$parametro2,$parametro3,$parametro4){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="SELECT $parametro1 AS buscado FROM $parametro2 WHERE $parametro3='$parametro4' LIMIT 1;";
		$resultado = $conexionEstablecida->query($query);

		while($registro = $resultado->fetch()) {

			$buscado=$registro['buscado'];

		}

		return $buscado;

	}

	public function getBuscadorInicial2($parametro1,$parametro2,$parametro3,$parametro4,$parametro5,$parametro6){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="SELECT $parametro1 AS buscado FROM $parametro2 WHERE $parametro3='$parametro4' AND $parametro5='$parametro6' LIMIT 1;";
		$resultado = $conexionEstablecida->query($query);

		while($registro = $resultado->fetch()) {

			$buscado=$registro['buscado'];

		}

		return $query;

	}


	public function getBuscadorTotales($parametro1,$parametro2){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();


		$query="SELECT $parametro1 FROM $parametro2";
		$resultado = $conexionEstablecida->query($query);

		return $resultado;


	}

	public function getDatatablets($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

		$query=$parametro1;
		$resultado = $conexionEstablecida->query($query);

		if (!$resultado) {

			echo "error";
			
		}else{ 

			$arreglo=array();
			while($data=$resultado->fetch()){
				$arreglo["data"][]=$data;
			}

		}

		return $arreglo;


	}

	public function getDatatablets2($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

		$query=$parametro1;
		$resultado = $conexionEstablecida->query($query);

		if (!$resultado) {

			echo "error";
			
		}else{ 

			$arreglo=array();
			while($data=$resultado->fetch()){
				$arreglo["data"][]=$data;
			}

		}

		return $arreglo;


	}


	public function getEnviarPdf($tipo,$tamanio,$archivotmp,$archivotmpNombre,$parametro2,$parametro3){

		if($tipo=="application/pdf"){

			if(rename($archivotmp,$parametro2.$parametro3)){

				return "si";

			}else{

				return "nopdf";

			}

		}else{

			return "no";

		}

	}

	public function getEnviarCorreoDosParametros($parametro1,$parametro2,$parametro3){


		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {

			//Server settings
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'ministerioDeporte2021@gmail.com';                     // SMTP username
			$mail->Password   = 'cflabycnriqsxxnk';                            // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

			$mail->CharSet = 'UTF-8';
			//Recipients
			$mail->setFrom($parametro3, 'POA');

			for ($i=0; $i < count($parametro1); $i++) { 
				
				$mail->addAddress($parametro1[$i]); 

			}

			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = 'Ministerio del deporte';
			$mail->Body = $parametro2; 

			return $mail->send();

		} catch (Exception $e) {
			
			return "no";

		}

	}



	public function getEnviarCorreo__atachmen($parametro1,$parametro2,$parametro3,$parametro4){


		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {

			//Server settings
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'ministerioDeporte2021@gmail.com';                     // SMTP username
			$mail->Password   = 'cflabycnriqsxxnk';                            // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

			$mail->CharSet = 'UTF-8';
			//Recipients
			$mail->setFrom('ministerioDelDeporte@deporte.gob.ec', 'Ministerio del deporte');

			for ($i=0; $i < count($parametro1); $i++) { 
				
				$mail->addAddress($parametro1[$i]); 

			}

			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = 'Ministerio del deporte';
			$mail->Body = $parametro2; 

			$mail->addAttachment($parametro3); 

			$mail->addAttachment($parametro4);

			return $mail->send();

		} catch (Exception $e) {
			
			return "no";

		}

	}


	public function getEnviarCorreo($parametro1,$parametro2){


		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {

			//Server settings
			$mail->isSMTP();                                            // Send using SMTP
			$mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
			$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
			$mail->Username   = 'ministerioDeporte2021@gmail.com';                     // SMTP usernamed
			$mail->Password   = 'cflabycnriqsxxnk';                            // SMTP password
			$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
			$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above

			$mail->CharSet = 'UTF-8';
			//Recipients
			$mail->setFrom('ministerioDelDeporte@deporte.gob.ec', 'Ministerio del deporte');

			for ($i=0; $i < count($parametro1); $i++) { 
				
				$mail->addAddress($parametro1[$i]); 

			}

			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = 'Ministerio del deporte';
			$mail->Body = $parametro2; 

			return $mail->send();

		} catch (Exception $e) {
			
			return "no";

		}

	}

	public function getObtenerInformacionGeneral($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare($parametro1);
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}	


	public function getObtenerModificaciones__origen($parametro1,$parametro2){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare($parametro1);
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];
			$totalBase=$valor["total"];

		}

		$eneroBase= floatval($eneroBase) - floatval($parametro2[0]);
		$febreroBase= floatval($febreroBase) - floatval($parametro2[1]);
		$marzoBase= floatval($marzoBase) - floatval($parametro2[2]);
		$abrilBase= floatval($abrilBase) - floatval($parametro2[3]);
		$mayoBase= floatval($mayoBase) - floatval($parametro2[4]);
		$junioBase= floatval($junioBase) - floatval($parametro2[5]);
		$julioBase= floatval($julioBase) - floatval($parametro2[6]);
		$agostoBase= floatval($agostoBase) - floatval($parametro2[7]);
		$septiembreBase= floatval($septiembreBase) - floatval($parametro2[8]);
		$octubreBase= floatval($octubreBase) - floatval($parametro2[9]);
		$noviembreBase= floatval($noviembreBase) - floatval($parametro2[10]);
		$diciembreBase= floatval($diciembreBase) - floatval($parametro2[11]);
		$totalBase= floatval($totalBase) - floatval($parametro2[12]);

		array_push($data1, $eneroBase);
		array_push($data1, $febreroBase);
		array_push($data1, $marzoBase);
		array_push($data1, $abrilBase);
		array_push($data1, $mayoBase);
		array_push($data1, $junioBase);
		array_push($data1, $julioBase);
		array_push($data1, $agostoBase);
		array_push($data1, $septiembreBase);
		array_push($data1, $octubreBase);
		array_push($data1, $noviembreBase);
		array_push($data1, $diciembreBase);
		array_push($data1, $totalBase);


		return $data1;

	}	

	public function getObtenerModificaciones__destino($parametro1,$parametro2){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare($parametro1);
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];
			$totalBase=$valor["total"];

		}

		$eneroBase= floatval($eneroBase) + floatval($parametro2[0]);
		$febreroBase= floatval($febreroBase) + floatval($parametro2[1]);
		$marzoBase= floatval($marzoBase) + floatval($parametro2[2]);
		$abrilBase= floatval($abrilBase) + floatval($parametro2[3]);
		$mayoBase= floatval($mayoBase) + floatval($parametro2[4]);
		$junioBase= floatval($junioBase) + floatval($parametro2[5]);
		$julioBase= floatval($julioBase) + floatval($parametro2[6]);
		$agostoBase= floatval($agostoBase) + floatval($parametro2[7]);
		$septiembreBase= floatval($septiembreBase) + floatval($parametro2[8]);
		$octubreBase= floatval($octubreBase) + floatval($parametro2[9]);
		$noviembreBase= floatval($noviembreBase) + floatval($parametro2[10]);
		$diciembreBase= floatval($diciembreBase) + floatval($parametro2[11]);
		$totalBase= floatval($totalBase) + floatval($parametro2[12]);

		array_push($data1, $eneroBase);
		array_push($data1, $febreroBase);
		array_push($data1, $marzoBase);
		array_push($data1, $abrilBase);
		array_push($data1, $mayoBase);
		array_push($data1, $junioBase);
		array_push($data1, $julioBase);
		array_push($data1, $agostoBase);
		array_push($data1, $septiembreBase);
		array_push($data1, $octubreBase);
		array_push($data1, $noviembreBase);
		array_push($data1, $diciembreBase);
		array_push($data1, $totalBase);


		return $data1;

	}	

	public function actualizarProgramacion__financiera__modificaciones__origen($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_programacion_financiera WHERE idProgramacionFinanciera='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) + floatval($array[0]);
		$febreroResul=floatval($febreroBase) + floatval($array[1]);
		$marzoResul=floatval($marzoBase) + floatval($array[2]);
		$abrilResul=floatval($abrilBase) + floatval($array[3]);
		$mayoResul=floatval($mayoBase) + floatval($array[4]);
		$junioResul=floatval($junioBase) + floatval($array[5]);
		$julioResul=floatval($julioBase) + floatval($array[6]);
		$agostoResul=floatval($agostoBase) + floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) + floatval($array[8]);
		$octubreResul=floatval($octubreBase) + floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) + floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) + floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_programacion_financiera SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',totalTotales='$resulResul',totalSumaItem='$resulResul' WHERE idProgramacionFinanciera='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__financiera__modificaciones__destino($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_programacion_financiera WHERE idProgramacionFinanciera='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) - floatval($array[0]);
		$febreroResul=floatval($febreroBase) - floatval($array[1]);
		$marzoResul=floatval($marzoBase) - floatval($array[2]);
		$abrilResul=floatval($abrilBase) - floatval($array[3]);
		$mayoResul=floatval($mayoBase) - floatval($array[4]);
		$junioResul=floatval($junioBase) - floatval($array[5]);
		$julioResul=floatval($julioBase) - floatval($array[6]);
		$agostoResul=floatval($agostoBase) - floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) - floatval($array[8]);
		$octubreResul=floatval($octubreBase) - floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) - floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) - floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_programacion_financiera SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',totalTotales='$resulResul',totalSumaItem='$resulResul' WHERE idProgramacionFinanciera='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	


	public function actualizarProgramacion__matenimiento__modificaciones__origen($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_mantenimiento WHERE idProgramacionFinanciera='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) + floatval($array[0]);
		$febreroResul=floatval($febreroBase) + floatval($array[1]);
		$marzoResul=floatval($marzoBase) + floatval($array[2]);
		$abrilResul=floatval($abrilBase) + floatval($array[3]);
		$mayoResul=floatval($mayoBase) + floatval($array[4]);
		$junioResul=floatval($junioBase) + floatval($array[5]);
		$julioResul=floatval($julioBase) + floatval($array[6]);
		$agostoResul=floatval($agostoBase) + floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) + floatval($array[8]);
		$octubreResul=floatval($octubreBase) + floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) + floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) + floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_mantenimiento SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idProgramacionFinanciera='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__matenimiento__modificaciones__destino($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_mantenimiento WHERE idProgramacionFinanciera='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) - floatval($array[0]);
		$febreroResul=floatval($febreroBase) - floatval($array[1]);
		$marzoResul=floatval($marzoBase) - floatval($array[2]);
		$abrilResul=floatval($abrilBase) - floatval($array[3]);
		$mayoResul=floatval($mayoBase) - floatval($array[4]);
		$junioResul=floatval($junioBase) - floatval($array[5]);
		$julioResul=floatval($julioBase) - floatval($array[6]);
		$agostoResul=floatval($agostoBase) - floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) - floatval($array[8]);
		$octubreResul=floatval($octubreBase) - floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) - floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) - floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_mantenimiento SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idProgramacionFinanciera='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__actividades__deportivas__modificaciones__origen($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_actdeportivas WHERE idProgramacionFinanciera='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) + floatval($array[0]);
		$febreroResul=floatval($febreroBase) + floatval($array[1]);
		$marzoResul=floatval($marzoBase) + floatval($array[2]);
		$abrilResul=floatval($abrilBase) + floatval($array[3]);
		$mayoResul=floatval($mayoBase) + floatval($array[4]);
		$junioResul=floatval($junioBase) + floatval($array[5]);
		$julioResul=floatval($julioBase) + floatval($array[6]);
		$agostoResul=floatval($agostoBase) + floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) + floatval($array[8]);
		$octubreResul=floatval($octubreBase) + floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) + floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) + floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_actdeportivas SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idProgramacionFinanciera='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	


	public function actualizarProgramacion__actividades__deportivas__modificaciones__destino($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_actdeportivas WHERE idProgramacionFinanciera='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) - floatval($array[0]);
		$febreroResul=floatval($febreroBase) - floatval($array[1]);
		$marzoResul=floatval($marzoBase) - floatval($array[2]);
		$abrilResul=floatval($abrilBase) - floatval($array[3]);
		$mayoResul=floatval($mayoBase) - floatval($array[4]);
		$junioResul=floatval($junioBase) - floatval($array[5]);
		$julioResul=floatval($julioBase) - floatval($array[6]);
		$agostoResul=floatval($agostoBase) - floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) - floatval($array[8]);
		$octubreResul=floatval($octubreBase) - floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) - floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) - floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_actdeportivas SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idProgramacionFinanciera='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__actividades__deportivas__honorarios__origen($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_honorarios2022 WHERE idHonorarios='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) + floatval($array[0]);
		$febreroResul=floatval($febreroBase) + floatval($array[1]);
		$marzoResul=floatval($marzoBase) + floatval($array[2]);
		$abrilResul=floatval($abrilBase) + floatval($array[3]);
		$mayoResul=floatval($mayoBase) + floatval($array[4]);
		$junioResul=floatval($junioBase) + floatval($array[5]);
		$julioResul=floatval($julioBase) + floatval($array[6]);
		$agostoResul=floatval($agostoBase) + floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) + floatval($array[8]);
		$octubreResul=floatval($octubreBase) + floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) + floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) + floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_honorarios2022 SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idHonorarios='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__actividades__deportivas__honorarios__destino($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_honorarios2022 WHERE idHonorarios='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) - floatval($array[0]);
		$febreroResul=floatval($febreroBase) - floatval($array[1]);
		$marzoResul=floatval($marzoBase) - floatval($array[2]);
		$abrilResul=floatval($abrilBase) - floatval($array[3]);
		$mayoResul=floatval($mayoBase) - floatval($array[4]);
		$junioResul=floatval($junioBase) - floatval($array[5]);
		$julioResul=floatval($julioBase) - floatval($array[6]);
		$agostoResul=floatval($agostoBase) - floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) - floatval($array[8]);
		$octubreResul=floatval($octubreBase) - floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) - floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) - floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_honorarios2022 SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idHonorarios='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__actividades__deportivas__sueldos__origen($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_sueldossalarios2022 WHERE idSueldos='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) + floatval($array[0]);
		$febreroResul=floatval($febreroBase) + floatval($array[1]);
		$marzoResul=floatval($marzoBase) + floatval($array[2]);
		$abrilResul=floatval($abrilBase) + floatval($array[3]);
		$mayoResul=floatval($mayoBase) + floatval($array[4]);
		$junioResul=floatval($junioBase) + floatval($array[5]);
		$julioResul=floatval($julioBase) + floatval($array[6]);
		$agostoResul=floatval($agostoBase) + floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) + floatval($array[8]);
		$octubreResul=floatval($octubreBase) + floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) + floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) + floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_sueldossalarios2022 SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idSueldos='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function actualizarProgramacion__actividades__deportivas__sueldos__destino($idFinanciero,$array){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$data1=array();

 		$conexionEstablecida->exec("set names utf8");

 		$eneroResul=0;
 		$febreroResul=0;
 		$marzoResul=0;
 		$abrilResul=0;
 		$mayoResul=0;
 		$junioResul=0;
 		$julioResul=0;
 		$agostoResul=0;
 		$septiembreResul=0;
 		$octubreResul=0;
 		$noviembreResul=0;
 		$diciembreResul=0;
 		$resulResul=0;

 		$query = $conexionEstablecida->prepare("SELECT enero,febrero,marzo,abril,mayo,junio,julio,agosto,septiembre,octubre,noviembre,diciembre FROM poa_sueldossalarios2022 WHERE idSueldos='$idFinanciero';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		foreach ($resultado as $valor) {
			
			$eneroBase=$valor["enero"];
			$febreroBase=$valor["febrero"];
			$marzoBase=$valor["marzo"];
			$abrilBase=$valor["abril"];
			$mayoBase=$valor["mayo"];
			$junioBase=$valor["junio"];
			$julioBase=$valor["julio"];
			$agostoBase=$valor["agosto"];
			$septiembreBase=$valor["septiembre"];
			$octubreBase=$valor["octubre"];
			$noviembreBase=$valor["noviembre"];
			$diciembreBase=$valor["diciembre"];

		}

		$eneroResul=floatval($eneroBase) - floatval($array[0]);
		$febreroResul=floatval($febreroBase) - floatval($array[1]);
		$marzoResul=floatval($marzoBase) - floatval($array[2]);
		$abrilResul=floatval($abrilBase) - floatval($array[3]);
		$mayoResul=floatval($mayoBase) - floatval($array[4]);
		$junioResul=floatval($junioBase) - floatval($array[5]);
		$julioResul=floatval($julioBase) - floatval($array[6]);
		$agostoResul=floatval($agostoBase) - floatval($array[7]);
		$septiembreResul=floatval($septiembreBase) - floatval($array[8]);
		$octubreResul=floatval($octubreBase) - floatval($array[9]);
		$noviembreResul=floatval($noviembreBase) - floatval($array[10]);
		$diciembreResul=floatval($diciembreBase) - floatval($array[11]);

		$resulResul=floatval($eneroResul) + floatval($febreroResul) + floatval($marzoResul) + floatval($abrilResul) + floatval($mayoResul) + floatval($junioResul) + floatval($julioResul) + floatval($agostoResul) + floatval($septiembreResul) + floatval($octubreResul) + floatval($noviembreResul) + floatval($diciembreResul);

		$queryActualizas="UPDATE poa_sueldossalarios2022 SET enero='$eneroResul',febrero='$febreroResul', marzo='$marzoResul', abril='$abrilResul', mayo='$mayoResul', junio='$junioResul', julio='$julioResul', agosto='$agostoResul', septiembre='$septiembreResul', octubre='$octubreResul', noviembre='$noviembreResul', diciembre='$diciembreResul',total='$resulResul' WHERE idSueldos='$idFinanciero';";

		$resultadoActualizas= $conexionEstablecida->exec($queryActualizas);


		return $resultadoActualizas;

	}	

	public function mesesSumarS($parametro1,$parametro2){

		$suma=0;

		$suma=round(floatval($parametro1) + floatval($parametro2),2);

		return $suma;

	}



	public function restarSumas($parametro1,$parametro2){

		$suma=0;

		$suma=round(floatval($parametro1) - floatval($parametro2),2);

		$suma=abs($suma);

		return $suma;

	}

	public function mesesSumarSTotal($parametro1,$parametro2){

		$suma=0;

		$suma=round(floatval($parametro1) + floatval($parametro2),2) * 12;

		return $suma;

	}

	public function getInformacionCompletaOrganismoDeportivoConsu($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreResponsablePoa, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreResponsablePoa,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreDelOrganismoSegunAcuerdo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreDelOrganismoSegunAcuerdo,a.correo,a.correoResponsablePoa,d.idInversion,d.nombreInversion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreOrganismo,a.ruc,CONCAT_WS(' ',REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombre, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')) AS nobreCompleto FROM poa_organismo AS a LEFT JOIN poa_usuario AS b ON a.idUsuario=b.idUsuario LEFT JOIN poa_inversion_usuario AS c ON c.idOrganismo=a.idOrganismo LEFT JOIN poa_inversion AS d ON d.idInversion=c.idInversion WHERE a.idOrganismo='$parametro1' GROUP BY c.idOrganismo ORDER BY d.idInversion DESC LIMIT 1;");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}	


	public function getInformacionCompletaOrganismoDeportivoConsuDos($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.nombreResponsablePoa,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreDelOrganismoSegunAcuerdo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreDelOrganismoSegunAcuerdo,a.correo,a.correoResponsablePoa,(SELECT a2.idInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo ORDER BY a1.idInversionUsuario DESC LIMIT 1) AS idInversion,(SELECT a2.nombreInversion FROM poa_inversion_usuario AS a1 INNER JOIN poa_inversion AS a2 ON a1.idInversion=a2.idInversion WHERE a1.idOrganismo=a.idOrganismo ORDER BY a1.idInversionUsuario DESC LIMIT 1) AS nombreInversion,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.nombreOrganismo, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreOrganismo FROM poa_organismo AS a INNER JOIN poa_usuario AS b ON a.idUsuario=b.idUsuario WHERE a.idOrganismo='$parametro1' GROUP BY a.idOrganismo;");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}	

	public function getInformacion__modificaciones__enviadas__selector__infraestructura($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=a.actividadDestino WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.actividadDestino='2' AND a.identificadorPaginaReal='diferentes';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}


	public function getInformacion__modificaciones__enviadas__selector__administrativo($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=a.actividadDestino WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.actividadDestino='1' AND a.identificadorPaginaReal='diferentes';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}

	public function getInformacion__modificaciones__enviadas__selector__desarrollos__varios($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(f.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadOrigen,a.eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(g.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS actividadDestino,a.eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(e.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_programacion_financiera AS b ON b.idProgramacionFinanciera=a.idFinancierioOrigen INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=b.idItem INNER JOIN poa_item AS e ON e.idItem=c.idItem INNER JOIN poa_actividades AS f ON f.idActividades=b.idActividad INNER JOIN poa_actividades AS g ON g.idActividades=a.actividadDestino WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND (a.actividadDestino='3' OR a.actividadDestino='4' OR a.actividadDestino='5' OR a.actividadDestino='6' OR a.actividadDestino='7') AND a.identificadorPaginaReal='diferentes';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}

	public function getInformacion__modificaciones__enviadas__selector__desarrollos__honorarios($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_honorarios2022 AS c ON c.idHonorarios=a.eventosDestino WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.identificadorPaginaReal='honorarios';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}


	public function getInformacion__modificaciones__enviadas__selector__desarrollos__honorarios__items($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_honorarios2022 AS b ON a.idFinancierioOrigen=b.idHonorarios INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.identificadorPaginaReal='honorarios__item';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}

	public function getInformacion__modificaciones__enviadas__selector__desarrollos__sueldos__salarios($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(c.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.identificadorPaginaReal='sueldos';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}


	public function getInformacion__modificaciones__enviadas__selector__desarrollos__sueldos__salarios__items($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.cedula, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a.eventosDestino, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioDestino,a.eneroDestino,a.febreroDestino,a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.eneroDestino__sumando,a.febreroDestino__sumando,a.marzoDestino__sumando,a.abrilDestino__sumando,a.mayoDestino__sumando,a.junioDestino__sumando,a.julioDestino__sumando,a.agostoDestino__sumando,a.septiembreDestino__sumando,a.octubreDestino__sumando,a.noviembreDestino__sumando,a.diciembreDestino__sumando,a.idOrganismo,a.fecha,documento,a.justificacion,a.tipoTramite,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,c.enero As eneroDestino__destino,c.febrero AS febreroDestino__destino,c.marzo AS marzoDestino__destino,c.abril AS abrilDestino__destino,c.mayo AS mayoDestino__destino,c.junio AS junioDestino__destino,c.julio AS julioDestino__destino,c.agosto AS agostoDestino__destino,c.septiembre AS septiembreDestino__destino,c.octubre AS octubreDestino__destino,c.noviembre AS noviembreDestino__destino,c.diciembre AS diciembreDestino__destino,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_programacion_financiera AS c ON c.idProgramacionFinanciera=a.idFinancierioDestino INNER JOIN poa_item AS d ON d.idItem=c.idItem WHERE a.idModificacionDerfinitiva='$parametro1' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.identificadorPaginaReal='sueldos__item';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}

	public function getInformacion__modificaciones__enviadas__selector__desarrollos__desvinculaciones($parametro1){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$conexionEstablecida->exec("set names utf8");

 		$query = $conexionEstablecida->prepare("SELECT a.idOrigenDestino,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadOrigen) AS actividadOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS eventosOrigen,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(b.nombres, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS idFinancierioOrigen,a.eneroOrigen,a.febreroOrigen,marzoOrigen,a.abrilOrigen,mayoOrigen,a.junioOrigen,a.julioOrigen,agostoOrigen,a.septiembreOrigen,a.octubreOrigen,a.noviembreOrigen,a.diciembreOrigen,a.totalOrigen,a.eneroOrigen__restando,a.febreroOrigen__restando,a.marzoOrigen__restando,a.abrilOrigen__restando,a.mayoOrigen__restando,a.junioOrigen__restando,a.julioOrigen__restando,a.agostoOrigen__restando,a.septiembreOrigen__restando,a.octubreOrigen__restando,a.noviembreOrigen__restando,a.diciembreOrigen__restando,(SELECT REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(a1.nombreActividades, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó')  FROM poa_actividades AS a1 WHERE a1.idActividades=a.actividadDestino) AS actividadDestino,REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(REPLACE(d.nombreItem, 'Ã¡', 'á'),'Ã©','é'),'Ã­','í'),'Ã³','ó'),'Ãº','ú'),'Ã‰','É'),'ÃŒ','Í'),'Ã“','Ó'),'Ãš','Ú'),'Ã±','ñ'),'Ã‘','Ñ'),'&#039;',' ` '),'Ã','Á'),'',' '),'Ã','Á'),'SI','SI'),'â€œ',''),'â€',''),'Á²','ó') AS nombreItem,a.eneroDestino,a.febreroDestino, a.marzoDestino,a.abrilDestino,a.mayoDestino,a.junioDestino,a.julioDestino,a.agostoDestino,a.septiembreDestino,a.octubreDestino,a.noviembreDestino,a.diciembreDestino,a.totalDestino,a.identificadorPaginaReal,b.enero,b.febrero,b.marzo,b.abril,b.mayo,b.junio,b.julio,b.agosto,b.septiembre,b.octubre,b.noviembre,b.diciembre,IFNULL(a.calificacion,'VALIDADO') AS modificacionEstado,a.observaciones,a.calificacion FROM poa_modificaciones_origen_destino AS a INNER JOIN poa_sueldossalarios2022 AS b ON a.idFinancierioOrigen=b.idSueldos INNER JOIN poa_sueldossalarios2022 AS c ON c.idSueldos=a.eventosDestino INNER JOIN poa_item AS d ON d.idItem=a.idFinancierioDestino  WHERE a.idModificacionDerfinitiva='$idLinea' AND a.periodoIngreso='$aniosPeriodos__ingesos' AND a.identificadorPaginaReal='desvinculacion';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}

	public function getDirectorPlani(){

		$conexionRecuperada= new conexion();
 		$conexionEstablecida=$conexionRecuperada->cConexion();

 		$query = $conexionEstablecida->prepare("SELECT CONCAT_WS(' ',a.nombre,a.apellido) AS nombreDi FROM th_usuario AS a INNER JOIN th_usuario_roles AS b ON a.id_usuario=b.id_usuario WHERE b.id_rol='2' AND a.fisicamenteEstructura='18' AND a.estadoUsuario='A';");
		$query->execute();

		$resultado = $query->fetchAll(\PDO::FETCH_ASSOC);

		return $resultado;

	}	

	function sumasdiasemana($fecha,$dias){

		$datestart= strtotime($fecha);

		$datesuma = 15 * 86400;

		$diasemana = date('N',$datestart);

		$totaldias = $diasemana+$dias;

		$findesemana = intval( $totaldias/5) *2 ; 

		$diasabado = $totaldias % 5 ; 

		if ($diasabado==6) $findesemana++;

		if ($diasabado==0) $findesemana=$findesemana-2;

		$total = (($dias+$findesemana) * 86400)+$datestart ; 

		$fechafinal = date('Y-m-d', $total);


		$firstDate  = new DateTime($fecha);
		$secondDate = new DateTime($fechafinal);

		$intvl = $firstDate->diff($secondDate);

		$contador=$intvl->d;

		$fechaAdicional=date('Y-m-d', $datestart);

		for ($i=0; $i < $contador; $i++) { 
			

			if ($fechaAdicional=="2022-04-15") {

				$mod_date2 = strtotime($fechafinal."+ 1 days");

				$fechafinal=date("Y-m-d",$mod_date2);
				
			}

			$mod_date = strtotime($fechaAdicional."+ 1 days");

			$fechaAdicional=date("Y-m-d",$mod_date);
			

		}

		return $fechafinal;
	 

	}

	public function getEnviarEXCELCSV($tipo,$tamanio,$archivotmp,$archivotmpNombre,$parametro2,$parametro3){

		

		if(rename($archivotmp,$parametro2.$parametro3)){

			return "si";

		}else{

			return "noxlsxcsv";

		}

	
	}


	public function getEnviarCorreoDosParametros2023($parametro1,$parametro2,$asunto){


		// Instantiation and passing `true` enables exceptions
		$mail = new PHPMailer(true);

		try {

			//Server settings
				$mail->isSMTP();                                            // Send using SMTP
				$mail->Host       = 'smtp.office365.com';                    // Set the SMTP server to send through
				$mail->SMTPAuth   = true;                                   // Enable SMTP authentication
				$mail->Username   = 'distribucion@deporte.gob.ec';                     // SMTP username
				$mail->Password   =  'Pr0t3cc10NM1nD3p1811$$';                            // SMTP password
				$mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
				$mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above


				$mail->CharSet = 'UTF-8';
				//Recipients
				$mail->setFrom('distribucion@deporte.gob.ec', 'Ministerio del Deporte');

			for ($i=0; $i < count($parametro1); $i++) { 
				
				$mail->addAddress($parametro1[$i]); 

			}

			// Content
			$mail->isHTML(true);                                  // Set email format to HTML
			$mail->Subject = $asunto;
			$mail->Body = $parametro2; 

			return $mail->send();

		} catch (Exception $e) {
			
			return "no";

		}

	}

}