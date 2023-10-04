<?php
class seleccion
{
    public static function seleccionPP()
    {
        extract($_POST);

        if (isset($_POST["btnPoa"])) {

            $valor = $_POST["btnPoa"];
            session_start();

            $_SESSION["seleccionPaidPoa"] = $valor;

            echo '<script>

            $.getScript("layout/scripts/js/POA_SEGUIMIENTO_REVISOR/selector.js",function(){
                verificarSuspensionesOD();
                
              
            });
            window.location="datosGenerales"
            
            </script>';
        } elseif (isset($_POST["btnPaid"])) {

            $valor = $_POST["btnPaid"];
            session_start();

            $_SESSION["seleccionPaidPoa"] = $valor;

            echo '<script>window.location="datosGenerales"</script>';
        }
    }
}

