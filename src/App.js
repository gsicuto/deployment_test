import logo from './logo.svg'
import './App.css'
import { Routes, Route } from 'react-router-dom'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import Navbar from './components/Navbar'
import ErrorPage from './pages/ErrorPage'
import { useState } from 'react'
import ProjectsPage from './pages/ProjectsPage'
import ProjectDetail from './pages/ProjectDetail'
import SearchProject from './pages/SearchProject'

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(true)
  return (
    <div className='App'>
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/about' element={<AboutPage />} />
        <Route
          path='/projects'
          element={<ProjectsPage isLoggedIn={isLoggedIn} />}
        />
        <Route path='/projects/:projectId' element={<ProjectDetail />} />
        <Route path='/project-search' element={<SearchProject />} />
        <Route path='*' element={<ErrorPage />} />
      </Routes>
    </div>
  )
}

export default App
