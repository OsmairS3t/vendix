const http = require('http')

const app = http.createServer((req, res) => {
  return res.end('Hy man!')
})

app.listen(3333)