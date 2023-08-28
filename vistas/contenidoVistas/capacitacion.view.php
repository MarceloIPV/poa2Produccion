<style>
    .manual,
    .video {
        background: linear-gradient(to right, #d9a911 0%, #f2c842 51%, #f8df92 100%);

        border: none;
        font-weight: 600;
        cursor: pointer;
        margin-top: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        color: #ffff;
        text-decoration: none;
        width: 50%;
        height: 35px;
        font-size: 1em;
        letter-spacing: 1px;
        border-radius: 20px;
        min-width: 110px;
    }

    .video {
        background: linear-gradient(to right, #cd1723 0%, #e74751 51%, #f1959b 100%);
    }

    #contenedorRegistro {
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .panel {
        background: white;
    }

    body {
        background-color: #232952;
    }
</style>



<main role="main" class="container">
    <div class="row" style="margin-top:30px;margin-bottom: 30px;">
        <div class="col-12">
            <div class="panel" style="border-bottom-left-radius: 20px;border-top-right-radius: 20px;">
                <br>
                <div class="panel-heading" style="text-align: center;background: linear-gradient(to right, #232952 0%, #9b9eb3 51%, #232952 100%);color: white;">
                    <h3>Bienvenido a la capacitación</h3>

                </div>
                <div class="container" style="justify-content: center;text-align: center;">
                    <img src="https://cursosformacion.online/wp-content/uploads/2021/04/technical-drawing.jpg" style="width:150px" />
                </div>
                <div class="panel-body" style="text-align: center;justify-content: center;align-items: center;">

                    <div class="table-responsive">
                        <table class="table table-striped" style="text-align: center;">
                            <thead>
                                <tr>
                                    <th>Item</th>
                                    <th>Nombre del Modulo</th>
                                    <th></th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>1</td>
                                    <td>Remanante</td>
                                    <td>
                                        <div class="input" id="contenedorRegistro">

                                            <a href="images/Manual del Usuario Remanentes 2022 (1).pdf" class="manual" target="_blank">
                                                <i class="fa fa-book iconos_blancos"></i>
                                                &nbsp;&nbsp;
                                                Manual
                                            </a>

                                        </div>
                                    </td>
                                    <td>
                                        <div class="input" id="contenedorRegistro">

                                            <a href="https://ecmindeporte-my.sharepoint.com/:v:/g/personal/vpanchana_deporte_gob_ec/EQrHhn5nPZdNtML33IRzrfsBe75_f3HW_psYEdRt69pYkw?e=7dxCV8" target="_blank" class="video">

                                                <i class="fa fa-play-circle iconos_blancos" aria-hidden="true"></i>
                                                &nbsp;&nbsp;
                                                Video
                                            </a>

                                        </div>
                                    </td>

                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</main>