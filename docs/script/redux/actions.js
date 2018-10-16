export const UPDATE_VALUE = 'UPDATE_VALUE';
export const CLEAR_FORM = 'CLEAR_FORM';

export function updateValue(id, value) {
    return { type: UPDATE_VALUE, id, value }
};

export function clearForm(id, value) {
    return { type: CLEAR_FORM }
};