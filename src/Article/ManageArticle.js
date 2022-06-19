import React, { useEffect, useState } from "react";
import { getArticleDetail, getArticleDelete, getArticleDetailSearchText } from "../config/api";
import { Col, Row } from "react-bootstrap";
import { mdiPlus, mdiFileOutline, mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
import AddArticle from "./AddArticle";
import Modal from "react-bootstrap/Modal";

export default function ManageArticle() {
  const [data, setData] = useState([]);
  const [smShow, setSmShow] = useState(false);
  const [mode, setMode] = useState("Add");
  const [editid, setEditID] = useState();
  useEffect(() => {
    bindData();
  }, []);
  async function bindData() {debugger;
    await getArticleDetail()
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
      await getArticleDetailSearchText(search)
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
      await getArticleDelete(id)
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
      <td><span className="line-clamp" style={{ maxWidth: 200 }}>{item.Description}</span></td>
      <td>{item.Pdf}</td>
      <td>{item.Image}</td>
      <td>{item.Video}</td>
      <td>
        <div className="actionColumn">
          <button
            className="edit"
            onClick={() => update(item.ArticleID)}
            edit={"/Affilation/Update/" + item.ArticleID}
          >
            <Icon path={mdiPencilOutline} />
          </button>
          <button className="del" onClick={() => DeleteData(item.ArticleID)}>
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
              <h3 className="contentTitle">Articles</h3>
              <div className="contentSearch">
                <input type="text" placeholder="Search for anything" onChange={SearchData} />
              </div>
              <button
                className="contentAction"
                title="add Article"
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
                    <th>article name</th>
                    <th>Description</th>
                    <th>Pdf File</th>
                    <th>Image</th>
                    <th>Video</th>
                    <th width="120">action</th>
                  </tr>
                </thead>
                <tbody>{renderTableRow}</tbody>
              </table>
            </div>
          </div>
        </Col>
      </Row>
      <Modal size="lg" show={smShow} onHide={() => setSmShow(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>
            {mode} Article
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AddArticle setSmShow={setSmShow} editid={editid} bindData={bindData} />
        </Modal.Body>
      </Modal>
    </>
  );
}
