import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { IoMenu } from "react-icons/io5";

const Header = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate()

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();

    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }


  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const user = JSON.parse(localStorage.getItem('user'))

  const logOut = () => {
    localStorage.clear('user')
    navigate('/login')
  }

  return (
    <div className="header">
      <h2>Pexels app</h2>
      {isMobile ? (
        <button className="mobile-menu-button" onClick={toggleMenu}>
          <IoMenu />
        </button>
      ) : (
        <nav>
          <Link to={'/'}>Home</Link>
          {/* <Link className='signup' to={'/signup'}>SignUp</Link> */}

          {user && <button className="signup" onClick={logOut}>Logout</button>}


        </nav>
      )}
      {isMobile && isMenuOpen && (
        <nav className="mobile-menu">
          <Link to={'/'} onClick={toggleMenu}>Home</Link>
          {/* <Link className='signup' to={'/signup'}>SignUp</Link> */}
          {user && <button className="signup" onClick={logOut}>Logout</button>}

        </nav>
      )}
    </div>
  );
};

export default Header;
