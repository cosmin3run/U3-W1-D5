var User = /** @class */ (function () {
    function User(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    User.prototype.unaRicarica = function (e) {
        this.carica = this.carica + e;
    };
    User.prototype.minutiDurata = function (e) {
        this.carica = this.carica - (e * 0.20);
        this.numeroChiamate = this.numeroChiamate + 1;
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
user1.unaRicarica(12);
user1.unaRicarica(5);
user1.unaRicarica(15);
console.log('il credito è di', user1.numero404());
user1.minutiDurata(10);
user1.minutiDurata(20);
user1.minutiDurata(15);
user1.unaRicarica(15);
console.log('il credito è di', user1.numero404());
console.log('il numero di chiamate è', user1.getNumeroChiamate());
user1.azzeraChiamate();
console.log('il numero di chiamate è', user1.getNumeroChiamate());
