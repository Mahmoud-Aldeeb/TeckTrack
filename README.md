🚀 TechTrack

TechTrack is an interactive web platform that helps learners explore and understand the complete roadmaps of different tech tracks. It’s designed to connect learning with real-world opportunities while providing a smooth, visually engaging experience.

🌟 Features
🌍 Multi-language support using react-i18next
💫 Smooth animations powered by Framer Motion
📱 Fully responsive design for all screen sizes
⚙️ React Router for seamless page navigation
🧠 Reusable components with clean, modular architecture
🧭 Roadmap-based learning approach to guide users through different tech paths
    React Helmet integration for dynamic page titles and SEO optimization

🧰 Tech Stack
React.js — Frontend library
Tailwind CSS — Modern utility-first styling
Framer Motion — Animation library
React Router DOM — Routing system
i18next + react-i18next — Internationalization and translation
React Helmet Async — Managing document head

⚙️ Installation & Setup

To get a local copy up and running, follow these simple steps:

# Clone the repository
git clone https://github.com/<your-username>/TechTrack.git

# Navigate into the project folder
cd TechTrack

# Install dependencies
npm install

# Start the development server
npm run dev


Your project will be running on http://localhost:5173/
 (default Vite port).

🧩 Folder Structure
TechTrack/
│
├── public/
│   └── locales/        # Translation files (en, ar, etc.)
│
├── src/
│   ├── assets/         # Images and static assets
│   ├── components/     # Reusable UI components
│   ├── pages/          # Main page views (Home, About, etc.)
│   ├── utils/          # Helper and config files (i18n.js, etc.)
│   ├── App.jsx         # Main application file
│   └── main.jsx        # Entry point
│
└── package.json

🌐 Demo

(Coming soon — add your Netlify or GitHub Pages link here)

💡 Future Improvements
🔥 Add backend integration (Laravel / Firebase)
🗺️ Add interactive roadmap visualization
🧑‍💻 User authentication system
🧾 Dynamic content from database or API

```
TechTrack
├─ .eslintrc.json
├─ eslint.config.js
├─ index.html
├─ package-lock.json
├─ package.json
├─ public
│  ├─ locales
│  │  ├─ ar
│  │  │  └─ translation.json
│  │  └─ en
│  │     └─ translation.json
│  └─ vite.svg
├─ README.md
├─ src
│  ├─ App.jsx
│  ├─ assets
│  │  ├─ icons
│  │  └─ image
│  │     ├─ arrow-up-right.png
│  │     ├─ devicon_redis.svg
│  │     ├─ LOGO-Yellow 1.jpg
│  │     ├─ LOGO-Yellow 2.png
│  │     ├─ LOGO-Yellow 3.png
│  │     ├─ logo1.png
│  │     └─ logo2.png
│  ├─ componants
│  │  ├─ common
│  │  ├─ layout
│  │  │  ├─ Footer.jsx
│  │  │  └─ Nav.jsx
│  │  └─ ui
│  │     ├─ Btn.jsx
│  │     └─ Info.jsx
│  ├─ features
│  │  ├─ profile
│  │  └─ roadmap
│  ├─ main.jsx
│  ├─ pages
│  │  ├─ About
│  │  ├─ home
│  │  │  ├─ AllTrack
│  │  │  │  ├─ Circles.jsx
│  │  │  │  └─ Tracks.jsx
│  │  │  ├─ Home.jsx
│  │  │  ├─ Opportunity
│  │  │  │  ├─ AnimationCard.jsx
│  │  │  │  └─ Opportunity.jsx
│  │  │  └─ Review
│  │  │     ├─ ReviewCard.jsx
│  │  │     └─ Reviews.jsx
│  │  └─ NotFound
│  ├─ routes
│  │  └─ AppRoutes.jsx
│  ├─ styles
│  │  └─ index.css
│  └─ utils
│     ├─ helpers.js
│     └─ i18n.js
└─ vite.config.js

```