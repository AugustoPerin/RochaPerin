import Link from "next/link"
import { Facebook, Instagram, Linkedin, Mail, MapPin, Phone } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">RochaPerin</h3>
            <p className="text-gray-400 mb-4">
              Especialistas em automação de processos, análise de dados, migração para nuvem e chatbots empresariais.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="https://www.instagram.com/rocha_perin/" className="text-gray-400 hover:text-white">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="https://www.linkedin.com/company/rochaperin/" className="text-gray-400 hover:text-white">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-white">
                  Início
                </Link>
              </li>
              <li>
                <Link href="/servicos" className="text-gray-400 hover:text-white">
                  Serviços
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-gray-400 hover:text-white">
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link href="/contato" className="text-gray-400 hover:text-white">
                  Contato
                </Link>
              </li>
            </ul>
          </div>

          {/* Serviços */}
          <div>
            <h3 className="text-xl font-bold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/servicos/chatbots" className="text-gray-400 hover:text-white">
                  Chatbots Empresariais
                </Link>
              </li>
              <li>
                <Link href="/servicos/automacao" className="text-gray-400 hover:text-white">
                  Automação de Processos
                </Link>
              </li>
              <li>
                <Link href="/servicos/analise-dados" className="text-gray-400 hover:text-white">
                  Análise de Dados
                </Link>
              </li>
              <li>
                <Link href="/servicos/migracao-nuvem" className="text-gray-400 hover:text-white">
                  Migração para Nuvem
                </Link>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="mr-2 text-gray-400 flex-shrink-0 mt-1" size={18} />
                <span className="text-gray-400">
                  Edifício Hangar Business Park, Hangar 2, Sala 301, Salvador, Bahia, Brasil
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 text-gray-400 flex-shrink-0" size={18} />
                <span className="text-gray-400">(71) 99349-1849</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 text-gray-400 flex-shrink-0" size={18} />
                <a href="mailto:contato@rochaperin.com.br" className="text-gray-400 hover:text-white">
                  contato@rochaperin.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} RochaPerin. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
