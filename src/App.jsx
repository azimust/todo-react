import { useEffect, useState } from 'react';
import './App.css'
import Todo from './components/Todo/Todo';
import { Icon } from '@iconify/react';

function App() {
  const [todos, setTodos] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const todosId = todos.length;
  const createTodo = () => {
    if(inputValue) {
      const newTodos = [...todos, {text: inputValue, id: todosId + 1, complete: false}];
      setTodos([...todos, {text: inputValue, id: todosId + 1, complete: false}])
      setInputValue('')
      localStorage.setItem('todos', JSON.stringify(newTodos))
    }
  }

  const remove = (id) => {
    const newTodos = todos.filter(todo => todo.id !== id);
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  const complete = (id) => {
    const newTodos = todos.map(el => {
      if(el.id === id) {
        return {...el, complete: !el.complete}
      }
      return el
    })
    setTodos(newTodos)
    localStorage.setItem('todos', JSON.stringify(newTodos))
  }

  useEffect(() => {
    const newTodos = localStorage.getItem('todos');
    if(newTodos) {
      setTodos(JSON.parse(newTodos))
    }
  }, [])

  return (
    <div className='App'>
      <div className="container">
        <div className="todo__add">
          <input placeholder='add task' value={inputValue} onChange={(e) => setInputValue(e.target.value)} type="text" />
          <button onClick={createTodo}><Icon  icon="material-symbols:add-box-outline-rounded" /></button>
        </div>
        <div className="todo__container">
          {todos.map((el) => {
            return <Todo el={el} key={el.id} remove={remove} complete={complete} />
          })}
        </div>
      </div>
    </div>
  )
}

export default App
