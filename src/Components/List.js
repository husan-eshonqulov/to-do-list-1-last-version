import React from 'react';

class List extends React.Component {
    render() {
        // console.log(this.props);
        return (
            <ul className="text-center list-unstyled mt-4">
                {this.props.toDoList.map((task, index) => {
                    return (
                        <div className="d-sm-flex justify-content-between w-75 mx-auto">
                            <li className="bg-warning font-weight-bold rounded py-2 my-1 mx-auto w-75" key={index}>{task}</li>
                            <li><button className="btn btn-danger my-1" onClick={() => this.props.removeElement(index)}>Delete</button></li>
                        </div>
                    );
                })}
            </ul>
        );
    }
}

export default List;