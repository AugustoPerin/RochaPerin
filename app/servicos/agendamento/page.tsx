"use client"

import { Calendar, Clock, Users } from "lucide-react"
import { HeroSection } from "@/components/ui/hero-section"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/ui/feature-card"
import { BenefitCard } from "@/components/ui/benefit-card"
import { StepCard } from "@/components/ui/step-card"
import { UseCaseCard } from "@/components/ui/use-case-card"
import { CTASection } from "@/components/ui/cta-section"
import { WaveDivider } from "@/components/ui/wave-divider"

export default function AgendamentoPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Agendamento de Serviços"
        description="Automatize o processo de agendamento e permita que seus clientes marquem horários de forma rápida e eficiente, 24 horas por dia, 7 dias por semana."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
        imageSrc="/modern-calendar-app.png"
        imageAlt="Agendamento de Serviços"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Recursos Principais" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Calendar}
              title="Calendário Inteligente"
              description="Sistema de calendário que exibe apenas horários disponíveis, evitando conflitos e otimizando sua agenda."
              features={[
                "Visualização diária, semanal e mensal",
                "Bloqueio automático de horários ocupados",
                "Personalização de disponibilidade",
              ]}
            />

            <FeatureCard
              icon={Clock}
              title="Lembretes Automáticos"
              description="Envio automático de lembretes por e-mail, SMS ou WhatsApp para reduzir faltas e atrasos."
              features={["Lembretes personalizáveis", "Múltiplos canais de comunicação", "Confirmação de presença"]}
            />

            <FeatureCard
              icon={Users}
              title="Gestão de Recursos"
              description="Controle eficiente de recursos humanos, equipamentos e salas necessários para cada serviço."
              features={["Alocação inteligente de recursos", "Prevenção de sobreposições", "Otimização de capacidade"]}
            />
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <WaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <SectionTitle title="Benefícios para seu Negócio" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <BenefitCard
              title="Redução de Custos Operacionais"
              description="Diminua custos com pessoal dedicado a agendamentos e reduza o tempo gasto em tarefas administrativas."
            />

            <BenefitCard
              title="Diminuição de Faltas e Cancelamentos"
              description="Reduza significativamente o número de faltas e cancelamentos de última hora com lembretes automáticos."
            />

            <BenefitCard
              title="Aumento da Satisfação do Cliente"
              description="Ofereça mais conveniência aos seus clientes, permitindo agendamentos a qualquer hora e em qualquer lugar."
            />

            <BenefitCard
              title="Otimização da Agenda"
              description="Maximize o uso do tempo disponível com uma distribuição mais eficiente de compromissos."
            />
          </div>
        </div>
        <WaveDivider color="#ffffff" />
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Como Funciona" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StepCard
              number={1}
              title="Configuração"
              description="Configuramos o sistema de acordo com suas necessidades, definindo serviços, duração e disponibilidade."
            />

            <StepCard
              number={2}
              title="Agendamento"
              description="O cliente seleciona o serviço desejado, data e horário disponível através do site ou aplicativo."
            />

            <StepCard
              number={3}
              title="Confirmação"
              description="O sistema envia uma confirmação automática e adiciona o compromisso à agenda do prestador de serviço."
            />

            <StepCard
              number={4}
              title="Lembretes"
              description="Lembretes automáticos são enviados antes do compromisso para garantir a presença do cliente."
            />
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <WaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <SectionTitle title="Ideal Para" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UseCaseCard
              icon={Users}
              title="Clínicas e Consultórios"
              description="Médicos, dentistas, psicólogos e outros profissionais de saúde que precisam gerenciar consultas."
            />

            <UseCaseCard
              icon={Users}
              title="Salões de Beleza e Spas"
              description="Estabelecimentos que oferecem serviços de beleza, estética e bem-estar com múltiplos profissionais."
            />

            <UseCaseCard
              icon={Users}
              title="Prestadores de Serviços"
              description="Advogados, contadores, consultores e outros profissionais que trabalham com agendamento de reuniões."
            />
          </div>
        </div>
        <WaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para otimizar seus agendamentos?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de agendamento pode transformar seu negócio."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
      />
    </div>
  )
}
