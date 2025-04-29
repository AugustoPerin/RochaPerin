"use client"

import { FileText, LineChart, Settings } from "lucide-react"
import { HeroSection } from "@/components/ui/hero-section"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/ui/feature-card"
import { BenefitCard } from "@/components/ui/benefit-card"
import { StepCard } from "@/components/ui/step-card"
import { UseCaseCard } from "@/components/ui/use-case-card"
import { CTASection } from "@/components/ui/cta-section"
import { WaveDivider } from "@/components/ui/wave-divider"

export default function CotacaoPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Cotação Automatizada"
        description="Agilize o processo de cotação com um sistema inteligente que gera orçamentos personalizados instantaneamente, aumentando suas taxas de conversão."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
        imageSrc="/quote-system-dashboard.png"
        imageAlt="Cotação Automatizada"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Recursos Principais" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Settings}
              title="Cálculos Automáticos"
              description="Sistema inteligente que calcula preços com base em parâmetros personalizáveis, garantindo precisão e consistência."
              features={["Regras de precificação flexíveis", "Cálculos de impostos e taxas", "Descontos automáticos"]}
            />

            <FeatureCard
              icon={FileText}
              title="Propostas Personalizadas"
              description="Geração de documentos de cotação profissionais e personalizados com sua marca e informações específicas do cliente."
              features={[
                "Templates personalizáveis",
                "Inclusão de imagens e gráficos",
                "Exportação em múltiplos formatos",
              ]}
            />

            <FeatureCard
              icon={LineChart}
              title="Análise de Conversão"
              description="Acompanhe o status de cada cotação e analise taxas de conversão para otimizar seu processo de vendas."
              features={["Dashboard de performance", "Relatórios detalhados", "Identificação de gargalos"]}
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
              title="Resposta Imediata"
              description="Forneça cotações instantâneas aos seus clientes, aumentando as chances de conversão em vendas."
            />

            <BenefitCard
              title="Redução de Erros"
              description="Elimine erros humanos de cálculo que podem resultar em prejuízos ou insatisfação do cliente."
            />

            <BenefitCard
              title="Padronização"
              description="Garanta consistência nas cotações, independentemente de quem as gera, mantendo sua política de preços."
            />

            <BenefitCard
              title="Aumento de Produtividade"
              description="Libere sua equipe de vendas para focar em atividades estratégicas em vez de cálculos manuais."
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
              description="Configuramos o sistema com seus produtos, serviços, preços e regras de negócio específicas."
            />

            <StepCard
              number={2}
              title="Solicitação"
              description="O cliente preenche um formulário com suas necessidades específicas através do seu site ou aplicativo."
            />

            <StepCard
              number={3}
              title="Processamento"
              description="O sistema processa as informações, aplica as regras de negócio e calcula o preço final."
            />

            <StepCard
              number={4}
              title="Entrega"
              description="Uma proposta profissional é gerada e enviada ao cliente, com opção de aceite online."
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
              icon={Settings}
              title="Construtoras e Reformas"
              description="Empresas que precisam calcular orçamentos complexos com múltiplos materiais e serviços."
            />

            <UseCaseCard
              icon={Settings}
              title="Agências e Consultorias"
              description="Empresas de serviços que precisam gerar propostas personalizadas com rapidez e precisão."
            />

            <UseCaseCard
              icon={Settings}
              title="E-commerces e Varejo"
              description="Lojas que oferecem produtos customizáveis ou pacotes com múltiplas opções de configuração."
            />
          </div>
        </div>
        <WaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para agilizar suas cotações?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de cotação automatizada pode transformar seu processo de vendas."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
      />
    </div>
  )
}
