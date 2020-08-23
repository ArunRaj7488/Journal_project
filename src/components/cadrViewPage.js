import React, { Component } from "react";
import moment from "moment";
import "../Css/cardViewPage.css";
import _ from "loadsh";
import JournalViewPage from "./JournalViewPage";
import { Link } from "react-router-dom";

class CardViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      JournalData: [],
      searchDate: "",
    };
  }

  handleChange = (e) => {
    if (e.currentTarget.name === "searchDate")
      this.setState({ searchDate: e.currentTarget.value });
  };

  componentDidMount() {
    // find data from local storage
    let Journal = JSON.parse(localStorage.getItem("journalData"));
    let sortData = [];
    //sort date by date
    // if(this.state.searchDate &&){
    //   Journal.map
    // }
    if (Journal && Journal.length > 1) {
      if (this.state.searchDate) {
        let searchData = [];
        Journal.forEach((item) => {
          if (item.newDate === this.state.searchDate) {
            searchData.push(item);
          }
        });
        sortData = _.sortBy(searchData, function (object) {
          return moment(object.newDate).format();
        }).reverse();
        this.setState({ JournalData: sortData });
      } else {
        sortData = _.sortBy(Journal, function (object) {
          return moment(object.newDate).format();
        }).reverse();
        this.setState({ JournalData: sortData });
      }
    } else {
      this.setState({ JournalData: Journal });
    }
  }

  render() {
    return (
      <div className="body" key={"rt"}>
        <div className="heading-tag">
          <h1> All Journal</h1>
        </div>
        <div className="search-btn">
          <span className="search">
            <h4>Search by date:</h4>
            <input
              style={{ marginLeft: "5px" }}
              type="date"
              name="searchDate"
              placeholder="Enter Date"
              onChange={(e) => this.handleChange(e)}
            />
            <button
              className="btn btn-danger"
              style={{ margin: "2px" }}
              onClick={() => this.componentDidMount()}
            >
              Search
            </button>
          </span>
          <span className="btn-add">
            <a className="btn btn-primary " href="/add-journal">
              Add New Journal
            </a>
          </span>
        </div>
        <div className="container-view">
          {this.state.JournalData &&
            this.state.JournalData.map((journal, i) => (
              <div
                className="cardContainer"
                key={(journal && journal.newDate, i + 3)}
              >
                <div className="date">
                  <h5
                    key={(journal && journal.newDate, i)}
                    className="font-style"
                  >
                    {moment(journal && journal.newDate).format("dddd")}
                  </h5>
                  <h5 key={(journal && journal.newDate, i + 1)}>
                    {moment(journal && journal.newDate).format("DD-MMM-YYYY")}
                  </h5>
                </div>
                <Link
                  to={{
                    pathname: `/journal-details/${journal.id}`,
                    journalData: { data: journal },
                  }}
                >
                  <div className="data-field">
                    <h1 key={journal && journal.headLine} className="headline">
                      {journal && journal.headLine}
                    </h1>
                    <p
                      key={journal && journal.description}
                      className="description"
                    >
                      {journal && journal.description}
                    </p>
                  </div>
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
