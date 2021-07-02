import React from "react"


export default function JobsCard(props){

    // Fetching data from props which were passed from previous component

    return(
       
        <div className="container mt-3 mb-3">
            <div className="row">
                {/* looping through the data to show data in cards */}
            {props.jobs.length > 0 &&  props.jobs.map((item , index) => 

                <div className="col-lg-4 col-md-6 mb-3" key={index}>
                <div className=" card shadow-lg border-0 py-2">
                <div className="card-header border-0 mb-0">
                    <div className="row justify-content-between">
                        <div className="col-auto col-sm-auto">
                            <h4> <span className="badge badge-pill badge-success">{new Date(item.OBJpostingDate).toLocaleDateString()}</span></h4>
                        </div>
                        <div className="col-auto col-sm-auto">
                            <div className="row mx-auto pt-2"> <img src="https://uxwing.com/wp-content/themes/uxwing/download/17-currency/dollar.png" alt="Image result for dollar icon png" width="20" height="20" />
                                <h5>55/hr</h5>
                            </div>
                        </div>
                    </div>
                </div>
                <div className=" card-body text-center pb-0 mt-0 pt-3">
                    <div className="d-block">
                        <h5 className="card-title mb-0 font-weight-bold JobTitle">{item.jobTitle}</h5> <small className="text-info my-1"> <i className="fa fa-file-code-o small companyName"></i> {item.companyName}</small>
                    </div>
                    <div className="d-inline-flex row mb-3 ">
                        <div className="col-md-auto">
                            <ul className="list-inline my-0">
                                <li className="list-inline-item"> <span className="badge badge-pill badge-outline ">UI</span></li>
                                <li className="list-inline-item"> <span className="badge badge-pill badge-outline ">UX</span></li>
                                <li className="list-inline-item"> <span className="badge badge-pill badge-outline ">photoshop</span></li>
                                <li className="list-inline-item "> <button className="badge badge-pill badge-primary" type="button">+4</button></li>
                            </ul>
                        </div>
                    </div>
                    <div className="d-flex row mb-0">
                        <div className="col ">
                            <p className="text-muted">{item.shortDesc} </p>
                        </div>
                    </div>
                </div>
                <div>
                    <hr className="hl" />
                </div>
                <div className="card-footer border-0 text-center mx-auto ">
                    <h5 className="footer"> <a href="" className="text-decoration-none"> VIEW JOB</a></h5>
                </div>
            </div>
                    </div>
 )}
                </div>
            </div>
            
           
       
    )
}


