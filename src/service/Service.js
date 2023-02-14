export const getToDoItemsFromLocalStorage = (storageKey) => {
    const storageValue = localStorage.getItem(storageKey);

    let todoItems = null;

    try {
        const storageValueJSON = JSON.parse(storageValue);

        if (Array.isArray(storageValueJSON)) {
            todoItems = storageValueJSON;
        }
    } catch(e) {
        todoItems = [];
    }

    return todoItems;
};

export const saveTodoItemsToLocalStorage = (storageKey, storageValue) => {
    localStorage.setItem(storageKey, JSON.stringify(storageValue))
};