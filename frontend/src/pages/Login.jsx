import { signInWithEmailAndPassword } from 'firebase/auth'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { FaEye } from "react-icons/fa6"
import { FiEyeOff } from "react-icons/fi";
import { auth } from '../firebase/firebase'
const Login = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()
  const [hide, setHide] = useState(false)

  const hideShowHandler = () => {
    setHide(!hide)
  }


  const handleLogin = async (e) => {
    e.preventDefault()

    if (email === "" || password === "") {
      toast.error('Please enter your email password')
    }

    try {
      const user = await signInWithEmailAndPassword(auth, email, password)
      await localStorage.setItem('user', JSON.stringify(user))
      toast.success("Login successfully")
      navigate('/')
    } catch (error) {
      console.log(error);
      toast.error('login failed',)
    }
  }
  return (
    <div className="contact_container">
      <form onSubmit={handleLogin}>
        <h2>Login</h2>

        <div className="form-group">

        </div>

        <div className="form-group">
          <input type="text" placeholder="Email"

            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <input type={hide ? 'text' : 'password'} placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
          <label onClick={hideShowHandler}>{hide ? <FaEye /> : <FiEyeOff />}</label>
        </div>

        <div className="form-group">
          <button type='submit'>Login</button>
          <span>
            <Link to="/signup">SignUp</Link>
          </span>
        </div>
      </form>
    </div>
  )
}

export default Login