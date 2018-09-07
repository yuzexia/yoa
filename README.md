# yoa

### create http server

```javascript
const http = require('http')

const server = http.createServer((req, res) => {
    res.writeHead(200)
    res.end('hello yoa2')
})

server.listen(9092, () => {
    console.log('server start on port 9092')
})
```