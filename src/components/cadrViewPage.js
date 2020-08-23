import React, { Component } from "react";
import moment from "moment";
import "../Css/cardViewPage.css";
import _ from "loadsh";
import JournalViewPage from './JournalViewPage'
import { Link } from 'react-router-dom';

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
    let sortData = [];
    if (Journal && Journal.length > 1) {
      sortData = _.sortBy(Journal, function (object) {
        console.log(moment(object.newDate).format());
        return moment(object.newDate).format();
      }).reverse();
      this.setState({ JournalData: sortData });

    } else{
      this.setState({ JournalData: Journal });

    }
  }

  detailViewPage = (data) => {

    console.log("function",data);
    return <JournalViewPage />     
  }


  render() {
    return (
      <div className="body" key={"rt"}>
        <div className="heading-tag">
          <h1> All Journal</h1>
        </div>
        <div className="btn-add">
          <a className="btn btn-primary " href="/add-journal">
            Add New Journal
          </a>
        </div>
        <div className="container-view">
          {this.state.JournalData &&
            this.state.JournalData.map((journal, i) => (
              <div className="cardContainer" key={(journal && journal.newDate, i + 3)}>
                <div className="date">
                  <h5 key={(journal && journal.newDate, i)} className="font-style">
                    {moment(journal && journal.newDate).format("dddd")}
                  </h5>
                  <h5 key={(journal && journal.newDate, i + 1)}>
                    {moment(journal && journal.newDate).format("DD-MMM-YYYY")}
                  </h5>
                </div>
                <Link  to={{
                pathname: `/journal-details/${journal.id}`, 
                journalData:{data: journal}
                }}>
              {/* <a href="/journal-details"> */}
                <div className="data-field">
                  <h1 key={journal && journal.headLine} className="headline">
                    {journal && journal.headLine}
                  </h1>
                  <p key={journal && journal.description} className="description">
                    {journal && journal.description}
                  </p>
                </div>
                {/* { this.detailViewPage(journal)} */}
                {/* </a> */}
                </Link>
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
