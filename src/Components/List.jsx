import React, { useContext } from 'react'
import { Context } from '../Context/Context'
import { nanoid } from 'nanoid'
import '../assets/css/style.css'
import Todos from './Todos'

function List() {
    const { data } = useContext(Context)
    let x = 0
    return (
        <div>
            {
                data.map((item, index) => <Todos key={nanoid()} {...item} index={index + 1} />)
            }
        </div>
    )
}

export default List