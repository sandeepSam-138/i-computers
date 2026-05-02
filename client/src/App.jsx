import { Route, Routes } from 'react-router-dom'
import './App.css'
import ProductCard from './components/productCard'
import HomePage from './components/homePage'
import AdminPage from './components/adminPage'

function App() {
 
  return (

      <div className= 'w-[700px] h-[700px] border-[6px] flex items-center justify-center'>
        <Routes>
          <Route path='/' element={<HomePage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </div>

  )
}

export default App
