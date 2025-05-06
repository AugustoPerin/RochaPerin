"use client"

import { FileText, LineChart, Settings } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function CotacaoPage() {
  return (
    <div className="min-h-screen">
      <UnifiedHero
        title="Cotação Automatizada"
        description="Agilize o processo de cotação com um sistema inteligente que gera orçamentos personalizados instantaneamente, aumentando suas taxas de conversão."
        imageSrc="/automated-quotation.webp"
        imageAlt="Cotação Automatizada"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={Settings}
              title="Cálculos Automáticos"
              description="Sistema inteligente que calcula preços com base em parâmetros personalizáveis, garantindo precisão e consistência."
              features={["Regras de precificação flexíveis", "Cálculos de impostos e taxas", "Descontos automáticos"]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={FileText}
              title="Propostas Personalizadas"
              description="Geração de documentos de cotação profissionais e personalizados com sua marca e informações específicas do cliente."
              features={[
                "Templates personalizáveis",
                "Inclusão de imagens e gráficos",
                "Exportação em múltiplos formatos",
              ]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={LineChart}
              title="Análise de Conversão"
              description="Acompanhe o status de cada cotação e analise taxas de conversão para otimizar seu processo de vendas."
              features={["Dashboard de performance", "Relatórios detalhados", "Identificação de gargalos"]}
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
              title="Resposta Imediata"
              description="Forneça cotações instantâneas aos seus clientes, aumentando as chances de conversão em vendas."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Redução de Erros"
              description="Elimine erros humanos de cálculo que podem resultar em prejuízos ou insatisfação do cliente."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Padronização"
              description="Garanta consistência nas cotações, independentemente de quem as gera, mantendo sua política de preços."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Aumento de Produtividade"
              description="Libere sua equipe de vendas para focar em atividades estratégicas em vez de cálculos manuais."
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
              description="Configuramos o sistema com seus produtos, serviços, preços e regras de negócio específicas."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Solicitação"
              description="O cliente preenche um formulário com suas necessidades específicas através do seu site ou aplicativo."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Processamento"
              description="O sistema processa as informações, aplica as regras de negócio e calcula o preço final."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Entrega"
              description="Uma proposta profissional é gerada e enviada ao cliente, com opção de aceite online."
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
              icon={Settings}
              title="Construtoras e Reformas"
              description="Empresas que precisam calcular orçamentos complexos com múltiplos materiais e serviços."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={Settings}
              title="Agências e Consultorias"
              description="Empresas de serviços que precisam gerar propostas personalizadas com rapidez e precisão."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={Settings}
              title="E-commerces e Varejo"
              description="Lojas que oferecem produtos customizáveis ou pacotes com múltiplas opções de configuração."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para agilizar suas cotações?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de cotação automatizada pode transformar seu processo de vendas."
      />
    </div>
  )
}
