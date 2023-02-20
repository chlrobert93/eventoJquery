<!DOCTYPE html>
<html lang="es">
    <head>
      <meta charset="utf-8">
      <!--Importacion del jQuery-->
      <script src="js\lib\jquery-3.6.3.min.js"></script>  
      <script src="js\02-evento.js"></script>    

      <style>
        #caja{
          width:250px;
          height:250px;
          border: 2px solid black;
          background: yellow;
        }

        /*#caja:hover{
          transition: 300ms all;
          background: red;
          cursor:pointer;
        }*/

        input{
          padding: 10px;
          width: 300px;
          font-size: 20px;
          margin-bottom:10px;
        }

        #datos{
          border: 4px dashed black;
          padding: 10px;
          width: 250px;
          height: 50px;
          margin: 10px;
          
          /*olculta la caja*/
          display:none;
         /* visibility: hidden; */

        }

        #sigueme{
           width: 25px;
           height:25px;
            /*Para mover el elemento libremente sin que
           interfiera ningun otro elemento de la web
          */
           position: absolute;
           display: block;
           background:red;
           opacity: 0.5;  
           border:   3px solid black;
           border-radius: 999px;
       
        }
      </style>
      </head>
    <body>
     <h1>Aprendiendo jQuery WEB - Eventos</h1>

    <div id="sigueme">
    
    </div>
     <form>
        <input type=" text" id="nombre"/>   
     </form>

     <div id="datos">

     </div>
   
   
    <br>
     <div id="caja">
        Soy una caja
     </div>
    </body>
</html>
