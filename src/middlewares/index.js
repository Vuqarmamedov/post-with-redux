export const customMiddleWare = function (store) {
    return function (next) {
        return function (action) {
            console.log(action);
            next(action)
        }
    }
};