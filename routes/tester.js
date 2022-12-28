var express = require('express');
var router = express.Router();
var rtnres = '';
var statusmesg = '';
const fetch = require('node-fetch');
var router = express.Router();
var universalrestapicall = require('../functions/universalrestapicall');
var bodyParser = require('body-parser')
var urlencodedParser = bodyParser.urlencoded({ extended: false })

//load empudpt page **********************************
router.get('/', async (req, res, next) => { rtnres= res.render('tester',{ resultdata:  "" , resultstatus: ""})});
/* GET users listing. */




 //  Call Rest API function 
 router.post('/', urlencodedParser, async (req, res, next) => {
    var varCallURL     = req.body.varCallURL
    var varParms       = req.body.varParms
    var varMethod      = req.body.varMethod
    var varBody        = req.body.varBody 
    var varBearerToken = req.body.varBearerToken
    var varAPIKey      = req.body.varAPIKey

    

     universalrestapicall.data.RestAPICall(varCallURL,varParms,varMethod,varBody,varBearerToken, varAPIKey)
    .then((data) =>{
      
                      rtnResults = data;
                     // console.log('call dbcalls',global.restcall_response.totalCount)
                      statusmesg = "Record Updated: "
                      rtnres= res.render('tester', { resultdata:  global.restcall_response, resultstatus: statusmesg} );
   
    }
    
  ) 
  .catch((error) => {
   console.error('Error:', error);
   rtnResults= error
   return  rtnResults
   });               

 
 // rtnres= res.render('tester', { resultdata:  '', resultstatus: statusmesg} );
  })
  

module.exports = router;
