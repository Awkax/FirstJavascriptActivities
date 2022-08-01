/*NOTA: He ido realizando los ejercicios por orden de aprendizaje así que si hay alguna cosa que podría estar mejor (aunque el programa funcione) y más adelante sí que lo he hecho mejor es porque a la hora de hacer el primero no lo sabía (por ejemplo que salga del programa al pulsar "Cancelar"). Igualmente he intentado revisar y corregir esos fallos.*/

/*------Actividades página 23------*/
function A() {/*"Se piden dos números reales al usuario por teclado y el sistema calculará y mostrará el resultado de la suma, resta, multiplicación y división."*/
	var num1, num2 = 0;
	num1 = Number(prompt("Introduce el primer número: "));
	num2 = Number(prompt("Introduce el segundo número: "));
	alert("La suma es: " + (num1 + num2) + "\n" + "La resta es: " + (num1 - num2) + "\n" + "La multiplicación es: " + (num1 * num2) + "\n" + "Y la división es: " + (num1 / num2));
}

function B() {/*"Modifique el software anterior de modo que se muestre al usuario un menu con opciones para seleccionar la operación a realizar. En función de la operación seleccionada se calculará y mostrará al usuario el resultado de la operación"*/
	var x, y, selec = 0;
	x = Number(prompt("Introduce el primer número: "));
	y = Number(prompt("In troduce el segundo número: "));
	if (document.getElementById("seleccion").value == "s") {
		alert("La suma de los números es: " + (x + y));
	} else if (document.getElementById("seleccion").value == "r") {
		alert("La resta de los números es: " + (x - y))
	} else if (document.getElementById("seleccion").value == "m") {
		alert("La multiplicación de los números es: " + (x * y));
	} else if (document.getElementById("seleccion").value == "d") {
		alert("La división de los números es: " + (x / y));
	} else {
		alert("Tienes que seleccionar una opción!!");
	}
}

function C() {/*"Se pide al usuario un carácter y el sistema mostrará si el carácter es vocal o no"*/
	var car, vocal = null;
	vocal = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
	car = prompt("Introduce el carácter: ");
	if (vocal.includes(car)) {
		alert("Es una vocal!");
	} else if (car == "") {
		alert("Hay que introducir algo!");
	} else if (car == 'y' || car == 'Y') {
		alert("Depende de a quién le preguntes es una vocal o no :p")
	} else {
		alert("No es una vocal!");
	}
}

function E() {/*"Se pide al usuario tres números. Los dos primeros corresponden al límite inferior y límite superior de un rango. Utilizando el tercer número se debe comprobar si éste se encuentra entre el límite inferior y superior. En caso de que se encuentre en el rango se mostrará un mensaje "El número está en el rango" en caso contrario se mostrará el mensaje "El número no está en el rango""*/
	var num1, num2, num3 = 0;
	num1 = Number(prompt("Introduce el número menor del rango: "));
	num2 = Number(prompt("Introduce el número mayor del rango: "));
	num3 = Number(prompt("Introduce el número que quieras ver si está en el rango: "));
	if (num3 >= num1 && num3 <= num2) {
		alert("El número está dentro del rango.");
	} else {
		alert("El número NO está dentro del rango.");
	}
}

function G() {/*"Se solicitará a un usuario un número entero correspondiente al número de artículos vendidos, posteriormente se solicitará el precio de cada unidad del producto. El sistema calculará el coste total de la operación teniendo en cuenta que al precio calculado se le debe aumentar el 21% correspondiente al IVA."*/
	var num, precio, coste_total, total_IVA, importe = 0;
	var IVA = 0.21;
	num = prompt("Introduce el número de artículos que te llevas: ");
	precio = prompt("Introduce el precio de los artículos: ");
	coste_total = parseInt(num) * parseInt(precio);
	total_IVA = coste_total * IVA;
	importe = coste_total + total_IVA;
	alert("Te llevas " + num + " artículos que cuestan " + precio + "€ cada uno." + "\n" + "El importe bruto son: " + coste_total + "€" + "\n" + "El IVA es un " + (IVA * 100) + "%" + "\n" + "El coste final con el IVA incluido sería de: " + importe + "€");
}

function H() {/*"Se piden cinco números al usuario y se mostrará el promedio de la operación."*/
	var num1, num2, num3, num4, num5, promedio = 0;
	num1 = Number(prompt("Este programa usa 5 números y hace el promedio. \n Introduce el primer número: "));
	num2 = Number(prompt("Introduce el segundo número: "));
	num3 = Number(prompt("Introduce el tercer número: "));
	num4 = Number(prompt("Introduce el cuarto número: "));
	num5 = Number(prompt("Introduce el quinto número: "));
	promedio = (num1 + num2 + num3 + num4 + num5) / 5;
	alert("El promedio de los números es: " + promedio)
}

/*-----Actividades página 97-----*/
function tresDos() {/*"Construye una página Web en la que se pida el precio de un artículo y la cantidad de productos que toma el cliente. Debe mostrar el coste a abonar por el comprador. Teniendo en cuenta que debe separar el precio con y sin IVA."*/
	var num, precio, coste_total, total_IVA, importe = 0;
	var IVA = 0.21;
	precio = prompt("Introduce el precio del artículo: ");
	num = prompt("Introduce la cantidad de artículos que te llevas: ");
	coste_total = parseInt(num) * parseInt(precio);
	total_IVA = coste_total * IVA;
	importe = coste_total + total_IVA;
	alert("Tus artículos cuestan " + precio + "€ cada uno (son " + num + " artículos). \n El coste final SIN IVA incluido sería de: " + coste_total + "€" + " \n El coste final con el IVA incluido sería de: " + importe + "€");
}

function tresTres() {/*"De un trabajador se conoce su sueldo base y los años de antigüedad. Se debe desarrollar una aplicación que lea los datos de entrada y genere la siguiente salida:(1. plus de 20%, 2. plus de 5%, 3. sin plus)"*/
	var sueldo, anyos = 0;
	sueldo = parseInt(prompt("Introduce el sueldo base del trabajador en euros: "));
	anyos = parseInt(prompt("Introduce los años de antigüedad del trabajador: "));
	if (sueldo < 500 && anyos > 10) {
		alert("Tienes un plus del 20%!")
	} else if (sueldo < 500 && anyos < 10) {
		alert("Tienes un plus del 5%!")
	} else if (sueldo >= 500) {
		alert("No tienes plus.")
	}
}

function tresCuatro() {/*El enunciado es muy largo. Es calcular cuántos empleados (10 en principio) cobran entre 600 y mil, cuántos cobran entre 1000 y 1500 y cuántos entre 1500 y 2000.*/
	var primero = 0;
	var segundo = 0;
	var tercero = 0;
	var sueldos = 0;
	for (a = 0; a < 10; a++) {
		sueldos = (prompt("Introduce el sueldo del trabajador " + (a + 1)));
		if (sueldos == undefined || sueldos == "c" || sueldos =="C") {break;}
		sueldos = parseInt(sueldos);
		if (sueldos >= 600 && sueldos <= 1000) {
			primero++;
		} else if (sueldos > 1000 && sueldos <= 1500) {
			segundo++;
		} else if (sueldos > 1500 && sueldos <= 2000) {
			tercero++;
		} else {
			a--;
		}
	}
	alert("Hay " + primero + " empleados que cobran entre 600€ y 1000€. \n Hay " + segundo + " empleados que cobran entre 1000€ y 1500€. \n Y hay " + tercero + " empleados que cobran más de 1500€");
}

function tresCuatro2() {/*"Versión while pidiendo cuántos empleados. Versión For (para 10 empleados). Controlar las salidas con Cancelar o un dígito."*/
	var primero = 0;
	var segundo = 0;
	var tercero = 0;
	var sueldos = 0;
	var a = 0;
	var x = parseInt(prompt("¿Cuántos trabajadores hay?"));
	while (a < x) {
		sueldos = prompt("Introduce el sueldo del trabajador " + (a + 1));
		if (sueldos == undefined || sueldos == "c" || sueldos =="C") {break;}
		if (sueldos >= 600 && sueldos < 1000) {
			primero++;
		} else if (sueldos >= 1000 && sueldos <= 1500) {
			segundo++;
		} else if (sueldos > 1500 && sueldos <= 2000) {
			tercero++;
		} else if (sueldos > 000 || sueldos < 600) {
			a--;
		}
		a++;
	}
	alert("Hay " + primero + " empleados que cobran entre 600€ y 1000€. \nHay " + segundo + " empleados que cobran entre 1000€ y 1500€. \nY hay " + tercero + " empleados que cobran más de 1500€");
}

function tresCinco() {/*"Desarrollar una aplicación que permita introducir un número cualquiera (entero) y devuelva su tabla de multiplicar (solo los 10 primeros términos)."*/
	var numero, contador = 0;
	numero = parseInt(prompt("Introduce el número: "));
	while (contador <= 10) {
		document.write(numero * contador + "\n");
		contador++;
	}
}

/*-----Ejercicios de la carpeta ("Actividades y ejercicios")-----*/
function siete() {/*"Crea un programa que pida tres números y nos diga cual es el mayor."*/
	var a, b, c = 0;
	a = parseInt(prompt("Introduce el primer número: "));
	b = parseInt(prompt("Introduce el segundo número: "));
	c = parseInt(prompt("Introduce el tercer número: "));

	if (a > b && a > c && b != c) {
		alert(a + " es el mayor.")
	} else if (b > a && b > c && a != c) {
		alert(b + " es el mayor.")
	} else if (c > a && b < c && a != b) {
		alert(c + " es el mayor.")
	}

	if (a == b && b < c) {
		alert(c + " es el mayor. Además los otros dos son iguales.")
	} else if (a > b && b == c) {
		alert(a + " es el mayor. Además los otros dos son iguales.")
	} else if (a == c && c < b) {
		alert(b + " es el mayor. Además los otros dos son iguales.")
	} else if (a == c && c == b) {
		alert("Los tres números son iguales.")
	}

	if (a > c && a == b) {
		alert("Los números " + a + " y " + b + " son los mayores.");
	} else if (a > b && a == c) {
		alert("Los números " + a + " y " + c + " son los mayores.");
	} else if (b > a && b == c) {
		alert("Los números " + b + " y " + c + " son los mayores.");
	}
}

function once() {/*"Crea un programa que pida un numero y su exponente. Nos debe dar las soluciones acumuladas hasta llegar al final."*/
	var base, exponiente, potencia = 0;
	var i = 1;
	base = parseInt(prompt("Introduce un número: "));
	exponiente = parseInt(prompt("Introduce el exponente: "));
	potencia = base;
	while (i < exponiente) {
		potencia *= base;
		alert(potencia);
		i++;
	}
	alert("El resultado final es: " + potencia);
}
/*-----Actividad frutas-----*/
function frutas() {/*"Construir un vector de 7 posiciones, pedir 7 frutas, almacenarlas en cada posición y pedir al usuario que posición quiere consultar y visualizarlo por pantalla. (tipo juego o adivinanza)"*/
	var fruta = [];
	var posicion;
	for (i = 0; i < 7; i++) {
		fruta[i] = prompt("Introduce la fruta número " + (i + 1));
	}
	posicion = parseInt(prompt("Qué fruta deseas saber?"));
	alert("La fruta que has elegido es: " + fruta[posicion - 1]);
}
/*-----Actividad ruedas-----*/
function ruedas() {/*"Crea una página WEB para un TALLER para calcular si la rueda que pretenden poner a los vehículos es correcta.
Deberá tener un script que pida al usuario el diámetro de una rueda y su grosor (en metros) 
y a través de condicionales if realice las siguientes operaciones:

a) Si el diámetro es superior a 1.4 debe mostrarse el mensaje 
“La rueda es para un vehículo grande”. Si es menor o igual a 1.4 pero mayor que 0.8 debe mostrarse
 el mensaje “La rueda es para un vehículo mediano”. 
Si no se cumplen ninguna de las condiciones anteriores debe mostrarse por pantalla
 el mensaje “La rueda es para un vehículo pequeño”.

b) Si el diámetro es superior a 1.4 con un grosor inferior a 0.4, 
ó si el diámetro es menor o igual a 1.4 pero mayor que 0.8, 
con un grosor inferior a 0.25, deberá mostrarse el mensaje 
“El grosor para esta rueda es inferior al recomendado”

NOTAS:
1- Deberéis usar isNaN (Is Not a Number) para verificar si es número o no el dato introducido.
2- Controlar QUE NO PUEDA DEJAR VACÍO DIÁMETRO NI GROSOR NI QUE PUEDA INTRODUCIR UN TEXTO, en cuyos casos se deberán
emitir los mensajes correspondientes."*/
	var diametro, grosor;
	diametro = document.getElementById("diametro").value;
	grosor = document.getElementById("grosor").value;
	if (diametro == "" || grosor == "") {
		alert("No se pueden dejar campos vacíos.");
	}
	if (isNaN(diametro) || isNaN(grosor)) {
		alert("Hay que introducir números!");
	}
	diametro = parseFloat(diametro);
	grosor = parseFloat(grosor);
	if ((diametro > 1.4 && grosor < 0.4) || ((diametro <= 1.4 && diametro > 0.8) && grosor < 0.25)) {
		alert("El grosor para esta rueda no es el recomendado.");
	}
	if (diametro > 1.4) {
		document.getElementById("respuesta").innerHTML="<h2>Esta rueda es para un vehículo <strong>grande</strong>.</h2>";
	} else if (diametro <= 1.4 && diametro > 0.8) {
		document.getElementById("respuesta").innerHTML="<h2>Esta rueda es para un vehículo <strong>mediano</strong>.</h2>";
	} else if (diametro <= 0.8 && diametro > 0) {
		document.getElementById("respuesta").innerHTML="<h2>Esta rueda es para un vehículo <strong>pequeño</strong>.</h2>";
	}

}

function ruedasWhile() {/*"Modificar el ejercicio IF_RUEDAS con un bucle WHILE y que se pueda salir del programa apretando Cancelar o introduciendo 0. Utilitzar la sentencia BREAK."*/

	var diametro, grosor;
	var i = 0;
	while (i == 0) {
		diametro = prompt("Introduce el diámetro de la rueda (en metros): ");
		if (diametro == 0 || diametro == undefined) {break;}
		grosor = prompt("Introduce el grosor: ");
		if (grosor == 0 || grosor == undefined) {break;}
		if (diametro == "" || grosor == "") {
			alert("No se pueden dejar campos vacíos.");
		}
		if (isNaN(diametro) || isNaN(grosor)) {
			alert("Hay que introducir números!");
		}
		diametro = parseFloat(diametro);
		grosor = parseFloat(grosor);
		if ((diametro > 1.4 && grosor < 0.4) || ((diametro <= 1.4 && diametro > 0.8) && grosor < 0.25)) {
			alert("El grosor para esta rueda no es el recomendado.");
		}
		if (diametro > 1.4) {
			alert("La rueda es para un vehículo grande.");
		} else if (diametro <= 1.4 && diametro > 0.8) {
			alert("La rueda es para un vehículo mediano.")
		} else if (diametro <= 0.8 && diametro > 0) {
			alert("La rueda es para un vehículo pequeño.")
		}
	}
}
