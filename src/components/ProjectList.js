import React, { useState } from 'react';
import ProjectCard from './ProjectCard';
import ProjectFilter from './ProjectFilter';
import styles from '../styles/ProjectList.module.css';

const allProjects = [
  // Adicione aqui seus projetos com as propriedades necessárias
  {
    title: 'Portfolio',
    previewImage: require('../assets/PreviewP1.PNG'),
    techIcons: [
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg'
    ],
    description: 'Este portfolio foi completamente feito por mim, desde uma estrutura básica em HTML e CSS puros, até o produto final utilizando a biblioteca React. Este processo me ajudou a exercitar e aprimorar meus conhecimentos nas liguagens e apesar de desafiador me trouxe bastante aprendizado.',
    repoLink: 'https://github.com/gxbxD/gxbxD.github.io',
    deployLink: 'https://gxbxd.github.io/',
    type: 'frontend', // Tipo do projeto
  },
  // Adicione mais projetos aqui
];

function ProjectList() {
  const [filter, setFilter] = useState('all');
  const [visibleProjects, setVisibleProjects] = useState(6);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    setVisibleProjects(6); // Reiniciar a contagem de projetos visíveis ao mudar o filtro
  };

  const loadMoreProjects = () => {
    setVisibleProjects((prev) => prev + 6);
  };

  const filteredProjects = allProjects.filter(project =>
    filter === 'all' || project.type === filter
  );

  return (
    <div className={styles.projectContainer}>
      <ProjectFilter activeFilter={filter} onFilterChange={handleFilterChange} />
      <div className={styles.projects}>
        {filteredProjects.slice(0, visibleProjects).map((project, index) => (
          <ProjectCard
            className={`${styles.projectCard} ${styles.maxWidth}`}
            key={index}
            title={project.title}
            previewImage={project.previewImage}
            techIcons={project.techIcons}
            description={project.description}
            repoLink={project.repoLink}
            deployLink={project.deployLink}
          />
        ))}
      </div>
      {visibleProjects < filteredProjects.length && (
        <button className={styles.loadMore} onClick={loadMoreProjects}>Ver Mais</button>
      )}
    </div>
  );
}

export default ProjectList;