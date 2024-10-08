import { Route, Routes } from 'react-router-dom'
import './App.css'
import Landing from './pages/Landing'
import History from './pages/History'
import Home from './pages/Home'
import Header from './components/Header'
import Footer from './components/Footer'

function App() {

  return (
    <>
    <Header/>
    <Routes>
      <Route path='/' element={<Landing/>}/>  
      <Route path='/history' element={<History/>}/>
      <Route path='/home' element={<Home/>}/>
    </Routes>
     <Footer/>
    </>
  )
}

export default App
