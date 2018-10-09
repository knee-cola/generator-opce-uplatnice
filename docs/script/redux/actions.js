export const UPDATE_VALUE = 'UPDATE_VALUE';

export function updateValue(id, value) {
    return { type: UPDATE_VALUE, id, value }
};