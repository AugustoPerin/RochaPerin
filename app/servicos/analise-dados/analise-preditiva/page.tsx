"use client"

import { motion } from "framer-motion"
import { Check, BrainCircuit, TrendingUp, Target, Lightbulb, AlertTriangle } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function AnalisePreditivaPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Análise Preditiva"
        description="Antecipe tendências, preveja resultados futuros e tome decisões proativas com base em modelos de análise preditiva robustos e personalizados para o seu negócio."
        imageSrc="/placeholder.svg" // Placeholder, replace if needed
        imageAlt="Análise Preditiva"
        imageHeight={300}
      />

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Benefícios da Análise Preditiva" />
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
                <Lightbulb className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Decisões Proativas</h3>
              <p className="text-gray-600">
                Identifique oportunidades e riscos futuros, permitindo que você tome ações preventivas e estratégicas.
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
                <TrendingUp className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Otimização de Resultados</h3>
              <p className="text-gray-600">
                Melhore a eficiência operacional, preveja a demanda de clientes e otimize campanhas de marketing.
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
              <h3 className="text-xl font-semibold mb-3">Vantagem Competitiva</h3>
              <p className="text-gray-600">
                Saia na frente da concorrência ao antecipar movimentos do mercado e necessidades dos clientes.
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
                <BrainCircuit className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modelagem Personalizada</h3>
              <p className="text-gray-600">
                Desenvolvemos modelos preditivos (Machine Learning, IA) adaptados aos seus dados e objetivos específicos.
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
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Previsão de Demanda</h3>
              <p className="text-gray-600">
                Antecipe a demanda por produtos ou serviços, otimizando estoque e planejamento de recursos.
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
                <Target className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Análise de Churn</h3>
              <p className="text-gray-600">
                Identifique clientes com maior probabilidade de cancelar serviços e crie estratégias de retenção eficazes.
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
                <AlertTriangle className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Detecção de Fraudes</h3>
              <p className="text-gray-600">
                Utilize algoritmos para identificar padrões suspeitos e prevenir atividades fraudulentas em tempo real.
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
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Validação e Monitoramento</h3>
              <p className="text-gray-600">
                Validamos a precisão dos modelos e monitoramos seu desempenho continuamente para garantir resultados confiáveis.
              </p>
            </motion.div>
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Nosso Processo de Análise Preditiva" />
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
              <h3 className="text-lg font-semibold mb-2">Definição do Problema</h3>
              <p className="text-gray-600">Compreendemos o objetivo de negócio e definimos as métricas a serem previstas.</p>
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
              <h3 className="text-lg font-semibold mb-2">Coleta e Preparação</h3>
              <p className="text-gray-600">Coletamos, limpamos e preparamos os dados históricos relevantes para a modelagem.</p>
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
              <h3 className="text-lg font-semibold mb-2">Modelagem e Treinamento</h3>
              <p className="text-gray-600">Desenvolvemos e treinamos diferentes modelos preditivos usando os dados preparados.</p>
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
              <h3 className="text-lg font-semibold mb-2">Implementação e Monitoramento</h3>
              <p className="text-gray-600">Implementamos o melhor modelo e monitoramos seu desempenho para ajustes contínuos.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
         <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Aplicações da Análise Preditiva" />
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
              <h3 className="text-xl font-semibold mb-4">Varejo e E-commerce</h3>
              <p className="text-gray-600 mb-4">
                Previsão de vendas, otimização de estoque, recomendação de produtos e prevenção de churn.
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
              <h3 className="text-xl font-semibold mb-4">Setor Financeiro</h3>
              <p className="text-gray-600 mb-4">
                Análise de risco de crédito, detecção de fraudes, previsão de inadimplência e otimização de portfólio.
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
              <h3 className="text-xl font-semibold mb-4">Saúde</h3>
              <p className="text-gray-600 mb-4">
                Previsão de diagnósticos, otimização de tratamentos, gestão de leitos e prevenção de epidemias.
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
              <h3 className="text-xl font-semibold mb-4">Indústria e Manufatura</h3>
              <p className="text-gray-600 mb-4">
                Manutenção preditiva de equipamentos, otimização da cadeia de suprimentos e controle de qualidade.
              </p>
            </motion.div>
          </div>
        </div>
         <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para prever o futuro do seu negócio?"
        description="Descubra o poder da análise preditiva. Entre em contato conosco para uma consulta e veja como podemos ajudar você a tomar decisões mais inteligentes."
      />
    </div>
  )
}

