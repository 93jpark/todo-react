import React, { useState } from "react";
import { TextField, Paper, Button, Grid } from "@mui/material";

const AddTodo = ({add}) => {
    const [item, setItem] = useState({title:""});

    // const item = { item : { title : "" } }

    const onInputChange = (e) => {
        // const thisItem = item;
        // thisItem.title = e.target.value;
        setItem({title: e.target.value})
        console.log("now item is ", item);
    }

    const addItem = () => {
        add(item);
        initItem();
    }

    const initItem = () => {
        setItem({title:""});
        console.log("item state is initialized");
    }

    const enterKeyEventHandler = (e) => {
        if(e.key === 'Enter') {
            addItem();
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
                            onClick={
                                ()=>{add(item); initItem();}
                            }
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
