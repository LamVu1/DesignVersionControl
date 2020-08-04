import React from 'react';
import { logout } from '../reducers/session/session_action';
import {fetchGalleries} from '../reducers/galleries/galleries_action';
import { connect } from 'react-redux'; 
import { withRouter, Link } from 'react-router-dom';
import GalleryIndexItem from '../components/gallery_index_item';

class MainPage extends React.Component{
    constructor(){
        super();
        this.state = {
          galleries: []
        }
        this.handleLogout = this.handleLogout.bind(this);
    }

    componentDidMount(){
      this.props.fetchGalleries().then( galleries => this.setState({galleries: Object.values(galleries.galleries)}))
        // this.setState({galleries: this.state.galleries))
    }

    handleLogout(){
        this.props.logout().then(()=>{this.props.history.push('/')})
      }

    render(){

      console.log(this.state)
      
      let {galleries} = this.state

      let content = galleries.map((gallery, idx)=>{
        
        return(
          <GalleryIndexItem title={gallery.title} state={gallery.state} images={gallery.imagesURL} key={idx}/>
        )
    })

        return(
            <div>
                <h1>MAIN PAGE</h1>
                <button onClick={this.handleLogout}>Log Out</button>
                {content}
                <Link to={`/upload`}>Upload</Link>
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
  
    return(
      { currentUser: state.session.id,
        galleries : state.entities.galleries
      
      }
    )
}
     

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchGalleries: ()=>dispatch(fetchGalleries())
  
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
// export default MainPage;