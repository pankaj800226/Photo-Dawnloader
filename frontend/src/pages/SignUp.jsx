import { useState } from 'react'
import toast from 'react-hot-toast'
import { Link, useNavigate } from 'react-router-dom'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
const SignUp = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handlesignup = async (e) => {
    e.preventDefault()
    if (email === "" || password === "") {
      toast.error('Please enter your email password')
    }

    try {
      await createUserWithEmailAndPassword(auth, email, password)
      toast.success('registered successfully')
      navigate('/login')
    } catch (error) {
      console.log(error);
      toast.success('Already registered successfully')

    }

  }
  return (
    <div className="contact_container">
      <form onSubmit={handlesignup}>
        <h2>Signup</h2>

        <div className="form-group">

        </div>

        <div className="form-group">
          <input type="text" placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>

        <div className="form-group">
          <input type='text' placeholder="Password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}

          />
          {/* <label onClick={hideShowHandler}>{hide ? <FaEye /> : <FiEyeOff />}</label> */}
        </div>

        <div className="form-group">
          <button type='submit'>Register</button>
          <span>
            Already have an account? <Link to="/login">Login</Link></span>
        </div>
      </form>
    </div>
  )
}

export default SignUp