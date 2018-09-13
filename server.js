const Yoa = require('./application')
const app = new Yoa()

app.use(async ctx => {
    ctx.body = "hello yoa " + ctx.url
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