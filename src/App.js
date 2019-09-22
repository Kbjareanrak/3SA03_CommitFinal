import React, {Component} from 'react';
import './App.css';
import WordCard from './WordCard';

class App extends Component {
  render() {
    return (
    <div className="posText">
      <h2 style={{ color:'rgb(10, 51, 26)'}}>Wellcom to Game Card </h2>
      <WordCard value="hello"/>
      <h3>Kanokwan Jareanrak 5935512090!!!</h3>
    </div>
    );
   }  
}

export default App;