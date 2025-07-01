const mongoose = require("mongoose");
const MajorProject = require("../models/majorProject");

mongoose.connect("mongodb://localhost:27017/techlearn")
  .then(async () => {
    console.log("✅ MongoDB connected");

    await MajorProject.deleteMany({});

    await MajorProject.insertMany([
      {
        title: "Full-Stack E-commerce Platform with Payment Integration",
        description:
          "Build a complete e-commerce platform with user authentication, product management, shopping cart, and payment gateway integration.",
        tech: "React, Node.js, MongoDB, Advanced",
        duration: "2 - 3 weeks",
        image: "/assets/cards/major_projects/major-ecommerce.png",
        trainer: true,
      },
      {
        title: "AI-Powered Chatbot with Natural Language Processing",
        description:
          "Develop an intelligent chatbot using NLP techniques to understand and respond to user queries effectively.",
        tech: "Python, NLP, Machine Learning, Advanced",
        duration: "3 - 4 weeks",
        image: "/assets/cards/major_projects/major-chatbot.png",
        trainer: true,
      },
      {
        title: "Real-Time Collaborative Whiteboard",
        description:
          "Create a real-time collaborative whiteboard app supporting multi-user drawing, shapes, and sticky notes with live sync.",
        tech: "React, Node.js, WebSockets, Canvas API, Advanced",
        duration: "2 - 3 weeks",
        image: "/assets/cards/major_projects/whiteboard.png",
        trainer: true,
      }
    ]);

    console.log("✅ Major projects seeded");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });
