import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {openModal} from '../reducers/ui/ui_action';


class GalleryIndexItem extends React.Component {
  constructor() {
    super()
  }

  render() {

    let {title, images, openModal} = this.props

    return (
      <div className='gallery-item' onClick={openModal}>
        <p>{title}</p>
        <img className='gallery-index-img' src= {images[0]} alt=""/>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
  openModal: (data)=>dispatch(openModal(data))
})

// const mapStateToProps = (state, ownProps) => {
  
//   return(
//     { 
//       state: state,
//     }
//   )
// }

// export default GalleryIndexItem


export default connect(null, mapDispatchToProps)(GalleryIndexItem);
