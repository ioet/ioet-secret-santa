import { Routes, Route, BrowserRouter } from "react-router-dom";
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path='/' element={<h1>IOET Secret Santa</h1>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
