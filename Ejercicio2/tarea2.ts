class Serie{
    private _title:string;
    private _seasons:number=3;
    private _delivered:boolean=false;
    private _gender:string;
    private _creator:string;
    
    
    constructor(title:string, creator:string, seasons?:number,delivered?:boolean,gender?:string){
        this._title=title;
        this._creator=creator; 
    }

    public set title(title:string){
        this._title=title;
    }
    public set creator(creator:string){
        this._creator=creator;
    }
    public set seasons(seasons:number){
        this._seasons=seasons;
    }

    public set gender(gender:string){
        this._gender=gender;
    }
    public get title():string {
        return this._title;
    }
    public get creator():string{
        return this._creator;
    }
    public get seasons():number{
        return this._seasons;
    }
    public get gender():string{
        return this._gender;
    }

    toString():string{
        return `El nombre de la serie es : ${this._title},  tiene ${this._seasons} temporadas y su creador es ${this._creator}. Su género es ${this._gender}.`
    }

}
// constructor por defecto
// constructor con el titulo y creador, el resto por defecto
// constructor con todos los atributos excepto entregado

// metodos:
// get y set de todos los atributos excepto entregado
// sobre escribe los metodos toString.

let series= new Serie('Outlander', 'Ronald Moore');
series.gender = "Acción";
console.log(series);
console.log(series.seasons);
console.log(series.toString());
series.seasons = 4;
console.log(series.seasons);

//let variable:number=(variable as string).length;