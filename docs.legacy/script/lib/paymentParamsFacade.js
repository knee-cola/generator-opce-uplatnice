export const reduxID = {
    Iznos : 'iznos',
    ImePlatitelja : 'platitelj__ime',
    AdresaPlatitelja : 'platitelj__adresa',
    SjedistePlatitelja : 'platitelj__gradMjesto',
    Primatelj : 'primatelj__ime',
    AdresaPrimatelja : 'primatelj__adresa',
    SjedistePrimatelja : 'primatelj__gradMjesto',
    IBAN : 'primatelj__iban',
    ModelPlacanja : 'primatelj__model',
    PozivNaBroj : 'primatelj__pozivNaBroj',
    SifraNamjene : 'sifra__namjene',
    OpisPlacanja : 'opis_placanja'
}

export const paramName = {
    iznos: 'Iznos',
    platitelj__ime: 'ImePlatitelja',
    platitelj__adresa: 'AdresaPlatitelja',
    platitelj__gradMjesto: 'SjedistePlatitelja',
    primatelj__ime: 'Primatelj',
    primatelj__adresa: 'AdresaPrimatelja',
    primatelj__gradMjesto: 'SjedistePrimatelja',
    primatelj__iban: 'IBAN',
    primatelj__model: 'ModelPlacanja',
    primatelj__pozivNaBroj: 'PozivNaBroj',
    sifra__namjene: 'SifraNamjene',
    opis_placanja: 'OpisPlacanja'
}

export const nalog2params = nalog => {
    const paymentParams = new BarcodePayment.PaymentParams();

    // prepisujem payment params iz 
    for(var key in nalog) {
        if(nalog.hasOwnProperty(key) && paramName.hasOwnProperty(key)) {
            paymentParams[ paramName[key] ] = nalog[key];
        }
    }

    return(paymentParams);
}