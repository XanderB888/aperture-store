import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

function Register() {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    try {
      await api.post('/auth/register', { username, email, password })
      navigate('/login')
    } catch (err) {
      setError(err.response?.data?.error || 'Registration failed')
    }
  }

  return (
    <div style={styles.container}>
      <div style={styles.panel}>
        <img 
          src="/images/Aperture_Science_logo.png" 
          alt="Aperture Science" 
          style={styles.logoImg} 
        />
        <h1 style={styles.title}>APERTURE STORE</h1>
        <p style={styles.subtitle}>SUBJECT REGISTRATION PORTAL</p>
        <div style={styles.divider} />

        <form onSubmit={handleSubmit} style={styles.form}>
          <label style={styles.label}>SUBJECT IDENTIFIER</label>
          <input
            style={styles.input}
            type="text"
            placeholder="Enter username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />

          <label style={styles.label}>SUBJECT EMAIL</label>
          <input
            style={styles.input}
            type="email"
            placeholder="Enter email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <label style={styles.label}>ACCESS CODE</label>
          <input
            style={styles.input}
            type="password"
            placeholder="Enter password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          {error && <p style={styles.error}>⚠ {error}</p>}

          <button type="submit" style={styles.button}>
            INITIALIZE SUBJECT
          </button>
        </form>

        <p style={styles.link}>
          Already registered?{' '}
          <Link to="/login" style={styles.linkText}>
            Access terminal →
          </Link>
        </p>

        <p style={styles.footer}>
          Aperture Science — "We do what we must because we can."
        </p>
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: "'Courier New', monospace",
  },
  panel: {
    backgroundColor: '#111',
    border: '1px solid #00d4ff33',
    borderTop: '3px solid #00d4ff',
    padding: '48px 40px',
    width: '100%',
    maxWidth: '420px',
    boxShadow: '0 0 40px #00d4ff15',
  },
  logoImg: {
    width: '120px',
    height: 'auto',
    display: 'block',
    margin: '0 auto 16px auto',
    filter: 'invert(1)',
  },
  title: {
    color: '#ffffff',
    fontSize: '26px',
    fontWeight: 'bold',
    textAlign: 'center',
    letterSpacing: '6px',
    margin: '0 0 6px 0',
  },
  subtitle: {
    color: '#00d4ff',
    fontSize: '12px',
    textAlign: 'center',
    letterSpacing: '4px',
    margin: '0 0 24px 0',
  },
  divider: {
    height: '1px',
    backgroundColor: '#00d4ff22',
    marginBottom: '32px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  label: {
    color: '#00d4ff',
    fontSize: '12px',
    letterSpacing: '3px',
    marginBottom: '4px',
  },
  input: {
    backgroundColor: '#0a0a0a',
    border: '1px solid #333',
    borderBottom: '1px solid #00d4ff55',
    color: '#ffffff',
    padding: '14px 16px',
    fontSize: '16px',
    fontFamily: "'Courier New', monospace",
    outline: 'none',
    marginBottom: '16px',
    transition: 'border-color 0.2s',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    border: 'none',
    padding: '16px',
    fontSize: '14px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
    marginTop: '8px',
    transition: 'background-color 0.2s',
    width: '100%',
  },
  error: {
    color: '#ff6b00',
    fontSize: '12px',
    letterSpacing: '1px',
  },
  link: {
    color: '#666',
    fontSize: '12px',
    textAlign: 'center',
    marginTop: '24px',
  },
  linkText: {
    color: '#00d4ff',
    textDecoration: 'none',
  },
  footer: {
    color: '#333',
    fontSize: '10px',
    textAlign: 'center',
    marginTop: '32px',
    fontStyle: 'italic',
  },
}

export default Register