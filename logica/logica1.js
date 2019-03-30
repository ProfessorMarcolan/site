$.ajax({url: "/figuras/2019-03-22-oi-joao.json"}).done(function( data ) {
      console.log(data);
    }
  );



  function _get_equal_espaco(element, control, numero){

    if(Number(element.replace("# inicio codigo ","")) === Number(numero)){
      control = true
    }
    if(Number(element.replace("# fim codigo ","")) === Number(numero)){
      control = false
    }

    return control
    
  }


  function _selecionar_parte_codigo(token, numero){
      // seleciona a parte do código que quer pegar
      let control = false
      let texto = ""
      token.forEach( element =>{
        if(numero === -1){
          control = true
        }else{
          control = _get_equal_espaco(element,control, numero)
        }
        
        if(control){
          texto = texto +"\n"+ element
          console.log(texto)
        }
      })
      return texto

  }

  function _get_token(data){
    var re_text = "\n";
    let token_text = data.split(re_text)
    return token_text
  }


  // pega o codigo e leva para a iunterface gráfica
  function pega_code(id_codigo, url_codigo, numero){

    $.ajax({url: url_codigo}).done(function( data ) {

      // var re_compare = /\s*\n\s*/;
      // let token = data.split(re_compare)

      // /\s*\n\s*/
      let token_text = _get_token(data)
      

      let texto = _selecionar_parte_codigo(token_text,numero)

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
    pega_code(element["id"],element["path"], element["numero"]);
  });


  // pega_code("pythonCode","/py/aula-3/src/codigo1.py");
  // pega_code("pythonCode2","/py/aula-3/src/codigo1.py");
}
