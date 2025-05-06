"use client"

import { Calendar, Clock, Users } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen">
      <UnifiedHero
        title="Agendamento de Serviços"
        description="Automatize o processo de agendamento e permita que seus clientes marquem horários de forma rápida e eficiente, 24 horas por dia, 7 dias por semana."
        imageSrc="/service-scheduling.webp"
        imageAlt="Agendamento de Serviços"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={Calendar}
              title="Calendário Inteligente"
              description="Sistema de calendário que exibe apenas horários disponíveis, evitando conflitos e otimizando sua agenda."
              features={[
                "Visualização diária, semanal e mensal",
                "Bloqueio automático de horários ocupados",
                "Personalização de disponibilidade",
              ]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={Clock}
              title="Lembretes Automáticos"
              description="Envio automático de lembretes por e-mail, SMS ou WhatsApp para reduzir faltas e atrasos."
              features={["Lembretes personalizáveis", "Múltiplos canais de comunicação", "Confirmação de presença"]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={Users}
              title="Gestão de Recursos"
              description="Controle eficiente de recursos humanos, equipamentos e salas necessários para cada serviço."
              features={["Alocação inteligente de recursos", "Prevenção de sobreposições", "Otimização de capacidade"]}
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0">
          <UnifiedWaveDivider flip={true} />
        </div>
        <div className="container mx-auto px-4 pt-16">
          <UnifiedSectionTitle title="Benefícios para seu Negócio" />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <UnifiedBenefitCard
              title="Redução de Custos Operacionais"
              description="Diminua custos com pessoal dedicado a agendamentos e reduza o tempo gasto em tarefas administrativas."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Diminuição de Faltas e Cancelamentos"
              description="Reduza significativamente o número de faltas e cancelamentos de última hora com lembretes automáticos."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Aumento da Satisfação do Cliente"
              description="Ofereça mais conveniência aos seus clientes, permitindo agendamentos a qualquer hora e em qualquer lugar."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Otimização da Agenda"
              description="Maximize o uso do tempo disponível com uma distribuição mais eficiente de compromissos."
              delay={0.4}
            />
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0">
          <UnifiedWaveDivider />
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Como Funciona" />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <UnifiedStepCard
              number={1}
              title="Configuração"
              description="Configuramos o sistema de acordo com suas necessidades, definindo serviços, duração e disponibilidade."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Agendamento"
              description="O cliente seleciona o serviço desejado, data e horário disponível através do site ou aplicativo."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Confirmação"
              description="O sistema envia uma confirmação automática e adiciona o compromisso à agenda do prestador de serviço."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Lembretes"
              description="Lembretes automáticos são enviados antes do compromisso para garantir a presença do cliente."
              delay={0.4}
            />
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <div className="absolute top-0 left-0 right-0">
          <UnifiedWaveDivider flip={true} />
        </div>
        <div className="container mx-auto px-4 pt-16">
          <UnifiedSectionTitle title="Ideal Para" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UnifiedUseCaseCard
              icon={Users}
              title="Clínicas e Consultórios"
              description="Médicos, dentistas, psicólogos e outros profissionais de saúde que precisam gerenciar consultas."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={Users}
              title="Salões de Beleza e Spas"
              description="Estabelecimentos que oferecem serviços de beleza, estética e bem-estar com múltiplos profissionais."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={Users}
              title="Prestadores de Serviços"
              description="Advogados, contadores, consultores e outros profissionais que trabalham com agendamento de reuniões."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para otimizar seus agendamentos?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de agendamento pode transformar seu negócio."
      />
    </div>
  )
}
