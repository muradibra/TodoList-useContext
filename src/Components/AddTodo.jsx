import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context';

function AddTodo() {
    const [todo, setTodo] = useState("")
    const { data, setData } = useContext(Context)

    function handleSubmit() {
        if (!todo.length) {
            alert("error")
        } else {
            setData([...data, { todo, id: Date.now() }])
            setTodo("")
        }
        console.log(data);
    }

    return (
        <div>
            <div className="mb-3">
                <label htmlFor="todo" className="form-label">Add Todo</label>
                <div className='d-flex gap-2'>
                    <input type="text"
                        className="form-control w-50"
                        id="todo"
                        placeholder="Enter Todo"
                        value={todo}
                        onChange={(e) => setTodo(e.target.value)}
                    />
                    <button
                        type='button'
                        className='btn btn-primary'
                        onClick={handleSubmit}
                    >
                        Add
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AddTodo