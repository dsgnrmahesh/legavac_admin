import React, { useEffect, useState } from "react";
import { getTalukaDetail, getTalukaDelete } from "../config/api";
import { Col } from "react-bootstrap";
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function ManageTaluka({ handleAddNew, handleEdit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  },[]);
  async function bindData() {
    await getTalukaDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    if(window.confirm('Are you sure delete data?')){
    await getTalukaDelete(id)
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
            <h4>City's</h4>
            <button
              className="bxAddAction"
              onClick={handleAddNew}
              data-name="city"
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
                    <label className="bxName">
                      {item.TalukaName} | {item.DistrictName}
                    </label>
                  </span>
                  <span className="d-flex">
                    <button
                      className="bxAction edit"
                      data-id={item.TalukaId}
                      data-name="city"
                      onClick={handleEdit}
                    >
                      <Icon path={mdiPencilOutline} />
                    </button>
                    <button
                      className="bxAction del"
                      onClick={() => DeleteData(item.TalukaId)}
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
