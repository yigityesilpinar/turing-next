export const hasStorage = (function() {
    if (!process.browser) {
        return false;
    }
    try {
        localStorage.setItem('test', 'test');
        localStorage.removeItem('test');
        return true;
    } catch (exception) {
        return false;
    }
})();

const STORAGE_PREFIX = '___ShOp_Mate___';
export const setItemToStorage = (key: string, value: string) => {
    if (hasStorage) {
        try {
            window.localStorage.setItem(STORAGE_PREFIX + key, value);
            return true;
        } catch (e) {}
    }
    return false;
};

export const getItemFromStorage = (key: string) => {
    if (hasStorage) {
        try {
            return window.localStorage.getItem(STORAGE_PREFIX + key);
        } catch (e) {}
    }
    return null;
};

export const removeItemFromStorage = (key: string) => {
    if (hasStorage) {
        try {
            window.localStorage.removeItem(STORAGE_PREFIX + key);
            return true;
        } catch (e) {}
    }
    return false;
};
