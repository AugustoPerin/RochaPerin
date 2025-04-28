import Link from "next/link"
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle,
  CreditCard,
  FileText,
  MessageSquare,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ServicosPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça as soluções que a RochaPerin oferece para transformar e otimizar o seu negócio.
          </p>
        </div>
      </section>

      {/* Categorias de Serviços */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Automação de Processos</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Agendamento de Serviços */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Calendar className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Agendamento de Serviços</h3>
              <p className="text-gray-600 mb-4">
                Automatize o processo de agendamento de serviços, permitindo que seus clientes marquem horários de forma
                rápida e eficiente.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Integração com calendários</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Lembretes automáticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Gestão de disponibilidade</span>
                </li>
              </ul>
              <Link href="/servicos/agendamento" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Cotação Automatizada */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Cotação Automatizada</h3>
              <p className="text-gray-600 mb-4">
                Agilize o processo de cotação com um sistema inteligente que gera orçamentos personalizados
                instantaneamente.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Cálculos automáticos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Personalização de propostas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Integração com CRM</span>
                </li>
              </ul>
              <Link href="/servicos/cotacao" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Catálogo Interativo */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Catálogo Interativo</h3>
              <p className="text-gray-600 mb-4">
                Ofereça um catálogo digital interativo que permite aos clientes explorar produtos e serviços de forma
                dinâmica.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Busca avançada</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Filtros personalizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Atualização em tempo real</span>
                </li>
              </ul>
              <Link href="/servicos/catalogo" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* WhatsApp Shopping */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ShoppingCart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp Shopping</h3>
              <p className="text-gray-600 mb-4">
                Transforme o WhatsApp em um canal de vendas com catálogo interativo e carrinho de compras integrado.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Catálogo de produtos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Carrinho de compras</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Pagamento integrado</span>
                </li>
              </ul>
              <Link href="/servicos/whatsapp-shopping" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Rastreamento de Pedidos */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Truck className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rastreamento de Pedidos</h3>
              <p className="text-gray-600 mb-4">
                Ofereça aos seus clientes um sistema de rastreamento de pedidos em tempo real, aumentando a
                transparência e satisfação.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Atualizações em tempo real</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Notificações automáticas</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Integração com transportadoras</span>
                </li>
              </ul>
              <Link href="/servicos/rastreamento" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            {/* Registro de Eventos */}
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Registro de Eventos</h3>
              <p className="text-gray-600 mb-4">
                Simplifique o processo de inscrição em eventos com um sistema automatizado de registro e gerenciamento.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Formulários personalizados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Pagamento integrado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Emissão de credenciais</span>
                </li>
              </ul>
              <Link href="/servicos/eventos" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-12">Chatbots Especializados</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Atendimento ao Cliente (SAC) */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MessageSquare className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Atendimento ao Cliente (SAC)</h3>
                <p className="text-gray-600 mb-4">
                  Automatize o atendimento ao cliente com um chatbot inteligente que responde dúvidas e resolve
                  problemas 24/7.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Respostas instantâneas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Escalonamento para humanos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Integração com CRM</span>
                  </li>
                </ul>
                <Link href="/servicos/chatbot-sac" className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Pesquisas de Satisfação */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MessageSquare className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Pesquisas de Satisfação</h3>
                <p className="text-gray-600 mb-4">
                  Colete feedback dos clientes de forma eficiente com chatbots que realizam pesquisas de satisfação
                  personalizadas.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Questionários interativos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Análise de sentimento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Relatórios detalhados</span>
                  </li>
                </ul>
                <Link href="/servicos/pesquisas" className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Abertura de Tickets */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <MessageSquare className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Abertura de Tickets</h3>
                <p className="text-gray-600 mb-4">
                  Automatize o processo de abertura e categorização de tickets de suporte com um chatbot inteligente.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Categorização automática</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Priorização inteligente</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Integração com helpdesk</span>
                  </li>
                </ul>
                <Link href="/servicos/tickets" className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Bot de Geração de Leads */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Bot className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bot de Geração de Leads</h3>
                <p className="text-gray-600 mb-4">
                  Capture e qualifique leads automaticamente com um chatbot que engaja visitantes e coleta informações
                  relevantes.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Qualificação de leads</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Integração com CRM</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Segmentação automática</span>
                  </li>
                </ul>
                <Link href="/servicos/geracao-leads" className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Ofertas Promocionais */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <Bot className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Ofertas Promocionais</h3>
                <p className="text-gray-600 mb-4">
                  Envie ofertas personalizadas aos clientes com base em seu histórico de compras e preferências.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Personalização avançada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Segmentação de clientes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Análise de conversão</span>
                  </li>
                </ul>
                <Link href="/servicos/ofertas" className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>

              {/* Bot de Cobrança */}
              <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                  <CreditCard className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-2">Bot de Cobrança Amigável</h3>
                <p className="text-gray-600 mb-4">
                  Automatize o processo de cobrança com um chatbot que envia lembretes amigáveis e facilita o pagamento.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Lembretes personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Opções de pagamento</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Negociação de prazos</span>
                  </li>
                </ul>
                <Link href="/servicos/cobranca" className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para transformar seu negócio?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções podem impulsionar sua empresa.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/contato">Solicite uma demonstração</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
