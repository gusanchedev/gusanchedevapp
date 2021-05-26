const express = require('express');
const router = express.Router();

//Receive contact information from landing page
router.post('/', function(req, res, next) {
  //extract contact info from body
  const { contactName, contactEmail, contactMessage } = req.body;
  const title = "Contact"
  //send contact info to message view for confirmation
  res.render("contact.njk",{ 
    title,
    contactName,
    contactEmail,
    contactMessage
  });
});

module.exports = router;
