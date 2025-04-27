import Link from "next/link"
import { Award, CheckCircle, Clock, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function SobrePage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Sobre a RochaPerin</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça nossa história, missão e os valores que nos guiam na transformação digital de empresas.
          </p>
        </div>
      </section>

      {/* Quem Somos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center gap-12">
            <div className="md:w-1/2">
              <img
                src="/placeholder.svg?height=400&width=600"
                alt="Equipe RochaPerin"
                className="rounded-lg shadow-lg"
              />
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl font-bold mb-6">Quem Somos</h2>
              <p className="text-gray-700 mb-4">
                A RochaPerin é uma empresa brasileira especializada em soluções tecnológicas para automação de
                processos, análise de dados, migração para nuvem e desenvolvimento de chatbots empresariais.
              </p>
              <p className="text-gray-700 mb-4">
                Fundada em 2015, nossa empresa nasceu com o propósito de ajudar organizações a se adaptarem ao mundo
                digital, otimizando processos e melhorando a experiência de seus clientes através da tecnologia.
              </p>
              <p className="text-gray-700 mb-6">
                Com uma equipe multidisciplinar de especialistas em tecnologia, negócios e experiência do usuário,
                desenvolvemos soluções personalizadas que atendem às necessidades específicas de cada cliente,
                independentemente do tamanho ou setor de atuação.
              </p>
              <div className="flex flex-wrap gap-4">
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Users className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="font-medium">+100 Clientes</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Award className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="font-medium">+50 Projetos</span>
                </div>
                <div className="flex items-center">
                  <div className="bg-blue-100 p-2 rounded-full mr-3">
                    <Clock className="text-blue-600 w-5 h-5" />
                  </div>
                  <span className="font-medium">8 Anos de Experiência</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Missão, Visão e Valores */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Missão, Visão e Valores</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Missão</h3>
              <p className="text-gray-700">
                Transformar negócios através da tecnologia, automatizando processos e melhorando a experiência dos
                clientes com soluções inovadoras e personalizadas.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Visão</h3>
              <p className="text-gray-700">
                Ser reconhecida como referência em soluções tecnológicas no Brasil, contribuindo para a transformação
                digital de empresas de todos os portes e setores.
              </p>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold mb-4 text-blue-700">Valores</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Inovação constante</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Excelência técnica</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Foco no cliente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Ética e transparência</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                  <span>Compromisso com resultados</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Abordagem */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossa Abordagem</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Diagnóstico</h3>
              <p className="text-gray-600">
                Analisamos profundamente os processos e necessidades do seu negócio para identificar oportunidades de
                melhoria.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planejamento</h3>
              <p className="text-gray-600">
                Desenvolvemos um plano estratégico personalizado com soluções que atendam às necessidades específicas da
                sua empresa.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementação</h3>
              <p className="text-gray-600">
                Executamos o projeto com metodologias ágeis, garantindo entregas rápidas e de alta qualidade.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acompanhamento</h3>
              <p className="text-gray-600">
                Oferecemos suporte contínuo e monitoramento de resultados para garantir o sucesso a longo prazo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Vamos trabalhar juntos?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco para discutir como podemos ajudar a transformar o seu negócio.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/contato">Fale com um especialista</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
