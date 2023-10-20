const express = require('express')
const app = express()
app.use(express.urlencoded({ extended: true }))
app.get('/convierte/', (req, res) => {
const dinero = Number(req.query.dinero)
const resultado = dinero * (21 / 100)
const cadena = `<h2> El IVA es: ${resultado}</h2>
`
res.send(cadena)
})

app.listen(5000, () => console.log('Server ready on localhost:5000'))