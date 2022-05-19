import React, {useState} from 'react';
import { ListItem, ListItemText, InputBase, Checkbox, ListItemSecondaryAction, IconButton } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';


const Todo = ({item, remove, switchDone, updateItem}) => {
    const [checkStatus, setCheckStatus] = useState(item.done);
    const [readOnly, setReadOnly] = useState(true);
    const [thisItem, setThisItem] = useState(item);

    const removeEventHandler = () => {
        remove(item);
    }

    const checkboxHandler = () => {
        setCheckStatus(!checkStatus);
        switchDone(item);
    }

    const offReadOnlyMode = () => {
        setReadOnly(false);
        console.log("readOnly is offed " + readOnly);
        console.log(item.title);
    }

    const enterKeyEventHandler = (e) => {
        if(e.key === "Enter") {
            setReadOnly(true);
            console.log("readOnly is on " + readOnly);
            console.log(item.title);
        }
    }

    const editEventHandler = (e) => {
        const updatedItem = item;
        updatedItem.title = e.target.value;
        updateItem(item, updatedItem);
    }

    return (
        <>
            <ListItem>
                <Checkbox 
                    checked={item.done} disableRipple onClick={checkboxHandler}
                />
                <ListItemText>
                    <InputBase
                        inputProps={{"aria-label":"naked", readOnly:readOnly}}
                        id={item.id}
                        name={item.id}
                        defaultValue={item.title}
                        fullWidth={true}
                        onClick={offReadOnlyMode} // 쓰기모드 On
                        onChange={editEventHandler} // 입력값 매핑
                        onKeyPress={enterKeyEventHandler} // 엔터누른거면 쓰기모드 off
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