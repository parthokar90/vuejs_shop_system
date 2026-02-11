#  VueJS Product & Category Management (Frontend)

This is a VueJS Single Page Application (SPA) that consumes a Laravel REST API to manage Products and Categories.

The application allows users to create, update, delete, and view products and categories dynamically using Axios for API communication.

---

# Features

### Product Management
- Create Product
- Edit Product
- Delete Product
- View Product List
- Assign Product to Category

### Category Management
- Create Category
- Edit Category
- Delete Category
- View Category List

### API Integration
- Axios for HTTP requests
- RESTful API consumption
- JSON-based communication
- Proper error handling
- Form validation

---

### Tech Stack

- VueJS
- Vue Router
- Axios
- Bootstrap / CSS
- Vite (or Vue CLI)

---

### Project Structure


- **components/** → Reusable UI components  
- **views/** → Page-level components  
- **router/** → Application routes  
- **services/** → Axios API configuration  

---

# ⚙️ Installation & Setup

## 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/your-vue-repo.git
```

2️⃣ Install Dependencies

```bash
npm install
```

3️⃣ Configure API Base URL

```bash
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api"
});

export default api;
```

4️⃣ Start Development Server
```bash
npm run dev
http://localhost:5173
```
