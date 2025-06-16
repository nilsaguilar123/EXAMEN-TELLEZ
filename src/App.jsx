import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";

function App() {
  return (
    <Router>
      <div className="d-flex flex-column min-vh-100">
        <header className="bg-dark text-white text-center py-4">
          <h1 className="fw-bold">Academia de Baile "Real Madrid"</h1>
          <p>Nils Reiner Aguilar Machicado</p>
        </header>

        <nav className="navbar navbar-expand-lg navbar-light bg-warning shadow">
          <div className="container">
            <Link className="navbar-brand fw-bold text-dark" to="/">Inicio</Link>
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/">Inicio</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link text-dark fw-bold" to="/cursos">Oferta de Cursos</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        <main className="container flex-grow-1 py-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cursos" element={<Cursos />} />
          </Routes>
        </main>

        <footer className="bg-dark text-white text-center py-3">
          © 2025 Nils Reiner Aguilar Machicado
        </footer>
      </div>
    </Router>
  );
}

export default App;
