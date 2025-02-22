// const express = require("express");
// const twilio = require("twilio");
// require("dotenv").config();
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors()); // Allow frontend to call API

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// app.post("/send-messages", async (req, res) => {
//   try {
//     const { message, recipients } = req.body;

//     const msg = await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio Number
//       to: recipients,
//     });

//     res.json({ success: true, sid: msg.sid });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));


// const express = require("express");
// const twilio = require("twilio");
// require("dotenv").config();
// const cors = require("cors");

// const app = express();
// app.use(express.json());
// app.use(cors()); // Allow frontend to call API

// const accountSid = process.env.TWILIO_ACCOUNT_SID;
// const authToken = process.env.TWILIO_AUTH_TOKEN;
// const client = twilio(accountSid, authToken);

// app.post("/send-messages", async (req, res) => {
//   try {
//     const { message, recipients } = req.body;

//     const msg = await client.messages.create({
//       body: message,
//       from: process.env.TWILIO_PHONE_NUMBER, // Your Twilio Number
//       to: recipients,
//     });

//     res.json({ success: true, sid: msg.sid });
//   } catch (error) {
//     console.error(error);
//     res.status(500).json({ success: false, error: error.message });
//   }
// });

// app.listen(3000, () => console.log("Server running on http://localhost:3000"));


// 1. server.js - Complete updated file
const express = require("express");
const twilio = require("twilio");
const mongoose = require("mongoose");
require("dotenv").config();
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect('your_mongodb_connection_string', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Employee Schema
const employeeSchema = new mongoose.Schema({
  name: String,
  designation: String,
  department: String,
  phone: String,
  email: String,
  qr_code_url: String,
  emergency_contact: {
    name: String,
    relation: String,
    phone: String
  },
  medical_info: {
    blood_group: String,
    allergies: [String],
    medical_conditions: [String],
    medications: [String]
  },
  doctor_contact: {
    name: String,
    phone: String,
    hospital: String
  }
});

const Employee = mongoose.model('Employee', employeeSchema);

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = twilio(accountSid, authToken);

// Existing route for sending messages
app.post("/send-messages", async (req, res) => {
  try {
    const { message, recipients } = req.body;

    const msg = await client.messages.create({
      body: message,
      from: process.env.TWILIO_PHONE_NUMBER,
      to: recipients,
    });

    res.json({ success: true, sid: msg.sid });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, error: error.message });
  }
});

// New route for fetching employee data
app.get('/employee/:id', async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) {
      return res.status(404).json({ error: 'Employee not found' });
    }
    res.json(employee);
  } catch (error) {
    console.error('Error fetching employee:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(3000, () => console.log("Server running on http://localhost:3000"));