const express = require("express");
const pool = require("../../../../pool");

const categoryDelete = async (req, res) => {
  try {
    const { id } = req.query;
    const { rows } = await pool.query(
      `DELETE FROM public."category" WHERE id = $1`,
      [id]
    );
    res.json({
      success: true,
      msg: "category was deleted successfully.",
      data: rows,
    });
  } catch ({ message }) {
    res.json({ success: false, message });
  }
};

module.exports = categoryDelete;
