import React, { useContext, useState } from 'react'
import { Context } from '../Context/Context'
import { toast } from 'react-toastify'
import { toast_config } from '../config'
import Swal from 'sweetalert2/dist/sweetalert2.js'


function Todos({ todo, index, id }) {
    const { handleDelete, handleEdit } = useContext(Context)
    const [toggleUpdate, setToggleUpdate] = useState(false)
    const [newTodo, setNewTodo] = useState(todo)

    function swalDeleteTodo() {
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                )
                handleDelete(id)

            }
        })
    }

    return (
        <div className='todo-item d-flex justify-content-between w-50'>
            <div>#{index}</div>
            {
                toggleUpdate ?
                    <input
                        type="text"
                        className="form-control w-50"
                        value={newTodo}
                        onChange={(e) => setNewTodo(e.target.value)}
                    /> :
                    <div>{todo}</div>
            }
            <div>
                <button
                    className={`btn ${toggleUpdate ? "btn-success" : "btn-warning"} me-2`}
                    onClick={() => {
                        setToggleUpdate(!toggleUpdate)
                        toggleUpdate && handleEdit(id, newTodo)
                        toggleUpdate && toast.success("Successfully edited!", toast_config)

                    }}
                >
                    {toggleUpdate ? "UPDATE" : "EDIT"}
                </button>
                <button
                    className='btn btn-danger'
                    onClick={() => swalDeleteTodo()}
                >
                    DELETE
                </button>
            </div>
        </div>
    )
}

export default Todos