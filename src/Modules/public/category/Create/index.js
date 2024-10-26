const express = require("express");
const pool = require("../../../../pool");
// const categoryPost = express.Router();
const categoryPost = async (req, res) => {
  try {
    const fields = Object.keys(req.body);
    const values = Object.values(req.body);
    const OrderOfvalues = [];
    for (let i = 0; i < values.length; ++i) {
      OrderOfvalues.push(`$${i + 1}`);
    }
    const { rows } = await pool.query(
      `INSERT INTO public."category"(${fields}) VALUES(${OrderOfvalues}) RETURNING *`,
      values
    );
    res.json({
      success: true,
      msg: "category was created successfully.",
      data: rows,
    });
  } catch ({ message }) {
    res.json({ success: false, message });
  }
};
module.exports = categoryPost;
