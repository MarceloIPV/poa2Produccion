<?php $objetoInformacion= new usuarioAcciones();?>

<?php $informacionObjeto=$objetoInformacion->getInformacionGeneral();?>

<?php $zonalVariable=$objetoInformacion->getObtenerInformacionGeneral("SELECT zonal,fisicamenteEstructura FROM th_usuario WHERE id_usuario='$informacionObjeto[0]';");?>


<input type="hidden" id="fechaPrincipalJ" name="fechaPrincipalJ" />

<input type="hidden" id="zonalUsuario" name="zonalUsuario" value="<?=$zonalVariable[0][zonal]?>" />

<input type="hidden" id="idRolAd" name="idRolAd" value="<?=$informacionObjeto[1]?>" />

<input type="hidden" id="fisicamenteE" name="fisicamenteE" value="<?=$zonalVariable[0][fisicamenteEstructura]?>" />

<input type="hidden" id="idUsuarioC" name="idUsuarioC" value="<?=$informacionObjeto[0]?>" />

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("bloqueador"));?>">

	<a href="#" class="nav-link">
		<i class="fa fa-calendar"></i>
		&nbsp;
		<p>
			CIERRE DEL AÑO FISCAL
			<i class="fa fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">
			
		<li class="nav-item">

			<a href="bloqueador" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'bloqueador');?>">
				<i class="fa fa-calendar"></i>
				&nbsp;
				<p>CIERRE DE AÑO</p>

			</a>

		</li> 

	</ul>

</li>



<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("asignacionPresupuesto","modificacionPresupuestaria","administracionGeneral","administracionModificaciones","administracionModificaciones","asignacionPresupuesto","modificacionPresupuestaria","coordinadorRe","observadosP","reporteriaFinal","poaResolucionFinal","poasGlobalesRecibidosM2022","poasGlobalesRecibidos","coordinadorRecomendados","coordinadorRecomendadosCorPla"));?>">

	<a href="#" class="nav-link">
		<i class="fa fa-hand-holding-usd"></i>
		&nbsp;
		<p>
	    	POA
	    	<i class="fa fa-angle-left right"></i>
	    	<span class="badge badge-info right"></span>
		</p>

	</a>
	<ul class="nav nav-treeview">
		<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("administracion","administracionGeneral","administracionUsuarios","administracionModificaciones"));?>">
	
<a href="#" class="nav-link">
	<i class="fa fa-tasks"></i>
	&nbsp;
	<p>
    	Administración
    	<i class="fa fa-angle-left right"></i>
    	<span class="badge badge-info right"></span>
	</p>
</a>

<ul class="nav nav-treeview">

	<li class="nav-item">

		<a href="administracionGeneral" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'administracionGeneral');?>">
			<i class="fa fa-tasks"></i>
			&nbsp;
			<p>Administración general</p>
		</a>

	</li>

</ul>

<ul class="nav nav-treeview">

	<li class="nav-item">

		<a href="administracionModificaciones" class="nav-link <?=$objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'administracionModificaciones');?>">
			<i class="fa fa-pencil-square-o"></i>
			&nbsp;
			<p>Administración modificaciones</p>
		</a>

	</li>

</ul>


</li>

	</ul>

	<ul class="nav nav-treeview">


		<li class="nav-item">

			<a href="asignacionPresupuesto" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'asignacionPresupuesto');?>">
				<i class="fa fa-file-signature"></i>
				&nbsp;
				<p>Asignar</p>

			</a>

		</li>

		<li class="nav-item">

			<a href="modificacionPresupuestaria" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionPresupuestaria');?>">
				<i class="fa fa-edit"></i>
				&nbsp;
				<p>Modificar</p>

			</a>

		</li>



<?php if ($informacionObjeto[1]==1 || $informacionObjeto[1]==2 || ($informacionObjeto[1]==3 && $zonalVariable[0][fisicamenteEstructura]==18)): ?>
	
<li class="nav-item">

<a href="poasGlobalesRecibidos" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'poasGlobalesRecibidos');?>">
	<i class="fa fa-file-export"></i>
	&nbsp;
	<p>Poas enviados</p>

</a>

</li> 


<li class="nav-item">

<a href="poasGlobalesRecibidosM2022" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'poasGlobalesRecibidosM2022');?>">
	<i class="fa fa-envelope-open-text"></i>
	&nbsp;
	<p>Modificaciones enviadas</p>

</a>

</li>


	
<li class="nav-item">

<a href="coordinadorRe" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRe');?>">
	<i class="fa fa-envelope-open"></i>
	&nbsp;
	<p>Recibidos</p>

</a>

</li>	

<?php if ($informacionObjeto[1]==2): ?>
	
<li class="nav-item">

<a href="coordinadorRecomendados" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRecomendados');?>">
	<i class="fa fa-check-circle"></i>
	&nbsp;
	<p>Recomendados</p>

</a>

</li>	

<li class="nav-item">

<a href="coordinadorRecomendadosCorPla" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'coordinadorRecomendadosCorPla');?>">
	<i class="fa fa-check-square"></i>
	&nbsp;
	<p>Recomendados (Coordinación)</p>

</a>

</li>	
	
<?php endif ?>

<?php if ($informacionObjeto[1]==2): ?>

<li class="nav-item">

<a href="observadosP" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'observadosP');?>">
	<i class="fa fa-eye"></i>
	&nbsp;
	<p>Poas Observados</p>

</a>

</li>

<?php endif ?>



<?php endif ?>


<li class="nav-item">

<a href="reporteriaFinal" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaFinal');?>">
	<i class="fa fa-file-signature"></i>
	&nbsp;
	<p>Trámites</p>

</a>

</li>



<li class="nav-item">

<a href="poaResolucionFinal" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'poaResolucionFinal');?>">
	<i class="fa fa-file-contract"></i>
	&nbsp;
	<p>Poas gestionados</p>

</a>

</li>

	</ul>

</li>



<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidRecomendadosPlani","paidAprobadosPlani","paidfortalecimiento","paidAsignacion","reporteriaAsignacion","paidencuentroactivo","paidAsignacionDesarrollo","reporteriaAsignacionDesarrollo","negadosPlanificaPaid","paidRecomendadosPlaniRecomendados","reporteriaPaidF"));?>">

<a href="#" class="nav-link">
	<i class="fa fa-money"></i>
	&nbsp;
	<p>
    	PAID
    	<i class="fa fa-angle-left right"></i>
    	<span class="badge badge-info right"></span>
	</p>
</a>

<ul class="nav nav-treeview">


<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidfortalecimiento","paidAsignacion","reporteriaAsignacion"));?>">

	<a href="#" class="nav-link">
		<i class="fa fa-running"></i>
		&nbsp;
		<p>
			Fortalecimiento del deporte de alto rendimiento del Ecuador
			<i class="fa fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>

	</a>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="paidfortalecimiento" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidfortalecimiento');?>">
				<i class="fa fa-tasks"></i>
				&nbsp;
				<p>Administración</p>

			</a>

		</li>

		<li class="nav-item">

			<a href="paidAsignacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAsignacion');?>">
				<i class="fa fa-file-alt"></i>
				&nbsp;
				<p>Asignación</p>

			</a>

		</li>

<!-- 		<li class="nav-item">
			<a href="paidAsignado" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAsignado');?>">
				<p>Asignado</p>
			</a>
		</li> -->

		<li class="nav-item">

			<a href="reporteriaAsignacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaAsignacion');?>">
				<i class="fa fa-clipboard"></i>
				&nbsp;
				<p>Reportería</p>

			</a>

		</li>

	</ul>

</li>

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("paidencuentroactivo","paidAsignacionDesarrollo","reporteriaAsignacionDesarrollo"));?>">

	<a href="#" class="nav-link">
		<i class="fa fa-swimmer"></i>
		&nbsp;
		<p>
			Encuentro activo del deporte para el desarrollo
		    <i class="fa fa-angle-left right"></i>
		    <span class="badge badge-info right"></span>
		</p>

	</a>

	<ul class="nav nav-treeview">

		<li class="nav-item">

			<a href="paidencuentroactivo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidencuentroactivo');?>">
				<i class="fa fa-tasks"></i>
				&nbsp;
				<p>Administración</p>

			</a>

		</li>


		<li class="nav-item">

			<a href="paidAsignacionDesarrollo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAsignacionDesarrollo');?>">
				<i class="fa fa-file-alt"></i>
				&nbsp;
				<p>Asignación</p>

			</a>

		</li>


		<li class="nav-item">

			<a href="reporteriaAsignacionDesarrollo" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaAsignacionDesarrollo');?>">
				<i class="fa fa-clipboard"></i>
				&nbsp;
				<p>Reportería</p>

			</a>

		</li>

	</ul>

</li>


<li class="nav-item">

<a href="paidRecomendadosPlani" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRecomendadosPlani');?>">
	<i class="fa fa-list"></i>
	&nbsp;
	<p>Asignados</p>

</a>

</li>


<?php if ($informacionObjeto[1]==2): ?>

<li class="nav-item">

<a href="paidRecomendadosPlaniRecomendados" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidRecomendadosPlaniRecomendados');?>">
	<i class="fa fa-check-circle"></i>
	&nbsp;
	<p>Recomendados</p>

</a>

</li>


<li class="nav-item">

<a href="paidAprobadosPlani" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'paidAprobadosPlani');?>">
	<i class="fa fa-check"></i>
	&nbsp;
	<p>Aprobados</p>

</a>

</li>

<li class="nav-item">

<a href="negadosPlanificaPaid" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'negadosPlanificaPaid');?>">
	<i class="fa fa-eye"></i>
	&nbsp;
	<p>Observados</p>

</a>

</li>

<?php endif ?>

<li class="nav-item">

<a href="reporteriaPaidF" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'reporteriaPaidF');?>">
	<i class="fa fa-clipboard"></i>
	&nbsp;
	<p>Reportería</p>

</a>

</li>


</ul>

</li>

<li class="nav-item <?=$objetoInformacion->getUrlDinamicaUna('poa2/',$_SERVER['REQUEST_URI'],array("modificacionesRecibidosPlanificacion","directorMd2","modificacionesRevisor","modificacionesRevisorRecomendados","modificacionesRecibidosPlanificacionRecomendados","modificacionesRecibidosPlanificacionRecomendadosNotificacion"));?>">

	<a href="#" class="nav-link">
		<p>
			Modificaciones
			<i class="fas fa-angle-left right"></i>
			<span class="badge badge-info right"></span>
		</p>
	</a>

	<ul class="nav nav-treeview">
			
		<li class="nav-item">

			<a href="modificacionesRecibidosPlanificacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesRecibidosPlanificacion');?>">
				<i class="fa fa-check-circle"></i>
				&nbsp;
				<p>Trámites recibidos</p>

			</a>

		</li>
			
		<?php if ($informacionObjeto[1]==2): ?>
			
		<li class="nav-item">

			<a href="modificacionesRecibidosPlanificacionRecomendados" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesRecibidosPlanificacionRecomendados');?>">
				<i class="fa fa-check-circle"></i>
				&nbsp;
				<p>Trámites Recomendados</p>

			</a>

		</li>

			
		<li class="nav-item">

			<a href="modificacionesRecibidosPlanificacionRecomendadosNotificacion" class="nav-link <?= $objetoInformacion->getUrlDinamica('poa2/',$_SERVER['REQUEST_URI'],'modificacionesRecibidosPlanificacionRecomendadosNotificacion');?>">
				<i class="fa fa-check-circle"></i>
				&nbsp;
				<p>Trámites para subir notificación</p>

			</a>

		</li>

		<?php endif ?>

	</ul>

</li> 

