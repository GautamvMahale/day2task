require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const app = express();
app.use(cors());
app.use(express.json());

// ✅ DB connection
const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  database: process.env.DB_NAME,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

// ✅ Test DB connection
pool.connect()
  .then(() => console.log("✅ Connected to Postgres"))
  .catch(err => console.error("❌ DB connection error:", err.message));

// ✅ JWT middleware
function auth(req, res, next) {
  const header = req.headers["authorization"] || "";
  const token = header.startsWith("Bearer ") ? header.slice(7) : null;
  if (!token) return res.status(401).json({ message: "No token provided" });
  try {
    req.user = jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch {
    res.status(401).json({ message: "Invalid token" });
  }
}

// ✅ Signup
app.post("/api/users/signup", async (req, res) => {
  try {
    const { name, phone, email, password } = req.body;
    if (!name || !phone || !email || !password) {
      return res.status(400).json({ message: "All fields required" });
    }

    const exists = await pool.query("SELECT id FROM users WHERE email=$1", [email]);
    if (exists.rows.length > 0) {
      return res.status(409).json({ message: "Email already exists" });
    }

    const password_hash = await bcrypt.hash(password, 10);
    const result = await pool.query(
      "INSERT INTO users (name, phone, email, password_hash) VALUES ($1,$2,$3,$4) RETURNING id, name, phone, email, created_at",
      [name, phone, email, password_hash]
    );

    const user = result.rows[0];
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.status(201).json({ user, token });
  } catch (err) {
    console.error("❌ Signup error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Signin
app.post("/api/users/signin", async (req, res) => {
  try {
    const { email, password } = req.body;
    const result = await pool.query("SELECT * FROM users WHERE email=$1", [email]);
    if (result.rows.length === 0) return res.status(401).json({ message: "Invalid credentials" });

    const userRow = result.rows[0];
    const valid = await bcrypt.compare(password, userRow.password_hash);
    if (!valid) return res.status(401).json({ message: "Invalid credentials" });

    const user = { id: userRow.id, name: userRow.name, phone: userRow.phone, email: userRow.email };
    const token = jwt.sign({ id: user.id, email: user.email }, process.env.JWT_SECRET, {
      expiresIn: process.env.JWT_EXPIRES_IN,
    });

    res.json({ user, token });
  } catch (err) {
    console.error("❌ Signin error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Profile
app.get("/api/users/me", auth, async (req, res) => {
  try {
    const result = await pool.query("SELECT id,name,phone,email,created_at FROM users WHERE id=$1", [req.user.id]);
    res.json(result.rows[0]);
  } catch (err) {
    console.error("❌ Profile error:", err.message);
    res.status(500).json({ message: "Server error" });
  }
});

// ✅ Start server
const port = process.env.PORT || 4000;
app.listen(port, () => console.log(`🚀 Server running on port ${port}`));
