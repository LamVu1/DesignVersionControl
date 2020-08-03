import React from 'react';
import SignIn from '../components/sign_in_component';
import SignUp from '../components/sign_up_component';

class LandingPage extends React.Component{
    constructor(){
        super();
    }

    render(){

        return(
            <div className='landing-page'>
                    <SignIn />
                    <SignUp />
            </div>
        )
    }



}

export default LandingPage;