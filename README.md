# 🏢 Companies Directory — Frontend Assessment (Frontlines Edutech)


---

## 🚀 Live Demo  
🔗 **Live URL:** https://companies-directory-frontlinesedutech.vercel.app  

(Click to open the deployed app)

---

## 🎥 Video Walkthrough /Code Explanation
🔗 **Video Link:** * https://drive.google.com/file/d/1I8WxcIXxj6C2HkTP7CPM7BroZHYlKaTW/view?usp=sharing *  

The video covers:  
- Code structure  
- Feature walkthrough  
- UI demo  
- Sorting, searching, filtering, pagination  
- Reasoning behind technical choices  

---

## 📦 Features

### 🔍 **Search**
- Real-time company name search  
- Case-insensitive matching  

### 🎛️ **Filters**
- Industry filter (with placeholder `Industry`)  
- Location filter (with placeholder `Location`)  
- Smart filtering logic (ignores placeholder values)

### 🔃 **Sorting**
- Sort by **Name A–Z**  
- Sort by **Name Z–A**  
- Sorting only applies **after user selection**  

### 📑 **Pagination**
- Batch-based page navigation (1–3, 4–6 etc.)  
- Scales automatically with dataset  
- Resets to Page 1 when filters/search are updated  

### 📱 **Full Responsiveness**
- Mobile-first layout  
- Sticky header & sticky filter bar  
- Smooth UI on all screen sizes  

### ✨ **Premium UI**
- Glassmorphism  
- Modern gradients  
- Smooth transitions  
- Custom dropdowns  
- Professional card designs  

---

## 🛠️ Tech Stack

### **Frontend**
- React (with Hooks)
- Vite
- Tailwind CSS
- Lucide Icons

### **State Management**
- React Context API  
- `FiltersContext` for search, sorting, and filters

### **Data**
- `companies.json` stored inside `public/data`  
- Loaded via `fetch()` simulating API behavior  

---

## 📁 Folder Structure

companies-directory/
├── public/
│ └── data/
│ └── companies.json
├── src/
│ ├── components/
│ │ ├── Header.jsx
│ │ ├── FilterBar.jsx
│ │ ├── CompanyList.jsx
│ │ ├── CompanyCard.jsx
│ │ ├── Pagination.jsx
│ │ ├── MinimalDropdown.jsx
│ │ ├── Loader.jsx
│ │ └── Error.jsx
│ ├── context/
│ │ └── FiltersContext.jsx
│ ├── App.jsx
│ ├── main.jsx
│ └── index.css
├── vite.config.js
└── README.md

yaml
Copy code

---

## ⚙️ Installation & Running Locally

git clone https://github.com/Reddygopalkrishna/companies-directory-frontlinesedutech
cd companies-directory-frontlinesedutech
npm install
npm run dev

yaml
Copy code

Run production preview:

npm run build
npm run preview

yaml
Copy code

---

## 🧠 Design Decisions

### **1. Context API for Global Filters**
Makes search, filter, and sorting available across components.

### **2. useMemo for Performance**
Prevent unnecessary recalculations when filtering large datasets.

### **3. Custom Dropdown**
Replaces native `<select>` to prevent mobile zoom issues and maintain UI consistency.

### **4. Pagination Batching**
Enhances clarity when navigating many pages.

### **5. Glassmorphism UI**
Creates a premium, modern, polished look suitable for a professional dashboard.

---

## 🧪 How to Test

- Search for a name  
- Select an industry  
- Select a location  
- Choose sorting (A–Z / Z–A)  
- Navigate across pages  
- Resize window / open on mobile  
- Check sticky header + filter bar  

---

## 🙏 Thank You

Thank you for reviewing this assignment.  
I thoroughly enjoyed building it and would be happy to discuss further in the next round.



