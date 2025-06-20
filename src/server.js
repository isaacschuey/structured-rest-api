import express from 'express';
import { getItemWithID, getItems, addItem, updateItem, deleteItem } from '../src/api-controller.js'

const app = express()
const port = 3000

app.get('/items', getItems);
app.get('/items/id', getItemWithID);
app.post('/items/id/fruit/color', addItem);
app.put('/items/id/fruit/color', updateItem);
app.delete('/items/id', deleteItem);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})