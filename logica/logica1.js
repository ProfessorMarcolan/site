$.ajax({url: "/figuras/2019-03-22-oi-joao.json"}).done(function( data ) {
      console.log(data);
    }
  );



  function pega_code(id_codigo, url_codigo){

    $.ajax({url: url_codigo}).done(function( data ) {

      var re_compare = /\s*\n\s*/;
      let token = data.split(re_compare)

      // /\s*\n\s*/
      var re_text = "\n";
      let token_text = data.split(re_text)

      let control = false
      let texto = ""

      token_text.forEach( element =>{

          if(Number(element.replace("# inicio codigo ","")) === Number(1)){
            control = true
          }
          if(Number(element.replace("# fim codigo ","")) === Number(1)){
            control = false
          }
        
        
        
        if(control){
          texto = texto +"\n"+ element
          console.log(texto)
        }
      })



      var textnode = document.createTextNode(texto);         // Create a text node                            // Append the text to <li>
      document.getElementById(id_codigo).appendChild(textnode); 

      Prism.highlightElement($("#"+id_codigo)[0]);

      // var block = document.getElementById('pythonCode')
      // Prism.highlightElement(block);
    }
    
  );
    

  }



function set_all_codigos(codigos){
  console.log(codigos)

  codigos["codes"].forEach(element => {
    console.log(element)
    pega_code(element["id"],element["path"]);
  });


  // pega_code("pythonCode","/py/aula-3/src/codigo1.py");
  // pega_code("pythonCode2","/py/aula-3/src/codigo1.py");
}
