import './App.css';

import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

function App() {

  const [todos, setTodos] = useState([{
    id: 1,
    todo: 'Adcione um todo',
    isDone: false
  }])
  
  function handerAdd(e) {

    e.preventDefault()
    const value = e.target.todo.value

    if (!value) {
      return

    }
    setTodos([...todos, { id: uuidv4(), todo: value, isDone: false }])
    e.target.todo.value = ''

    console.log(todos)

  }
  
  function handleDone(id) {
    const newTodos = todos.map(
      item => {
        if (item.id === id) {
          item.isDone = !item.isDone
        }
        return item
      }   
    )  
    setTodos(newTodos)

  }
  function removeList(id) {
    const newTodos = todos.filter(item => item.id !== id)
    setTodos(newTodos)
  }

  return (
    <body>
      <section>
        <div id='box_todo'>
          <div id='box_h1'>
            <h1>
              Todo List
            </h1>
          </div>
          <form onSubmit={handerAdd}>
            <div id='box_input'>
              <input id="todo" placeholder='Add Todo' />
              <button id='add'>ADD</button>
            </div>
            {
              todos.map(todo =>
                <div id='box_list' key={todo.id}>

                  <p id='lista'  style={
                    todo.isDone ? doneCheck : notDoneCheck
                  }
                  >
                    {
                      todo.todo
                    }
                  </p>
                  <div id='box_button'>
                    <button id='done' onClick={() => handleDone(todo.id)}> {
                      todo.isDone ? 'Not Done' : 'Done'
                    }</button>
                    <button id='remove' onClick={() => removeList(todo.id)}> remove</button>
                  </div>
                </div>
              )
            }
          </form>
        </div>
      </section>
    </body>
  );
}

export default App;


const doneCheck = {
  color: 'green',
  textDecoration: 'line-through',
}

const notDoneCheck = {
  color: '#000'
}