import React, { Component } from 'react';

class Card extends Component{

    onClick = (e) => {
        console.log(e);
    }
    
    render(){
        return (
            <div className='card'>
                {this.props.canMoveLeft && <button className="moveLeft" type="button" onClick={this.onClick}>{"<<"}</button>}
                <span>{this.props.card.name
                + this.props.columnIndex
                }</span>
                {this.props.canMoveRight && <button className="moveRight" type="button" onClick={this.onClick}>{">>"}</button>}
            </div>
        )
    }
}

export default Card;