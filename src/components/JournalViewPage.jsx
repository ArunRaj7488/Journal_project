import React, { Component } from "react";
import moment from "moment";
import { Link } from "react-router-dom";
import "../Css/journalviewPage.css";

class JournalViewPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      journalObj: {},
    };
  }
  componentWillMount() {
    let obj = {};
    if (this.props.location.journalData) {
      let { data } = this.props.location.journalData;
      obj = data;
    }
    this.setState({ journalObj: obj });
  }

  render() {
    let journalDatabyId = this.state.journalObj;

    return (
      <div className="whole-body">
        <div className="heading-date">
          <h4 style={{ marginTop: "20px" }}>Add Journal Date</h4>
          <h4 style={{ marginLeft: "10px", marginTop: "20px" }}>
            {journalDatabyId && moment(journalDatabyId.newDate).format("dddd")}
          </h4>
          <h4 style={{ marginTop: "20px", marginLeft: "10px" }}>
            {journalDatabyId && journalDatabyId.newDate}
          </h4>
          <Link
            className="btn btn-primary link"
            style={{ marginLeft: "10px", marginTop: "20px" }}
            to={{
              pathname: `/add-journal`,
              journal: { data: journalDatabyId },
            }}
          >
            Update Journal
          </Link>
        </div>

        <div>
          <h2>{journalDatabyId && journalDatabyId.headLine}</h2>
          <p>{journalDatabyId && journalDatabyId.description}</p>
        </div>
      </div>
    );
  }
}

export default JournalViewPage;
