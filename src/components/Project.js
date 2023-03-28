import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Project = () => {
  const navigate = useNavigate();
  const [projects, setProjects] = useState('');

  const handleProject = (event) => {
    setProjects(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (projects) {
      navigate('/task');
    }
    localStorage.setItem('projects', projects);
  };

  return (
    <div>
      <h2>Projects</h2>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='projects'
          value={projects}
          placeholder='Project Name'
          onChange={handleProject}
        />
        <button type='submit'>Add Project</button>
      </form>
    </div>
  );
};

export default Project;
