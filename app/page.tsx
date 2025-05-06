"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { ArrowRight, Bot, Cloud, Database, LineChart, ChevronDown, ChevronUp } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Home() {
  const [expandedCard, setExpandedCard] = useState<number | null>(null)
  const cardRefs = useRef<(HTMLDivElement | null)[]>([])

  const specialties = [
    {
      icon: <Bot className="text-blue-600 w-8 h-8" />,
      title: "Chatbots Empresariais",
      description: "Automatize o atendimento ao cliente e processos internos com chatbots inteligentes.",
      details:
        "Nossos chatbots utilizam inteligência artificial avançada para oferecer atendimento 24/7, responder perguntas frequentes, qualificar leads e automatizar processos. Integramos com WhatsApp, site, redes sociais e sistemas internos para uma experiência omnichannel completa.",
      link: "/servicos/chatbots",
    },
    {
      icon: <LineChart className="text-blue-600 w-8 h-8" />,
      title: "Automação de Processos",
      description: "Otimize fluxos de trabalho e a eficiência operacional com automação inteligente.",
      details:
        "Eliminamos tarefas repetitivas, reduzimos erros humanos e aceleramos processos com nossas soluções de automação. Desde agendamentos e cotações até rastreamento de pedidos e gestão de eventos, nossas soluções são personalizadas para as necessidades específicas do seu negócio.",
      link: "/servicos/automacao",
    },
    {
      icon: <Database className="text-blue-600 w-8 h-8" />,
      title: "Análise de Dados",
      description: "Transforme dados em insights estratégicos para tomada de decisões mais inteligentes.",
      details:
        "Extraímos valor dos seus dados com dashboards interativos, relatórios personalizados e análises preditivas. Identificamos tendências, oportunidades e riscos para impulsionar seu negócio. Nossa abordagem baseada em dados permite decisões mais precisas e estratégicas.",
      link: "/servicos/analise-dados",
    },
    {
      icon: <Cloud className="text-blue-600 w-8 h-8" />,
      title: "Migração para Nuvem",
      description: "Modernize sua infraestrutura com soluções de nuvem seguras e escaláveis.",
      details:
        "Planejamos e executamos a migração de sistemas legados para a nuvem, garantindo segurança, performance e escalabilidade. Reduzimos custos de infraestrutura e aumentamos a agilidade do seu negócio com arquiteturas modernas e otimizadas para a nuvem.",
      link: "/servicos/migracao-nuvem",
    },
  ]

  // Handle card expansion and measure height for animation
  const toggleCard = (index: number) => {
    setExpandedCard(expandedCard === index ? null : index)
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
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
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto">
            <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
              Transforme seu negócio com automação inteligente
            </h1>

            <motion.p
              className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
            >
              Especialistas em automação de processos, análise de dados, migração para nuvem e chatbots empresariais
              para impulsionar sua eficiência operacional.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.4 }}
            >
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-blue-50 px-8 py-6 font-medium text-base rounded-full shadow-md"
              >
                <Link href="/servicos">Conheça nossos serviços</Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white text-blue-700 hover:bg-white/10 px-8 py-6 font-medium text-base rounded-full"
              >
                <Link href="http://wa.me/5571993491849?text=Ol%C3%A1,%20gostaria%20de%20saber%20mais%20sobre%20os%20servi%C3%A7os%20da%20RochaPerin">
                  Fale conosco
                </Link>
              </Button>
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

      {/* Clients Section - Elegant Carousel */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center mb-10">
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
            <span className="px-4 text-gray-400 text-sm font-medium uppercase tracking-wider">
              Empresas que confiam em nós
            </span>
            <div className="h-px bg-gray-200 flex-grow max-w-xs"></div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
            <motion.div
              className="bg-white p-6 rounded-lg w-full max-w-[180px] h-[100px] flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/cliente-integral.webp"
                alt="Colégio Integral"
                className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
                style={{
                  width: 50,
                  height: 50,
                }}
              />
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg w-full max-w-[180px] h-[100px] flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 2"
                className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg w-full max-w-[180px] h-[100px] flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 3"
                className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-lg w-full max-w-[180px] h-[100px] flex items-center justify-center transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <img
                src="/placeholder.svg?height=60&width=120"
                alt="Cliente 4"
                className="max-h-12 grayscale hover:grayscale-0 transition-all duration-300"
              />
            </motion.div>
          </div>

          <div className="text-center mt-8">
            <Button asChild variant="ghost" size="sm" className="text-blue-600 hover:text-blue-800 font-medium">
              <Link href="/clientes" className="flex items-center">
                Ver todos os clientes <ArrowRight className="ml-1 w-4 h-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Refined Specialties Section with In-place Expansion */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Nossas Especialidades
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-2xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Soluções tecnológicas personalizadas para impulsionar a eficiência e o crescimento do seu negócio.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {specialties.map((specialty, index) => (
              <motion.div
                key={index}
                className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                ref={(el) => (cardRefs.current[index] = el)}
              >
                <div className="p-8">
                  <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                    {specialty.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3">{specialty.title}</h3>
                  <p className="text-gray-600 mb-4">{specialty.description}</p>

                  <AnimatePresence>
                    {expandedCard === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="pt-4 border-t border-gray-100">
                          <p className="text-gray-600 mb-6">{specialty.details}</p>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  <Button
                    variant="ghost"
                    className="text-blue-600 hover:text-blue-800 hover:bg-blue-50 p-0 h-auto flex items-center gap-2 mt-2"
                    onClick={() => toggleCard(index)}
                  >
                    {expandedCard === index ? (
                      <>
                        Mostrar menos <ChevronUp className="w-4 h-4" />
                      </>
                    ) : (
                      <>
                        Saiba mais <ChevronDown className="w-4 h-4" />
                      </>
                    )}
                  </Button>
                </div>

                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center">
                  <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                  <Link
                    href={specialty.link}
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Solutions - Modern Card Design */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Soluções em Destaque
            </motion.h2>
            <motion.p
              className="text-gray-600 max-w-3xl mx-auto text-lg"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Conheça algumas das nossas soluções mais populares que estão transformando negócios em todo o Brasil.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="group relative rounded-xl overflow-hidden bg-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/customer-service.webp?height=300&width=500"
                  alt="Atendimento ao Cliente"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 text-black">Chatbot de Atendimento</h3>
                <p className="text-black-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Automatize o atendimento ao cliente (SAC) com respostas rápidas e precisas 24/7.
                </p>
                <Link
                  href="/servicos/chatbots/chatbot-sac"
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Ver detalhes <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-xl overflow-hidden bg-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70 z-10"></div>
              <div className="relative h-64 overflow-hidden">
                <img
                  src="/custom-offers.webp?height=300&width=500"
                  alt="Agendamento de Serviços"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 text-black">Ofertas Promocionais</h3>
                <p className="text-black-200 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Envie ofertas personalizadas aos clientes com base em seu histórico de compras e preferências.
                </p>
                <Link
                  href="/servicos/chatbots/ofertas"
                  className="inline-flex items-center text-white font-medium hover:underline"
                >
                  Ver detalhes <ArrowRight className="ml-1 w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="group relative rounded-xl overflow-hidden bg-white"
              whileHover={{ y: -10 }}
              transition={{ type: "spring", stiffness: 300 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="relative group h-64 overflow-hidden rounded-lg shadow-lg">
                {/* Camada de gradiente sobre a imagem */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 z-10"></div>

                {/* Imagem com filtro de escurecimento */}
                <img
                  src="/whatsapp-shopping.webp?height=300&width=500"
                  alt="WhatsApp Shopping"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 brightness-[0.6]"
                />

                {/* Conteúdo textual sobreposto */}
                <div className="absolute bottom-0 left-0 right-0 p-6 z-20 transform transition-transform duration-300">
                  <h3 className="text-xl font-semibold mb-2 text-white">WhatsApp Shopping</h3>
                  <p className="text-white mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    Transforme o WhatsApp em um canal de vendas com catálogo interativo e carrinho de compras.
                  </p>
                  <Link
                    href="/servicos/automacao/whatsapp-shopping"
                    className="inline-flex items-center text-white font-medium hover:underline"
                  >
                    Ver detalhes <ArrowRight className="ml-1 w-4 h-4" />
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="text-center mt-16">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-full shadow-md"
            >
              <Link href="/servicos">Ver todos os serviços</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA - Modern Design */}
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
              Pronto para transformar seu negócio?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entre em contato conosco hoje mesmo e descubra como nossas soluções podem impulsionar sua empresa para o
              próximo nível.
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
