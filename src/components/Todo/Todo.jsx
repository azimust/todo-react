import React from 'react'
import '../../App.css'
import { Icon } from '@iconify/react';

const Todo = ({ el, remove, complete }) => {
    return (
        <div className='todo'>
            <li style={el.complete ? { textDecoration: 'line-through' } : null}>{el.text}</li>
            <div className="todo__btns">
                <button className='remove' onClick={() => remove(el.id)}><Icon icon="ph:trash" /></button>
                <button className='complete' onClick={() => complete(el.id)}><Icon icon="fluent-mdl2:completed" /></button>
            </div>
        </div>
    )
}

export default Todo