import { BrowserRouter, Routes, Route } from "react-router-dom"
import './App.css'

import Navbar from "./components/Navbar"
import HeroSeaction from "./pages/seactions/HeroSeaction"

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<HeroSeaction />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
