import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

function Checkout() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [processing, setProcessing] = useState(false)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  useEffect(() => {
    api.get('/cart')
      .then(res => {
        if (res.data.items) {
          setCartItems(res.data.items)
        } else {
          setCartItems([])
        }
      })
      .catch(() => setError('Failed to load cart'))
      .finally(() => setLoading(false))
  }, [])

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  const handleCheckout = async () => {
    setProcessing(true)
    setError('')
    try {
      const res = await api.post('/checkout')
      navigate('/orders', { state: { newOrder: res.data.order } })
    } catch (err) {
      setError(err.response?.data?.error || 'Checkout failed')
      setProcessing(false)
    }
  }

  if (loading) return <div style={styles.status}>LOADING ORDER DATA...</div>

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
      <h1 style={styles.title}>ACQUISITION CONFIRMATION</h1>
      <p style={styles.subtitle}>REVIEW AND CONFIRM YOUR ORDER</p>
      <div style={styles.divider} />

      {error && <p style={styles.error}>⚠ {error}</p>}

      {cartItems.length === 0 ? (
        <div style={styles.empty}>
          <p style={styles.emptyText}>NO ITEMS TO CHECKOUT</p>
        </div>
      ) : (
        <div style={styles.layout}>
          <div style={styles.orderSummary}>
            <h2 style={styles.sectionTitle}>ORDER MANIFEST</h2>
            {cartItems.map(item => (
              <div key={item.id} style={styles.item}>
                <div style={styles.itemLeft}>
                  <span style={styles.itemTag}>
                    UNIT-{String(item.product_id).padStart(3, '0')}
                  </span>
                  <span style={styles.itemName}>{item.name}</span>
                </div>
                <div style={styles.itemRight}>
                  <span style={styles.itemQty}>x{item.quantity}</span>
                  <span style={styles.itemPrice}>
                    £{(item.price * item.quantity / 100).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}

            <div style={styles.divider} />
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>TOTAL</span>
              <span style={styles.totalPrice}>£{(total / 100).toFixed(2)}</span>
            </div>
          </div>

          <div style={styles.confirmPanel}>
            <h2 style={styles.sectionTitle}>AUTHORISATION</h2>
            <p style={styles.confirmText}>
              By proceeding, you acknowledge that Aperture Science
              is not liable for any side effects, dimensional rifts,
              or existential crises resulting from product use.
            </p>
            <div style={styles.divider} />
            <p style={styles.confirmText}>
              Payment will be processed upon confirmation.
              All sales are final. Cave Johnson approves this message.
            </p>
            <div style={styles.divider} />
            <button
              onClick={handleCheckout}
              style={{
                ...styles.confirmBtn,
                opacity: processing ? 0.6 : 1,
                cursor: processing ? 'not-allowed' : 'pointer'
              }}
              disabled={processing}
            >
              {processing ? 'PROCESSING...' : 'CONFIRM ACQUISITION →'}
            </button>
          </div>
        </div>
      )}
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
  inner: {
    maxWidth: '900px',
    margin: '0 auto',
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
    margin: '24px 0',
  },
  error: {
    color: '#ff6b00',
    fontSize: '12px',
    letterSpacing: '1px',
  },
  empty: {
    textAlign: 'center',
    padding: '80px 0',
  },
  emptyText: {
    color: '#444',
    fontSize: '12px',
    letterSpacing: '4px',
  },
  layout: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '40px',
    alignItems: 'start',
  },
  orderSummary: {
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderTop: '2px solid #00d4ff44',
    padding: '32px',
  },
  sectionTitle: {
    color: '#00d4ff',
    fontSize: '11px',
    letterSpacing: '4px',
    margin: '0 0 24px 0',
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '12px 0',
    borderBottom: '1px solid #1a1a1a',
  },
  itemLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  },
  itemTag: {
    color: '#00d4ff',
    fontSize: '9px',
    letterSpacing: '2px',
  },
  itemName: {
    color: '#ffffff',
    fontSize: '12px',
    letterSpacing: '1px',
  },
  itemRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
  },
  itemQty: {
    color: '#444',
    fontSize: '12px',
  },
  itemPrice: {
    color: '#ffffff',
    fontSize: '14px',
    minWidth: '80px',
    textAlign: 'right',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  totalLabel: {
    color: '#444',
    fontSize: '10px',
    letterSpacing: '3px',
  },
  totalPrice: {
    color: '#00d4ff',
    fontSize: '28px',
    fontWeight: 'bold',
  },
  confirmPanel: {
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderTop: '2px solid #ff6b0044',
    padding: '32px',
  },
  confirmText: {
    color: '#666',
    fontSize: '11px',
    lineHeight: '1.8',
    margin: '0',
    fontStyle: 'italic',
  },
  confirmBtn: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    border: 'none',
    padding: '16px 32px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    fontFamily: "'Courier New', monospace",
    width: '100%',
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

export default Checkout