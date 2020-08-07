import * as APIUtil from './galleries_api_utils';
export const RECEIVE_ALL_GALLERIES = 'RECEIVE_ALL_GALLERIES'; 
export const RECEIVE_GALLERY = 'RECEIVE_GALLERY';
export const UPDATE_GALLERY = 'UPDATE_GALLERY';


const receiveGalleries = (galleries)=>({
    galleries: galleries,
    type: RECEIVE_ALL_GALLERIES
})

const receiveGallery = (gallery)=>({
    gallery: gallery,
    type: RECEIVE_GALLERY
})

export const fetchGallery = (gallery_id)=>(dispatch)=>(
    APIUtil.fetchGallery(gallery_id).then( gallery => dispatch(receiveGallery(gallery)))
)

export const fetchGalleries = ()=>(dispatch)=>{
    return(
        APIUtil.fetchGalleries().then( galleries =>  dispatch(receiveGalleries(galleries)))
    )
}


export const createGallery = (gallery)=>(dispatch)=>{
    return(
    APIUtil.createGallery(gallery).then(gallery=> dispatch(receiveGallery(gallery))))
}


export const updateGallery = (gallery)=>(dispatch)=>{
    return(
    APIUtil.updateGallery(gallery).then(gallery=> dispatch(receiveGallery(gallery))))
}

