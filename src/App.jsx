import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import DrawerAppBar from './components/DrawerAppBar'
import Home from "./pages/Home"
import Services from "./pages/Services"
import Contact from "./pages/Contact"
import Schedule from "./pages/Schedule"
import Login from "./pages/Login"
import { ThemeProvider, createTheme } from '@mui/material'
import { useState } from 'react'
import Footer from './components/Footer'

const darkTheme = createTheme({
  palette: {
    mode : 'dark',
  }
})

const lightTheme = createTheme({
  palette: {
    mode : 'light',
  }
})

function App() {
  const [dark, setDark] = useState(false)
  return (
    <ThemeProvider theme={dark? darkTheme: lightTheme}>
      <BrowserRouter>
        <DrawerAppBar setDark={setDark} dark={dark}/>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/services' element={<Services />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/schedule' element={<Schedule />} />
          <Route path='/login' element={<Login />} />
        </Routes>
        <Footer/>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
