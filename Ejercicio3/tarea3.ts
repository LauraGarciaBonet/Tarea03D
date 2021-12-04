class Electrodomestico {

    private _price:number = 100;
    private _color:string = "blanco";
    private _consumo:string = "F";
    private _weight:number = 5;
    

    constructor(price:number,weight:number,color?:string,consumo?:string){
        this._price=price;
        this._weight=weight;
        this._color= this.compColor(color);
        this._consumo = this.compCons(consumo);

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

    public get color():string {
        return this._color;
    }

    public get consumo():string{
        return this._consumo;
    }

    compColor(color:string):string{

        switch(color) {
            case "blanco"|| "BLANCO" || "Blanco":return color;
            break;
            case "negro" || "NEGRO" || "Negro":return color;
            break;
            case "rojo" || "ROJO" || "Rojo":return color;
            break;
            case "azul" || "AZUL" || "Azul":return color;
            break;
            case "gris" || "GRIS" || "Gris":return color;
            break;
            default: return this._color;
        }

    }

    compCons(consumo:string):string{

        
        switch(consumo) {
            case "A"|| "a" : return consumo;
            break;
            case "B" || "b" :return consumo;
            break;
            case "C" || "c" :return consumo;
            break;
            case "D" || "d" :return consumo;
            break;
            case "E" || "e" :return consumo;
            break;
            case "F" || "f" :return consumo;
            break;
            default: return this._consumo;
        }

    }
        
    
}
// atributos: precio base, color, consumo energetico(A-f) y peso. Indica que se podran heredar
// por defecto; colo:blanco, consumo:F, precio:100, peso 5Kg. Usar constantes para ello
// colores disponibles blanco, negro, rojo,azul, gris. Sin importar mayusc. y minusc.
// const. por defecto, precio y peso resto por defecto, todos los atributos.
// metodos: get de todos. comprobarconsumo(char letra) letra correcta, sino usara letra por defecto. Se invoca al crear objeto y no será visible.
// comprobarColor(string color) color correcto, sino usa por defecto. Se invoca al crear obj y no sera visible.
// precioFinal(). segun el consumo y/o el peso aumenta su precio.

//PRUEBAS
const microondas = new Electrodomestico(50, 7);
console.log(microondas);

const lavaplatos = new Electrodomestico(700, 20, "gris", "h");
console.log(lavaplatos);