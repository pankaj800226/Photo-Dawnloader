import Home from "./components/Home"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Toaster } from 'react-hot-toast'
import Header from "./components/Header";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import { ProtectedRoute } from './protectedRoute/ProtectedAuth'
// import style component
import './styles/home.scss'
import './styles/header.scss'
import './styles/signup.scss'


const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          } />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login />} />
        </Routes>
        <Toaster />
      </Router>
    </div>
  )
}

export default App