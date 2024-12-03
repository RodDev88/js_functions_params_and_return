//Defino función con parametro selector (espera recibir un selector CSS como # .algo)

function getBkgColor(selector){

    //creo variable ele que guardara el elemento encontrado por el selector del querySelector
    ele = document.querySelector(selector)

    //return: devuelve el color como resultado de la operación
    //ele.style.backgroundColor: Obtiene el valor del color de fondo
    // del elemento encontrado, siempre y cuando esté 
    //definido en el atributo style del elemento.


   return ele.style.backgroundColor
   }


   //llamamos a la función con el selector "#ele-1" 
   //en console ponenos la siguiente línea de código

 //getBkgColor("#ele-1");


//Formas de renderizar este ejercicio

//Vía console log automatico
//console.log(getBkgColor("#ele-2")); 

//conviertiendo el valor de retorno en una variable e impresion en alert

//const color = getBkgColor("#ele-1"); // Guardamos el resultado en la variable "color".
//alert(color);//

//renderizando en la página con innerText

document.querySelector("#ele-1").innerText = getBkgColor("#ele-2");  // Esto cambiará el texto de #el-2 a "red".

