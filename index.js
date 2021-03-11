const express = require('express');
const app = express()
const PORT = 8080;

// Middleware to parse JSON from POST request.
// Express does not do it by default.
app.use(express.json())

app.listen(
    PORT,
    () => console.log(`🗯️ Server ain't dead. Check http://localhost:${PORT}/`)
)

app.get('/', (req, res) => {
    res.status(200).send({
        entry: 'Playing with Express'
    })
})

app.get('/burger-today', (req, res) => {
    res.status(200).send({
        burger: 'Chicken 🍔',
        size: 'XXL'
    })
});


app.post('/order-burger/:id', (req, res) => {
    const {id} = req.params;
    const {sauce} = req.body;

    if (!sauce) {
        res.status(418).send({message: '🛸 Sauce is missing from your order.'})
    }

    res.send({
        burger: `🍔 with ${sauce} and ID of ${id} is being prepared!`
    });

});
