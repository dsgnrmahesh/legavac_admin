import React, { useEffect, useState } from "react";
import { getCareerOrAdviceDetail, getCareeradviceDelete, getCareerAdviceDetailSearchText } from "../config/api";
import { Col, Row } from "react-bootstrap";
import { mdiPlus, mdiFileOutline, mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import AddCareerOrAdvice from "./AddCareerOrAdvice";
import Modal from "react-bootstrap/Modal";

export default function ManageCareerOrAdvice() {
  const [data, setData] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editid, setEditID] = useState();
  useEffect(() => {
    bindData();
  }, []);
  async function bindData() {
    await getCareerOrAdviceDetail()
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
      await getCareerAdviceDetailSearchText(search)
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
      await getCareeradviceDelete(id)
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
  const renderTableRow = data.map((item, index) => (
    <tr key={index}>
      <td className="fileIcon">
        <Icon path={mdiFileOutline} />
      </td>
      <td>{item.Title}</td>
      <td>{item.Video}</td>
      <td>
        <div className="actionColumn">
          <button className="edit"
            onClick={() => update(item.Caid)}
            edit={"/Affilation/Update/" + item.Caid}>
            <Icon path={mdiPencilOutline} />
          </button>
          <button className="del" onClick={() => DeleteData(item.Caid)}>
            <Icon path={mdiTrashCanOutline} />
          </button>
        </div>
      </td>
    </tr>
  ));
  return (
    <>
      <Row className="mx-0">
        <Col sm={12} md={12} lg={12} className="px-0">
          <div className="contentScroll">
            <div className="contentHeader">
              <h3 className="contentTitle">Careers or Advice</h3>
              <div className="contentSearch">
                <input type="text" placeholder="Search for anything" onChange={SearchData} />
              </div>
              <button
                className="contentAction"
                title="add"
                onClick={() => { setSmShow(true); setEditID(0); }}
              >
                <Icon path={mdiPlus} />
              </button>
            </div>
            <div className="contentBody px-2">
              <table className="contentTable click border border-top-0">
                <thead>
                  <tr>
                    <th>&nbsp;</th>
                    <th>name</th>
                    <th>Video</th>
                    <th width="180">action</th>
                  </tr>
                </thead>
                <tbody>{renderTableRow}</tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
      <Modal size="sm" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} Career Or Advice
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddCareerOrAdvice setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
