import { UPDATE_VALUE } from 'actions'

const _defaultState = {
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

const reducer = (state=_defaultState, action) => {
    switch(action.type) {
        case UPDATE_VALUE:
            return(Object.assign({}, state, { [action.id]:action.value }));
            break;
    }

    return(state);
}

export { reducer }