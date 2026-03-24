import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import api from '../api/axios'

function Products() {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    api.get('/products')
      .then(res => setProducts(res.data))
      .catch(() => setError('Failed to load products'))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return <div style={styles.status}>LOADING INVENTORY...</div>
  if (error) return <div style={styles.status}>{error}</div>

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <h1 style={styles.title}>APERTURE SCIENCE STORE</h1>
        <p style={styles.subtitle}>AUTHORIZED PERSONNEL AND TEST SUBJECTS ONLY</p>
        <div style={styles.divider} />
      </div>

      <div style={styles.grid}>
        {products.map(product => (
          <Link to={`/products/${product.id}`} key={product.id} style={styles.card}>
            <div style={styles.cardTop}>
              <span style={styles.cardTag}>UNIT-{String(product.id).padStart(3, '0')}</span>
            </div>
            <h2 style={styles.cardTitle}>{product.name}</h2>
            <p style={styles.cardDesc}>{product.description}</p>
            <div style={styles.cardFooter}>
              <span style={styles.price}>
                £{(product.price / 100).toFixed(2)}
              </span>
              <span style={styles.stock}>
                {product.quantity_in_stock} IN STOCK
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    fontFamily: "'Courier New', monospace",
    padding: '40px',
  },
  header: {
    marginBottom: '40px',
  },
  title: {
    color: '#ffffff',
    fontSize: '24px',
    letterSpacing: '6px',
    margin: '0 0 8px 0',
  },
  subtitle: {
    color: '#00d4ff',
    fontSize: '10px',
    letterSpacing: '4px',
    margin: '0 0 24px 0',
  },
  divider: {
    height: '1px',
    backgroundColor: '#00d4ff22',
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '24px',
    marginTop: '40px',
  },
  card: {
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderTop: '2px solid #00d4ff44',
    padding: '24px',
    textDecoration: 'none',
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    transition: 'border-color 0.2s',
    cursor: 'pointer',
  },
  cardTop: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cardTag: {
    color: '#00d4ff',
    fontSize: '10px',
    letterSpacing: '2px',
  },
  cardTitle: {
    color: '#ffffff',
    fontSize: '14px',
    letterSpacing: '2px',
    margin: '0',
    lineHeight: '1.4',
  },
  cardDesc: {
    color: '#666',
    fontSize: '12px',
    lineHeight: '1.6',
    margin: '0',
    flex: 1,
  },
  cardFooter: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderTop: '1px solid #1a1a1a',
    paddingTop: '12px',
    marginTop: '4px',
  },
  price: {
    color: '#00d4ff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  stock: {
    color: '#444',
    fontSize: '10px',
    letterSpacing: '2px',
  },
  status: {
    color: '#00d4ff',
    fontFamily: "'Courier New', monospace",
    fontSize: '12px',
    letterSpacing: '4px',
    padding: '40px',
    backgroundColor: '#0a0a0a',
    minHeight: '100vh',
  },
}

export default Products