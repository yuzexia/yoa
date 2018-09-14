const Yoa = require('./application')
const app = new Yoa()

function delay() {
    return new Promise((resolve, reject) => {
        setTimeout(() =>{
            resolve()
        }, 2000)
    })
}

app.use(async (ctx, next) => {
    ctx.body = '1'
    await next()
    ctx.body += '2'
})

app.use(async (ctx, next) => {
    ctx.body += '3'
    await delay()
    await next()
    ctx.body += '4'
})

app.use(async (ctx, next) => {
    ctx.body += '5'
})

// app.use((req, res) => {
//     res.writeHead(200)
//     res.end('hello yoa2')
// })

app.listen(9092, () => {
    console.log('server start on port 9092')
})





// const http = require('http')

// const server = http.createServer((req, res) => {
//     res.writeHead(200)
//     res.end('hello yoa2')
// })

// server.listen(9092, () => {
//     console.log('server start on port 9092')
// })