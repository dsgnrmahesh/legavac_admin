import React from "react";
import Icon from "@mdi/react";
import {
  mdiAccountNetworkOutline,
  mdiDatabaseCheck,
  mdiFileDocumentOutline,
  mdiMenuOpen,
  mdiViewDashboardOutline,
  mdiBriefcaseCheckOutline,
  mdiFinance,
  mdiAccountTieOutline,
  mdiSchoolOutline,
  mdiMapMarkerRadiusOutline,
  mdiLogoutVariant,
} from "@mdi/js";
export default function Aside() {
  const pathName = window.location.pathname;
  const handleLogout = (e) => {
    e.preventDefault();
    if (window.confirm("are you sure !!")) { localStorage.clear();
    window.location.href = "/auth/login";}

  };
  return (
    <>
      <aside className="asideBar">
        <div className="d-flex justify-content-between align-items-center asideBarLogoWrap">
          <div className="asideBarLogo">
            <a href="/dashboard">
              <img src="/logo.png" alt="/" />
            </a>
          </div>
          <button className="actionButton">
            <Icon path={mdiMenuOpen} />
          </button>
        </div>
        <div className="asideBarMenus">
          <div className="asideBarMenu">
            <a
              href="/dashboard"
              className={
                pathName === "/dashboard"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiViewDashboardOutline} />
              </span>
              <span className="asideBarMenuText">Dashboard</span>
            </a>
          </div>
          <div className="asideBarMenu">
            <a
              href="/master-setups"
              className={
                pathName === "/master-setups"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiDatabaseCheck} />
              </span>
              <span className="asideBarMenuText">Master Setup's</span>
            </a>
          </div>
          <div className="asideBarMenu">
            <a
              href="/education-master"
              className={
                pathName === "/education-master"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiSchoolOutline} />
              </span>
              <span className="asideBarMenuText">Education Master</span>
            </a>
          </div>
          {/* <div className="asideBarMenu">
            <a
              href="/location-master"
              className={
                pathName === "/location-master"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiMapMarkerRadiusOutline} />
              </span>
              <span className="asideBarMenuText">Location Master's</span>
            </a>
          </div> */}
          <div className="asideBarMenu">
            <a
              href="/affilations"
              className={
                pathName === "/affilations"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiAccountNetworkOutline} />
              </span>
              <span className="asideBarMenuText">affilation</span>
            </a>
          </div>
          <div className="asideBarMenu">
            <a
              href="/articles"
              className={
                pathName === "/articles"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiFileDocumentOutline} />
              </span>
              <span className="asideBarMenuText">article</span>
            </a>
          </div>
          <div className="asideBarMenu">
            <a
              href="/careers-or-advice"
              className={
                pathName === "/careers-or-advice"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiFinance} />
              </span>
              <span className="asideBarMenuText">Careers or advice</span>
            </a>
          </div>
          <div className="asideBarMenu">
            <a
              href="/testimonial"
              className={
                pathName === "/testimonial"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiFinance} />
              </span>
              <span className="asideBarMenuText">Testimonial</span>
            </a>
          </div>
          <div className="asideBarMenu">
            <a
              href="/posted-jobs"
              className={
                pathName === "/posted-jobs"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiBriefcaseCheckOutline} />
              </span>
              <span className="asideBarMenuText">Posted Job's</span>
            </a>
          </div>


          <div className="asideBarMenu">
            <a
              href="/membershipplan"
              className={
                pathName === "/membershipplan"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiFinance} />
              </span>
              <span className="asideBarMenuText">Membership Plan</span>
            </a>
          </div>
    

          <div className="asideBarMenu">
            <a
              href="/Candidate"
              className={
                pathName === "/Candidate"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiAccountTieOutline} />
              </span>
              <span className="asideBarMenuText">Candidate's</span>
            </a>
          </div>




          <div className="asideBarMenu">
            <a
              href="/Appliedjob"
              className={
                pathName === "/Appliedjob"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiAccountTieOutline} />
              </span>
              <span className="asideBarMenuText">Applied Job List</span>
            </a>
          </div>





          <div className="asideBarMenu">
            <a
              href="/Freejobalert"
              className={
                pathName === "/Freejobalert"
                  ? "asideBarMenuTrigger active"
                  : "asideBarMenuTrigger"
              }
            >
              <span className="asideBarMenuIcon">
                <Icon path={mdiAccountTieOutline} />
              </span>
              <span className="asideBarMenuText"> Free job alert</span>
            </a>
          </div>



          <div className="asideBarMenu">
            <button className="asideBarMenuTrigger" onClick={handleLogout}>
              <span className="asideBarMenuIcon">
                <Icon path={mdiLogoutVariant} />
              </span>
              <span className="asideBarMenuText">Logout</span>
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
