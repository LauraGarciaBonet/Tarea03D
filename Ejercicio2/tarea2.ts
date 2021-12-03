class Serie{
    _title:string;
    private _seasons:number=3;
    private _delivered:boolean=false;
    _gender:string;
    _creator:string;
    
    
    constructor(title:string, creator:string, seasons?:number,delivered?:boolean,gender?:string){
        this._title=title;
        this._creator=creator; 
    }

    public set title(_title:string){
        this._title=_title;
    }
    public set creator(_creator:string){
        this._creator=_creator;
    }
    public set seasons(_seasons:number){
        this._seasons=_seasons;
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
}
// constructor por defecto
// constructor con el titulo y creador, el resto por defecto
// constructor con todos los atributos excepto entregado

// metodos:
// get y set de todos los atributos excepto entregado
// sobre escribe los metodos toString.

let series= new Serie('Outlander', 'Ronald Moore');
console.log(series);
console.log(series.seasons);

//let variable:number=(variable as string).length;