import React from 'react';
import {closeModal} from '../reducers/ui/ui_action';
import {fetchGalleries} from '../reducers/galleries/galleries_action';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import GalleryDetail from './gallery_detail';


{/* <div className="PostContainer" onClick={ e => e.stopPropagation()}>
  <PostDetailContainer 
     post={data}
   />
</div>
 <div onClick={()=>closeModal()} className="close-x"><i className="fas fa-times"></i></div> */}



{/* <div onClick={()=>closeModal()} className="close-x">
                   
                   <i className="fas fa-times"></i>

                </div> */}



                
        //         <div onClick={ e => e.stopPropagation()}>               
        //         <PostDetail post={post}/>
        //    </div>



class Modal extends React.Component{
    constructor(){
        super();

        this.handleCloseModal = this.handleCloseModal.bind(this);
    }

    handleCloseModal(){
        this.props.closeModal();
        this.props.fetchGalleries();
    }

    render(){
        let {ui, closeModal, data} = this.props;
        let content;
        
        if(ui){
            content = 
            null
        }
       else{
           content=
           
           <div className='modal-background' scroll='no'>

               <div className='modal-child-container' scroll='no' onClick={this.handleCloseModal}>


               <div className='modal-child' onClick={ e => e.stopPropagation()}>               
                <GalleryDetail lastupdate={data.lastupdate} title={data.title} images={data.images} id={data.id} status={data.state}/>

                </div>
            


               </div>

               

           </div>
        
       }

        return(
            <div>
                {content}
            </div>
            

        )

    }
}



const mapStateToProps=state=>{
    
    return(
        {
           ui: state.ui.hidden,
           data: state.ui.data
        }
    )
}

const mapDispatchToProps=dispatch=>{
    return(
        {
            closeModal: ()=>dispatch(closeModal()),
            fetchGalleries: ()=>dispatch(fetchGalleries())
        }
    )
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal)
