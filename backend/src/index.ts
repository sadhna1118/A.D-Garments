import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import { PrismaClient } from "@prisma/client";

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;
const prisma = new PrismaClient();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/health", (req, res) => {
  res.json({ status: "ok", message: "A.D Garments API is running" });
});

// Enquiries
app.post("/api/enquiries", async (req, res) => {
  try {
    const { fullName, companyName, phone, email, city, category, quantity, deliveryDate, requirement, message } = req.body;
    
    const newEnquiry = await prisma.enquiry.create({
      data: {
        name: fullName,
        companyName,
        phone,
        email,
        city,
        garmentCategory: category,
        quantity,
        deliveryDate,
        requirement,
        message,
        status: "New"
      }
    });
    
    res.status(201).json({ success: true, data: newEnquiry });
  } catch (error) {
    console.error("Error creating enquiry:", error);
    res.status(500).json({ success: false, error: "Failed to create enquiry" });
  }
});

app.get("/api/enquiries", async (req, res) => {
  try {
    const enquiries = await prisma.enquiry.findMany({
      orderBy: { createdAt: "desc" }
    });
    res.json({ success: true, data: enquiries });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch enquiries" });
  }
});

// Categories
app.get("/api/categories", async (req, res) => {
  try {
    const categories = await prisma.category.findMany({
      where: { isActive: true },
      orderBy: { createdAt: "desc" }
    });
    res.json({ success: true, data: categories });
  } catch (error) {
    res.status(500).json({ success: false, error: "Failed to fetch categories" });
  }
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
