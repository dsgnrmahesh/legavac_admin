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
import Addcandidate from "./Addcandidate";
import ViewCandidate from "./ViewCandidate";
import {
  getCandidateDetail,
  getCandidateDetailSearchText,
  getCandidateDelete,
} from "../config/api";
import Modal from "react-bootstrap/Modal";

export default function Candidate() {
  const [viewCandidate, setViewCandidate] = useState();
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
    await getCandidateDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }


  useEffect(() => {
    BindCandidateDetail();
  }, []);

  async function BindCandidateDetail() {

    await getCandidateDetail()
      .then((response) => {
        setData(response.data[0]);
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
      BindCandidateDetail();
      bindData();
    }
  }


  async function DeleteData(id) {
    if (window.confirm('Are you sure delete data?')) {
      await getCandidateDelete(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  // function update(id){
  //   setEditID(id);
  //   setSmShow(true);
  //   setMode("Edit");
  // }

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
      {/* <td>{item.FirstName}</td>
      <td>{item.LastName}</td> */}
      <td>{item.Mobile}</td>
      <td>{item.EmailID}</td>
      <td><a href={"https://admin.legavac.com/uploads/resume/" + item.Resumepath} target="_blank">{item.Resumepath}</a></td>
      <td>
        <div className="actionColumn">
          {/* <button
            className="edit"
            onClick={()=>update(item.CandidateID)}
            edit={"/Candidate/Update/" + item.CandidateID}
          >
            <Icon path={mdiPencilOutline} />
          </button> */}
          <button className="del" onClick={() => DeleteData(item.CandidateID)}>
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
          md={viewCandidate ? 7 : 12}
          lg={viewCandidate ? 8 : 12}
          className="px-0"
        >
          <div className="contentScroll">
            <div className="contentHeader">
              <h3 className="contentTitle">Candidates</h3>
              <div className="contentSearch d-flex px-5">
                <input
                  type="text"
                  placeholder="Search by firstname, lastname or emailid "
                  name="Searchtext"
                  value={search.Searchtext}
                  onChange={handlechange}
                  className="form-control me-3"
                />
                <select className="form-select me-3" name="Exp" value={search.Exp} style={{ maxWidth: 170 }} onChange={handlechange}>
                  <option value="0">Select</option>
                  <option value="1">Bellow 1 Years</option>
                  <option value="2">1 - 2 Years</option>
                  <option value="3">2 - 3 Years</option>
                  <option value="4">3 - 4 Years</option>
                  <option value="5">Above 4 Years</option>
                </select>
                <select className="form-select" name="Salary" value={search.Salary} style={{ maxWidth: 170 }} onChange={handlechange}>
                  <option value="0">Select</option>
                  <option value="1">Bellow 1 Lakhs</option>
                  <option value="2">1 - 2 Lakhs</option>
                  <option value="3">2 - 3 Lakhs</option>
                  <option value="4">3 - 4 Lakhs</option>
                  <option value="5">Above 5 Lakhs</option>
                </select>
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
                    <th>Full Name</th>
                    {/* <th>First Name</th>
                    <th>Last Name</th> */}
                    <th>Mobile</th>
                    <th>EmailID</th>
                    <th>Resume</th>
                    <th width="120">action</th>
                  </tr>
                </thead>
                <tbody>{renderTableRow}</tbody>
              </table>
            </div>
          </div>
        </Col>
        {viewCandidate ? (
          <Col sm={12} md={5} lg={4} className="px-0">
            <ViewCandidate data={viewCandidate} />
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} Candidate
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addcandidate setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}