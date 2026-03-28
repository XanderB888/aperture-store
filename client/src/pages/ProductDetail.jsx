import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import api from '../api/axios'
import { useAuth } from '../context/AuthContext'

function ProductDetail() {
  const { id } = useParams()
  const { user } = useAuth()
  const navigate = useNavigate()
  const [product, setProduct] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const [message, setMessage] = useState('')
  const [quantity, setQuantity] = useState(1)

  useEffect(() => {
    api.get(`/products/${id}`)
      .then(res => setProduct(res.data))
      .catch(() => setError('Product not found'))
      .finally(() => setLoading(false))
  }, [id])

  const handleAddToCart = async () => {
    if (!user) {
      navigate('/login')
      return
    }
    try {
      await api.post('/cart', { product_id: product.id, quantity })
      setMessage('ITEM ADDED TO CART')
      setTimeout(() => setMessage(''), 3000)
    } catch (err) {
      setMessage('FAILED TO ADD ITEM')
    }
  }

  if (loading) return <div style={styles.status}>LOADING UNIT DATA...</div>
  if (error) return <div style={styles.status}>{error}</div>

  return (
    <div style={styles.container}>
      <button onClick={() => navigate('/products')} style={styles.back}>
        ← RETURN TO INVENTORY
      </button>

      <div style={styles.panel}>
        <div style={styles.tag}>UNIT-{String(product.id).padStart(3, '0')}</div>

        <h1 style={styles.title}>{product.name}</h1>
        <div style={styles.divider} />

        <p style={styles.description}>{product.description}</p>

        <div style={styles.details}>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>ACQUISITION COST</span>
            <span style={styles.price}>£{(product.price / 100).toFixed(2)}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>UNITS AVAILABLE</span>
            <span style={styles.detailValue}>{product.quantity_in_stock}</span>
          </div>
          <div style={styles.detailRow}>
            <span style={styles.detailLabel}>CLEARANCE STATUS</span>
            <span style={styles.cleared}>APPROVED FOR ACQUISITION</span>
          </div>
        </div>

        <div style={styles.divider} />

        <div style={styles.cartRow}>
          <div style={styles.quantityControl}>
            <button
              style={styles.qtyBtn}
              onClick={() => setQuantity(q => Math.max(1, q - 1))}
            >−</button>
            <span style={styles.qtyValue}>{quantity}</span>
            <button
              style={styles.qtyBtn}
              onClick={() => setQuantity(q => Math.min(product.quantity_in_stock, q + 1))}
            >+</button>
          </div>

          <button onClick={handleAddToCart} style={styles.addButton}>
            ADD TO CART
          </button>
        </div>

        {message && <p style={styles.message}>⊕ {message}</p>}

        <p style={styles.warning}>
          ⚠ Aperture Science is not responsible for any physical, psychological,
          or existential damage caused by use of this product.
        </p>
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
  back: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#00d4ff',
    fontSize: '11px',
    letterSpacing: '2px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
    marginBottom: '32px',
    padding: '0',
  },
  panel: {
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderTop: '3px solid #00d4ff',
    padding: '48px',
    maxWidth: '700px',
  },
  tag: {
    color: '#00d4ff',
    fontSize: '10px',
    letterSpacing: '3px',
    marginBottom: '16px',
  },
  title: {
    color: '#ffffff',
    fontSize: '28px',
    letterSpacing: '3px',
    margin: '0 0 24px 0',
    lineHeight: '1.3',
  },
  divider: {
    height: '1px',
    backgroundColor: '#00d4ff22',
    margin: '24px 0',
  },
  description: {
    color: '#999',
    fontSize: '14px',
    lineHeight: '1.8',
    margin: '0',
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    margin: '24px 0',
  },
  detailRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  detailLabel: {
    color: '#444',
    fontSize: '10px',
    letterSpacing: '3px',
  },
  detailValue: {
    color: '#ffffff',
    fontSize: '14px',
  },
  price: {
    color: '#00d4ff',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  cleared: {
    color: '#00ff88',
    fontSize: '10px',
    letterSpacing: '2px',
  },
  cartRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
    marginTop: '8px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    border: '1px solid #333',
    padding: '8px 16px',
  },
  qtyBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#00d4ff',
    fontSize: '18px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
    padding: '0',
  },
  qtyValue: {
    color: '#ffffff',
    fontSize: '16px',
    minWidth: '24px',
    textAlign: 'center',
  },
  addButton: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    border: 'none',
    padding: '14px 32px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
    flex: 1,
  },
  message: {
    color: '#00ff88',
    fontSize: '11px',
    letterSpacing: '3px',
    marginTop: '16px',
  },
  warning: {
    color: '#333',
    fontSize: '10px',
    lineHeight: '1.6',
    marginTop: '32px',
    fontStyle: 'italic',
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

export default ProductDetail