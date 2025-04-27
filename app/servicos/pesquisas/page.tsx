import Link from "next/link"
import { BarChart, CheckCircle, LineChart, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function PesquisasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">Pesquisas de Satisfação</h1>
              <p className="text-xl mb-8">
                Colete feedback dos clientes de forma eficiente com chatbots que realizam pesquisas de satisfação
                personalizadas e geram insights valiosos para seu negócio.
              </p>
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
                <Link href="/contato">Solicite uma demonstração</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Pesquisas de Satisfação"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Recursos Principais</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Questionários Interativos</h3>
              <p className="text-gray-600 mb-4">
                Crie pesquisas dinâmicas e conversacionais que engajam os clientes e aumentam as taxas de resposta.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Formato conversacional</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Perguntas personalizáveis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Lógica condicional</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <BarChart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise de Sentimento</h3>
              <p className="text-gray-600 mb-4">
                Identifique automaticamente o sentimento dos clientes em respostas abertas para entender melhor suas
                emoções.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Detecção de emoções</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Categorização automática</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Alertas para feedback negativo</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Relatórios Detalhados</h3>
              <p className="text-gray-600 mb-4">
                Visualize e analise os resultados das pesquisas com dashboards intuitivos e relatórios personalizáveis.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Dashboards em tempo real</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Exportação de dados</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Análise de tendências</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Benefícios para seu Negócio</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Aumento da Taxa de Resposta
              </h3>
              <p className="text-gray-600">
                Obtenha mais respostas com pesquisas conversacionais que são mais envolventes e menos intrusivas que
                formulários tradicionais.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Feedback em Tempo Real
              </h3>
              <p className="text-gray-600">
                Receba e analise feedback imediatamente após interações com clientes, permitindo ações corretivas
                rápidas.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Insights Acionáveis
              </h3>
              <p className="text-gray-600">
                Transforme dados brutos em insights práticos que podem ser usados para melhorar produtos, serviços e
                processos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Personalização Contínua
              </h3>
              <p className="text-gray-600">
                Use o feedback dos clientes para personalizar suas ofertas e comunicações, aumentando a relevância e
                satisfação.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Tipos de Pesquisas */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Tipos de Pesquisas</h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="Tipos de Pesquisas"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h3 className="text-2xl font-semibold mb-4">Pesquisas personalizadas para cada necessidade</h3>
              <p className="text-gray-700 mb-6">
                Oferecemos diferentes tipos de pesquisas para coletar feedback em diversos momentos da jornada do
                cliente.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">NPS (Net Promoter Score)</span>
                    <p className="text-gray-600">
                      Meça a lealdade dos clientes e a probabilidade de recomendação da sua marca.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">CSAT (Customer Satisfaction)</span>
                    <p className="text-gray-600">
                      Avalie a satisfação dos clientes após interações específicas ou compras.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">CES (Customer Effort Score)</span>
                    <p className="text-gray-600">
                      Meça o esforço necessário para os clientes resolverem problemas ou concluírem tarefas.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Pesquisas Pós-Atendimento</span>
                    <p className="text-gray-600">
                      Colete feedback imediatamente após interações de suporte ou atendimento ao cliente.
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
          <h2 className="text-3xl font-bold text-center mb-12">Como Funciona</h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuração</h3>
              <p className="text-gray-600">
                Configuramos as pesquisas de acordo com seus objetivos, definindo perguntas, gatilhos e canais.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Distribuição</h3>
              <p className="text-gray-600">
                O chatbot envia as pesquisas automaticamente nos momentos ideais através dos canais preferidos dos
                clientes.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Coleta</h3>
              <p className="text-gray-600">
                Os clientes respondem às pesquisas de forma conversacional, e os dados são coletados em tempo real.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Os dados são processados e apresentados em dashboards intuitivos, gerando insights acionáveis.
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
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Varejo e E-commerce</h3>
              <p className="text-gray-600">
                Empresas que desejam entender a satisfação dos clientes com produtos, entregas e experiência de compra.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Serviços e Assinaturas</h3>
              <p className="text-gray-600">
                Empresas que oferecem serviços contínuos e precisam monitorar a satisfação ao longo do tempo.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Suporte e Atendimento</h3>
              <p className="text-gray-600">
                Equipes de suporte que desejam avaliar a qualidade do atendimento e identificar áreas de melhoria.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Pronto para entender melhor seus clientes?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas pesquisas de satisfação podem ajudar a melhorar
            seus produtos e serviços.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/contato">Solicite uma demonstração</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
