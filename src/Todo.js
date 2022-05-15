import React, {useState} from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';



const Todo = ({item, remove, switchDone}) => {
    
    const removeEventHandler = () => {
        remove(item);
    }


    return (
        <>
            <ListItem>
                <Checkbox 
                    checked={item.done} 
                    disableRipple 
                    onClick={switchDone(item)}
                />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked"}}
                        type="text"
                        id={item.id}
                        name={item.id}
                        value={item.title}
                        multiline={true}
                        fullWidth={true}
                    />

                </ListItemText>

                <ListItemSecondaryAction>
                    <IconButton 
                        aria-label="Delete Todo"
                        onClick={removeEventHandler}
                        >
                        <DeleteIcon/>
                    </IconButton>            
                </ListItemSecondaryAction>

            </ListItem>


        </>
    );
    
}

export default Todo;