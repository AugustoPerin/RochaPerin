import Link from "next/link"
import { ArrowRight, Bot, Cloud, Database, LineChart } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-700 to-blue-800 text-white py-12 md:py-20 lg:py-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center text-center md:mb-16">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
              Transforme seu negócio com automação inteligente
            </h1>
            <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-white/90">
              A RochaPerin é especialista em automação de processos, análise de dados, migração para nuvem e chatbots
              empresariais para impulsionar sua eficiência operacional.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100 px-6 py-3 font-medium">
                <Link href="/servicos">Conheça nossos serviços</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-blue-600 px-6 py-3 font-medium"
              >
                <Link href="/contato">Fale conosco</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Clientes Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossos Clientes</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
            {/* Client logos would go here - using placeholders for now */}
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[180px] h-[100px] flex items-center justify-center">
              <img src="/cliente-integral.png?height=60&width=120" alt="Colégio Integral" className="max-h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[180px] h-[100px] flex items-center justify-center">
              <img src="/placeholder.svg?height=60&width=120" alt="Cliente 2" className="max-h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[180px] h-[100px] flex items-center justify-center">
              <img src="/placeholder.svg?height=60&width=120" alt="Cliente 3" className="max-h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[180px] h-[100px] flex items-center justify-center">
              <img src="/placeholder.svg?height=60&width=120" alt="Cliente 4" className="max-h-12" />
            </div>
            <div className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow w-full max-w-[180px] h-[100px] flex items-center justify-center">
              <img src="/placeholder.svg?height=60&width=120" alt="Cliente 5" className="max-h-12" />
            </div>
          </div>
          <div className="text-center mt-10">
            <Button asChild variant="outline">
              <Link href="/clientes">Ver todos os clientes</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Serviços Principais */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nossas Especialidades</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Bot className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Chatbots Empresariais</h3>
              <p className="text-gray-600 mb-4">
                Automatize o atendimento ao cliente e processos internos com chatbots inteligentes.
              </p>
              <Link href="/servicos/chatbots" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <LineChart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Automação de Processos</h3>
              <p className="text-gray-600 mb-4">
                Otimize fluxos de trabalho e aumente a eficiência operacional com automação inteligente.
              </p>
              <Link href="/servicos/automacao" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Database className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise de Dados</h3>
              <p className="text-gray-600 mb-4">
                Transforme dados em insights estratégicos para tomada de decisões mais inteligentes.
              </p>
              <Link href="/servicos/analise-dados" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <Cloud className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Migração para Nuvem</h3>
              <p className="text-gray-600 mb-4">
                Modernize sua infraestrutura com soluções de nuvem seguras e escaláveis.
              </p>
              <Link href="/servicos/migracao-nuvem" className="text-blue-600 flex items-center hover:underline">
                Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Soluções em Destaque */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-4">Soluções em Destaque</h2>
          <p className="text-center text-gray-600 mb-12 max-w-3xl mx-auto">
            Conheça algumas das nossas soluções mais populares que estão transformando negócios em todo o Brasil.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Atendimento ao Cliente"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Chatbot de Atendimento</h3>
                <p className="text-gray-600 mb-4">
                  Automatize o atendimento ao cliente (SAC) com respostas rápidas e precisas 24/7.
                </p>
                <Link href="/servicos/chatbots/atendimento" className="text-blue-600 flex items-center hover:underline">
                  Ver detalhes <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="Agendamento de Serviços"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">Agendamento Automatizado</h3>
                <p className="text-gray-600 mb-4">
                  Simplifique o agendamento de serviços e exames com nossa solução intuitiva.
                </p>
                <Link
                  href="/servicos/automacao/agendamento"
                  className="text-blue-600 flex items-center hover:underline"
                >
                  Ver detalhes <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>

            <div className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              <img
                src="/placeholder.svg?height=200&width=400"
                alt="WhatsApp Shopping"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">WhatsApp Shopping</h3>
                <p className="text-gray-600 mb-4">
                  Transforme o WhatsApp em um canal de vendas com catálogo interativo e carrinho de compras.
                </p>
                <Link
                  href="/servicos/automacao/whatsapp-shopping"
                  className="text-blue-600 flex items-center hover:underline"
                >
                  Ver detalhes <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <Button asChild size="lg">
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
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