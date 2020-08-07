export const fetchAdmins = ()=>{
    return(  
        $.ajax(
          {
              method: 'GET',
              url: `/api/admins`
          })
      )
  }
  
  export const createAdmin = (comment)=>{
      return(
          $.ajax(
          {
              method: 'POST',
              url: `/api/admins`,
              data: {comment}
          })
      )
  }
  
  export const deleteAdmin = (admin) => {
      return(
          $.ajax(
          {
              method: 'DELETE',
              url: `/api/admins/${admin.id}`
          })
      )
  }