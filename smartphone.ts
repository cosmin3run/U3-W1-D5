interface Smartphone {
  carica: number;
  numeroChiamate: number;
}

class User implements Smartphone {
  carica: number;
  numeroChiamate: number;
  constructor(_carica: number, _numeroChiamate: number) {
    this.carica = _carica;
    this.numeroChiamate = _numeroChiamate;
  }
 unaRicarica(e:number): void {
    this.carica = this.carica + e
  }
minutiDurata(e:number): void {
    this.carica = this.carica - (e * 0.20)
    this.numeroChiamate = this.numeroChiamate + 1
 
}
numero404(): any {
    return this.carica
}
getNumeroChiamate():any {
    return this.numeroChiamate
}
azzeraChiamate(): void {
    this.numeroChiamate = 0
}
}

let user1 = new User(0, 0)
user1.unaRicarica(12)
user1.unaRicarica(5)
user1.unaRicarica(15)
console.log('il credito è di',  user1.numero404())
user1.minutiDurata(10);
user1.minutiDurata(20);
user1.minutiDurata(15);
user1.unaRicarica(15)
console.log('il credito è di',  user1.numero404())
console.log('il numero di chiamate è', user1.getNumeroChiamate())
user1.azzeraChiamate()
console.log('il numero di chiamate è', user1.getNumeroChiamate())
