/**
 * get
 * set
 */

let yuze = {
    _name: '语择',
    get name() {
        return this._name
    },
    set name(value) {
        console.log('new name is '+ value)
        this._name = value
    }
}

console.log(yuze.name)
yuze.name = 'yoa'
console.log(yuze.name)