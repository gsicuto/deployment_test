import React, { useEffect, useState } from 'react'
import { useQuery } from 'react-router-dom'

import projectData from '../projects-data.json'

const SearchProject = () => {
  //   let query = useQuery()
  //   const [findedProjects, setFindedProjects] = useState([])

  //   console.log(searchParams.get('name'))
  //   useEffect(() => {
  //     const name = query.get('name')
  //     const projects = projectData.filter((project) =>
  //       project.name?.toLowerCase().includes(name?.toLowerCase())
  //     )

  //     setFindedProjects(projects)
  //   }, [])

  return (
    <>
      <div>SearchProject</div>
      {/* {findedProjects?.map((project) => (
        <h1>{project?.name}</h1>
      ))} */}
    </>
  )
}

export default SearchProject
