import React from 'react';
import List from './List';
import Form from './Form';
import Header from './Header';
import ClearList from './ClearList';

class App extends React.Component {
    state = {
        toDoList: [],
    }

    removeElement = (index) => {
        const { toDoList } = this.state;

        this.setState({
            toDoList: toDoList.filter((element, i) => {
                // console.log(i);
                if (i !== index) {
                    return element;
                }
            }),
        });
    }

    handleSubmit = (task) => {
        if (task.task !== ''){
            this.setState({
                toDoList: [...this.state.toDoList, task.task],
            });
        }
        else {
            alert('Please, write something text');
        }
    }

    clearList = () => {
        this.setState({
            toDoList: [],
        });
    }

    render() {
        return (
            <div className="container w-75 mx-auto mb-4">
                <Header />
                <Form handleSubmit={this.handleSubmit} />
                <List toDoList={this.state.toDoList} removeElement={this.removeElement} />
                <ClearList clearList={this.clearList} toDoList={this.state.toDoList} />
            </div>
        );
    }
}

export default App;