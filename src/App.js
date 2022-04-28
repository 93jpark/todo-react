import './App.css';
import React from 'react';
import Todo from './Todo';
import AddTodo from './AddTodo.js';
import { Paper, List } from "@mui/material"

const App = () => {

  const items = [
        {id:0, title:"Hello World 1", done:true},
        {id:1, title: "Hello World 2", done: false},
      ];
  
  
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

  return (
    <>
      <div className='App'>
        <container>
          <AddTodo/>
            <div className="TodoList">{todoItems}</div>
        </container>
      </div>
    </>
  );
}

export default App;
