const express = require('express');
const app = express();
app.get('/users/:id', async (req, res) => {
  try {
    const userId = req.params.id;
    const user = await db.getUserById(userId); // Assuming db.getUserById is an async function
    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    console.error('Error fetching user:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});

app.get('/users', async (req, res) => {
  try {
    const users = await db.getAllUsers(); // Assuming db.getAllUsers is an async function
    if (users.length === 0) {
      return res.status(404).json({ message: 'No users found' });
    }
    res.json(users);
  } catch (error) {
    console.error('Error fetching users:', error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
});