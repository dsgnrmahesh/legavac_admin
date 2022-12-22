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
import Addfreejobalert from "./Addfreejobalert";
import ViewFreejobalert from "./ViewFreejobalert";
import {
  getFreejobalertDetail,
  getFreejobalertDetailSearchText,
  getFreejobalertDelete,
} from "../config/api";
import Modal from "react-bootstrap/Modal";

export default function Freejobalert() {
  const [viewFreejobalert, setViewFreejobalert] = useState();
  const [data, setData] = useState([]);
  //const [search, setSearch] = useState({Searchtext:"",Exp:"",Salary:""});
  //const data = [1, 2, 3, 4, 5, 6, 7, 8];
  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editid, setEditID] = useState();
  useEffect(() => {
    bindData();
    //setViewAffilation(data[0]);
  }, []);
  async function bindData() {
    await getFreejobalertDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }


  useEffect(() => {
    BindFreejobalertDetail();
  }, []);

  async function BindFreejobalertDetail() {

    await getFreejobalertDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }


  async function SearchData(e) {

    e.preventDefault();
    let search = e.target.value;

    if (search !== "") {
      await getFreejobalertDetailSearchText(search)
        .then((response) => {
          setData(response.data[0]);
        })
        .catch((error) => {
          alert(error);
        });
    } else {
      bindData();
    }
  }
  async function DeleteData(id) {
    if (window.confirm('Are you sure delete data?')) {
      await getFreejobalertDelete(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          bindData();
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  function update(id) {
    setEditID(id);
    setSmShow(true);
    setMode("Edit");
  }
  const renderTableRow = data.map((item, idx) => (
    <tr
      key={idx}
      className={idx === 0 ? "seleted" : ""}
    // onClick={() => setViewFreejobalert(item)}
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
      <td>{item.Keywords}</td>
      <td><option value={item.CityId}>{item.CityName}</option></td>
      {/* <td>{item.CityId}</td> */}
      <td>{item.Workexp}</td>
      <td>{item.Salaryinlakh}</td>
      <td>{item.EmailID}</td>
      <td>{item.Sendmerelatedjob}</td>
      <td>
        <div className="actionColumn">
          {/* <button
            className="edit"
            onClick={()=>update(item.JobalertID)}
            edit={"/Freejobalert/Update/" + item.JobalertID}
          >
            <Icon path={mdiPencilOutline} />
          </button> */}
          <button className="del" onClick={() => DeleteData(item.JobalertID)}>
            <Icon path={mdiTrashCanOutline} />
          </button>
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <Row className="mx-0">
        <Col
          sm={12}
          md={viewFreejobalert ? 7 : 12}
          lg={viewFreejobalert ? 8 : 12}
          className="px-0"
        >
          <div className="contentScroll">
            <div className="contentHeader">
              <h3 className="contentTitle">Free job alerts</h3>
              <div className="contentSearch d-flex px-5">
                <input type="text" placeholder="Search for anything" onChange={SearchData} />
              </div>
              {/* <button
                className="contentAction"
                onClick={() => {setSmShow(true);setEditID(0);}}
                title="add Freejobalert"
              >
                <Icon path={mdiPlus} />
              </button> */}
            </div>
            <div className="contentBody border-end">
              <table className="contentTable click">
                <thead>
                  <tr>

                    <th>&nbsp;</th>
                    <th>Keywords</th>
                    <th>CityName</th>
                    <th>Work Experience</th>
                    <th>Salaryinlakh</th>
                    <th>EmailID</th>
                    <th>Sendmerelatedjob</th>
                    {/* <th>modifed</th>  */}
                    <th width="120">action</th>
                  </tr>
                </thead>
                <tbody>{renderTableRow}</tbody>
              </table>
            </div>
          </div>
        </Col>
        {viewFreejobalert ? (
          <Col sm={12} md={5} lg={4} className="px-0">
            <ViewFreejobalert data={viewFreejobalert} />
          </Col>
        ) : (
          ""
        )}
      </Row>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} Freejobalert
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Addfreejobalert setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
