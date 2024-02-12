const express = require ("express")
const router = express.Router()

router.get('/all', (req, res) => {

    // Send the login.html file
    res.sendFile(path.join(__dirname + '/all.html'));
  });
  
  // Route for /auth/register
  router.get('/post/:id', (req, res) => {
      
    // Send the register.html file
    res.sendFile(path.join(__dirname + '/post/:id.html'));
  });

  module.exports = router