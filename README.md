## 🌟 React Portfolio Practice

This is a small practice project built with React to strengthen my frontend development skills.
The app displays a portfolio with project cards, supports light/dark mode, and uses Framer Motion for animations.

## 🚀 Features

Responsive design: Project cards adapt to different screen sizes using CSS Grid.

Dark/Light mode toggle: Implemented with React useState and useEffect hooks, applying global styles by updating the <body> class.

Project cards:

Display project image, name, description, technologies, and repository link.

Animations on hover (scale, rotation, glow effect).

Animations: Built with Framer Motion
 for smooth hover effects and entry transitions.

## 🛠️ Tech Stack

React (with Vite)

CSS for styling

Framer Motion for animations

## 📂 Project Structure

```
src/
  components/
    Header.jsx
    Footer.jsx
    ProjectCard.jsx
    ProjectList.jsx
  styles/
    Header.css
    Footer.css
    ProjectCard.css
    ProjectList.css
  App.jsx
  main.jsx
  index.css
```


## ⚙️ How It Works

The App component manages dark/light mode state with useState.

useEffect updates the body class (dark or light) every time the state changes.

Each ProjectCard is animated with Framer Motion (whileHover, initial, animate).

Global styles change depending on the active theme.

## 📸 Screenshots

Light Mode


Dark Mode


## ▶️ Run Locally

Clone the repo and install dependencies:

git clone https://github.com/yourusername/react-portfolio-practice.git
cd react-portfolio-practice
npm install
npm run dev

## 📌 Learning Goals

Practice React fundamentals (props, state, useEffect).

Understand how to manage global themes in React.

Use Framer Motion for interactive animations.

Organize a small React project with clean structure.

## ✨ Future Improvements

Fetch from an API. (fastAPI api for backend)
