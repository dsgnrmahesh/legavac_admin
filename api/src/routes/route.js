const express = require('express');
const router = express.Router();

//set controller
const userController=require('../controllers/user.controller');
const countryController = require('../controllers/country.controller');
const cityController = require('../controllers/city.controller');
const stateController = require('../controllers/state.controller');
const districtController = require('../controllers/district.controller');
const talukaController = require('../controllers/taluka.controller');
const jobtitleController = require('../controllers/jobtitle.controller');
const subjobtitleController = require('../controllers/subjobtitle.controller');
const keywordController = require('../controllers/keyword.controller');
const freejobalertController = require('../controllers/freejobalert.controller');
const membershipplanController = require('../controllers/membershipplan.controller');
const membershipplanfeatureController = require('../controllers/membershipplanfeature.controller');
const contactController = require('../controllers/contact.controller');
const careeradviceController = require('../controllers/careeradvice.controller');
const articleController = require('../controllers/article.controller');
const affilationController = require('../controllers/affilation.controller');
const pageController = require('../controllers/page.controller');
const  FaqController= require('../controllers/faq.controller');
const communityController = require('../controllers/community.controller');
const workpermitforusaController = require('../controllers/workpermitforusa.controller');
const candidatelanguageController = require('../controllers/candidatelanguage.controller');
const skillController = require('../controllers/skill.controller');
const candidateskillController = require('../controllers/candidateskill.controller');
const candidateController = require('../controllers/candidate.controller');
const educationController = require('../controllers/education.controller');
const courseController = require('../controllers/course.controller');
const specializationController = require('../controllers/specialization.controller');
const candidateeducationController = require('../controllers/candidateeducation.controller');
const uploadController = require('../controllers/upload.controller');
const candidateemploymentController = require('../controllers/candidateemployment.controller');
const postjobController = require('../controllers/postjob.controller');
const testimonialController = require('../controllers/testimonial.controller');
const dashboardController=require('../controllers/dashboard.controller');
const companyController = require('../controllers/company.controller');
const sendmailController=require('../controllers/sendmail.controller')
const ctcdashboardController=require('../controllers/ctcdashboard.controller');
const designationController=require('../controllers/designation.controller');
//set route
//router.post('/insertproperty', propertyController.insertproperty);

router.post('/getadminlogindetail', userController.getAdminLoginDetail);
router.get('/getDashboardCount', dashboardController.getDashboardCount);
router.post('/iuusermaster', userController.iuusermaster);
router.get('/getUserMasterDetailByID/:id', userController.getUserMasterDetailByID);
router.get('/getUserMasterDetail', userController.getUserMasterDetail);
router.get('/deleteUserMaster/:id', userController.deleteUserMaster);
router.post('/iuexecutivedata', userController.iuexecutivedata);
router.get('/getExecutiveDataByID/:id', userController.getExecutiveDataByID);
router.get('/getExecutiveData/:id', userController.getExecutiveData);
router.post('/getExecutiveDataByID_admin', userController.getExecutiveDataByID_admin);
router.post('/getExecutiveCompanyData_admin', userController.getExecutiveCompanyData_admin);
router.post('/getExecutiveDataByCompanyID_admin', userController.getExecutiveDataByCompanyID_admin);
router.post('/updatecontactpersonstatus', userController.updatecontactpersonstatus);
router.get('/getExecutiveDataByExecutiveID/:id', userController.getExecutiveDataByExecutiveID);
router.get('/deleteExecutiveData/:id', userController.deleteExecutiveData);

//SENDMAIL
router.post('/sendmail',sendmailController.funcsendmail);

router.post('/iuctcdashboard',ctcdashboardController.iuCTCDashboard);
router.get('/getctcdashboarddetail/:id',ctcdashboardController.getCTCDashboardDetail);
router.get('/getctcdashboardbyid/:id',ctcdashboardController.getCTCDashboardByID);
router.get('/deletectcdashboard/:id',ctcdashboardController.deleteCTCDashboard);
router.get('/getctcdashboarddetailforadmin/:searchtext',ctcdashboardController.getCTCDashboardDetailForAdmin);
router.post('/getctcdashboarddetailforadminbyexecutiveid',ctcdashboardController.getCTCDashboardDetailForAdminByExecutiveID);
router.get('/getctcdashboardbyid_invoice/:id',ctcdashboardController.getCTCDashboardByID_invoice);


//COUNTRY
router.post('/iucountry', countryController.iucountry);
router.get('/getCountryforddl', countryController.getCountryForDDL);
router.get('/getCountryDetail', countryController.getCountryDetail);
router.get('/getCountryDetailByID/:id', countryController.getCountryDetailByID);
router.get('/getCountryDelete/:id', countryController.getCountryDelete);


//CITY 
router.post('/iucity', cityController.iucity);
router.get('/getCityforddl', cityController.getCityForDDL);
router.get('/getCityDetail', cityController.getCityDetail);
router.get('/getCityDetailByID/:id', cityController.getCityDetailByID);
router.get('/getCityDelete/:id', cityController.getCityDelete);
router.get('/getCityForDDLByStateID/:StateID', cityController.getCityForDDLByStateID);

//DISTRICT
router.post('/iudistrict', districtController.iudistrict);
router.get('/getDistrictForDDL', districtController.getDistrictForDDL);
router.get('/getDistrictDetail', districtController.getDistrictDetail);
router.get('/getDistrictDetailByID/:id', districtController.getDistrictDetailByID);
router.get('/getDistrictForDDLByCityID/:CityID', districtController.getDistrictForDDLByCityID);
router.get('/getDistrictDelete/:id', districtController.DeleteDistrict);

//TALUKA
router.post('/iutaluka', talukaController.iutaluka);
router.get('/getTalukaForDDL', talukaController.getTalukaForDDL);
router.get('/getTalukaDetail', talukaController.getTalukaDetail);
router.get('/getTalukaDetailByID/:id', talukaController.getTalukaDetailByID);
router.get('/getTalukaForDDLByDistrictID/:DistrictID', talukaController.getTalukaForDDLByDistrictID);
router.get('/getTalukaDelete/:id', talukaController.DeleteTaluka);

//STATE
router.post('/iustate', stateController.iustate);
router.get('/getStateForDDL', stateController.getStateForDDL);
router.get('/getStateDetail', stateController.getStateDetail);
router.get('/getStateDetailByID/:id', stateController.getStateDetailByID);
router.get('/getStateDelete/:id', stateController.getStateDelete);
router.get('/getStateForDDLByCountryID/:CountryID', stateController.getStateForDDLByCountryID);


//JOBTITLE
router.post('/iujobtitle', jobtitleController.iujobtitle);
router.get('/getJobtitleForDDL', jobtitleController.getJobtitleForDDL);
router.get('/getJobtitleDetail', jobtitleController.getJobtitleDetail);
router.get('/getJobtitleDetailByID/:id', jobtitleController.getJobtitleDetailByID);
router.get('/getJobtitleDelete/:id', jobtitleController.getJobtitleDelete);


//SUBJOBTITLE
router.post('/iusubjobtitle', subjobtitleController.iusubjobtitle);
router.get('/getSubjobtitleForDDL/:id', subjobtitleController.getSubjobtitleForDDL);
router.get('/getSubjobtitleDetail', subjobtitleController.getSubjobtitleDetail);
router.get('/getSubjobtitleDetailByID/:id', subjobtitleController.getSubjobtitleDetailByID);
router.get('/getSubjobtitleDelete/:id', subjobtitleController.getSubjobtitleDelete);
router.get('/getSubjobtitleForDDLByJobTitleId/:id', subjobtitleController.getSubjobtitleForDDLByJobTitleId);



//FREEJOBALERT
router.post('/iufreejobalert', freejobalertController.iufreejobalert);
router.get('/getFreejobalertForDDL', freejobalertController.getFreejobalertForDDL);
router.get('/getFreejobalertDetail', freejobalertController.getFreejobalertDetail);
router.get('/getFreejobalertDetailByID/:id',freejobalertController.getFreejobalertDetailByID);
router.get('/getFreejobalertDelete/:id',freejobalertController.getFreejobalertDelete);
router.get('/getFreejobalertDetailSearchText/:searchtext',freejobalertController.getFreejobalertDetailSearchText);


//KEYWORDS
router.post('/iukeywords', keywordController.iukeyword);
router.get('/getKeywordForDDL', keywordController.getKeywordForDDL);
router.get('/getKeywordDetail', keywordController.getKeywordDetail);
router.get('/getKeywordDetailByID/:id', keywordController.getKeywordDetailByID);
router.get('/getKeywordDelete/:id', keywordController.getKeywordDelete);

//Company
router.post('/iucompany', companyController.iucompany);
router.get('/getCompanyForDDL', companyController.getCompanyForDDL);
router.get('/getCompanyDetail', companyController.getCompanyDetail);
router.get('/getCompanyDetailByID/:id', companyController.getCompanyDetailByID);
router.get('/getCompanyDelete/:id', companyController.getCompanyDelete);
router.get('/getCompanyGSTNo/:id', companyController.getCompanyGSTNo);

//MEMBERSHIPPLAN
router.post('/iumembershipplan', membershipplanController.iumembershipplan);
router.get('/getMembershipplanForDDL', membershipplanController. getMembershipplanForDDL);
router.get('/getMembershipplanDetail', membershipplanController.getMembershipplanDetail);
router.get('/getMembershipplanDetailByID/:id', membershipplanController.getMembershipplanDetailByID);
router.get('/getMembershipplanDelete/:id', membershipplanController.getMembershipplanDelete);
router.get('/getMembershipplanDetailSearchText/:searchtext',membershipplanController.getMembershipplanDetailSearchText);


//MEMBERSHIPPLANFEATURE
router.post('/iumembershipplanfeature',membershipplanfeatureController.iumembershipplanfeature);
router.get('/getMembershipplanfeatureForDDL',membershipplanfeatureController.getMembershipplanfeatureForDDL);
router.get('/getMembershipplanfeatureDetail', membershipplanfeatureController.getMembershipplanfeatureDetail);
router.get('/getMembershipPlanFeatureDetailByID/:id', membershipplanfeatureController.getMembershipPlanFeatureDetailByID);
router.get('/getMembershipPlanFeatureDelete/:id', membershipplanfeatureController.getMembershipPlanFeatureDelete);


//CONTACT
router.post('/iucontact', contactController.iucontact);
router.get('/getContactForDDL', contactController.getContactForDDL);
router.get('/getContactDetail', contactController.getContactDetail);
router.get('/getContactDetailByID/:id', contactController.getContactDetailByID);
router.get('/getContactDelete/:id', contactController.getContactDelete);



//CARRIERADVICE
router.post('/iucareeradvice', careeradviceController.iucareeradvice);
router.get('/getCareeradviceForDDL', careeradviceController.getCareeradviceForDDL);
router.get('/getCareeradviceDetail', careeradviceController.getCareeradviceDetail);
router.get('/getCareeradviceDetailByID/:id', careeradviceController.getCareeradviceDetailByID);
router.get('/getCareeradviceDelete/:id', careeradviceController.getCareeradviceDelete);


//ARTICLE
router.post('/iuarticle', articleController.iuarticle);
router.get('/getArticleForDDL', articleController.getArticleForDDL);
router.get('/getArticleDetail', articleController.getArticleDetail);
router.get('/getArticleDetailByID/:id', articleController.getArticleDetailByID);
router.get('/getArticleDelete/:id', articleController.getArticleDelete);


//PAGE
router.post('/iupage', pageController.iupage);
router.get('/getLPageForDDL', pageController.getLPageForDDL);
router.get('/getLPageDetail', pageController.getLPageDetail);
router.get('/getLPageDetailByID/:id', pageController.getLPageDetailByID);
router.get('/getLPageDelete/:id', pageController.getLPageDelete);



//AFFILATION
router.post('/iuaffilation', affilationController.iuaffilation);
router.get('/getAffilationforddl', affilationController.getAffilationForDDL);
router.get('/getAffilationDetail',affilationController.getAffilationDetail);
router.get('/getAffilationDetailByID/:id', affilationController.getAffilationDetailByID);
router.get('/getAffilationDelete/:id', affilationController.getAffilationDelete);



//FAQ
router.post('/iufaq', FaqController.iufaq);
router.get('/getFaqForDDL', FaqController.getFaqForDDL);
router.get('/getFaqDetail', FaqController.getFaqDetail);
router.get('/getFaqDetailByID/:id', FaqController.getFaqDetailByID);
router.get('/getFaqDelete/:id', FaqController.getFaqDelete);


//COMMUNITY
router.post('/iucommunity', communityController.iucommunity);
router.get('/getCommunityForDDL', communityController.getCommunityForDDL);
router.get('/getCommunityDetail', communityController.getCommunityDetail);
router.get('/getCommunityDetailByID/:id',communityController.getCommunityDetailByID);
router.get('/getCommunityDelete/:id',communityController.getCommunityDelete);




//WORKPERMITFORUSA
router.post('/iuworkpermitforusa', workpermitforusaController.iuworkpermitforusa);
router.get('/getWorkpermitforusaForDDL', workpermitforusaController.getWorkpermitforusaForDDL);
router.get('/getWorkpermitforusaDetail', workpermitforusaController.getWorkpermitforusaDetail);
router.get('/getWorkpermitforusaDetailByID/:id', workpermitforusaController.getWorkpermitforusaDetailByID);
router.get('/getWorkpermitforusaDelete/:id', workpermitforusaController.getWorkpermitforusaDelete);



//CANDIDATELANGUAGE
router.post('/iucandidatelanguage', candidatelanguageController.iucandidatelanguage);
router.get('/getCandidatelanguageForDDL', candidatelanguageController.getCandidatelanguageForDDL);
router.get('/getCandidatelanguageDetail', candidatelanguageController.getCandidatelanguageDetail);
router.get('/getCandidatelanguageDetailByID/:id', candidatelanguageController.getCandidatelanguageDetailByID);
router.get('/getCandidatelanguageDelete/:id', candidatelanguageController.getCandidatelanguageDelete);



//CANDIDATE
router.post('/iucandidate', candidateController.iucandidate);
router.post('/updatecandidate', candidateController.updatecandidate);
router.post('/updatecandidatelooking', candidateController.updatecandidatelooking);
router.post('/candidateregistration', candidateController.candidateregistration);
router.get('/getCandidateForDDL', candidateController.getCandidateForDDL);
router.get('/getCandidateDetail', candidateController.getCandidateDetail);

router.get('/getCandidateDetailByID/:id', candidateController.getCandidateDetailByID);
router.get('/getCandidateDelete/:id', candidateController.getCandidateDelete);
router.get('/getCandidateEmploymentDetailByID/:id', candidateemploymentController.getCandidateEmploymentDetailByID);

router.post('/getCandidateDetailSearchText', candidateController.getCandidateDetailSearchText);
router.get('/getAffilationDetailSearchText/:searchtext', affilationController.getAffilationDetailSearchText);
router.get('/getArticleDetailSearchText/:searchtext', articleController.getArticleDetailSearchText);
router.get('/getCareerAdviceDetailSearchText/:searchtext', careeradviceController.getCareerAdviceDetailSearchText);
router.get('/getTestimonialDetailSearchText/:searchtext', testimonialController.getTestimonialDetailSearchText);


//testimonial
router.post('/iutestimonial', testimonialController.iutestimonial);
router.get('/getTestimonialForDDL', testimonialController.getTestimonialForDDL);
router.get('/getTestimonialDetail',testimonialController.getTestimonialDetail);
router.get('/getTestimonialDetailByID/:id', testimonialController.getTestimonialDetailByID);
router.get('/getTestimonialDelete/:id', testimonialController.getTestimonialDelete);
router.get('/getTestimonialDetailForHome',testimonialController.getTestimonialDetailForHome);

//CANDIDATEEMPLOYMENT
router.post('/iucandidateemployment', candidateemploymentController.iucandidateemployment);


//SKILL
router.post('/iuskill', skillController.iuskill);
router.get('/getSkillForDDL', skillController.getSkillForDDL);
router.get('/getSkillDetail', skillController.getSkillDetail);
router.get('/getSkillDetailByID/:id', skillController.getSkillDetailByID);
router.get('/getSkillDelete/:id', skillController.getSkillDelete);




// CANDIATESKILL
router.post('/iucandidateskill', candidateskillController.iucandidateskill);
router.get('/getCandidateskillForDDL', candidateskillController.getCandidateskillForDDL);
router.get('/getCandidateskillDetail', candidateskillController.getCandidateskillDetail);
router.get('/getCandidateskillDetailByID/:id', candidateskillController.getCandidateskillDetailByID);
router.get('/getCandidateskillDelete/:id', candidateskillController.getCandidateskillDelete);




//EDUCATION
router.post('/iueducation', educationController.iueducation);
router.get('/getEducationForDDL', educationController.getEducationForDDL);
router.get('/getEducationDetail', educationController.getEducationDetail);
router.get('/getEducationDetailByID/:id', educationController.getEducationDetailByID);
router.get('/getEducationDelete/:id', educationController.getEducationDelete);




//COURSE
router.post('/iucourse', courseController.iucourse);
router.get('/getCourseForDDL', courseController.getCourseForDDL);
router.get('/getCourseDetail', courseController.getCourseDetail);
router.get('/getCourseDetailByID/:id', courseController.getCourseDetailByID);
router.get('/getCourseDelete/:id', courseController.getCourseDelete);




//SPECIALIZATION
router.post('/iuspecialization', specializationController.iuspecialization);
router.get('/getSpecializationForDDL', specializationController.getSpecializationForDDL);
router.get('/getSpecializationDetail', specializationController.getSpecializationDetail);
router.get('/getSpecializationDetailByID/:id', specializationController.getSpecializationDetailByID);
router.get('/getSpecializationDelete/:id', specializationController.getSpecializationDelete);



//CANDIDATEEDUCATION
router.post('/iucandidateeducation', candidateeducationController.iucandidateeducation);
router.get('/getCandidateeducationForDDL', candidateeducationController.getCandidateeducationForDDL);
router.get('/getCandidateeducationDetail/:id', candidateeducationController.getCandidateeducationDetail);
router.get('/getCandidateeducationDetailByID/:id', candidateeducationController.getCandidateeducationDetailByID);
router.get('/getCandidateeducationDelete/:id', candidateeducationController.getCandidateeducationDelete);

//upload
router.post('/uploadaffilationpdf', uploadController.uploadaffilationpdf);
router.post('/uploadaffilationimage', uploadController.uploadaffilationimage);
router.post('/uploadarticlepdf', uploadController.uploadarticlepdf);
router.post('/uploadarticleimage', uploadController.uploadarticleimage);
router.post('/uploadarticlevideo', uploadController.uploadarticlevideo);
router.post('/uploadcareeradvicevideo', uploadController.uploadcareeradvicevideo);
router.post('/uploadresume', uploadController.uploadresume);
router.post('/uploadtestimonialimage', uploadController.uploadtestimonialimage);
router.post('/uploadarticlevideoimage', uploadController.uploadarticlevideoimage);
router.post('/uploadcareeradvicevideoimage', uploadController.uploadcareeradvicevideoimage);
router.post('/uploadlogoimage', uploadController.uploadlogoimage);


router.post('/getLoginDetail', candidateController.getLoginDetail);

router.post('/iupostjob', postjobController.iupostjob);
router.get('/getPostjobForDDL', postjobController.getPostjobForDDL);
router.get('/getPostjobDetail', postjobController.getPostjobDetail);
router.post('/getPostjobDetailByWhereCondition', postjobController.getPostjobDetailByWhereCondition);
router.get('/getPostjobDetailByID/:id', postjobController.getPostjobDetailByID);
router.get('/getPostjobDelete/:id', postjobController.getPostjobDelete);
router.post('/getPostjobFilterList', postjobController.getPostjobFilterList);

router.post('/iuappliedjob', candidateController.iuappliedjob);
router.get('/getAppliedjobByCandidate/:id', candidateController.getAppliedjobByCandidate);
router.get('/getAppliedjobDetail', candidateController.getAppliedjobDetail);
router.get('/deleteAppliedjob/:id', candidateController.deleteAppliedjob);
router.get('/getappliedjobsearch/:searchtext', candidateController.getallappliedjobsearch);

router.get('/getpostjobforhome',postjobController.getPostJobForHome);
router.get('/getmembershipplanforweb',membershipplanController.getMembershipPlanForWeb);
router.get('/getddlforfreejob',freejobalertController.getDdlForFreeJob);
//router.get('/getappliedjobsearch/:searchtext', candidateController.getallappliedjobsearch);

router.post('/iudesignation', designationController.iudesignation);
router.get('/getDesignationForDDL', designationController.getDesignationForDDL);

//router.post('/iustatus', statusController.iustatus);
//router.post('/iuservicedetail', servicedetailController.iuservicedetail);


module.exports = router;