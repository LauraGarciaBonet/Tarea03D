class Person {
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
    // } Ya no es necesario el set ni el get porque se genera con la funcion generaDni.
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
    // public get dni(): string {
    //   return this._dni;
    // }
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
            return true;
        }
        else {
            return false;
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
let laura = new Person('barbara', 15, 'M');
//laura.dni='7tjud843i4kfi'
// laura.altura=1.50;
// laura.peso=50;
console.log(laura.calcularImc());
console.log(laura.esMayorDeEdad());
console.log(laura.comprobarSexo('M'));
console.log(laura.toString());
console.log(laura.generaDni());
