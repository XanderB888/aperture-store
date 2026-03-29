
function About() {
  return (
    <div style={styles.container}>
      <div style={styles.gridBg} />

      <div style={styles.inner}>

        {/* Header */}
        <div style={styles.header}>
          <p style={styles.eyebrow}>APERTURE SCIENCE INC. — EST. 1943</p>
          <h1 style={styles.title}>ABOUT US</h1>
          <div style={styles.divider} />
        </div>

        {/* Mission statement */}
        <div style={styles.missionBlock}>
          <div style={styles.missionLeft}>
            <span style={styles.sectionTag}>01 — MISSION</span>
            <h2 style={styles.sectionTitle}>WE ARE APERTURE.</h2>
          </div>
          <div style={styles.missionRight}>
            <p style={styles.bodyText}>
              Aperture Science is a fully licensed, mostly operational, and
              largely human-safe research corporation headquartered in
              Cleveland, Ohio — and also partially underground. We have been
              pushing the boundaries of science since 1943, when Cave Johnson
              founded the company on a $70 shower curtain budget and a dream.
            </p>
            <p style={styles.bodyText}>
              Today, Aperture Science operates at the cutting edge of portal
              technology, repulsion gel chemistry, and autonomous turret
              deployment. Our products are available for purchase by the
              general public, pending signed waivers and a brief personality
              assessment.
            </p>
          </div>
        </div>

        <div style={styles.divider} />

        {/* Stats */}
        <div style={styles.statsGrid}>
          <div style={styles.statBlock}>
            <span style={styles.statNum}>80+</span>
            <span style={styles.statLabel}>YEARS OF SCIENCE</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statNum}>1,400</span>
            <span style={styles.statLabel}>TEST SUBJECTS PROCESSED</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statNum}>∞</span>
            <span style={styles.statLabel}>PORTALS OPENED</span>
          </div>
          <div style={styles.statBlock}>
            <span style={styles.statNum}>3</span>
            <span style={styles.statLabel}>FACILITY COLLAPSES</span>
          </div>
        </div>

        <div style={styles.divider} />

        {/* Cave Johnson Memo */}
        <div style={styles.memoSection}>
          <div style={styles.memoHeader}>
            <span style={styles.sectionTag}>02 — INTERNAL MEMO</span>
            <div style={styles.memoStamp}>DECLASSIFIED</div>
          </div>

          <div style={styles.memo}>
            <div style={styles.memoMeta}>
              <span style={styles.memoMetaText}>FROM: Cave Johnson, CEO</span>
              <span style={styles.memoMetaText}>TO: All Aperture Personnel</span>
              <span style={styles.memoMetaText}>RE: The New Online Store</span>
              <span style={styles.memoMetaText}>DATE: Classified</span>
            </div>

            <div style={styles.memoDivider} />

            <p style={styles.memoText}>
              Alright, listen up. Legal has informed me that we need to, quote,
              "establish a digital retail presence" and "stop selling products
              exclusively to people who wander into the facility." Fine. Done.
              You're looking at it.
            </p>
            <p style={styles.memoText}>
              Now I know what you're thinking. "Cave, is it safe to purchase
              an Aperture Science Hand-Held Portal Device over the internet?"
              And the answer is: probably. We've done extensive testing. Most
              of it on interns, some of it on actual scientists. The results
              were, in Caroline's words, "alarming but not unacceptable."
            </p>
            <p style={styles.memoText}>
              The store sells real products. Real science. Not that garbage
              Black Mesa sells. You know what Black Mesa sells? Nothing.
              Because they don't have a store. We win. Science wins.
            </p>
            <p style={styles.memoText}>
              A few housekeeping notes: The Repulsion Gel is not a beverage.
              We've put this on the label three times now. The Combustible
              Lemon comes with instructions. Read them. The Weighted Companion
              Cube does not speak and if yours does, please report to
              Test Chamber 19 immediately.
            </p>
            <p style={styles.memoText}>
              The checkout process is secure. We used science. Specifically,
              we hired a developer — fine young person, very few existential
              crises during the build — and they constructed this entire
              platform using React, Node.js, PostgreSQL, and what I'm told
              is "modern full-stack development." I don't know what that means
              but it sounds expensive so I approved it.
            </p>
            <p style={styles.memoText}>
              Buy something. For science.
            </p>

            <div style={styles.memoDivider} />

            <div style={styles.memoSignature}>
              <p style={styles.signatureText}>Cave Johnson</p>
              <p style={styles.signatureRole}>
                CEO, Aperture Science Inc.<br />
                Patent Holder — 47 Portals, 3 Gels, 1 Lemon<br />
                Time Magazine's "Man of the Year" 1968, 1969, 1971<br />
                <span style={styles.signatureNote}>
                  * 1970 is under legal dispute and we don't talk about it
                </span>
              </p>
            </div>
          </div>
        </div>

        <div style={styles.divider} />

        {/* Tech stack — Easter egg for devs */}
        <div style={styles.techSection}>
          <span style={styles.sectionTag}>03 — BUILT WITH SCIENCE</span>
          <p style={styles.techIntro}>
            The following technologies were used in the construction of this
            facility. Aperture Science assumes no responsibility for any
            bugs, undefined behaviour, or existential dread encountered
            during code review.
          </p>
          <div style={styles.techGrid}>
            {[
              { name: 'React', desc: 'Frontend UI framework' },
              { name: 'Node.js', desc: 'Server runtime' },
              { name: 'Express', desc: 'Backend framework' },
              { name: 'PostgreSQL', desc: 'Database' },
              { name: 'Passport.js', desc: 'Authentication' },
              { name: 'Google OAuth', desc: 'Third-party login' },
              { name: 'Vite', desc: 'Build tool' },
              { name: 'Render', desc: 'Deployment' },
            ].map(tech => (
              <div key={tech.name} style={styles.techItem}>
                <span style={styles.techName}>{tech.name}</span>
                <span style={styles.techDesc}>{tech.desc}</span>
              </div>
            ))}
          </div>
        </div>

        <div style={styles.divider} />

        <p style={styles.footer}>
          © APERTURE SCIENCE INC. — ALL RIGHTS RESERVED —
          SUBJECT PARTICIPATION IMPLIES CONSENT
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
    position: 'relative',
    overflow: 'hidden',
  },
  gridBg: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: `
      linear-gradient(rgba(0, 212, 255, 0.03) 1px, transparent 1px),
      linear-gradient(90deg, rgba(0, 212, 255, 0.03) 1px, transparent 1px)
    `,
    backgroundSize: '5px 5px',
    zIndex: 0,
    pointerEvents: 'none',
  },
  inner: {
    position: 'relative',
    zIndex: 1,
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '80px 40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '64px',
  },
  header: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  eyebrow: {
    color: '#00d4ff',
    fontSize: '18px',
    letterSpacing: '4px',
    margin: '0',
  },
  title: {
    color: '#ffffff',
    fontSize: '48px',
    letterSpacing: '6px',
    margin: '0',
  },
  divider: {
    height: '1px',
    backgroundColor: '#ff6b00',
  },
  missionBlock: {
    display: 'grid',
    gridTemplateColumns: '1fr 2fr',
    gap: '60px',
    alignItems: 'start',
  },
  missionLeft: {
    display: 'flex',
    flexDirection: 'column',
    gap: '12px',
  },
  missionRight: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  sectionTag: {
    color: '#00d4ff',
    fontSize: '18px',
    letterSpacing: '3px',
    opacity: '0.6',
  },
  sectionTitle: {
    color: '#ffffff',
    fontSize: '24px',
    letterSpacing: '4px',
    margin: '0',
  },
  bodyText: {
    color: '#b3b3b3',
    fontSize: '16px',
    lineHeight: '1.9',
    margin: '0',
  },
  statsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '0',
  },
  statBlock: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
    padding: '0 40px 0 0',
    borderRight: '1px solid #0d0d0d',
  },
  statNum: {
    color: '#00d4ff',
    fontSize: '36px',
    fontWeight: 'bold',
    letterSpacing: '2px',
  },
  statLabel: {
    color: '#b3b3b3',
    fontSize: '12px',
    letterSpacing: '3px',
  },
  memoSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  memoHeader: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  memoStamp: {
    color: '#ff6b00',
    fontSize: '18px',
    letterSpacing: '4px',
    border: '1px solid #ff6a0063',
    padding: '4px 12px',
  },
  memo: {
    backgroundColor: '#0d0d0d',
    border: '1px solid #1a1a1a',
    borderLeft: '3px solid #00d4ff44',
    padding: '40px',
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  memoMeta: {
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  memoMetaText: {
    color: '#707070',
    fontSize: '12px',
    letterSpacing: '2px',
  },
  memoDivider: {
    height: '1px',
    backgroundColor: '#1a1a1a',
  },
  memoText: {
    color: '#b3b3b3',
    fontSize: '16px',
    lineHeight: '2',
    margin: '0',
  },
  memoSignature: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  signatureText: {
    color: '#ffffff',
    fontSize: '18px',
    letterSpacing: '2px',
    margin: '0',
    fontStyle: 'italic',
  },
  signatureRole: {
    color: '#707070',
    fontSize: '13px',
    letterSpacing: '1px',
    lineHeight: '1.8',
    margin: '0',
  },
  signatureNote: {
    color: '#696969',
    fontSize: '12px',
    fontStyle: 'italic',
  },
  techSection: {
    display: 'flex',
    flexDirection: 'column',
    gap: '24px',
  },
  techIntro: {
    color: '#b3b3b3',
    fontSize: '16px',
    lineHeight: '1.8',
    margin: '0',
    fontStyle: 'italic',
    maxWidth: '600px',
  },
  techGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '16px',
  },
  techItem: {
    backgroundColor: '#0d0d0d',
    border: '1px solid #1a1a1a',
    borderTop: '1px solid #00d4ff22',
    padding: '16px',
    display: 'flex',
    flexDirection: 'column',
    gap: '6px',
  },
  techName: {
    color: '#00d4ff',
    fontSize: '16px',
    letterSpacing: '2px',
  },
  techDesc: {
    color: '#333',
    fontSize: '12px',
    letterSpacing: '1px',
  },
  footer: {
    color: '#696969',
    fontSize: '9px',
    letterSpacing: '3px',
    textAlign: 'center',
    margin: '0',
  },
}

export default About