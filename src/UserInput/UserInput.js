import React, {Component} from 'react';

class UserInput extends Component {
    render() {
        return (
        <div className='App'>
            <input type='text'onChange={this.props.changed} value={this.props.currentInput}/>
        </div>
        );
    }
}

export default UserInput;
