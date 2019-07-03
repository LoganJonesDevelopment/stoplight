import React from 'react';
import logo from './logo.svg';
import './App.css';

class App extends React.Component {
  constructor(props) {
   super(props);
    this.state = {
      greenClass: 'green',
      yellowClass: 'yellowOff',
      redClass: 'redOff'
    }
  }
  
 
  handleGreenClick = () => {
   
    this.setState({greenClass: !this.state.greenClass});
            this.setState({yellowClass: 'yellowOff'});
            this.setState({redClass: 'redOff'});


    
  }
  handleYellowClick = () => {
        this.setState({yellowClass: !this.state.yellowClass});
 this.setState({greenClass: 'greenOff'});
     this.setState({redClass: 'redOff'});
  }
  handleRedClick = () => {
   this.setState({redClass: !this.state.redClass});
     this.setState({greenClass: 'greenOff'});
                this.setState({yellowClass: 'yellowOff'});


  }
  render() {
     
    return (
      <div>
        <h3> Click the stoplights to change them </h3>
        <div class="container">  <br />
        <div class={this.state.greenClass ? 'greenOff': 'green'} onClick= {this.handleGreenClick}></div> <br />
        <div class={this.state.yellowClass ? 'yellowOff': 'yellow'} onClick={this.handleYellowClick}></div>  <br />
         <div class={this.state.redClass ? 'redOff': 'red'} onClick={this.handleRedClick}></div>
          
        </div>
        </div>
    );
  }
}



export default App;
