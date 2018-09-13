/**
 * 中间件
 */

function add (x, y) {
    return x + y;
}

function double (z) {
    return z * 2
}

// const res1 = add(1, 2)
// const res2 = double(res1)
// console.log(res2)

// const res3 = double(add(1, 2))
// console.log(res3)

const middlewares = [add, double]
let len = middlewares.length
function compose(midds) {
    return (...args) => {
        // 初始值
        console.log('...args', ...args)
        let res = midds[0](...args)
        console.log('res', res)
        for (let i = 1; i < len; i++) {
            res = midds[i](res)
        }
        return res
    }
}

const fn = compose(middlewares)
const res = fn(1,2)
console.log(res)




















/**
 * get
 * set
 */

// let yuze = {
//     _name: '语择',
//     get name() {
//         return this._name
//     },
//     set name(value) {
//         console.log('new name is '+ value)
//         this._name = value
//     }
// }

// console.log(yuze.name)
// yuze.name = 'yoa'
// console.log(yuze.name)