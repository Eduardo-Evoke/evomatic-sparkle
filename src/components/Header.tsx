import React, { useState } from "react";
import { ArrowRight, ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo-evomatic.png";

const solucoes = [
  { label: "Suporte  & Gestão de TI", href: "/suporte-gestao-ti" },
  { label: "Infraestrutura & Servidores", href: "/infraestrutura-servidores" },
  { label: "Segurança & Treinamento", href: "/seguranca" },
  { label: "Adequação à LGPD", href: "/lgpd" },
  { label: "Licenciamento & Vendas", href: "/licenciamento-vendas" },
  { label: "Cloud & Colaboração", href: "/cloud-colaboracao" },
];

const Header = () => {
  const [showSolucoes, setShowSolucoes] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileSolucoes, setMobileSolucoes] = useState(false);
  const timeoutRef = React.useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setShowSolucoes(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => setShowSolucoes(false), 300);
  };

  const closeMobile = () => {
    setMobileOpen(false);
    setMobileSolucoes(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/[0.06] bg-background/70 backdrop-blur-md shadow-[0_4px_30px_rgba(0,0,0,0.4)]">
      <div className="flex items-center justify-between py-4 px-6 md:px-16 lg:px-24 max-w-7xl mx-auto w-full">
        <Link to="/" className="flex flex-col items-start">
          <img
            src={logo}
            alt="Evomatic"
            className="h-[34px] md:h-[45px] w-auto"
          />
          <p className="tracking-[0.2em] uppercase text-[7px] -mt-0.5 md:text-[9px] text-primary-foreground -ml-[1px]">
            &nbsp;ESTRUTURE. MODERNIZE. CONECTE. · JUNDIAÍ-SP
          </p>
        </Link>
        <nav className="hidden lg:flex flex-1 items-center justify-center gap-10">
          <Link to="/" className="text-base font-medium transition-colors duration-300 text-primary-foreground">
            Home
          </Link>
          <div
            className="relative"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button className="flex items-center gap-2 text-base font-medium transition-colors duration-300 text-primary-foreground">
              Soluções
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showSolucoes ? "rotate-180" : ""}`} />
            </button>
            {showSolucoes && (
              <div className="absolute top-full left-0 mt-2 w-56 bg-background/95 backdrop-blur-md border border-white/[0.08] rounded-xl shadow-lg py-2 z-50">
                {solucoes.map((item) => (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="block px-4 py-2.5 text-sm text-primary-foreground/80 hover:text-primary-foreground hover:bg-white/[0.06] transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
          <Link to="/quem-somos" className="text-base font-medium transition-colors duration-300 text-primary-foreground">
            Quem Somos
          </Link>
          <Link to="/contato" className="text-base font-medium transition-colors duration-300 text-primary-foreground">
            Contato
          </Link>
        </nav>
        <a
          href="https://wa.me/5511991784226"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden lg:inline-flex items-center gap-2 text-primary-foreground px-6 py-2.5 rounded-lg text-sm font-semibold transition-all duration-300 bg-primary hover:brightness-110"
        >
          Solicitar uma reunião
          <ArrowRight className="w-4 h-4" />
        </a>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden p-2 text-primary-foreground"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background/95 backdrop-blur-md border-t border-white/[0.06] px-6 py-4 space-y-1">
          <Link to="/" onClick={closeMobile} className="block py-3 text-base font-medium text-primary-foreground">
            Home
          </Link>
          <button
            onClick={() => setMobileSolucoes(!mobileSolucoes)}
            className="flex items-center justify-between w-full py-3 text-base font-medium text-primary-foreground"
          >
            Soluções
            <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${mobileSolucoes ? "rotate-180" : ""}`} />
          </button>
          {mobileSolucoes && (
            <div className="pl-4 space-y-1">
              {solucoes.map((item) => (
                <Link
                  key={item.href}
                  to={item.href}
                  onClick={closeMobile}
                  className="block py-2.5 text-sm text-primary-foreground/80"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          )}
          <Link to="/quem-somos" onClick={closeMobile} className="block py-3 text-base font-medium text-primary-foreground">
            Quem Somos
          </Link>
          <Link to="/contato" onClick={closeMobile} className="block py-3 text-base font-medium text-primary-foreground">
            Contato
          </Link>
          <a
            href="https://wa.me/5511991784226"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobile}
            className="inline-flex items-center gap-2 text-primary-foreground px-5 py-2.5 rounded-lg text-sm font-semibold bg-primary mt-2"
          >
            Solicitar uma reunião
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
