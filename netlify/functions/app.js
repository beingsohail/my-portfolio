// const express = require("express");
// const bodyParser = require("body-parser");
// const path = require("path");

// const app = express();

// app.use(express.static(path.join(__dirname, "public")));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "public", "index.html"));
// });

// const port = process.env.PORT || 3000;
// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });


const express = require('express');
const path = require('path');
const app = express();

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, '../../public')));

// Send index.html for any route
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../../public', 'index.html'));
});

// Export the app to be used by Netlify
exports.handler = async function(event, context) {
  return {
    statusCode: 200,
    body: app.handle(event, context),
  };
};
