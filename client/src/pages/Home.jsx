import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

function Home() {
  const { user } = useAuth()

  return (
    <div style={styles.container}>
      {/* Hero Section */}
      <div style={styles.hero}>
        <div style={styles.heroContent}>
          <p style={styles.eyebrow}>APERTURE SCIENCE PRESENTS</p>
          <h1 style={styles.heroTitle}>
            THE FUTURE OF<br />
            <span style={styles.heroAccent}>CONSUMER TESTING</span>
          </h1>
          <p style={styles.heroSubtitle}>
            Acquire the latest in portal technology, weighted storage solutions,
            and experimental gel compounds. All products cleared for human use.
            Mostly.
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

        <div style={styles.heroVisual}>
          <img 
          src="/images/Aperture_Science_logo.png" 
          alt="Aperture Science" 
          style={styles.logoImg} 
        />
          <div style={styles.scanline} />
        </div>
      </div>

      {/* Divider */}
      <div style={styles.divider} />

      {/* Features */}
      <div style={styles.features}>
        <div style={styles.feature}>
          <span style={styles.featureIcon}>◈</span>
          <h3 style={styles.featureTitle}>SCIENCE-APPROVED</h3>
          <p style={styles.featureText}>
            Every product has been tested on willing subjects.
            Results may vary. Waivers available upon request.
          </p>
        </div>
        <div style={styles.feature}>
          <span style={styles.featureIcon}>◈</span>
          <h3 style={styles.featureTitle}>FAST ACQUISITION</h3>
          <p style={styles.featureText}>
            Orders processed in 3-5 business days.
            Portal-based delivery not yet available in all dimensions.
          </p>
        </div>
        <div style={styles.feature}>
          <span style={styles.featureIcon}>◈</span>
          <h3 style={styles.featureTitle}>SECURE CHECKOUT</h3>
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
        <p style={styles.ctaQuote}>
          "We do what we must because we can."
        </p>
        <p style={styles.ctaAuthor}>— Cave Johnson, CEO, Aperture Science</p>
        <Link to="/products" style={styles.primaryBtn}>
          START ACQUIRING →
        </Link>
      </div>

      {/* Footer */}
      <div style={styles.divider} />
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
    padding: '0 40px 40px 40px',
  },
  hero: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '80px',
    alignItems: 'center',
    minHeight: '80vh',
    padding: '80px 0',
  },
  heroContent: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
    padding: '0 0 0 70px '
  },
  eyebrow: {
    color: '#00d4ff',
    fontSize: '10px',
    letterSpacing: '4px',
    margin: '0',
  },
  heroTitle: {
    color: '#ffffff',
    fontSize: '48px',
    letterSpacing: '4px',
    lineHeight: '1.2',
    margin: '0',
  },
  heroAccent: {
    color: '#00d4ff',
  },
  heroSubtitle: {
    color: '#666',
    fontSize: '13px',
    lineHeight: '1.8',
    margin: '0',
    maxWidth: '480px',
  },
  heroBtns: {
    display: 'flex',
    gap: '16px',
    flexWrap: 'wrap',
  },
  primaryBtn: {
    backgroundColor: '#00d4ff',
    color: '#000000',
    textDecoration: 'none',
    padding: '14px 28px',
    fontSize: '11px',
    fontWeight: 'bold',
    letterSpacing: '3px',
    fontFamily: "'Courier New', monospace",
    display: 'inline-block',
  },
  logoImg: {
    width: '620px',
    height: 'auto',
    display: 'block',
    margin: '0 auto 16px auto',
    filter: 'invert(1)',
  },
  secondaryBtn: {
    backgroundColor: 'transparent',
    color: '#00d4ff',
    textDecoration: 'none',
    padding: '14px 28px',
    fontSize: '11px',
    letterSpacing: '3px',
    border: '1px solid #00d4ff44',
    fontFamily: "'Courier New', monospace",
    display: 'inline-block',
  },
  heroVisual: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    height: '400px',
  },
  divider: {
    height: '1px',
    backgroundColor: '#00d4ff22',
    margin: '0',
  },
  features: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '40px',
    padding: '80px 0',
  },
  feature: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  featureIcon: {
    color: '#00d4ff',
    fontSize: '24px',
  },
  featureTitle: {
    color: '#ffffff',
    fontSize: '12px',
    letterSpacing: '3px',
    margin: '0',
  },
  featureText: {
    color: '#444',
    fontSize: '12px',
    lineHeight: '1.8',
    margin: '0',
    fontStyle: 'italic',
  },
  cta: {
    textAlign: 'center',
    padding: '80px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  ctaQuote: {
    color: '#ffffff',
    fontSize: '24px',
    letterSpacing: '2px',
    margin: '0',
    fontStyle: 'italic',
  },
  ctaAuthor: {
    color: '#444',
    fontSize: '10px',
    letterSpacing: '3px',
    margin: '0 0 16px 0',
  },
  footer: {
    color: '#222',
    fontSize: '9px',
    letterSpacing: '3px',
    textAlign: 'center',
    padding: '24px 0 0 0',
    margin: '0',
  },
}

export default Home;