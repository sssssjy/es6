/*
 * @Author: your name
 * @Date: 2020-12-11 10:41:18
 * @LastEditTime: 2020-12-28 13:41:49
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \es6\index.js
 */
let s = new Set();

//add
[2,3,4,5,3,2,2,1].forEach(item => s.add(item))
// console.log(s);

//数组作为初始值参数
let s1 = new Set([2,3,2,1,3,4,5]);
// console.log(s1);
// console.log(s1.keys());
// console.log(s1.values());
// console.log(s1.entries());

// let mapA = new Map().set(true,1).set({name:3},[2,34]);

// //map => array
// console.log([...mapA]);
// //array => map
// console.log(new Map([[true, 3], ['dd', { name: '33' }]]));

// //map => object
// // 若map所有的键均为字符串
// function strMapToObj(strMap) {
//     let obj = {};
//     for (const [k,v] of strMap) {
//         obj[k] = v;
//     }
//     return obj
// }
// let mapB = new Map([['yes', true], ['no', false]]);
// console.log(strMapToObj(mapB));
// //obj => map
// function objToStrMap(obj) {
//     let strMap = new Map();
//     for (const k of Object.keys(obj)) {
//         strMap.set(k,obj[k]);
//     }

//     return strMap;
// }
// console.log(objToStrMap({ 'yes': true, no: false}));

// //map => json
// // map键名均为string => 转为对象json
// function strMapToJson(strMap) {
//     return JSON.stringify(strMapToObj(strMap))
// }
// //map键名有非字符串 => 转为数组json
// function mapToArrayJson(map) {
//     return JSON.stringify([...map])
// }

// let mapC = new Map().set(true,7).set({foo:4},['df']);
// console.log(mapToArrayJson(mapC));
// // json => map
// function jsonToStrMap(jsonStr) {
//     return objToStrMap(JSON.parse(jsonStr))
// }
// console.log(jsonToStrMap('{"yes":true,"no":false}'));

let mapD = new WeakMap();

mapD.set({},2);
console.log(mapD);
console.log(mapD.size);
console.log(mapD.forEach);