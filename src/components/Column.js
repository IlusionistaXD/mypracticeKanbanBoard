import React, {Component} from 'react';
import Card from './Card'

class Column extends Component {

    render(){
        return  <div className="column">
                    <h2>{this.props.column.name}</h2>
                    {this.props.column.cards.map((card, cardIndex)=>
                        <Card
                            card={card}
                            moveCard={this.props.moveCard}
                            columnIndex={this.props.columnIndex}
                            key={cardIndex}
                            canMoveLeft={(this.props.columnIndex === 1 
                            || this.props.columnIndex === 2)}
                            canMoveRight={(this.props.columnIndex === 0)
                            || (this.props.columnIndex === 1)
                            }
                            onMoveRight={()=> this.props.onMoveRight(cardIndex)}
                            onMoveLeft={()=>this.props.onMoveLeft(cardIndex)}
                        />
                        )}
                </div>
    }
}

export default Column;