const express = require("express");
const pool = require("../../../../pool");
const positiveNumberCheck = require("../../../../utils/positiveNumberCheck");
const productRead = async (req, res) => {
  try {
    const queryParams = req.query;
    const keys = Object.keys(queryParams);
    let queryString = `SELECT * FROM public."v_product" WHERE 1=1`;
    var haveLimit = false;
    for (let i = 0; i < keys.length; ++i) {
      if (keys[i] != "limit") {
        queryString += ` AND  ${keys[i]} = $${i + 1}`;
      } else {
        haveLimit = true;
      }
    }
    if (haveLimit) {
      const { limit, ...newObj } = queryParams;
      queryString += ` limit ${limit}`;
    }
    const val = Object.values(queryParams);

    if (!positiveNumberCheck(val)) {
      const { limit, ...newObj } = queryParams;
      // Execute SQL query with optional parameters
      pool.query(queryString, Object.values(newObj), (err, result) => {
        if (!err) {
          const rows = result.rows.map((i) => i);
          res.send({
            success: true,
            no_of_records: rows.length,
            msg: `product retrieved successfully.`,
            data: rows,
          });
        } else {
          console.log(err.message);
          res.status(500).json({ success: false, message: err.message });
        }
      });
    } else {
      res
        .status(500)
        .json({ success: false, message: "all field must be positive" });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ success: false, message: error.message });
  }
};

module.exports = productRead;
