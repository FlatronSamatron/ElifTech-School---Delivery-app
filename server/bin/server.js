const mongoose = require("mongoose");

require("dotenv").config()

const app = require('../app')

const {DB_HOST, PORT = 8080} = process.env;

mongoose.connect(DB_HOST)
  .then(()=> {
    console.log('DB connect success!')
      app.listen(PORT, () => {
        console.log(`Server running on port: ${PORT}`)
      })
  })
  .catch(error => {
    console.log(error.message);
    process.exit(1);
  })

