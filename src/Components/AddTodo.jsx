import React, { Component } from 'react';

import '../App.css'

class AddTodo extends Component {
    state = {
        sub: ''
    }

    handileSubmit = (e) => {
        e.preventDefault();
        this.state.sub === '' ? (
            alert('null')
        ) :
            (
                this.props.addTodo(this.state)
            )
        this.setState({
            sub: ''
        })
    }
    handleChange = (e) => {
        this.setState({
            sub: e.target.value
        })
    }
    render() {
        return (
            <div className='container'>
                <div className="row">
                    <form className='from col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12' onSubmit={this.handileSubmit} >
                        <div className="input-group mb-3">
                            <input type="text" className="form-control" placeholder="Add Todos..." aria-label="Add Todos"
                                aria-describedby="button-addon2"
                                onChange={this.handleChange}
                                value={this.state.sub}></input>
                            <button className="btn btn-outline-secondary" type="submit" id="button-addon2">Add Todos</button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default AddTodo;