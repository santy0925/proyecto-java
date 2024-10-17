// Tipos de Variables
let saludo = "saludo";
const pi = 3.1416;

// Tipos de Datos

// Number
let entero = 10;
let decimal = 3.1416;

// String

let Pregunta = "¿Qué hora es?";
let Respuesta = "Son las 4";

// Boolean
let EsMayorDeEdad = true;
let TienePermiso = false;

// undefined
let valor;
console.log(valor); //underfined

// null
let nota = null;

// Tipos  de datos estructurados

//Objects
let persona = {
  Nombre: "Filimeno",
  Edad: 60,
  esTrabajador: true,
  Habilidades: {
    Produccion: 5.0,
    Empaque: 3.0,
  },
};

//camel case = Forma de nombrar nustras variables

// Array Arreglos
let numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let Frutas = ["Manzana", "Naranja", "Pera"];

//Operadores Arigméticos

//Suma +
let suma = 5 + 3; // 8
//Resta -
let Resta = 5 - 3; // 2
//Multiplicacion *
let Multiplicacion = 5 * 3; // 15
//Divicion /
let Divicion = 5 / 5; // 1
//Módulo %
let Modulo = 10 % 3; // 1 (El  resultado de la  divicion)

//Operadores de Asignación
//Igual =
let Numero = 5;
//Suma y Asigna +=
Numero += 3; // Equivale a Numero + 3 y  ahora su valoses 8
//Resta y Asigna -=
Numero -= 2; // Numero es Igual a 6

//Operadores de Comparación
//Igualdad debil ==
let Resultado = 5 == "5"; //True
//Igualdad estricta  ====
Respuesta = 5 === "5"; //False
//Diferente debil !=
Respuesta = 23 != "23"; //False
//Diferente estricta !==
Respuesta = 30 !== "50"; //True

//Mayor que > , Menor que < ,  Mayor o Igual que >= , Menor o  Igual que <=
let esMayor = 10 > 5; //True
let esMenor = 5 < 3; //False
let esMayorOigual = 10 >= 5; //True
let esMenorOigual = 10 <= 5; //False

//Operadores Logicos
// Y Logico &&
let Resultados = 5 > 3 && 17 < 10; //False
//O Logico ||
Resultados = 5 > 3 || 7 < 10; //True
//No Logico !
let esFalso = !(5 > 10); //True (Porque 5 > 10 es false, entonces !false es = True)
