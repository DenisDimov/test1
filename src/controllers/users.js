import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

import User from "../models/user.js";
import Role from "../models/Role.js";

const generateToker = (id, isAdmin) => {
  const payload = {
    id,
    isAdmin,
  };
  return jwt.sign(payload, process.env.JWT_SECRET, { expiresIn: "10h" });
};

class Users {
  async register(req, res) {
    try {
      const { login, password, phone, sex } = req.body;
      const candidate = await User.findOne({ login });
      if (candidate) {
        return res.status(400).json({
          detail: {
            error: `User with this ${login} exists`,
          },
        });
      }
      const hashPassword = await bcrypt.hash(password, 2);
      const userRole = await Role.findOne({ value: false });
      const createUser = await User.create({
        login,
        password: hashPassword,
        phone,
        sex,
        isAdmin: [userRole.value],
      });
      return res.json(createUser);
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Server error" });
    }
  }

  async login(req, res) {
    try {
      const { login, password } = req.body;
      const user = await User.findOne({ login });
      if (!user) {
        res.status(401).json({
          detail: {
            error: `User with this ${login} exists`,
          },
        });
      }
      const validPassword = bcrypt.compare(password, user.password);
      if (!validPassword) {
        res.status(400).json({
          detail: {
            password: "Invalid password",
          },
        });
      }
      const token = generateToker(user._id, user.isAdmin);
      return res.json({ token });
    } catch (e) {
      console.log(e);
      res.status(500).json({ error: "Server error" });
    }
  }

  async updateUser(req, res) {
    try {
      const user = req.body;
      if (!user) {
        res.status(401).json({ message: `User with this ${user._id} does not exist` });
      }
      const updateUser = await User.findByIdAndUpdate(user._id, user, { new: true });
      return res.json(updateUser);
    } catch (e) {
      res.status(500).json({ error: "Server error" });
    }
  }

  async getUser(req, res) {
    try {
      const { id } = req.params;
      const user = await User.findOne(id);
      return res.json(user);
    } catch (e) {
      res.status(500).json({ error: "Server error" });
    }
  }
}

export default new Users();
