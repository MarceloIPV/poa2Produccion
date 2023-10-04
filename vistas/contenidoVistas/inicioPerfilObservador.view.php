<?php 
    extract($_POST);
    
?>

<html lang="en">
<div class="preloader flex-column justify-content-center align-items-center">
    <img class="animation__shake" src="dist/img/AdminLTELogo.png" alt="logoMinisterio" height="60" width="60">
</div>

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <!-- Seleccion POA PAID -->
    <link rel="stylesheet" href="layout/styles/css/paid-alto-rendimiento/style-par.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <title>Document</title>
</head>

<body>
    <center><img src="././images/paidpoa.PNG" width="100px"></center>

    <div class="continer">

        <section class="row d d-flex justify-content-center">
            <h3 class="title-cards1">
                Perfiles
            </h3>
            <div class="title-cards">
                <h5>SELECCIONE EL TIPO DE PERFIL</h5>
            </div>

            <div class="col-12 row d-flex">
                <form class="col-md-3" method="post">
                    <div class="card1" style="width: 80%; height: 350px; padding-right: 0px !important;">
                        <figure>
                            <center><span class="far fa-file-alt fa-10x iconos_edit1"></span></center>
                        </figure>
                        <div class="contenido-card">
                            <h1></h1>
                            <h2>COORDINADOR</h2>
                            <button type="submit" name="ingresarUsuario" id="ingresarUsuario" class="btn btn-warning">INGRESAR</button>
                        </div>
                    </div>

                    <input type="hidden" name="username" id="username" value="cmorales">
                    <input type="hidden" name="password" id="password" value="M1nDeport3P0A2023_Co0rDi">

                    <?php

                    require_once CONTROLADOR . INICIOSESION . 'ingreso.controlador.php';

                    $ingresoS = new ingreso();
                    $ingresoS->ingresoCtr();

                    ?>
                </form>
                <form id="" class="col-md-3" method="post">
                    <div class="card1" style="width: 80%; height: 350px;">
                        <figure>
                            <center><span class="far fa-file-alt fa-10x iconos_edit1"></span></center>
                        </figure>
                        <div class="contenido-card">
                            <h1></h1>
                            <h2>Director Emilia Ruiz</h2>
                            <button type="submit" name="ingresarUsuario" id="ingresarUsuario" class="btn btn-warning">INGRESAR</button>
                        </div>
                    </div>

                    <input type="hidden" name="username" id="username" value="eruiz">
                    <input type="hidden" name="password" id="password" value="M1nDeport3P0A2023_ER">

                    <?php
                    
                    $ingresoS = new ingreso();
                    $ingresoS->ingresoCtr();

                    ?>
                </form>
                <form id="" class="col-md-3" method="post">
                    <div class="card1" style="width: 80%; height: 350px;">
                        <figure>
                            <center><span class="far fa-file-alt fa-10x iconos_edit1"></span></center>
                        </figure>
                        <div class="contenido-card">
                            <h1></h1>
                            <h2>SUB-SECRETARIO</h2>
                            <button type="submit" name="btnPoa" id="btnPoa" value="1" class="btn btn-warning">INGRESAR</button>
                        </div>
                    </div>
                </form>
                <form class="col-md-3" method="post">
                    <div class="card1" style="width: 80%; height: 350px;">
                        <figure>
                            <center><span class="far fa-file-alt fa-10x iconos_edit1"></span></center>
                        </figure>
                        <div class="contenido-card">
                            <h1></h1>
                            <h2>ORGANIZACIÓN DEPORTIVA</h2>
                            <button type="submit" name="ingresarUsuario" id="ingresarUsuario" class="btn btn-warning">INGRESAR</button>
                        </div>
                    </div>

                    <input type="hidden" name="username" id="username" value="0160040220001">
                    <input type="hidden" name="password" id="password" value="M1nDeport3P0A2023_OD">


                    <?php

                    require_once CONTROLADOR . INICIOSESION . 'ingreso.controlador.php';

                    $ingresoS2 = new ingreso();
                    $ingresoS2->ingresoCtr();

                    ?>

                </form>
            </div>
            <!-- <form id="" class="col-12 row d-flex" method="post"> -->

            <!--   Tarjetas-->

            <!-- <div class="" style="width: 30%;"> -->





            <!-- </div> -->
            <!--Fin   Tarjetas-->


            <!-- </form> -->

        </section>

    </div>
</body>

</html>