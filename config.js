'use strict';

//devolopemnt
step3 delete
step4
step5
step6
step7
step8
if(process.env.NODE_ENV === 'production'){
  exports.port = process.env.PORT || 3001;
  exports.mongodb = {
    uri:'mongodb://congthang:To92DsBGE8Bru8BMvNuK@aws-us-east-1-portal.18.dblayer.com:12225/main',
    clicksUri: "mongodb://clicksdb:bFI5PLn03YuTc6uvNBAm@aws-us-east-1-portal.18.dblayer.com:11490/clicksproduction",
    recordUri: "mongodb://congcollection:lyl4X7DojR0dUFtFEG5W@aws-us-east-1-portal.19.dblayer.com:10871/collection",
    reportUri: "mongodb://reports:XSQojIIntuSVGubA6eG7@aws-us-east-1-portal.11.dblayer.com:28099/reports",
    logUri: "mongodb://congthang:XSQojIIntuSVGubA6eG7@aws-us-east-1-portal.11.dblayer.com:28083/logs"
  };
  exports.mainURL = 'http://login.cpiapi.com/';
  exports.clickURL = 'http://click.cpiapi.com/';
  exports.reCaptchaSiteKey = "6Lf34ScTAAAAAPAFLU8Zwt--M1WLbcfKT90wLoMB";
  exports.reCaptchaSecretKey = "6Lf34ScTAAAAAEzAEyMgViXhRvbQlk_F4dYvH5d8";
}else{
  exports.port = process.env.PORT || 80;
  exports.mongodb = {
    uri:'mongodb://congthang:To92DsBGE8Bru8BMvNuK@aws-us-east-1-portal.19.dblayer.com:10857/main',
    clicksUri: "mongodb://congdev:7e4RmEcA9NqZChyhf6wa@aws-us-east-1-portal.19.dblayer.com:10857/development", 
    reportUri: "mongodb://congdev:7e4RmEcA9NqZChyhf6wa@aws-us-east-1-portal.19.dblayer.com:10857/development",
    recordUri: "mongodb://127.0.0.1:27017/clicks",
    logUri:"mongodb://congthang:To92DsBGE8Bru8BMvNuK@aws-us-east-1-portal.19.dblayer.com:10857/logs"
  };
  exports.mainURL = 'http://reapi.doesntexist.com:3000/';
  exports.clickURL = 'http://reapi.doesntexist.com/';
  // exports.clickURL = 'http://localhost:3001/';
  exports.reCaptchaSiteKey = "6LfR6CcTAAAAAMfaSpxx3eON0cG39tl2c6L2OnVY";
  exports.reCaptchaSecretKey = "6LfR6CcTAAAAAC53sFLWt8OpQHJexSOjAQEgTmUY";
}

exports.findBestOfferFreq = 5*1000*60;//5 minutes
exports.maxHopsRedirect = 10;//
exports.bestOfferTime = 24*60*60*1000;//24 hours


//System timezone

// exports.timezone = "Asia/Bangkok";
exports.timezone = "America/New_York";
