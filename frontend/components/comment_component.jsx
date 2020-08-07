import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router";
import {createComment, fetchComments} from '../reducers/comments/comments_action';
import {calcTime} from '../utils/calculate_time';


class Comment extends React.Component {
  constructor() {
    super()
    this.state = {
        body: ''
    }

    this.handleUpdate = this.handleUpdate.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount(){
    this.props.fetchComments(this.props.gallery_id);
    }



  handleUpdate(){
    return(e=>{this.setState({body: e.target.value})});
}

handleSubmit(e){
    e.preventDefault();
    const comment = {body: this.state.body, gallery_id: this.props.gallery_id}
    this.props.createComment(comment);
    this.setState({body:''})
}
 

  render() {

    let comments = this.props.comments.map((comment, idx)=>{
      
        return(
            <div key={idx} className="Comment-Container">
              <div className="Comment-Info-Container">
                <div className="Comment-Author">
                    {comment.author}
                </div>
                <div className="Comment-Time">{calcTime(comment.create_at)}</div>     
              </div>
                <div className="Comment-Body">{comment.body}</div>
            </div>
        )
    })

    return (
      <div  className="Comments-Container">
          <div className="Comments-Container-Label">Comments</div>
          <div className="Comments-Div">
          {comments}

          </div>
          <form className="Comment-Form" onSubmit={this.handleSubmit}>
            <div className="Comments-Label">Add Comment:</div>
            <textarea className="Comment-Input" type="text" value={this.state.body} onChange={this.handleUpdate('body')}></textarea>
            <input className="Comment-Submit" type="submit" value="Submit"/>
          </form>
      </div>
    );
  }
}


const mapDispatchToProps = dispatch => ({
    fetchComments: (gallery_id) => dispatch( fetchComments(gallery_id)),
    createComment: (comment)=>dispatch(createComment(comment))
})

const mapStateToProps = (state, ownProps) => {
  
  return(
    { 
        comments: Object.values(state.entities.comments),
    }
  )
}

// export default GalleryIndexItem


export default connect(mapStateToProps, mapDispatchToProps)(Comment);
