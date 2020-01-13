import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
import puce from './puce.png'
import visa from './visa.jpeg'
import CreditCard from './CreditCard';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: '',
      valid: '',
      name: ''
    }
  }
  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }
  onChange = (e)=> {
    const re = /^[0-9\b]+$/;
    if (e.target.value === '' || re.test(e.target.value)) {
       this.setState({number: e.target.value})
    }
 }
  render() {
    return (
      <div className='App'>
        <CreditCard infos={this.state} />

        <div className="Inputs">

          <label for="fname">Card number</label>
          <input onChange={this.handleChange && this.onChange} name="number"  placeholder="Your Card number.." maxLength='16' value={this.state.number} />

          <label for="lname">Name</label>
          <input onChange={this.handleChange} name="name" type="text" placeholder="Your Name.." maxLength="20" />

          <label for="lname">Valid thru</label>
          <input onChange={this.handleChange } name="valid" type="text" placeholder="Valid thru" maxLength="4" />

        </div>


      </div>
    )
  }
}

export default App;
