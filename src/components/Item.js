import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Item = ({ id, content, complete, onDeleteToDo, onToggle }) => {
    const handleOnDelete = useCallback(() => 
        onDeleteToDo(id), [id, onDeleteToDo]
    );

    const handleOnToggle = useCallback(() => 
        onToggle(id),[id, onToggle]
    );

    const ItemArea = styled.div`
    display: flex;
    justify-content: flex-start;
    background: #f4f7fa;
    border: 2px solid #24272b;%;
    color: black;
    font-size: 22px;
    padding: 8px;
    margin: 2px;
    `;

    const ListItem = styled.div`
    width: 90%;
    `;

    const DeleteButton = styled.button`
    background: #44bba4;
    border: 1px solid #44bba4;
    color: white;
    width: 10%;
    padding: 10px;
    margin-left: 15px;
    border-radius: 3px;
    `;

    return (
        <div>
            <ItemArea>
                <ListItem key={id}>
                    <p style={{textDecoration: complete ? "line-through" : ""}}
                    onClick={handleOnToggle}>
                        {content}
                        </p> 
                    <DeleteButton onClick={handleOnDelete}>X</DeleteButton>
                </ListItem>
            </ItemArea>
        </div>
        )
}

Item.propTypes = {
    onDeleteToDo: PropTypes.func.isRequired,
    onToggle: PropTypes.func.isRequired,
};

export default Item;