// // // // // // // // // // const express = require("express");
// // // // // // // // // // const twilio = require("twilio");
// // // // // // // // // // require("dotenv").config();
// // // // // // // // // // const cors = require("cors");

// // // // // // // // // // const app = express();
// // // // // // // // // // app.use(express.json());
// // // // // // // // // // app.use(cors()); // Allow frontend to call API

// // // // // // // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // // // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // // // // // // const client = twilio(accountSid, authToken);

// // // // // // // // // // app.post("/send-messages", async (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     const { message, recipients } = req.body;

// // // // // // // // // //     const msg = await client.messages.create({
// // // // // // // // // //       body: message,
// // // // // // // // // //       from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio Number
// // // // // // // // // //       to: recipients,
// // // // // // // // // //     });

// // // // // // // // // //     res.json({ success: true, sid: msg.sid });
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error(error);
// // // // // // // // // //     res.status(500).json({ success: false, error: error.message });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // app.listen(3000, () => console.log("Server running on http://localhost:3000"));


// // // // // // // // // // const express = require("express");
// // // // // // // // // // const twilio = require("twilio");
// // // // // // // // // // require("dotenv").config();
// // // // // // // // // // const cors = require("cors");

// // // // // // // // // // const app = express();
// // // // // // // // // // app.use(express.json());
// // // // // // // // // // app.use(cors()); // Allow frontend to call API

// // // // // // // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // // // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // // // // // // const client = twilio(accountSid, authToken);

// // // // // // // // // // app.post("/send-messages", async (req, res) => {
// // // // // // // // // //   try {
// // // // // // // // // //     const { message, recipients } = req.body;

// // // // // // // // // //     const msg = await client.messages.create({
// // // // // // // // // //       body: message,
// // // // // // // // // //       from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio Number
// // // // // // // // // //       to: recipients,
// // // // // // // // // //     });

// // // // // // // // // //     res.json({ success: true, sid: msg.sid });
// // // // // // // // // //   } catch (error) {
// // // // // // // // // //     console.error(error);
// // // // // // // // // //     res.status(500).json({ success: false, error: error.message });
// // // // // // // // // //   }
// // // // // // // // // // });

// // // // // // // // // // app.listen(3000, () => console.log("Server running on http://localhost:3000"));


// // // // // // // // // // 1. server.js - Complete updated file
// // // // // // // // // const express = require("express");
// // // // // // // // // const twilio = require("twilio");
// // // // // // // // // const mongoose = require("mongoose");
// // // // // // // // // require("dotenv").config();
// // // // // // // // // const cors = require("cors");

// // // // // // // // // const app = express();
// // // // // // // // // app.use(express.json());
// // // // // // // // // app.use(cors());

// // // // // // // // // // MongoDB connection
// // // // // // // // // mongoose.connect('your_mongodb_connection_string', {
// // // // // // // // //   useNewUrlParser: true,
// // // // // // // // //   useUnifiedTopology: true
// // // // // // // // // });

// // // // // // // // // // Employee Schema
// // // // // // // // // const employeeSchema = new mongoose.Schema({
// // // // // // // // //   name: String,
// // // // // // // // //   designation: String,
// // // // // // // // //   department: String,
// // // // // // // // //   phone: String,
// // // // // // // // //   email: String,
// // // // // // // // //   qr_code_url: String,
// // // // // // // // //   emergency_contact: {
// // // // // // // // //     name: String,
// // // // // // // // //     relation: String,
// // // // // // // // //     phone: String
// // // // // // // // //   },
// // // // // // // // //   medical_info: {
// // // // // // // // //     blood_group: String,
// // // // // // // // //     allergies: [String],
// // // // // // // // //     medical_conditions: [String],
// // // // // // // // //     medications: [String]
// // // // // // // // //   },
// // // // // // // // //   doctor_contact: {
// // // // // // // // //     name: String,
// // // // // // // // //     phone: String,
// // // // // // // // //     hospital: String
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // const Employee = mongoose.model('Employee', employeeSchema);

// // // // // // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // // // // // const client = twilio(accountSid, authToken);

// // // // // // // // // // Existing route for sending messages
// // // // // // // // // app.post("/send-messages", async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const { message, recipients } = req.body;

// // // // // // // // //     const msg = await client.messages.create({
// // // // // // // // //       body: message,
// // // // // // // // //       from: process.env.TWILIO_PHONE_NUMBER,
// // // // // // // // //       to: recipients,
// // // // // // // // //     });

// // // // // // // // //     res.json({ success: true, sid: msg.sid });
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error(error);
// // // // // // // // //     res.status(500).json({ success: false, error: error.message });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // // New route for fetching employee data
// // // // // // // // // app.get('/employee/:id', async (req, res) => {
// // // // // // // // //   try {
// // // // // // // // //     const employee = await Employee.findById(req.params.id);
// // // // // // // // //     if (!employee) {
// // // // // // // // //       return res.status(404).json({ error: 'Employee not found' });
// // // // // // // // //     }
// // // // // // // // //     res.json(employee);
// // // // // // // // //   } catch (error) {
// // // // // // // // //     console.error('Error fetching employee:', error);
// // // // // // // // //     res.status(500).json({ error: 'Internal server error' });
// // // // // // // // //   }
// // // // // // // // // });

// // // // // // // // // app.listen(3000, () => console.log("Server running on http://localhost:3000"));

// // // // // // // // const express = require("express");
// // // // // // // // const twilio = require("twilio");
// // // // // // // // const mongoose = require("mongoose");
// // // // // // // // require("dotenv").config();
// // // // // // // // const cors = require("cors");

// // // // // // // // const app = express();
// // // // // // // // app.use(express.json());
// // // // // // // // app.use(cors());

// // // // // // // // // MongoDB Connection
// // // // // // // // const mongoURI = process.env.MONGO_URI;
// // // // // // // // if (!mongoURI) {
// // // // // // // //   console.error("Error: MONGO_URI is not defined in environment variables.");
// // // // // // // //   process.exit(1);
// // // // // // // // }

// // // // // // // // mongoose
// // // // // // // //   .connect(mongoURI, {
// // // // // // // //     useNewUrlParser: true,
// // // // // // // //     useUnifiedTopology: true
// // // // // // // //   })
// // // // // // // //   .then(() => console.log("✅ MongoDB connected successfully"))
// // // // // // // //   .catch((err) => {
// // // // // // // //     console.error("❌ MongoDB connection error:", err.message);
// // // // // // // //     process.exit(1);
// // // // // // // //   });

// // // // // // // // // Employee Schema
// // // // // // // // const employeeSchema = new mongoose.Schema({
// // // // // // // //   name: String,
// // // // // // // //   designation: String,
// // // // // // // //   department: String,
// // // // // // // //   phone: String,
// // // // // // // //   email: String,
// // // // // // // //   qr_code_url: String,
// // // // // // // //   emergency_contact: {
// // // // // // // //     name: String,
// // // // // // // //     relation: String,
// // // // // // // //     phone: String
// // // // // // // //   },
// // // // // // // //   medical_info: {
// // // // // // // //     blood_group: String,
// // // // // // // //     allergies: [String],
// // // // // // // //     medical_conditions: [String],
// // // // // // // //     medications: [String]
// // // // // // // //   },
// // // // // // // //   doctor_contact: {
// // // // // // // //     name: String,
// // // // // // // //     phone: String,
// // // // // // // //     hospital: String
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // const Employee = mongoose.model("Employee", employeeSchema);

// // // // // // // // // Twilio Setup
// // // // // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // // // // const client = twilio(accountSid, authToken);

// // // // // // // // // Route to send SMS messages
// // // // // // // // app.post("/send-messages", async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const { message, recipients } = req.body;
    
// // // // // // // //     if (!message || !recipients) {
// // // // // // // //       return res.status(400).json({ success: false, error: "Message and recipients are required." });
// // // // // // // //     }

// // // // // // // //     const msg = await client.messages.create({
// // // // // // // //       body: message,
// // // // // // // //       from: process.env.TWILIO_PHONE_NUMBER,
// // // // // // // //       to: recipients
// // // // // // // //     });

// // // // // // // //     res.json({ success: true, sid: msg.sid });
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("Twilio Error:", error.message);
// // // // // // // //     res.status(500).json({ success: false, error: error.message });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // Route to fetch employee data by ID
// // // // // // // // app.get("/employee/:id", async (req, res) => {
// // // // // // // //   try {
// // // // // // // //     const employee = await Employee.findById(req.params.id);
// // // // // // // //     if (!employee) {
// // // // // // // //       return res.status(404).json({ error: "Employee not found" });
// // // // // // // //     }
// // // // // // // //     res.json(employee);
// // // // // // // //   } catch (error) {
// // // // // // // //     console.error("Error fetching employee:", error.message);
// // // // // // // //     res.status(500).json({ error: "Internal server error" });
// // // // // // // //   }
// // // // // // // // });

// // // // // // // // // Start Server
// // // // // // // // const PORT = process.env.PORT || 3000;
// // // // // // // // app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));


// // // // // // // const express = require("express");
// // // // // // // const twilio = require("twilio");
// // // // // // // const mongoose = require("mongoose");
// // // // // // // require("dotenv").config();
// // // // // // // const cors = require("cors");

// // // // // // // const app = express();
// // // // // // // app.use(express.json());

// // // // // // // // ✅ Allow CORS for Vercel Frontend & Local Testing
// // // // // // // const allowedOrigins = [
// // // // // // //   "https://sos-alert-testing.vercel.app", // Vercel Frontend
// // // // // // //   "http://localhost:3000" // Local Testing
// // // // // // // ];

// // // // // // // app.use(cors({
// // // // // // //   origin: allowedOrigins, 
// // // // // // //   methods: ["GET", "POST", "PUT", "DELETE"],
// // // // // // //   credentials: true // Allow cookies if needed
// // // // // // // }));

// // // // // // // // ✅ MongoDB Connection
// // // // // // // const mongoURI = process.env.MONGO_URI;
// // // // // // // if (!mongoURI) {
// // // // // // //   console.error("❌ Error: MONGO_URI is not set in environment variables.");
// // // // // // //   process.exit(1);
// // // // // // // }

// // // // // // // mongoose.connect(mongoURI, {
// // // // // // //   useNewUrlParser: true,
// // // // // // //   useUnifiedTopology: true
// // // // // // // })
// // // // // // // .then(() => console.log("✅ MongoDB connected successfully"))
// // // // // // // .catch(err => {
// // // // // // //   console.error("❌ MongoDB connection error:", err.message);
// // // // // // //   process.exit(1);
// // // // // // // });

// // // // // // // // ✅ Employee Schema
// // // // // // // const employeeSchema = new mongoose.Schema({
// // // // // // //   name: String,
// // // // // // //   designation: String,
// // // // // // //   department: String,
// // // // // // //   phone: String,
// // // // // // //   email: String,
// // // // // // //   qr_code_url: String,
// // // // // // //   emergency_contact: {
// // // // // // //     name: String,
// // // // // // //     relation: String,
// // // // // // //     phone: String
// // // // // // //   },
// // // // // // //   medical_info: {
// // // // // // //     blood_group: String,
// // // // // // //     allergies: [String],
// // // // // // //     medical_conditions: [String],
// // // // // // //     medications: [String]
// // // // // // //   },
// // // // // // //   doctor_contact: {
// // // // // // //     name: String,
// // // // // // //     phone: String,
// // // // // // //     hospital: String
// // // // // // //   }
// // // // // // // });

// // // // // // // const Employee = mongoose.model("Employee", employeeSchema);

// // // // // // // // ✅ Twilio Setup
// // // // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // // // const client = twilio(accountSid, authToken);

// // // // // // // // ✅ Route: Send SOS Message
// // // // // // // app.post("/send-messages", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const { message, recipients } = req.body;

// // // // // // //     if (!message || !recipients) {
// // // // // // //       return res.status(400).json({ success: false, error: "Message and recipients are required." });
// // // // // // //     }

// // // // // // //     const msg = await client.messages.create({
// // // // // // //       body: message,
// // // // // // //       from: process.env.TWILIO_PHONE_NUMBER,
// // // // // // //       to: recipients
// // // // // // //     });

// // // // // // //     res.json({ success: true, sid: msg.sid });
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Twilio Error:", error.message);
// // // // // // //     res.status(500).json({ success: false, error: error.message });
// // // // // // //   }
// // // // // // // });

// // // // // // // // ✅ Route: Fetch Employee Data
// // // // // // // app.get("/employee/:id", async (req, res) => {
// // // // // // //   try {
// // // // // // //     const employee = await Employee.findById(req.params.id);
// // // // // // //     if (!employee) {
// // // // // // //       return res.status(404).json({ error: "Employee not found" });
// // // // // // //     }
// // // // // // //     res.json(employee);
// // // // // // //   } catch (error) {
// // // // // // //     console.error("❌ Error fetching employee data:", error.message);
// // // // // // //     res.status(500).json({ error: "Internal server error" });
// // // // // // //   }
// // // // // // // });

// // // // // // // // ✅ Start Server
// // // // // // // const PORT = process.env.PORT || 10000; // Changed from 3000 to 10000 (Render Default)
// // // // // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


// // // // // // const express = require("express");
// // // // // // const twilio = require("twilio");
// // // // // // const mongoose = require("mongoose");
// // // // // // require("dotenv").config();
// // // // // // const cors = require("cors");

// // // // // // const app = express();
// // // // // // app.use(express.json());

// // // // // // // ✅ Allow CORS for Vercel Frontend & Local Testing
// // // // // // const allowedOrigins = [
// // // // // //   "https://sos-alert-testing.vercel.app", // Vercel Frontend
// // // // // //   "http://localhost:3000" // Local Testing
// // // // // // ];

// // // // // // app.use(cors({
// // // // // //   origin: allowedOrigins, 
// // // // // //   methods: ["GET", "POST", "PUT", "DELETE"],
// // // // // //   credentials: true // Allow cookies if needed
// // // // // // }));

// // // // // // // ✅ MongoDB Connection
// // // // // // const mongoURI = process.env.MONGO_URI;
// // // // // // if (!mongoURI) {
// // // // // //   console.error("❌ Error: MONGO_URI is not set in environment variables.");
// // // // // //   process.exit(1);
// // // // // // }

// // // // // // mongoose.connect(mongoURI, {
// // // // // //   useNewUrlParser: true,
// // // // // //   useUnifiedTopology: true
// // // // // // })
// // // // // // .then(() => console.log("✅ MongoDB connected successfully"))
// // // // // // .catch(err => {
// // // // // //   console.error("❌ MongoDB connection error:", err.message);
// // // // // //   process.exit(1);
// // // // // // });

// // // // // // // ✅ Employee Schema
// // // // // // const employeeSchema = new mongoose.Schema({
// // // // // //   name: String,
// // // // // //   designation: String,
// // // // // //   department: String,
// // // // // //   phone: String,
// // // // // //   email: String,
// // // // // //   qr_code_url: String,
// // // // // //   emergency_contact: {
// // // // // //     name: String,
// // // // // //     relation: String,
// // // // // //     phone: String
// // // // // //   },
// // // // // //   medical_info: {
// // // // // //     blood_group: String,
// // // // // //     allergies: [String],
// // // // // //     medical_conditions: [String],
// // // // // //     medications: [String]
// // // // // //   },
// // // // // //   doctor_contact: {
// // // // // //     name: String,
// // // // // //     phone: String,
// // // // // //     hospital: String
// // // // // //   }
// // // // // // });

// // // // // // const Employee = mongoose.model("Employee", employeeSchema);

// // // // // // // ✅ Twilio Setup
// // // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // // const client = twilio(accountSid, authToken);

// // // // // // // ✅ Route: Send SOS Message
// // // // // // app.post("/send-messages", async (req, res) => {
// // // // // //   try {
// // // // // //     const { message, recipients } = req.body;

// // // // // //     if (!message || !recipients) {
// // // // // //       return res.status(400).json({ success: false, error: "Message and recipients are required." });
// // // // // //     }

// // // // // //     const msg = await client.messages.create({
// // // // // //       body: message,
// // // // // //       from: process.env.TWILIO_PHONE_NUMBER,
// // // // // //       to: recipients
// // // // // //     });

// // // // // //     res.json({ success: true, sid: msg.sid });
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Twilio Error:", error.message);
// // // // // //     res.status(500).json({ success: false, error: error.message });
// // // // // //   }
// // // // // // });

// // // // // // // ✅ Route: Fetch Employee Data
// // // // // // app.get("/employee/:id", async (req, res) => {
// // // // // //   try {
// // // // // //     const employee = await Employee.findById(req.params.id);
// // // // // //     if (!employee) {
// // // // // //       return res.status(404).json({ error: "Employee not found" });
// // // // // //     }
// // // // // //     res.json(employee);
// // // // // //   } catch (error) {
// // // // // //     console.error("❌ Error fetching employee data:", error.message);
// // // // // //     res.status(500).json({ error: "Internal server error" });
// // // // // //   }
// // // // // // });

// // // // // // // ✅ Start Server
// // // // // // const PORT = process.env.PORT || 10000; // Changed from 3000 to 10000 (Render Default)
// // // // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
// // // // // const express = require("express");
// // // // // const twilio = require("twilio");
// // // // // const mongoose = require("mongoose");
// // // // // require("dotenv").config();
// // // // // const cors = require("cors");

// // // // // const app = express();
// // // // // app.use(express.json());

// // // // // // ✅ Allow CORS for Vercel Frontend & Local Testing
// // // // // const allowedOrigins = [
// // // // //   "https://sos-alert-testing.vercel.app", // Vercel Frontend
// // // // //   "http://localhost:3000" // Local Testing
// // // // // ];

// // // // // app.use(cors({
// // // // //   origin: allowedOrigins, 
// // // // //   methods: ["GET", "POST", "PUT", "DELETE"],
// // // // //   credentials: true // Allow cookies if needed
// // // // // }));

// // // // // // ✅ MongoDB Connection
// // // // // const mongoURI = process.env.MONGO_URI;
// // // // // if (!mongoURI) {
// // // // //   console.error("❌ Error: MONGO_URI is not set in environment variables.");
// // // // //   process.exit(1);
// // // // // }

// // // // // mongoose.connect(mongoURI, {
// // // // //   useNewUrlParser: true,
// // // // //   useUnifiedTopology: true
// // // // // })
// // // // // .then(() => console.log("✅ MongoDB connected successfully"))
// // // // // .catch(err => {
// // // // //   console.error("❌ MongoDB connection error:", err.message);
// // // // //   process.exit(1);
// // // // // });

// // // // // // ✅ Employee Schema
// // // // // const employeeSchema = new mongoose.Schema({
// // // // //   name: String,
// // // // //   designation: String,
// // // // //   department: String,
// // // // //   phone: String,
// // // // //   email: String,
// // // // //   qr_code_url: String,
// // // // //   emergency_contact: {
// // // // //     name: String,
// // // // //     relation: String,
// // // // //     phone: String
// // // // //   },
// // // // //   medical_info: {
// // // // //     blood_group: String,
// // // // //     allergies: [String],
// // // // //     medical_conditions: [String],
// // // // //     medications: [String]
// // // // //   },
// // // // //   doctor_contact: {
// // // // //     name: String,
// // // // //     phone: String,
// // // // //     hospital: String
// // // // //   }
// // // // // });

// // // // // const Employee = mongoose.model("Employee", employeeSchema);

// // // // // // ✅ Twilio Setup
// // // // // const accountSid = process.env.TWILIO_ACCOUNT_SID;
// // // // // const authToken = process.env.TWILIO_AUTH_TOKEN;
// // // // // const client = twilio(accountSid, authToken);

// // // // // // ✅ Route: Send SOS Message
// // // // // app.post("/send-messages", async (req, res) => {
// // // // //   try {
// // // // //     const { message, recipients } = req.body;

// // // // //     if (!message || !recipients) {
// // // // //       return res.status(400).json({ success: false, error: "Message and recipients are required." });
// // // // //     }

// // // // //     const msg = await client.messages.create({
// // // // //       body: message,
// // // // //       from: process.env.TWILIO_PHONE_NUMBER,
// // // // //       to: recipients
// // // // //     });

// // // // //     res.json({ success: true, sid: msg.sid });
// // // // //   } catch (error) {
// // // // //     console.error("❌ Twilio Error:", error.message);
// // // // //     res.status(500).json({ success: false, error: error.message });
// // // // //   }
// // // // // });

// // // // // // ✅ Route: Fetch Employee Data
// // // // // app.get("/employee/:id", async (req, res) => {
// // // // //   try {
// // // // //     const employee = await Employee.findById(req.params.id);
// // // // //     if (!employee) {
// // // // //       return res.status(404).json({ error: "Employee not found" });
// // // // //     }
// // // // //     res.json(employee);
// // // // //   } catch (error) {
// // // // //     console.error("❌ Error fetching employee data:", error.message);
// // // // //     res.status(500).json({ error: "Internal server error" });
// // // // //   }
// // // // // });

// // // // // // ✅ Start Server
// // // // // const PORT = process.env.PORT || 10000; // Changed from 3000 to 10000 (Render Default)
// // // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// // // // const express = require("express");
// // // // const twilio = require("twilio");
// // // // const mongoose = require("mongoose");
// // // // require("dotenv").config();
// // // // const cors = require("cors");

// // // // const app = express();
// // // // app.use(express.json());

// // // // // ✅ Allow CORS for Vercel Frontend
// // // // const allowedOrigins = [
// // // //   "https://sos-alert-testing.vercel.app", // Vercel Frontend
// // // //   "http://localhost:3000" // Local Testing
// // // // ];

// // // // app.use(cors({
// // // //   origin: allowedOrigins, 
// // // //   methods: ["GET", "POST", "PUT", "DELETE"],
// // // //   credentials: true
// // // // }));

// // // // // ✅ MongoDB Connection
// // // // const mongoURI = process.env.MONGO_URI;
// // // // if (!mongoURI) {
// // // //   console.error("❌ Error: MONGO_URI is not set in environment variables.");
// // // //   process.exit(1);
// // // // }

// // // // mongoose.connect(mongoURI, {
// // // //   useNewUrlParser: true,
// // // //   useUnifiedTopology: true
// // // // })
// // // // .then(() => console.log("✅ MongoDB connected successfully"))
// // // // .catch(err => {
// // // //   console.error("❌ MongoDB connection error:", err.message);
// // // //   process.exit(1);
// // // // });

// // // // // ✅ Fix: Convert Employee ID to ObjectId
// // // // const { ObjectId } = require("mongoose").Types;

// // // // app.get("/employee/:id", async (req, res) => {
// // // //   try {
// // // //     const employeeId = req.params.id;

// // // //     if (!ObjectId.isValid(employeeId)) {
// // // //       return res.status(400).json({ error: "Invalid Employee ID format" });
// // // //     }

// // // //     const employee = await Employee.findById(new ObjectId(employeeId));
// // // //     if (!employee) {
// // // //       return res.status(404).json({ error: "No employee found for this ID." });
// // // //     }
// // // //     res.json(employee);
// // // //   } catch (error) {
// // // //     console.error("❌ Error fetching employee data:", error.message);
// // // //     res.status(500).json({ error: "Internal server error while fetching data." });
// // // //   }
// // // // });

// // // // // ✅ Start Server
// // // // const PORT = process.env.PORT || 10000;
// // // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// // // const express = require("express");
// // // const mongoose = require("mongoose");
// // // require("dotenv").config();
// // // const cors = require("cors");

// // // const app = express();
// // // app.use(express.json());

// // // // Allow CORS for Vercel Frontend and local testing
// // // const allowedOrigins = [
// // //   "https://sos-alert-testing.vercel.app", // Vercel Frontend
// // //   "http://localhost:3000" // Local Testing
// // // ];
// // // app.use(cors({
// // //   origin: allowedOrigins,
// // //   methods: ["GET", "POST", "PUT", "DELETE"],
// // //   credentials: true
// // // }));

// // // // MongoDB Connection
// // // const mongoURI = process.env.MONGO_URI;
// // // if (!mongoURI) {
// // //   console.error("❌ Error: MONGO_URI is not set in environment variables.");
// // //   process.exit(1);
// // // }

// // // mongoose.connect(mongoURI, {
// // //   useNewUrlParser: true,
// // //   useUnifiedTopology: true
// // // })
// // //   .then(() => console.log("✅ MongoDB connected successfully"))
// // //   .catch(err => {
// // //     console.error("❌ MongoDB connection error:", err.message);
// // //     process.exit(1);
// // //   });

// // // // Employee Schema and Model (example)
// // // const employeeSchema = new mongoose.Schema({
// // //   _id: String,
// // //   name: String,
// // //   department: String,
// // //   designation: String,
// // //   phone: String,
// // //   medical_info: {
// // //     blood_group: String,
// // //     medical_conditions: [String],
// // //     allergies: [String],
// // //     medications: [String]
// // //   },
// // //   emergency_contact: {
// // //     name: String,
// // //     relation: String,
// // //     phone: String
// // //   },
// // //   doctor_contact: {
// // //     name: String,
// // //     hospital: String,
// // //     phone: String
// // //   }
// // // });

// // // const Employee = mongoose.model("Employee", employeeSchema);

// // // // Fetch Employee by ID
// // // const { ObjectId } = require("mongoose").Types;
// // // app.get("/employee/:id", async (req, res) => {
// // //   try {
// // //     const employeeId = req.params.id;
// // //     if (!ObjectId.isValid(employeeId)) {
// // //       return res.status(400).json({ error: "Invalid Employee ID format" });
// // //     }
// // //     const employee = await Employee.findById(new ObjectId(employeeId));
// // //     if (!employee) {
// // //       return res.status(404).json({ error: "No employee found for this ID." });
// // //     }
// // //     res.json(employee);
// // //   } catch (error) {
// // //     console.error("❌ Error fetching employee data:", error.message);
// // //     res.status(500).json({ error: "Internal server error while fetching data." });
// // //   }
// // // });

// // // // Start Server
// // // const PORT = process.env.PORT || 10000;
// // // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// // const express = require("express");
// // const mongoose = require("mongoose");
// // const cors = require("cors");

// // const app = express();
// // app.use(express.json());

// // // Hardcoded MongoDB connection string
// // const mongoURI = "mongodb+srv://username:password@cluster0.mongodb.net/your-database?retryWrites=true&w=majority"; // Replace with your actual MongoDB URI

// // // Allow CORS for specific origins
// // const allowedOrigins = [
// //   "https://sos-alert-testing.vercel.app", // Vercel Frontend
// //   "http://localhost:3000" // Local Testing
// // ];
// // app.use(cors({
// //   origin: allowedOrigins,
// //   methods: ["GET", "POST", "PUT", "DELETE"],
// //   credentials: true
// // }));

// // // MongoDB Connection
// // mongoose.connect(mongoURI, {
// //   useNewUrlParser: true,
// //   useUnifiedTopology: true
// // })
// //   .then(() => console.log("✅ MongoDB connected successfully"))
// //   .catch(err => {
// //     console.error("❌ MongoDB connection error:", err.message);
// //     process.exit(1);
// //   });

// // // Employee Schema and Model (example)
// // const employeeSchema = new mongoose.Schema({
// //   _id: String,
// //   name: String,
// //   department: String,
// //   designation: String,
// //   phone: String,
// //   medical_info: {
// //     blood_group: String,
// //     medical_conditions: [String],
// //     allergies: [String],
// //     medications: [String]
// //   },
// //   emergency_contact: {
// //     name: String,
// //     relation: String,
// //     phone: String
// //   },
// //   doctor_contact: {
// //     name: String,
// //     hospital: String,
// //     phone: String
// //   }
// // });

// // const Employee = mongoose.model("Employee", employeeSchema);

// // // Fetch Employee by ID
// // const { ObjectId } = require("mongoose").Types;
// // app.get("/employee/:id", async (req, res) => {
// //   try {
// //     const employeeId = req.params.id;
// //     if (!ObjectId.isValid(employeeId)) {
// //       return res.status(400).json({ error: "Invalid Employee ID format" });
// //     }
// //     const employee = await Employee.findById(new ObjectId(employeeId));
// //     if (!employee) {
// //       return res.status(404).json({ error: "No employee found for this ID." });
// //     }
// //     res.json(employee);
// //   } catch (error) {
// //     console.error("❌ Error fetching employee data:", error.message);
// //     res.status(500).json({ error: "Internal server error while fetching data." });
// //   }
// // });

// // // Start Server
// // const PORT = 10000; // Hardcoded port
// // app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

// const express = require("express");
// const mongoose = require("mongoose");
// const cors = require("cors");

// const app = express();
// app.use(express.json());

// // Hardcoded MongoDB connection string
// const mongoURI = "mongodb+srv://aditi23github:Credenz@credenz2025.nady9.mongodb.net/?retryWrites=true&w=majority&appName=Credenz2025"; // Replace with your actual MongoDB URI

// // Allow CORS for specific origins
// const allowedOrigins = [
//   "https://sos-alert-testing.vercel.app", // Vercel Frontend
//   "http://localhost:3000" // Local Testing
// ];
// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));

// // MongoDB Connection
// mongoose.connect(mongoURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// })
//   .then(() => console.log("✅ MongoDB connected successfully"))
//   .catch(err => {
//     console.error("❌ MongoDB connection error:", err.message);
//     process.exit(1);
//   });

// // Employee Schema and Model (example)
// const employeeSchema = new mongoose.Schema({
//   _id: String,
//   name: String,
//   department: String,
//   designation: String,
//   phone: String,
//   medical_info: {
//     blood_group: String,
//     medical_conditions: [String],
//     allergies: [String],
//     medications: [String]
//   },
//   emergency_contact: {
//     name: String,
//     relation: String,
//     phone: String
//   },
//   doctor_contact: {
//     name: String,
//     hospital: String,
//     phone: String
//   }
// });

// const Employee = mongoose.model("Employee", employeeSchema);

// // Fetch Employee by ID
// const { ObjectId } = require("mongoose").Types;
// app.get("/employee/:id", async (req, res) => {
//   try {
//     const employeeId = req.params.id;
//     if (!ObjectId.isValid(employeeId)) {
//       return res.status(400).json({ error: "Invalid Employee ID format" });
//     }
//     const employee = await Employee.findById(new ObjectId(employeeId));
//     if (!employee) {
//       return res.status(404).json({ error: "No employee found for this ID." });
//     }
//     res.json(employee);
//   } catch (error) {
//     console.error("❌ Error fetching employee data:", error.message);
//     res.status(500).json({ error: "Internal server error while fetching data." });
//   }
// });

// // Start Server
// const PORT = 10000; // Hardcoded port
// app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));


const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();
app.use(express.json());

// MongoDB Connection
const mongoURI = "mongodb+srv://aditi23github:Credenz@credenz2025.nady9.mongodb.net/?retryWrites=true&w=majority&appName=Credenz2025";

// Allow CORS for specific origins
const allowedOrigins = [
  "https://sos-alert-testing.vercel.app", // Vercel Frontend
  "http://localhost:3000" // Local Testing
];
app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

// Connect to MongoDB
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
  .then(() => console.log("✅ MongoDB connected successfully"))
  .catch(err => {
    console.error("❌ MongoDB connection error:", err.message);
    process.exit(1);
  });

// Employee Schema and Model
const employeeSchema = new mongoose.Schema({
  _id: String,
  name: String,
  department: String,
  designation: String,
  phone: String,
  medical_info: {
    blood_group: String,
    medical_conditions: [String],
    allergies: [String],
    medications: [String]
  },
  emergency_contact: {
    name: String,
    relation: String,
    phone: String
  },
  doctor_contact: {
    name: String,
    hospital: String,
    phone: String
  }
});

const Employee = mongoose.model("Employee", employeeSchema);

// Root Route for Health Check
app.get("/", (req, res) => {
  res.send("✅ Backend is running!");
});

// Fetch Employee by ID
app.get("/employee/:id", async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: "No employee found for this ID." });
    }
    res.json(employee);
  } catch (error) {
    console.error("❌ Error fetching employee data:", error.message);
    res.status(500).json({ error: "Internal server error while fetching data." });
  }
});

// Start Server on Dynamic Port
const PORT = process.env.PORT || 10000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));












