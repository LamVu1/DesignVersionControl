import * as APIUtil from './comments_api_utils';

export const RECEIVE_ALL_COMMENTS = 'RECEIVE_ALL_COMMENTS';
export const RECEIVE_COMMENT = 'RECEIVE_COMMENT';

const receiveComments = (comments)=>({
    comments: comments,
    type: RECEIVE_ALL_COMMENTS
});

const receiveComment = (comment)=>({
    comment,
    type: RECEIVE_COMMENT
});

export const fetchComments = (Post_id)=>(dispatch)=>(
    APIUtil.fetchComments(Post_id).then( comments => dispatch(receiveComments(comments)))
)

export const createComment = (comment)=>(dispatch)=>(         
    APIUtil.createComment(comment).then(comment=> {dispatch(receiveComment(comment))},err =>{
    dispatch(receiveErrors(err.responseJSON))
   
})
    
    )
