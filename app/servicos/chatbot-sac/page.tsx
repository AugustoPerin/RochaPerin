"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Clock, MessageSquare, Users } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function ChatbotSACPage() {
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
                Chatbot de Atendimento ao Cliente (SAC)
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-3xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Automatize o atendimento ao cliente com um chatbot inteligente que responde dúvidas e resolve problemas
                24 horas por dia, 7 dias por semana.
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
              <img
                src="/chatbot-analytics-dashboard.png"
                alt="Chatbot de Atendimento ao Cliente"
                className="rounded-lg shadow-xl"
              />
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

      {/* Recursos */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Recursos Principais
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "Respostas Instantâneas",
                description:
                  "Forneça respostas imediatas para as perguntas mais frequentes dos clientes, sem tempo de espera.",
                features: [
                  "Base de conhecimento personalizada",
                  "Reconhecimento de linguagem natural",
                  "Aprendizado contínuo",
                ],
              },
              {
                icon: <Users className="text-blue-600 w-8 h-8" />,
                title: "Escalonamento Inteligente",
                description:
                  "Identifique quando um atendente humano é necessário e transfira a conversa de forma suave e contextual.",
                features: ["Detecção de frustração", "Transferência com histórico", "Roteamento inteligente"],
              },
              {
                icon: <Clock className="text-blue-600 w-8 h-8" />,
                title: "Disponibilidade 24/7",
                description:
                  "Ofereça suporte ininterrupto aos seus clientes, mesmo fora do horário comercial, feriados e finais de semana.",
                features: ["Atendimento contínuo", "Sem custos adicionais", "Capacidade ilimitada"],
              },
            ].map((resource, index) => (
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
                    {resource.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{resource.title}</h3>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <ul className="space-y-2">
                    {resource.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Benefícios para seu Negócio
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Redução de Custos",
                description:
                  "Diminua significativamente os custos de atendimento ao cliente automatizando respostas para perguntas frequentes.",
              },
              {
                title: "Aumento da Satisfação",
                description:
                  "Melhore a experiência do cliente com respostas instantâneas e consistentes, sem tempo de espera.",
              },
              {
                title: "Escalabilidade",
                description:
                  "Atenda milhares de clientes simultaneamente sem comprometer a qualidade ou aumentar custos.",
              },
              {
                title: "Insights Valiosos",
                description:
                  "Obtenha dados importantes sobre as dúvidas e problemas mais comuns dos clientes para melhorar produtos e serviços.",
              },
            ].map((benefit, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <h3 className="text-xl font-semibold mb-4 flex items-center">
                  <CheckCircle className="text-green-500 mr-2" size={20} />
                  {benefit.title}
                </h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Canais de Atendimento */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Múltiplos Canais de Atendimento
          </motion.h2>

          <div className="flex flex-col md:flex-row items-center gap-12">
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img src="/connected-conversations.png" alt="Canais de Atendimento" className="rounded-lg shadow-lg" />
            </motion.div>
            <motion.div
              className="md:w-1/2"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-2xl font-semibold mb-4">Atenda seus clientes onde eles estiverem</h3>
              <p className="text-gray-700 mb-6">
                Nosso chatbot de atendimento pode ser integrado a múltiplos canais de comunicação, oferecendo uma
                experiência consistente em todas as plataformas.
              </p>
              <ul className="space-y-4 mb-6">
                {[
                  {
                    title: "Website",
                    description: "Integre o chatbot ao seu site para oferecer suporte imediato aos visitantes.",
                  },
                  {
                    title: "WhatsApp",
                    description: "Ofereça atendimento pelo aplicativo de mensagens mais popular do Brasil.",
                  },
                  {
                    title: "Redes Sociais",
                    description: "Integre com Facebook Messenger, Instagram e outras plataformas sociais.",
                  },
                  {
                    title: "Aplicativo Móvel",
                    description: "Incorpore o chatbot no seu aplicativo para suporte nativo.",
                  },
                ].map((channel, index) => (
                  <li key={index} className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={20} />
                    <div>
                      <span className="font-medium">{channel.title}</span>
                      <p className="text-gray-600">{channel.description}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16 bg-gray-50">
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

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Treinamento",
                description:
                  "Treinamos o chatbot com base nas perguntas frequentes e processos específicos do seu negócio.",
              },
              {
                step: "2",
                title: "Integração",
                description:
                  "Integramos o chatbot aos seus canais de atendimento e sistemas internos, como CRM e helpdesk.",
              },
              {
                step: "3",
                title: "Interação",
                description:
                  "O chatbot interage com os clientes, respondendo perguntas e resolvendo problemas automaticamente.",
              },
              {
                step: "4",
                title: "Evolução",
                description:
                  "O sistema aprende continuamente com as interações, melhorando suas respostas e capacidades ao longo do tempo.",
              },
            ].map((step, index) => (
              <motion.div
                key={index}
                className="text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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

      {/* Casos de Uso */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Ideal Para
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "E-commerces",
                description:
                  "Lojas online que precisam atender um grande volume de dúvidas sobre produtos, entregas e trocas.",
              },
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "Serviços Financeiros",
                description:
                  "Bancos e fintechs que precisam oferecer suporte para dúvidas frequentes sobre contas, transações e produtos.",
              },
              {
                icon: <MessageSquare className="text-blue-600 w-8 h-8" />,
                title: "Telecomunicações",
                description:
                  "Empresas de telefonia e internet que lidam com um grande volume de chamados técnicos e dúvidas sobre serviços.",
              },
            ].map((useCase, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md text-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  {useCase.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2">{useCase.title}</h3>
                <p className="text-gray-600">{useCase.description}</p>
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
              Pronto para revolucionar seu atendimento?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entre em contato conosco hoje mesmo e descubra como nosso chatbot de atendimento pode transformar a
              experiência dos seus clientes.
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
