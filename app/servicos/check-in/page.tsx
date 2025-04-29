import Link from "next/link";
import { Check, ArrowRight } from "lucide-react";

export default function CheckInPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Check-in Automatizado para Eventos
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mb-8">
            Simplifique o processo de check-in em seus eventos com nossa solução
            automatizada via WhatsApp, eliminando filas e melhorando a
            experiência dos participantes.
          </p>
          <Link
            href="/contato"
            className="bg-white text-blue-700 hover:bg-blue-50 px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
          >
            Solicitar demonstração
            <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">
                Agilize o acesso aos seus eventos
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                Nosso sistema de check-in automatizado via WhatsApp elimina a
                necessidade de equipamentos especiais, aplicativos adicionais ou
                longas filas na entrada do evento.
              </p>
              <p className="text-lg text-gray-700">
                Os participantes podem realizar o check-in diretamente pelo
                WhatsApp, recebendo seu comprovante digital e instruções
                personalizadas instantaneamente.
              </p>
            </div>
            <div className="bg-gray-100 p-6 rounded-xl">
              <img
                src="/placeholder.svg?height=300&width=400"
                alt="Check-in automatizado via WhatsApp"
                className="w-full h-auto rounded-lg shadow-md"
              />
            </div>
          </div>

          {/* Benefits */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Benefícios do Check-in Automatizado
          </h2>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Eliminação de filas
              </h3>
              <p className="text-gray-700">
                Reduza drasticamente o tempo de espera na entrada do evento,
                proporcionando uma experiência mais agradável aos participantes.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Sem equipamentos especiais
              </h3>
              <p className="text-gray-700">
                Não é necessário investir em leitores de QR code ou outros
                equipamentos. Tudo é feito através do WhatsApp.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Dados em tempo real
              </h3>
              <p className="text-gray-700">
                Acompanhe em tempo real quantos participantes já realizaram
                check-in e obtenha insights valiosos sobre o evento.
              </p>
            </div>
          </div>

          {/* How it Works */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Como Funciona
          </h2>
          <div className="bg-gray-50 p-8 rounded-xl mb-16">
            <ol className="space-y-6">
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  1
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Confirmação de presença
                  </h3>
                  <p className="text-gray-700">
                    O participante recebe uma mensagem no WhatsApp com
                    instruções para confirmar sua presença no evento.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  2
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Check-in antecipado
                  </h3>
                  <p className="text-gray-700">
                    O participante pode realizar o check-in antecipadamente,
                    enviando uma confirmação pelo WhatsApp.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  3
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Comprovante digital
                  </h3>
                  <p className="text-gray-700">
                    Após o check-in, o participante recebe um comprovante
                    digital com QR code ou código de acesso.
                  </p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-blue-600 text-white rounded-full flex items-center justify-center font-bold">
                  4
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    Acesso ao evento
                  </h3>
                  <p className="text-gray-700">
                    No dia do evento, basta apresentar o comprovante digital
                    para ter acesso rápido e sem filas.
                  </p>
                </div>
              </li>
            </ol>
          </div>

          {/* Use Cases */}
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Aplicações Ideais
          </h2>
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Conferências e Congressos
              </h3>
              <p className="text-gray-700">
                Ideal para eventos de grande porte com muitos participantes,
                eliminando congestionamentos na entrada.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Feiras e Exposições
              </h3>
              <p className="text-gray-700">
                Facilite o acesso de visitantes e expositores com um processo de
                check-in simplificado.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Workshops e Treinamentos
              </h3>
              <p className="text-gray-700">
                Otimize o tempo de seus treinamentos com um processo de entrada
                ágil e eficiente.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                Eventos Corporativos
              </h3>
              <p className="text-gray-700">
                Impressione seus clientes e parceiros com uma experiência
                moderna e tecnológica desde a entrada.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="bg-blue-50 p-8 rounded-xl text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Pronto para modernizar seus eventos?
            </h2>
            <p className="text-lg text-gray-700 mb-6 max-w-3xl mx-auto">
              Entre em contato conosco hoje mesmo e descubra como nossa solução
              de check-in automatizado pode transformar a experiência dos
              participantes em seus eventos.
            </p>
            <Link
              href="/contato"
              className="bg-blue-600 text-white hover:bg-blue-700 px-6 py-3 rounded-lg font-medium inline-flex items-center transition-colors"
            >
              Solicitar demonstração
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
