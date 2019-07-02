import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import Alert from 'react-bootstrap/Alert'
const axios = require('axios')



class Login extends Component {
constructor(props) {
  super(props)

  this.state = {
     email: '',
     password: ''
  }

  this.handleChange = this.handleChange.bind(this)
  this.handleSubmit = this.handleSubmit.bind(this)
}

handleChange(event){
  const value = event.target.value
  const id = event.target.id
  // console.log(id)
  this.state[id] = value
}

handleSubmit(event) {
  event.preventDefault()
  axios.post("http://localhost:8880/login", this.state)
  .then(res => {
    const data = res.data
    if(data.status){
      alert(`Login Successful.. Welcome `)
    }else{
      alert(`Pls try again`)
    }
  })
  .catch(err => {
    console.log(err)
  })
}


  render() {
    return (
      <div className="App-header">
      <div id="form">
      <h2 >SIGN IN TO YOUR ACCOUNT</h2>
      <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={this.handleChange} placeholder="Enter email" size = "lg"/>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" onChange={this.handleChange} placeholder="Password" size = "lg" />
  </Form.Group>

  <Form.Group controlId="button">
    <Form.Check type="checkbox" label="Keep me signed in" />
  </Form.Group>
  <Button variant="primary" type="submit" size = "lg" block>
   Sign in
  </Button><br></br>
  <a href ="yahoo.com">Forgot Password?</a>
</Form>

      </div>
      </div>
    )
  }
}

export default Login
