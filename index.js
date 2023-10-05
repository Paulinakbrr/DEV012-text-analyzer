import analyzer from './analyzer.js';
//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`

const wordCount= document.querySelector('[data-testid="word-count"]');
const characters= document.querySelector('[data-testid="character-count"]');
const charactersonly= document.querySelector('[data-testid="character-no-spaces-count"]');
const numbers= document.querySelector('[data-testid="number-count"]');
const sumit= document.querySelector('[data-testid="number-sum"]');
const totali= document.querySelector('[data-testid="word-length-average"]');
const cajadetexto= document.querySelector("textarea");

/*document.addEventListener('DOMContentLoaded',function(){

    var textarea= document.getElementsByName("inputusuario")[0];
    textarea.addEventListener("input",function (){
        analisis(textarea);

    });
        
 });*/ 
const resetbutton = document.getElementById("resetbutton");
resetbutton.addEventListener("click", function(){
  document.querySelector("textarea").value= "";

  cajadetexto.value = "";
  wordCount.innerHTML = "Recuento de palabras: 0";
  characters.innerHTML = "Recuento de caracteres <b>incluyendo</b> espacios y signos de puntuación: 0";
  charactersonly.innerHTML = "Recuento de caracteres <b>excluyendo</b> espacios y signos de puntuación: 0";
  numbers.innerHTML = "Recuento de números: 0";
  sumit.innerHTML = "Suma total de números: 0";
  totali.innerHTML = "Longitud media de las palabras: 0";

})

cajadetexto.addEventListener('input', function() {
  const text = cajadetexto.value
  wordCount.innerHTML = "Recuento de palabras: "+ analyzer.getWordCount(text);
  characters.innerHTML = "Recuento de caracteres <b>incluyendo</b> espacios y signos de puntuación: "+ analyzer.getCharacterCount(text);
  charactersonly.innerHTML = "Recuento de caracteres <b>excluyendo</b> espacios y signos de puntuación: " + analyzer.getCharacterCountExcludingSpaces(text);
  numbers.innerHTML = "Recuento de números: " + analyzer.getNumberCount(text);
  sumit.innerHTML = "Suma total de números: " + analyzer.getNumberSum(text);
  totali.innerHTML = "Longitud media de las palabras: " + analyzer.getAverageWordLength(text);
})