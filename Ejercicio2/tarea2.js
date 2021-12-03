class Serie {
    constructor(title, creator, seasons, delivered, gender) {
        this._seasons = 3;
        this._delivered = false;
        this._title = title;
        this._creator = creator;
    }
    set title(title) {
        this._title = title;
    }
    set creator(creator) {
        this._creator = creator;
    }
    set seasons(seasons) {
        this._seasons = seasons;
    }
    set gender(gender) {
        this._gender = gender;
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
    get gender() {
        return this._gender;
    }
    toString() {
        return `El nombre de la serie es : ${this._title},  tiene ${this._seasons} temporadas y su creador es ${this._creator}. Su género es ${this._gender}.`;
    }
}
// constructor por defecto
// constructor con el titulo y creador, el resto por defecto
// constructor con todos los atributos excepto entregado
// metodos:
// get y set de todos los atributos excepto entregado
// sobre escribe los metodos toString.
let series = new Serie('Outlander', 'Ronald Moore');
series.gender = "Acción";
console.log(series);
console.log(series.seasons);
console.log(series.toString());
series.seasons = 4;
console.log(series.seasons);
//let variable:number=(variable as string).length;
