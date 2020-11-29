import React, { Component } from 'react';

class Card extends Component{
    
    render(){
        return (
            <div className='card'>
                {this.props.canMoveLeft && <button className="moveLeft" type="button" onClick={this.props.onMoveLeft}>{"<<"}</button>}
                <span>{this.props.card.name}</span>
                {this.props.canMoveRight && <button className="moveRight" type="button" onClick={this.props.onMoveRight}>{">>"}</button>}
            </div>
        )
    }
}

export default Card;