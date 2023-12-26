require("dotenv").config();

const app = require("./app");
require("./config/Database");

const PORT = process.env.PORT || 4001;

app.listen(PORT, async () => {
  console.log(`successfully run the server in http://localhost:${PORT}`);
});
