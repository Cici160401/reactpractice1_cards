import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProjectList from './components/ProjectList'
import Header from './components/Header';
import Footer from './components/Footer';
import { useState, useEffect } from "react";

export default function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = darkMode ? "dark" : "light";
  }, [darkMode]);
  // Definimos los datos: cada objeto es único porque tiene "id"
  const projects = [
    {
      id: 1,
      name: "CRUD FastAPI",
      desc: "API REST con autenticación JWT",
      techs: ["FastAPI", "MySQL", "JWT"],
      image: "https://via.placeholder.com/200",
      repoUrl: "https://github.com/tuuser/crud-fastapi"
    },
    {
      id: 2,
      name: "Dashboard Nutrientes",
      desc: "Visualización DOP de suelo",
      techs: ["React", "Vite", "Charts"],
      image: "https://via.placeholder.com/200"
      // No tiene repoUrl → veremos condicional &&
    },
    {
      id: 3,
      name: "Portfolio Personal",
      desc: "Sitio web animado",
      techs: ["React", "Tailwind", "Framer Motion"],
      image: "https://via.placeholder.com/200",
      repoUrl: "https://github.com/tuuser/portfolio"
    },
    {
    id: 4,
    name: "E-commerce UI",
    desc: "Catálogo, carrito y checkout fake",
    techs: ["React", "React Router", "CSS"],
    image: "https://picsum.photos/seed/shop/320/180"
  },
  {
    id: 5,
    name: "Clima App",
    desc: "Consulta de clima por ciudad",
    techs: ["React", "Fetch", "OpenWeather"],
    image: "https://picsum.photos/seed/weather/320/180",
    repoUrl: "https://github.com/tuuser/weather-app"
  },
  {
    id: 6,
    name: "Notas Markdown",
    desc: "Editor simple con preview",
    techs: ["React", "Marked", "LocalStorage"],
    image: "https://picsum.photos/seed/notes/320/180"
  },
  {
    id: 7,
    name: "To-Do Colores",
    desc: "Lista con filtros y etiquetas",
    techs: ["React", "CSS", "A11y"],
    image: "https://picsum.photos/seed/todo/320/180"
  },
  {
    id: 8,
    name: "Galería Masonry",
    desc: "Imágenes con layout responsive",
    techs: ["React", "CSS Grid"],
    image: "https://picsum.photos/seed/gallery/320/180",
    repoUrl: "https://github.com/tuuser/gallery"
  }
  ];
  // AQUÍ VAMOS A LLAMAR A LOS DEMÁS COMPONENTES CON SUS RESPECTIVOS PROPS
  return (
    <>
       <button onClick={() => setDarkMode(!darkMode)} className="toggle-btn">
        {darkMode ? "☀️ Modo Claro" : "🌙 Modo Oscuro"}
      </button>
      <Header title="Mi Portafolio" subtitle="Proyectos recientes" />
      <ProjectList items={projects} />
      <Footer text="Karla Aguilar" year={new Date().getFullYear()} />
    </>
  );
}