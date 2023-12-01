import React, { useEffect, useState } from 'react'
import { Navigate, Link } from 'react-router-dom'
import projectsData from '../projects-data.json'

const ProjectsPage = ({ isLoggedIn }) => {
  const [projects, setProjects] = useState([])
  const [search, setSearch] = useState('')

  useEffect(() => {
    setProjects(projectsData)
  }, [])

  return (
    <>
      {isLoggedIn ? (
        <div>
          <h1>Projects</h1>
          <input
            type='text'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          ></input>
          <Link to={`/project-search?text=${search}`}>Search</Link>
          {projects.map((project) => {
            return (
              <div key={project._id} className='project'>
                <Link to={`/projects/${project._id}`}>{project.name}</Link>
                <p>{project.technologies}</p>
              </div>
            )
          })}
        </div>
      ) : (
        <Navigate to='/notlogged' />
      )}
    </>
  )
}

export default ProjectsPage
