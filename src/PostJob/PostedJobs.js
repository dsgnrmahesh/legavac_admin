import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Col, Row } from "react-bootstrap";
import JobSearchFilters from "./JobSearchFilters";
import JobSearchResultBlock from "./JobSearchResultBlock";
import { getPostedJobFilterList, getPostjobDetail, getPostjobDetailByID } from "../config/api";
import AutoSearchInput from "../Commons/AutoSearchInput";
function useQuery() {
  const { search } = useLocation();

  return React.useMemo(() => new URLSearchParams(search), [search]);
}
export default function PostedJobs({ setSmShow, editID }) {
  let query = useQuery();
  const id = editID;

  const [data, setData] = useState([]);
  const [search, setSearch] = useState({
    jt: "",
    city: "",
    exp: "0",
  })
  const [jobtitle, setJobTitle] = useState([]);
  const [city, setCity] = useState([]);
  const [jobtid, setJobtid] = useState(0);
  // const [jt,setJt]=useState([]);
  // const [city,setCity]=useState([]);
  // const [exp,setExp]=useState([]);
  useEffect(() => {
    //BindData();
    if (id !== "" && id !== "0" && id !== 0 && typeof id !== "undefined") {
      UpdateData(id);
    }
    BindFilterData();
  }, []);
  function handlechange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }
  async function BindFilterData() {debugger;
    await getPostedJobFilterList({ JobTitleId: jobtid })
      .then((response) => {
        setJobTitle(response[0]);
        //setSubJobTitle(response[1]);
        setCity(response[4]);
        //setCompanyName(response[3]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  function Search() {

    window.location.href = "/posted-jobs?k=" + document.getElementsByName('k')[0].value + "&l="
    + document.getElementsByName('l')[0].value
    + "&e=" + document.getElementsByName('e')[0].value;
  }
  // async function BindData() {
  //   await getPostjobDetail()
  //     .then((response) => {
  //       setData(response[0]);
  //     })
  //     .catch((error) => {
  //       alert(error);
  //     });
  //   // }
  // }


  async function UpdateData(id) {
    await getPostjobDetailByID(id)
      .then((response) => {
        setData(response[0][0]);
      })
      .catch((error) => {
        alert(error);
      });
  }


  const companies = [
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
    {
      name: "Administration Coordinator",
      company: "Dthrill Software solutions pvt. ltd.",
      exp: "0-5 Yrs",
      pkg: "3,00,000 - 4,50,000 PA.",
      location: "Bangalore/Bengaluru (Museum Road)",
      qualifications:
        "Qualification: Graduate Checking required / adequate Stock on Housekeeping materials / ...",
      jobdesc: [
        "Administration",
        "Office Administration",
        "Front Office Management",
      ],
      postedAt: "22 Days Ago",
    },
  ];
  return (
    <>
      <Row className="mx-0">
        <Col sm={12} md={12} lg={12} className="px-0">
          <div className="contentScroll">
            <div className="contentHeader d-flex align-items-center">
              <div className="px-4 w-100">
                <h3 className="contentTitle fs-23 px-0">Posted Job's</h3>
                <div className="searchBox">
                  <Row>
                    <Col sm={12} md={4} style={{position: 'relative'}}>
                    <AutoSearchInput
                        options={jobtitle}
                        placeholder="search by job title"
                        name="k"
                        className="form-control"
                      />
                    </Col>
                    <Col sm={12} md={4} style={{position: 'relative'}}>
                    <AutoSearchInput
                        options={city}
                        placeholder="search by location"
                        name="l"
                        className="form-control"
                      />
                    </Col>
                    <Col sm={12} md={2}>
                    <select name="e" className="form-select">
                        <option value="0">Select Experience</option>
                        <option value="0-1">0-1 year</option>
                        <option value="1-2">1-2 year</option>
                        <option value="2-3">2-3 year</option>
                        <option value="3-4">3-4 year</option>
                        <option value="4-50">More than 4 Year</option>
                      </select>
                    </Col>
                    <Col sm={12} md={2}>
                      <button className="btn orrange dark" onClick={() => Search()}>SEARCH</button>
                    </Col>
                  </Row>
                </div>
              </div>
            </div>
            <div className="contentBody px-4 pt-4">
              <Row>
                <Col sm={12} md={4} lg={3}>
                  <JobSearchFilters setData={setData} data={data} k={query.get("k")}
                    l={query.get("l")}
                    e={query.get("e")} />
                </Col>
                <Col sm={12} md={8} lg={9}>
                  {/* <div className="search-result-top">
                    <p>
                      Showing 1 - 44 of 44{" "}
                      <b> Dthrill Software solutions pvt. ltd.</b> Recruiters in{" "}
                      <b>Pune</b>
                    </p>
                    <p>
                      Short by :
                      <select>
                        <option>Relevance</option>
                      </select>
                    </p>
                  </div> */}
                  <div className="search-results">
                    <Row>
                      {data?data.map((company,index) => (
                        <JobSearchResultBlock
                          data={company}
                          sm={12}
                          md={12}
                          lg={12}
                          key={index}
                        />
                      )):""}
                    </Row>
                  </div>
                </Col>
              </Row>
            </div>
          </div>
        </Col>
      </Row>
    </>
  );
}
