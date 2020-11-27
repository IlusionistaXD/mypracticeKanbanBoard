import React, { Component } from 'react';

class CardForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
        nameCard: "",
        }
    }

    onChange = (e)=> {
        console.log(e.target.value);
        this.setState({
            nameCard: e.target.value
        })
    }

    onClick = (e) => {
        console.log(e);
        this.props.insertCard(this.state.nameCard);
    }

    render(){
        console.log(this.props);

        return  (<div className="inputCard">
                    <input type="text" onChange={this.onChange} placeholder="Insert a work Item"/>
                    <button type="button" onClick={this.onClick}>Add Work Item</button>
                </div>)
    }

}

export default CardForm;