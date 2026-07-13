const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.json({
        message: "React + Express + MongoDB Docker App Running Successfully!"
    });
});

app.listen(5000, () => {
    console.log("Server running on port 5000");
});
📄 client/src/App.js
function App() {
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1>🚀 React Docker Application</h1>
      <p>Cloud Computing Assignment</p>
    </div>
  );
}

export default App;
