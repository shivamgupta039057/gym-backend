const { app } = require("./app");
const ConnectDB = require("./db");


ConnectDB()
    .then(() => {

        app.listen(process.env.PORT || 9000, () => {
            console.log(`Server is Running on ${process.env.PORT} port`);
        })

    })
    .catch((error) => {

        console.log("MONGO DB CONNECTION FAILED !!!", error)

    });