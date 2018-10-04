# Što je ovo?
Ovo je source kod generatora naloga za plaćanje HUB 3A sa 2D kodom (opće uplatnice).

Ova aplikacija predstavlja nadogradnju web aplikacije [github.com/Bikonja/generator-barkoda-uplatnica](https://github.com/Bikonja/generator-barkoda-uplatnica), čiji je autor [Igor Loborec](https://github.com/Bikonja).

2D bar kod je generiran uz pomoć [biblioteke PDF417-js](https://github.com/bkuzmic/pdf417-js), čiji je autor [Boris Kuzmic](https://github.com/bkuzmic).

## Motivacija
Neke tvrtke uz svoje račune šalju uplatnice koje ne sadrže 2D kod, što onemogućuje plaćanje tih računa u Konzumu i Tisku.

Pomoću ovog generatora možete generirati uplatnicu sa 2D kodom, koju ćete moći uplatiti na blagajnama Konzuma, kioscima Tiska i slično.

## Demo
Demo ove web aplikacije možete pronaći na adresi [knee-cola.github.io/generator-opce-uplatnice/](https://knee-cola.github.io/generator-opce-uplatnice/).

# ToDo
* provjeriti zašto duži opis plaćanja ne prolazi validaciju
* provjeriti da li *model* ispred sebe mora imati "HR"
* u slučaju kada 2D kod ne može biti generiran umjesto ispisa na Canvas staviti da bude prikazana neka `<html>` poruka (to je fleksibilnije)