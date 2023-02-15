import React, { useState } from 'react';
import PropTypes from 'prop-types';
// import Item from './Item';
import { v4 as uuidv4 } from 'uuid';
import styled from 'styled-components';

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

  const ItemInput = styled.input`
  width: 100%;
  font-size: 22px;
  padding: 12px 20px;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  `;

  const AddButton = styled.button`
  width: 100%;
  background-color: #44bba4;
  color: white;
  font-size: 22px;
  padding: 12px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  `;

  const FormArea = styled.div`
  display: flex;
  justify-content: center;
  background-color: #24272b;
  padding: 30px;
  margin: 10px;
  color: white;
  text-align: center;
  `;

  const Form = styled.form`
  width: 100%;
  `;

    return(
        <div>
            <FormArea>
                <Form onSubmit={addToDoItem}>
                    <ItemInput 
                    onChange={handleChange}
                    value={inputValue}
                    placeholder='Enter Task'/>
                    <AddButton type="submit">Add</AddButton>
                </Form>
            </FormArea>
        </div>
    );
}

AddToDoForm.propTypes = {
    onAddToDo: PropTypes.func.isRequired,
}

export default AddToDoForm;