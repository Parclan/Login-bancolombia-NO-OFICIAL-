import logo_blanco from "../assets/img/Bancolombia-Logo-blanco.png";
import logo from "../assets/img/Bancolombia-Logo.png";

// Muestra el logo de Bancolombia en el encabezado de la página.
// Elige automáticamente la versión blanca o de color según el tema.
function Header({ t }) {
    return (
        <header className="relative z-10 flex justify-center pt-8 pb-2">
            <div className="flex items-center gap-3">
                <img
                    src={t.logoSrc === "blanco" ? logo_blanco : logo}
                    alt="Logo Bancolombia"
                    width="220"
                    style={{ transition: "opacity 0.3s" }}
                />
            </div>
        </header>
    );
}

export default Header;
