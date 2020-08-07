import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {openModal} from '../reducers/ui/ui_action';


class GalleryIndexItem extends React.Component {
  constructor() {
    super()
  }

  render() {

    let {title, images, openModal, id, state, lastupdate} = this.props

    
    return (
      <div className='gallery-item' onClick={()=>{openModal({lastupdate: lastupdate, state:state, id: id, title: title, images: images})}}>
        <div className='gallery-item-title'>{title}</div>
        <img className='gallery-index-img' src= {images[0]} alt=""/>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  openModal: (data)=>dispatch(openModal(data))
})


export default connect(null, mapDispatchToProps)(GalleryIndexItem);
