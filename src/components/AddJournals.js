import React, { Component } from "react";
import "../../src/Css/addJournals.css";

class AddJournals extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // formData: {
        id: '',
      headLine: "",
      description: "",
      newDate: "",
      image: [null],

      // },
    };
  }

  handleChange = (e) => {
    if (e.currentTarget.name === "headLine")
      this.setState({ headLine: e.currentTarget.value });
    if (e.currentTarget.name === "description")
      this.setState({ description: e.currentTarget.value });
    if (e.currentTarget.name === "newDate")
      this.setState({ newDate: e.currentTarget.value });
  };

  onSubmit = async (e) => {
    try {
      e.preventDefault();

      if (this.state.headLine === "") {
        alert("Headline can not be empty!");
        return;
      }
      if (this.state.description === "") {
        alert("Description can not be empty!");
        return;
      }
      if (this.state.newDate === "") {
        alert("Date can not be empty!");
        return;
      }
      let previousData = [];

      previousData = JSON.parse(localStorage.getItem("journalData"));

      let dataObject = {
        id: previousData ? previousData.length + 1 : 1,
        headLine: this.state.headLine,
        description: this.state.description,
        newDate: this.state.newDate,
      };

      console.log(previousData, dataObject );
      // let previousData = [];
      // previousData = JSON.parse(localStorage.getItem("journalData"));

      // if (JSON.parse(localStorage.getItem("journalData"))) {
      //   console.log("gdhsgdhs", previousData);
      //   previousData.push(dataObject);
      // } else {
      // }

    if(previousData){
      previousData.push(dataObject);
      let res = localStorage.setItem(
        "journalData",
        JSON.stringify(previousData)
      );
    }else{
      let res = localStorage.setItem(
        "journalData",
        JSON.stringify([dataObject])
      );
    }
      
      //})
      window.location.pathname = "/";

      alert("Add Journal Data successfully");
    } catch (err) {
      console.log("Something went wrong!", err);
    }
  };

  render() {
    return (
      <div className="container">
        <h3>Add Journal Form</h3>
        <form className="form">
          <span className="form-group">
            <label className="label">HeadLines:</label>
            <input
              required
              className="input"
              name="headLine"
              type="text"
              placeholder="Enter Head Line"
              onChange={(e) => this.handleChange(e)}
            />
          </span>

          <span className="form-group">
            <label className="label">Description:</label>
            <textarea
              className="input"
              rows="4"
              name="description"
              type="textarea"
              placeholder="Enter Description"
              onChange={(e) => this.handleChange(e)}
            />
          </span>

          <span className="form-group">
            <label className="label">Add Date:</label>
            <input
              className="input"
              style={{}}
              name="newDate"
              type="date"
              placeholder="Enter Date"
              onChange={(e) => this.handleChange(e)}
            />
          </span>

          {/* <div  className="form-group" >
                        <label className="label" >Add Image:</label>
                        <input className="input" style={{}} name="image" type="file" placeholder="Enter Date"  onChange={(e)=>this.handleChange(e)} />
                     </div> */}

          <div style={{ marginRight: "20px" }}>
            <button className="btn btn-primary" onClick={this.onSubmit}>
              Add New Journal
            </button>
          </div>
        </form>
      </div>
    );
  }
}
export default AddJournals;
