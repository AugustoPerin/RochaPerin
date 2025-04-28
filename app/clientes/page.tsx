import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function ClientesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Nossos Clientes</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Conheça algumas das empresas que confiam em nossas soluções para transformar seus negócios.
          </p>
        </div>
      </section>

      {/* Clientes Destacados */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Clientes Destacados</h2>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-12">
            {/* Client logos - using placeholders for now */}
            {Array.from({ length: 8 }).map((_, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow flex flex-col items-center"
              >
                <div className="bg-gray-100 w-full h-32 rounded-md mb-4 flex items-center justify-center">
                  <img
                    src={`/placeholder.svg?height=80&width=160&text=Cliente ${index + 1}`}
                    alt={`Cliente ${index + 1}`}
                    className="max-h-16"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">Empresa {index + 1}</h3>
                <p className="text-gray-600 text-center text-sm">
                  {index % 2 === 0
                    ? "Implementação de chatbot para atendimento ao cliente"
                    : "Automação de processos internos e análise de dados"}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button asChild>
              <Link href="/contato">Seja nosso cliente</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">O que nossos clientes dizem</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonials */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "A implementação do chatbot da RochaPerin reduziu nosso tempo de resposta em 80% e aumentou a satisfação
                dos clientes significativamente."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">Diretora de Atendimento, Empresa A</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "A automação de processos implementada pela equipe da RochaPerin nos permitiu reduzir custos
                operacionais em 35% no primeiro ano."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <p className="text-gray-600 text-sm">COO, Empresa B</p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-gray-700 mb-4 italic">
                "A migração para nuvem foi realizada com zero tempo de inatividade e nos proporcionou uma infraestrutura
                muito mais escalável e segura."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-gray-200 rounded-full mr-4"></div>
                <div>
                  <h4 className="font-semibold">Ana Oliveira</h4>
                  <p className="text-gray-600 text-sm">CTO, Empresa C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Quer fazer parte desta lista?</h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossas soluções podem transformar o seu negócio.
          </p>
          <Button asChild size="lg" className="bg-white text-blue-700 hover:bg-gray-100">
            <Link href="/contato">Solicite uma demonstração</Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
