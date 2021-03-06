import React, {Component} from 'react';
import './Palette.css'

class Color extends Component {

    render() {
        const style = {
            backgroundColor : this.props.color
        }

        return (
            <div className={`color ${this.props.currentColor === this.props.color ? 'active' : ''}`} style={style} onClick={() => this.props.onColorClick(this.props.color)} >

            </div>
        );
    }
}

export default class Palette extends Component {

    render() {

        const {colors, onColorClick, currentColor} = this.props;

        const colorList = colors.map(
            (color => (<Color color={color} onColorClick={onColorClick} currentColor={currentColor}/>))
        );

        return (
            <div className="palette-wrapper">
                <div className="palette">
                    {colorList}
                </div>
            </div>
        );
    }
}