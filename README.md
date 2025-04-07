
# 🛠️ Admin Dashboard UI (React Project)

This is a responsive Admin Dashboard built using **React.js**. It allows admins to view, search, edit, delete, and paginate users fetched from a real API.

Live Demo 👉 https://geektrust1-admin-ui.vercel.app/

---

## ✨ Features

✅ View a list of users (fetched from API)  
✅ Search users by name, email, or role  
✅ Edit users directly in the table  
✅ Delete individual or multiple selected users  
✅ Pagination (10 users per page)  
✅ Highlight selected rows  
✅ Select all users on the current page  
✅ Fully in-memory edits (no persistence)  
✅ Fully responsive and test-ready layout  
✅ No external component libraries (pure HTML + CSS + React)

---

## 🔗 API Used
GET https://geektrust.s3-ap-southeast-1.amazonaws.com/adminui-problem/members.json


---

## 🚀 Getting Started

1. **Clone the repo**

```bash
git clone https://github.com/your-username/admin-dashboard.git
cd admin-dashboard 

npm install

npm run dev
```

📁 Folder Structure
```
src/
├── components/
│   ├── UserTable.js
│   ├── Pagination.js
│   └── SearchBar.js
├── App.js
└── index.js
```
🧪 Test Requirements Checklist
- Search box placeholder starts with "Search"
- Action buttons use classes: edit, delete, save
- Pagination uses classes: first-page, previous-page, next-page, last-page
- Delete Selected button at bottom left
- Fully functional on localhost without port override

🙌 Author
- Vishal Rathod
- 👨‍💻 MCA Student | React Developer
- 📍 Jamnagar, Gujarat

🌟 Show Your Support
- If you like this project, give it a ⭐️ on GitHub and share it!

📝 License
- Free to use for educational and personal projects.

---

