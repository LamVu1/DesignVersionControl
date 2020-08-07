import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";

import GalleryImages from './gallery_detail_image';
import Comment from './comment_component';
import Status from './status_component';

class GalleryDetail extends React.Component {
  constructor() {
    super()
  }

  render() {

    let {title, images, id, status, lastupdate} = this.props

    // <img className='Gallery-Detail-Image' src={this.props.images[0]} alt=""/>


    return (
      <div className='Gallery-Container'>
          <GalleryImages images={images}/>
          <div className='Gallery-Info-Container'>
           <Status status={status} id={id} lastupdate={lastupdate}/>

          <p  className='Gallery-Title'>{title}</p>
          <Comment gallery_id={id}/>
          </div>
      </div>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
//   openModal: (data)=>dispatch(openModal(data))
// })

// const mapStateToProps = (state, ownProps) => {
  
//   return(
//     { 
//       state: state,
//     }
//   )
// }

// export default GalleryIndexItem


export default connect(null, null)(GalleryDetail);
