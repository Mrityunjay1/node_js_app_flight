const express = require("express");
const apiRoutes = require('./routes');


const { serverConfig: { PORT }, loggerConfig: logger } = require("./config");

const app = express();


app.use('/api', apiRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
    logger.info("Successfully started the server, root route");
});


