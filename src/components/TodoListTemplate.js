import React , {Component }from 'react';
import './TodoListTemplate.css';

class TodoListTemplate extends Component {

    render () {
        return (
            <main className="todo-list-template">
                <div className="title">
                    오늘 할 일
                </div>
                {this.props.palette}
                <section className="form-wrapper">
                    {this.props.form}
                </section>

                <section className="todos-wrapper">
                    {this.props.children}
                </section>
            </main>
        );
    }
};

export default TodoListTemplate;
