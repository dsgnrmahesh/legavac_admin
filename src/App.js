import React, { useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Aside from "./layout/Aside";

import Login from "./Auth/Login";

import MastersSetups from "./MastersSetups";
import LocationMaster from "./MastersSetups/LocationMaster";
import EducationMaster from "./MastersSetups/EducationMaster";

import AddAffilation from "./Affilation/AddAffilation";
import ManageAffilation from "./Affilation/ManageAffilation";

import AddArticle from "./Article/AddArticle";
import ManageArticle from "./Article/ManageArticle";

import AddCareerOrAdvice from "./CareerOrAdvice/AddCareerOrAdvice";
import ManageCareerOrAdvice from "./CareerOrAdvice/ManageCareerOrAdvice";

import ManageTestimonial from "./Testimonial/ManageTestimonial";

import AddFaq from "./Faq/AddFaq";
import ManageFaq from "./Faq/ManageFaq";

import AddMembershipPlan from "./Membership/AddMembershipPlan";
import ManageMembershipplan from "./Membership/ManageMembershipplan";

import AddMembershipPlanFeature from "./Membership/AddMembershipPlanFeature";
import ManageMembershipplanfeature from "./Membership/ManageMembershipplanfeature";

import AddPages from "./pages/AddPages";
import ManagePages from "./pages/ManagePages";

import AddWorkpermitforusa from "./pages/AddWorkpermitforusa";
import ManageWorkpermitforusa from "./pages/ManageWorkpermitforusa";

import PostedJobs from "./PostJob/PostedJobs";
import Candidate from "./Candidate";
import Addcandidate from "./Candidate/Addcandidate";

import Appliedjob from "./Appliedjoblist";
import Addappliedjob from "./Appliedjoblist/Addappliedjob";

import Freejobalert from "./Freejobalert";
import Addfreejobalert from "./Freejobalert/Addfreejobalert";
import Dashboard from "./Dashboard/Index";
import SignIn from "./Auth/SignIn";
import Executive from "./Executive";
import AddExecutive from "./Executive/AddExecutive";
import AddExecutiveData from "./Dashboard/AddExecutiveData";
import ViewExecutiveData from "./Dashboard/ViewExecutiveData";
import CTCDashboard from "./Dashboard/CTCDashboard";
import AddCTCDashboard from "./Dashboard/AddCTCDashboard";
import CTCDashboardAdmin from "./Dashboard/CTCDashboardAdmin";
// import Invoice from "./print/Invoice";
import Invoice from "./print/invoice";


export default function App() {
  const showCond = window.location.pathname !== "/auth/login";

  useEffect(() => {
    if (window.location.pathname === "/") window.location.href = "/auth/login";
  }, []);

  if (
    window.location.pathname === "/" ||
    window.location.pathname === "/auth/signin"
  ) {
    return (
      <Router>
        <Route exact path="/" component={SignIn} />
        <Route exact path="/auth/signin" component={SignIn} />
        <Route exact path="/print/invoice/:id" component={Invoice} />
      </Router>
    );
  }
  else if (
    window.location.pathname.includes('print') === true
  ) {
    return (
      <Router>
        <Route exact path="/print/invoice/:id" component={Invoice} />
      </Router>
    );
  } else {

    return (
      <>
        <Router>
          {showCond ? (
            <>
              <Aside />
              <Header />
            </>
          ) : (
            ""
          )}
          <main className={showCond ? "appMain" : ""}>
            <Switch>
            {/* <Route exact path="/print/invoice/:id" element={<Invoice />} /> */}
              <Route exact path="/dashboard" component={Dashboard} />

              <Route exact path="/auth/login" component={Login} />

              <Route exact path="/master-setups" component={MastersSetups} />
              <Route exact path="/location-master" component={LocationMaster} />
              <Route exact path="/education-master" component={EducationMaster} />

              <Route exact path="/affilations" component={ManageAffilation} />

              <Route path="/articles" component={ManageArticle} />

              <Route path="/careers-or-advice" component={ManageCareerOrAdvice} />
              <Route path="/testimonial" component={ManageTestimonial} />

              <Route path="/AddFaq" component={AddFaq} />
              <Route path="/ManageFaq" component={ManageFaq} />
              <Route path="/Faq/Update/:id" component={AddFaq} />

              {/* <Route path="/MembershipPlan" component={AddMembershipPlan} /> */}
              <Route path="/membershipplan" component={ManageMembershipplan} />
              <Route
                path="/Membershipplan/Update/:id"
                component={AddMembershipPlan}
              />

              <Route
                path="/AddMembershipPlanFeature"
                component={AddMembershipPlanFeature}
              />
              <Route
                path="/ManageMembershipplanfeature"
                component={ManageMembershipplanfeature}
              />
              <Route
                path="/Membershipplanfeature/Update/:id"
                component={AddMembershipPlanFeature}
              />

              <Route path="/AddPages" component={AddPages} />
              <Route path="/ManagePages" component={ManagePages} />
              <Route path="/Pages/Update/:id" component={AddPages} />

              <Route
                path="/AddWorkpermitforusa"
                component={AddWorkpermitforusa}
              />
              <Route
                path="/ManageWorkpermitforusa"
                component={ManageWorkpermitforusa}
              />
              <Route
                path="/Workpermitforusa/Update/:id"
                component={AddWorkpermitforusa}
              />

              <Route path="/posted-jobs" component={PostedJobs} />
              <Route path="/job/:jobName" component={PostedJobs} />

              <Route path="/candidate" component={Candidate} />
              <Route path="/Addcandidate" component={Addcandidate} />

              <Route path="/appliedjob" component={Appliedjob} />
              <Route path="/Addappliedjob" component={Addappliedjob} />

              <Route path="/freejobalert" component={Freejobalert} />
              <Route path="/Freejobalert" component={Freejobalert} />

              <Route path="/Addfreejobalert" component={Addfreejobalert} />

              {/* <Route path="/createform" component={createform} /> */}

              <Route path="/executive" component={Executive} />
              <Route path="/add-executive" component={AddExecutive} />
              <Route path="/update-executive/:id" component={AddExecutive} />

              <Route exact path="/dashboard/ctc" component={CTCDashboardAdmin} />
              <Route exact path="/dashboard-ctc" component={CTCDashboard} />
              <Route
                exact
                path="/dashboard-ctc-add"
                component={AddCTCDashboard}
              />
              <Route
                exact
                path="/dashboard-ctc-update/:id"
                component={AddCTCDashboard}
              />
              <Route exact path="/add-executivedata" component={AddExecutiveData} />
              <Route exact path="/view-executivedata" component={ViewExecutiveData} />
            </Switch>
          </main>
          <Footer showCond={showCond} />
        </Router>
      </>
    );
  }
}
