import React, { useState } from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

const AddTodo = ({add}) => {
    const [item, setItem] = useState({title:""});

    // const item = { item : { title : "" } }

    const onInputChange = (e) => {
        setItem({title: e.target.value});
    }

    const addItemHandler = () => {
        add(item);
        initItem();
    }

    const initItem = () => {
        setItem({title:""});
    }

    const enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            if(e.target.value !== '') {
                addItemHandler();
            }
        }
        
    }

    return (
        <>
            <Paper style={{margin:16, padding:16}}>
                <Grid container>
                    <Grid xs={11} md={11} item style={{ paddingRight:16 }}>
                        <TextField 
                            placeholder="Add Todo here" 
                            fullWidth onChange={onInputChange} 
                            value={item.title} 
                            onKeyPress={enterKeyEventHandler}
                        />
                    </Grid>

                    <Grid xs={1} md={1} item>
                        <Button 
                            fullWidth 
                            color="secondary" 
                            variant="outlined"
                            onClick={addItemHandler}
                        >
                            +
                        </Button>
                    </Grid>

                </Grid>
            </Paper>
        </>
    )
}

export default AddTodo;
