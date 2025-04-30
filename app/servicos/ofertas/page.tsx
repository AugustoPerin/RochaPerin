"use client"

import { motion } from "framer-motion"
import { Bot, CheckCircle, Gift, LineChart } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function OfertasPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Ofertas Promocionais Personalizadas"
        description="Envie ofertas personalizadas aos clientes com base em seu histórico de compras e preferências, aumentando as taxas de conversão e o valor médio do pedido."
        imageSrc="/rochaperin-ofertas.png?height=400&width=300&query=personalized promotional offers dashboard"
        imageAlt="Ofertas Promocionais Personalizadas"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={Bot}
              title="Personalização Avançada"
              description="Crie ofertas altamente personalizadas com base no histórico de compras, comportamento de navegação e preferências do cliente."
              features={["Recomendações inteligentes", "Ofertas contextuais", "Mensagens personalizadas"]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={Gift}
              title="Segmentação de Clientes"
              description="Divida sua base de clientes em segmentos estratégicos para enviar ofertas mais relevantes e eficazes."
              features={["Segmentação comportamental", "Segmentação demográfica", "Segmentação por valor"]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={LineChart}
              title="Análise de Conversão"
              description="Acompanhe o desempenho das suas ofertas com métricas detalhadas para otimizar continuamente suas campanhas."
              features={["Taxas de abertura", "Taxas de conversão", "ROI por campanha"]}
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
              title="Aumento das Vendas"
              description="Impulsione as vendas com ofertas relevantes que atendem às necessidades e desejos específicos de cada cliente."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Maior Engajamento"
              description="Aumente o engajamento dos clientes com comunicações personalizadas que demonstram que você entende suas preferências."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Redução de Abandono"
              description="Recupere vendas perdidas com ofertas personalizadas para clientes que abandonaram carrinhos ou interromperam o processo de compra."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Fidelização de Clientes"
              description="Fortaleça o relacionamento com seus clientes através de ofertas exclusivas que aumentam a lealdade à marca."
              delay={0.4}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Tipos de Ofertas */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Tipos de Ofertas Personalizadas" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img
                src="/placeholder.svg?height=400&width=500&query=personalized offer types visualization"
                alt="Tipos de Ofertas"
                className="rounded-lg shadow-lg"
              />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Estratégias eficazes para diferentes objetivos</h3>
              <p className="text-gray-700 mb-6">
                Nosso sistema de ofertas personalizadas permite criar diferentes tipos de promoções para atender a
                objetivos específicos de negócio e estágios da jornada do cliente.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Ofertas de Boas-vindas</span>
                    <p className="text-gray-600">
                      Incentive a primeira compra com descontos especiais para novos clientes.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Recompra e Cross-selling</span>
                    <p className="text-gray-600">
                      Sugira produtos complementares com base nas compras anteriores do cliente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Recuperação de Carrinho</span>
                    <p className="text-gray-600">
                      Envie lembretes e incentivos para clientes que abandonaram o carrinho de compras.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Reativação de Clientes</span>
                    <p className="text-gray-600">
                      Reconquiste clientes inativos com ofertas especiais baseadas em seu histórico de compras.
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
              title="Coleta de Dados"
              description="O sistema coleta e analisa dados de comportamento, histórico de compras e preferências dos clientes."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Segmentação"
              description="Os clientes são segmentados em grupos com base em comportamentos e características similares."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Criação de Ofertas"
              description="Ofertas personalizadas são criadas para cada segmento, maximizando a relevância e o impacto."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Entrega e Análise"
              description="As ofertas são entregues pelos canais preferidos e os resultados são analisados para otimização contínua."
              delay={0.4}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Canais de Entrega */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Canais de Entrega" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UnifiedUseCaseCard
              icon={Bot}
              title="E-mail Marketing"
              description="Envie ofertas personalizadas diretamente para a caixa de entrada dos seus clientes com designs atrativos e mensagens persuasivas."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={Bot}
              title="WhatsApp e SMS"
              description="Alcance seus clientes em tempo real com mensagens diretas contendo ofertas exclusivas e códigos promocionais."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={Bot}
              title="Site e App"
              description="Exiba ofertas personalizadas diretamente no seu site ou aplicativo, adaptadas ao comportamento de navegação em tempo real."
              delay={0.3}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para aumentar suas vendas com ofertas personalizadas?"
        description="Transforme seus dados em estratégias de vendas eficazes e ofereça aos seus clientes exatamente o que eles desejam, no momento certo."
      />
    </div>
  )
}
