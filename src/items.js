let items = {

}

const newItem = (id, fruit, color) => {
    const newItem = {
        id,
        fruit,
        color
    };
    items[id] = newItem;
}

const changeItem = (id, fruit, color) => {
    items[id] = {
        id,
        fruit,
        color
    };
}

const removeItem = (id) => {
    items[id] = undefined;
}

export { items, newItem, changeItem, removeItem };