import jwt from "jsonwebtoken";

// Access the ACCESS_TOKEN_SECRET environment variable directly
const ACCESS_TOKEN_SECRET = process.env.ACCESS_TOKEN_SECRET;

export const createAccessToken = (payload) => {
  return jwt.sign(payload, "ACCESS_TOKEN_SECRET");
}
