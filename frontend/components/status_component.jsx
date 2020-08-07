import React from 'react';
import {connect } from 'react-redux';
import {updateGallery, fetchGallery} from '../reducers/galleries/galleries_action';
import {calcTime} from '../utils/calculate_time';


class Status extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            status: '',
            change: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }


    componentDidMount(){
        this.props.fetchGallery(this.props.id).then(res=>this.setState({status: Object.values(res.gallery)[0].state}))
    }

    handleChange(e){
        this.setState({change: e.target.value});
    }

    handleSubmit(e){
        e.preventDefault();
        
        if(this.state.change===this.state.status || this.state.status.includes(this.state.change)) return;

        if(this.state.change==='inprogress'){
            let gallery = {id: this.props.id, state: this.state.change}
            this.props.updateGallery(gallery).then(res=> this.setState({status: Object.values(res.gallery)[0].state})
            )
            alert("Status Updated");
        }
        if(this.state.change==='accepted' || this.state.change==='rejected'){
                let last = calcTime(this.props.lastupdate)
                let newStatus = this.state.change+'@'+this.props.username+'@'+last
                let gallery = {id: this.props.id, state: newStatus}
            this.props.updateGallery(gallery).then(res=> this.setState({status: Object.values(res.gallery)[0].state}))
            alert("Status Updated");
            }
        }


    render(){



        let status = this.state.status;
        let user;
        let lastupdate;
        if(!status.includes('inprogress')){
            let arr = status.split('@')
            status = arr[0].charAt(0).toUpperCase()+arr[0].slice(1);
            user = arr[1]
            lastupdate = arr[2]
        }else{
            status = 'In progress'
        }

        let info;
        if(status ==='In progress'){
        info = <div className='Gallery-Status'>
            <div className='Gallery-Status-Info'>

            
            {status}</div></div>
        }else{
            info = <div className='Gallery-Status'>
              
                <div className='Gallery-Status-Info'>
                <div>
                {status}

                </div>
                <div>
                by: {user}
                    
                    </div>
                <div>
                on: {lastupdate}

                </div>

                </div>
                
                
            </div>
        }

        return(
            <div className='Status-Container'>
                {info}
                <form className='Status-Form'>
                    <label>Change status:</label>
                    <select className='Status-Form-Select' value={this.state.change} onChange={this.handleChange}>
                    <option value=''> ---- </option>
                    <option value="inprogress">In Progress</option>
                    <option value="accepted">Accepted</option>
                    <option value="rejected">Rejected</option>
                    </select>
                    <button onClick={this.handleSubmit}>Confirm</button>
                </form>


            </div>
        )
    }
}
// {/* <p>{status}</p> */}

const mapStateToProps = (state, ownProps) => {
  
    return(
      { username: Object.values(state.entities.users)[0].username,
      }
    )
}
     

  const mapDispatchToProps = (dispatch) => {
      return(
          {

              updateGallery: (gallery)=>dispatch(updateGallery(gallery)),
              fetchGallery: (gallery_id) => dispatch(fetchGallery(gallery_id))
          }
      )
  
  }


export default connect(mapStateToProps, mapDispatchToProps)(Status);
