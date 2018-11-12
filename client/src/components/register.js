import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';



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
        <Paper className='register-form' elevation={3} >
          <Typography className='register-form__heading' variant='h5'>
            Got a nickname?
          </Typography>
          <form className='register-form__form' onSubmit= {this.handleSubmit} >
            <TextField className='register-form__input'
                id="standard-name"
                label="Nickname"
                value={this.state.nickname}
                onChange={this.handleChange}
                margin="normal"
              />
          </form>
        </Paper>

    )
    }
  }

export default Register;
