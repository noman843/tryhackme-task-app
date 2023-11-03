import User from "../models/User.js";

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(userId).select("-password");
    res.status(200).json({ user, status: true, msg: "Profile found successfully.." });
  }
  catch (err) {
    console.error(err);
    return res.status(500).json({ status: false, msg: "Internal Server Error" });
  }
}