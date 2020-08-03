import React from 'react';
import { logout } from '../reducers/session/session_action';
import { connect } from 'react-redux'; 
import { withRouter } from 'react-router-dom';


class MainPage extends React.Component{
    constructor(){
        super();
        this.handleLogout = this.handleLogout.bind(this);

    }


    handleLogout(){
        this.props.logout().then(()=>{this.props.history.push('/')})
      }

    render(){

        return(
            <div>
                <h1>MAIN PAGE</h1>
                <button onClick={this.handleLogout}>Log Out</button>

            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
  
    return(
      {currentUser: state.session.id,
      
      }
    )
}
     

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
  
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
// export default MainPage;