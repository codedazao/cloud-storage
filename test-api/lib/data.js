export const empty = (any)=> {
    try {
        if (any === '' || any === null || any === undefined) {
            return true;
        } else if (typeof any === 'number' && isNaN(any)) {
            return true;
        } else if (typeof any === 'object') {
            return Object.keys(any).length === 0;
        }
        return false;
    } catch {
        return true;
    }
}