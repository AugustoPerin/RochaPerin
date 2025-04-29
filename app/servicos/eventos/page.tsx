import Link from "next/link";
import { ArrowRight, Calendar, CheckCircle, QrCode, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Registro de Eventos</h1>
              <p className="text-xl mb-8">
                Simplifique o processo de inscrição em eventos com um sistema
                automatizado de registro, pagamento e gerenciamento de
                participantes.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                <Link href="/contato">Solicite uma demonstração</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Registro de Eventos"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Formulários Personalizados
              </h3>
              <p className="text-gray-600 mb-4">
                Crie formulários de inscrição personalizados para coletar
                exatamente as informações que você precisa dos participantes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Campos customizáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Lógica condicional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Validação automática</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Calendar className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pagamento Integrado
              </h3>
              <p className="text-gray-600 mb-4">
                Ofereça múltiplas opções de pagamento e processe transações de
                forma segura diretamente no formulário de inscrição.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Múltiplos métodos de pagamento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Processamento seguro</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Emissão automática de recibos</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <QrCode className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Emissão de Credenciais
              </h3>
              <p className="text-gray-600 mb-4">
                Gere e envie automaticamente credenciais digitais com QR Code
                para facilitar o check-in no dia do evento.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Credenciais personalizáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>QR Codes únicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Envio automático por e-mail</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios para seu Negócio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Economia de Tempo
              </h3>
              <p className="text-gray-600">
                Automatize todo o processo de inscrição, desde o registro até a
                emissão de credenciais, liberando sua equipe para outras
                tarefas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Erros
              </h3>
              <p className="text-gray-600">
                Elimine erros manuais de registro e problemas de comunicação com
                um sistema automatizado e integrado.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Melhor Experiência
              </h3>
              <p className="text-gray-600">
                Ofereça uma experiência de inscrição simples e profissional,
                aumentando a satisfação dos participantes desde o primeiro
                contato.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Dados Valiosos
              </h3>
              <p className="text-gray-600">
                Colete e analise dados importantes sobre os participantes para
                melhorar futuros eventos e ações de marketing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Check-in Automatizado */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Check-in Automatizado para Eventos
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Check-in Automatizado"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Agilize o processo de entrada no seu evento
              </h3>
              <p className="text-gray-700 mb-6">
                Nossa solução de check-in automatizado permite que você processe
                a entrada de centenas de participantes em minutos, eliminando
                filas e melhorando a experiência desde o primeiro momento.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Leitura de QR Code</span>
                    <p className="text-gray-600">
                      Faça o check-in dos participantes em segundos com a
                      leitura do QR Code das credenciais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Modo Offline</span>
                    <p className="text-gray-600">
                      O sistema funciona mesmo sem conexão com a internet,
                      sincronizando os dados posteriormente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">
                      Estatísticas em Tempo Real
                    </span>
                    <p className="text-gray-600">
                      Acompanhe o número de participantes presentes e outras
                      métricas importantes em tempo real.
                    </p>
                  </div>
                </li>
              </ul>
              <Link
                href="/servicos/eventos/check-in"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais sobre o Check-in Automatizado{" "}
                <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuração</h3>
              <p className="text-gray-600">
                Configuramos o sistema de acordo com as necessidades do seu
                evento, incluindo formulários e opções de pagamento.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Inscrição</h3>
              <p className="text-gray-600">
                Os participantes se inscrevem online, preenchendo o formulário e
                realizando o pagamento quando aplicável.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirmação</h3>
              <p className="text-gray-600">
                O sistema envia automaticamente confirmações e credenciais com
                QR Code para os participantes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Check-in</h3>
              <p className="text-gray-600">
                No dia do evento, os participantes são registrados rapidamente
                através da leitura do QR Code.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal Para</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Conferências e Congressos
              </h3>
              <p className="text-gray-600">
                Eventos profissionais com múltiplas palestras, workshops e
                grande número de participantes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Feiras e Exposições
              </h3>
              <p className="text-gray-600">
                Eventos comerciais com múltiplos expositores e visitantes que
                precisam de credenciamento eficiente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cursos e Workshops</h3>
              <p className="text-gray-600">
                Eventos educacionais que exigem inscrição prévia, pagamento e
                controle de presença dos participantes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para simplificar o registro do seu evento?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossa solução de
            registro de eventos pode transformar a experiência dos seus
            participantes.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            <Link href="/contato">Solicite uma demonstração</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
