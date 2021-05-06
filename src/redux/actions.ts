import { Nalog } from "./reducers";

export enum ActionType {
    UPDATE_VALUE,
    CLEAR_FORM,
    LOAD_NALOG
}

export const updateValue = (id:string, value:string) => {
    return { type: ActionType.UPDATE_VALUE, id, value }
};

export const clearForm = (id:string, value:string) => {
    return { type: ActionType.CLEAR_FORM }
};

export const loadNalog = (nalog:Nalog) => {
    return { type: ActionType.LOAD_NALOG, nalog: nalog, naziv: nalog.naziv }
};