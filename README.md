# Što je ovo?
Ovo je source kod generatora naloga za plaćanje HUB 3A sa 2D kodom (opće uplatnice).

Ova aplikacija predstavlja nadogradnju web aplikacije [github.com/Bikonja/generator-barkoda-uplatnica](https://github.com/Bikonja/generator-barkoda-uplatnica), čiji je autor [Igor Loborec](https://github.com/Bikonja).

2D bar kod je generiran uz pomoć [biblioteke PDF417-js](https://github.com/bkuzmic/pdf417-js), čiji je autor [Boris Kuzmic](https://github.com/bkuzmic).

## Motivacija
Neke tvrtke uz svoje račune šalju uplatnice koje ne sadrže 2D kod, što onemogućuje plaćanje tih računa u Konzumu i Tisku.

Pomoću ovog generatora možete generirati uplatnicu sa 2D kodom, koju ćete moći uplatiti na blagajnama Konzuma, kioscima Tiska i slično.

## Demo
Demo ove web aplikacije možete pronaći na adresi [knee-cola.github.io/generator-opce-uplatnice/](https://knee-cola.github.io/generator-opce-uplatnice/).

# Detalji imaplementacija
## Spremanje naloga u web preglednik
Nalozi se serijaliziraju u JSON string, te bivaju spremljeni u `LocalStorage`.

## Spremanje naloga u datoteku
Nativni `<input>` za odabir datoteke ne podržava prilagodbu prikazane labele. Iz tog razloga je nativni `<input>` skriven kroz CSS, te je na njegovo mjesto dodan klasični `<button>`, koji putem JavaScripta trigerira `click` akciju na nativnom `<input>`-u.

Nativni input je skriven tako da mu je kroz CSS zadan mala dimenzija. Naime ako bi mu postavili `display: hidden;`, tada browser ne bi na njega ispravno reagirao (tako sam barem pročitao na Stack Overflow ... nisam si dato truda da testiram).

## Spremanju u PDF
Spremanje generiranog naloga u PDF nije nativno podržano. Umjesto toga korisnik može odabrati ispis u PDF (podržano unutar nekih web preglednika).

# ToDo
* provjeriti zašto duži opis plaćanja ne prolazi validaciju
* provjeriti da li generianje radi sa "HR" sufiksom u oznaci modela
* u slučaju kada 2D kod ne može biti generiran umjesto ispisa na Canvas staviti da bude prikazana neka `<html>` poruka