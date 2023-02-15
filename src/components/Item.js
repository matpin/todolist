import React, { useCallback } from 'react';
import PropTypes from 'prop-types';

const Item = ({ id, content, complete, onDeleteToDo }) => {
    const handleOnDelete = useCallback(() => 
        onDeleteToDo(id), [id, onDeleteToDo]
    );

    return (
        <div>
            <p>{content}</p> 
            <button onClick={handleOnDelete}>X</button>
        </div>
        )
}

Item.propTypes = {
    onDeleteToDo: PropTypes.func.isRequired,
};

export default Item;