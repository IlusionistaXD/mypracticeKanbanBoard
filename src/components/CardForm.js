import React, { Component } from 'react';

class CardForm extends Component{

    constructor(props) {
        super(props);
        this.state = {
        nameCard: "",
        }
    }

    //vamos actualizando el valor de state observando que valor introduce el usuario
    onChange = (e)=> {
        //console.log(e.target.value);
        this.setState({
            nameCard: e.target.value
        })
    }

    //Agregamos la nueva tarea
    onClick = (e) => {
        this.props.insertCard(this.state.nameCard);
    }

    render(){
        return  (<div className="inputCard">
                    <input type="text" onChange={this.onChange} placeholder="Insertar nueva tarea"/>
                    <button type="button" onClick={this.onClick}>Agregar Tarea</button>
                </div>)
    }

}

export default CardForm;