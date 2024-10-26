// //////////////////////////////////////////////////////////////////
const PORT = 1998;
const express = require("express");
const app = express();
const cors = require("cors");
const productReq = require("./src/Modules/public/product/index");
const categoryReq = require("./src/Modules/public/category/index");
app.use(express.json());
app.use(cors());

// //product

app.get("/product", productReq.readData);
app.post("/product", productReq.postData);
app.put("/product", productReq.updateData);
app.delete("/product", productReq.deleteData);
//category
app.get("/category", categoryReq.readData);
app.post("/category", categoryReq.postData);
app.put("/category", categoryReq.updateData);
app.delete("/category", categoryReq.deleteData);

// Allow requests from all origins
app.listen(PORT, () => {
  console.log(`listening for requests on port ${PORT}`);
});
