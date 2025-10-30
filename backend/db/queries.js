const pool = require("./pool");

// define queries to interact with the database

const getAllProducts = async () => {
  const { rows } = await pool.query("SELECT * FROM products");
  return rows;
};

// orders made by a single user
const getOrdersById = async (userId) => {
  // order_name, user_name, restaurant_name
  const { rows } = await pool.query(
    "SELECT orders.name, users.username, vendors.name FROM orders JOIN users on orders.user_id = users.id JOIN vendors on orders.vendor_id = vendors.id WHERE users.id = $1",
    [userId]
  );
  return rows;
};

const getProfileById = async (userId) => {
  // get username, phone, address
  const { rows } = await pool.query(
    "SELECT username, phone_num FROM users WHERE id = $1",
    [userId]
  );
  return rows[0];
};

module.exports = {
  getAllProducts,
  getOrdersById,
  getProfileById,
};
