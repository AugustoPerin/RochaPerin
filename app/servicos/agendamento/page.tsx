import Link from "next/link";
import { Calendar, CheckCircle, Clock, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Agendamento de Serviços
              </h1>
              <p className="text-xl mb-8">
                Automatize o processo de agendamento e permita que seus clientes
                marquem horários de forma rápida e eficiente, 24 horas por dia,
                7 dias por semana.
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
                alt="Agendamento de Serviços"
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
                <Calendar className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Calendário Inteligente
              </h3>
              <p className="text-gray-600 mb-4">
                Sistema de calendário que exibe apenas horários disponíveis,
                evitando conflitos e otimizando sua agenda.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Visualização diária, semanal e mensal</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Bloqueio automático de horários ocupados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Personalização de disponibilidade</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Lembretes Automáticos
              </h3>
              <p className="text-gray-600 mb-4">
                Envio automático de lembretes por e-mail, SMS ou WhatsApp para
                reduzir faltas e atrasos.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Lembretes personalizáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Múltiplos canais de comunicação</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Confirmação de presença</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Gestão de Recursos</h3>
              <p className="text-gray-600 mb-4">
                Controle eficiente de recursos humanos, equipamentos e salas
                necessários para cada serviço.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Alocação inteligente de recursos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Prevenção de sobreposições</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Otimização de capacidade</span>
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
                Redução de Custos Operacionais
              </h3>
              <p className="text-gray-600">
                Diminua custos com pessoal dedicado a agendamentos e reduza o
                tempo gasto em tarefas administrativas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Diminuição de Faltas e Cancelamentos
              </h3>
              <p className="text-gray-600">
                Reduza significativamente o número de faltas e cancelamentos de
                última hora com lembretes automáticos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Aumento da Satisfação do Cliente
              </h3>
              <p className="text-gray-600">
                Ofereça mais conveniência aos seus clientes, permitindo
                agendamentos a qualquer hora e em qualquer lugar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Otimização da Agenda
              </h3>
              <p className="text-gray-600">
                Maximize o uso do tempo disponível com uma distribuição mais
                eficiente de compromissos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
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
                Configuramos o sistema de acordo com suas necessidades,
                definindo serviços, duração e disponibilidade.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Agendamento</h3>
              <p className="text-gray-600">
                O cliente seleciona o serviço desejado, data e horário
                disponível através do site ou aplicativo.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Confirmação</h3>
              <p className="text-gray-600">
                O sistema envia uma confirmação automática e adiciona o
                compromisso à agenda do prestador de serviço.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Lembretes</h3>
              <p className="text-gray-600">
                Lembretes automáticos são enviados antes do compromisso para
                garantir a presença do cliente.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal Para</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Clínicas e Consultórios
              </h3>
              <p className="text-gray-600">
                Médicos, dentistas, psicólogos e outros profissionais de saúde
                que precisam gerenciar consultas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Salões de Beleza e Spas
              </h3>
              <p className="text-gray-600">
                Estabelecimentos que oferecem serviços de beleza, estética e
                bem-estar com múltiplos profissionais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Prestadores de Serviços
              </h3>
              <p className="text-gray-600">
                Advogados, contadores, consultores e outros profissionais que
                trabalham com agendamento de reuniões.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para otimizar seus agendamentos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossa solução de
            agendamento pode transformar seu negócio.
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
