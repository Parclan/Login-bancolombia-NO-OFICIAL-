import React, { useEffect } from 'react';
import './App.css';
import auth_trazo from "./assets/img/auth-trazo.svg";
import { Toaster } from "sileo";
import useTheme from "./hooks/useTheme";
import useClock from "./hooks/useClock";
import Header from "./components/Header";
import LoginCard from "./components/LoginCard";
import Footer from "./components/Footer";


export default function BancolombiaLogin() {
  const { t, theme } = useTheme();
  const fechaHora = useClock();

  useEffect(() => {
    document.body.style.backgroundColor = t.bg;
    document.body.style.transition = "background-color 0.3s";
  }, [t.bg]);

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ backgroundColor: t.bg, fontFamily: "'Segoe UI', sans-serif", transition: "background-color 0.3s" }}
    >
      {/* ── SILEO TOASTER ── */}
      <Toaster
        position="top-center"
        options={{
          fill: theme === "dark" ? "#ffffff" : "#3a3a3a",
          styles: {
            description: theme === "dark" ? "!text-gray-900" : "!text-white",
            badge: theme === "dark" ? "!bg-black/10" : "!bg-white/20",
          },
        }}
      />

      <br className="hidden sm:block" /><br className="hidden sm:block" />

      {/* ── FONDO ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 0 }}>
        <div
          style={{
            position: "absolute", inset: 0,
            backgroundImage: `url(${auth_trazo})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        />
        <div style={{ position: "absolute", inset: 0 }} />
      </div>

      {/* ── HEADER ── */}
      <Header t={t} />

      {/* ── TÍTULO ── */}
      <div className="relative z-10 text-center mt-2 sm:mt-4 mb-4 sm:mb-6 px-4">
        <h1 style={{ fontSize: "clamp(20px, 5vw, 32px)", fontWeight: "600", letterSpacing: "0.5px", color: t.title, transition: "color 0.3s" }}>
          Sucursal Virtual Personas
        </h1>
      </div>

      {/* ── CONTENEDOR CENTRAL: Centra la tarjeta verticalmente ── */}
      <div className="relative z-10 flex-1 flex flex-col justify-center">
        <LoginCard t={t} theme={theme} />
      </div>

      {/* ── FOOTER ── */}
      <Footer t={t} fechaHora={fechaHora} />
    </div>
  );
}
