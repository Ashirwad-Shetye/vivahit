const defaultStorage = window.localStorage;

export const getItemFromStorage = (key : any, storage = defaultStorage) => storage.getItem(key);