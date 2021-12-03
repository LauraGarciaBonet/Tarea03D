class Electrodomésticos {
    constructor(price, weight, color, consumo) {
        this._price = price;
        this._weight = weight;
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
    compColor(color) {
        return color;
    }
    compCons(consumo) {
        return consumo;
    }
    ;
}
// atributos: precio base, color, consumo energetico(A-f) y peso. Indica que se podran heredar
// por defecto; colo:blanco, consumo:F, precio:100, peso 5Kg. Usar constantes para ello
// colores disponibles blanco, negro, rojo,azul, gris. Sin importar mayusc. y minusc.
// const. por defecto, precio y peso resto por defecto, todos los atributos.
// metodos: get de todos. comprobarconsumo(char letra) letra correcta, sino usara letra por defecto. Se invoca al crear objeto y no será visible.
// comprobarColor(string color) color correcto, sino usa por defecto. Se invoca al crear obj y no sera visible.
// precioFinal(). segun el consumo y/o el peso aumenta su precio.
