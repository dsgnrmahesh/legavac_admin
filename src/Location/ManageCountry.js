import React, { useEffect, useState } from "react";
import { getCountryDetail, getCountryDelete } from "../config/api";
import { Col } from "react-bootstrap";
import { mdiPencilOutline, mdiTrashCanOutline } from "@mdi/js";
import Icon from "@mdi/react";

export default function ManageCountry({ handleAddNew, handleEdit }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    bindData();
  },[]);
  async function bindData() {
    await getCountryDetail()
      .then((response) => {
        setData(response.data[0]);
      })
      .catch((error) => {
        alert(error);
      });
  }

  async function DeleteData(id) {
    if(window.confirm('Are you sure delete data?')){
    await getCountryDelete(id)
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
            <h4>Country's</h4>
            <button
              className="bxAddAction"
              onClick={handleAddNew}
              data-name="country"
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
                    <label className="bxName">{item.CountryName}</label>
                  </span>
                  <span className="d-flex">
                    <button
                      className="bxAction edit"
                      data-id={item.CountryId}
                      data-name="country"
                      onClick={handleEdit}
                    >
                      <Icon path={mdiPencilOutline} />
                    </button>
                    <button
                      className="bxAction del"
                      onClick={() => DeleteData(item.CountryId)}
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
