import './App.css';
import React, { useState } from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper, List, Container } from "@mui/material"

const App = () => {

  const [items, setItems] = useState([
    {title:'123', id: 'ID-0', done:false}
  ]);
  
  const todoItems = items.length > 0 && (
    <Paper style={{margin:16}}>
      <List>
        {items.map((item, idx)=> (
            <Todo item={item} key={item.id} />
          )
        )}
      </List>
    </Paper>
  );

  const add = (item) => {
    const thisItems = items;
    item.id = "ID-" + thisItems.length; // key를 위한 id 추가
    item.done = false;
    thisItems.push(item);
    setItems(thisItems);
    console.log("items : ", items);
  }

  return (
    <>
      <div className='App'>
        <Container maxWidth="md">
          <AddTodo add={add} />
            <div className="TodoList">{todoItems}</div>
        </Container>
      </div>
    </>
  );
}

export default App;
