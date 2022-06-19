import axios from "axios";
import { resolve } from "./resolve.js";
export default () => axios.get("/");

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
    .get(`https://api.legavac.com/api/legavac/getDashboardCount`)
    .then((res) => res.data);
}

export async function getAppliedJobDetail() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getAppliedJobDetail`)
    .then((res) => res.data);
}

export async function deleteAppliedjob(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/deleteAppliedjob/${id}`)
    .then((res) => res.data);
}
export async function getPostedJobFilterList(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/getPostjobFilterList`, state)
    .then((res) => res.data);
}
export async function getPostjobDetailByWhereCondition(state) {
  return await axios
    .post(
      `https://api.legavac.com/api/legavac/getPostjobDetailByWhereCondition`,
      state
    )
    .then((res) => res.data);
}
export async function getAdminLoginDetail(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/getAdminLoginDetail`, state)
    .then((res) => res.data);
}
//ForCountry
export async function IU_Country(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucountry`, state)
    .then((res) => res.data);
}
export async function getCountryForDDL() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCountryforddl`)
    .then((res) => res.data);
}
export async function getCountryDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getCountryDetail`)
      .then((res) => res.data)
  );
}
export async function getCountryDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCountryDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCountryDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCountryDelete/${id}`)
    .then((res) => res.data);
}

//ForCity
export async function IU_City(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucity`, state)
    .then((res) => res.data);
}
export async function getCityForDDL() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCityforddl`)
    .then((res) => res.data);
}
export async function getCityDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getCityDetail`)
      .then((res) => res.data)
  );
}
export async function getCityForDDLByStateID(StateID) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCityForDDLByStateID/${StateID}`
    )
    .then((res) => res.data);
}
export async function getCityDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCityDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCityDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCityDelete/${id}`)
    .then((res) => res.data);
}
//ForDistrict
export async function IU_District(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iudistrict`, state)
    .then((res) => res.data);
}
export async function getDistrictForDDL() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getDistrictforddl`)
    .then((res) => res.data);
}
export async function getDistrictDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getDistrictDetail`)
      .then((res) => res.data)
  );
}
export async function getDistrictForDDLByCityID(CityID) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getDistrictForDDLByCityID/${CityID}`
    )
    .then((res) => res.data);
}
export async function getDistrictDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getDistrictDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getDistrictDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getDistrictDelete/${id}`)
    .then((res) => res.data);
}
//ForTaluka
export async function IU_Taluka(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iutaluka`, state)
    .then((res) => res.data);
}
export async function getTalukaForDDL() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getTalukaforddl`)
    .then((res) => res.data);
}
export async function getTalukaDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getTalukaDetail`)
      .then((res) => res.data)
  );
}
export async function getTalukaForDDLByDistrictID(DistrictID) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getTalukaForDDLByDistrictID/${DistrictID}`
    )
    .then((res) => res.data);
}
export async function getTalukaDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getTalukaDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getTalukaDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getTalukaDelete/${id}`)
    .then((res) => res.data);
}

//ForState
export async function IU_State(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iustate`, state)
    .then((res) => res.data);
}
export async function getStateForDDL() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getStateForDDL`)
    .then((res) => res.data);
}
export async function getStateDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getStateDetail`)
      .then((res) => res.data)
  );
}
export async function getStateForDDLByCountryID(CountryID) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getStateForDDLByCountryID/${CountryID}`
    )
    .then((res) => res.data);
}
export async function getStateDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getStateDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getStateDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getStateDelete/${id}`)
    .then((res) => res.data);
}

//for Jobtitle
export async function IU_Jobtitle(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iujobtitle`, state)
    .then((res) => res.data);
}
export async function getJobtitleForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getJobtitleForDDL")
      .then((res) => res.data)
  );
}
export async function getJobtitleDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getJobtitleDetail`)
      .then((res) => res.data)
  );
}
export async function getJobtitleDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getJobtitleDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getJobtitleDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getJobtitleDelete/${id}`)
    .then((res) => res.data);
}

//for Subjobtitle
export async function IU_Subjobtitle(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iusubjobtitle`, state)
    .then((res) => res.data);
}
export async function getSubjobtitleForDDL(id) {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getSubjobtitleForDDL/${id}`)
      .then((res) => res.data)
  );
}
export async function getSubjobtitleForDDLByJobTitleId(id) {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getSubjobtitleForDDLByJobTitleId/${id}`)
      .then((res) => res.data)
  );
}
export async function getSubjobtitleDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getSubjobtitleDetail`)
      .then((res) => res.data)
  );
}
export async function getSubjobtitleDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getSubjobtitleDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getSubjobtitleDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getSubjobtitleDelete/${id}`)
    .then((res) => res.data);
}

//for Article
export async function IU_Article(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iuarticle`, state)
    .then((res) => res.data);
}
export async function getArticleForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getArticleForDDL")
      .then((res) => res.data)
  );
}
export async function getArticleDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getArticleDetail`)
      .then((res) => res.data)
  );
}
export async function getArticleDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getArticleDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getArticleDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getArticleDelete/${id}`)
    .then((res) => res.data);
}

//for Affilation
export async function IU_Affilation(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iuaffilation`, state)
    .then((res) => res.data);
}
export async function getAffilationForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getAffilationForDDL")
      .then((res) => res.data)
  );
}
export async function getAffilationDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getAffilationDetail`)
      .then((res) => res.data)
  );
}
export async function getAffilationDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getAffilationDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getAffilationDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getAffilationDelete/${id}`)
    .then((res) => res.data);
}

//for Careeradvice
export async function IU_CareerOrAdvice(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucareeradvice`, state)
    .then((res) => res.data);
}
export async function getCareerOrAdviceForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getCareeradviceForDDL")
      .then((res) => res.data)
  );
}
export async function getCareerOrAdviceDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getCareeradviceDetail`)
      .then((res) => res.data)
  );
}
export async function getCareerOrAdviceDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCareeradviceDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getCareeradviceDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCareeradviceDelete/${id}`)
    .then((res) => res.data);
}

//for Community
export async function IU_Community(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucommunity`, state)
    .then((res) => res.data);
}
export async function getCommunityForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getCommunityForDDL")
      .then((res) => res.data)
  );
}
export async function getCommunityDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getCommunityDetail`)
      .then((res) => res.data)
  );
}
export async function getCommunityDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCommunityDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCommunityDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCommunityDelete/${id}`)
    .then((res) => res.data);
}

//for Course
export async function IU_Course(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iucourse`, state)
    .then((res) => res.data);
}
export async function getCourseForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getCourseForDDL")
      .then((res) => res.data)
  );
}
export async function getCourseDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getCourseDetail`)
      .then((res) => res.data)
  );
}
export async function getCourseDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCourseDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCourseDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getCourseDelete/${id}`)
    .then((res) => res.data);
}

//for Specialization
export async function IU_Specialization(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iuspecialization`, state)
    .then((res) => res.data);
}
export async function getSpecializationForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getSpecializationForDDL")
      .then((res) => res.data)
  );
}
export async function getSpecializationDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getSpecializationDetail`)
      .then((res) => res.data)
  );
}
export async function getSpecializationDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getSpecializationDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getSpecializationDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getSpecializationDelete/${id}`)
    .then((res) => res.data);
}

//for Education
export async function IU_Education(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iueducation`, state)
    .then((res) => res.data);
}
export async function getEducationForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getEducationForDDL")
      .then((res) => res.data)
  );
}
export async function getEducationDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getEducationDetail`)
      .then((res) => res.data)
  );
}
export async function getEducationDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getEducationDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getEducationDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getEducationDelete/${id}`)
    .then((res) => res.data);
}

//for Faq
export async function IU_Faq(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iufaq`, state)
    .then((res) => res.data);
}
export async function getFaqForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getFaqForDDL")
      .then((res) => res.data)
  );
}
export async function getFaqDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getFaqDetail`)
      .then((res) => res.data)
  );
}
export async function getFaqDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getFaqDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getFaqDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getFaqDelete/${id}`)
    .then((res) => res.data);
}

//for Membershipplan
export async function IU_MembershipPlan(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iumembershipplan`, state)
    .then((res) => res.data);
}
export async function getMembershipplanForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getMembershipplanForDDL")
      .then((res) => res.data)
  );
}
export async function getMembershipplanDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getMembershipplanDetail`)
      .then((res) => res.data)
  );
}
export async function getMembershipplanDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getMembershipplanDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getMembershipplanDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getMembershipplanDelete/${id}`)
    .then((res) => res.data);
}

//for Membershipplanfeature
export async function IU_MembershipPlanFeature(state) {
  return await axios
    .post(
      `https://api.legavac.com/api/legavac/iumembershipplanfeature`,
      state
    )
    .then((res) => res.data);
}
export async function getMembershipplanfeatureForDDL() {
  return await resolve(
    axios
      .get(
        "https://api.legavac.com/api/legavac/getMembershipplanfeatureForDDL"
      )
      .then((res) => res.data)
  );
}
export async function getMembershipplanfeatureDetail() {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getMembershipplanfeatureDetail`
      )
      .then((res) => res.data)
  );
}
export async function getMembershipPlanFeatureDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getMembershipPlanFeatureDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getMembershipPlanFeatureDelete(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getMembershipPlanFeatureDelete/${id}`
    )
    .then((res) => res.data);
}

//for Skill
export async function IU_Skill(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iuskill`, state)
    .then((res) => res.data);
}
export async function getSkillForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getSkillForDDL")
      .then((res) => res.data)
  );
}
export async function getSkillDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getSkillDetail`)
      .then((res) => res.data)
  );
}
export async function getSkillDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getSkillDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getSkillDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getSkillDelete/${id}`)
    .then((res) => res.data);
}

//for Page
export async function IU_Page(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iupage`, state)
    .then((res) => res.data);
}
export async function getPageForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getLPageForDDL")
      .then((res) => res.data)
  );
}
export async function getLPageDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getLPageDetail`)
      .then((res) => res.data)
  );
}
export async function getLPageDetailByID(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getLPageDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getLPageDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getLPageDelete/${id}`)
    .then((res) => res.data);
}

//for Workpermitforusa
export async function IU_Workpermitforusa(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iuworkpermitforusa`, state)
    .then((res) => res.data);
}
export async function getWorkpermitforusaForDDL() {
  return await resolve(
    axios
      .get("https://api.legavac.com/api/legavac/getWorkpermitforusaForDDL")
      .then((res) => res.data)
  );
}
export async function getWorkpermitforusaDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getWorkpermitforusaDetail`)
      .then((res) => res.data)
  );
}
export async function getWorkpermitforusaDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getWorkpermitforusaDetailByID/${id}`
    )
    .then((res) => res.data);
}
export async function getWorkpermitforusaDelete(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getWorkpermitforusaDelete/${id}`
    )
    .then((res) => res.data);
}

//upload
export async function UploadAffilationPDF(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadaffilationpdf`, state, config)
    .then((res) => res.data);
}
export async function UploadAffilationImage(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadaffilationimage`, state, config)
    .then((res) => res.data);
}
export async function UploadArticlePDF(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadarticlepdf`, state, config)
    .then((res) => res.data);
}
export async function UploadArticleImage(state, configimage) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadarticleimage`, state, configimage)
    .then((res) => res.data);
}
export async function UploadArticleVideo(state, configvideo) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadarticlevideo`, state, configvideo)
    .then((res) => res.data);
}
export async function UploadArticleVideoImage(state, configvideo) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadarticlevideoImage`, state, configvideo)
    .then((res) => res.data);
}
export async function UploadCareerAdviceVideo(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadcareeradvicevideo`, state, config)
    .then((res) => res.data);
}
export async function UploadCareerAdviceVideoImage(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadcareeradvicevideoImage`, state, config)
    .then((res) => res.data);
}
export async function UploadResume(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadresume`, state, config)
    .then((res) => res.data);
}
export async function UploadTestimonialImage(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadtestimonialimage`, state, config)
    .then((res) => res.data);
}
export async function UploadLogoImage(state, config) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/uploadlogoimage`, state, config)
    .then((res) => res.data);
}
//postjob
export async function IU_Postjob(state) {
  return await axios
    .post(`https://api.legavac.com/api/legavac/iupostjob`, state)
    .then((res) => res.data);
}

export async function getPostjobDetail() {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getPostjobDetail`
    )
    .then((res) => res.data);
}
export async function getPostjobDelete(id) {
  return await axios
    .get(`https://api.legavac.com/api/legavac/getPostjobDelete/${id}`
    )
    .then((res) => res.data);
}



export async function getPostjobDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getPostjobDetailByID/${id}`
    )
    .then((res) => res.data);
}

//Candidate Search
export async function getCandidateDetailSearchText(state) {
  return await resolve(
    axios
      .post(
        `https://api.legavac.com/api/legavac/getCandidateDetailSearchText`, state
      )
      .then((res) => res.data)
  );
}



//searchbox
export async function getAffilationDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getAffilationDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}
export async function getArticleDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getArticleDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}
export async function getCareerAdviceDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getCareerAdviceDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}
export async function getTestimonialDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getTestimonialDetailSearchText/${searchtext}`
      )
      .then((res) => res.data)
  );
}

//candidate
export async function getCandidateDetail() {
  return await resolve(
    axios
      .get(`https://api.legavac.com/api/legavac/getCandidateDetail`)
      .then((res) => res.data)
  );
}


//For Testimonial  
export async function IU_Testimonial(state) {
  return await axios.post(`https://api.legavac.com/api/legavac/iutestimonial`, state).then(res => res.data);
}
export async function getTestimonialForDDL() {
  return await resolve(axios.get('https://api.legavac.com/api/legavac/getTestimonialForDDL').then(res => res.data));
}
export async function getTestimonialDetail() {
  return await resolve(axios.get(`https://api.legavac.com/api/legavac/getTestimonialDetail`).then(res => res.data));
}
export async function getTestimonialDetailByID(id) {
  return await axios.get(`https://api.legavac.com/api/legavac/getTestimonialDetailByID/${id}`).then(res => res.data);
}
export async function getTestimonialDelete(id) {
  return await axios.get(`https://api.legavac.com/api/legavac/getTestimonialDelete/${id}`).then(res => res.data);
}


//FREEJOBALERT

export async function IU_Freejobalert(state) {
  return await axios.post(`https://api.legavac.com/api/legavac/iufreejobalert`, state).then(res => res.data);
}
export async function getFreejobalertForDDL() {
  return await resolve(axios.get('https://api.legavac.com/api/legavac/getFreejobalertForDDL').then(res => res.data));
}
export async function getFreejobalertDetail() {
  return await resolve(axios.get(`https://api.legavac.com/api/legavac/getFreejobalertDetail`).then(res => res.data));
}
export async function getFreejobalertDetailByID(id) {
  return await axios.get(`https://api.legavac.com/api/legavac/getFreejobalertDetailByID/${id}`).then(res => res.data);
}
export async function getFreejobalertDelete(id) {
  return await axios.get(`https://api.legavac.com/api/legavac/getFreejobalertDelete/${id}`).then(res => res.data);
}


// export async function getFreejobalertDetail() {
//     return await resolve(axios.get(`https://api.legavac.com/getFreejobalertDetail`).then(res => res.data));
//  }

export async function getFreejobalertDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getFreejobalertDetailSearchText/${searchtext}`)
      .then((res) => res.data)
  );
}




//Candidate
export async function IU_Candidate(state) {
  return await axios.post(`https://api.legavac.com/api/legavac/iucandidate`, state).then(res => res.data);
}
export async function getCandidateForDDL() {
  return await resolve(axios.get('https://api.legavac.com/api/legavac/getCandidateForDDL').then(res => res.data));
}
// export async function getCandidateDetail() {
//   return await resolve(axios.get(`https://api.legavac.com/api/legavac/getCandidateDetail`).then(res => res.data));
// }
export async function getCandidateDetailByID(id) {
  return await axios.get(`https://api.legavac.com/api/legavac/getCandidateDetailByID/${id}`).then(res => res.data);
}
export async function getCandidateDelete(id) {
  return await axios.get(`https://api.legavac.com/api/legavac/getCandidateDelete/${id}`).then(res => res.data);
}




export async function checkEmailID(state) {
  return await axios
    .post(
      `https://api.legavac.com/api/legavac/checkEmailID`, state
    )
    .then((res) => res.data);
}

//Company
export async function IU_Company(state) {
  return await axios
    .post(
      `https://api.legavac.com/api/legavac/iucompany`, state)
    .then((res) => res.data);
}
export async function getCompanyForDDL() {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCompanyForDDL`)
    .then((res) => res.data);
}
export async function getCompanyDetailByID(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCompanyDetailByID/${id}`)
    .then((res) => res.data);
}
export async function getCompanyDetail(state) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCompanyDetail`)
    .then((res) => res.data);
}
export async function getCompanyDelete(id) {
  return await axios
    .get(
      `https://api.legavac.com/api/legavac/getCompanyDelete/${id}`)
    .then((res) => res.data);
}
//Login
export async function getLoginDetail(state) {
  return await axios
    .post(
      `https://api.legavac.com/api/legavac/getLoginDetail`,
      state
    )
    .then((res) => res.data);
}





export async function getMembershipplanDetailSearchText(searchtext) {
  return await resolve(
    axios
      .get(
        `https://api.legavac.com/api/legavac/getMembershipplanDetailSearchText/${searchtext}`)
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
//       .get("https://api.legavac.com/getJobtitleForDDL")
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
//       .get("https://api.legavac.com/getArticleForDDL")
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
//       .get("https://api.legavac.com/getAffilationForDDL")
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
//       .get("https://api.legavac.com/getCareeradviceForDDL")
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
//       .get("https://api.legavac.com/getCommunityForDDL")
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
//       .get("https://api.legavac.com/getCourseForDDL")
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
//       .get("https://api.legavac.com/getSpecializationForDDL")
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
//       .get("https://api.legavac.com/getEducationForDDL")
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
//       .get("https://api.legavac.com/getFaqForDDL")
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
//       .get("https://api.legavac.com/getMembershipplanForDDL")
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
//         "https://api.legavac.com/getMembershipplanfeatureForDDL"
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
//       .get("https://api.legavac.com/getSkillForDDL")
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
//       .get("https://api.legavac.com/getLPageForDDL")
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
//       .get("https://api.legavac.com/getWorkpermitforusaForDDL")
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




