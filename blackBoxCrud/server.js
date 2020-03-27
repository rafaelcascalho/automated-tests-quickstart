const app = require("./app");
const PORT = 4223;

app.listen(PORT, () =>
  console.log(`> server running at http://localhost:${PORT}`)
);
