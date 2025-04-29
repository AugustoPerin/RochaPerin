import Link from "next/link";
import { Bot, CheckCircle, Gift, LineChart } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function OfertasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">
                Ofertas Promocionais Personalizadas
              </h1>
              <p className="text-xl mb-8">
                Envie ofertas personalizadas aos clientes com base em seu
                histórico de compras e preferências, aumentando as taxas de
                conversão e o valor médio do pedido.
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
                alt="Ofertas Promocionais Personalizadas"
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
                <Bot className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Personalização Avançada
              </h3>
              <p className="text-gray-600 mb-4">
                Crie ofertas altamente personalizadas com base no histórico de
                compras, comportamento de navegação e preferências do cliente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Recomendações inteligentes</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Ofertas contextuais</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Mensagens personalizadas</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Gift className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Segmentação de Clientes
              </h3>
              <p className="text-gray-600 mb-4">
                Divida sua base de clientes em segmentos estratégicos para
                enviar ofertas mais relevantes e eficazes.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Segmentação comportamental</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Segmentação demográfica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Segmentação por valor</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Análise de Conversão
              </h3>
              <p className="text-gray-600 mb-4">
                Acompanhe o desempenho das suas ofertas com métricas detalhadas
                para otimizar continuamente suas campanhas.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Taxas de abertura</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Taxas de conversão</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>ROI por campanha</span>
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
                Aumento das Vendas
              </h3>
              <p className="text-gray-600">
                Impulsione as vendas com ofertas relevantes que atendem às
                necessidades e desejos específicos de cada cliente.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Maior Engajamento
              </h3>
              <p className="text-gray-600">
                Aumente o engajamento dos clientes com comunicações
                personalizadas que demonstram que você entende suas
                preferências.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Abandono
              </h3>
              <p className="text-gray-600">
                Recupere vendas perdidas com ofertas personalizadas para
                clientes que abandonaram carrinhos ou interromperam o processo
                de compra.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Fidelização de Clientes
              </h3>
              <p className="text-gray-600">
                Fortaleça o relacionamento com seus clientes através de ofertas
                exclusivas que aumentam a lealdade à marca.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Ofertas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Tipos de Ofertas Personalizadas
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Tipos de Ofertas"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">
                Estratégias eficazes para diferentes objetivos
              </h3>
              <p className="text-gray-700 mb-6">
                Nosso sistema de ofertas personalizadas permite criar diferentes
                tipos de promoções para atender a objetivos específicos de
                negócio e estágios da jornada do cliente.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Ofertas de Boas-vindas</span>
                    <p className="text-gray-600">
                      Incentive a primeira compra com descontos especiais para
                      novos clientes.
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
                      Recompra e Cross-selling
                    </span>
                    <p className="text-gray-600">
                      Sugira produtos complementares com base nas compras
                      anteriores do cliente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Recuperação de Carrinho</span>
                    <p className="text-gray-600">
                      Envie lembretes e incentivos para clientes que abandonaram
                      o carrinho de compras.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={20}
                  />
                  <div>
                    <span className="font-medium">Reativação de Clientes</span>
                    <p className="text-gray-600">
                      Reconquiste clientes inativos com ofertas especiais
                      baseadas em seu histórico de compras.
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
              <h3 className="text-xl font-semibold mb-2">Coleta de Dados</h3>
              <p className="text-gray-600">
                O sistema coleta e analisa dados de comportamento, histórico de
                compras e preferências dos clientes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Segmentação</h3>
              <p className="text-gray-600">
                Os clientes são segmentados em grupos com base em comportamentos
                e características similares.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Criação de Ofertas</h3>
              <p className="text-gray-600">
                Ofertas personalizadas são criadas para cada segmento,
                maximizando a relevância e o impacto.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega e Análise</h3>
              <p className="text-gray-600">
                As ofertas são entregues pelos canais preferidos e os resultados
                são analisados para otimização contínua.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Canais de Entrega */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Canais de Entrega
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">E-mail Marketing</h3>
              <p className="text-gray-600">
                Envie ofertas personalizadas diretamente para a caixa de entrada
                dos seus clientes com designs atrativos e mensagens persuasivas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">WhatsApp e SMS</h3>
              <p className="text-gray-600">
                Alcance seus clientes em tempo real com mensagens diretas
                contendo ofertas exclusivas e códigos promocionais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8 text-blue-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-semibold mb-2">Site e App</h3>
              <p className="text-gray-600">
                Exiba ofertas personalizadas diretamente no seu site ou
                aplicativo, adaptadas ao comportamento de navegação em tempo
                real.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para aumentar suas vendas com ofertas personalizadas?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transforme seus dados em estratégias de vendas eficazes e ofereça
            aos seus clientes exatamente o que eles desejam, no momento certo.
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
