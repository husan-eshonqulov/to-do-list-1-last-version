import React from 'react';

class Form extends React.Component {
    initialState = {
        task: '',
    }

    state = this.initialState;

    handleChange = (event) => {
        const { value } = event.target;
        console.log(value);
        this.setState({
            task: value,
        });
    }

    submitForm = () => {
        this.props.handleSubmit(this.state);
        this.setState(this.initialState);
        document.getElementById('submitInput').value = "";
    }

    render() {
        return (
            <div className="mt-4 text-center d-sm-flex justify-content-around">
                <input className="form-control" id="submitInput" type='text' name="task-name" required onChange={this.handleChange} />
                <button className='btn btn-primary ml-sm-4 mt-sm-0 mt-3' onClick={this.submitForm}>Add</button>
            </div>
        );
    }
}

export default Form;