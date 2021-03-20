import React from 'react';

class ClearList extends React.Component {
    render() {
        let button;

        if (this.props.toDoList.length > 1){
            button = (<button className="btn btn-danger w-sm-25 text-center" onClick={() => this.props.clearList()}>Claer List</button>); 
        }
        
        return(
            <div className="d-flex justify-content-center">
                {button}
            </div>
        );
    }
}

export default ClearList;