import React from 'react';
import { connect } from 'react-redux';
import { signup } from '../reducers/session/session_action';
import { withRouter } from "react-router";



class SignUp extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    const { name, value } = e.target;
    this.setState({ [name]: value });
    };

  handleSubmit(e){
    e.preventDefault();
    const user = Object.assign({}, this.state);
    console.log(user)
    this.props.signup(user)
  }

  render() {

    const {username, password} = this.state;

    return (
      <div className='sign-up'>
          <h1>Sign Up</h1>
          <form className='sign-up-form'>
            <input type="text" name='username' placeholder='Username' value={username} onChange={this.handleChange}/>
            <input type="text" name='password' placeholder='Password' value={password} onChange={this.handleChange}/>
            <button onClick={this.handleSubmit}>Submit</button>      
        </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  signup: user => dispatch(signup(user))
})

const mapStateToProps = (state, ownProps) => {
  
  return(
    { 
      state: state,
      history: ownProps.history
    }
  )
}

export default connect(mapStateToProps, mapDispatchToProps )(SignUp);
