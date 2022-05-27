import './App.css';
import React, { useState, useEffect } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper, List, Container } from "@mui/material"
import { call } from './service/ApiService';

const App = () => {

  const [error, setError] = useState();
  const [items, setItems] = useState();

  const requestOptions = {
    method: "GET",
    headers: { "Content-Type" : "application/json"},
  };

  useEffect(()=> {
    call("/todo", "GET", null)
      .then((response)=>setItems(response.data));
  });


  const add = (item) => {
    console.log("add in App.js executed");
    /*
    const currentItems = [...items];
    item.id = "ID-" + items.length; // key를 위한 id 추가
    item.done = false;
    currentItems.push(item);
    setItems(currentItems);
    console.log("items : ", items);
    */
   call("/todo", "POST", item)
    .then((response)=>setItems(response.data));
 
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
      console.log("switchDone works")
  }

  const updateItem = (item, updatedItem) => {
    item.title = updatedItem.title;
    console.log("updated item title");
  }
  
  const todoItems = () => {
      return(
        <div>
            <Paper style={{margin:16}}>
              <List>             
                {
                  items.map((item, idx)=> 
                    (<Todo switchDone={switchDone} updateItem={updateItem}
                    item={item} key={item.id} remove={remove}/>))
                }
              </List>
            </Paper>    
      </div>
      )
  }




  return (
    <>
      <div className='App'>
        <Container maxWidth="md">
          <AddTodo add={add} />
            <div className="TodoList">
              {items.length > 0 ? todoItems() : null}
            </div>
        </Container>
      </div>
    </>
  );
}

export default App;
