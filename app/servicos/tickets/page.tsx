"use client"

import { motion } from "framer-motion"
import { MessageSquare, FileText, Users, CheckCircle } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedFeatureCard } from "@/components/ui/unified-feature-card"
import { UnifiedBenefitCard } from "@/components/ui/unified-benefit-card"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedStepCard } from "@/components/ui/unified-step-card"
import { UnifiedUseCaseCard } from "@/components/ui/unified-use-case-card"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function TicketsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Abertura de Tickets"
        description="Automatize o processo de abertura e categorização de tickets de suporte com um chatbot inteligente que direciona as solicitações para os departamentos corretos."
        imageSrc="/support-ticket-dashboard.png"
        imageAlt="Abertura de Tickets"
      />

      {/* Recursos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <UnifiedFeatureCard
              icon={MessageSquare}
              title="Categorização Automática"
              description="Identifique automaticamente o tipo de problema e direcione o ticket para o departamento ou especialista correto."
              features={["Reconhecimento de intenção", "Classificação por assunto", "Roteamento inteligente"]}
              delay={0.1}
            />

            <UnifiedFeatureCard
              icon={FileText}
              title="Priorização Inteligente"
              description="Determine automaticamente a prioridade dos tickets com base na urgência, impacto e perfil do cliente."
              features={["Análise de urgência", "Segmentação de clientes", "Regras personalizáveis"]}
              delay={0.2}
            />

            <UnifiedFeatureCard
              icon={Users}
              title="Integração com Helpdesk"
              description="Conecte-se perfeitamente com os principais sistemas de helpdesk para uma gestão centralizada de tickets."
              features={["Múltiplas integrações", "Sincronização bidirecional", "Atualizações automáticas"]}
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
              title="Resposta Mais Rápida"
              description="Reduza o tempo de resposta inicial com a abertura e categorização automática de tickets, melhorando a satisfação do cliente."
              delay={0.1}
            />

            <UnifiedBenefitCard
              title="Maior Eficiência"
              description="Otimize o fluxo de trabalho da equipe de suporte, direcionando os tickets para os especialistas certos desde o início."
              delay={0.2}
            />

            <UnifiedBenefitCard
              title="Coleta de Informações Completas"
              description="Garanta que todas as informações necessárias sejam coletadas antes de criar o ticket, evitando idas e vindas."
              delay={0.3}
            />

            <UnifiedBenefitCard
              title="Resolução Proativa"
              description="Resolva problemas comuns automaticamente, antes mesmo da criação de um ticket, com respostas pré-programadas."
              delay={0.4}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Fluxo de Trabalho */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Fluxo de Trabalho Otimizado" />

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <img src="/support-ticket-workflow.png" alt="Fluxo de Trabalho" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Simplifique o processo de suporte do início ao fim</h3>
              <p className="text-gray-700 mb-6">
                Nossa solução de abertura de tickets automatiza todo o processo de suporte, desde o primeiro contato até
                a resolução final, garantindo eficiência e satisfação do cliente.
              </p>
              <ul className="space-y-4 mb-6">
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Autoatendimento</span>
                    <p className="text-gray-600">
                      Resolva problemas comuns automaticamente com base de conhecimento integrada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Coleta Estruturada</span>
                    <p className="text-gray-600">
                      Obtenha todas as informações necessárias de forma conversacional e estruturada.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Acompanhamento Contínuo</span>
                    <p className="text-gray-600">
                      Mantenha os clientes informados sobre o status dos tickets automaticamente.
                    </p>
                  </div>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                  <div>
                    <span className="font-medium">Pesquisa Pós-Resolução</span>
                    <p className="text-gray-600">
                      Colete feedback após a resolução para melhorar continuamente o processo.
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
              title="Contato"
              description="O cliente inicia o contato através de um dos canais disponíveis (chat, WhatsApp, e-mail, etc.)."
              delay={0.1}
            />

            <UnifiedStepCard
              number={2}
              title="Identificação"
              description="O chatbot identifica o problema e coleta todas as informações necessárias para criar o ticket."
              delay={0.2}
            />

            <UnifiedStepCard
              number={3}
              title="Criação"
              description="O sistema cria automaticamente um ticket categorizado e priorizado no sistema de helpdesk."
              delay={0.3}
            />

            <UnifiedStepCard
              number={4}
              title="Acompanhamento"
              description="O cliente recebe atualizações automáticas sobre o status do ticket até a resolução final."
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
              icon={FileText}
              title="Suporte Técnico"
              description="Equipes de suporte técnico que precisam gerenciar um grande volume de solicitações de forma eficiente."
              delay={0.1}
            />

            <UnifiedUseCaseCard
              icon={FileText}
              title="Atendimento ao Cliente"
              description="Empresas que desejam otimizar o processo de atendimento ao cliente e reduzir o tempo de resposta."
              delay={0.2}
            />

            <UnifiedUseCaseCard
              icon={FileText}
              title="Serviços Internos"
              description="Departamentos de TI e RH que gerenciam solicitações internas de funcionários e precisam de organização."
              delay={0.3}
            />
          </div>
        </div>
        <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para otimizar seu processo de suporte?"
        description="Entre em contato conosco hoje mesmo e descubra como nossa solução de abertura de tickets pode transformar seu atendimento ao cliente."
      />
    </div>
  )
}
