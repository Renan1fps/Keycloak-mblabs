import express from 'express'

const app = express()
app.use(express.json())

app.listen(9090, () => console.log('server on'))