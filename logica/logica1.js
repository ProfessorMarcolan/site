$.ajax({url: "/figuras/2019-03-22-oi-joao.json"}).done(function( data ) {
      console.log(data);
    }
  );



  function pega_code(id_codigo, url_codigo){

    $.ajax({url: url_codigo}).done(function( data ) {

      var textnode = document.createTextNode(data);         // Create a text node                            // Append the text to <li>
      document.getElementById(id_codigo).appendChild(textnode); 

      Prism.highlightElement($("#"+id_codigo)[0]);

      // var block = document.getElementById('pythonCode')
      // Prism.highlightElement(block);
    }
    
  );
    

  }

function tryMe(arg) {
    document.write(arg);
}


function set_all_codigos(){
  pega_code("pythonCode","/py/aula-3/src/codigo1.py");
  pega_code("pythonCode2","/py/aula-3/src/codigo1.py");
}
