import React, { Component } from 'react';
import AddTask from './components/AddTask';
//import Header from './components/Header' //as class
import Header from './components/Header'
import TasksBoard from './components/TasksBoard'


const d_styling = {
  textAlign : 'center',
  display : 'flex',
  flex : 1,
  flexDirection: 'column',
  justifyContent: 'center',
}

class App extends Component {
  constructor(){
    super();
    this.state = {
      items: []
    }
  }

  render() {
    return (
      <div className="App" style={d_styling}>

        <Header
            number = {this.state.items.length}
            />

        <AddTask
          addItemFunc={(data)=>{
          const {items} = this.state;
          // const items = this.state.items;
          items.push({data,'done' : 'false'});
          this.setState({items});
        }}
        />

        <TasksBoard
          items={this.state.items}
          deleteHandler = { (e) => {
            console.log(e.target.id);
            let {items} = this.state;
            delete items[e.target.id];
            items = items.filter((elem) =>{
              return (elem !== undefined);
            })
            this.setState({items});
          }}
          checkOnChangeHandler = { (e) => {
            const {items} = this.state;
            if (items[e.target.id].done === 'true') {
              items[e.target.id].done = 'false'
            }else {
              items[e.target.id].done = 'true'
            }
            this.setState(items)
          }}
          />
      </div>
    );
  }
}

export default App;
