const http = require('http')

class Application {
    constructor () {
        this.callBack = () => {}
    }

    // 定义一个use
    use (callBack) {
        this.callBack = callBack
    }

    listen (...args) {
        const server = http.createServer((req, res) => {
            this.callBack(req, res)
        })
        server.listen(...args)
    }
}

module.exports = Application