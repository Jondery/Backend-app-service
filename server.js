const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors()); // allow frontend access

app.get('/api/data', (req, res) => {
  res.json({ message: 'Hello from backend!' });
});

const port = process.env.PORT;
if (!port) {
    console.error("PORT not defined. Exiting...");
    process.exit(1);
}

app.listen(port, () => console.log(`Backend running on port ${port}`));
