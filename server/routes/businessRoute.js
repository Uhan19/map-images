import express from "express";
const database = require("./../../database");

let businessRoute = express.Router();

businessRoute.get("/:id", (req, res) => {
  database
    .query(
      `
		SELECT * FROM business WHERE id='${req.params.id}' LIMIT 1;
	`
    )
    .then(data => {
      console.log(data[0][0]);
      return data[0][0];
    })
    .then(business => {
      res.send(business);
    })
    .catch(error => {
      console.error(error);
      res.end();
    });
});

businessRoute.get("/:id/photos", (req, res) => {
  database
    .query(
      `
		SELECT * FROM photo WHERE business_id='${req.params.id}' LIMIT 64;
`
    )
    .then(data => {
      return data[0];
    })
    .then(photos => {
      res.send(photos);
    })
    .catch(error => {
      console.error(error);
      res.end();
    });
});

export { businessRoute };
