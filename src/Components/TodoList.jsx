import React from 'react'

import '../App.css'

const TodoList = ({ todos, deleteTodo }) => {

    const Todo_list = todos.length ? (
        todos.map(todo => {
            return (
                <div className="container" key={todo.id} >
                    <div className="row g-0">
                        <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-lg-10 col-xl-10 col-xxl-10 box-list-1">
                            <ul className="list-group">
                                <li className='list-group-item' >{todo.sub}</li>
                            </ul>
                        </div>
                        <div className="col-12 col-sm-12 col-md-2 col-lg-2 col-lg-2 col-xl-2 col-xxl-2 box-list-2">
                            <button type="button" className="btn btn-outline-danger" onClick={() => { deleteTodo(todo.id) }}>Danger</button>
                        </div>
                    </div>
                </div>
            )
        })
    ) : (
        <div className="container" >
            <div className="row g-0">
                <div className="col-12 col-sm-12 col-md-10 col-lg-10 col-lg-10 col-xl-10 col-xxl-10 box-list-1">
                    <ul className="list-group">
                        <li class="list-group-item list-group-item-danger">No Todos Left</li>
                    </ul>
                </div>
            </div>
        </div>
    )

    return (
        <div>
            {Todo_list}
        </div>
    );
}

export default TodoList;