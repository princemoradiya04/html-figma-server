// const express = require("express");
// const cors = require("cors");
// const bodyParser = require("body-parser");

// const app = express();
// app.use(cors());
// app.use(bodyParser.json());

// app.post("/convert", (req, res) => {
//   const { url } = req.body;
//   if (!url) return res.status(400).json({ error: "URL is required" });

//   // 🧪 Send fake structure back for testing
//   res.json({
//     tag: "DIV",
//     text: "",
//     styles: {
//       display: "flex",
//       flexDirection: "column",
//       justifyContent: "center",
//       alignItems: "center",
//       gap: 20,
//       padding: { top: 20, right: 20, bottom: 20, left: 20 },
//       backgroundColor: "#f0f0f0",
//     },
//     children: [
//       {
//         tag: "H1",
//         text: "Welcome to My Test Site",
//         styles: {
//           fontSize: "32",
//           fontWeight: "700",
//           textAlign: "center",
//           color: "#333",
//         },
//       },
//     ],
//   });
// });

// const PORT = 3001;
// app.listen(PORT, () => {
//   console.log("🟢 Server running on http://localhost:" + PORT);
// });

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const app = express();
app.use(cors());
app.use(bodyParser.json());

app.post("/convert", (req, res) => {
  const { url } = req.body;
  if (!url) return res.status(400).json({ error: "URL is required" });

  res.json({
    tag: "DIV",
    text: "",
    styles: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      gap: 20,
      padding: { top: 20, right: 20, bottom: 20, left: 20 },
      backgroundColor: "#f0f0f0",
    },
    children: [
      {
        tag: "H1",
        text: "Welcome to My Test Site",
        styles: {
          fontSize: "32",
          fontWeight: "700",
          textAlign: "center",
          color: "#333",
        },
      },
    ],
  });
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log("🟢 Server running on http://localhost:" + PORT);
});
