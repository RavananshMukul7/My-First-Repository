// import React from "react";
import {
  ArrowRight,
  ArrowUpRight,
  BarChart3,
  BriefcaseBusiness,
  Code2,
  Sparkles,
} from "lucide-react";
import LiquidOrb from "../components/LiquidOrb3D/LiquidOrb3D.jsx";
import "./Landing.css";

const GITHUB_AUTH_URL = "http://localhost:5000/auth/github";

const GithubMark = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M12 .7a12 12 0 0 0-3.79 23.39c.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.74.08-.74 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.78.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.17 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.65.24 2.87.12 3.17.77.84 1.24 1.91 1.24 3.22 0 4.61-2.81 5.62-5.49 5.92.43.37.81 1.1.81 2.22v3.29c0 .32.22.69.83.58A12 12 0 0 0 12 .7Z"
    />
  </svg>
);

function Landing() {
  const goToGithub = () => {
    window.location.href = GITHUB_AUTH_URL;
  };

  return (
    <main className="landing-page">
      {/* =====================================================
          BACKGROUND
          ===================================================== */}

      <div className="space-background">
        <div className="space-glow space-glow-one" />
        <div className="space-glow space-glow-two" />
        <div className="space-glow space-glow-three" />

        <div className="energy-wave energy-wave-one" />
        <div className="energy-wave energy-wave-two" />
        <div className="energy-wave energy-wave-three" />

        <div className="particle-field">
          {Array.from({ length: 65 }).map((_, i) => (
            <span key={i} />
          ))}
        </div>
      </div>

      {/* =====================================================
          NAVIGATION
          ===================================================== */}

      <header className="navbar">
        <a className="brand" href="#">
          <span className="brand-mark">
            <span className="brand-mark-arrow">➤</span>
          </span>

          <span className="brand-name">
            Skill<span>Compass</span>
          </span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#features">Features</a>
          <a href="#how-it-works">How it Works</a>
          <a href="#pricing">Pricing</a>
        </nav>

        <div className="nav-actions">
          <div className="system-status">
            <span className="status-light" />
            SYSTEM ONLINE
          </div>

          <button
            className="connect-button"
            onClick={goToGithub}
          >
            <GithubMark />
            <span>Connect GitHub</span>
          </button>
        </div>
      </header>

      {/* =====================================================
          HERO
          ===================================================== */}

      <section className="hero">
        <div className="hero-grid" />

        {/* LEFT */}
        <div className="hero-copy">
          <div className="hero-badge">
            <Sparkles size={17} />
            <span>AI CAREER INTELLIGENCE</span>
          </div>

          <h1>
            <span className="headline-white">
              Your code.
            </span>

            <span className="headline-purple">
              Your
            </span>

            <span className="headline-blue">
              capability.
            </span>
          </h1>

          <p className="hero-description">
            SkillCompass reads the work you have actually built,
            extracts the skills you demonstrate, estimates your
            proficiency, and maps your profile to relevant
            opportunities.
          </p>

          <button
            className="hero-cta"
            onClick={goToGithub}
          >
            <span className="cta-github">
              <GithubMark />
            </span>

            <span>Analyze my GitHub</span>

            <ArrowRight className="cta-arrow" size={27} />
          </button>
        </div>

        {/* =================================================
            RIGHT VISUAL
            ================================================= */}

        <div className="hero-visual">

          {/* ambient glow */}
          <div className="core-ambient-glow" />

          {/* energy trails */}
          <div className="orb-energy energy-a" />
          <div className="orb-energy energy-b" />
          <div className="orb-energy energy-c" />

          {/* MAIN LIQUID CORE */}
          <LiquidOrb/>

          {/* =================================================
              DETECTED CARD
              ================================================= */}

          <div className="floating-card detected-card">
            <div className="card-icon blue-icon">
              <Code2 size={23} />
            </div>

            <div className="card-main">
              <span className="card-label">
                DETECTED
              </span>

              <strong>
                JavaScript
              </strong>

              <span className="card-sub">
                72 / Advanced
              </span>
            </div>

            <ArrowUpRight className="card-arrow" size={20} />

            <div className="mini-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          {/* =================================================
              MATCHED CARD
              ================================================= */}

          <div className="floating-card matched-card">
            <div className="card-icon python-icon">
              <span>🐍</span>
            </div>

            <div className="card-main">
              <span className="card-label">
                MATCHED
              </span>

              <strong>
                Python
              </strong>

              <span className="card-sub">
                49 / Intermediate
              </span>
            </div>

            <div className="mini-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

          {/* =================================================
              OPPORTUNITIES CARD
              ================================================= */}

          <div className="floating-card opportunities-card">
            <div className="card-icon green-icon">
              <BriefcaseBusiness size={22} />
            </div>

            <div className="card-main">
              <span className="card-label green-label">
                OPPORTUNITIES
              </span>

              <strong>
                24 relevant
              </strong>

              <span className="card-sub">
                India · Remote
              </span>
            </div>

            <div className="mini-chart green-chart">
              <i />
              <i />
              <i />
              <i />
              <i />
            </div>
          </div>

        </div>

        {/* =================================================
            BOTTOM META
            ================================================= */}

        <div className="hero-bottom-left">
          <span>BUILT AROUND REAL CODE</span>
          <i />
        </div>

        <div className="hero-bottom-right">
          <span>SKILLS</span>
          <b>•</b>
          <span>PROFICIENCY</span>
          <b>•</b>
          <span>OPPORTUNITY</span>
        </div>
      </section>

      {/* =====================================================
          LOWER CONTENT
          ===================================================== */}

      <section
        id="features"
        className="below-section"
      >
        <div className="below-kicker">
          <BarChart3 size={16} />
          INTELLIGENCE ENGINE
        </div>

        <h2>
          Your code becomes
          <span> career intelligence.</span>
        </h2>

        <p>
          SkillCompass transforms the work you have already
          built into a measurable technical profile.
        </p>
      </section>

      <section
        id="about"
        className="simple-section"
      />

      <section
        id="how-it-works"
        className="simple-section"
      />

      <section
        id="pricing"
        className="simple-section"
      />
    </main>
  );
}

export default Landing;