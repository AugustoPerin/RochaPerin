"use client"

import { motion } from "framer-motion"
import { Check, Users, Target, Heart, Filter, UserCheck } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function AnaliseClientesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Análise de Clientes (Customer Analytics)"
        description="Compreenda profundamente o comportamento, as preferências e o valor dos seus clientes para personalizar experiências, aumentar a retenção e otimizar estratégias de marketing."
        imageSrc="/placeholder.svg" // Placeholder, replace if needed
        imageAlt="Análise de Clientes"
        imageHeight={300}
      />

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Benefícios da Análise de Clientes" />
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
                <Users className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Visão Completa do Cliente</h3>
              <p className="text-gray-600">
                Unifique dados de diferentes pontos de contato para criar um perfil 360º de cada cliente.
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
                <Heart className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Aumento da Retenção</h3>
              <p className="text-gray-600">
                Identifique fatores que levam ao churn e desenvolva estratégias personalizadas para reter clientes valiosos.
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
                <Target className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Personalização Eficaz</h3>
              <p className="text-gray-600">
                Segmente seus clientes com precisão e ofereça produtos, serviços e comunicações altamente relevantes.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Filter className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Segmentação Avançada</h3>
              <p className="text-gray-600">
                Crie segmentos de clientes com base em dados demográficos, comportamentais, transacionais e de valor (RFM, LTV).
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
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Análise de Comportamento</h3>
              <p className="text-gray-600">
                Mapeie a jornada do cliente, analise padrões de compra, uso de produtos/serviços e interações com a marca.
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
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Heart className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Previsão de Churn e LTV</h3>
              <p className="text-gray-600">
                Utilize modelos preditivos para identificar clientes em risco de churn e estimar o valor do tempo de vida do cliente.
              </p>
            </motion.div>
             <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Recomendação Personalizada</h3>
              <p className="text-gray-600">
                Sugira produtos, serviços ou conteúdos relevantes para cada cliente com base em seu histórico e perfil.
              </p>
            </motion.div>
             <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <UserCheck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Análise de Sentimento</h3>
              <p className="text-gray-600">
                Monitore feedbacks, avaliações e menções em redes sociais para entender a percepção dos clientes sobre sua marca.
              </p>
            </motion.div>
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Nosso Processo de Análise de Clientes" />
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Coleta e Integração</h3>
              <p className="text-gray-600">Reunimos dados de CRM, vendas, marketing, suporte e outras fontes relevantes.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Limpeza e Preparação</h3>
              <p className="text-gray-600">Tratamos e enriquecemos os dados para garantir sua qualidade e consistência.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Análise e Modelagem</h3>
              <p className="text-gray-600">Aplicamos técnicas estatísticas e de Machine Learning para extrair insights.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Visualização e Ação</h3>
              <p className="text-gray-600">Apresentamos os resultados em dashboards e ajudamos a traduzi-los em ações concretas.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
         <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Onde Aplicar a Análise de Clientes" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Marketing e Vendas</h3>
              <p className="text-gray-600 mb-4">
                Otimização de campanhas, personalização de ofertas, identificação de leads qualificados e previsão de vendas.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Desenvolvimento de Produtos</h3>
              <p className="text-gray-600 mb-4">
                Identificação de necessidades não atendidas, priorização de features e feedback para melhoria contínua.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Atendimento ao Cliente</h3>
              <p className="text-gray-600 mb-4">
                Personalização do suporte, antecipação de problemas, otimização de canais e medição da satisfação.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Estratégia de Negócios</h3>
              <p className="text-gray-600 mb-4">
                Definição de público-alvo, posicionamento de mercado, precificação e identificação de novas oportunidades.
              </p>
            </motion.div>
          </div>
        </div>
         <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Quer conhecer seus clientes como nunca antes?"
        description="Desvende os segredos por trás dos seus dados de clientes. Fale com nossos especialistas em Customer Analytics e comece a construir relacionamentos mais fortes e lucrativos."
      />
    </div>
  )
}

