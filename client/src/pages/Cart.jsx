import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../api/axios'

function Cart() {
  const [cartItems, setCartItems] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const fetchCart = () => {
    api.get('/cart')
      .then(res => {
        if (res.data.items) {
          setCartItems(res.data.items)
        } else {
          setCartItems([])
        }
      })
      .catch(() => setCartItems([]))
      .finally(() => setLoading(false))
  }

  useEffect(() => {
    fetchCart()
  }, [])

  const handleRemove = async (itemId) => {
    try {
      await api.delete(`/cart/${itemId}`)
      fetchCart()
    } catch (err) {
      setError('Failed to remove item')
    }
  }

  const handleUpdate = async (itemId, quantity) => {
    if (quantity < 1) return
    try {
      await api.put(`/cart/${itemId}`, { quantity })
      fetchCart()
    } catch (err) {
      setError('Failed to update quantity')
    }
  }

  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0)

  if (loading) return <div style={styles.status}>LOADING CART DATA...</div>

  return (
    <div style={styles.container}>
      <div style={styles.inner}>
      <h1 style={styles.title}>ACQUISITION QUEUE</h1>
      <p style={styles.subtitle}>ITEMS PENDING PROCUREMENT</p>
      <div style={styles.divider} />

      {error && <p style={styles.error}>⚠ {error}</p>}

      {cartItems.length === 0 ? (
        <div style={styles.empty}>
          <p style={styles.emptyText}>NO ITEMS IN QUEUE</p>
          <Link to="/products" style={styles.browseLink}>
            BROWSE INVENTORY →
          </Link>
        </div>
      ) : (
        <>
          <div style={styles.itemList}>
            {cartItems.map(item => (
              <div key={item.id} style={styles.item}>
                <div style={styles.itemInfo}>
                  <span style={styles.itemTag}>
                    UNIT-{String(item.product_id).padStart(3, '0')}
                  </span>
                  <Link
                    to={`/products/${item.product_id}`}
                    style={styles.itemName}
                  >
                    {item.name}
                  </Link>
                </div>

                <div style={styles.itemControls}>
                  <div style={styles.quantityControl}>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => handleUpdate(item.id, item.quantity - 1)}
                    >−</button>
                    <span style={styles.qtyValue}>{item.quantity}</span>
                    <button
                      style={styles.qtyBtn}
                      onClick={() => handleUpdate(item.id, item.quantity + 1)}
                    >+</button>
                  </div>

                  <span style={styles.itemPrice}>
                    £{(item.price * item.quantity / 100).toFixed(2)}
                  </span>

                  <button
                    style={styles.removeBtn}
                    onClick={() => handleRemove(item.id)}
                  >
                    REMOVE
                  </button>
                </div>
              </div>
            ))}
          </div>

          <div style={styles.summary}>
            <div style={styles.divider} />
            <div style={styles.totalRow}>
              <span style={styles.totalLabel}>TOTAL ACQUISITION COST</span>
              <span style={styles.totalPrice}>
                £{(total / 100).toFixed(2)}
              </span>
            </div>
            <button
              onClick={() => navigate('/checkout')}
              style={styles.checkoutBtn}
            >
              PROCEED TO CHECKOUT →
            </button>
          </div>
        </>
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
    marginBottom: '24px',
  },
  browseLink: {
    color: '#00d4ff',
    textDecoration: 'none',
    fontSize: '11px',
    letterSpacing: '3px',
  },
  itemList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  item: {
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderLeft: '2px solid #00d4ff44',
    padding: '20px 24px',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    gap: '24px',
  },
  itemInfo: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
    flex: 1,
  },
  itemTag: {
    color: '#00d4ff',
    fontSize: '10px',
    letterSpacing: '2px',
  },
  itemName: {
    color: '#ffffff',
    fontSize: '13px',
    letterSpacing: '1px',
    textDecoration: 'none',
  },
  itemControls: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  quantityControl: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
    border: '1px solid #333',
    padding: '6px 12px',
  },
  qtyBtn: {
    backgroundColor: 'transparent',
    border: 'none',
    color: '#00d4ff',
    fontSize: '16px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
    padding: '0',
  },
  qtyValue: {
    color: '#ffffff',
    fontSize: '14px',
    minWidth: '20px',
    textAlign: 'center',
  },
  itemPrice: {
    color: '#00d4ff',
    fontSize: '16px',
    fontWeight: 'bold',
    minWidth: '80px',
    textAlign: 'right',
  },
  removeBtn: {
    backgroundColor: 'transparent',
    border: '1px solid #333',
    color: '#ff6b00',
    fontSize: '10px',
    letterSpacing: '2px',
    padding: '8px 12px',
    cursor: 'pointer',
    fontFamily: "'Courier New', monospace",
  },
  summary: {
    marginTop: '16px',
  },
  totalRow: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '24px',
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
  checkoutBtn: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    border: 'none',
    padding: '16px 32px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    cursor: 'pointer',
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

export default Cart