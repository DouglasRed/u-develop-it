const express = require("express");

const PORT = process.env.PORT || 3001;
const app = express();

//Express midddleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World!",
//   });
// });

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//  http://localhost:3001
