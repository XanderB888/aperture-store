import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import api from '../api/axios'

function Orders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [expanded, setExpanded] = useState(null)
  const location = useLocation()

  useEffect(() => {
    api.get('/orders')
      .then(res => setOrders(res.data))
      .catch(() => setOrders([]))
      .finally(() => setLoading(false))
  }, [])

  const toggleExpand = (orderId) => {
    setExpanded(expanded === orderId ? null : orderId)
  }

  if (loading) return <div style={styles.status}>RETRIEVING ORDER HISTORY...</div>

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>ORDER HISTORY</h1>
      <p style={styles.subtitle}>ACQUISITION RECORDS — SUBJECT FILE</p>
      <div style={styles.divider} />

      {orders.length === 0 ? (
        <div style={styles.empty}>
          <p style={styles.emptyText}>NO ORDERS ON RECORD</p>
        </div>
      ) : (
        <div style={styles.orderList}>
          {orders.map(order => (
            <div key={order.id} style={styles.orderCard}>
              <div
                style={styles.orderHeader}
                onClick={() => toggleExpand(order.id)}
              >
                <div style={styles.orderLeft}>
                  <span style={styles.orderId}>
                    ORDER-{String(order.id).padStart(4, '0')}
                  </span>
                  <span style={styles.orderDate}>
                    {new Date(order.created_at).toLocaleDateString('en-GB', {
                      day: '2-digit',
                      month: 'short',
                      year: 'numeric'
                    })}
                  </span>
                </div>
                <div style={styles.orderRight}>
                  <span style={{
                    ...styles.orderStatus,
                    color: order.status === 'pending' ? '#ff6b00' : '#00ff88'
                  }}>
                    {order.status.toUpperCase()}
                  </span>
                  <span style={styles.orderTotal}>
                    £{(order.total_price / 100).toFixed(2)}
                  </span>
                  <span style={styles.expandIcon}>
                    {expanded === order.id ? '▲' : '▼'}
                  </span>
                </div>
              </div>

              {expanded === order.id && (
                <div style={styles.orderItems}>
                  <div style={styles.itemsHeader}>
                    <span style={styles.itemsLabel}>ITEM</span>
                    <span style={styles.itemsLabel}>QTY</span>
                    <span style={styles.itemsLabel}>UNIT PRICE</span>
                    <span style={styles.itemsLabel}>SUBTOTAL</span>
                  </div>
                  {order.items && order.items.map((item, index) => (
                    <div key={index} style={styles.itemRow}>
                      <span style={styles.itemName}>{item.name}</span>
                      <span style={styles.itemDetail}>{item.quantity}</span>
                      <span style={styles.itemDetail}>
                        £{(item.unit_price / 100).toFixed(2)}
                      </span>
                      <span style={styles.itemDetail}>
                        £{(item.unit_price * item.quantity / 100).toFixed(2)}
                      </span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    fontFamily: "'Courier New', monospace",
    padding: '40px',
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
  empty: {
    textAlign: 'center',
    padding: '80px 0',
  },
  emptyText: {
    color: '#444',
    fontSize: '12px',
    letterSpacing: '4px',
  },
  orderList: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  orderCard: {
    backgroundColor: '#111',
    border: '1px solid #1a1a1a',
    borderLeft: '2px solid #00d4ff44',
  },
  orderHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px 24px',
    cursor: 'pointer',
  },
  orderLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  orderId: {
    color: '#00d4ff',
    fontSize: '12px',
    letterSpacing: '3px',
  },
  orderDate: {
    color: '#444',
    fontSize: '10px',
    letterSpacing: '2px',
  },
  orderRight: {
    display: 'flex',
    alignItems: 'center',
    gap: '24px',
  },
  orderStatus: {
    fontSize: '10px',
    letterSpacing: '2px',
  },
  orderTotal: {
    color: '#ffffff',
    fontSize: '18px',
    fontWeight: 'bold',
  },
  expandIcon: {
    color: '#444',
    fontSize: '10px',
  },
  orderItems: {
    borderTop: '1px solid #1a1a1a',
    padding: '20px 24px',
  },
  itemsHeader: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    marginBottom: '12px',
  },
  itemsLabel: {
    color: '#444',
    fontSize: '9px',
    letterSpacing: '2px',
  },
  itemRow: {
    display: 'grid',
    gridTemplateColumns: '2fr 1fr 1fr 1fr',
    padding: '8px 0',
    borderBottom: '1px solid #0a0a0a',
  },
  itemName: {
    color: '#ffffff',
    fontSize: '11px',
    letterSpacing: '1px',
  },
  itemDetail: {
    color: '#999',
    fontSize: '11px',
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

export default Orders