"use client"
import { Map, Truck, LineChart } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function RastreamentoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Rastreamento de Pedidos"
        description="Ofereça aos seus clientes um sistema de rastreamento de pedidos em tempo real, aumentando a transparência e satisfação durante todo o processo de entrega."
        imageSrc="/order-tracking.webp"
        imageAlt="Rastreamento de Pedidos"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={Map}
              title="Atualizações em Tempo Real"
              description="Forneça informações precisas e atualizadas sobre o status e localização dos pedidos em tempo real."
              features={["Geolocalização precisa", "Atualizações automáticas", "Visualização em mapa"]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={Truck}
              title="Notificações Automáticas"
              description="Mantenha seus clientes informados com notificações automáticas sobre cada etapa do processo de entrega."
              features={[
                "Múltiplos canais (e-mail, SMS, WhatsApp)",
                "Mensagens personalizáveis",
                "Gatilhos configuráveis",
              ]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={LineChart}
              title="Integração com Transportadoras"
              description="Conecte-se com as principais transportadoras para obter informações precisas e atualizadas sobre as entregas."
              features={["Múltiplas transportadoras", "Sincronização automática", "Gestão centralizada"]}
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
              title="Aumento da Satisfação do Cliente"
              description="Ofereça transparência e controle aos seus clientes, reduzindo a ansiedade e aumentando a confiança na sua marca."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Redução de Chamados de Suporte"
              description="Diminua o volume de chamados sobre status de pedidos, liberando sua equipe para atividades mais estratégicas."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Otimização Logística"
              description="Identifique gargalos e oportunidades de melhoria no seu processo logístico com dados precisos e em tempo real."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Diferencial Competitivo"
              description="Destaque-se da concorrência oferecendo uma experiência de compra completa e transparente, do pedido à entrega."
              delay={0.4}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white relative">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Como Funciona" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <UnifiedStepCard
              number={1}
              title="Integração"
              description="Integramos o sistema de rastreamento com sua plataforma de e-commerce e transportadoras."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Monitoramento"
              description="O sistema coleta e processa informações de status e localização dos pedidos em tempo real."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Notificação"
              description="Os clientes recebem atualizações automáticas sobre o status do pedido nos canais de sua preferência."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Visualização"
              description="Os clientes podem acompanhar o status e localização do pedido através de uma interface intuitiva."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Ideal Para" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UnifiedUseCaseCard
              icon={Truck}
              title="E-commerces"
              description="Lojas online que desejam oferecer uma experiência de compra completa e transparente aos seus clientes."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={Truck}
              title="Empresas de Logística"
              description="Transportadoras e operadores logísticos que desejam oferecer um serviço diferenciado aos seus clientes."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={Truck}
              title="Serviços de Delivery"
              description="Restaurantes e empresas de entrega que desejam oferecer rastreamento em tempo real de seus pedidos."
              delay={0.3}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para melhorar a experiência de entrega?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de rastreamento de pedidos pode transformar seu negócio."
      />
    </div>
  )
}
