import React,{ Component } from 'react';
//import UploadServices from '../services/UploadFiles';
import { Button, Row, Col } from 'react-bootstrap';
import '../../src/Css/addJournals.css';

class AddJournals extends Component {
    constructor(props) {
        super(props);
        this.state = {
            // formData: {
              headLine: '',
              description: '',
              newDate: '',
              image: [null]
              
            // },
        };
    };

    handleChange = (e)=>{
        if(e.currentTarget.name === "headLine") this.setState({headLine: e.currentTarget.value});
        if(e.currentTarget.name === "description") this.setState({description: e.currentTarget.value});
       // if(e.currentTarget.name === "newDate") this.setState({newDate: e.currentTarget.value})
    }

     onSubmit = async (e) => {
      try {
        e.preventDefault();

        let dataObject = {
          headLine: this.state.headLine,
          description: this.state.description,
          newDate: new Date(),
        };

        let previousData = []
      
        if(JSON.parse(localStorage.getItem("journalData"))) {
          previousData = JSON.parse(localStorage.getItem("journalData"));
          console.log("gdhsgdhs",previousData);
          previousData.push(dataObject)
        }
        else{
          previousData.push(dataObject)
          console.log("2",previousData);

        }
        console.log("3",previousData);


        //previousData.map( item => {
          let res = localStorage.setItem('journalData',JSON.stringify(previousData) );
        //})
        window.location.pathname = "/"


        alert("Add Journal Data successfully");
      } catch (err) {
        console.log('Something went wrong!', err)
      }
    };

    
    
  
      render () {
          return (
            <div className="container">
                <form >

                     <div className="form-group"   >
                            <label className="label">HeadLines:</label>
                            <input className="input" name="headLine" type="text" placeholder="Enter Head Line" onChange={(e)=>this.handleChange(e)} />
                     </div>

                     <div  className="form-group" >
                        <label className="label" >Description:</label>
                        <textarea  className="input" rows="4" name="description" type="textarea" placeholder="Enter Description"  onChange={(e)=>this.handleChange(e)} />
                     </div>

                     {/* <div  className="form-group" >
                        <label className="label" >Add Date:</label>
                        <input className="input" style={{}} name="newDate" type="date" placeholder="Enter Date"  onChange={(e)=>this.handleChange(e)} />
                     </div>

                     <div  className="form-group" >
                        <label className="label" >Add Image:</label>
                        <input className="input" style={{}} name="image" type="file" placeholder="Enter Date"  onChange={(e)=>this.handleChange(e)} />
                     </div> */}

                     <div as={Row}className="form-group" >
                        <Col sm={{ span: 10, offset: 2 }}>
                        <Button onClick={this.onSubmit}>Add New Journal</Button>
                        </Col>
                    </div>

                </form>
            </div>
          );
      }
};
export default AddJournals