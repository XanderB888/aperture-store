import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { user } = useAuth()

  return (
    <div style={styles.container}>

      {/* Hero */}
<div style={styles.hero}>
  <div style={styles.gridBg} />

  {/* Left content */}
  <div style={styles.heroContent}>
    <div style={styles.eyebrowRow}>
      <div style={styles.eyebrowLine} />
      <p style={styles.eyebrow}>APERTURE SCIENCE PRESENTS</p>
    </div>

    <h1 style={styles.heroTitle}>
      THE FUTURE<br />
      OF CONSUMER<br />
      <span style={styles.heroAccent}>TESTING.</span>
    </h1>

    <p style={styles.heroSubtitle}>
      Acquire the latest in portal technology, weighted storage
      solutions, and experimental gel compounds. All products
      cleared for human use. Mostly.
    </p>

    <div style={styles.heroBtns}>
      <Link to="/products" style={styles.primaryBtn}>
        BROWSE INVENTORY →
      </Link>
      {!user && (
        <Link to="/register" style={styles.secondaryBtn}>
          REGISTER AS SUBJECT
        </Link>
      )}
    </div>
  </div>

  {/* Right — Featured Product */}
  <div style={styles.heroVisual}>
    <div style={styles.featuredTag}>
      <div style={styles.featuredDot} />
      FEATURED PRODUCT
    </div>
    <Link to="/products/13" style={styles.heroProductLink}>
      <img
        src="/images/portal-device.png"
        alt="Aperture Science Hand-Held Portal Device"
        style={styles.heroProductImg}
      />
    </Link>
    <div style={styles.heroProductInfo}>
      <span style={styles.heroProductName}>
        APERTURE SCIENCE HAND-HELD PORTAL DEVICE
      </span>
      <span style={styles.heroProductPrice}>£149.99</span>
    </div>
    <Link to="/products/13" style={styles.heroProductBtn}>
      VIEW PRODUCT →
    </Link>
  </div>
</div>

      {/* Stats bar */}
      <div style={styles.statsBar}>
        <div style={styles.stat}>
          <span style={styles.statNumber}>8</span>
          <span style={styles.statLabel}>PRODUCTS</span>
        </div>
        <div style={styles.statDivider} />
        <div style={styles.stat}>
          <span style={styles.statNumber}>EST.</span>
          <span style={styles.statLabel}>1943</span>
        </div>
        <div style={styles.statDivider} />
        <div style={styles.stat}>
          <span style={styles.statNumber}>100%</span>
          <span style={styles.statLabel}>TEST APPROVED</span>
        </div>
        <div style={styles.statDivider} />
        <div style={styles.stat}>
          <span style={styles.statNumber}>∞</span>
          <span style={styles.statLabel}>SCIENCE</span>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Features */}
      <div style={styles.features}>
        <div style={styles.feature}>
          <div style={styles.featureNumber}>01</div>
          <h3 style={styles.featureTitle}>SCIENCE-APPROVED</h3>
          <div style={styles.featureLine} />
          <p style={styles.featureText}>
            Every product has been tested on willing subjects.
            Results may vary. Waivers available upon request.
          </p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureNumber}>02</div>
          <h3 style={styles.featureTitle}>FAST ACQUISITION</h3>
          <div style={styles.featureLine} />
          <p style={styles.featureText}>
            Orders processed in 3-5 business days.
            Portal-based delivery not yet available in all dimensions.
          </p>
        </div>
        <div style={styles.feature}>
          <div style={styles.featureNumber}>03</div>
          <h3 style={styles.featureTitle}>SECURE CHECKOUT</h3>
          <div style={styles.featureLine} />
          <p style={styles.featureText}>
            Your financial data is protected. Your test data
            belongs to Aperture Science in perpetuity.
          </p>
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* CTA */}
      <div style={styles.cta}>
        <div style={styles.ctaLeft}>
          <p style={styles.ctaQuote}>
            "We do what we must<br />because we can."
          </p>
          <p style={styles.ctaAuthor}>— Cave Johnson, CEO</p>
        </div>
        <div style={styles.ctaRight}>
          <Link to="/products" style={styles.primaryBtn}>
            START ACQUIRING →
          </Link>
          {!user && (
            <Link to="/register" style={styles.secondaryBtn}>
              CREATE ACCOUNT
            </Link>
          )}
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Footer */}
      <p style={styles.footer}>
        © APERTURE SCIENCE INC. — ALL RIGHTS RESERVED —
        SUBJECT PARTICIPATION IMPLIES CONSENT
      </p>
    </div>
  )
}

const styles = {
  container: {
    minHeight: '100vh',
    backgroundColor: '#0a0a0a',
    fontFamily: "'Courier New', monospace",
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '40px',
    alignItems: 'center',
    minHeight: '90vh',
    padding: '80px 80px',
    position: 'relative',
    overflow: 'hidden',
  },
  gridBg: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '60px 60px',
    zIndex: 0,
  },
  heroContent: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    gap: '32px',
  },
  eyebrowRow: {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  },
  eyebrowLine: {
    width: '32px',
    height: '1px',
    backgroundColor: '#00d4ff',
  },
  eyebrow: {
    color: '#00d4ff',
    fontSize: '10px',
    letterSpacing: '4px',
    margin: '0',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: '64px',
    letterSpacing: '2px',
    lineHeight: '1.1',
    margin: '0',
    fontWeight: 'bold',
  },
  heroAccent: {
    color: '#00d4ff',
  },
  heroSubtitle: {
    color: '#555',
    fontSize: '14px',
    lineHeight: '1.8',
    margin: '0',
    maxWidth: '440px',
    borderLeft: '2px solid #00d4ff22',
    paddingLeft: '16px',
  },
  heroBtns: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  heroVisual: {
    position: 'relative',
    zIndex: 1,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
    backgroundColor: '#0d0d0d',
    border: '1px solid #1a1a1a',
    borderTop: '2px solid #00d4ff44',
    padding: '40px',
  },
  heroLogo: {
    width: '320px',
    height: 'auto',
    filter: 'invert(1)',
    opacity: '0.85',
  },
  heroLogoSub: {
    color: '#333',
    fontSize: '11px',
    letterSpacing: '6px',
    margin: '0',
  },
  primaryBtn: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    textDecoration: 'none',
    padding: '16px 32px',
    fontSize: '12px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    fontFamily: "'Courier New', monospace",
    display: 'inline-block',
    transition: 'background-color 0.2s',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#00d4ff',
    textDecoration: 'none',
    padding: '16px 32px',
    fontSize: '12px',
    letterSpacing: '3px',
    border: '1px solid #00d4ff33',
    fontFamily: "'Courier New', monospace",
    display: 'inline-block',
  },
  statsBar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0',
    backgroundColor: '#0d0d0d',
    borderTop: '1px solid #00d4ff11',
    borderBottom: '1px solid #00d4ff11',
    padding: '24px 80px',
  },
  stat: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '4px',
    padding: '0 48px',
  },
  statNumber: {
    color: '#00d4ff',
    fontSize: '28px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  statLabel: {
    color: '#333',
    fontSize: '9px',
    letterSpacing: '3px',
  },
  statDivider: {
    width: '1px',
    height: '40px',
    backgroundColor: '#1a1a1a',
  },
  divider: {
    height: '1px',
    backgroundColor: '#00d4ff11',
    margin: '0 80px',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '0',
    padding: '80px 80px',
  },
  featuredTag: {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#00d4ff',
  fontSize: '16px',
  letterSpacing: '3px',
  alignSelf: 'flex-start',
},
featuredDot: {
  width: '8px',
  height: '8px',
  borderRadius: '50%',
  backgroundColor: '#00d4ff',
},
heroProductLink: {
  display: 'block',
  width: '100%',
},
heroProductImg: {
  width: '100%',
  height: '400px',
  objectFit: 'contain',
  padding: '10px',
},
heroProductInfo: {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  borderTop: '1px solid #1a1a1a',
  paddingTop: '16px',
},
heroProductName: {
  color: '#ffffff',
  fontSize: '13px',
  letterSpacing: '1px',
  maxWidth: '240px',
  lineHeight: '1.4',
},
heroProductPrice: {
  color: '#00d4ff',
  fontSize: '24px',
  fontWeight: 'bold',
},
heroProductBtn: {
  color: '#000',
  backgroundColor: '#00d4ff',
  textDecoration: 'none',
  padding: '12px 24px',
  fontSize: '13px',
  fontWeight: 'bold',
  letterSpacing: '3px',
  fontFamily: "'Courier New', monospace",
  alignSelf: 'flex-start',
  marginTop: '8px',
},
  feature: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    padding: '0 40px 0 0',
    borderRight: '1px solid #0d0d0d',
  },
  featureNumber: {
    color: '#00d4ff',
    fontSize: '11px',
    letterSpacing: '2px',
    opacity: '0.5',
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: '13px',
    letterSpacing: '3px',
    margin: '0',
  },
  featureLine: {
    width: '24px',
    height: '1px',
    backgroundColor: '#00d4ff',
    opacity: '0.4',
  },
  featureText: {
    color: '#444',
    fontSize: '12px',
    lineHeight: '1.8',
    margin: '0',
    fontStyle: 'italic',
  },
  cta: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '80px 80px',
    gap: '40px',
  },
  ctaLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  ctaQuote: {
    color: '#ffffff',
    fontSize: '32px',
    letterSpacing: '1px',
    margin: '0',
    fontStyle: 'italic',
    lineHeight: '1.4',
  },
  ctaAuthor: {
    color: '#333',
    fontSize: '10px',
    letterSpacing: '3px',
    margin: '0',
  },
  ctaRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
    alignItems: 'flex-end',
  },
  footer: {
    color: '#1a1a1a',
    fontSize: '9px',
    letterSpacing: '3px',
    textAlign: 'center',
    padding: '32px 0',
    margin: '0',
  },
}

export default Home;