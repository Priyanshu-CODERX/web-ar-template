const express = require("express")
const morgan = require("morgan")
const path = require("path")

const app = express()
const port = 3000

app.use(morgan('dev'))
app.use(express.static(path.join(__dirname, "/")))
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.get('/', (req, res) => {
    res.render('index')
})
app.listen(port, () => {
    console.log(`Server Connected to Port ${port}`)
})