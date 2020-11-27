import React from 'react';
import './App.css';
import Column from './components/Column'
import CardForm from './components/CardForm'


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      columns: [],
      loading: false
    }
  }

  insertCard = (nameCard)=>{
    const newCard = {
      name: nameCard
    }
    var prevState = this.state.columns;
    prevState[0].cards.push(newCard);

    this.setState({
      columns: prevState
    })
  }

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
      <h1>Kanban Board</h1>
      {<CardForm insertCard={this.insertCard}/>}
      <div className="App">
        {this.state.columns.map((column, columnIndex) => 
          <Column 
          column={column} 
          columnIndex={columnIndex}
          key={columnIndex} />)}
      </div>

    </div>
  }

  
}

export default App;
