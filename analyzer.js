const analyzer = {
  getWordCount: (text) => {
    let valor = text.trim().split(' ');
    if (valor[0]=== '')
    {
      valor = 0
    }else{
      valor = valor.length        
    }
    return valor;
  },

  getCharacterCount: (text) => {
    return text.length;
  },

  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const editado = text.replace(/[,.:;\s+]/g,'');
    return editado.length;

  },

  getNumberCount: (text) => { 
    const arregloDePalabras = text.split(' ');
    let numerosEncontrados = 0;
    for (let i =0; i < arregloDePalabras.length; i++) {
      const parsed = (arregloDePalabras[i]);
      const numerosFinales = parseFloat(+parsed);
      if (!isNaN(numerosFinales)&& /^[0-9]+(\.[0-9]*)?\.?$/.test(parsed)) {
        numerosEncontrados= numerosEncontrados+1; //numerosEncontrados= numerosEncontrados+1; es igual a numerosEncontrados++;
      }
     

    }
    return numerosEncontrados;
  },


  getNumberSum: (text) => {
 
    const separarTexto = text.split(' ');//.filter((x) => parseFloat(x));  
    let suma = 0;
    for (let i = 0; i < separarTexto.length; i++) {
      
      if(Number(separarTexto[i])) {
        suma = suma + parseFloat(separarTexto[i]);
      }
           
    }
    return suma;
  },
  
  getAverageWordLength: (text) => {    
    //const separarTexto = text.trim().split(' ').filter((x) => isNaN(parseFloat(x))).filter(x=>x!=='').map((x)=>x.length);
    const separarTexto = text.trim().split(' ');
    let longitud = 0;
    for (let i = 0; i < separarTexto.length; i++) {
      longitud = longitud + separarTexto[i].length;
    }
    return parseFloat((longitud/separarTexto.length).toFixed(2)); //.toFixed(2) que quede con solo dos decimales.
  },
};

export default analyzer;