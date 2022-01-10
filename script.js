     
function exibir_categoria(categoria) {
       //alert(categoria);
       let elementos = document.getElementsByClassName('box_produtos') //para filtrar os elementos de acordo com a categoria e a quantidade.
       console.log(elementos);
       for (var i=0; i<elementos.length; i++) {
              console.log(elementos [i].id)
              if (categoria===elementos[i].id)
              elementos[i].style="display:block";
              else
              elementos[i].style="display:none";
              
       }
}

// para desfiltrar os elementos  função arrow
       function exibir_todos() {
              let elementos = document.getElementsByClassName('box_produtos');

       for (var i = 0; i < elementos.length; i++) {
              elementos[i].style = "display:block";
       }
       }
       

       // para ampliar e desampliar as imagens
       function destaque(imagen) {

              console.log(imagen);
              if (imagen.width == 240)
                     imagen.width = 120;


              else
                     imagen.width = 240;

       }
       


