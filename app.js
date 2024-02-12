const express = require('express');
const auth = require ('./routes/auth')
const post = require ('./routes/post')

const path = require('path');
const app = express();
const port = 3000;

// Middleware to parse JSON
app.use(express.json());

app.use('/auth',auth)
app.use('/post',post)

// Sample data for /post/all
const posts = [
  { id: 1, name: 'dhia', lastname: 'tarchoun' },
  { id: 2, name: 'dhaw', lastname: 'dhaw' },
  // Add more posts as needed
];
// Start the server
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});