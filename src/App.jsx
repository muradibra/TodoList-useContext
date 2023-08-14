import React, { useState } from 'react'
import AddTodo from './Components/AddTodo'
import List from './Components/List'
import { Context } from './Context/Context'
import { ToastContainer } from 'react-toastify'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'react-toastify/dist/ReactToastify.css';
import 'sweetalert2/src/sweetalert2.scss'


function App() {
  const [data, setData] = useState([])

  function handleDelete(id) {
    setData(prevState => prevState.filter(item => item.id !== id))
  }

  function handleEdit(id, newTodo) {
    setData(prevState => {
      return prevState.map(item => {
        if(item.id == id) {
          return {...item, todo: newTodo}
        }
        return item
      })
    })
  }

  return (
    <div className='m-2'>
      <Context.Provider value={{
        data,
        setData,
        handleDelete,
        handleEdit,
      }}>
        <AddTodo />
        <List />
      </Context.Provider>
      <ToastContainer />
    </div>
  )
}

export default App