$(document).ready(function () {

    
    $.getScript("layout/scripts/js/validacionBasica.js",function(){

        


    });




    $.getScript("layout/scripts/js/PAID_REVISOR_JS/datatablets.js",function(){

        agregarDatatablets($("#idIndicadoresGenera__tablets"),$(".paidIndicadores__revisor"),"paidIndicadores__revisor");
        agregarDatatablets($("#idPaidGenera__tablets"),$(".paidGeneral__revisor"),"paidGeneral__revisor");
        agregarDatatablets($("#idVinculacionGenera__tablets"),$(".paidEventos__revisor"),"paidEventos__revisor");
        agregarDatatablets($("#idInterdisciplinarioGenera__tablets"),$(".paidInterdiciplinarios__revisor"),"paidInterdiciplinarios__revisor");
        agregarDatatablets($("#idIndividualesGenera__tablets"),$(".paidIndividuales__revisor"),"paidIndividuales__revisor");
        agregarDatatablets($("#idVinculacionGenera__generales__tablets"),$(".paidNecesidadesGenerales__revisor"),"paidNecesidadesGenerales__revisor");
        agregarDatatablets($("#idEncuentroActivoGenera__tablets"),$(".paidEncuentroAc__revisor"),"paidEncuentroAc__revisor");
        
        
        
    });




    $.getScript("layout/scripts/js/PAID_REVISOR_JS/inserciones.js",function(){

      

    });


    
    $.getScript("layout/scripts/js/PAID_REVISOR_JS/eliminaciones.js",function(){
        
        
    });



    $.getScript("layout/scripts/js/PAID_REVISOR_JS/actualizaciones.js",function(){
        
     

    });




   $.getScript("layout/scripts/js/PAID_REVISOR_JS/selector.js",function(){

        
    });



    $.getScript("layout/scripts/js/PAID_REVISOR_JS/metodos.js",function(){

        
   
        cargarDatatable($("#idPaidGenera__tablets")," ");
        
    });

  
    
});
