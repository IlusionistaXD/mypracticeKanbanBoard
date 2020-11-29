import React from 'react';
import './App.css';
import Column from './components/Column'
import CardForm from './components/CardForm';

const direccion_left = -1;
const direccion_right= 1;


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      loading: false
    }
  }

  insertCard = (nameCard)=>{
    const card = {
      name: nameCard
    };
    let allState = {...this.state};
    allState.columns[0].cards.push(card);
    this.setState(allState);

    //error prevState se esta ejucutando dos veces
    /*
    this.setState( prevState => {
      const { columns } = prevState;
      console.log(columns);
      columns[0].cards.push(card);
      console.log(columns);
      return { columns };
    });
    */
  };

  moveCard = (columnIndex, cardIndex, direction)=>{

    let allState = {...this.state};
    const vectorCard = allState.columns[columnIndex].cards.splice(cardIndex, 1);
    const card = {
      name: vectorCard[0].name
    }
    allState.columns[columnIndex + direction].cards.push(card);
    this.setState(allState);
    /*
    this.setState( prevState => {
      const { columns } = prevState;
      console.log(columns);
      const card = columns[columnIndex].cards.splice(cardIndex, 1);
      console.log(card);
      columns[columnIndex + direction].cards.push(card);
      console.log(columns);
      return { columns };
    });
    */
  };

  async loadData(){
    const response = await fetch('http://localhost:3000/data.json');
    const data = await response.json();
    this.setState({ loading: true, columns: data.columns});
  }

  componentDidMount(){
    this.loadData();
  }


  render(){
    return <div>
      <h1>Organizador de Tareas</h1>
      {<CardForm insertCard={this.insertCard}/>}
      <div className="App">
        {this.state.columns.map((column, columnIndex) => 
          <Column 
          column={column} 
          columnIndex={columnIndex}
          key={columnIndex} 
          onMoveLeft={cardIndex => this.moveCard(columnIndex, cardIndex, direccion_left)}
          onMoveRight={cardIndex => this.moveCard(columnIndex, cardIndex, direccion_right)} 
          />)}
      </div>

    </div>
  }

  
}

export default App;
