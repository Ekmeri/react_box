import React, { Component } from 'react'; //class based component
import './App.css';
import Header from './Header/Header'
import Main from './Main/Main';
import Footer from './Footer/Footer';

const Now = new Date();
class App extends Component {
  state = {
    counter: 1000
  };
  timesClicked = (event) => {
    this.setState({counter: this.state.counter+1});
  }
  render () {
    return (
      <div>
        <Header title="This is header title" text={Now.toString()}/>
        <Main/>
        <Footer/>
      </div>
    );
  }
}
/*
const App = () => {
  const Now = new Date();


  return (
    <div>
      <Header title="This is header title" text={Now.toString()}/>
      <Main/>
      <Footer/>
    </div>
  );
}
*/
export default App;
