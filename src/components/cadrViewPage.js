import React, { Component } from "react";
import moment from "moment";
import "../Css/cardViewPage.css";

class CardViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JournalData: [],
    };
  }

  componentDidMount() {
    let Journal = JSON.parse(localStorage.getItem("journalData"));
    console.log("Journal", Journal, typeof Journal);
    if(  Journal){
     const sortedActivities = Journal.slice().sort((a, b) => new Date(a.newDate) - new Date(b.newDate));

     console.log(sortedActivities);
    }


    this.setState({ JournalData: Journal });

    console.log(
      "data",
      this.state.JournalData,
      Array.isArray(this.state.JournalData)
    );
  }

  render() {
    return (
      <div className="body" key={"rt"}>
        <div className="heading-tag">
          <h1> All Journal</h1>
        </div>
        <div className="btn-add">
          <a className="btn btn-primary " href="/add-journal">Add New Journal</a>
        </div>
        <div className="container">
          {this.state.JournalData && this.state.JournalData.map((journal,i) => (
            <div className="cardContainer" key={journal.newDate, i+3} >
              <div className="date">
                <h5 key={journal.newDate, i}className="font-style">
                  {moment(journal.newDate).format("dddd")}
                </h5>
                <h5 key={journal.newDate, i+1}>{moment(journal.newDate).format("DD-MMM-YYYY")}</h5>
              </div>
              <div className="data-field">
                <h1 key={journal.headLine}>{journal.headLine.slice(0, 30) + "..."}</h1>
                <p key={journal.description}>{journal.description.slice(0, 100) + "..."}</p>
              </div>
              <div className="image-div">
                <img
                  src="http://picsum.photos/100/100"
                  style={{ borderRadius: "5px" }}
                  alt="img"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default CardViewPage;
