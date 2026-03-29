import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Navbar() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const handleLogout = async () => {
    await logout()
    navigate('/login')
  }

  return (
    <nav style={styles.nav}>
      <Link to="/" style={styles.logo}>
        <img src="/images/Aperture_Science_logo.png" alt="Aperture Store" style={styles.logoImg} />
      </Link>

      <div style={styles.links}>
        <Link to="/products" style={styles.link}>PRODUCTS</Link>
        <Link to="/about" style={styles.link}>ABOUT</Link>

        {user ? (
          <>
            <Link to="/cart" style={styles.link}>CART</Link>
            <Link to="/orders" style={styles.link}>ORDERS</Link>
            <button onClick={handleLogout} style={styles.button}>
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link to="/login" style={styles.link}>LOGIN</Link>
            <Link to="/register" style={styles.linkButton}>REGISTER</Link>
          </>
        )}
      </div>
    </nav>
  )
}

const styles = {
  nav: {
    backgroundColor: '#111',
    borderBottom: '1px solid #00d4ff22',
    padding: '0 40px',
    height: '60px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontFamily: "'Courier New', monospace",
    position: 'sticky',
    top: 0,
    zIndex: 100,
  },
  logo: {
    textDecoration: 'none',
    display: 'flex',
    alignItems: 'center',
  },
  logoImg: {
    height: '40px',
    width: 'auto',
    filter: 'invert(1)',
  },
  links: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  link: {
    color: '#999',
    textDecoration: 'none',
    fontSize: '11px',
    letterSpacing: '2px',
    transition: 'color 0.2s',
  },
  linkButton: {
    color: '#000',
    backgroundColor: '#00d4ff',
    textDecoration: 'none',
    fontSize: '11px',
    letterSpacing: '2px',
    padding: '8px 16px',
    fontFamily: "'Courier New', monospace",
  },
  button: {
    color: '#ff6b00',
    backgroundColor: 'transparent',
    border: '1px solid #ff6b00',
    fontSize: '11px',
    letterSpacing: '2px',
    padding: '8px 16px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
  },
}

export default Navbar