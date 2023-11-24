var ricarica = document.getElementById('ricarica');
var ricaricaBtn = document.getElementById('ricarica-btn');
var durata = document.getElementById('durata');
var durataBtn = document.getElementById('durata-btn');
var azzeraBtn = document.getElementById('azzera-btn');
var nrChiamtate = document.getElementById('nr-chiamate');
var creditoDisponibile = document.getElementById('credito-disponibile');
var RandomUser = /** @class */ (function () {
    function RandomUser(_carica, _numeroChiamate) {
        this.carica = _carica;
        this.numeroChiamate = _numeroChiamate;
    }
    RandomUser.prototype.unaRicarica = function (e) {
        this.carica = this.carica + e;
    };
    RandomUser.prototype.minutiDurata = function (e) {
        this.carica = this.carica - (e * 0.20);
        this.numeroChiamate = this.numeroChiamate + 1;
    };
    RandomUser.prototype.numero404 = function () {
        return this.carica.toFixed(2);
    };
    RandomUser.prototype.getNumeroChiamate = function () {
        return this.numeroChiamate;
    };
    RandomUser.prototype.azzeraChiamate = function () {
        this.numeroChiamate = 0;
    };
    return RandomUser;
}());
var daDeGi = new RandomUser(0, 0);
ricaricaBtn === null || ricaricaBtn === void 0 ? void 0 : ricaricaBtn.addEventListener('click', function () {
    daDeGi.unaRicarica(Number(ricarica.value));
    creditoDisponibile.innerText = "Il suo credito \u00E8 di ".concat(daDeGi.numero404(), " \u20AC");
    ricarica.value = "";
});
durataBtn.addEventListener('click', function () {
    daDeGi.minutiDurata(Number(durata.value));
    nrChiamtate.innerText = "Lei ha effettuato ".concat(daDeGi.getNumeroChiamate(), " chiamate");
    if (daDeGi.getNumeroChiamate() === 0) {
    }
    creditoDisponibile.innerText = "Il suo credito \u00E8 di ".concat(daDeGi.numero404(), " \u20AC");
    durata.value = "";
});
azzeraBtn.addEventListener('click', function () {
    daDeGi.azzeraChiamate();
    nrChiamtate.innerText = "Le chiamate sono state azzerate";
});
var user1 = new RandomUser(0, 0);
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
