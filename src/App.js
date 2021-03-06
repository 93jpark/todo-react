import './App.css';
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper, List, Container, Grid, Button, AppBar, Toolbar, Typography } from "@mui/material"
import { call, signout } from './service/ApiService';

const App = () => {

  const [error, setError] = useState();
  const [items, setItems] = useState({items:[]});
  const [loading, setLoading] = useState(true);

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type" : "application/json"},
  };

  useEffect(()=> {
    call("/todo", "GET", null)
      .then((response)=>
        {
          setItems(response.data);
          setLoading(false);
        }
      );
      
  }, []);


  const add = (item) => {
    
    call("/todo", "POST", item)
    .then((response)=>setItems(response.data));
 

    console.log("add in App.js executed");
  
  }
  
  const remove = (item) => {
    /*
    const newItems = items.filter(e => e.id !== item.id);
    setItems(newItems);
    */
   call("/todo", "DELETE", item)
    .then((response)=>setItems(response.data));
  }

  const switchDone = (item) => {
      item.done = !item.done;
      updateItem(item);
      console.log("switchDone works")
  }

  const updateItem = (updatedItem) => {
    /*
    item.title = updatedItem.title;
    console.log("updated item title");
    */
    call("/todo", "PUT", updatedItem)
    .then((response)=>setItems(response.data));
  }
  
  const todoItems = () => {
      return(
        <div>
            <Paper style={{margin:16}}>
              <List>             
                {
                  items.map((item, idx)=> 
                    (<Todo 
                      switchDone={switchDone} 
                      updateItem={updateItem}
                      item={item} 
                      key={item.id} 
                      remove={remove}
                      />)
                      )
                }
              </List>
            </Paper>    
      </div>
      )
  }

  const navigationBar = () => {
    return (
      <AppBar position="static">
        <Toolbar>
          <Grid justify="space-between" container>
            <Grid item xs={9}>
              <Typography variant="h6">????????? ??????</Typography>
            </Grid>
            <Grid xs={3}>
              <Button color="inherit" onClick={signout}>
                ????????????
              </Button>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    )
  }

  const todoListPage = () => {
    return (
      <div>
        {navigationBar()} {/* ??????????????? ??? ????????? */}
        <Container>
          <AddTodo add={add} />
          <div className="TodoList">
            {items.length > 0 ? todoItems() : null}
          </div>
        </Container>
      </div>
    )
  }

  const loadingPage = () => {
    return (
      <h1> ????????? .. </h1>
    )
  }

  let content;


  return (
    <>
      

      <div>
        <div className="App">{loading ? loadingPage() : todoListPage()}</div>
      </div>
      
      
    </>
  );
}

export default App;
