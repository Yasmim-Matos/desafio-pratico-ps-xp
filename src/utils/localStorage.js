export const saveInStorage = (key, value) => localStorage
    .setItem(key, JSON.stringify(value));

export const getInStorage = (key) => JSON.parse(localStorage.getItem(key));
