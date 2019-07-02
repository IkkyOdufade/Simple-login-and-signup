import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
const axios = require('axios');

 class Register extends Component {
   constructor(props) {
     super(props)
   
     this.state = {
        fullname:"",
        username:"",
        email:"",
        password:""
      
     };
     this.handleChange=this.handleChange.bind(this)
     this.handleSubmit=this.handleSubmit.bind(this);
    }
   handleChange(event){
     const value = event.target.value
     const id = event.target.id
     this.state[id]=value
   };
   handleSubmit(event){
     event.preventDefault()
     axios.post("http://localhost:8880/register", this.state)
     .then(res =>{
       const data = res.data
       if(data.status){
         alert(`Sign up successful. Welcome...`)
       }else{
         alert(`Sign up unsuccessful, try again!!!`)
       }
     })
     .catch(err=>{
       console.log(err)
     })
   };

  render(){
    return (
      // <div className="PageSwitcher"></div>
      <div className="App-header">
      <div id="form">
          <h2 id="header">SIGN UP TO THE RESISTANCE!!!</h2>
      <Form onSubmit={this.handleSubmit}>
  <Form.Group controlId="fullname">
    <Form.Label>Full Name</Form.Label>
    <Form.Control onChange={this.handleChange} type="text" placeholder="Enter fullname" size = "lg"/>
  </Form.Group>
 
  <Form.Group controlId="email">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" onChange={this.handleChange} placeholder="Enter email" size = "lg"/>
  </Form.Group>

  <Form.Group controlId="username">
    <Form.Label>Username</Form.Label>
    <Form.Control onChange={this.handleChange} type="text" placeholder="Enter username" size = "lg"/>
  </Form.Group>

  <Form.Group controlId="password">
    <Form.Label>Password</Form.Label>
    <Form.Control onChange={this.handleChange} type="password" placeholder="Password" size = "lg" />
  </Form.Group>
 
  <Form.Group controlId="confirmpassword">
    <Form.Label>Confirm Password</Form.Label>
    <Form.Control onChange={this.handleChange} type="password" placeholder="Confirm Password" size = "lg" />
  </Form.Group>

  <Form.Group>
    <Form.Check type="checkbox" label="Keep me signed in" />
  </Form.Group>
  {['checkbox'].map(type=>(
    <div key = {`inline-${type}`} className= "mb-3">
      <Form.Check className="leftCheck" inline label="Agree to terms and conditions" type ={type} id = {`inline-${type}-1`}/>
    </div>
  ))}
  <Button type='submit' variant="primary" type="submit" size ="lg" block>
   Sign Up
  </Button><br></br>
  {/* <a href ="yahoo.com">Forgot Password?</a> */}
</Form>

      </div>
      </div>
    )
  }
};

 export default Register;
