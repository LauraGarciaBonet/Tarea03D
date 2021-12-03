class Electrodomestico {
    constructor(price, weight, color, consumo) {
        this._price = 100;
        this._color = "blanco";
        this._consumo = "F";
        this._weight = 5;
        this._price = price;
        this._weight = weight;
        this._color = this.compColor(color);
        this._consumo = this.compCons(consumo);
    }
    set price(_price) {
        this._price = _price;
    }
    set weight(_weight) {
        this._weight = _weight;
    }
    get price() {
        return this._price;
    }
    get weight() {
        return this._weight;
    }
    get color() {
        return this._color;
    }
    get consumo() {
        return this._consumo;
    }
    compColor(color) {
        switch (color) {
            case "blanco" || "BLANCO" || "Blanco":
                return color;
                break;
            case "negro" || "NEGRO" || "Negro":
                return color;
                break;
            case "rojo" || "ROJO" || "Rojo":
                return color;
                break;
            case "azul" || "AZUL" || "Azul":
                return color;
                break;
            case "gris" || "GRIS" || "Gris":
                return color;
                break;
            default:
                return this._color;
                break;
        }
    }
    compCons(consumo) {
        switch (consumo) {
            case "A" || "a":
                return consumo;
                break;
            case "B" || "b":
                return consumo;
                break;
            case "C" || "c":
                return consumo;
                break;
            case "D" || "d":
                return consumo;
                break;
            case "E" || "e":
                return consumo;
                break;
            case "F" || "f":
                return consumo;
                break;
            default:
                return this._consumo;
                break;
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
