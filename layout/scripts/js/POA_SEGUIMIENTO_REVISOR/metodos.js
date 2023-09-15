
var cerrartablaSeguimientoModal = function (boton, tabla,modal) {
    $(boton).click(function (e) {
      $(tabla + " tr").remove();
      $(modal).modal('dispose');
    });
  };

  var cerrartablaSeguimiento = function (boton, tabla) {
    $(boton).click(function (e) {
      $(tabla + " tr").remove();
    });
  };

var deshabilitarUnCheck = function (checkbox1, checkbox2) {


    
     $(checkbox1).click(function (e) {
      $(".checkActividades").show();
      $(".checkContratacion").hide();
      $("#tipoInforme").val("actividades")
      if ($(checkbox1).is(":checked")) {
        
        $(checkbox2).prop("disabled", true);
      } else {
        $(checkbox2).prop("disabled", false);
      }
    });

    $(checkbox2).click(function (e) {
      $(".checkActividades").hide();
      $(".checkContratacion").show();
      $("#tipoInforme").val("contratacion")
      if ($(checkbox2).is(":checked")) {
       
        $(checkbox1).prop("disabled", true);
      } else {
        $(checkbox1).prop("disabled", false);
        
      }
    });
};

var cerrarModalReporteriaAnualRevisor = function (boton) {
  $(boton).click(function (e) {
    
    $("#administrativo").hide()
    $("#mantenimiento").hide()
    $("#capacitacion").hide()     
    $("#sueldos").hide()
    $("#honorarios").hide()
    $("#competencia").hide()
    $("#formativo").hide()
    $("#altoRen").hide()
    $("#recreacion").hide()
    $("#implementacion").hide()

  });
};

var agregarDatatabletsRefrescar=function(btnAccion,idDatatable,nombreArchivo,archivo,datos){

  $(btnAccion).click(function (e){

    idOrganismo=$(datos).val()

    datatabletsSeguimientoRevisorVacio($("#"+idDatatable+""), idDatatable,nombreArchivo,archivo,idOrganismo,false);
  });

};


var cerrarModalDatatable=function(btnCerrar,tabla){

  $(btnCerrar).click(function (e){
    var table = $(tabla).DataTable();
    table.destroy()
  });

};


var  descargarPorZipArchivos = function(boton, arrayArchivosConPath,nombreZip){

  $(boton).click(function (e){
    
    const zip = new JSZip();

  // Add files to the zip archive
  const promises = arrayArchivosConPath.map(path => {
    return fetch(path)
      .then(response => response.blob())
      .then(blob => {
        const filename = path.substring(path.lastIndexOf('/') + 1);
        zip.file(filename, blob);
      })
      .catch(error => {
        console.error(`Error fetching ${path}:`, error);
      });
  });

  // Wait for all fetch operations to complete
  Promise.all(promises).then(() => {
    // Generate the zip asynchronously
    zip.generateAsync({ type: 'blob' }).then(blob => {
      // Use the downloadjs library to trigger the download
      saveAs(blob, nombreZip+".zip");
    });
  });

    

  });
  

}

var subirArchivos = function(boton,inputArchivo,tituloArchivo){
  
 
  $(boton).click(function (e){
    
    input = document.getElementById(inputArchivo);
    input.click(); 

    input.addEventListener("change",function(e){
      var fileName = e.target.files[0].name;
      $(tituloArchivo).show()
      
      $(tituloArchivo).text(fileName)

    })
    
  })
  

  
}


var regresarEstadoOriginalSubirArchivo=function(btnCerrar,div,tituloArchivo){
  $(btnCerrar).click(function (e){
    
    const dropArea = document.querySelector(div),
    
    input = dropArea.querySelector("input");
    input.value = "";
    $(tituloArchivo).hide()
    
  });

};





function getFileNameFromUrl(url) {
  const parts = url.split('/');
  return parts[parts.length - 1];
}


var buscarFiltradoDataTable = function(input1,input2,datatable){
  $(input2).on('change', function() {
        startDate = $(input1).val();
        endDate = $(input2).val();
        
        if(startDate == '' || endDate == ''){
      
          datatable.DataTable().ajax.reload();
           
         }else{
            
          var table = datatable.DataTable();
          if((endDate >= startDate)&&(startDate != '' && endDate != '')){
            var table = datatable.DataTable();
        
            $.fn.dataTable.ext.search.push(function (settings, data, dataIndex) {
              let min = startDate
              let max = endDate
              let age = data[9] 

              if (
                  (min <= age && age <= max)
              ) {
                
                  return true;
              }
            
              return false;
          });

          
            table.draw();
        }else if((endDate < startDate) &&(startDate != '' && endDate != '')){
          alertify.set("notifier","position", "top-center");
          alertify.notify("Fecha de Fin no puede ser Mayor a la Fecha de Inicio", "error", 5, function(){});
          
        }
        
      }
   
    });



}

