import React from 'react';
import './Box.css';



const Box = (props) => {
    return (
        <div id="box1_0" className='box'>
            <p>Name: {props.Name}</p>
            <p>Age: {props.Age}</p>
            <p>Title: {props.Title}</p>
            
        </div>
    )
}
/*
class Box extends Component {
    state = {
      counter: 0
    };
    timesClicked = (event) => {
      this.setState({counter: this.state.counter+1});
    }
    render (props) {
      return (
        <div className='main'>
            <div>
                
         <p>{this.state.counter}</p>
         <button onClick={this.timesClicked}>Push something</button> 
        </div>
        </div>
      );
    }
  }
*/

/*
let box1 = document.getElementById('box1');
let boxAge = parseInt(box1.innerHTML);

const Counter = () => {
    boxAge += 1; //increase value
        document.getElementById('box1').innerHTML = boxAge; //update value
        
        setBackgroudColor();
}

function setBackgroudColor() {
    if(boxAge % 2 == 0) { //if even, backgroudcolor to blue
      document.getElementById('box1_1').style.backgroundColor = 'blue';
    }
    else { //if odd, backgroudcolor to red
      document.getElementById('box1_1').style.backgroundColor = 'red';
    }

  }
*/
export default Box;