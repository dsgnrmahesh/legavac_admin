module.exports={
    sp_getadminlogindetail:'CALL sp_getadminlogindetail(?,?)',
    sp_dashboard:'CALL sp_dashboard()',
    sp_getappliedjobdetail:'CALL sp_getappliedjobdetail()',

    sp_iucountry:'CALL sp_iucountry(?,?,?,?)',
    sp_getallcountry:'CALL sp_getallcountry()',
    sp_getallcountryid:'CALL sp_getallcountryid(?)',
    sp_getcountryforddl:'CALL sp_getcountryforddl()',
    sp_deletecountry:'CALL sp_deletecountry(?)',


    sp_iucity:'CALL sp_iucity(?,?,?,?,?)',
    sp_getallcity:'CALL sp_getallcity()',
    sp_getallcityid:'CALL sp_getallcityid(?)',
    sp_getcityforddl:'CALL sp_getcityforddl()',
    sp_deletecity:'CALL sp_deletecity(?)',
    sp_getcityforddlbystateid:'CALL sp_getcityforddlbystateid(?)',

    sp_iustate:'CALL sp_iustate(?,?,?,?,?)',
    sp_getallstate:'CALL sp_getallstate()',
    sp_getstatebyid:'CALL sp_getstatebyid(?)',
    sp_getstateforddl:'CALL sp_getstateforddl()',
    sp_deletestate:'CALL sp_deletestate(?)',
    sp_getstateforddlbycountryid:'CALL sp_getstateforddlbycountryid(?)',

    sp_iutaluka:'CALL sp_iutaluka(?,?,?,?,?)',
    sp_getalltaluka:'CALL sp_getalltaluka()',
    sp_getalltalukaid:'CALL sp_getalltalukaid(?)',
    sp_gettalukaforddl:'CALL sp_gettalukaforddl()',
    sp_deletetaluka:'CALL sp_deletetaluka(?)',
    sp_gettalukaforddlbyDistrictId:'CALL sp_gettalukaforddlbyDistrictId(?)',

    sp_iudistrict:'CALL sp_iudistrict(?,?,?,?,?)',
    sp_getalldistrict:'CALL sp_getalldistrict()',
    sp_getalldistrictid:'CALL sp_getalldistrictid(?)',
    sp_getdistrictforddl:'CALL sp_getdistrictforddl()',
    sp_deletedistrict:'CALL sp_deletedistrict(?)',
    sp_getdistrictforddlbyCityId:'CALL sp_getdistrictforddlbyCityId(?)',

    sp_iujobtitle:'CALL sp_iujobtitle(?,?,?)',
    sp_getalljobtitle:'CALL sp_getalljobtitle()',
    sp_getalljobtitleid:'CALL sp_getalljobtitleid(?)',
    sp_getjobtitleforddl:'CALL sp_getjobtitleforddl()',
    sp_deletejobtitle:'CALL sp_deletejobtitle(?)',


    sp_iusubjobtitle:'CALL sp_iusubjobtitle(?,?,?,?)',
    sp_getallsubjobtitle:'CALL sp_getallsubjobtitle()',
    sp_getallsubjobtitleid:'CALL sp_getallsubjobtitleid(?)',
    sp_getsubjobtitleforddl:'CALL sp_getsubjobtitleforddl()',
    sp_deletesubjobtitle:'CALL sp_deletesubjobtitle(?)', 
    sp_getsubjobtitleforddlbyjobtitleid:'CALL sp_getsubjobtitleforddlbyjobtitleid(?)',

   
    sp_iukeywords:'CALL sp_iukeywords(?,?,?)',
    sp_getallkeyword:'CALL sp_getallkeyword()',
    sp_getallkeywordid:'CALL sp_getallkeywordid(?)',
    sp_getkeywordforddl:'CALL sp_getkeywordforddl()',
    sp_deletekeyword:'CALL sp_deletekeyword(?)',

    sp_iucompany:'CALL sp_iucompany(?,?,?,?)',
    sp_getcompanyforddl:'CALL sp_getcompanyforddl()',
    sp_getallcompany:'CALL sp_getallcompany()',
    sp_getallcompanyid:'CALL sp_getallcompanyid(?)',
    sp_deletecompany:'CALL sp_deletecompany(?)',
    sp_getcompanygstno:'CALL sp_getcompanygstno(?)',
    
    sp_iufreejobalert:'CALL sp_iufreejobalert(?,?,?,?,?,?,?,?,?)',
    sp_getallfreejobalert:'CALL sp_getallfreejobalert()',
    sp_getfreejobalertid:'CALL sp_getfreejobalertid(?)',
    sp_getfreejobalertforddl:'CALL sp_getfreejobalertforddl()',
    sp_deletefreejobalert:'CALL sp_deletefreejobalert(?)', 
    sp_getallfreejobalertsearch:'CALL sp_freejobalertsearch(?)',    

    sp_iumembershipplan:'CALL sp_iumembershipplan(?,?,?,?,?,?,?)',
    sp_getallmembershipplan:'CALL sp_getallmembershipplan()',
    sp_getmembershipplanid:'CALL sp_getmembershipplanid(?)',
    sp_getmembershipplanforddl:'CALL sp_getmembershipplanforddl()',
    sp_deletemembershipplan:'CALL sp_deletemembershipplan(?)',
    sp_membershipplansearch:'CALL sp_membershipplansearch(?)',    

    sp_iumembershipplanfeature:'CALL sp_iumembershipplanfeature(?,?,?)',
    sp_getallmembershipplanfeature:'CALL sp_getallmembershipplanfeature()',
    sp_getmembershipplanfeatureid:'CALL sp_getmembershipplanfeatureid(?)',
    sp_getmembershipplanfeatureforddl:'CALL sp_getmembershipplanfeatureforddl()',
    sp_deletemembershipplanfeature:'CALL sp_deletemembershipplanfeature(?)',


    sp_iucontact:'CALL sp_iucontact(?,?,?,?,?,?)',
    sp_getallcontact:'CALL sp_getallcontact()',
    sp_getallcontactid:'CALL sp_getallcontactid(?)',
    sp_getcontactforddl:'CALL sp_getcontactforddl()',
    sp_deletecontact:'CALL sp_deletecontact(?)',


    sp_iucareeradvice:'CALL sp_iucareeradvice(?,?,?,?,?)',
    sp_getallcareeradvice:'CALL sp_getallcareeradvice()',
    sp_getallcareeradviceid:'CALL sp_getallcareeradviceid(?)',
    sp_getcareeradviceforddl:'CALL sp_getcareeradviceforddl()',
    sp_deletecareeradvice:'CALL sp_deletecareeradvice(?)',


    sp_iuarticle:'CALL sp_iuarticle(?,?,?,?,?,?,?,?)',
    sp_getallarticle:'CALL sp_getallarticle()',
    sp_getallarticleid:'CALL sp_getallarticleid(?)',
    sp_getarticleforddl:'CALL sp_getarticleforddl()',
    sp_deletearticle :'CALL  sp_deletearticle(?)',


    sp_iupage:'CALL sp_iupage(?,?,?,?,?)',
    sp_getallpage:'CALL sp_getallpage()',
    sp_getallpageid:'CALL sp_getallpageid(?)',
    sp_getpageforddl:'CALL sp_getpageforddl()',
    sp_deletepage:'CALL sp_deletepage(?)',


    sp_iuaffilation:'CALL sp_iuaffilation(?,?,?,?,?)',
    sp_getallaffilation:'CALL sp_getallaffilation()',
    sp_getallaffilationid:'CALL sp_getallaffilationid(?)',
    sp_getaffilationforddl:'CALL sp_getaffilationforddl()',
    sp_deleteaffilation:'CALL  sp_deleteaffilation(?)',


    sp_iufaq:'CALL sp_iufaq(?,?,?,?)',
    sp_getallfaq:'CALL sp_getallfaq()',
    sp_getallfaqid:'CALL sp_getallfaqid(?)',
    sp_getfaqforddl:'CALL sp_getfaqforddl()',
    sp_deletefaq:'CALL sp_deletefaq(?)',


    sp_iucommunity:'CALL sp_iucommunity(?,?,?)',
    sp_getallcommunity:'CALL sp_getallcommunity()',
    sp_getallcommunityid:'CALL sp_getallcommunityid(?)',
    sp_getcommunityforddl:'CALL sp_getcommunityforddl()',
    sp_deletecommunity:'CALL sp_deletecommunity(?)',


    sp_iuworkpermitforusa:'CALL sp_iuworkpermitforusa(?,?,?)',
    sp_getallworkpermitforusa:'CALL sp_getallworkpermitforusa()',
    sp_getallworkpermitforusaid:'CALL sp_getallworkpermitforusaid(?)',
    sp_getworkpermitforusaforddl:'CALL sp_getworkpermitforusaforddl()',
    sp_deleteworkpermitforusa:'CALL sp_deleteworkpermitforusa(?)',


    sp_iucandidatelanguage:'CALL sp_iucandidatelanguage(?,?,?,?,?,?,?,?)',
    sp_getallcandidatelanguage:'CALL sp_getallcandidatelanguage()',
    sp_getallcandidatelanguageid:'CALL sp_getallcandidatelanguageid(?)',
    sp_getcandidatelanguageforddl:'CALL sp_getcandidatelanguageforddl()',
    sp_deletecandidatelanguage:'CALL sp_deletecandidatelanguage(?)',
    

    sp_iucandidate:'CALL sp_iucandidate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_iucandidateemployment:'CALL sp_iucandidateemployment(?,?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_updatecandidate:'CALL sp_updatecandidate(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_candidateregistration:'CALL sp_candidateregistration(?,?)',
    sp_updatecandidatelooking:'CALL sp_updatecandidatelooking(?,?)',
    sp_getallcandidate:'CALL sp_getallcandidate()',
    sp_getallcandidatesearch:'CALL sp_candidatesearch(?,?,?)',
    sp_getallcandidateid:'CALL sp_getallcandidateid(?)',
    sp_getcandidateforddl:'CALL sp_getcandidateforddl()',
    sp_deletecandidate:'CALL sp_deletecandidate(?)',
    sp_getcandidateemploymentid:'CALL sp_getcandidateemploymentid(?)',

    sp_getallaffilationsearch:'CALL sp_affilationsearch(?)',
    sp_getallarticlesearch:'CALL sp_articlesearch(?)',
    sp_getallcareeradvicesearch:'CALL sp_careeradvicesearch(?)',
    sp_getalltestimonialsearch:'CALL sp_testimonialsearch(?)',

    sp_iutestimonial:'CALL sp_iutestimonial(?,?,?,?,?,?,?)',
    sp_getalltestimonial:'CALL sp_getalltestimonial()',
    sp_getalltestimonialid:'CALL sp_getalltestimonialid(?)',
    sp_gettestimonialforddl:'CALL sp_gettestimonialforddl()',
    sp_deletetestimonial:'CALL  sp_deletetestimonial(?)',
    sp_gettestimonialforhome:'CALL sp_gettestimonialforhome()',
    
    sp_iuskill:'CALL sp_iuskill(?,?,?)',
    sp_getallskill:'CALL sp_getallskill()',
    sp_getallskillid:'CALL sp_getallskillid(?)',
    sp_getskillforddl:'CALL sp_getskillforddl()',
    sp_deleteskill:'CALL sp_deleteskill(?)',


    sp_iucandidateskill:'CALL sp_iucandidateskill(?,?,?)',
    sp_getallcandidateskill:'CALL sp_getallcandidateskill()',
    sp_getallcandidateskillid:'CALL sp_getallcandidateskillid(?)',
    sp_getcandidateskillforddl:'CALL sp_getcandidateskillforddl()',
    sp_deletecandidateskill:'CALL sp_deletecandidateskill(?)',


    sp_iueducation:'CALL sp_iueducation(?,?,?)',
    sp_getalleducation:'CALL sp_getalleducation()',
    sp_getalleducationid:'CALL sp_getalleducationid(?)',
    sp_geteducationforddl:'CALL sp_geteducationforddl()',
    sp_deleteeducation:'CALL sp_deleteeducation(?)',


    sp_iucourse:'CALL sp_iucourse(?,?,?,?)',
    sp_getallcourse:'CALL sp_getallcourse()',
    sp_getallcourseid:'CALL sp_getallcourseid(?)',
    sp_getcourseforddl:'CALL sp_getcourseforddl()',
    sp_deletecourse:'CALL sp_deletecourse(?)',


    sp_iuspecialization:'CALL sp_iuspecialization(?,?,?,?)',
    sp_getallspecialization:'CALL sp_getallspecialization()',
    sp_getallspecializationid:'CALL sp_getallspecializationid(?)',
    sp_getspecializationforddl:'CALL sp_getspecializationforddl()',
    sp_deletespecialization:'CALL sp_deletespecialization(?)',


    sp_iucandidateeducation:'CALL sp_iucandidateeducation(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_getallcandidateeducation:'CALL sp_getallcandidateeducation(?)',
    sp_getallcandidateeducationid:'CALL sp_getallcandidateeducationid(?)',
    sp_getcandidateeducationforddl:'CALL sp_getcandidateeducationforddl()',
    sp_deletecandidateeducation:'CALL sp_deletecandidateeducation(?)',

    sp_getlogindetail:'CALL sp_getlogindetail(?,?)',
    
    sp_iupostjob:'CALL sp_iupostjob(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_getpostjobforddl:'CALL sp_getpostjobforddl()',
    sp_getallpostjob:'CALL sp_getallpostjob()',
    sp_getallpostjobbywherecondition:'CALL sp_getallpostjobbywherecondition(?,?,?,?,?,?)',
    sp_getallpostjobid:'CALL sp_getallpostjobid(?)',
    sp_deletepostjob:'CALL sp_deletepostjob(?)',
    sp_postedjobfilterlist:'CALL sp_postedjobfilterlist(?)',
    
    sp_iuappliedjob:'CALL sp_iuappliedjob(?,?,?,?)',
    sp_getappliedjoblistbycandidateid:'CALL sp_getappliedjoblistbycandidateid(?)',
    sp_deleteappliedjob:'CALL sp_deleteappliedjob(?)',
    sp_getallappliedjobsearch:'CALL sp_appliedjobsearch(?)',


    sp_iutestimonial:'CALL sp_iutestimonial(?,?,?,?,?,?,?)',
    sp_getalltestimonial:'CALL sp_getalltestimonial()',
    sp_getalltestimonialid:'CALL sp_getalltestimonialid(?)',
    sp_gettestimonialforddl:'CALL sp_gettestimonialforddl()',
    sp_deletetestimonial:'CALL  sp_deletetestimonial(?)',
    sp_getpostjobforhome:'CALL sp_getpostjobforhome()',
    sp_getmembershipplandetailforweb:'CALL sp_getmembershipplandetailforweb()',
    sp_getddlforfreejob:'CALL sp_getddlforfreejob()',

    sp_iuusermaster:'CALL sp_iuusermaster(?,?,?,?,?,?,?,?,?,?,?)',
    sp_getusermasterdetail:'CALL sp_getusermasterdetail()',
    sp_getusermasterdetailbyid:'CALL sp_getusermasterdetailbyid(?)',
    sp_deleteusermaster:'CALL sp_deleteusermaster(?)',

    sp_iuexecutivedata:'CALL sp_iuexecutivedata(?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_getallexecutivedata:'CALL sp_getallexecutivedata(?)',
    sp_getallexecutivedataid:'CALL sp_getallexecutivedataid(?)',
    sp_deleteexecutivedata:'CALL sp_deleteexecutivedata(?)',
    sp_getallexecutivedatabyexecutiveid:'CALL sp_getallexecutivedatabyexecutiveid(?)',
    sp_getexecutivedatabyid_admin:'CALL sp_getexecutivedatabyid_admin(?,?)',
    sp_getexecutivecompanydata_admin:'CALL sp_getexecutivecompanydata_admin(?,?)',
    sp_getexecutivedatabycompanyid_admin:'CALL sp_getexecutivedatabycompanyid_admin(?,?,?)',
    sp_updatecontactpersonstatus:'CALL sp_updatecontactpersonstatus(?,?,?)',

    sp_iuctcdashboard:'CALL sp_iuctcdashboard(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)',
    sp_getctcdashboarddetail:'CALL sp_getctcdashboarddetail(?)',
    sp_deletectcdashboard:'CALL sp_deletectcdashboard(?)',
    sp_getctcdashboardbyid:'CALL sp_getctcdashboardbyid(?)',
    sp_getctcdashboarddetailforadmin:'CALL sp_getctcdashboarddetailforadmin(?)',
    sp_getctcdashboarddetailforadminbyexecutiveid:'CALL sp_getctcdashboarddetailforadminbyexecutiveid(?,?,?,?)',
    sp_getctcdashboardbyid_invoice:'CALL sp_getctcdashboardbyid_invoice(?)',

    sp_iudesignation:'CALL sp_iudesignation(?,?,?)',
    sp_getdesignationforddl:'CALL sp_getdesignationforddl()',
}

