"use client"

import { Calendar, CheckCircle, QrCode, Users } from "lucide-react"
import { motion } from "framer-motion"
import Link from "next/link"
import { HeroSection } from "@/components/ui/hero-section"
import { SectionTitle } from "@/components/ui/section-title"
import { FeatureCard } from "@/components/ui/feature-card"
import { BenefitCard } from "@/components/ui/benefit-card"
import { StepCard } from "@/components/ui/step-card"
import { UseCaseCard } from "@/components/ui/use-case-card"
import { CTASection } from "@/components/ui/cta-section"
import { WaveDivider } from "@/components/ui/wave-divider"
import { ArrowRight } from "lucide-react"

export default function EventosPage() {
  return (
    <div className="min-h-screen">
      <HeroSection
        title="Registro de Eventos"
        description="Simplifique o processo de inscrição em eventos com um sistema automatizado de registro, pagamento e gerenciamento de participantes."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
        imageSrc="/event-registration-dashboard.png"
        imageAlt="Registro de Eventos"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Recursos Principais" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={Users}
              title="Formulários Personalizados"
              description="Crie formulários de inscrição personalizados para coletar exatamente as informações que você precisa dos participantes."
              features={["Campos customizáveis", "Lógica condicional", "Validação automática"]}
            />

            <FeatureCard
              icon={Calendar}
              title="Pagamento Integrado"
              description="Ofereça múltiplas opções de pagamento e processe transações de forma segura diretamente no formulário de inscrição."
              features={["Múltiplos métodos de pagamento", "Processamento seguro", "Emissão automática de recibos"]}
            />

            <FeatureCard
              icon={QrCode}
              title="Emissão de Credenciais"
              description="Gere e envie automaticamente credenciais digitais com QR Code para facilitar o check-in no dia do evento."
              features={["Credenciais personalizáveis", "QR Codes únicos", "Envio automático por e-mail"]}
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
              title="Economia de Tempo"
              description="Automatize todo o processo de inscrição, desde o registro até a emissão de credenciais, liberando sua equipe para outras tarefas."
            />

            <BenefitCard
              title="Redução de Erros"
              description="Elimine erros manuais de registro e problemas de comunicação com um sistema automatizado e integrado."
            />

            <BenefitCard
              title="Melhor Experiência"
              description="Ofereça uma experiência de inscrição simples e profissional, aumentando a satisfação dos participantes desde o primeiro contato."
            />

            <BenefitCard
              title="Dados Valiosos"
              description="Colete e analise dados importantes sobre os participantes para melhorar futuros eventos e ações de marketing."
            />
          </div>
        </div>
        <WaveDivider color="#ffffff" />
      </section>

      {/* Check-in Automatizado */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Check-in Automatizado para Eventos" center={true} />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/modern-event-checkin.png" alt="Check-in Automatizado" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Agilize o processo de entrada no seu evento</h3>
              <p className="text-gray-700 mb-6">
                Nossa solução de check-in automatizado permite que você processe a entrada de centenas de participantes
                em minutos, eliminando filas e melhorando a experiência desde o primeiro momento.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Leitura de QR Code</span>
                    <p className="text-gray-600">
                      Faça o check-in dos participantes em segundos com a leitura do QR Code das credenciais.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Modo Offline</span>
                    <p className="text-gray-600">
                      O sistema funciona mesmo sem conexão com a internet, sincronizando os dados posteriormente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Estatísticas em Tempo Real</span>
                    <p className="text-gray-600">
                      Acompanhe o número de participantes presentes e outras métricas importantes em tempo real.
                    </p>
                  </div>
                </li>
              </ul>
              <Link href="/servicos/eventos/check-in" className="text-blue-600 flex items-center hover:underline">
                Saiba mais sobre o Check-in Automatizado <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <WaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <SectionTitle title="Como Funciona" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <StepCard
              number={1}
              title="Configuração"
              description="Configuramos o sistema de acordo com as necessidades do seu evento, incluindo formulários e opções de pagamento."
            />

            <StepCard
              number={2}
              title="Inscrição"
              description="Os participantes se inscrevem online, preenchendo o formulário e realizando o pagamento quando aplicável."
            />

            <StepCard
              number={3}
              title="Confirmação"
              description="O sistema envia automaticamente confirmações e credenciais com QR Code para os participantes."
            />

            <StepCard
              number={4}
              title="Check-in"
              description="No dia do evento, os participantes são registrados rapidamente através da leitura do QR Code."
            />
          </div>
        </div>
        <WaveDivider color="#ffffff" />
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4">
          <SectionTitle title="Ideal Para" center={true} />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <UseCaseCard
              icon={Users}
              title="Conferências e Congressos"
              description="Eventos profissionais com múltiplas palestras, workshops e grande número de participantes."
            />

            <UseCaseCard
              icon={Users}
              title="Feiras e Exposições"
              description="Eventos comerciais com múltiplos expositores e visitantes que precisam de credenciamento eficiente."
            />

            <UseCaseCard
              icon={Users}
              title="Cursos e Workshops"
              description="Eventos educacionais que exigem inscrição prévia, pagamento e controle de presença dos participantes."
            />
          </div>
        </div>
      </section>

      {/* CTA */}
      <CTASection
        title="Pronto para simplificar o registro do seu evento?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de registro de eventos pode transformar a experiência dos seus participantes."
        ctaText="Solicite uma demonstração"
        ctaLink="/contato"
      />
    </div>
  )
}
