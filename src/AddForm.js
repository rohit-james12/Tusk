import React, {Component} from 'react'

class AddTodo extends Component{
    state = {
        content: " "
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        // console.log(this.state);
        this.props.addTodo(this.state);
        this.setState({
            content: ''
        })
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                    <label className="red-text">Add new todo:</label>
                    <input typr='text' onChange={this.handleChange} value={this.state.content}/>
                </form>
            </div>
        )
    }
}

export default AddTodo
