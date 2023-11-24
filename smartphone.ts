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
  unaRicarica(e:number): any {
    let ricarica = e
    this.carica = this.carica + ricarica
    return this.carica
  }
minutiDurata(e:number): any {
    let minuti = e
    this.carica = this.carica - (minuti * 0.20)
    this.numeroChiamate = this.numeroChiamate + 1
return `numero chiamate ${this.numeroChiamate}, ${this.carica}` 
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
console.log('ricarica 1', user1.unaRicarica(12))
console.log('ricarica 2', user1.unaRicarica(5))
console.log('ricarica 3', user1.unaRicarica(15))
console.log('1 chiamata 10 min', user1.minutiDurata(10));
console.log('2 chiamata 20 min', user1.minutiDurata(20));
console.log('3 chiamata 15 min', user1.minutiDurata(15));
console.log('ricarica 4', user1.unaRicarica(15))
console.log(user1.numero404())
console.log(user1.getNumeroChiamate())
user1.azzeraChiamate()
console.log(user1.getNumeroChiamate())