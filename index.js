const express = require('express');
const app = express();
const port = 3000;
const foodController = require('./controllers/foodController');

app.get('/foods', foodController.getAllFoods);

app.use(express.json());

app.listen(port, () => {
    console.log(`Server running at http://localhost:${3306}`);
});
