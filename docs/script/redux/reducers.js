import { UPDATE_VALUE } from 'actions'

const _defaultState = {
    nalog: {
        platitelj__ime: '',
        platitelj__adresa: '',
        platitelj__gradMjesto: '',
        primatelj__ime: '',
        primatelj__adresa: '',
        primatelj__gradMjesto: '',
        primatelj__iban: '',
        iznos: '',
        primatelj__model: '',
        primatelj__pozivNaBroj: '',
        sifra__namjene: '',
        opis_placanja: ''
    },
    validation: {
        platitelj__ime: true,
        platitelj__adresa: true,
        platitelj__gradMjesto: true,
        primatelj__ime: true,
        primatelj__adresa: true,
        primatelj__gradMjesto: true,
        primatelj__iban: true,
        iznos: true,
        primatelj__model: true,
        primatelj__pozivNaBroj: true,
        sifra__namjene: true,
        opis_placanja: true
    }
}

const reducer = (state=_defaultState, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return(Object.assign({}, state,
                {
                 nalog: Object.assign({}, state.nalog, { [action.id]:action.value })
                }));
            break;
    }

    return(state);
}

export { reducer }