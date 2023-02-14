import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Item from './Item';
import { v4 as uuidv4 } from 'uuid';

const AddToDoForm = ({onAddToDo}) => {
    const [ inputValue, setInputValue ] = useState("");
    const handleChange = (e) => {
        setInputValue(e.currentTarget.value)
    };
    const addToDoItem = e => {
        e.preventDefault();

        const item = {
            id: uuidv4(),
            content: inputValue,
            complete: false
        }

        onAddToDo(item)
        setInputValue("");
    };

    return(
        <div>
            <form onSubmit={addToDoItem}>
                <input 
                onChange={handleChange}
                value={inputValue}
                placeholder='Enter Task'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

AddToDoForm.propTypes = {
    onAddToDo: PropTypes.func.isRequired,
}

export default AddToDoForm;