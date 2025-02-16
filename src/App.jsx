// Path: src\App.jsx
import { useState } from 'react'
import './App.css'
import Header from './Header'
import Sidebar from './Sidebar'
import Home from './Home'
import User from './Components/User/User'
import PodcastDetails from './Components/podcastDetails/PodcastDetails'
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Dashboard from './Components/Dashboard/Dashboard'

function App() {
  const [openSidebarToggle, setOpenSidebarToggle] = useState(false)

  const OpenSidebar = () => {
    setOpenSidebarToggle(!openSidebarToggle)
  }

  return (
    <div className='grid-container'>
      <Router>
      <Header OpenSidebar={OpenSidebar}/>
      <Sidebar openSidebarToggle={openSidebarToggle} OpenSidebar={OpenSidebar}/>
      <Routes>
        <Route path='/' exact Component={Dashboard}></Route>
        <Route path='/podcast' exact Component={PodcastDetails}></Route>
        <Route path='/user' exact Component={User}></Route>
        {/* <Route path='/' exact Component={Dashboard}></Route>
        <Route path='/' exact Component={Dashboard}></Route>
        <Route path='/' exact Component={Dashboard}></Route> */}
      </Routes>
      </Router>          
     
    </div>
  )
}

export default App
