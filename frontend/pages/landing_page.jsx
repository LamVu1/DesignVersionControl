import React from 'react';
import SignIn from '../components/sign_in_component';
import SignUp from '../components/sign_up_component';

class LandingPage extends React.Component{
    constructor(){
        super();
        this.flag = true;
        this.handleButton = this.handleButton.bind(this);

    }

    handleButton(){
        let signin = document.getElementsByClassName('sign-in')
        let signup = document.getElementsByClassName('sign-up')
        let btn = document.getElementsByClassName("form-btn")
        if(this.flag){
            signin[0].style.display = "none";
            signup[0].style.display = "flex";
            btn[0].innerHTML = "Already have an account? Sign In"
            this.flag = false;
        }
        else{
            signin[0].style.display = "flex";
            signup[0].style.display = "none";
            btn[0].innerHTML = " Not a member? Sign Up"
            this.flag = true;

        }
    }

    render(){

        let btn;
        
            btn =  <div className="form-btn" onClick={this.handleButton}>
            Not a member? Sign Up
        </div>
        

        return(
            <div className='landing-page'>
                  <div className='form-div'>
                    <SignIn />
                    <SignUp />
                    {btn}
                </div>
            </div>
        )
    }



}

export default LandingPage;