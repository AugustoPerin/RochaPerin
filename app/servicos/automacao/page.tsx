import Link from "next/link";
import {
  ArrowRight,
  CheckCircle,
  Clock,
  LineChart,
  Settings,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AutomacaoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Automação de Processos
              </h1>
              <p className="text-xl mb-8">
                Otimize fluxos de trabalho, reduza custos e aumente a eficiência
                operacional com nossas soluções de automação inteligente.
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
                alt="Automação de Processos"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Serviços de Automação */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossas Soluções de Automação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Agendamento de Serviços
              </h3>
              <p className="text-gray-600 mb-4">
                Automatize o processo de agendamento de serviços, permitindo que
                seus clientes marquem horários de forma rápida e eficiente.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Integração com calendários</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Lembretes automáticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Gestão de disponibilidade</span>
                </li>
              </ul>
              <Link
                href="/servicos/automacao/agendamento"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Settings className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Cotação Automatizada
              </h3>
              <p className="text-gray-600 mb-4">
                Agilize o processo de cotação com um sistema inteligente que
                gera orçamentos personalizados instantaneamente.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Cálculos automáticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Personalização de propostas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Integração com CRM</span>
                </li>
              </ul>
              <Link
                href="/servicos/automacao/cotacao"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Rastreamento de Pedidos
              </h3>
              <p className="text-gray-600 mb-4">
                Ofereça aos seus clientes um sistema de rastreamento de pedidos
                em tempo real, aumentando a transparência e satisfação.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Atualizações em tempo real</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Notificações automáticas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Integração com transportadoras</span>
                </li>
              </ul>
              <Link
                href="/servicos/automacao/rastreamento"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Settings className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Shopping</h3>
              <p className="text-gray-600 mb-4">
                Transforme o WhatsApp em um canal de vendas com catálogo
                interativo e carrinho de compras integrado.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Catálogo de produtos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Carrinho de compras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Pagamento integrado</span>
                </li>
              </ul>
              <Link
                href="/servicos/automacao/whatsapp-shopping"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Settings className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Registro de Eventos
              </h3>
              <p className="text-gray-600 mb-4">
                Simplifique o processo de inscrição em eventos com um sistema
                automatizado de registro e gerenciamento.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Formulários personalizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Pagamento integrado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Emissão de credenciais</span>
                </li>
              </ul>
              <Link
                href="/servicos/automacao/eventos"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Clock className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Agendamento de Exames
              </h3>
              <p className="text-gray-600 mb-4">
                Automatize o agendamento de exames médicos ou técnicos com um
                sistema intuitivo e eficiente.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Seleção de horários disponíveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Confirmação automática</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Lembretes personalizados</span>
                </li>
              </ul>
              <Link
                href="/servicos/automacao/exames"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios da Automação de Processos
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Custos
              </h3>
              <p className="text-gray-600">
                Diminua custos operacionais automatizando tarefas repetitivas e
                reduzindo a necessidade de intervenção manual.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Aumento de Produtividade
              </h3>
              <p className="text-gray-600">
                Libere sua equipe para focar em atividades estratégicas enquanto
                as tarefas rotineiras são automatizadas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Erros
              </h3>
              <p className="text-gray-600">
                Minimize erros humanos com processos automatizados que seguem
                regras predefinidas com precisão.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Melhor Experiência do Cliente
              </h3>
              <p className="text-gray-600">
                Ofereça respostas mais rápidas e serviços mais eficientes,
                aumentando a satisfação dos clientes.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Escalabilidade
              </h3>
              <p className="text-gray-600">
                Expanda seus negócios sem aumentar proporcionalmente os custos
                operacionais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Insights de Dados
              </h3>
              <p className="text-gray-600">
                Obtenha dados valiosos sobre seus processos para tomar decisões
                mais informadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Implementamos a Automação
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Mapeamos seus processos atuais e identificamos oportunidades de
                automação.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planejamento</h3>
              <p className="text-gray-600">
                Desenvolvemos uma estratégia personalizada com soluções
                específicas para seu negócio.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementação</h3>
              <p className="text-gray-600">
                Desenvolvemos e implementamos as soluções de automação de forma
                ágil e eficiente.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Otimização</h3>
              <p className="text-gray-600">
                Monitoramos, avaliamos e otimizamos continuamente os processos
                automatizados.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para otimizar seus processos?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções
            de automação podem transformar seu negócio.
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
