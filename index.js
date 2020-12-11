/*
 * @Author: your name
 * @Date: 2020-12-11 10:41:18
 * @LastEditTime: 2020-12-11 17:14:28
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \es6\index.js
 */
console.log(Array.from({ 0: 34, 1: 43 }));

let obj = {
    0:34,
    1:'335',
    length:2
}
console.log(Array.from(obj));

let propKey = 'foo';
let obj = {
    [propKey]:true,
    ['a' + 'bc']:123
}