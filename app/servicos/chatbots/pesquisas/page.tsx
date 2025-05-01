"use client"

import { motion } from "framer-motion"
import { MessageSquare, BarChart, LineChart, CheckCircle } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function PesquisasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Pesquisas de Satisfação"
        description="Colete feedback dos clientes de forma eficiente com chatbots que realizam pesquisas de satisfação personalizadas e geram insights valiosos para seu negócio."
        imageSrc="/customer-satisfaction-dashboard.png"
        imageAlt="Pesquisas de Satisfação"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={MessageSquare}
              title="Questionários Interativos"
              description="Crie pesquisas dinâmicas e conversacionais que engajam os clientes e aumentam as taxas de resposta."
              features={["Formato conversacional", "Perguntas personalizáveis", "Lógica condicional"]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={BarChart}
              title="Análise de Sentimento"
              description="Identifique automaticamente o sentimento dos clientes em respostas abertas para entender melhor suas emoções."
              features={["Detecção de emoções", "Categorização automática", "Alertas para feedback negativo"]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={LineChart}
              title="Relatórios Detalhados"
              description="Visualize e analise os resultados das pesquisas com dashboards intuitivos e relatórios personalizáveis."
              features={["Dashboards em tempo real", "Exportação de dados", "Análise de tendências"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Benefícios para seu Negócio" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <UnifiedBenefitCard
              title="Aumento da Taxa de Resposta"
              description="Obtenha mais respostas com pesquisas conversacionais que são mais envolventes e menos intrusivas que formulários tradicionais."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Feedback em Tempo Real"
              description="Receba e analise feedback imediatamente após interações com clientes, permitindo ações corretivas rápidas."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Insights Acionáveis"
              description="Transforme dados brutos em insights práticos que podem ser usados para melhorar produtos, serviços e processos."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Personalização Contínua"
              description="Use o feedback dos clientes para personalizar suas ofertas e comunicações, aumentando a relevância e satisfação."
              delay={0.4}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Tipos de Pesquisas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Tipos de Pesquisas" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/survey-types-metrics-visualization.png" alt="Tipos de Pesquisas" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Como Funciona" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <UnifiedStepCard
              number={1}
              title="Configuração"
              description="Configuramos as pesquisas de acordo com seus objetivos, definindo perguntas, gatilhos e canais."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Distribuição"
              description="O chatbot envia as pesquisas automaticamente nos momentos ideais através dos canais preferidos dos clientes."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Coleta"
              description="Os clientes respondem às pesquisas de forma conversacional, e os dados são coletados em tempo real."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Análise"
              description="Os dados são processados e apresentados em dashboards intuitivos, gerando insights acionáveis."
              delay={0.4}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Ideal Para" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UnifiedUseCaseCard
              icon={MessageSquare}
              title="Varejo e E-commerce"
              description="Empresas que desejam entender a satisfação dos clientes com produtos, entregas e experiência de compra."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={MessageSquare}
              title="Serviços e Assinaturas"
              description="Empresas que oferecem serviços contínuos e precisam monitorar a satisfação ao longo do tempo."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={MessageSquare}
              title="Suporte e Atendimento"
              description="Equipes de suporte que desejam avaliar a qualidade do atendimento e identificar áreas de melhoria."
              delay={0.3}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para entender melhor seus clientes?"
        description="Entre em contato conosco hoje mesmo e descubra como nossas pesquisas de satisfação podem ajudar a melhorar seus produtos e serviços."
      />
    </div>
  )
}
