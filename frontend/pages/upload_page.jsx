import React from 'react';
import { createGallery } from '../reducers/galleries/galleries_action';
import { connect } from 'react-redux'; 
import { withRouter, Link } from 'react-router-dom';


class UploadPage extends React.Component{
    constructor(props){
        super(props);
        this.state = {title:'', images: [], preview: []};
        // this.preview = [];
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.handleFile = this.handleFile.bind(this);
        this.removeImage = this.removeImage.bind(this);
        this.previewImage = this.previewImage.bind(this);
        this.handleLink = this.handleLink.bind(this);

    }

    handleLink(){
        this.props.history.push('main')
      }
    
    handleChange(e){
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleSubmit(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('gallery[title]', this.state.title);
        
        for(let i=0; i<this.state.images.length; i++){
            formData.append('gallery[images][]', this.state.images[i]);
        }

        this.props.createGallery(formData).then(res=> {this.props.history.push('/main')})

    } 

    handleFile(e){  
        if(this.state.images.length<5){
            this.setState({images: [...this.state.images,e.currentTarget.files[0]]});   
            var file= document.querySelector('input[type=file]').files[0];   
            this.setState({preview: [...this.state.preview, URL.createObjectURL(file) ] }) 
        }
      }

    removeImage(idx){
        let newstate = this.state.images.filter((ele,id)=> id!==idx)
        let newprev = this.state.preview.filter((ele,id)=> id!==idx)

        this.setState({images: newstate});   
        this.setState({preview:  newprev}); 
    }
    
    previewImage(){
        let prev = this.state.preview.map((prev,idx)=>{
            return(
            <div className="Preview-Image-Container" key={idx}>
                <img className="Preview-Image" src={prev}/>
                <div className="Remove-Image-btn" onClick={()=>{this.removeImage(idx)}}>X</div>
            </div>
            )
        })
        return prev
    }

    render(){

        return(
            <div className='Upload-Page'>
                
                <div className='Nav-Empty'></div>
        
                
                <form className='Upload-Form-Container'>
                    <div className='Upload-Form'>
                    <div className='Upload-Form-Title-Div'>
                    <label>Title: </label>
                    <input  type="text" name="title" value={this.state.title} multiple onChange={this.handleChange}/>
                    <div>Maximum Image Upload: 5</div>    

                    </div>
                    <div className='input-file-div'><div className='input-file-p'>
                    Choose Image
                    </div>
                      
                        <input className='input-file' type="file" onChange={this.handleFile}/>    
                    </div>

                    </div>

                {this.state.images===[]

                ? <div></div>

                : <div className="Preview-Container">

                        <div className="Preview-Container-P">Preview:</div>
                        <div className='Preview-Images-Container'>
                        {this.previewImage()}
                        </div>


                    </div>
                }

                </form>
                <div className='upload-page-bottom-div'>
                <button className='Upload-Page-btn' onClick={this.handleLink}>
                    Go Back Home
                </button>
                <button className='Upload-Page-btn' onClick={this.handleSubmit}>Create Gallery</button>      
              
                </div>

              
            </div>
        )
    }

}


const mapStateToProps = (state, ownProps) => {
  
    return(
      {state: state
      
      }
    )
}
     

  const mapDispatchToProps = (dispatch) => ({
    createGallery: (gallery) => dispatch(createGallery(gallery)),
  })


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(UploadPage));
