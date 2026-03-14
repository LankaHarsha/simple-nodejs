const express = require('express');
const app = express();

// PM2 sets this variable. If not running in PM2, it defaults to 0.
const workerId = process.env.NODE_APP_INSTANCE || 0;

app.get('/', (req, res) => {
  // Log to terminal (pm2 logs)
  console.log(`Worker ID ${workerId} is handling this request!`);

  // Send to browser
  res.send(`Hello World! This is V3.`);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Worker ${workerId} started on port ${PORT}`);
});