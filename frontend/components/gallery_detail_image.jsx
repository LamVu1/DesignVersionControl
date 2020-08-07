import React from 'react';
import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';


class GalleryImages extends React.Component{
    constructor(){
        super();
        this.state = {
            main: 0
        }
        
    this.handleHoverEnter = this.handleHoverEnter.bind(this);
    this.handleHoverLeave = this.handleHoverLeave.bind(this);
    }

    handleHoverEnter(e){
        let id = e.currentTarget.getAttribute('value')
        e.currentTarget.classList.add('selected')
        this.setState(state => ({main: id}) )
    }

    handleHoverLeave(e){
        let id = e.currentTarget.getAttribute('value')
        e.currentTarget.classList.remove('selected')
    }

 
    render(){

        let {images} = this.props
        let small = images.map((image,id)=>{
            return(
                <img key={id} className='Gallery-Images-Small' onMouseEnter={this.handleHoverEnter} value={id} onMouseLeave={this.handleHoverLeave} src={image}/>
            )
        })

        let main = images[this.state.main]
     
        return(
            <div className='Gallery-Detail-Images'>
                <div className='Gallery-Images-Small-Container'>
                    {small}
                </div>
                
                <div className='Gallery-Images-Main-Container'>
                    <img className='Gallery-Images-Main' src={main}/>
                </div>

            </div>
        )
    }
}

export default connect(null, null)(GalleryImages);
