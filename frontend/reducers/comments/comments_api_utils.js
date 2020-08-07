export const fetchComments = (gallery_id)=>{
    return(  
        $.ajax(
          {
              method: 'GET',
              url: `/api/galleries/${gallery_id}/comments`
          })
      )
  }
  
  export const createComment = (comment)=>{
      return(
          $.ajax(
          {
              method: 'POST',
              url: `/api/galleries/${comment.gallery_id}/comments`,
              data: {comment}
          })
      )
  }
  
//   export const deleteComment = (comment) => {
//       return(
//           $.ajax(
//           {
//               method: 'DELETE',
//               url: `/api/posts/${comment.post_id}/comments/${comment.id}`
//           })
//       )
//   }