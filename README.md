# 📆 React Big Calendar + Bar Graph (with Redux)

A fully functional demo project integrating **React Big Calendar**, **Redux Toolkit**, **Recharts (Bar Graph)**, and **dummy JSON data**.
It highlights dates with available data, opens a popup on click, and displays a bar graph for user-wise values.

---

## 🚀 Features

### ✅ Calendar Functionality

- Display date-wise events using **React Big Calendar**
- Highlight dates that contain data
- Highlight the selected date
- View data in **Month**, **Week**, and **Day** modes
- Popup appears on clicking a date

### 📊 Data Handling

- Dummy JSON data with random user values
- Data is mapped using Redux state
- Displays **Bar Graph** using Recharts

### ⚠️ Empty State Handling

- If no data exists for a selected date, popup shows:
  **“No data found for the selected date (DD-MM-YYYY)”**

### 🏗 Tech Stack

- **React + Vite**
- **Redux Toolkit**
- **React Big Calendar**
- **Recharts**
- **date-fns**

---

# 📁 Folder Structure

```
react-big-calendar-bargraph/
├── index.html
├── package.json
├── vite.config.js
├── README.md
├── public/
│   └── favicon.ico
└── src/
    ├── main.jsx
    ├── App.jsx
    ├── styles.css
    ├── data/
    │   └── calendarData.js
    ├── components/
    │   ├── CalendarView.jsx
    │   ├── Popup.jsx
    │   └── BarChart.jsx
    └── store/
        ├── store.js
        └── calendarSlice.js
```

---

# 🛠 Installation & Setup

### 1️⃣ Clone the Repository

```
git clone <your-repo-url>
cd react-big-calendar-bargraph
```

### 2️⃣ Install Dependencies

```
npm install
```

### 3️⃣ Start Development Server

```
npm run dev
```

Now open:

👉 **[http://localhost:5173/](http://localhost:5173/)**

---

# 🧪 How to Test the Project

### ✔ 1. Calendar Rendering

- Open the project
- Calendar should load without errors

### ✔ 2. Highlighted Dates

- Dates with data in `calendarData.js` appear highlighted

### ✔ 3. Popup Test

- Click a highlighted date → Popup must show bar graph
- Click a non-highlighted date → Warning message appears

### ✔ 4. Bar Graph Test

- Graph should show 4 items: user_1, user_2, user_3, user_4

### ✔ 5. Cross-Browser Testing

- Test on Chrome, Firefox, Edge, Safari# 📆 React Big Calendar + Bar Graph (with Redux)

  A fully functional demo project integrating **React Big Calendar**, **Redux Toolkit**, **Recharts (Bar Graph)**, and **dummy JSON data**.

  It highlights dates with available data, opens a popup on click, and displays a bar graph for user-wise values.

  ***

  ## 🚀 Features

  ### ✅ Calendar Functionality

  - Display date-wise events using **React Big Calendar**

  - Highlight dates that contain data

  - Highlight the selected date

  - View data in **Month**, **Week**, and **Day** modes

  - Popup appears on clicking a date

  ### 📊 Data Handling

  - Dummy JSON data with random user values

  - Data is mapped using Redux state

  - Displays **Bar Graph** using Recharts

  ### ⚠️ Empty State Handling

  - If no data exists for a selected date, popup shows:

    **“No data found for the selected date (DD-MM-YYYY)”**

  ### 🏗 Tech Stack

  - **React + Vite**

  - **Redux Toolkit**

  - **React Big Calendar**

  - **Recharts**

  - **date-fns**

  ***

  # 🛠 Installation & Setup

  ### 1️⃣ Clone the Repository

  ```

  git clone <your-repo-url>

  cd react-big-calendar-bargraph

  ```

  ### 2️⃣ Ins

---

# 🧰 Debugging Checklist (Before Submission)

Before final testing and submitting, ensure:

### ✔ UI loads without crashing

### ✔ No console errors

### ✔ Dates with data are correctly highlighted

### ✔ Popup works for all dates

### ✔ “No data found” message appears correctly

### ✔ Redux store is functioning

### ✔ Bar graph renders properly

### ✔ All required packages are installed

If anything doesn’t match expected behavior, debug first.

---

make this readme perfect and concise and give me
