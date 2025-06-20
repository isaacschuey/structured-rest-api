import { items, newItem, changeItem, removeItem } from '../src/items.js'

const getItemWithID = (request, response) => {
    const { id } = request.query;
    if (id in items) {
        const item = items[id];
        response.send(item);
    }
    else {
        response.status(404).send("item could not be found");
    }
}

const getItems = (request, response) => {
    response.send(items);
}

const addItem = (request, response) => {
    const { id, fruit, color } = request.query;
    newItem(id, fruit, color);
    response.send(items);
}

const updateItem = (request, response) => {
    const { id, fruit, color } = request.query;
    if (id in items) {
        changeItem(id, fruit, color);
        response.send(items);
    }
    else {
        response.status(404).send("item could not be found");
    }
}

const deleteItem = (request, response) => {
    const { id } = request.query;
    if (id in items) {
        removeItem(id);
        response.send(items);
    }
    else {
        response.status(404).send("item could not be found");
    }
}

export { getItemWithID, getItems, addItem, updateItem, deleteItem };