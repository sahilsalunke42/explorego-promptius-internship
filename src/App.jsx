import React from 'react'
import Home from './pages/Home.jsx'
import About from './pages/About.jsx'
import Login from './pages/auth/Login.jsx'
import Signup from './pages/auth/Signup.jsx'
import SearchResults from './pages/SearchResults.jsx'
import ExplorePage from './pages/ExplorePage.jsx'
import TripDetails from './pages/TripDetails.jsx'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'


const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/explore" element={<ExplorePage />} />
        <Route path="/trips/:tripId" element={<TripDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/search-results" element={<SearchResults />} />
      </Routes>
    </div>
  )
}

export default App