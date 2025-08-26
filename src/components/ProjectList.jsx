import React from 'react'
import ProjectCard from './ProjectCard'
import '../styles/ProjectList.css';

export default function ProjectList({items}) {
  return (
    <section className="project-list">
        {items.map(p => (
            <ProjectCard
            key={p.id}
            name={p.name}
            desc={p.desc}
            techs={p.techs}
            image={p.image}
            repoUrl={p.repoUrl}
            />
        ))}
    </section>
  );
}
//array.map(elemento => expresión)
///
/// .map() es un método de arrays en JavaScript.
/// Recorre cada elemento del arreglo.
/// Aplica una función a cada uno.
/// Devuelve un nuevo arreglo con el resultado.