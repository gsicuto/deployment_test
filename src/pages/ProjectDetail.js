import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import projectData from '../projects-data.json'

const ProjectDetail = () => {
  const [project, setProject] = useState({})

  const { projectId } = useParams()

  useEffect(() => {
    console.log(projectId)
    const foudedProject = projectData.find(
      (project) => project._id === projectId
    )
    setProject(foudedProject)
  }, [projectId])

  return (
    <div>
      <h1>Project Details</h1>
      <>
        <h2>{project?.name}</h2>
        <h2>Technologies:</h2>
        <ul>
          {project?.technologies?.split(',').map((technology, index) => {
            return <li key={index}>{technology}</li>
          })}
        </ul>
        <h2>year: {project?.year}</h2>
        <h2>Description:</h2>
        <p>{project?.description}</p>
      </>
    </div>
  )
}

export default ProjectDetail
