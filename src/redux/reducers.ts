import { ActionType } from './actions'

export type Nalog = {
    naziv:string,
    platitelj__ime:string,
    platitelj__adresa:string,
    platitelj__gradMjesto:string,
    primatelj__ime:string,
    primatelj__adresa:string,
    primatelj__gradMjesto:string,
    primatelj__iban:string,
    iznos:string,
    primatelj__model:string,
    primatelj__pozivNaBroj:string,
    sifra__namjene:string,
    opis_placanja: string
}

export type ReduxState = { nalog:Nalog };

const _defaultState:ReduxState = {
    nalog: {
        naziv: '',
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

export type ReducerAction = {
    id:string,
    type:ActionType,
    value?:string,
    nalog?:Nalog
}

const nalog = (state:any, action: ReducerAction):Nalog => {
    switch(action.type) {
        case ActionType.UPDATE_VALUE:
            return(Object.assign({}, state, { [action.id]:action.value }));
        case ActionType.CLEAR_FORM:
            return(Object.assign({}, state, _defaultState.nalog));
        case ActionType.LOAD_NALOG:
            return(Object.assign({}, state, action.nalog));
    }

    return(state);
}

const reducer = (state=_defaultState, action: ReducerAction):ReduxState => {
    return({
        nalog: nalog(state.nalog, action)
    })
}

export { reducer }