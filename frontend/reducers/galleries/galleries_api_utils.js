export const createGallery = (gallery) => {
  
  return(
    $.ajax(
      {
        method: 'POST',
        url: '/api/galleries',
        data: gallery,
        processData: false,
        contentType: false
      }
    )
  )
};


export const fetchGalleries = () => {
  
    return(
      $.ajax(
        {
          method: 'GET',
          url: '/api/galleries'
        }
      )
    )
};


export const fetchGallery= (gallery_id) => {

    return(
        $.ajax(
            {
                method: 'GET',
                url: `/api/galleries/${gallery_id}`
            }
        )
    )
};


export const updateGallery = (gallery) => {
  
  return(
    $.ajax(
      {
        method: 'PATCH',
        url: `/api/galleries/${gallery.id}`,
        data: gallery
      }
    )
  )
};
