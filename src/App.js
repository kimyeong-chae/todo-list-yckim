import React, { Component } from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form'
import TodoItemList from './components/TodoItemList'
import Palette from "./components/Palette";

class App extends Component {

    id = 0;
    state = {
        input: '',
        currentColor: '',
        todos: [],
        colors: ['#343a40', '#f03e3e', '#12b886', '#228ae6']
    }

    handleChange = (e) => {
        this.setState({
            input: e.target.value
        });
    }

    handleCreate  = () => {
        const {input, todos} = this.state;
        this.setState({
           input: '',
           currentColor: '#000000',
           todos: todos.concat({
               id: this.id++,
               text: input,
               checked: false,
               color: this.state.currentColor === '' ? '#000000' : this.state.currentColor
           })
        });
    }

    handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            this.handleCreate();
        }
    }

    handleToggle = (id) => {
        const {todos} = this.state;

        const index = todos.findIndex(todo => todo.id === id);
        const selected = todos[index];

        const nextTodos = [...todos];

        nextTodos[index] = {
            ...selected,
            checked: !selected.checked
        };

        this.setState({
            todos: nextTodos
        });
    }

    handleRemove = (id) => {
        const {todos} = this.state;
        this.setState({
           todos: todos.filter(todo => todo.id !== id )
        });
    }

    handleColorClick = (color) => {
        this.setState({
            currentColor: color
        })
    }

    render() {

        const {input, colors, currentColor} = this.state;
        const {
            handleChange,
            handleCreate,
            handleKeyPress,
            handleToggle,
            handleRemove,
            handleColorClick

        } = this;

        return (
            <div className="App">

                <TodoListTemplate form={(

                    <Form
                        value={input}
                        onKeyPress={handleKeyPress}
                        onChange={handleChange}
                        onCreate={handleCreate}
                        color={currentColor}
                    />
                )} palette={
                    <Palette
                        colors={colors}
                        currentColor={currentColor}
                        onColorClick={handleColorClick}
                    />
                }>
                    <TodoItemList todos={this.state.todos} onToggle={handleToggle} onRemove={handleRemove}/>
                </TodoListTemplate>)
            </div>
        );
    }
}

export default App;
