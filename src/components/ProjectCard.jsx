import React from 'react'
import '../styles/ProjectCard.css';
import { motion } from "framer-motion";

//Básicamente este es un nieto atómico
export default function ProjectCard({name, desc,techs,image, repoUrl}) {
  return (
    <motion.div
      className="card"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        rotate: 4,            // rota ligeramente
        scale: 1.05,          // agranda un poquito
        boxShadow: "0px 8px 25px rgba(255, 105, 180, 0.5)" // glow rosado
      }}
    >
    <div className="card">
    <img src={image} alt={name} width="200" />
    <h3>{name}</h3>
    <p>{desc}</p>

    <ul>
        {techs.map(t => <li key={t}>{t}</li>)}
    </ul>


    {repoUrl && (
        <a href={repoUrl} target="_blank" rel="noreferrer">
         Ver repo
        </a>
    )}
    </div>
    </motion.div>  
    
  )
}
