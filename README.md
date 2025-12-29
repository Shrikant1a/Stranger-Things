# Stranger-Things
Stranger Things
# Stranger Things – React + Vite Project

A simple **React application built with Vite** featuring a clean UI structure with reusable components like **Navbar** and **Hero**, and client-side routing using **React Router DOM**.

This project was created to practice modern React setup, routing, and component-based architecture.

---

## 🚀 Tech Stack

* **React 18**
* **Vite** (fast build tool)
* **React Router DOM** (client-side routing)
* **JavaScript (ES6+)**
* **CSS**

---

## 📁 Project Structure

```
vite-project/
│── public/
│   └── vite.svg
│
│── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Navbar.css
│   │   ├── Hero.jsx
│   │   └── Hero.css
│   │
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
│
│── index.html
│── package.json
│── vite.config.js
│── README.md
```

---

## ⚙️ Installation & Setup

### 1️⃣ Clone the repository

```bash
git clone https://github.com/your-username/stranger-things-react.git
```

### 2️⃣ Navigate into the project

```bash
cd vite-project
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Install React Router DOM

```bash
npm install react-router-dom
```

### 5️⃣ Run the development server

```bash
npm run dev
```

Open your browser and visit:

```
http://localhost:5173/
```

---

## 🧭 Routing Overview

The app uses **React Router DOM v6** for navigation.

```jsx
<Routes>
  <Route path="/" element={<Hero />} />
</Routes>
```

The `Navbar` component is rendered globally.

---

## ✨ Features

* ⚡ Fast development with Vite
* 🧩 Reusable React components
* 🧭 Client-side routing
* 🎨 Simple and clean UI structure
* 📱 Responsive-ready layout

---

## 🛠 Common Issues & Fixes

### ❌ 404 Error on localhost

✔ Ensure `react-router-dom` is installed
✔ Run `npm run dev` from the correct folder
✔ Open only `http://localhost:5173/`

---

## 📌 Future Improvements

* Add more routes (About, Episodes, Characters)
* Improve UI styling
* Add animations
* Make Navbar links dynamic

---

## 👨‍💻 Author

**Shrikant Aher**
Frontend / Blockchain Developer

---

## 📜 License

This project is open-source and available under the **MIT License**.

---

⭐ If you like this project, give it a star and feel free to fork it!
