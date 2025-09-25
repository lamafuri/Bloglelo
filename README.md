# 📝 Bloglelo

**Bloglelo** is a full-stack blog application where users can register and manage their own blog posts. This project is built to solidify my understanding of **Express.js**, **MongoDB**, and full-stack development principles.

> "Write. Edit. Share. Welcome to Bloglelo."

---

## 🚀 Features (Planned)

- User authentication (Sign up, Sign in)
- Create, read, update, and delete blog posts (CRUD)
- Server-Side Rendering (SSR) for better SEO and performance
- Responsive UI using **Bootstrap** and **Tailwind CSS**
- User dashboard to manage personal blogs
- Comment system
- Like & share functionality
- Categories and tags for filtering
- Admin panel for moderation
- Profile management

---

## 🛠️ Tech Stack

| Category       | Tech                          |
|----------------|-------------------------------|
| Backend        | [Express.js](https://expressjs.com) |
| Database       | [MongoDB](https://mongodb.com)     |
| Frontend Styling | [Bootstrap](https://getbootstrap.com), [Tailwind CSS](https://tailwindcss.com) |
| Templating     | [EJS](https://ejs.co) (or whichever you're using) |
| Auth           | Custom authentication / JWT (optional) |
| Runtime        | [Node.js](https://nodejs.org)       |

---

## 📦 Installation

### Prerequisites

- Node.js and npm installed
- MongoDB installed and running (local or Atlas)

### Steps

```bash
# 1. Clone the repository
git clone https://github.com/yourusername/bloglelo.git

# 2. Navigate into the project directory
cd bloglelo

# 3. Install dependencies
npm install

# 4. Set up environment variables
cp .env.example .env
# Then edit `.env` and set:
# MONGO_URL=your_mongodb_uri
# PORT=5000

# 5. Start the development server
npm run dev
