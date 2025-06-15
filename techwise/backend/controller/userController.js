import User from "../model/userModel.js";
import bcrypt from "bcrypt";


export const createUser = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;

        const hashedPassword = await bcrypt.hash(password, 10); // hashing password


    const user = new User({ name, email, password: hashedPassword, role });
    await user.save();
    res.json({ message: "User created successfully", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

export const getUsers = async (req, res) => {
    const users = await User.find();
    res.json({
        message: "Users fetched successfully",
        users
    })
}

export const getUser = async (req, res) => {
    const user = await User.findById(req.params.id);
    res.json({
        message: "User fetched successfully",
        user
    })
}

export const updateUser = async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true } // return updated document
    );
    res.json({ message: "User updated successfully", user: updatedUser });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};


export const deleteUser = async (req, res) => {
    res.json({
        message: "User deleted successfully",
        user: {
            id: req.params.id,
            name: "User 1"
        }
    })
}

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    if (!user) return res.status(401).json({ error: "Invalid credentials" });


    // Compare passwords
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(401).json({ error: "Invalid credentials" });

    const safeUser = { ...user._doc };
    delete safeUser.password;

    res.json({ message: "Login successful", user });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};