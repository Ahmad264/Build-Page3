const mongoose = require("mongoose");
const MiniProject = require("../models/miniProject");

mongoose.connect("mongodb://localhost:27017/techlearn")
  .then(async () => {
    console.log("✅ MongoDB connected");

    await MiniProject.deleteMany({});

    await MiniProject.insertMany([
      {
        title: "Simple Calculator App",
        description: "Build a functional calculator with basic arithmetic operations using HTML, CSS, and JavaScript. Perfect for learning DOM manipulation and event handling.",
        image: "/assets/cards/mini_projects/calculator.png", 
        difficulty: "Beginner",
        duration: "2-3 hours",
        tags: ["Python", "Beginner"],
        category: "mini"
      },
      {
        title: "Click Counter App",
        description: "Build a super simple app that counts how many times you click anywhere on the screen. This teaches event handling, DOM updates, and basic state management.",
        image: "/assets/cards/mini_projects/click_counter.gif", 
        difficulty: "Beginner",
        duration: "30 mins",
        tags: ["JS", "Beginner"],
        category: "mini"
      },
      {
        title: "Checklist App",
        description: "Create a simple checklist web app where users can add, complete, and delete tasks. Learn DOM manipulation and basic CRUD operations in under 30 lines of JavaScript.",
        image: "/assets/cards/mini_projects/checklist.gif",
        difficulty: "Beginner",
        duration: "1 day",
        tags: ["JS", "Beginner"],
        category: "mini"
      }
    ]);

    console.log("✅ Mini projects seeded");
    mongoose.disconnect();
  })
  .catch((err) => {
    console.error("❌ Seeding failed:", err);
  });
