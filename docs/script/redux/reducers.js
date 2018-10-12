import { UPDATE_VALUE } from 'actions'
import { FormatCurrency } from 'Format';

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
    }
};

const nalog = (state, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return(Object.assign({}, state, { [action.id]:action.value }));
    }

    return(state);
}

const reducer = (state=_defaultState, action) => {
    return({
        nalog: nalog(state.nalog, action)
    })
}

export { reducer }