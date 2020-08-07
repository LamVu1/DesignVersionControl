import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";


class Admin extends React.Component {
  constructor() {
    super()
    this.state = {
        body: ''
    }
  } 

  render() {

    return (
      <div>
          <h1>ADMIN</h1>
      </div>
    );
  }
}


// const mapDispatchToProps = dispatch => ({
//     fetchComments: (gallery_id) => dispatch( fetchComments(gallery_id)),
//     createComment: (comment)=>dispatch(createComment(comment))
// })

// const mapStateToProps = (state, ownProps) => {
  
//   return(
//     { 
//         comments: Object.values(state.entities.comments),
//     }
//   )
// }

// export default GalleryIndexItem


export default connect(null, null)(Admin);
