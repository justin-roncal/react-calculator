import React, { Component } from 'react';
import Screen from './components/screen';
import Button from './components/button';
import logo from './logo.svg';
import './App.css';

class App extends Component {

constructor() {
  super();
  this.state = {
    question:'',
    answer:''
  }
  this.handleClick = this.handleClick.bind(this);
}



  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
      <div className="frame">
        <div className="calculator-title">
          ReactJS Calculator
        </div>
        <Screen question={this.state.question} answer={this.state.answer} />
        <div className="button-row">
          <Button label={'1'} handleClick={this.handleClick} type='input' />
          <Button label={'2'} handleClick={this.handleClick} type='input' />
          <Button label={'3'} handleClick={this.handleClick} type='input' />
          <Button label={'4'} handleClick={this.handleClick} type='input' />
          <Button label={'-'} handleClick={this.handleClick} type='input' />
          <Button label={'+'} handleClick={this.handleClick} type='input' />
        </div>

        <div className="button-row">
          <Button label={'5'} handleClick={this.handleClick} type='input' />
          <Button label={'6'} handleClick={this.handleClick} type='input' />
          <Button label={'7'} handleClick={this.handleClick} type='input' />
          <Button label={'8'} handleClick={this.handleClick} type='input' />
          <Button label={'*'} handleClick={this.handleClick} type='input' />
          <Button label={'/'} handleClick={this.handleClick} type='input' />
        </div>

        <div className="button-row">
          <Button label={'9'} handleClick={this.handleClick} type='input' />
          <Button label={'.'} handleClick={this.handleClick} type='input' />
          <Button label={'0'} handleClick={this.handleClick} type='input' />
          <Button label={'cls'} handleClick={this.handleClick} type='input' />
          <Button label={'='} handleClick={this.handleClick} type='input' />
        </div>
        
      </div>
      </div>
    );
  }

  handleClick(event){
    const value = event.target.value;
    switch (value) {
      case '=' : {
        const answer = eval(this.state.question).toString();
  
        this.setState({ answer });
        break;
      }
  
      case 'cls' : {
        this.setState({question: '', answer: ''   });
      }
  
      default: {
        this.setState({question: this.state.question += value});
        break;
      }
    }
  }
}



export default App;
