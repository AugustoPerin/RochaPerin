"use client"

import { FileText, Search, Settings } from "lucide-react"
import { HeroSection } from "@/components/ui/hero-section"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/ui/feature-card"
import { BenefitCard } from "@/components/ui/benefit-card"
import { StepCard } from "@/components/ui/step-card"
import { UseCaseCard } from "@/components/ui/use-case-card"
import { CTASection } from "@/components/ui/cta-section"
import { WaveDivider } from "@/components/ui/wave-divider"

export default function CatalogoPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Catálogo Interativo"
        description="Ofereça uma experiência de compra dinâmica e envolvente com um catálogo digital interativo que permite aos clientes explorar seus produtos e serviços de forma intuitiva."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
        imageSrc="/modern-product-showcase.png"
        imageAlt="Catálogo Interativo"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Recursos Principais" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Search}
              title="Busca Avançada"
              description="Sistema de busca inteligente que permite aos clientes encontrar rapidamente o que procuram por nome, categoria, preço ou características."
              features={["Filtros personalizáveis", "Sugestões inteligentes", "Correção automática"]}
            />

            <FeatureCard
              icon={FileText}
              title="Conteúdo Rico"
              description="Apresente seus produtos com descrições detalhadas, imagens de alta qualidade, vídeos e conteúdo interativo."
              features={["Galerias de imagens", "Vídeos demonstrativos", "Visualização 360°"]}
            />

            <FeatureCard
              icon={Settings}
              title="Atualização em Tempo Real"
              description="Mantenha seu catálogo sempre atualizado com informações de preço, disponibilidade e promoções em tempo real."
              features={["Sincronização com estoque", "Preços dinâmicos", "Promoções temporárias"]}
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
              title="Aumento de Vendas"
              description="Apresente seus produtos de forma atraente e interativa, incentivando os clientes a conhecerem mais opções e aumentando o ticket médio."
            />

            <BenefitCard
              title="Redução de Custos"
              description="Elimine a necessidade de catálogos impressos, reduzindo custos com impressão e distribuição, além de ser ecologicamente responsável."
            />

            <BenefitCard
              title="Alcance Global"
              description="Disponibilize seu catálogo online para clientes em qualquer lugar do mundo, expandindo seu alcance de mercado."
            />

            <BenefitCard
              title="Insights Valiosos"
              description="Obtenha dados sobre o comportamento dos clientes, como produtos mais visualizados e tempo gasto em cada item."
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
              title="Cadastro"
              description="Cadastramos seus produtos e serviços com todas as informações, imagens e especificações necessárias."
            />

            <StepCard
              number={2}
              title="Personalização"
              description="Personalizamos a interface do catálogo de acordo com a identidade visual da sua empresa."
            />

            <StepCard
              number={3}
              title="Integração"
              description="Integramos o catálogo ao seu site, aplicativo ou sistema de e-commerce existente."
            />

            <StepCard
              number={4}
              title="Atualização"
              description="Fornecemos um painel administrativo intuitivo para que você possa atualizar seu catálogo facilmente."
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
              icon={FileText}
              title="Lojas e E-commerces"
              description="Empresas de varejo que desejam apresentar seus produtos de forma atraente e interativa."
            />

            <UseCaseCard
              icon={FileText}
              title="Distribuidores e Atacadistas"
              description="Empresas B2B que precisam disponibilizar catálogos extensos com especificações técnicas detalhadas."
            />

            <UseCaseCard
              icon={FileText}
              title="Restaurantes e Serviços"
              description="Estabelecimentos que desejam apresentar seus cardápios ou serviços de forma digital e interativa."
            />
          </div>
        </div>
        <WaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para modernizar seu catálogo?"
        description="Entre em contato conosco hoje mesmo e descubra como nosso catálogo interativo pode transformar a experiência de compra dos seus clientes."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
      />
    </div>
  )
}
