const express = require('express');
const app = express();

app.use(express.json());
app.use(express.urlencoded( {extended: true}));

app.set("view engine" ,"hbs");

app.get('/', (req,res) => {
    res.render('persons', {
        persons: [
            {name: 'ABC', age: 22, city: 'Bhopal'},
            {name: 'DEF', age: 20, city: 'Indore'}
        ]
    })
})

app.listen(4444, () => {
    console.log("Server started on http://localhost:4444/");
})