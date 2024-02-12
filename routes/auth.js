const express = require ("express")
const router = express.Router()

router.get('/login', (req, res) => {

    // Send the login.html file
    res.sendFile(path.join(__dirname + '/login.html'));
  });
  
  // Route for /auth/register
  router.get('/register', (req, res) => {
      
    // Send the register.html file
    res.sendFile(path.join(__dirname + '/register.html'));
  });

  module.exports = router