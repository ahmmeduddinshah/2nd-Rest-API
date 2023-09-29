const app = require("./app");
const config = require("./configuration/config");

const PORT = config.app.port;

app.listen(PORT, () =>
  console.log(`This Server is Running at http://localhost:${PORT}.`)
);
