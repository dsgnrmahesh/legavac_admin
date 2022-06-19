import React from "react";
import Icon from "@mdi/react";
import {
  mdiBriefcaseOutline,
  mdiCurrencyInr,
  mdiFile,
  mdiHeartOutline,
  mdiMapOutline,
  mdiPencilOutline,
  mdiTrashCanOutline,
} from "@mdi/js";
import { Col } from "react-bootstrap";
import renderHTML from "react-render-html";
import { getPostjobDelete } from "../config/api";

export default function JobSearchResultBlock({ sm, md, lg, data }) {
  // const renderDesc = data.jobdesc.map((item, index) => (
  //   <li key={index}>{item}</li>
  // ));
  async function DeleteData(id) {debugger;
    if (window.confirm('Are you sure delete data?')) {
      await getPostjobDelete(id)
        .then((response) => {
          alert("Data Deleted Successfully");
          window.location.href="/posted-jobs";
        })
        .catch((error) => {
          alert(error);
        });
    }
  }
  return (
    <>
      <Col sm={sm} md={md} lg={lg}>
        <div className="companySearchBlock">
        {/* href={"/job/" + data.name.replace(" ", "-")} */}
          <a href="#">
            <div className="companySearchBlockInner">
              <h3>{data.name}</h3>
              <span className="postedFlag">{data.postedAt}</span>
              <div className="comapany-name">{data.company}</div>
              <div className="d-flex mb-2 align-items-center">
                <span className="me-2">
                  <Icon path={mdiBriefcaseOutline} className="me-2" />
                  {data.exp}
                </span>
                <span className="me-2">
                  <Icon path={mdiCurrencyInr} className="me-2" />
                  {data.pkg}
                </span>
                <span>
                  <Icon path={mdiMapOutline} className="me-2" />
                  {data.location}
                </span>
              </div>
              <div className="d-flex mb-2 align-items-center">
                <Icon path={mdiFile} className="me-2" />
                {data.qualifications}
              </div>
              <ul className="d-flex mb-2 align-items-center"><span className="line-clamp" 
              >{renderHTML(data.jobdesc)}</span></ul>

              <span className="actionbtn">
                <div className="actionColumn">
                  <button className="del" onClick={() => DeleteData(data.PostjobID)}>
                    <Icon path={mdiTrashCanOutline} />
                  </button>
                </div>
              </span>
            </div>
          </a>
        </div>
      </Col>
    </>
  );
}
