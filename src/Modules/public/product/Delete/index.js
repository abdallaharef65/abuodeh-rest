const express = require("express");
const pool = require("../../../../pool");
// const productDelete = express.Router();
const productDelete = async (req, res) => {
  try {
    const { id } = req.query;
    const { rows } = await pool.query(
      `DELETE FROM public."product" WHERE id = $1`,
      [id]
    );
    res.json({
      success: true,
      msg: "product was deleted successfully.",
      data: rows,
    });
  } catch ({ message }) {
    res.json({ success: false, message });
  }
};

module.exports = productDelete;
