import React from "react"
import Header from '../components/Header'

import Meta from '../components/Meta'
import InputGroup from 'react-bootstrap/InputGroup'
import JobsCard from "./JobsCard"
import moment from 'moment'
const axios = require('axios');




class Home extends React.PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      jobs: [],
      search: "",
    }

    this.LoadData = this.LoadData.bind(this);
  }

  componentDidMount() {
    // Loading data on component load
    this.LoadData()
  }

  LoadData = () => {
    let self = this;

        // Fetching Api data 
    this.setState({loading: true})
    axios.post('https://www.zippia.com/api/jobs/', {
      companySkills: true,
      dismissedListingHashes: [],
      fetchJobDesc: true,
      jobTitle: "Business Analyst",
      locations: [],
      numJobs: 20,
      previousListingHashes: []
    })
      .then(function (response) {
        // Creating new array to store objects of data
        let jobsArray = [];
        // fetching 10 records from data using slice method
        response.data.jobs.slice(0, 10).map((item, i) => {
          // inserting the record into the array variable
          jobsArray.push(item)
        });
        // updating state to store the records 
        self.setState({
          jobs: jobsArray,
        })

      })
      .catch(function (error) {
        console.log(error);
      });
  }
  //Search button 
  SearchJob = () => {
    //filtering records from state which user want to search
    let FilterList = this.state.jobs.filter(i => i.companyName === this.state.search);
    // updating state
    this.setState({
      jobs: FilterList
    })
  }

  // Saving user input in state for searhcing purpose
  searchVal = (e) => {
    if (e.target.value === "") {
      // if user erase everything  all data will shown
      this.LoadData();
    } else {
      // showing searched data
      this.setState({
        [e.target.name]: e.target.value
      })
    }
  }

  //selec dropdown
  FilterDropdown = (e) => {
    
    if (e.target.value === "1") {
      //getting last 7 days using moment
      var last7DayStart = moment().startOf('day').subtract(1, 'week');
      // getting today date using moment
      var today = moment().startOf('day').toDate();

      //filtering jobs list by date
      var FilterJobsThroughtDate = this.state.jobs.filter(
        (obj => {
          return new Date(obj.OBJpostingDate).getDate() <= last7DayStart._d && new Date(obj.OBJpostingDate).getDate() >= today.getDate()
        })
      );

        // updating state
      this.setState({
        jobs: FilterJobsThroughtDate
      })

    } else {
      // if selected All all jobs will shown
      this.LoadData()
    }
  }

  render() {


    const pageTitle = 'Home'

    return (
      <div>
        {/* Meta used for Seo Purpose */}
        <Meta title={pageTitle} />
        <div className="d-flex adjust425 justify-content-between align-items-center p-3 bg-white">
          <div className="">
            {/* Filter Dropdown */}
            <select className="form-control" onChange={(e) => this.FilterDropdown(e)}>
              <option value="0">All</option>
              <option value="1">Last 7 days</option>
            </select>

          </div>
          <div>
            <div className="input-group ">
              <input type="search" className="form-control" onChange={(e) => this.searchVal(e)} name="search" placeholder="Search Company Name" />
              <div className="input-group-append">
                <button className="btn btn-secondary" type="button" onClick={(e) => this.SearchJob()} >Search</button>
              </div>
            </div>
          </div>

        </div>

        {this.state.jobs.length > 0 ? <JobsCard jobs={this.state.jobs} /> :  <h1 className="text-center p-5"> Sorry No Record Found</h1> }
       

      </div>
    )
  }
}

export default Home