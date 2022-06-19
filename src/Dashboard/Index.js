import React, { useEffect, useState } from "react";
import Icon from "@mdi/react";
import {
  mdiAccountTieOutline,
  mdiBriefcaseCheckOutline,
  mdiFileDocumentOutline,
} from "@mdi/js";
import { Col, Row } from "react-bootstrap";
import { getDashboardCount} from "../config/api";

export default function Dashboard() {
  const [totalcandidate,setTotalCandidate]=useState(0);
  const [totalpostedjob,setTotalPostedJob]=useState(0);
  const [totalfreejob,setTotalFreeJob]=useState(0);
  const [totaltestimonial,setTotalTestimonial]=useState(0);
  const [totalappliedjob,setTotalAppliedJob]=useState(0);
  const [totalarticle,setTotalArticle]=useState(0);
  const [data,setData]=useState([]);
  useEffect(()=>{BindDashboard();},[]);
  async function BindDashboard(){
    await getDashboardCount()
        .then((response) => {
          setTotalCandidate(response[0][0].TotalCandidate);
          setTotalPostedJob(response[0][0].TotalPostedJob);
          setTotalFreeJob(response[0][0].TotalFreeJob);
          setTotalTestimonial(response[0][0].TotalTestimonial);
          setTotalAppliedJob(response[0][0].TotalAppliedJob);
          setTotalArticle(response[0][0].TotalArticle)
        })
        .catch((error) => {
          alert(error);
        });
  }
  return (
    <>
      <div className="p-4">
        <Row>
          <Col xs={12} sm={12} md={12}>
            <div className="d-block wlcm-block">
              <h3>Welcome...! Admin</h3>
              <p>Legavac</p>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <div className="dashbox">
              <div className="dashbox-inner text-success">
                <div className="dashbox-icon">
                  <Icon path={mdiAccountTieOutline} />
                </div>
                <div className="dashbox-info">
                  <h2>{totalcandidate}</h2>
                  <h5>Total Candidate's</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <div className="dashbox">
              <div className="dashbox-inner">
                <div className="dashbox-icon">
                  <Icon path={mdiBriefcaseCheckOutline} />
                </div>
                <div className="dashbox-info">
                  <h2>{totalpostedjob}</h2>
                  <h5>Total Posted Job's</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <div className="dashbox">
              <div className="dashbox-inner text-warning">
                <div className="dashbox-icon">
                  <Icon path={mdiFileDocumentOutline} />
                </div>
                <div className="dashbox-info">
                  <h2>{totalappliedjob}</h2>
                  <h5>Total Applied Job</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <div className="dashbox">
              <div className="dashbox-inner text-success">
                <div className="dashbox-icon">
                  <Icon path={mdiAccountTieOutline} />
                </div>
                <div className="dashbox-info">
                  <h2>{totalfreejob}</h2>
                  <h5>Total FreeJobAlert</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <div className="dashbox">
              <div className="dashbox-inner text-success">
                <div className="dashbox-icon">
                  <Icon path={mdiAccountTieOutline} />
                </div>
                <div className="dashbox-info">
                  <h2>{totalarticle}</h2>
                  <h5>Total Article's</h5>
                </div>
              </div>
            </div>
          </Col>
          <Col sm={6} md={4} lg={4}>
            <div className="dashbox">
              <div className="dashbox-inner">
                <div className="dashbox-icon">
                  <Icon path={mdiBriefcaseCheckOutline} />
                </div>
                <div className="dashbox-info">
                  <h2>{totaltestimonial}</h2>
                  <h5>Total Testimonial's</h5>
                </div>
              </div>
            </div>
          </Col>
          {/* <Col xs={12} sm={6} md={4}>
            <div className="dashboard-box border-primary">
              <div className="d-flex">
                <div className="d-block">
                  <h3>candidate</h3>
                  <label>new</label>
                </div>
                <div className="dash-count">{totalcandidate}</div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="dashboard-box border-success">
              <div className="d-flex">
                <div className="d-block">
                  <h3>candidate</h3>
                  <label>posted</label>
                </div>
                <div className="dash-count">{totalpostedjob}</div>
              </div>
            </div>
          </Col>
          <Col xs={12} sm={6} md={4}>
            <div className="dashboard-box border-warning">
              <div className="d-flex">
                <div className="d-block">
                  <h3>candidate</h3>
                  <label>un posted</label>
                </div>
                <div className="dash-count">{totaldeletedpostedjob}</div>
              </div>
            </div>
          </Col> */}
        </Row>
      </div>
    </>
  );
}
