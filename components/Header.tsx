"use client";

import { useState } from "react";

const menuItems = [
  ["Início", "inicio"],
  ["Sobre nós", "sobre"],
  ["Serviços", "servicos"],
  ["Galeria", "galeria"],
  ["Promoções", "promocoes"],
  ["Contato", "contato"]
] as const;

const whatsappUrl =
  "https://wa.me/5547999085497?text=Olá!%20Gostaria%20de%20agendar%20um%20atendimento%20para%20o%20meu%20pet.%20🐶🐾";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header>
      <div className="container header-container">
        <a href="#" className="logo" onClick={closeMenu}>
          <div className="logo-icon">
            <i className="fa-solid fa-dog" aria-hidden="true" />
          </div>
          <span>Patudos Alegres</span>
        </a>

        <nav className={`nav-links${menuOpen ? " active" : ""}`} id="navLinks" aria-label="Navegação principal">
          {menuItems.map(([label, id]) => (
            <a href={`#${id}`} onClick={closeMenu} key={id}>
              {label}
            </a>
          ))}
        </nav>

        <a href={whatsappUrl} target="_blank" rel="noreferrer" className="btn btn-primary header-cta">
          <i className="fa-brands fa-whatsapp" aria-hidden="true" /> Agendar atendimento
        </a>

        <button
          type="button"
          className="hamburger"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label={menuOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={menuOpen}
          aria-controls="navLinks"
        >
          <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
