$(document).ready(function(){
  // console.log($('a'.length));
 // $('a').each(function(index){
      //Como va rrecorriendo cada uno de esos elementos
     //console.log($(this));
     //Seleccionar el atributo href
    // console.log($(this).attr("href"));
    // $(this).attr("href") 
  // });

  reloadLinks();

  $('#add_button')
     //Eliminar cualquier atributo
     .removeAttr('disabled')  
     .click(function(){
     //console.log($("#add_link").val());
     //html para meter html dentro d euna lsita
     //$('#menu').html('<li><a href="'+$("#add_link").val()+'"></a></li>');  
     //append---------> lo añade al final de la lista
     // $('#menu').append('<li><a href="'+$("#add_link").val()+'"></a></li>');  
     //prepend---------->Lo añade al principio de la lista
    //$('#menu').prepend('<li><a href="'+$("#add_link").val()+'"></a></li>');  
    //Lo añade fuera de la lista
    $('#menu').before('<li><a href="'+$("#add_link").val()+'"></a></li>');  
    //vacia depues de ecribir
    $("#add_link").val('');


     reloadLinks();
  });

});


function reloadLinks(){

    $('a').each(function(index){
  
      var that = $(this);
      var enlace = that.attr("href");
      //lo abre en una nueva ventana
      that.attr('target', '_blank');
  

      console.log(enlace);
      that.text(enlace);
  });

}
