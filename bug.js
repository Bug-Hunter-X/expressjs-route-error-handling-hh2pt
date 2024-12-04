const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // ... database query to fetch user with userId ...
  if (!user) {
    return res.status(404).send('User not found'); // Correct handling
  }
  res.send(user); 
});

app.get('/users', (req, res) => {
  // ... database query to fetch all users ...
  if (!users) {
    return res.status(500).send('Internal Server Error'); //InCorrect
  } else if (users.length === 0) {
    return res.status(404).send('No users found');
  }
  res.send(users);
});

// Incorrect error handling. Should return 404 in both scenarios
// Missing error handling for database operations.
// Potential for unhandled promise rejections.