let automatico;

$( document ).ready(function() {
    $("#botonPote").prop( "disabled", true );
});

$( "#botonPote" ).click(serial);

function serial(){
    $.ajax({
        type: 'POST',
        url: "/potenciometro",
    }).done(function(result) {
        let datos = document.querySelector("#datos");
        msj = document.createElement("div");
        msj.innerHTML=result.serial;
        datos.appendChild(msj)
    })
}

$( "#automatico" ).click(function() {
    automatico=setInterval('serial()',1000);
    $("#automatico").prop( "disabled", true );
    $("#manual").prop( "disabled", false );
    $("#botonPote").prop( "disabled", true );
  });

  $( "#manual" ).click(function() {
    $("#botonPote").prop( "disabled", false );
    $("#manual").prop( "disabled", true );
    $("#automatico").prop( "disabled", false );
    clearInterval(automatico);
    
  });

