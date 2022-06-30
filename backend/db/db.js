const mongoose = require("mongoose");

const dbConnection = async () => {
  try {
    await mongoose.connect(process.env.BD_CONNECTION/* , {
      useNewUrlParser: true,
      useFindAndModify: false,
      useCreateIndex: true,
      useUnifiedTopology: true,
    } */);
    console.log("connection with mongodb is ok");
  } catch (er) {
    console.log("Error connectiong with mongodb: ", er);
    throw new Error("Error connectiong with mongodb"); 
  }
};

module.exports = { dbConnection};