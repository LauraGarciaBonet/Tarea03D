class Persona {
    constructor(nombre, edad, gender, dni, peso, altura) {
        this._dni = this.generaDni();
        this._gender = 'H';
        this._peso = 54;
        this._altura = 1.70;
        this._nombre = nombre;
        this._edad = edad;
        this._gender = gender;
    }
    //Los parametros por defecto no pueden incluirse en el constructor.
    set nombre(_nombre) {
        this._nombre = _nombre;
    }
    set edad(_edad) {
        this._edad = _edad;
    }
    set gender(_gender) {
        this._gender = _gender;
    }
    // public set dni(_dni:string){
    //     this._dni=_dni;
    // } Ya no es necesario el set porque se genera con la funcion generaDni.
    set peso(_peso) {
        this._peso = _peso;
    }
    set altura(_altura) {
        this._altura = _altura;
    }
    get nombre() {
        return this._nombre;
    }
    get edad() {
        return this._edad;
    }
    get gender() {
        return this._gender;
    }
    get dni() {
        return this._dni;
    }
    get peso() {
        return this._peso;
    }
    get altura() {
        return this._altura;
    }
    calcularImc() {
        const VALUE = this._peso / (this._altura * this._altura);
        if (VALUE < 20) {
            return -1;
        }
        else if (VALUE >= 20 && VALUE <= 25) {
            return 0;
        }
        else {
            return 1;
        }
    }
    esMayorDeEdad() {
        if (this._edad >= 18) {
            return "Es mayor de edad";
        }
        else {
            return "No es mayor de edad";
        }
    }
    comprobarSexo(gender) {
        if (this._gender === gender) {
            return gender;
        }
        else {
            return 'H';
        }
    }
    toString() {
        return `Su nombre es: ${this._nombre} tiene ${this._edad} años su dni es ${this._dni}, es ${this._gender} pesa ${this._peso} y mide ${this.altura}`;
    }
    generaDni() {
        let stringDni = '';
        for (let i = 0; i < 8; i++) {
            const random = (Math.round(Math.floor(Math.random() * (9 - 0)) + 0));
            stringDni += random;
        }
        return stringDni;
    }
}
//PARTE 2 EJERCICIO
//OBTENEMOS DATOS DE PERSONA 1 POR PROMPT
//persona 1
const nombreP1 = prompt("Persona 1 - ¿Cómo te llamas?");
const edadP1 = parseInt(prompt("¿Persona 1 - ¿Qué edad tienes?"));
const generoP1 = prompt("Persona 1 - ¿Cuál es tu género?");
const pesoP1 = Number(prompt("Persona 1 - ¿Cuánto pesas?"));
const alturaP1 = Number(prompt("Persona 1 - ¿Cuánto mides?"));
/*Creamos objeto PERSONA1.
Las propiedades que no son por defecto las pasamos por el constructor
y el resto (peso, altura) con set*/
const persona1 = new Persona(nombreP1, edadP1, generoP1);
persona1.peso = pesoP1;
persona1.altura = alturaP1;
//Mostraremos su info, si es mayor de edad y peso ideal
console.log(persona1);
alert(persona1);
console.log(persona1.esMayorDeEdad());
alert(persona1.esMayorDeEdad());
/*para mostrar el peso ideal hay que crear el mensaje, hago debajo la función "mostrarPesoIdeal"
para no repetir código y que sirva a todas las personas que vamos a crear*/
function mostrarPesoIdeal(imc) {
    if (imc === -1) {
        return "Estás por debajo de tu peso ideal";
    }
    else if (imc === 0) {
        return "Estás en tu peso ideal";
    }
    else {
        return "Tienes sobrepeso";
    }
}
//Mostramos peso ideal
console.log(mostrarPesoIdeal(persona1.calcularImc()));
alert(mostrarPesoIdeal(persona1.calcularImc()));
//OBTENEMOS nombre, edad y género DE PERSONA 2 POR PROMPT
const nombreP2 = prompt("Persona 2 ¿Cómo te llamas?");
const edadP2 = parseInt(prompt("Persona 2- ¿Qué edad tienes?"));
const generoP2 = prompt("Persona 2- ¿Cuál es tu género?");
/*Creamos objeto2 y pasamos datos obtenidos del prompt a través del constructor.
El resto serán los que vienen por defecto en la clase Persona.*/
const persona2 = new Persona(nombreP2, edadP2, generoP2);
//Mostraremos su info, si es mayor de edad y peso ideal
console.log(persona2);
alert(persona2);
console.log(persona2.esMayorDeEdad());
alert(persona2.esMayorDeEdad());
console.log(mostrarPesoIdeal(persona2.calcularImc()));
alert(mostrarPesoIdeal(persona2.calcularImc()));
//Creamos objeto 3. Esta vez meteremos los datos a mano por aquí, primero los obligados por constructor y luego el resto por set.
const persona3 = new Persona("María", 24, "M");
persona3.altura = 1.65;
persona3.peso = 62;
//Mostraremos su info, si es mayor de edad y peso ideal
console.log(persona3);
alert(persona3);
console.log(persona3.esMayorDeEdad());
alert(persona3.esMayorDeEdad());
console.log(mostrarPesoIdeal(persona3.calcularImc()));
alert(mostrarPesoIdeal(persona3.calcularImc()));
//let person= new Persona('barbara', 15, 'M');
//laura.dni='7tjud843i4kfi'
// laura.altura=1.50;
// laura.peso=50;
// console.log(person.calcularImc())
// console.log(person.esMayorDeEdad())
// console.log(person.comprobarSexo('M'))
// console.log(person.toString())
// console.log(person.generaDni())
