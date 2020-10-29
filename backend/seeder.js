const mongoose = require('mongoose');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

const users = require('./data/users');
const products = require('./data/products');

const User = require('./models/userModel');
const Product = require('./models/productModel');
const Order = require('./models/orderModel');

dotenv.config();
connectDB();

const importData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();

    const createdUsers = await User.insertMany(users);

    const [adminUser] = createdUsers.filter(
      (user) => user.isAdmin === true
    )._id;
    const seedProducts = products.map((product) => {
      return {
        ...product,
        user: adminUser,
      };
    });
    await Product.insertMany(seedProducts);
    console.log('Seed data has been imported!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

const destroyData = async () => {
  try {
    await User.deleteMany();
    await Product.deleteMany();
    await Order.deleteMany();
    console.log('Seed data has been deleted!');
    process.exit();
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
};

if (process.argv[2] === '-d') {
  destroyData();
} else {
  importData();
}
