"use client"

import { motion } from "framer-motion"
import { Check } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function GeracaoLeadsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Bot de Geração de Leads"
        description="Transforme visitantes em clientes potenciais com nosso bot inteligente de geração de leads, capturando informações valiosas e qualificando prospects 24 horas por dia."
        imageSrc="/rochaperin-bot-geracao-leads.webp"
        imageAlt="Bot de Geração de Leads"
        imageHeight={300}
      />

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Benefícios do Bot de Geração de Leads" />
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Captura 24/7</h3>
              <p className="text-gray-600">
                Capture leads a qualquer hora do dia ou da noite, sem necessidade de intervenção humana, maximizando
                suas oportunidades de negócio.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualificação Automática</h3>
              <p className="text-gray-600">
                Qualifique automaticamente seus leads com perguntas estratégicas, priorizando os contatos com maior
                potencial de conversão.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integração com CRM</h3>
              <p className="text-gray-600">
                Integre facilmente com seu sistema de CRM para transferência automática de dados, mantendo sua equipe de
                vendas sempre atualizada.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Como Funciona" />
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <div className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-4">
                    1
                  </div>
                  <h3 className="text-xl font-semibold">Engajamento Inicial</h3>
                </div>
                <p className="text-gray-600 ml-14">
                  O bot inicia a conversa com visitantes do seu site ou redes sociais, oferecendo informações relevantes
                  e capturando o interesse.
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
                  Através de perguntas estratégicas, o bot coleta informações essenciais como nome, e-mail, telefone e
                  necessidades específicas.
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
                  O sistema qualifica automaticamente os leads com base em critérios predefinidos, identificando os mais
                  propensos à conversão.
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
                  Leads qualificados são encaminhados para sua equipe de vendas ou integrados ao seu CRM para
                  acompanhamento imediato.
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/placeholder.svg?height=500&width=500&query=lead qualification process flowchart"
                alt="Processo de Geração de Leads"
                width={500}
                height={500}
                className="rounded-lg shadow-xl"
              />
            </motion.div>
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Aplicações do Bot de Geração de Leads" />
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Capture leads de visitantes interessados em produtos específicos, oferecendo descontos exclusivos em
                troca de informações de contato.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Imobiliárias</h3>
              <p className="text-gray-600 mb-4">
                Qualifique potenciais compradores ou locatários com base em preferências de localização, orçamento e
                características dos imóveis.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Serviços B2B</h3>
              <p className="text-gray-600 mb-4">
                Identifique empresas interessadas em seus serviços, coletando informações sobre porte, setor e
                necessidades específicas.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Instituições Educacionais</h3>
              <p className="text-gray-600 mb-4">
                Capture o interesse de potenciais alunos, coletando informações sobre áreas de interesse e
                qualificando-os para diferentes cursos e programas.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Nossos Diferenciais" />
          <div className="grid md:grid-cols-3 gap-6">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-3">Personalização Avançada</h3>
              <p className="text-gray-600">
                Nossos bots são altamente personalizáveis para refletir a identidade da sua marca e atender às
                necessidades específicas do seu negócio.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-3">Análise de Dados</h3>
              <p className="text-gray-600">
                Fornecemos relatórios detalhados sobre o desempenho do bot, taxa de conversão e qualidade dos leads
                gerados.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-3">Aprendizado Contínuo</h3>
              <p className="text-gray-600">
                Nossos bots utilizam inteligência artificial para melhorar continuamente suas interações e aumentar as
                taxas de conversão.
              </p>
            </motion.div>
          </div>
        </div>
        <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para aumentar sua geração de leads?"
        description="Transforme seu site e redes sociais em máquinas de captação de leads qualificados. Entre em contato hoje mesmo para uma demonstração personalizada."
      />
    </div>
  )
}
