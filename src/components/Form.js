import React, {Component} from 'react';
import './Form.css'


export default class Form extends Component {

    render() {
        return (
            <div className="form">
                <input value={this.props.value} onChange={this.props.onChange} onKeyPress={this.props.onKeyPress} />
                <div className="create-button" onClick={this.props.onCreate}>
                    추가
                </div>
            </div>
        );
    }

}