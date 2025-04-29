import Image from "next/image";
import Link from "next/link";
import { Check } from "lucide-react";

export default function GeracaoLeadsPage() {
  return (
    <main className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-600 to-blue-800 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Bot de Geração de Leads
              </h1>
              <p className="text-xl mb-8">
                Transforme visitantes em clientes potenciais com nosso bot
                inteligente de geração de leads, capturando informações valiosas
                e qualificando prospects 24 horas por dia.
              </p>
              <Link
                href="/contato"
                className="bg-white text-blue-700 hover:bg-blue-100 px-6 py-3 rounded-md font-medium transition duration-300"
              >
                Solicitar Demonstração
              </Link>
            </div>
            <div className="md:w-1/2">
              <Image
                src="/placeholder.svg?height=400&width=500"
                alt="Bot de Geração de Leads"
                width={500}
                height={400}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios do Bot de Geração de Leads
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Captura 24/7</h3>
              <p className="text-gray-600">
                Capture leads a qualquer hora do dia ou da noite, sem
                necessidade de intervenção humana, maximizando suas
                oportunidades de negócio.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">
                Qualificação Automática
              </h3>
              <p className="text-gray-600">
                Qualifique automaticamente seus leads com perguntas
                estratégicas, priorizando os contatos com maior potencial de
                conversão.
              </p>
            </div>
            <div className="bg-gray-50 p-6 rounded-lg shadow-md">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integração com CRM</h3>
              <p className="text-gray-600">
                Integre facilmente com seu sistema de CRM para transferência
                automática de dados, mantendo sua equipe de vendas sempre
                atualizada.
              </p>
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
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Engajamento Inicial</h3>
                </div>
                <p className="text-gray-600 ml-14">
                  O bot inicia a conversa com visitantes do seu site ou redes
                  sociais, oferecendo informações relevantes e capturando o
                  interesse.
                </p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    2
                  </div>
                  <h3 className="text-xl font-semibold">Coleta de Dados</h3>
                </div>
                <p className="text-gray-600 ml-14">
                  Através de perguntas estratégicas, o bot coleta informações
                  essenciais como nome, e-mail, telefone e necessidades
                  específicas.
                </p>
              </div>
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    3
                  </div>
                  <h3 className="text-xl font-semibold">Qualificação</h3>
                </div>
                <p className="text-gray-600 ml-14">
                  O sistema qualifica automaticamente os leads com base em
                  critérios predefinidos, identificando os mais propensos à
                  conversão.
                </p>
              </div>
              <div>
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    4
                  </div>
                  <h3 className="text-xl font-semibold">Encaminhamento</h3>
                </div>
                <p className="text-gray-600 ml-14">
                  Leads qualificados são encaminhados para sua equipe de vendas
                  ou integrados ao seu CRM para acompanhamento imediato.
                </p>
              </div>
            </div>
            <div>
              <Image
                src="/placeholder.svg?height=500&width=500"
                alt="Processo de Geração de Leads"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Aplicações do Bot de Geração de Leads
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Capture leads de visitantes interessados em produtos
                específicos, oferecendo descontos exclusivos em troca de
                informações de contato.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Imobiliárias</h3>
              <p className="text-gray-600 mb-4">
                Qualifique potenciais compradores ou locatários com base em
                preferências de localização, orçamento e características dos
                imóveis.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">Serviços B2B</h3>
              <p className="text-gray-600 mb-4">
                Identifique empresas interessadas em seus serviços, coletando
                informações sobre porte, setor e necessidades específicas.
              </p>
            </div>
            <div className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300">
              <h3 className="text-xl font-semibold mb-4">
                Instituições Educacionais
              </h3>
              <p className="text-gray-600 mb-4">
                Capture o interesse de potenciais alunos, coletando informações
                sobre áreas de interesse e qualificando-os para diferentes
                cursos e programas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Nossos Diferenciais
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Personalização Avançada
              </h3>
              <p className="text-gray-600">
                Nossos bots são altamente personalizáveis para refletir a
                identidade da sua marca e atender às necessidades específicas do
                seu negócio.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">Análise de Dados</h3>
              <p className="text-gray-600">
                Fornecemos relatórios detalhados sobre o desempenho do bot, taxa
                de conversão e qualidade dos leads gerados.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-3">
                Aprendizado Contínuo
              </h3>
              <p className="text-gray-600">
                Nossos bots utilizam inteligência artificial para melhorar
                continuamente suas interações e aumentar as taxas de conversão.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">
            Pronto para aumentar sua geração de leads?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Transforme seu site e redes sociais em máquinas de captação de leads
            qualificados. Entre em contato hoje mesmo para uma demonstração
            personalizada.
          </p>
          <Link
            href="/contato"
            className="bg-white text-blue-700 hover:bg-blue-100 px-8 py-4 rounded-md font-medium text-lg transition duration-300 inline-block"
          >
            Solicitar Demonstração
          </Link>
        </div>
      </section>
    </main>
  );
}
