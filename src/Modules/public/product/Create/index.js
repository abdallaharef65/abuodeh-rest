const pool = require("../../../../pool");
// const productPost = express.Router();
const productPost = async (req, res) => {
  try {
    const fields = Object.keys(req.body);
    const values = Object.values(req.body);
    const OrderOfvalues = [];
    for (let i = 0; i < values.length; ++i) {
      OrderOfvalues.push(`$${i + 1}`);
    }
    //INSERT INTO public."Bills"(bill_number,date,bill_amount,bill_discount,notes,appointment_id) VALUES($1,$2,$3,$4,$5,$6) RETURNING *
    const { rows } = await pool.query(
      `INSERT INTO public."product"(${fields}) VALUES(${OrderOfvalues}) RETURNING *`,
      values
    );
    res.json({
      success: true,
      msg: "product was created successfully.",
      data: rows,
    });
  } catch ({ message }) {
    res.json({ success: false, message });
  }
};
module.exports = productPost;
