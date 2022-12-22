import React, { useEffect, useState } from "react";
import {
  mdiPlus,
  mdiFileOutline,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import { Col, Row } from "react-bootstrap";
import Icon from "@mdi/react";
import { mdiAccountCircleOutline } from "@mdi/js";
import Addappliedjob from "./Addappliedjob";
import viewAppliedjob from "./ViewAppliedjob";
import {
  getAppliedJobDetail,
  getCandidateDetailSearchText,
  deleteAppliedjob,
} from "../config/api";
import Modal from "react-bootstrap/Modal";

export default function Appliedjob() {
  const [viewAppliedjob, setViewAppliedjob] = useState();
  const [data, setData] = useState([]);
  const [search, setSearch] = useState({ Searchtext: "", Exp: "", Salary: "" });
  //const data = [1, 2, 3, 4, 5, 6, 7, 8];

  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editid, setEditID] = useState();
  useEffect(() => {
    bindData();
  }, []);


  async function bindData() {
    await getAppliedJobDetail()
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function SearchData() {

    //e.preventDefault();
    if (search.Searchtext !== "" || search.Exp !== "" || search.Salary !== "") {
      await getCandidateDetailSearchText(search)
        .then((response) => {
          setData(response.data[0]);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      //BindCandidateDetail();
      bindData();
    }
  }


  async function DeleteData(id) {
    if (window.confirm('Are you sure delete data?')) {
      await deleteAppliedjob(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
        })
        .catch((error) => {
          alert(error);
        });
    }
  }

  function handlechange(e) {
    setSearch({ ...search, [e.target.name]: e.target.value });
  }

  const renderTableRow = data.map((item, idx) => (
    <tr
      key={idx}
      className={idx === 0 ? "seleted" : ""}
    // onClick={() => setViewCandidate(item)}
    >
      {/* <td className="fileIcon">
        <img
          src="http://react-material.fusetheme.com/assets/images/avatars/Arnold.jpg"
          alt=""
          className="tableAvtar"
        />
      </td> */}
      <td className="fileIcon">
        <Icon path={mdiFileOutline} />
      </td>
      <td>{item.FullName}</td>
      <td>{item.JobTitleName}</td>
      <td>{item.CityName}</td>
      <td>{item.Experience}</td>
      <td>{item.Mobile}</td>
      <td>{item.EmailID}</td>
      <td>{item.Resumepath}</td>
      <td>{item.AppliedDate}</td>
      <td>
        <div className="actionColumn">
          {/* <button
            className="edit"
            onClick={()=>update(item.CandidateID)}
            edit={"/Candidate/Update/" + item.CandidateID}
          >
            <Icon path={mdiPencilOutline} />
          </button> */}
          <button className="del" onClick={() => DeleteData(item.AppliedJobID)}>
            <Icon path={mdiTrashCanOutline} />
          </button>
        </div>
      </td>
      {/* <td></td> */}
    </tr>
  ));
  return (
    <>
      <Row className="mx-0">
        <Col
          sm={12}
          md={viewAppliedjob ? 7 : 12}
          lg={viewAppliedjob ? 8 : 12}
          className="px-0"
        >
          <div className="contentScroll">
            <div className="contentHeader">
              <h3 className="contentTitle">Applied Job List</h3>
              <div className="contentSearch d-flex px-5">
                <input
                  type="text"
                  placeholder="Search by job title, city or emailid "
                  name="Searchtext"
                  value={search.Searchtext}
                  onChange={handlechange}
                  className="form-control me-3"
                />
                <button
                  className="btn btn-success ms-3"
                  onClick={() => SearchData()}
                >
                  Search
                </button>
              </div>
              {/* <button
                className="contentAction"
                onClick={() => {setSmShow(true);setEditID(0);}}
                title="add Candidate"
              >
                <Icon path={mdiPlus} />
              </button>
       */}
            </div>

            <div className="contentBody border-end">
              <table className="contentTable click">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>Candidate Name</th>
                    <th>Job Title</th>
                    <th>City Name</th>
                    <th>Experience</th>
                    <th>Mobile</th>
                    <th>EmailID</th>
                    <th>Resume</th>
                    <th>Job Apply Date</th>
                    <th width="120">action</th>
                  </tr>
                </thead>
                <tbody>{renderTableRow}</tbody>
              </table>
            </div>
          </div>
        </Col>
        {viewAppliedjob ? (
          <Col sm={12} md={5} lg={4} className="px-0">
            <viewAppliedjob data={viewAppliedjob} />
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} Appliedjob
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addappliedjob setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}