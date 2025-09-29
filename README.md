<h1 align="center">📝 Bloglelo</h1>
<p align="center">
  A full-stack blog platform built with <b>Express.js</b> and <b>MongoDB</b> to solidify backend concepts.
  <br />
  <i>"Write. Edit. Share. Repeat."</i>
</p>

<p align="center">
  <img src="https://img.shields.io/badge/status-in%20progress-yellow" alt="Status Badge" />
  <img src="https://img.shields.io/badge/backend-Express.js-informational" />
  <img src="https://img.shields.io/badge/database-MongoDB-brightgreen" />
  <img src="https://img.shields.io/badge/styling-Bootstrap%20%26%20Tailwind-blueviolet" />
</p>

---

## 🌟 Features

✅ User Authentication (Sign Up / Sign In)  
✅ Server Side Rendering (SSR)  
✅ Blog Post Creation (CRUD)  
✅ Responsive Design using **Tailwind CSS** & **Bootstrap**  
🚧 Commenting, Likes, Admin Panel (coming soon)

---

## 🛠️ Tech Stack

| Layer       | Technology                       |
|-------------|-----------------------------------|
| 🧠 Backend   | [Express.js](https://expressjs.com) |
| 💾 Database | [MongoDB](https://mongodb.com)       |
| 🎨 Styling  | [Tailwind CSS](https://tailwindcss.com), [Bootstrap](https://getbootstrap.com) |
| 🖥️ SSR      | EJS  |
| 🌐 Hosting  | Localhost (dev), to be deployed later |

---

## ⚙️ Installation

### 🔧 Prerequisites

- [Node.js](https://nodejs.org/)
- [MongoDB](https://www.mongodb.com/) (Local or Atlas)

### 📥 Setup Steps

```bash
# 1️⃣ Clone the repository
git clone https://github.com/yourusername/bloglelo.git

# 2️⃣ Move into the project folder
cd bloglelo

# 3️⃣ Install dependencies
npm install

# 4️⃣ Setup environment variables
cp .env.example .env
# Then open `.env` and configure:
# MONGO_URL=your_mongodb_url
# PORT=5000

# 5️⃣ Run the development server
npm run dev
