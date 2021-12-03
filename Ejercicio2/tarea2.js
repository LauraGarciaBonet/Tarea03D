class Serie {
    constructor(title, creator, seasons, delivered, gender) {
        this._seasons = 3;
        this._delivered = false;
        this._title = title;
        this._creator = creator;
    }
    set title(_title) {
        this._title = _title;
    }
    set creator(_creator) {
        this._creator = _creator;
    }
    set seasons(_seasons) {
        this._seasons = _seasons;
    }
    get title() {
        return this._title;
    }
    get creator() {
        return this._creator;
    }
    get seasons() {
        return this._seasons;
    }
}
// constructor por defecto
// constructor con el titulo y creador, el resto por defecto
// constructor con todos los atributos excepto entregado
// metodos:
// get y set de todos los atributos excepto entregado
// sobre escribe los metodos toString.
let series = new Serie('Outlander', 'Ronald Moore');
console.log(series);
console.log(series.seasons);
//let variable:number=(variable as string).length;
