import "./App.css";
import { Routes, Route, Link } from "react-router-dom";

/* ===== PAGES ===== */
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import SubmitComplaint from "./pages/SubmitComplaint";
import TrackComplaint from "./pages/TrackComplaint";
import Departments from "./pages/Departments";
import Helpdesk from "./pages/Helpdesk";

/* ================= HOME PAGE ================= */
function Home() {
  return (
    <div className="app">
      {/* ===== HEADER ===== */}
      <header className="top-header">
        <div className="top-left">
          🇮🇳 <strong>CivicLink</strong>
          <span> | Government of India</span>
        </div>
      </header>

      {/* ===== NAVBAR ===== */}
      <nav className="navbar">
        <Link to="/">Home</Link>
        <Link to="/login">Citizen Login</Link>
        <Link to="/track">Track Complaint</Link>
        <Link to="/departments">Departments</Link>
        <Link to="/helpdesk">Helpdesk</Link>
      </nav>

      {/* ===== HERO ===== */}
      <section className="hero">
        <h1>National Civic Issue Management Portal</h1>
        <p>
          Official platform for Indian citizens to report civic issues
          and track complaints transparently.
        </p>

        <div className="hero-buttons">
          <Link to="/login">
            <button className="primary">Citizen Login</button>
          </Link>

          <Link to="/track">
            <button className="secondary">Track Complaint</button>
          </Link>
        </div>

        <p className="note">
          * Only verified citizens (18+) can submit complaints
        </p>
      </section>

      {/* ===== STATISTICS ===== */}
      <section className="stats">
        <Stat number="1,25,000+" text="Complaints Received" />
        <Stat number="1,02,400+" text="Resolved" />
        <Stat number="18,600+" text="Under Review" />
        <Stat number="480+" text="Municipal Authorities" />
      </section>

      {/* ===== SERVICES ===== */}
      <section className="services">
        <h2>Available Civic Services</h2>
        <div className="service-grid">
          <Service title="Road & Pothole Issues" />
          <Service title="Water Supply Problems" />
          <Service title="Electricity & Power" />
          <Service title="Garbage & Sanitation" />
          <Service title="Street Lights" />
          <Service title="Public Safety" />
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <p>© 2026 CivicLink | Government of India</p>
      </footer>
    </div>
  );
}

/* ================= ROUTES ================= */
function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/submit" element={<SubmitComplaint />} />
      <Route path="/track" element={<TrackComplaint />} />
      <Route path="/departments" element={<Departments />} />
      <Route path="/helpdesk" element={<Helpdesk />} />
    </Routes>
  );
}

/* ================= REUSABLE COMPONENTS ================= */
const Stat = ({ number, text }) => (
  <div className="stat">
    <h3>{number}</h3>
    <p>{text}</p>
  </div>
);

const Service = ({ title }) => (
  <div className="service-card">{title}</div>
);

export default App;