import React, {useState, useCallback} from 'react';
import './App.css';
import ToDoList from './components/ToDoList';
import AddToDoForm from './components/AddToDoForm';
import { getToDoItemsFromLocalStorage, saveTodoItemsToLocalStorage } from './service/Service';


function App() {
  const [todoItems, setTodoItems] = useState(getToDoItemsFromLocalStorage('item') || []);

  const handleAddToDo = useCallback(item => {
    console.log("addToDo - App2")
    
    const items = [
        {
        id: item.id,
        content: item.content,
        complete: item.complete
        },
        ...todoItems,
    ]
    setTodoItems(items);
    saveTodoItemsToLocalStorage('item', items)
    }, [todoItems]);

  const handleOnDelete = useCallback(id => {
    const newTodoItems = todoItems.filter(item => item.id !== id)
    setTodoItems(newTodoItems)
    saveTodoItemsToLocalStorage('item', newTodoItems)
  }, [todoItems]);

  const handleOnToggleComplete = useCallback(id => {
    const item = todoItems.find(item => item.id === id)
    item.complete = !item.complete
    setTodoItems([...todoItems])
    saveTodoItemsToLocalStorage('item', todoItems)
  }, [todoItems]);


  return (
    <div>
      <AddToDoForm onAddToDo={handleAddToDo}/>
      <ToDoList 
      toDoItems={todoItems}
      onDeleteToDo={handleOnDelete}
      onToggle={handleOnToggleComplete}/>
    </div>
  );
}

export default App;
