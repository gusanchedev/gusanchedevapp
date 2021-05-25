var express = require('express');
var router = express.Router();

//Receive contact information from landing page
router.post('/', function(req, res, next) {
  //extract contact info from body
  const { contactName, contactEmail, contactMessage } = req.body;
  
  //send contact info to message view for confirmation
  res.render("message.njk",{ 
    contactName,
    contactEmail,
    contactMessage
  });
});

module.exports = router;
