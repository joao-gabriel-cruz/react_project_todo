import './App.css';

import { useState } from 'react'
import { findByDisplayValue } from '@testing-library/react';

function App() {

  const [todos, setTodos] = useState([{
    id: '1',
    todo: 'ok'
  }])

  function handerAdd(e) {

    e.preventDefault()
    const value = e.target.todo.value

    if (!value) {
      return

    }
    setTodos([...todos, { id: value, todo: value }])
    e.target.todo.value = ''

    console.log(todos)

  }
  function handleDone(id) {
    console.log(id)
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
              <input id="todo" placeholder='  Add Todo'/>
              <button id='add'>ADD</button>
            </div>
            {
              todos.map(todo =>
                <div id='box_list' key={todo.id}>
                  <p id='lista'>
                    {
                      todo.todo
                    }
                  </p>
                  <div id='box_button'>
                    <button id='done' onClick={() => handleDone(todo.id)}> done</button>
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

