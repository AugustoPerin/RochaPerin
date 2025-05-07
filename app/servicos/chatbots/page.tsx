"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot, CheckCircle, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatbotsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section with Gradient Overlay */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <motion.h1
                className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                Chatbots Empresariais
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-3xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Automatize o atendimento, aumente a eficiência e melhore a experiência dos seus clientes com chatbots
                inteligentes.
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <Button
                  asChild
                  size="lg"
                  className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 font-medium text-base rounded-full shadow-lg"
                >
                  <Link href="/contato">Solicite uma demonstração</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <img src="/business-chatbot.webp" alt="Chatbots Empresariais" className="rounded-lg shadow-xl" />
            </motion.div>
          </div>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 80" fill="white">
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
          </svg>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Benefícios dos Chatbots Empresariais
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "Atendimento 24/7",
                description:
                  "Ofereça suporte aos seus clientes a qualquer hora do dia, todos os dias da semana, sem custos adicionais.",
              },
              {
                icon: <Bot className="text-blue-600 w-8 h-8" />,
                title: "Redução de Custos",
                description:
                  "Diminua os custos operacionais automatizando tarefas repetitivas e otimizando recursos humanos.",
              },
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "Escalabilidade",
                description: "Atenda milhares de clientes simultaneamente sem perda de qualidade ou tempo de espera.",
              },
              {
                icon: <Bot className="text-blue-600 w-8 h-8" />,
                title: "Personalização",
                description:
                  "Ofereça experiências personalizadas com base no histórico e preferências de cada cliente.",
              },
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "Coleta de Dados",
                description: "Obtenha insights valiosos sobre seus clientes para melhorar produtos e serviços.",
              },
              {
                icon: <Bot className="text-blue-600 w-8 h-8" />,
                title: "Integração",
                description: "Integre facilmente com sistemas existentes como CRM, ERP e plataformas de e-commerce.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="p-8">
                  <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{benefit.title}</h3>
                  <p className="text-gray-600">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Tipos de Chatbots */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossos Chatbots Especializados
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Atendimento ao Cliente (SAC)",
                description:
                  "Automatize o atendimento ao cliente com um chatbot inteligente que responde dúvidas e resolve problemas 24/7.",
                features: [
                  "Respostas instantâneas para perguntas frequentes",
                  "Escalonamento inteligente para atendentes humanos",
                  "Integração com sistemas de CRM e helpdesk",
                ],
                link: "/servicos/chatbots/chatbot-sac",
              },
              {
                title: "Geração de Leads",
                description:
                  "Capture e qualifique leads automaticamente com um chatbot que engaja visitantes e coleta informações relevantes.",
                features: [
                  "Qualificação automática de leads",
                  "Integração com ferramentas de marketing",
                  "Segmentação e direcionamento personalizado",
                ],
                link: "/servicos/chatbots/geracao-leads",
              },
              {
                title: "Pesquisas de Satisfação",
                description:
                  "Colete feedback dos clientes de forma eficiente com chatbots que realizam pesquisas de satisfação personalizadas.",
                features: [
                  "Questionários interativos e dinâmicos",
                  "Análise de sentimento e feedback",
                  "Relatórios detalhados e insights acionáveis",
                ],
                link: "/servicos/chatbots/pesquisas",
              },
              {
                title: "Cobrança Amigável",
                description:
                  "Automatize o processo de cobrança com um chatbot que envia lembretes amigáveis e facilita o pagamento.",
                features: [
                  "Lembretes personalizados e não invasivos",
                  "Múltiplas opções de pagamento",
                  "Negociação de prazos e condições",
                ],
                link: "/servicos/chatbots/cobrancas",
              },
            ].map((chatbot, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4">{chatbot.title}</h3>
                <p className="text-gray-600 mb-4">{chatbot.description}</p>
                <ul className="mb-4 space-y-2">
                  {chatbot.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={chatbot.link} className="text-blue-600 flex items-center hover:underline">
                  Saiba mais <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Button asChild>
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Como Funciona
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Análise",
                description:
                  "Analisamos suas necessidades e processos para identificar as melhores oportunidades de automação.",
              },
              {
                step: "2",
                title: "Desenvolvimento",
                description:
                  "Criamos um chatbot personalizado com fluxos de conversa e integrações específicas para o seu negócio.",
              },
              {
                step: "3",
                title: "Implementação",
                description:
                  "Implementamos, testamos e otimizamos o chatbot para garantir o melhor desempenho e experiência do usuário.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <span className="text-blue-700 text-2xl font-bold">{step.step}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fillRule='evenodd'%3E%3Cg fill='%23ffffff' fillOpacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
              backgroundSize: "60px 60px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pronto para transformar seu atendimento?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entre em contato conosco hoje mesmo e descubra como nossos chatbots podem revolucionar a experiência dos
              seus clientes.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 px-10 py-6 rounded-full shadow-lg text-base font-medium"
              >
                <Link href="/contato">Solicite uma demonstração</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}
