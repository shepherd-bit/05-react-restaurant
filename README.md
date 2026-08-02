# Chefhome — Premium Dining & Culinary Experience

An interactive, responsive single-page web application for a high-end restaurant built with React, Vite, Tailwind CSS, and GSAP animations.

Preview (./public/preview.PNG)

👉 **[View Live Link](https://shepherd-bit.github.io/05-react-restaurant/)**

---

## 🚀 Key Features

* **Dynamic Hero Section:** Eye-catching brand presentation designed to engage visitors immediately.
* **Infinite Team Carousel:** Seamless, continuous-loop scroll showcasing the culinary team without hover interruptions.
* **Spread Review Display:** Grid-aligned testimonial section featuring guest reviews, ratings, and avatars visible at a glance.
* **Interactive Newsletter CTA:** Built-in email subscription flow featuring loading state feedback and an interactive 20% discount coupon code reveal (`GRILL20`) with 1-click clipboard copying.
* **Clean 3-Column Footer:** Structured contact information, physical location details, and dedicated brand logo branding.
* **Fully Responsive:** Optimized for all screen sizes from mobile devices to wide desktop monitors.

---

## 🛠️ Tech Stack

* **Framework:** [React](https://react.dev/) (Vite)
* **Styling:** [Tailwind CSS](https://tailwindcss.com/)
* **Animations:** [GSAP](https://gsap.com/) & [@gsap/react](https://gsap.com/resources/react/)
* **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
* **Deployment:** GitHub Actions & GitHub Pages

---

## 📁 Project Structure

```text
├── public/
│   ├── chefhome-logo.png
│   ├── preview.PNG
│   ├── our-team/
│   └── reviews/
├── src/
│   ├── components/
│   │   ├── Footer.jsx
│   │   ├── Newsletter.jsx
│   │   ├── OurTeam.jsx
│   │   └── Reviews.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .github/
│   └── workflows/
│       └── deploy.yml
├── package.json
├── vite.config.js
└── README.md