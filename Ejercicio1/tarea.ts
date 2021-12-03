class Persona{
    private _nombre:string;
    private _edad:number;
    private _dni:string=this.generaDni();
    private _gender:string='H';
    private _peso:number=54;
    private _altura:number=1.70;

    constructor(nombre:string, edad:number,gender:string,dni?:string, peso?:number,altura?:number){
            this._nombre=nombre;
            this._edad=edad;
            this._gender=gender;  
    }
    //Los parametros por defecto no pueden incluirse en el constructor.

    public set nombre(_nombre:string){
        this._nombre=_nombre;
    }
    public set edad(_edad:number){
        this._edad=_edad;
    }
    public set gender(_gender:string){
        this._gender=_gender;
    }
    // public set dni(_dni:string){
    //     this._dni=_dni;
    // } Ya no es necesario el set ni el get porque se genera con la funcion generaDni.
    public set peso(_peso:number){
        this._peso=_peso;
    }
    public set altura(_altura:number){
        this._altura=_altura;
    }

    public get nombre():string {
        return this._nombre;
    }
    public get edad():number{
        return this._edad;
    }
    public get gender():string{
        return this._gender;
    }
    // public get dni(): string {
    //   return this._dni;
    // }
    public get peso(): number {   
        return this._peso;
    }
    public get altura(): number {
        return this._altura;
    }
    calcularImc():number{
        const VALUE:number= this._peso/(this._altura*this._altura)
        if(VALUE < 20){
            return -1;
        }else if(VALUE >= 20 && VALUE<= 25){
            return 0;
        }else{
            return 1;
        }
    }
    esMayorDeEdad():boolean{
        if(this._edad >=18){
            return true;
        }else{
            return false;
        }
    }
    comprobarSexo(gender: string):string{
        if(this._gender === gender){
            return gender;
        }else{
            return 'H';
        }
    }
    toString():string{
        return `Su nombre es: ${this._nombre} tiene ${this._edad} años su dni es ${this._dni}, es ${this._gender} pesa ${this._peso} y mide ${this.altura}`
    }
    generaDni():string{  
        let stringDni:string='';
        for (let i= 0; i<8; i++) {
        const random= (Math.round(Math.floor(Math.random() * (9 - 0)) + 0));
        stringDni+=random;
        }
    return stringDni;
    }
    
}

let person= new Persona('barbara', 15, 'M');
//laura.dni='7tjud843i4kfi'
// laura.altura=1.50;
// laura.peso=50;

console.log(person.calcularImc())
console.log(person.esMayorDeEdad())
console.log(person.comprobarSexo('M'))
console.log(person.toString())
console.log(person.generaDni())