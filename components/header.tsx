"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center">
            <Image
              src="/rochaperin-site-home-button-sem-borda.png"
              alt="RochaPerin Logo"
              width={200}
              height={80}
              priority
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Início
            </Link>
            <Link
              href="/servicos"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Serviços
            </Link>
            <Link
              href="/clientes"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Clientes
            </Link>
            <Link
              href="/sobre"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Sobre Nós
            </Link>
            <Link
              href="/contato"
              className="text-gray-700 hover:text-blue-700 font-medium"
            >
              Contato
            </Link>
          </nav>

          <div className="hidden md:block">
            <Button asChild>
              <Link href="http://wa.me/5571993491849?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20RochaPerin">
                Fale Conosco
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="container mx-auto px-4 py-4">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-700 hover:text-blue-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Início
              </Link>
              <Link
                href="/servicos"
                className="text-gray-700 hover:text-blue-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Serviços
              </Link>
              <Link
                href="/clientes"
                className="text-gray-700 hover:text-blue-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Clientes
              </Link>
              <Link
                href="/sobre"
                className="text-gray-700 hover:text-blue-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Sobre Nós
              </Link>
              <Link
                href="/contato"
                className="text-gray-700 hover:text-blue-700 font-medium py-2"
                onClick={() => setIsMenuOpen(false)}
              >
                Contato
              </Link>
              <Button asChild className="mt-2">
                <Link
                  href="http://wa.me/5571993491849?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20RochaPerin"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Fale Conosco
                </Link>
              </Button>
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
