"use strict";
/*Создайте файл `stringUtils.ts`, в котором определите функции:
`capitalize`, которая делает первую букву строки заглавной.
`reverseString`, которая переворачивает строку задом наперед.
В файле `main.ts` импортируйте эти функции и протестируйте их на примерах строк.*/
Object.defineProperty(exports, "__esModule", { value: true });
exports.capitalise = capitalise;
exports.reverseString = reverseString;
function capitalise(str) {
    if (!str)
        return str;
    return str[0].toUpperCase() + str.slice(1);
}
function reverseString(str) {
    return str.split('').reverse().join('');
}
