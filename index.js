const express = require("express");
const cookieSession = require("cookie-session");
const authRouter = require("./routes/admin/auth");
const adminProductsRouter = require("./routes/admin/products");
const productsRouter = require("./routes/products");
const cartsRouter = require("./routes/carts");
const carts = require("./repositories/carts");

const app = express();

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true })); // Middleware, built into express, previously bodyParser
app.use(
  cookieSession({
    keys: ["hkalsdfkh2fdf3addf3haksdhf"],
  })
);
app.use(authRouter);
app.use(productsRouter);
app.use(adminProductsRouter);
app.use(cartsRouter);

app.listen(3000, () => {
  console.log("Listening");
});
