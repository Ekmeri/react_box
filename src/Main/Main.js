import React, { Component } from 'react';
import './Main.css';
import Box from '../Box/Box';


class Main extends Component {
    /*state = {
      counter: 1000
    };*/

    state = {
      persons: [
        {name: "Neo", title: "Toddler", age: 1},
        {name: "Node", title: "Unborn", age: 0},
        {name: "Noi", title: "Mom", age: 30}
      ]
    }
    
    timesClicked = () => {
      this.setState({persons: [
          {name: "Jiin", title: "Child", age: 7},
          {name: "Jiit", title: "Teen", age: 12},
          {name: "Ekku", title: "Dad", age: 37}
          ]
        }
      );
    }
    
    render () {

      return (
        <div className='main'>
            <div>
         <p>{this.state.counter}</p>
         <button onClick={this.timesClicked}>Push something</button> 
          <Box Name={this.state.persons[0].name} 
                Title={this.state.persons[0].title} 
                Age={this.state.persons[0].age}/>
          <Box Name={this.state.persons[1].name} 
                Title={this.state.persons[1].title} 
                Age={this.state.persons[1].age}/>
          <Box Name={this.state.persons[2].name} 
                Title={this.state.persons[2].title} 
                Age={this.state.persons[2].age}/>
        </div>
        </div>
      );
    }
  }
/*
const Main = () => {
    return (
        <div className='main'>Wau! 
        <button onClick={pushMe}>Push me</button>
        <div>
        <Box Name="Neo" Age="1"/>
        <Box Name="Node" Age="0"/>
        <Box />
        </div>
        </div>
        
    )
}
const pushMe = () => {
    console.log("not too hard");
}


*/
export default Main;