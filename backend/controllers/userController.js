import userModel from "../models/userModel.js";
import validator from "validator";
import bcyrpt from "bcrypt";
import jwt from "jsonwebtoken";

const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET);
};
// Route for user login
const loginUser = async (req, res) => {};
// Route for register user
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    //checking if user already exist
    const exists = await userModel.findOne({ email });
    if (exists) {
      return res.json({ success: false, message: "User Already exists" });
    }
    //Validating email format and password

    if (!validator.isEmail(email)) {
      return res.json({
        success: false,
        message: "Please enter a valid email",
      });
    }

    if (password.length < 8) {
      return res.json({
        success: false,
        message: "Please use a strong password",
      });
    }
    // hasing user password
    const salt = await bcyrpt.genSalt(10);
    const hashedPassword = await bcyrpt.hash(password, salt);

    const newUser = new userModel({
      name,
      email,
      password: hashedPassword,
    });
    const user = await newUser.save();

    const token = createToken(user._id);

    res.json({ success: true, token });
  } catch (error) {
    console.log(error);
    res.json({ success: false, message: error.message });
  }
};

// Route for admin login

const adminLogin = async (req, res) => {};

export { loginUser, registerUser, adminLogin };
