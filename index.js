/*
 * @Author: your name
 * @Date: 2020-12-11 10:41:18
 * @LastEditTime: 2020-12-14 13:48:01
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \es6\index.js
 */
let symbol = Symbol('test');
// console.log('et' + symbol);//报错 不可与其他类型的值进行运算
// console.log(symbol.toString());//可以显式地转换为string Symbol(test)

let obj = {
    [symbol]:3
}
// console.log(obj);
// console.log('object.keys', Object.keys(obj));
// for (const key in obj) {
//     if (Object.hasOwnProperty.call(obj, key)) {
//         console.log('object.keys',key);
//     }
// }
// for (const iterator of obj) {
//     console.log('for of',iterator);
// }
// console.log('object.getOwnPropertyNames', Object.getOwnPropertyNames(obj));
// console.log('JSON.stringify', JSON.stringify(obj));
// console.log('Object.getOwnPropertySymbols',Object.getOwnPropertySymbols(obj));
// console.log(Reflect.ownKeys(obj));
const levels = {
    DEBUG:Symbol('debug'),
    INFO:Symbol('info'),
    WARN:Symbol('warn')
}
// console.log(levels.DEBUG,'debug message');

const s1 = Symbol.for('ssss');
// console.log(Symbol.keyFor(s1));//ssss

const s2 = Symbol.for('ssss');
// console.log(s1 === s2);//true

// foo instanceof Foo Foo[Symbol.hasInstance](foo)

class MyClass {
    [Symbol.hasInstance](foo){
        return foo instanceof Array
    }
}
// console.log([1, 2, 3] instanceof new MyClass());//true

class Even{
    static [Symbol.hasInstance](obj){
        return Number(obj) % 2 === 0
    }
}

// console.log(1 instanceof Even);//false
// console.log(2 instanceof Even);//true

let arr1 = ['c','d'];
// console.log(['a', 'b'].concat(arr1, 'e'));//[ 'a', 'b', 'c', 'd', 'e' ]
// console.log(arr1[Symbol.isConcatSpreadable]);//undefined

let arr2 = ['c','d'];
arr2[Symbol.isConcatSpreadable] = false;
// console.log(['a', 'b'].concat(arr2));//[ 'a', 'b', [ 'c', 'd', [Symbol(Symbol.isConcatSpreadable)]: false ] ]

obj = {
    [Symbol.toPrimitive](hint){
        switch (hint) {
            case 'number':
                return 123
            case 'string':
                return 'str'
            case 'default':
                return 'default'
            default:
                throw new Error()
        }
    }
}
// console.log(2 * obj);//246
// console.log(3 + obj);//3default
// obj === 'default'
// console.log(String(obj));//str

class Collection {
    get [Symbol.toStringTag](){
        return 'xxx'
    }
}

let x2 = new Collection();
console.log(Object.prototype.toString.call(x2));//[object xxx]

function test(a,...rest) {
    console.log(a,rest);
}