import React from 'react';

const AddToDoButton = () => {

    return(
        <div>
            <form>
                <input 
                placeholder='Enter Task'/>
                <button type='submit'>Add</button>
            </form>
        </div>
    );
}

export default AddToDoButton;