# CLASE JS 04 Functions

## Ejercicio Funciones: Fx, parameters and return

Nos piden crear una función llamada getBkgColor para obtener el color de fondo de un elemento web. O sea debe buscar un elemento a partir de un selector (#id o .class) entregado y debe devolver el color de fondo del elemento.

## Clarificación de instrucciones y paso a paso

1. Crear elementos html

- Dos divs
- Un id único para cada ele (ele-1 y ele-2)
- Una clase común: .element
- Colores de fondo definidos mediante inline style (red y yellow).

2. Crear función getBkgColor

- Reciba com parametro un selector CSS (como un #id o .class).
- Usa este selector para buscar elemento en el DOM.
- Devuelva el color de fondo del elemento encontrado.

## Conocimientos de esta clase/ejercicio

### Diferencias entre parametros y argumentos

- Parámetro: Es la variable "de entrada" que defines al crear la función. Es como un "espacio reservado" que recibirá valores cuando llames a la función.
  Ejemplo:

`function getBkgColor(selector) //selector es el parametro{
    //bloque de código
}`

- Argumento: Es el valor real que proporcionas cuando llamas a la función. Este valor se asigna al parámetro.

`getBkgColor("#el-1"); // "#el-1" es el argumento.
`
