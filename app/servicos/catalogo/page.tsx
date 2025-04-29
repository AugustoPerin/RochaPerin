"use client"

import { FileText, Search, Settings } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen">
      <UnifiedHero
        title="Catálogo Interativo"
        description="Ofereça uma experiência de compra dinâmica e envolvente com um catálogo digital interativo que permite aos clientes explorar seus produtos e serviços de forma intuitiva."
        imageSrc="/modern-product-showcase.png"
        imageAlt="Catálogo Interativo"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={Search}
              title="Busca Avançada"
              description="Sistema de busca inteligente que permite aos clientes encontrar rapidamente o que procuram por nome, categoria, preço ou características."
              features={["Filtros personalizáveis", "Sugestões inteligentes", "Correção automática"]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={FileText}
              title="Conteúdo Rico"
              description="Apresente seus produtos com descrições detalhadas, imagens de alta qualidade, vídeos e conteúdo interativo."
              features={["Galerias de imagens", "Vídeos demonstrativos", "Visualização 360°"]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={Settings}
              title="Atualização em Tempo Real"
              description="Mantenha seu catálogo sempre atualizado com informações de preço, disponibilidade e promoções em tempo real."
              features={["Sincronização com estoque", "Preços dinâmicos", "Promoções temporárias"]}
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
              title="Aumento de Vendas"
              description="Apresente seus produtos de forma atraente e interativa, incentivando os clientes a conhecerem mais opções e aumentando o ticket médio."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Redução de Custos"
              description="Elimine a necessidade de catálogos impressos, reduzindo custos com impressão e distribuição, além de ser ecologicamente responsável."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Alcance Global"
              description="Disponibilize seu catálogo online para clientes em qualquer lugar do mundo, expandindo seu alcance de mercado."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Insights Valiosos"
              description="Obtenha dados sobre o comportamento dos clientes, como produtos mais visualizados e tempo gasto em cada item."
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
              title="Cadastro"
              description="Cadastramos seus produtos e serviços com todas as informações, imagens e especificações necessárias."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Personalização"
              description="Personalizamos a interface do catálogo de acordo com a identidade visual da sua empresa."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Integração"
              description="Integramos o catálogo ao seu site, aplicativo ou sistema de e-commerce existente."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Atualização"
              description="Fornecemos um painel administrativo intuitivo para que você possa atualizar seu catálogo facilmente."
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
              icon={FileText}
              title="Lojas e E-commerces"
              description="Empresas de varejo que desejam apresentar seus produtos de forma atraente e interativa."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={FileText}
              title="Distribuidores e Atacadistas"
              description="Empresas B2B que precisam disponibilizar catálogos extensos com especificações técnicas detalhadas."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={FileText}
              title="Restaurantes e Serviços"
              description="Estabelecimentos que desejam apresentar seus cardápios ou serviços de forma digital e interativa."
              delay={0.3}
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para modernizar seu catálogo?"
        description="Entre em contato conosco hoje mesmo e descubra como nosso catálogo interativo pode transformar a experiência de compra dos seus clientes."
      />
    </div>
  )
}
