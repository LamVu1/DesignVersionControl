import React from 'react';
import { logout } from '../reducers/session/session_action';
import {fetchGalleries} from '../reducers/galleries/galleries_action';
import { connect } from 'react-redux'; 
import { withRouter, Link } from 'react-router-dom';
import GalleryIndexItem from '../components/gallery_index_item';
// import Admin from '../components/admin_component';

class MainPage extends React.Component{
    constructor(){
        super();
        this.state = {
          galleries: []
        }
        this.handleLogout = this.handleLogout.bind(this);
        this.handleLink = this.handleLink.bind(this);
    }

 

    componentDidMount(){
      this.props.fetchGalleries()
      // .then( galleries => {this.setState({galleries: Object.values(galleries.galleries)})})
    }

    handleLogout(){
        this.props.logout().then(()=>{this.props.history.push('/')})
      }


    handleLink(){
      this.props.history.push('upload')
    }

    render(){
      
      let {galleries} = this.props


      let inprogress = galleries.map((gallery, idx)=>{
           if(gallery.state==='inprogress'){
             return(
             <GalleryIndexItem lastupdate={gallery.updated_at} title={gallery.title} id={gallery.id} state={gallery.state} images={gallery.imagesURL} key={idx}/>)
           }else{
             null
           }
        }
    )

    let accepted = galleries.map((gallery, idx)=>{
      if(gallery.state.includes('accepted')){
        return(
        <GalleryIndexItem lastupdate={gallery.updated_at} title={gallery.title} id={gallery.id} state={gallery.state} images={gallery.imagesURL} key={idx}/>)
      }else{
        null
      }
   }
    )

    let rejected = galleries.map((gallery, idx)=>{
      if(gallery.state.includes('rejected')){
        return(
        <GalleryIndexItem lastupdate={gallery.updated_at} title={gallery.title} id={gallery.id} state={gallery.state} images={gallery.imagesURL} key={idx}/>)
      }else{
        null
      }
   }
    )

        return(
            <div className='Main-Page'>

                <div className='Top-Container'>

                    <div className='Nav'>


                        <button className='Upload-Page-btn' onClick={this.handleLink}>Create Gallery</button>

        <div className='Nav-Username'>Hello {this.props.username[0].username}</div>

                        <button className='Log-Out-btn' onClick={this.handleLogout}>Log Out</button>

                    </div>


                </div>
        
             
              <div className='Gallery-Index'>
                <div className='Not-Accepted'>

                  <div className='Inprogress-Container'>
                    <div className='Container-Headers inprogress-header'>In Progress</div>
                    <div className='Inprogress'>
                    {inprogress}
                    </div>
                  </div>
                  <div className='Rejected-Container'>

                  <div className='Container-Headers rejected-header'>Rejected</div>

                  <div className='Rejected'>

                    {rejected}
                  </div>
                  </div>

                </div>

                <div className='Accepted-Container'>
                <div className='Container-Headers accepted-header'>Accepted</div>
                <div className='Accepted'>
                  {accepted}
                  <div className='empty-div'></div>
                </div>

                </div>

              </div>
               
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
  
    return(
      { currentUser: state.session.id,
        galleries : Object.values(state.entities.galleries),
        username: Object.values(state.entities.users)
      }
    )
}
     

  const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    fetchGalleries: ()=>dispatch(fetchGalleries())
  
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(MainPage));
