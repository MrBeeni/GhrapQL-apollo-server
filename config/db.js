const mongoose = require("mongoose");

const MONGOURI = "mongodb://localhost:27017/graphql";

const mongoServer = async () => {
  try {
    await mongoose.connect(MONGOURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("connected to DB !!!");
  } catch (e) {
    console.log(e);
    throw e;
  }
};
mongoServer();
