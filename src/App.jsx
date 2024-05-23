import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Register from './pages/Register'
import Detail from './pages/Detail'
import Space from './pages/Space'
import Reservation from './pages/Reservation'

function App() {
  return (
    <div className="app w-full max-w-[430px] h-auto min-h-screen mx-auto bg-white shadow-md relative">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/products" element={<Space />} />
        <Route path="/products/:id" element={<Detail />} />
        <Route path="/products/:id/reservation" element={<Reservation />} />
      </Routes>
    </div>
  )
}

export default App
