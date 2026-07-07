# Bento Calculator 🍱

A lightweight web application designed to help cram schools quickly calculate lunch orders before entering them into their official system.

This project was created to solve a real-world problem for a friend who works at a cram school. Instead of manually calculating lunch orders every day, the application provides instant calculations, remembers frequently used settings, and continues evolving based on real user feedback.

---

## 🌐 Live Demo

**Live Website:**  
https://hfchen1006.github.io/Bento-calculator/

---

## 📌 Project Background

This project is used internally by a cram school to simplify the daily lunch ordering process.

The application helps staff quickly calculate lunch quantities and estimate costs before entering the final order into the school's official management system.

The project is also part of my web development learning journey, where every new feature is developed based on conversations with the end user.

---

## 🎯 Project Goal

The goal of Bento Calculator is **not to replace the school's official management system**.

Instead, it serves as a lightweight workspace that helps staff:

- Quickly calculate lunch orders.
- Remember frequently used settings.
- Save lunch order records.
- Remember frequently used settings.
- (Upcoming) Add notes to saved records.

Every feature is added only after understanding the user's real workflow and solving a real problem.

---

## ✨ Current Features

### Lunch Calculator

- Calculate the required number of lunch boxes.
- Junior students count as **half a lunch**, rounded up using `Math.ceil()`.
- Display the total number of students.
- Calculate the total lunch cost.
- Automatically update results while typing.
- Clear all input fields.

### User Settings

- Save default price and student/teacher counts using `localStorage`.
- Automatically restore saved settings when the page loads.

### Recent Records

- Save each lunch calculation as an individual record.
- Display recent lunch order records.
- Automatically restore saved records after refreshing the page.
- Show the newest records at the top.

### Order Notes

- Add notes to each saved record.
- Edit notes at any time.
- Save notes using `localStorage`.
- Display notes inside each Record Card.

---

## 🚀 Planned Features

### Statistics

- Daily summary.
- Weekly summary.
- Weekly reimbursement report.

### Future Improvements

- Export records to Excel.
- Responsive mobile layout.
- UI improvements.

---

## 🛠️ Built With

- HTML5
- CSS3
- Vanilla JavaScript
- localStorage
- Git
- GitHub
- GitHub Pages

---

## 📖 What I Learned

Through this project I practiced:

- DOM manipulation
- Event listeners
- JavaScript Objects
- Arrays
- Functions
- `Math.ceil()`
- `JSON.stringify()`
- `JSON.parse()`
- `localStorage`
- Git workflow
- GitHub Pages deployment
- Product requirement analysis
- User requirement gathering
- Version management using Semantic Versioning

---

## 💡 Development Philosophy

> **Build it well, not just build it.**

Every feature in this project begins with understanding the user's workflow before writing code.

The focus is not to build the most feature-rich application, but to build a tool that people genuinely enjoy using in their daily work.

---

## 👨‍💻 Author

**Frank Chen**