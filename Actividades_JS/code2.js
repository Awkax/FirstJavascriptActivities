function notas() {
	/*"Pide una nota (número). Muestra la calificación según la nota:
		
	 	0-3: Muy 	deficiente		3-5: Insuficiente 	
		5-6: Suficiente  6-7: Bien	7-9: Notable        9-10: 	Sobresaliente

	Controlar que no puedan introducir texto, que la nota no sea inferior a 0 ni superior a 10. Salir del programa con Cancelar.
	"*/
	var alumnos, nota;
	var i = 0;
	alumnos = parseInt(prompt("¿Cuántos alumnos hay?"));
	do {
		nota = prompt("Qué nota tiene el alumno " + (i + 1) + "?");
		if (nota == undefined) {
			break;
		}
		if (nota == "") {
			alert("No se pueden dejar campos vacíos.");
			i--;
		}
		if (nota < 0 || nota > 10) {
			alert("Tiene que estar en el rango(0-10)");
			i--;
		}
		if (isNaN(nota)) {
			alert("Tiene que ser un número!");
			i--;
		}
		nota = parseFloat(nota);
		if (nota >= 0 && nota < 3) {
			alert("Resultado de la nota: Muy deficiente.");
		} else if (nota >= 3 && nota < 5) {
			alert("Resultado de la nota: Insuficiente");
		} else if (nota >= 5 && nota <= 6) {
			alert("Resultado de la nota: Suficiente");
		} else if (nota > 6 && nota <= 7) {
			alert("Resultado de la nota: Bien");
		} else if (nota > 7 && nota < 9) {
			alert("Resultado de la nota: Notable");
		} else if (nota >= 9 && nota <= 10) {
			alert("Resultado de la nota: Sobresaliente");
		}
		i++;
	}
	while (i < alumnos);
}

function concatena() {
	/*" Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -."*/
	var texto;
	var cosa = [];
	var i = 0;
	do {
		texto = prompt("Introduce el texto: ");
		cosa[i] = texto;
		i++;
	}
	while (texto != undefined);
	for (a = 0; a < (i - 1); a++) {
		document.write(cosa[a] + "-");
	}
}

function dni() {
	/*"Realizar una página con un script que calcule el valor de la letra de un número de DNI (hacerlo con SWITCH-CASE)"*/
	var numero, resultado, letra;
	var i = 0;
	do {
		numero = prompt("El número de tu DNI: ");
		if (isNaN(numero)) {
			alert("Tienen que ser números!");
			i--;
		}
		if (numero < 0 || numero > 99999999) {
			alert("El número no está en el rango.");
			i--;
		}
		resultado = numero % 23;
		switch (resultado) {
			case 0:
				letra = "T";
				break;
			case 1:
				letra = "R";
				break;
			case 2:
				letra = "W";
				break;
			case 3:
				letra = "A";
				break;
			case 4:
				letra = "G";
				break;
			case 5:
				letra = "M";
				break;
			case 6:
				letra = "Y";
				break;
			case 7:
				letra = "F";
				break;
			case 8:
				letra = "P";
				break;
			case 9:
				letra = "D";
				break;
			case 10:
				letra = "X";
				break;
			case 11:
				letra = "B";
				break;
			case 12:
				letra = "N";
				break;
			case 13:
				letra = "J";
				break;
			case 14:
				letra = "Z";
				break;
			case 15:
				letra = "S";
				break;
			case 16:
				letra = "Q";
				break;
			case 17:
				letra = "V";
				break;
			case 18:
				letra = "H";
				break;
			case 19:
				letra = "L";
				break;
			case 20:
				letra = "C";
				break;
			case 21:
				letra = "K";
				break;
			case 22:
				letra = "E";
				break;
		}
		if (numero != undefined) {
			alert("Tu DNI es: " + numero + "-" + letra);
		}
	}
	while (numero != undefined);
}
