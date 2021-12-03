class Electrodomésticos{
    _price:number;
    _color:string;//this.compColor();//blanco por defecto
    _consumo:string;//this.compCons(); //por defecto'F';
    _weight:number;

    constructor(price:number,weight:number,color?:string,consumo?:string){
        this._price=price;
        this._weight=weight
    }

    public set price(_price:number){
        this._price=_price;
    }
    public set weight(_weight:number){
        this._weight=_weight;
    }

    public get price():number {
        return this._price;
    }
    public get weight():number{
        return this._weight;
    }

    compColor(color:string):string{
        return color;
    }
    compCons(consumo:string):string{
        return consumo;
    };
}
// atributos: precio base, color, consumo energetico(A-f) y peso. Indica que se podran heredar
// por defecto; colo:blanco, consumo:F, precio:100, peso 5Kg. Usar constantes para ello
// colores disponibles blanco, negro, rojo,azul, gris. Sin importar mayusc. y minusc.
// const. por defecto, precio y peso resto por defecto, todos los atributos.
// metodos: get de todos. comprobarconsumo(char letra) letra correcta, sino usara letra por defecto. Se invoca al crear objeto y no será visible.
// comprobarColor(string color) color correcto, sino usa por defecto. Se invoca al crear obj y no sera visible.
// precioFinal(). segun el consumo y/o el peso aumenta su precio.