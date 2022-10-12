import axios from "axios";
import { resolve } from "./resolve.js";
export default () => axios.get("/");



//const API_URL="https://api.legavac.com/api/legavac";
const API_URL="http://localhost:5000/api/legavac";
// export async function getcountryforddl() {
//   return await resolve(axios.get('https://api.legavac.com/api/legavac/getCountryforddl').then(res => res.data));
// }

// export async function getUser(id) {
//   return await axios.get(`http://some-api.com/users/${id}`).then(res => res.data);
// }
// export async function IU_AdminMaster(req) {
//   return await axios.post(`https://api.legavac.com/api/abhita/iuadminmaster`,req).then(res => res.data);
// }
export async function getDashboardCount() {
  return await axios
    .get(`${API_URL}/getDashboardCount`)
    .then((res) => res.data);
}

export async function IU_CTCDashboard(state) {
  return await axios
    .post(`${API_URL}/iuctcdashboard`,state)
    .then((res) => res.data);
}
export async function getCTCDashboardDetail(id) {
  return await axios
    .get(`${API_URL}/getctcdashboarddetail/${id}`)
    .then((res) => res.data);
}
export async function getCTCDashboardByID(id) {
  return await axios
    .get(`${API_URL}/getctcdashboardbyid/${id}`)
    .then((res) => res.data);
}
export async function deleteCTCDashboard(id) {
  return await axios
    .get(`${API_URL}/deletectcdashboard/${id}`)
    .then((res) => res.data);
}
export async function getCTCDashboardDetailForAdmin(searchtext) {
  return await axios
    .get(`${API_URL}/getctcdashboarddetailforadmin/${searchtext}`)
    .then((res) => res.data);
}
export async function getCTCDashboardByID_invoice(id) {
  return await axios
    .get(`${API_URL}/getctcdashboardbyid_invoice/${id}`)
    .then((res) => res.data);
}

export async function IU_UserMaster(state) {
  return await axios
    .post(`${API_URL}/iuusermaster`,state)
    .then((res) => res.data);
}
export async function getUserMasterDetailByID(id) {
  return await axios
    .get(`${API_URL}/getUserMasterDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getUserMasterDetail() {
  return await axios
    .get(`${API_URL}/getUserMasterDetail`)
    .then((res) => res.data);
}
export async function deleteUserMaster(id) {
  return await axios
    .get(`${API_URL}/deleteUserMaster/${id}`)
    .then((res) => res.data);
}
//iuexecutivedata IU_ExecutiveData
export async function iuexecutivedata(state) {
  return await axios
    .post(`${API_URL}/iuexecutivedata`,state)
    .then((res) => res.data);
}
export async function getExecutiveDataByID(id) {
  return await axios
    .get(`${API_URL}/getExecutiveDataByID/${id}`)
    .then((res) => res.data);
}
export async function getExecutiveData(id) {
  return await axios
    .get(`${API_URL}/getExecutiveData/${id}`)
    .then((res) => res.data);
}
export async function getExecutiveDataByID_admin(state) {
  return await axios
    .post(`${API_URL}/getExecutiveDataByID_admin`,state)
    .then((res) => res.data);
}
export async function getExecutiveCompanyData_admin(state) {
  return await axios
    .post(`${API_URL}/getExecutiveCompanyData_admin`,state)
    .then((res) => res.data);
}
export async function getExecutiveDataByCompanyID_admin(state) {
  return await axios
    .post(`${API_URL}/getExecutiveDataByCompanyID_admin`,state)
    .then((res) => res.data);
}
export async function updatecontactpersonstatus(state) {
  return await axios
    .post(`${API_URL}/updatecontactpersonstatus`,state)
    .then((res) => res.data);
}
export async function getExecutiveDataByExecutiveID(id) {
  return await axios
    .get(`${API_URL}/getExecutiveDataByExecutiveID/${id}`)
    .then((res) => res.data);
}
export async function deleteExecutiveData(id) {
  return await axios
    .get(`${API_URL}/deleteExecutiveData/${id}`)
    .then((res) => res.data);
}
export async function SendMail(state) {
  return await axios
    .post(`${API_URL}/sendmail`, state)
    .then((res) => res.data);
}
export async function getAppliedJobDetail() {
  return await axios
    .get(`${API_URL}/getAppliedJobDetail`)
    .then((res) => res.data);
}

export async function deleteAppliedjob(id) {
  return await axios
    .get(`${API_URL}/deleteAppliedjob/${id}`)
    .then((res) => res.data);
}
export async function getPostedJobFilterList(state) {
  return await axios
    .post(`${API_URL}/getPostjobFilterList`, state)
    .then((res) => res.data);
}
export async function getPostjobDetailByWhereCondition(state) {
  return await axios
    .post(
      `${API_URL}/getPostjobDetailByWhereCondition`,
      state
    )
    .then((res) => res.data);
}
export async function getAdminLoginDetail(state) {
  return await axios
    .post(`${API_URL}/getAdminLoginDetail`, state)
    .then((res) => res.data);
}
//ForCountry
export async function IU_Country(state) {
  return await axios
    .post(`${API_URL}/iucountry`, state)
    .then((res) => res.data);
}
export async function getCountryForDDL() {
  return await axios
    .get(`${API_URL}/getCountryforddl`)
    .then((res) => res.data);
}
export async function getCountryDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getCountryDetail`)
      .then((res) => res.data)
  );
}
export async function getCountryDetailByID(id) {
  return await axios
    .get(`${API_URL}/getCountryDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCountryDelete(id) {
  return await axios
    .get(`${API_URL}/getCountryDelete/${id}`)
    .then((res) => res.data);
}

//ForCity
export async function IU_City(state) {
  return await axios
    .post(`${API_URL}/iucity`, state)
    .then((res) => res.data);
}
export async function getCityForDDL() {
  return await axios
    .get(`${API_URL}/getCityforddl`)
    .then((res) => res.data);
}
export async function getCityDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getCityDetail`)
      .then((res) => res.data)
  );
}
export async function getCityForDDLByStateID(StateID) {
  return await axios
    .get(
      `${API_URL}/getCityForDDLByStateID/${StateID}`
    )
    .then((res) => res.data);
}
export async function getCityDetailByID(id) {
  return await axios
    .get(`${API_URL}/getCityDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCityDelete(id) {
  return await axios
    .get(`${API_URL}/getCityDelete/${id}`)
    .then((res) => res.data);
}
//ForDistrict
export async function IU_District(state) {
  return await axios
    .post(`${API_URL}/iudistrict`, state)
    .then((res) => res.data);
}
export async function getDistrictForDDL() {
  return await axios
    .get(`${API_URL}/getDistrictforddl`)
    .then((res) => res.data);
}
export async function getDistrictDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getDistrictDetail`)
      .then((res) => res.data)
  );
}
export async function getDistrictForDDLByCityID(CityID) {
  return await axios
    .get(
      `${API_URL}/getDistrictForDDLByCityID/${CityID}`
    )
    .then((res) => res.data);
}
export async function getDistrictDetailByID(id) {
  return await axios
    .get(`${API_URL}/getDistrictDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getDistrictDelete(id) {
  return await axios
    .get(`${API_URL}/getDistrictDelete/${id}`)
    .then((res) => res.data);
}
//ForTaluka
export async function IU_Taluka(state) {
  return await axios
    .post(`${API_URL}/iutaluka`, state)
    .then((res) => res.data);
}
export async function getTalukaForDDL() {
  return await axios
    .get(`${API_URL}/getTalukaforddl`)
    .then((res) => res.data);
}
export async function getTalukaDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getTalukaDetail`)
      .then((res) => res.data)
  );
}
export async function getTalukaForDDLByDistrictID(DistrictID) {
  return await axios
    .get(
      `${API_URL}/getTalukaForDDLByDistrictID/${DistrictID}`
    )
    .then((res) => res.data);
}
export async function getTalukaDetailByID(id) {
  return await axios
    .get(`${API_URL}/getTalukaDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getTalukaDelete(id) {
  return await axios
    .get(`${API_URL}/getTalukaDelete/${id}`)
    .then((res) => res.data);
}

//ForState
export async function IU_State(state) {
  return await axios
    .post(`${API_URL}/iustate`, state)
    .then((res) => res.data);
}
export async function getStateForDDL() {
  return await axios
    .get(`${API_URL}/getStateForDDL`)
    .then((res) => res.data);
}
export async function getStateDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getStateDetail`)
      .then((res) => res.data)
  );
}
export async function getStateForDDLByCountryID(CountryID) {
  return await axios
    .get(
      `${API_URL}/getStateForDDLByCountryID/${CountryID}`
    )
    .then((res) => res.data);
}
export async function getStateDetailByID(id) {
  return await axios
    .get(`${API_URL}/getStateDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getStateDelete(id) {
  return await axios
    .get(`${API_URL}/getStateDelete/${id}`)
    .then((res) => res.data);
}

//for Jobtitle
export async function IU_Jobtitle(state) {
  return await axios
    .post(`${API_URL}/iujobtitle`, state)
    .then((res) => res.data);
}
export async function getJobtitleForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getJobtitleForDDL`)
      .then((res) => res.data)
  );
}
export async function getJobtitleDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getJobtitleDetail`)
      .then((res) => res.data)
  );
}
export async function getJobtitleDetailByID(id) {
  return await axios
    .get(`${API_URL}/getJobtitleDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getJobtitleDelete(id) {
  return await axios
    .get(`${API_URL}/getJobtitleDelete/${id}`)
    .then((res) => res.data);
}

//for Subjobtitle
export async function IU_Subjobtitle(state) {
  return await axios
    .post(`${API_URL}/iusubjobtitle`, state)
    .then((res) => res.data);
}
export async function getSubjobtitleForDDL(id) {
  return await resolve(
    axios
      .get(`${API_URL}/getSubjobtitleForDDL/${id}`)
      .then((res) => res.data)
  );
}
export async function getSubjobtitleForDDLByJobTitleId(id) {
  return await resolve(
    axios
      .get(`${API_URL}/getSubjobtitleForDDLByJobTitleId/${id}`)
      .then((res) => res.data)
  );
}
export async function getSubjobtitleDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getSubjobtitleDetail`)
      .then((res) => res.data)
  );
}
export async function getSubjobtitleDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getSubjobtitleDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getSubjobtitleDelete(id) {
  return await axios
    .get(`${API_URL}/getSubjobtitleDelete/${id}`)
    .then((res) => res.data);
}

//for Article
export async function IU_Article(state) {
  return await axios
    .post(`${API_URL}/iuarticle`, state)
    .then((res) => res.data);
}
export async function getArticleForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getArticleForDDL`)
      .then((res) => res.data)
  );
}
export async function getArticleDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getArticleDetail`)
      .then((res) => res.data)
  );
}
export async function getArticleDetailByID(id) {
  return await axios
    .get(`${API_URL}/getArticleDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getArticleDelete(id) {
  return await axios
    .get(`${API_URL}/getArticleDelete/${id}`)
    .then((res) => res.data);
}

//for Affilation
export async function IU_Affilation(state) {
  return await axios
    .post(`${API_URL}/iuaffilation`, state)
    .then((res) => res.data);
}
export async function getAffilationForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getAffilationForDDL`)
      .then((res) => res.data)
  );
}
export async function getAffilationDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getAffilationDetail`)
      .then((res) => res.data)
  );
}
export async function getAffilationDetailByID(id) {
  return await axios
    .get(`${API_URL}/getAffilationDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getAffilationDelete(id) {
  return await axios
    .get(`${API_URL}/getAffilationDelete/${id}`)
    .then((res) => res.data);
}

//for Careeradvice
export async function IU_CareerOrAdvice(state) {
  return await axios
    .post(`${API_URL}/iucareeradvice`, state)
    .then((res) => res.data);
}
export async function getCareerOrAdviceForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getCareeradviceForDDL`)
      .then((res) => res.data)
  );
}
export async function getCareerOrAdviceDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getCareeradviceDetail`)
      .then((res) => res.data)
  );
}
export async function getCareerOrAdviceDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getCareeradviceDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getCareeradviceDelete(id) {
  return await axios
    .get(`${API_URL}/getCareeradviceDelete/${id}`)
    .then((res) => res.data);
}

//for Community
export async function IU_Community(state) {
  return await axios
    .post(`${API_URL}/iucommunity`, state)
    .then((res) => res.data);
}
export async function getCommunityForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getCommunityForDDL`)
      .then((res) => res.data)
  );
}
export async function getCommunityDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getCommunityDetail`)
      .then((res) => res.data)
  );
}
export async function getCommunityDetailByID(id) {
  return await axios
    .get(`${API_URL}/getCommunityDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCommunityDelete(id) {
  return await axios
    .get(`${API_URL}/getCommunityDelete/${id}`)
    .then((res) => res.data);
}

//for Course
export async function IU_Course(state) {
  return await axios
    .post(`${API_URL}/iucourse`, state)
    .then((res) => res.data);
}
export async function getCourseForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getCourseForDDL`)
      .then((res) => res.data)
  );
}
export async function getCourseDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getCourseDetail`)
      .then((res) => res.data)
  );
}
export async function getCourseDetailByID(id) {
  return await axios
    .get(`${API_URL}/getCourseDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCourseDelete(id) {
  return await axios
    .get(`${API_URL}/getCourseDelete/${id}`)
    .then((res) => res.data);
}

//for Specialization
export async function IU_Specialization(state) {
  return await axios
    .post(`${API_URL}/iuspecialization`, state)
    .then((res) => res.data);
}
export async function getSpecializationForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getSpecializationForDDL`)
      .then((res) => res.data)
  );
}
export async function getSpecializationDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getSpecializationDetail`)
      .then((res) => res.data)
  );
}
export async function getSpecializationDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getSpecializationDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getSpecializationDelete(id) {
  return await axios
    .get(`${API_URL}/getSpecializationDelete/${id}`)
    .then((res) => res.data);
}

//for Education
export async function IU_Education(state) {
  return await axios
    .post(`${API_URL}/iueducation`, state)
    .then((res) => res.data);
}
export async function getEducationForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getEducationForDDL`)
      .then((res) => res.data)
  );
}
export async function getEducationDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getEducationDetail`)
      .then((res) => res.data)
  );
}
export async function getEducationDetailByID(id) {
  return await axios
    .get(`${API_URL}/getEducationDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getEducationDelete(id) {
  return await axios
    .get(`${API_URL}/getEducationDelete/${id}`)
    .then((res) => res.data);
}

//for Faq
export async function IU_Faq(state) {
  return await axios
    .post(`${API_URL}/iufaq`, state)
    .then((res) => res.data);
}
export async function getFaqForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getFaqForDDL`)
      .then((res) => res.data)
  );
}
export async function getFaqDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getFaqDetail`)
      .then((res) => res.data)
  );
}
export async function getFaqDetailByID(id) {
  return await axios
    .get(`${API_URL}/getFaqDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getFaqDelete(id) {
  return await axios
    .get(`${API_URL}/getFaqDelete/${id}`)
    .then((res) => res.data);
}

//for Membershipplan
export async function IU_MembershipPlan(state) {
  return await axios
    .post(`${API_URL}/iumembershipplan`, state)
    .then((res) => res.data);
}
export async function getMembershipplanForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getMembershipplanForDDL`)
      .then((res) => res.data)
  );
}
export async function getMembershipplanDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getMembershipplanDetail`)
      .then((res) => res.data)
  );
}
export async function getMembershipplanDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getMembershipplanDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getMembershipplanDelete(id) {
  return await axios
    .get(`${API_URL}/getMembershipplanDelete/${id}`)
    .then((res) => res.data);
}

//for Membershipplanfeature
export async function IU_MembershipPlanFeature(state) {
  return await axios
    .post(
      `${API_URL}/iumembershipplanfeature`,
      state
    )
    .then((res) => res.data);
}
export async function getMembershipplanfeatureForDDL() {
  return await resolve(
    axios
      .get(
        `${API_URL}/getMembershipplanfeatureForDDL`
      )
      .then((res) => res.data)
  );
}
export async function getMembershipplanfeatureDetail() {
  return await resolve(
    axios
      .get(
        `${API_URL}/getMembershipplanfeatureDetail`
      )
      .then((res) => res.data)
  );
}
export async function getMembershipPlanFeatureDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getMembershipPlanFeatureDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getMembershipPlanFeatureDelete(id) {
  return await axios
    .get(
      `${API_URL}/getMembershipPlanFeatureDelete/${id}`
    )
    .then((res) => res.data);
}

//for Skill
export async function IU_Skill(state) {
  return await axios
    .post(`${API_URL}/iuskill`, state)
    .then((res) => res.data);
}
export async function getSkillForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getSkillForDDL`)
      .then((res) => res.data)
  );
}
export async function getSkillDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getSkillDetail`)
      .then((res) => res.data)
  );
}
export async function getSkillDetailByID(id) {
  return await axios
    .get(`${API_URL}/getSkillDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getSkillDelete(id) {
  return await axios
    .get(`${API_URL}/getSkillDelete/${id}`)
    .then((res) => res.data);
}

//for Page
export async function IU_Page(state) {
  return await axios
    .post(`${API_URL}/iupage`, state)
    .then((res) => res.data);
}
export async function getPageForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getLPageForDDL`)
      .then((res) => res.data)
  );
}
export async function getLPageDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getLPageDetail`)
      .then((res) => res.data)
  );
}
export async function getLPageDetailByID(id) {
  return await axios
    .get(`${API_URL}/getLPageDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getLPageDelete(id) {
  return await axios
    .get(`${API_URL}/getLPageDelete/${id}`)
    .then((res) => res.data);
}

//for Workpermitforusa
export async function IU_Workpermitforusa(state) {
  return await axios
    .post(`${API_URL}/iuworkpermitforusa`, state)
    .then((res) => res.data);
}
export async function getWorkpermitforusaForDDL() {
  return await resolve(
    axios
      .get(`${API_URL}/getWorkpermitforusaForDDL`)
      .then((res) => res.data)
  );
}
export async function getWorkpermitforusaDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getWorkpermitforusaDetail`)
      .then((res) => res.data)
  );
}
export async function getWorkpermitforusaDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getWorkpermitforusaDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getWorkpermitforusaDelete(id) {
  return await axios
    .get(
      `${API_URL}/getWorkpermitforusaDelete/${id}`
    )
    .then((res) => res.data);
}

//upload
export async function UploadAffilationPDF(state, config) {
  return await axios
    .post(`${API_URL}/uploadaffilationpdf`, state, config)
    .then((res) => res.data);
}
export async function UploadAffilationImage(state, config) {
  return await axios
    .post(`${API_URL}/uploadaffilationimage`, state, config)
    .then((res) => res.data);
}
export async function UploadArticlePDF(state, config) {
  return await axios
    .post(`${API_URL}/uploadarticlepdf`, state, config)
    .then((res) => res.data);
}
export async function UploadArticleImage(state, configimage) {
  return await axios
    .post(`${API_URL}/uploadarticleimage`, state, configimage)
    .then((res) => res.data);
}
export async function UploadArticleVideo(state, configvideo) {
  return await axios
    .post(`${API_URL}/uploadarticlevideo`, state, configvideo)
    .then((res) => res.data);
}
export async function UploadArticleVideoImage(state, configvideo) {
  return await axios
    .post(`${API_URL}/uploadarticlevideoImage`, state, configvideo)
    .then((res) => res.data);
}
export async function UploadCareerAdviceVideo(state, config) {
  return await axios
    .post(`${API_URL}/uploadcareeradvicevideo`, state, config)
    .then((res) => res.data);
}
export async function UploadCareerAdviceVideoImage(state, config) {
  return await axios
    .post(`${API_URL}/uploadcareeradvicevideoImage`, state, config)
    .then((res) => res.data);
}
export async function UploadResume(state, config) {
  return await axios
    .post(`${API_URL}/uploadresume`, state, config)
    .then((res) => res.data);
}
export async function UploadTestimonialImage(state, config) {
  return await axios
    .post(`${API_URL}/uploadtestimonialimage`, state, config)
    .then((res) => res.data);
}
export async function UploadLogoImage(state, config) {
  return await axios
    .post(`${API_URL}/uploadlogoimage`, state, config)
    .then((res) => res.data);
}
//postjob
export async function IU_Postjob(state) {
  return await axios
    .post(`${API_URL}/iupostjob`, state)
    .then((res) => res.data);
}

export async function getPostjobDetail() {
  return await axios
    .get(`${API_URL}/getPostjobDetail`
    )
    .then((res) => res.data);
}
export async function getPostjobDelete(id) {
  return await axios
    .get(`${API_URL}/getPostjobDelete/${id}`
    )
    .then((res) => res.data);
}



export async function getPostjobDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getPostjobDetailByID/${id}`
    )
    .then((res) => res.data);
}

//Candidate Search
export async function getCandidateDetailSearchText(state) {
  return await resolve(
    axios
      .post(
        `${API_URL}/getCandidateDetailSearchText`, state
      )
      .then((res) => res.data)
  );
}



//searchbox
export async function getAffilationDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `${API_URL}/getAffilationDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}
export async function getArticleDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `${API_URL}/getArticleDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}
export async function getCareerAdviceDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `${API_URL}/getCareerAdviceDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}
export async function getTestimonialDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `${API_URL}/getTestimonialDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}

//candidate
export async function getCandidateDetail() {
  return await resolve(
    axios
      .get(`${API_URL}/getCandidateDetail`)
      .then((res) => res.data)
  );
}


//For Testimonial  
export async function IU_Testimonial(state) {
  return await axios.post(`${API_URL}/iutestimonial`, state).then(res => res.data);
}
export async function getTestimonialForDDL() {
  return await resolve(axios.get('${API_URL}/getTestimonialForDDL').then(res => res.data));
}
export async function getTestimonialDetail() {
  return await resolve(axios.get(`${API_URL}/getTestimonialDetail`).then(res => res.data));
}
export async function getTestimonialDetailByID(id) {
  return await axios.get(`${API_URL}/getTestimonialDetailByID/${id}`).then(res => res.data);
}
export async function getTestimonialDelete(id) {
  return await axios.get(`${API_URL}/getTestimonialDelete/${id}`).then(res => res.data);
}


//FREEJOBALERT

export async function IU_Freejobalert(state) {
  return await axios.post(`${API_URL}/iufreejobalert`, state).then(res => res.data);
}
export async function getFreejobalertForDDL() {
  return await resolve(axios.get('${API_URL}/getFreejobalertForDDL').then(res => res.data));
}
export async function getFreejobalertDetail() {
  return await resolve(axios.get(`${API_URL}/getFreejobalertDetail`).then(res => res.data));
}
export async function getFreejobalertDetailByID(id) {
  return await axios.get(`${API_URL}/getFreejobalertDetailByID/${id}`).then(res => res.data);
}
export async function getFreejobalertDelete(id) {
  return await axios.get(`${API_URL}/getFreejobalertDelete/${id}`).then(res => res.data);
}


// export async function getFreejobalertDetail() {
//     return await resolve(axios.get(`https://api.legavac.com/getFreejobalertDetail`).then(res => res.data));
//  }

export async function getFreejobalertDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `${API_URL}/getFreejobalertDetailSearchText/${searchtext}`)
      .then((res) => res.data)
  );
}




//Candidate
export async function IU_Candidate(state) {
  return await axios.post(`${API_URL}/iucandidate`, state).then(res => res.data);
}
export async function getCandidateForDDL() {
  return await resolve(axios.get('${API_URL}/getCandidateForDDL').then(res => res.data));
}
// export async function getCandidateDetail() {
//   return await resolve(axios.get(`${API_URL}/getCandidateDetail`).then(res => res.data));
// }
export async function getCandidateDetailByID(id) {
  return await axios.get(`${API_URL}/getCandidateDetailByID/${id}`).then(res => res.data);
}
export async function getCandidateDelete(id) {
  return await axios.get(`${API_URL}/getCandidateDelete/${id}`).then(res => res.data);
}




export async function checkEmailID(state) {
  return await axios
    .post(
      `${API_URL}/checkEmailID`, state
    )
    .then((res) => res.data);
}
//IU_Company
//iucompany
//Company
export async function IU_Company(state) {
  return await axios
    .post(
      `${API_URL}/iucompany`, state)
    .then((res) => res.data);
}
export async function getCompanyForDDL() {
  return await axios
    .get(
      `${API_URL}/getCompanyForDDL`)
    .then((res) => res.data);
}
export async function getCompanyDetailByID(id) {
  return await axios
    .get(
      `${API_URL}/getCompanyDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCompanyDetail(state) {
  return await axios
    .get(
      `${API_URL}/getCompanyDetail`)
    .then((res) => res.data);
}
export async function getCompanyDelete(id) {
  return await axios
    .get(
      `${API_URL}/getCompanyDelete/${id}`)
    .then((res) => res.data);
}
export async function getCompanyGSTNo(id) {
  return await axios
    .get(
      `${API_URL}/getCompanyGSTNo/${id}`)
    .then((res) => res.data);
}
//Login
export async function getLoginDetail(state) {
  return await axios
    .post(
      `${API_URL}/getLoginDetail`,
      state
    )
    .then((res) => res.data);
}


//Designation
export async function IU_Designation(state) {
  return await axios
    .post(
      `${API_URL}/iudesignation`, state)
    .then((res) => res.data);
}
export async function getDesignationForDDL() {
  return await axios
    .get(
      `${API_URL}/getDesignationForDDL`)
    .then((res) => res.data);
}


export async function getMembershipplanDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `${API_URL}/getMembershipplanDetailSearchText/${searchtext}`)
      .then((res) => res.data)
  );
}
































// export async function getAdminLoginDetail(state) {
//   return await axios
//     .post(`https://api.legavac.com/getAdminLoginDetail`, state)
//     .then((res) => res.data);
// }
// //ForCountry
// export async function IU_Country(state) {
//   return await axios
//     .post(`https://api.legavac.com/iucountry`, state)
//     .then((res) => res.data);
// }
// export async function getCountryForDDL() {
//   return await axios
//     .get(`https://api.legavac.com/getCountryforddl`)
//     .then((res) => res.data);
// }
// export async function getCountryDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCountryDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getCountryDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCountryDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getCountryDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCountryDelete/${id}`)
//     .then((res) => res.data);
// }

// //ForCity
// export async function IU_City(state) {
//   return await axios
//     .post(`https://api.legavac.com/iucity`, state)
//     .then((res) => res.data);
// }
// export async function getCityForDDL() {
//   return await axios
//     .get(`https://api.legavac.com/getCityforddl`)
//     .then((res) => res.data);
// }
// export async function getCityDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCityDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getCityDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCityDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getCityDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCityDelete/${id}`)
//     .then((res) => res.data);
// }

// //ForState
// export async function IU_State(state) {
//   return await axios
//     .post(`https://api.legavac.com/iustate`, state)
//     .then((res) => res.data);
// }
// export async function getStateForDDL() {
//   return await axios
//     .get(`https://api.legavac.com/getStateForDDL`)
//     .then((res) => res.data);
// }
// export async function getStateDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getStateDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getStateDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getStateDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getStateDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getStateDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Jobtitle
// export async function IU_Jobtitle(state) {
//   return await axios
//     .post(`https://api.legavac.com/iujobtitle`, state)
//     .then((res) => res.data);
// }
// export async function getJobtitleForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getJobtitleForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getJobtitleDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getJobtitleDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getJobtitleDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getJobtitleDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getJobtitleDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getJobtitleDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Subjobtitle
// export async function IU_Subjobtitle(state) {
//   return await axios
//     .post(`https://api.legavac.com/iusubjobtitle`, state)
//     .then((res) => res.data);
// }
// export async function getSubjobtitleForDDL(id) {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSubjobtitleForDDL/${id}`)
//       .then((res) => res.data)
//   );
// }
// export async function getSubjobtitleForDDLByJobTitleId(id) {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSubjobtitleForDDLByJobTitleId/${id}`)
//       .then((res) => res.data)
//   );
// }
// export async function getSubjobtitleDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSubjobtitleDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getSubjobtitleDetailByID(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getSubjobtitleDetailByID/${id}`
//     )
//     .then((res) => res.data);
// }
// export async function getSubjobtitleDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getSubjobtitleDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Article
// export async function IU_Article(state) {
//   return await axios
//     .post(`https://api.legavac.com/iuarticle`, state)
//     .then((res) => res.data);
// }
// export async function getArticleForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getArticleForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getArticleDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getArticleDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getArticleDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getArticleDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getArticleDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getArticleDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Affilation
// export async function IU_Affilation(state) {
//   return await axios
//     .post(`https://api.legavac.com/iuaffilation`, state)
//     .then((res) => res.data);
// }
// export async function getAffilationForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getAffilationForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getAffilationDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getAffilationDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getAffilationDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getAffilationDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getAffilationDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getAffilationDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Careeradvice
// export async function IU_CareerOrAdvice(state) {
//   return await axios
//     .post(`https://api.legavac.com/iucareeradvice`, state)
//     .then((res) => res.data);
// }
// export async function getCareerOrAdviceForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCareeradviceForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getCareerOrAdviceDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCareeradviceDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getCareerOrAdviceDetailByID(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getCareeradviceDetailByID/${id}`
//     )
//     .then((res) => res.data);
// }
// export async function getCareeradviceDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCareeradviceDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Community
// export async function IU_Community(state) {
//   return await axios
//     .post(`https://api.legavac.com/iucommunity`, state)
//     .then((res) => res.data);
// }
// export async function getCommunityForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCommunityForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getCommunityDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCommunityDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getCommunityDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCommunityDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getCommunityDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCommunityDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Course
// export async function IU_Course(state) {
//   return await axios
//     .post(`https://api.legavac.com/iucourse`, state)
//     .then((res) => res.data);
// }
// export async function getCourseForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCourseForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getCourseDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCourseDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getCourseDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCourseDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getCourseDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getCourseDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Specialization
// export async function IU_Specialization(state) {
//   return await axios
//     .post(`https://api.legavac.com/iuspecialization`, state)
//     .then((res) => res.data);
// }
// export async function getSpecializationForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSpecializationForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getSpecializationDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSpecializationDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getSpecializationDetailByID(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getSpecializationDetailByID/${id}`
//     )
//     .then((res) => res.data);
// }
// export async function getSpecializationDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getSpecializationDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Education
// export async function IU_Education(state) {
//   return await axios
//     .post(`https://api.legavac.com/iueducation`, state)
//     .then((res) => res.data);
// }
// export async function getEducationForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getEducationForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getEducationDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getEducationDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getEducationDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getEducationDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getEducationDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getEducationDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Faq
// export async function IU_Faq(state) {
//   return await axios
//     .post(`https://api.legavac.com/iufaq`, state)
//     .then((res) => res.data);
// }
// export async function getFaqForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getFaqForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getFaqDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getFaqDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getFaqDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getFaqDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getFaqDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getFaqDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Membershipplan
// export async function IU_MembershipPlan(state) {
//   return await axios
//     .post(`https://api.legavac.com/iumembershipplan`, state)
//     .then((res) => res.data);
// }
// export async function getMembershipplanForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getMembershipplanForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getMembershipplanDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getMembershipplanDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getMembershipplanDetailByID(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getMembershipplanDetailByID/${id}`
//     )
//     .then((res) => res.data);
// }
// export async function getMembershipplanDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getMembershipplanDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Membershipplanfeature
// export async function IU_MembershipPlanFeature(state) {
//   return await axios
//     .post(
//       `https://api.legavac.com/iumembershipplanfeature`,
//       state
//     )
//     .then((res) => res.data);
// }
// export async function getMembershipplanfeatureForDDL() {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getMembershipplanfeatureForDDL"
//       )
//       .then((res) => res.data)
//   );
// }
// export async function getMembershipplanfeatureDetail() {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getMembershipplanfeatureDetail`
//       )
//       .then((res) => res.data)
//   );
// }
// export async function getMembershipPlanFeatureDetailByID(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getMembershipPlanFeatureDetailByID/${id}`
//     )
//     .then((res) => res.data);
// }
// export async function getMembershipPlanFeatureDelete(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getMembershipPlanFeatureDelete/${id}`
//     )
//     .then((res) => res.data);
// }

// //for Skill
// export async function IU_Skill(state) {
//   return await axios
//     .post(`https://api.legavac.com/iuskill`, state)
//     .then((res) => res.data);
// }
// export async function getSkillForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSkillForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getSkillDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getSkillDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getSkillDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getSkillDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getSkillDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getSkillDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Page
// export async function IU_Page(state) {
//   return await axios
//     .post(`https://api.legavac.com/iupage`, state)
//     .then((res) => res.data);
// }
// export async function getPageForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getLPageForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getLPageDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getLPageDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getLPageDetailByID(id) {
//   return await axios
//     .get(`https://api.legavac.com/getLPageDetailByID/${id}`)
//     .then((res) => res.data);
// }
// export async function getLPageDelete(id) {
//   return await axios
//     .get(`https://api.legavac.com/getLPageDelete/${id}`)
//     .then((res) => res.data);
// }

// //for Workpermitforusa
// export async function IU_Workpermitforusa(state) {
//   return await axios
//     .post(`https://api.legavac.com/iuworkpermitforusa`, state)
//     .then((res) => res.data);
// }
// export async function getWorkpermitforusaForDDL() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getWorkpermitforusaForDDL`)
//       .then((res) => res.data)
//   );
// }
// export async function getWorkpermitforusaDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getWorkpermitforusaDetail`)
//       .then((res) => res.data)
//   );
// }
// export async function getWorkpermitforusaDetailByID(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getWorkpermitforusaDetailByID/${id}`
//     )
//     .then((res) => res.data);
// }
// export async function getWorkpermitforusaDelete(id) {
//   return await axios
//     .get(
//       `https://api.legavac.com/getWorkpermitforusaDelete/${id}`
//     )
//     .then((res) => res.data);
// }

// //upload
// export async function UploadAffilationPDF(state,config) {
//   return await axios
//     .post(`https://api.legavac.com/uploadaffilationpdf`, state,config)
//     .then((res) => res.data);
// }
// export async function UploadArticlePDF(state,config) {
//   return await axios
//     .post(`https://api.legavac.com/uploadarticlepdf`, state,config)
//     .then((res) => res.data);
// }
// export async function UploadArticleImage(state,configimage) {
//   return await axios
//     .post(`https://api.legavac.com/uploadarticleimage`, state,configimage)
//     .then((res) => res.data);
// }
// export async function UploadArticleVideo(state,configvideo) {
//   return await axios
//     .post(`https://api.legavac.com/uploadarticlevideo`, state,configvideo)
//     .then((res) => res.data);
// }
// export async function UploadCareerAdviceVideo(state,config) {
//   return await axios
//     .post(`https://api.legavac.com/uploadcareeradvicevideo`, state,config)
//     .then((res) => res.data);
// }
// export async function UploadResume(state,config) {
//   return await axios
//     .post(`https://api.legavac.com/uploadresume`, state,config)
//     .then((res) => res.data);
// }
// export async function UploadTestimonialImage(state,config) {
//   return await axios
//     .post(`https://api.legavac.com/uploadtestimonialimage`, state,config)
//     .then((res) => res.data);
// }

// //postjob
// export async function IU_Postjob(state) {
//   return await axios
//     .post(`https://api.legavac.com/iupostjob`, state)
//     .then((res) => res.data);
// }

// export async function getPostjobDetail() {
//   return await axios
//     .get(`https://api.legavac.com/getPostjobDetail`)
//     .then((res) => res.data);
// }
// export async function getCandidateDetailSearchText(state) {
//   return await resolve(
//     axios
//       .post(
//         `https://api.legavac.com/getCandidateDetailSearchText`,state
//       )
//       .then((res) => res.data)
//   );
// }



// //searchbox
// export async function getAffilationDetailSearchText(searchtext) {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getAffilationDetailSearchText/${searchtext}`
//       )
//       .then((res) => res.data)
//   );
// }
// export async function getArticleDetailSearchText(searchtext) {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getArticleDetailSearchText/${searchtext}`
//       )
//       .then((res) => res.data)
//   );
// }
// export async function getCareerAdviceDetailSearchText(searchtext) {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getCareerAdviceDetailSearchText/${searchtext}`
//       )
//       .then((res) => res.data)
//   );
// }
// export async function getTestimonialDetailSearchText(searchtext) {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getTestimonialDetailSearchText/${searchtext}`
//       )
//       .then((res) => res.data)
//   );
// }

// //candidate
// export async function getCandidateDetail() {
//   return await resolve(
//     axios
//       .get(`https://api.legavac.com/getCandidateDetail`)
//       .then((res) => res.data)
//   );
// }


// //For Testimonial
// export async function IU_Testimonial(state) {
//   return await axios.post(`https://api.legavac.com/iutestimonial`,state).then(res => res.data);
// }
// export async function getTestimonialForDDL() {
//   return await resolve(axios.get('https://api.legavac.com/getTestimonialForDDL').then(res => res.data));
// }
// export async function getTestimonialDetail() {
//   return await resolve(axios.get(`https://api.legavac.com/getTestimonialDetail`).then(res => res.data));
// }
// export async function getTestimonialDetailByID(id){
//   return await axios.get(`https://api.legavac.com/getTestimonialDetailByID/${id}`).then(res => res.data);
// }
// export async function  getTestimonialDelete(id){
//   return await axios.get(`https://api.legavac.com/getTestimonialDelete/${id}`).then(res => res.data);
// }


// //FREEJOBALERT

// export async function IU_Freejobalert(state) {
//   return await axios.post(`https://api.legavac.com/iufreejobalert`,state).then(res => res.data);
// }
// export async function getFreejobalertForDDL() {
//   return await resolve(axios.get('https://api.legavac.com/getFreejobalertForDDL').then(res => res.data));
// }
// export async function getFreejobalertDetail() {
//   return await resolve(axios.get(`https://api.legavac.com/getFreejobalertDetail`).then(res => res.data));
// }
// export async function getFreejobalertDetailByID(id){
//   return await axios.get(`https://api.legavac.com/getFreejobalertDetailByID/${id}`).then(res => res.data);
// }
// export async function  getFreejobalertDelete(id){
//   return await axios.get(`https://api.legavac.com/getFreejobalertDelete/${id}`).then(res => res.data);
// }



// export async function getFreejobalertDetailSearchText(searchtext) {
//   return await resolve(
//     axios
//       .get(
//         `https://api.legavac.com/getFreejobalertDetailSearchText/${searchtext}`)
//       .then((res) => res.data)
//   );
// }




