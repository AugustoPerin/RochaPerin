import Link from "next/link";
import { CheckCircle, FileText, MessageSquare, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Abertura de Tickets</h1>
              <p className="text-xl mb-8">
                Automatize o processo de abertura e categorização de tickets de
                suporte com um chatbot inteligente que direciona as solicitações
                para os departamentos corretos.
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
                alt="Abertura de Tickets"
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
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Categorização Automática
              </h3>
              <p className="text-gray-600 mb-4">
                Identifique automaticamente o tipo de problema e direcione o
                ticket para o departamento ou especialista correto.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Reconhecimento de intenção</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Classificação por assunto</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Roteamento inteligente</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <FileText className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Priorização Inteligente
              </h3>
              <p className="text-gray-600 mb-4">
                Determine automaticamente a prioridade dos tickets com base na
                urgência, impacto e perfil do cliente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Análise de urgência</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Segmentação de clientes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Regras personalizáveis</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Users className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Integração com Helpdesk
              </h3>
              <p className="text-gray-600 mb-4">
                Conecte-se perfeitamente com os principais sistemas de helpdesk
                para uma gestão centralizada de tickets.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Múltiplas integrações</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Sincronização bidirecional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Atualizações automáticas</span>
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
                Resposta Mais Rápida
              </h3>
              <p className="text-gray-600">
                Reduza o tempo de resposta inicial com a abertura e
                categorização automática de tickets, melhorando a satisfação do
                cliente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Maior Eficiência
              </h3>
              <p className="text-gray-600">
                Otimize o fluxo de trabalho da equipe de suporte, direcionando
                os tickets para os especialistas certos desde o início.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Coleta de Informações Completas
              </h3>
              <p className="text-gray-600">
                Garanta que todas as informações necessárias sejam coletadas
                antes de criar o ticket, evitando idas e vindas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Resolução Proativa
              </h3>
              <p className="text-gray-600">
                Resolva problemas comuns automaticamente, antes mesmo da criação
                de um ticket, com respostas pré-programadas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Fluxo de Trabalho */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Fluxo de Trabalho Otimizado
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Fluxo de Trabalho"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Simplifique o processo de suporte do início ao fim
              </h3>
              <p className="text-gray-700 mb-6">
                Nossa solução de abertura de tickets automatiza todo o processo
                de suporte, desde o primeiro contato até a resolução final,
                garantindo eficiência e satisfação do cliente.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Autoatendimento</span>
                    <p className="text-gray-600">
                      Resolva problemas comuns automaticamente com base de
                      conhecimento integrada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Coleta Estruturada</span>
                    <p className="text-gray-600">
                      Obtenha todas as informações necessárias de forma
                      conversacional e estruturada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Acompanhamento Contínuo</span>
                    <p className="text-gray-600">
                      Mantenha os clientes informados sobre o status dos tickets
                      automaticamente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Pesquisa Pós-Resolução</span>
                    <p className="text-gray-600">
                      Colete feedback após a resolução para melhorar
                      continuamente o processo.
                    </p>
                  </div>
                </li>
              </ul>
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
              <h3 className="text-xl font-semibold mb-2">Contato</h3>
              <p className="text-gray-600">
                O cliente inicia o contato através de um dos canais disponíveis
                (chat, WhatsApp, e-mail, etc.).
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Identificação</h3>
              <p className="text-gray-600">
                O chatbot identifica o problema e coleta todas as informações
                necessárias para criar o ticket.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Criação</h3>
              <p className="text-gray-600">
                O sistema cria automaticamente um ticket categorizado e
                priorizado no sistema de helpdesk.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acompanhamento</h3>
              <p className="text-gray-600">
                O cliente recebe atualizações automáticas sobre o status do
                ticket até a resolução final.
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
                <FileText className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte Técnico</h3>
              <p className="text-gray-600">
                Equipes de suporte técnico que precisam gerenciar um grande
                volume de solicitações de forma eficiente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Atendimento ao Cliente
              </h3>
              <p className="text-gray-600">
                Empresas que desejam otimizar o processo de atendimento ao
                cliente e reduzir o tempo de resposta.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <FileText className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serviços Internos</h3>
              <p className="text-gray-600">
                Departamentos de TI e RH que gerenciam solicitações internas de
                funcionários e precisam de organização.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para otimizar seu processo de suporte?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossa solução de
            abertura de tickets pode transformar seu atendimento ao cliente.
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
