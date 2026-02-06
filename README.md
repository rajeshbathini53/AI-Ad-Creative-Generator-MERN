🚀 AdVantage Gen – AI Ad Creative & Copy Generator

AdVantage Gen is a full-stack AI-powered ad creative generator that helps users design marketing creatives with custom headlines and CTA buttons. The platform provides a visual studio where users can edit text size, preview creatives, and download final designs. It also stores creative history using MongoDB.
This project was developed as part of the Infotact Solutions AI Innovation Lab Internship.

✨ Features

✅ Frontend 

1.React-based Ad Studio
2.Enter Headline & CTA text
3.Adjust Headline and CTA size using sliders
4.Generate creative only after clicking Generate
5.Preview creative on canvas
6.Hide CTA during export
7.Download final image using html2canvas

✅ Backend

1.Express.js REST API
2.MongoDB integration for saving creatives
3.Creative history endpoint
4.Axios used for frontend → backend communication
5.Ready for future Remix / Variant generation
6.Rate-limit ready architecture

🧱 Tech Stack

--> Frontend

1.React + Vite
2.CSS
3.html2canvas
4.Axios

-->Backend

1.Node.js
2.Express.js
3.MongoDB (Mongoose)

📁 Project Structure

AdVantage Gen Project
│
├── backend
│   ├── models
│   ├── routes
│   ├── server.js
│
├── src
│   ├── components
│   │   ├── Toolbar.jsx
│   │   └── CanvasEditor.jsx
│   ├── pages
│   │   └── Studio.jsx
│   └── styles
│
├── public
│   ├── logo.png
│   └── sample.png
│
└── README.md

⚙️ Installation & Setup

1️⃣ Clone Repository
git clone https://github.com/YOUR_USERNAME/advantage-gen.git
cd advantage-gen

2️⃣ Frontend Setup
npm install
npm run dev

* Frontend runs on:
http://localhost:5173

3️⃣ Backend Setup
cd backend
npm install
node server.js

* Backend runs on:
http://localhost:5000

4️⃣ MongoDB Connection

* backend:
mongoose.connect("mongodb://127.0.0.1:27017/advantage");

🔁 Application Flow
Prompt → Enter Headline + CTA
→ Click Generate
→ Edit Sizes
→ Preview Creative
→ Download Image
→ Save to MongoDB
→ View History

📥 Download Feature

* The canvas is exported using:
html2canvas
-- CTA button is temporarily hidden during download to produce clean creative.

📌 API Endpoints
* Save Creative
POST /api/creatives

* Get History
GET /api/history
