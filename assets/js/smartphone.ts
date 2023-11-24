let ricarica = document.getElementById('ricarica') as HTMLInputElement;
let ricaricaBtn = document.getElementById('ricarica-btn') as HTMLAnchorElement
let durata = document.getElementById('durata') as HTMLInputElement
let durataBtn = document.getElementById('durata-btn') as HTMLAnchorElement
let azzeraBtn = document.getElementById('azzera-btn') as HTMLAnchorElement
let nrChiamtate = document.getElementById('nr-chiamate') as HTMLParagraphElement
let creditoDisponibile = document.getElementById('credito-disponibile') as HTMLParagraphElement






interface Smartphone {
  carica: number;
  numeroChiamate: number;
}

class RandomUser implements Smartphone {
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
    return this.carica.toFixed(2)
}
getNumeroChiamate():any {
    return this.numeroChiamate
}
azzeraChiamate(): void {
    this.numeroChiamate = 0
    
}
}


let daDeGi = new RandomUser(0, 0)


ricaricaBtn?.addEventListener('click', function () {
  daDeGi.unaRicarica(Number(ricarica.value))
  creditoDisponibile.innerText = `Il suo credito è di ${daDeGi.numero404()} €`
  ricarica.value = ""
})

durataBtn.addEventListener('click', function () {
  daDeGi.minutiDurata(Number(durata.value))

  nrChiamtate.innerText = `Lei ha effettuato ${daDeGi.getNumeroChiamate()} chiamate`
  if (daDeGi.getNumeroChiamate() === 0) {

  }
  creditoDisponibile.innerText = `Il suo credito è di ${daDeGi.numero404()} €`
  durata.value = ""
})

azzeraBtn.addEventListener('click', function() {
  daDeGi.azzeraChiamate()
  nrChiamtate.innerText = `Le chiamate sono state azzerate`
})







let user1 = new RandomUser(0, 0)
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
