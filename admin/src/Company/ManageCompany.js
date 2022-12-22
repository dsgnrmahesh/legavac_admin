import React, { useEffect, useState } from "react";
import { getCompanyDetail, getCompanyDelete } from "../config/api";
import { Col } from "react-bootstrap";
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";
export default function ManageCompany({ handleAddNew, handleEdit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  });
  async function bindData() {
    await getCompanyDetail()
      .then((response) => {
        setData(response[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    if(window.confirm('Are you sure delete data?')){
    await getCompanyDelete(id)
      .then((response) => {
        alert("Data Deleted Successfully");
        bindData();
      })
      .catch((error) => {
        alert(error);
      });
    }
  }
  return (
    <>
      <Col xs={12} sm={12} md={6}>
        <div className="contentBox">
          <div className="contentBoxHeader">
            <h4>Company</h4>
            <button
              className="bxAddAction"
              onClick={handleAddNew}
              data-name="company"
            >
              add new
            </button>
          </div>
          <div className="contentBoxBody">
            <ul className="contentBoxItems">
              {data.map((item, index) => (
                <li key={index}>
                  <span className="d-flex">
                    <p className="m-0 pe-2">{index + 1}.</p>
                    <label className="bxName">{item.CompanyName}</label>|
                    <label className="bxName">{item.Logo}</label>
                  </span>
                  <span className="d-flex">
                    <button
                      className="bxAction edit"
                      data-id={item.CompanyID}
                      data-name="company"
                      onClick={handleEdit}
                    >
                      <Icon path={mdiPencilOutline} />
                    </button>
                    <button
                      className="bxAction del"
                      onClick={() => DeleteData(item.CompanyID)}
                    >
                      <Icon path={mdiTrashCanOutline} />
                    </button>
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Col>
    </>
  );
}
