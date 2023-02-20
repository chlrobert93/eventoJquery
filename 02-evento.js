$(document).ready(function(){
    //alert("evento.js cargando");

    //MouseOver y MouseOut
    /*var caja = $('#caja');


    //Cambiar el color de la caja al pasar el raton
    caja.mouseover(function () {  
       $(this).css("background", "red");
    });

    caja.mouseout(function () {
       $(this).css("background", "green");
      });*/
      
      var caja= $('#caja');
      function cambiaRojo() { 
         $(this).css("background","red");
       }

       function cambiaVerde(){
         $(this).css("background", "green")
       }
      //Hover
      caja.hover(cambiaRojo, cambiaVerde )

      //Click, Doble click

      caja.click(function(){
           $(this).css("background","blue")
                  .css("color", "white");
      });

      caja.dblclick(function(){
          $(this).css("background", "pink")
                  .css("color", "white");
      });

      //Focus y blur

       var nombre = $("#nombre");

       nombre.focus(function(){
         $(this).css("border", "2px solid green");
       });
      
       //Muestra un margen al salir de la caja de tex area
       nombre.blur(function () {
         $(this).css("border", "1px solid #ccc");
         //Sacar los datos de un input value
        // $(this).val();
         //Show muestra ese elemento
         $("#datos").text( $(this).val()).show();

         });

         //Mousedown y mouseup
         //Al precionar el elemento con el raton cambia
          var datos = $('#datos');

          datos.mousedown(function(){
            $(this).css("border-color", "gray");
          });

         //Al dejar de presionar regresa como estaba
         
         datos.mouseup(function(){
          $(this).css("border-color", "black");
        });

        //Mousemove 
        //capturar el evento del movimiento del raton
        //sigue el div el movimiento del raton
        /*$(document).mousemove(function(){
          console.log("En X: "+event.clientX);
          console.log("eN y: "+event.clientY);
          var sigueme  = $("#sigueme");


          sigueme.css("left",event.clientX);
          sigueme.css("top",event.clientY);
        })*/

        //Mousemove
        //Para no sobrecargar el dom
        $(document).mousemove(function(){
             //ocultar el cursor
            $('body').css("cursor","none");
            $("#sigueme").css("left", event.clientX)
                        .css("top", event.clientY);
        });
});
