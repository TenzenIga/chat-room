import React from 'react'
import PropTypes from 'prop-types'



class Register extends React.Component {
  constructor(props){
    super(props)
    this.state ={
      nickname:''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

    handleChange(e){
    this.setState({
      nickname: e.target.value
      })
  }

    handleSubmit(e){
    e.preventDefault();
    this.props.registerUser(this.state)
  }

    render (){
      return (
      <form onSubmit= {this.handleSubmit} >
      <input onChange={this.handleChange} type='text' name='nickname' />
      <button>Submit</button>
      </form>
    )
    }
  }

export default Register;
