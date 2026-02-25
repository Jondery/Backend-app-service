const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // allow frontend access

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const port = process.env.PORT || 8080;
app.listen(port, () => console.log(`Backend running on port ${port}`));
