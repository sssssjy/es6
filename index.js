/*
 * @Author: your name
 * @Date: 2020-12-11 10:41:18
 * @LastEditTime: 2020-12-11 15:30:41
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \es6\index.js
 */
const func = () => {
    console.log('111');
    return 2
}

//解构赋值 数组形式 按顺序赋值
const [a = 3] = [undefined];//a = 3
const [b = 4] = [null]// b = null
console.log(a,b);

const [x = func()] = [1];
// babel 转义结果 
// var _ = 1,
//     x = _ === undefined ? func() : _;
console.log(x);

//解构赋值 对象形式 按属性名赋值
const {foo, baz} = {foo:3,bar:0};
console.log(foo, baz);//3 undefined

const {first : f, last: l} = {first:'hello', last:'world'};

// babel 转义结果
// var _first$last = { first: 'hello', last: 'world' },
//     f = _first$last.first,
//     l = _first$last.last;

console.log(f,l);

const { aaa = 3, bbb = 6} = { aaa : 8, bbb : undefined}
// babel 转义结果
// var _aaa$bbb = { aaa: 8, bbb: undefined },
//     _aaa$bbb$aaa = _aaa$bbb.aaa,
//     aaa = _aaa$bbb$aaa === undefined ? 3 : _aaa$bbb$aaa,
//     _aaa$bbb$bbb = _aaa$bbb.bbb,
//     bbb = _aaa$bbb$bbb === undefined ? 6 : _aaa$bbb$bbb; 

console.log(aaa, bbb);//a 8 b 6