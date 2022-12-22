import React, { useState } from "react";
import Icon from "@mdi/react";
import { mdiBellOutline, mdiFullscreen, mdiMagnify, mdiMenu } from "@mdi/js";

import PostJob from "../PostJob";

export default function Header() {
  const [show, setShow] = useState(false);

  return (
    <>
      <header className="mainHeader">
        <div className="d-flex justify-content-between align-items-center mainHeaderInner">
          <div className="mainHeaderLeft">
            <button className="actionButton d-none">
              <Icon path={mdiMenu} />
            </button>
            {sessionStorage.getItem("Type")==="admin"?
            <button className="postButton" onClick={() => setShow(true)}>
              post job
            </button>
            :""}
          </div>
          <div className="mainHeaderRight d-flex align-items-center">
            {/* <button className="actionButton mx-2">
              <Icon path={mdiFullscreen} />
            </button>
            <button className="actionButton iwh-21 mx-2">
              <Icon path={mdiMagnify} />
            </button>
            <button className="actionButton iwh-21 mx-2">
              <Icon path={mdiBellOutline} />
            </button> */}
            <div className="mainHeaderUser">
              <button className="mainHeaderUserButton">
                <span className="userInfo">
                  <span>{sessionStorage.getItem("Name")}</span>
                  <span className="clstype">{sessionStorage.getItem("Type")}</span>
                </span>
                <span className="userIcon">
                  <span>
                    {sessionStorage.getItem("Name") !== null
                      ? sessionStorage.getItem("Name").charAt(0).toUpperCase()
                      : ""}
                  </span>
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>
      {/* <Modal show={show} fullscreen={true} onHide={() => setShow(false)}>
        <Modal.Header closeButton className="px-4">
          <div className="pe-5">
            <img src="/logo.png" alt="" height={40} />
          </div>
          <Modal.Title>Post Your Job</Modal.Title>
        </Modal.Header>
        <Modal.Body>{show ?  */}
      <PostJob show={show} setShow={setShow} />
      {/* : ""}</Modal.Body>
        <Modal.Footer>
          <div className="d-flex justify-content-center w-100 m-0">
            <button
              className="btn orrange d-block me-3 text-uppercase py-2"
              style={{ width: 150 }}
            >
              reset
            </button>
            <button
              className="btn indigo d-block me-3 text-uppercase py-2"
              style={{ width: 150 }}
              onClick={savedata}
            >
              submit
            </button>
          </div>
        </Modal.Footer>
      </Modal> */}
    </>
  );
}
