const express = require("express");
const cors = require("cors");
const { checkAuthorization } = require('./middleware');

const app = express();
// parse requests of content-type - application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

var corsOptions = {
    origin: "*",
    credentials: true
};

app.use(cors(corsOptions));

// const allowCrossDomain = function(req, res, next) {
//     console.log("asdasdads",req.headers);
//     res.header("Access-Control-Allow-Origin", "*");
//     res.header("Access-Control-Allow-Credentials", "true");
//     res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
//     next();
//   };
  
// app.use(allowCrossDomain);

app.use(checkAuthorization);


// simple route
app.get("/", (req, res) => {
    return res.json({ message: "Welcome to movix application." });
});


app.get("/movie/popular", (req, res) => {
    return res.json({ message: "best movie." });
});

// set port, listen for requests
const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});
