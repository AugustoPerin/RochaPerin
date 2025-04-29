import Link from "next/link";
import { ArrowRight, Bot, CheckCircle, MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ChatbotsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Chatbots Empresariais</h1>
              <p className="text-xl mb-8">
                Automatize o atendimento, aumente a eficiência e melhore a
                experiência dos seus clientes com chatbots inteligentes.
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
                alt="Chatbots Empresariais"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios dos Chatbots Empresariais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Atendimento 24/7</h3>
              <p className="text-gray-600">
                Ofereça suporte aos seus clientes a qualquer hora do dia, todos
                os dias da semana, sem custos adicionais.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bot className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Redução de Custos</h3>
              <p className="text-gray-600">
                Diminua os custos operacionais automatizando tarefas repetitivas
                e otimizando recursos humanos.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Escalabilidade</h3>
              <p className="text-gray-600">
                Atenda milhares de clientes simultaneamente sem perda de
                qualidade ou tempo de espera.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bot className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalização</h3>
              <p className="text-gray-600">
                Ofereça experiências personalizadas com base no histórico e
                preferências de cada cliente.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Coleta de Dados</h3>
              <p className="text-gray-600">
                Obtenha insights valiosos sobre seus clientes para melhorar
                produtos e serviços.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bot className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Integração</h3>
              <p className="text-gray-600">
                Integre facilmente com sistemas existentes como CRM, ERP e
                plataformas de e-commerce.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Chatbots */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Chatbots Especializados
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Atendimento ao Cliente (SAC)
              </h3>
              <p className="text-gray-600 mb-4">
                Automatize o atendimento ao cliente com um chatbot inteligente
                que responde dúvidas e resolve problemas 24/7.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Respostas instantâneas para perguntas frequentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Escalonamento inteligente para atendentes humanos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Integração com sistemas de CRM e helpdesk</span>
                </li>
              </ul>
              <Link
                href="/servicos/chatbots/atendimento"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Geração de Leads</h3>
              <p className="text-gray-600 mb-4">
                Capture e qualifique leads automaticamente com um chatbot que
                engaja visitantes e coleta informações relevantes.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Qualificação automática de leads</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Integração com ferramentas de marketing</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Segmentação e direcionamento personalizado</span>
                </li>
              </ul>
              <Link
                href="/servicos/chatbots/leads"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">
                Pesquisas de Satisfação
              </h3>
              <p className="text-gray-600 mb-4">
                Colete feedback dos clientes de forma eficiente com chatbots que
                realizam pesquisas de satisfação personalizadas.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Questionários interativos e dinâmicos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Análise de sentimento e feedback</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Relatórios detalhados e insights acionáveis</span>
                </li>
              </ul>
              <Link
                href="/servicos/chatbots/pesquisas"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">Cobrança Amigável</h3>
              <p className="text-gray-600 mb-4">
                Automatize o processo de cobrança com um chatbot que envia
                lembretes amigáveis e facilita o pagamento.
              </p>
              <ul className="mb-4 space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Lembretes personalizados e não invasivos</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Múltiplas opções de pagamento</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Negociação de prazos e condições</span>
                </li>
              </ul>
              <Link
                href="/servicos/chatbots/cobranca"
                className="text-blue-600 flex items-center hover:underline"
              >
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Analisamos suas necessidades e processos para identificar as
                melhores oportunidades de automação.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Desenvolvimento</h3>
              <p className="text-gray-600">
                Criamos um chatbot personalizado com fluxos de conversa e
                integrações específicas para o seu negócio.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementação</h3>
              <p className="text-gray-600">
                Implementamos, testamos e otimizamos o chatbot para garantir o
                melhor desempenho e experiência do usuário.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para transformar seu atendimento?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossos chatbots
            podem revolucionar a experiência dos seus clientes.
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
