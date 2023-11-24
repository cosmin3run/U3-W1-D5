var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.unaRicarica = function (e) {
        var ricarica = e;
        this.carica = this.carica + ricarica;
        return this.carica;
    };
    User.prototype.minutiDurata = function (e) {
        var minuti = e;
        this.carica = this.carica - (minuti * 0.20);
        this.numeroChiamate = this.numeroChiamate + 1;
        return "numero chiamate ".concat(this.numeroChiamate, ", ").concat(this.carica);
    };
    User.prototype.numero404 = function () {
        return this.carica;
    };
    User.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    User.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return User;
}());
var user1 = new User(0, 0);
console.log('ricarica 1', user1.unaRicarica(12));
console.log('ricarica 2', user1.unaRicarica(5));
console.log('ricarica 3', user1.unaRicarica(15));
console.log('1 chiamata 10 min', user1.minutiDurata(10));
console.log('2 chiamata 20 min', user1.minutiDurata(20));
console.log('3 chiamata 15 min', user1.minutiDurata(15));
console.log('ricarica 4', user1.unaRicarica(15));
console.log(user1.numero404());
console.log(user1.getNumeroChiamate());
user1.azzeraChiamate();
console.log(user1.getNumeroChiamate());
