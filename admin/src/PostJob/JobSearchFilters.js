import React, { useState, useEffect } from "react";
import {
  getPostedJobFilterList,
  getPostjobDetail,
  getPostjobDetailByWhereCondition,
} from "../config/api";
import JobSearchFilterBlock from "./JobSearchFilterBlock";

export default function JobSearchFilters({ setData, data, k, l, e }) {
  const searchLocations = [
    {
      name: "pune",
      count: 15,
    },
    {
      name: "kalyn",
      count: 11,
    },
    {
      name: "thane",
      count: 4,
    },
    {
      name: "andheri",
      count: 9,
    },
  ];
  const roles = [
    {
      name: "Recruitment /  Placement Consultant",
      count: 7,
    },
    {
      name: "Hiring Manager",
      count: 13,
    },
    {
      name: "other",
      count: 43,
    },
  ];
  const hiringFor = [
    {
      name: "HR /  Administration /  IR",
      count: 5,
    },
    {
      name: "IT Software - Application Programming /  Maintenance",
      count: 4,
    },
    {
      name: "ITES /  BPO /  KPO /  Customer Service /  Operations",
      count: 3,
    },
    {
      name: "IT Software - DBA /  Datawarehousing",
      count: 2,
    },
    {
      name: "IT Software - System Programming",
      count: 2,
    },
  ];
  const Levels = [
    {
      name: "Senior Management",
      count: 12,
    },
    {
      name: "Top Mangement",
      count: 9,
    },
  ];
  const [jobtitle, setJobTitle] = useState([]);
  const [subjobtitle, setSubJobTitle] = useState([]);
  const [city, setCity] = useState([]);
  const [jobtid, setJobtid] = useState(0);
  const [state, setState] = useState({
    SearchText: "",
    JobTitleId: "",
    SubJobTitleId: "",
    CityId: "",
    CompanyName: "",
    Experience: "0",
  });
  useEffect(() => {
    if ((k !== '' && k !== null) || (l !== '' && l !== null) || (e !== '' && e !== null)) {
      BindData({
        SearchText: "",
        JobTitleId: k,
        SubJobTitleId: "",
        CityId: l,
        CompanyName: "",
        Experience: e,
      });
    } else {
      BindData({
        SearchText: "",
        JobTitleId: "",
        SubJobTitleId: "",
        CityId: "",
        CompanyName: "",
        Experience: "0",
      });
    }
    BindFilterData();
  }, []);
  async function BindFilterData() {
    await getPostedJobFilterList({ JobTitleId: jobtid })
      .then((response) => {
        setJobTitle(response[0]);
        setSubJobTitle(response[1]);
        setCity(response[2]);
      })
      .catch((error) => {
        alert(error);
      });
  }
  async function BindData(obj) {
    await getPostjobDetailByWhereCondition(obj)
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
    // }
  }
  const chkjt = [];
  const chksjt = [];
  const chkc = [];
  function handlechange(e) {
    const checkedsjt = document.getElementsByClassName("chkjobtitle");
    const checkedssjt = document.getElementsByClassName("chksubjobtitle");
    const checkedsc = document.getElementsByClassName("chkcity");
    for (let i = 0; i < checkedsjt.length; i++) {
      if (checkedsjt[i].checked) {
        chkjt.push(checkedsjt[i].value);
      }
    }
    for (let i = 0; i < checkedssjt.length; i++) {
      if (checkedssjt[i].checked) {
        chksjt.push(checkedssjt[i].value);
      }
    }
    for (let i = 0; i < checkedsc.length; i++) {
      if (checkedsc[i].checked) {
        chkc.push(checkedsc[i].value);
      }
    }
    setState({
      SearchText: "",
      JobTitleId: chkjt.toString(),
      SubJobTitleId: chksjt.toString(),
      CityId: chkc.toString(),
      CompanyName: "",
      Experience: "0",
    });
    BindData({
      SearchText: "",
      JobTitleId: chkjt.toString(),
      SubJobTitleId: chksjt.toString(),
      CityId: chkc.toString(),
      CompanyName: "",
      Experience: "0",
    });
  }
  return (
    <>
      <div className="search-filters">
        <JobSearchFilterBlock
          name="JobTitleId"
          classname="chkjobtitle"
          handlechange={handlechange}
          items={jobtitle}
          title="Industry"
          jobtid={jobtid}
          setState={setState}
          state={state}
        />
        <JobSearchFilterBlock
          name="SubJobTitleId"
          classname="chksubjobtitle"
          handlechange={handlechange}
          items={subjobtitle}
          title="Designation"
          jobtid={jobtid}
          setState={setState}
          state={state}
        />
        <JobSearchFilterBlock
          name="CityId"
          classname="chkcity"
          handlechange={handlechange}
          items={city}
          title="Location"
          jobtid={jobtid}
          setState={setState}
          state={state}
        />
        {/* <JobSearchFilterBlock
          items={searchLocations}
          title="Recruiter's Location"
        />
        <JobSearchFilterBlock items={roles} title="Recruiter's Role" />
        <JobSearchFilterBlock items={hiringFor} title="Functions Hiring For" />
        <JobSearchFilterBlock items={Levels} title="Levels Hiring For" /> */}
      </div>
    </>
  );
}
