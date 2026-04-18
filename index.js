const dotenv = require("dotenv");

dotenv.config({
    path: "./.env"
});

let myusername = process.env.myusername;

console.log("value", myusername);

console.log("this backend is working fine");
