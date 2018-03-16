const mysql = require("mysql2");
const Sequelize = require("sequelize");
const fs = require("fs");

const database = new Sequelize("yelp_db", "root", "", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

database
  .authenticate()
  .then(() => {
    console.log("success");
  })
  .catch(err => {
    console.error("err");
  });

database
  .query("SELECT * FROM business")
  .then(data => {
    for (var i = 0; i < 10; i++) {
      data[0][i].id = i;
      fs.appendFileSync(
        "csv/business.csv",
        `${data[0][i].id}, ${data[0][i].name}, ${data[0][i].neighborhood}, ${
          data[0][i].address
        }, ${data[0][i].city}, ${data[0][i].state}, ${
          data[0][i].postal_code
        }, ${data[0][i].logitude}, ${data[0][i].latitude} \n`
      );
    }
  })
  .then(data => {
    console.log("business done");
  })
  .catch(error => {
    console.error(error);
  });

database
  .query("SELECT * FROM photo")
  .then(data => {
    for (var i = 0; i < 10; i++) {
      data[0][i].business_id = i;
      fs.appendFileSync(
        "csv/photo.csv",
        `${data[0][i].id}, ${data[0][i].business_id}, ${data[0][i].caption}, ${
          data[0][i].label
        }, ${data[0][i].date} \n`
      );
    }
  })
  .then(data => {
    console.log("photo done");
  })
  .catch(error => {
    console.error(error);
  });
