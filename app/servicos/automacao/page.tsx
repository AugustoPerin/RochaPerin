"use client"

import Link from "next/link"
import { ArrowRight, CheckCircle, Clock, LineChart, Settings } from "lucide-react"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export default function AutomacaoPage() {
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
                Automação de Processos
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-3xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Otimize fluxos de trabalho, reduza custos e aumente a eficiência operacional com nossas soluções de
                automação inteligente.
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
              <img src="/business-process-automation.webp" alt="Automação de Processos" className="rounded-lg shadow-xl" />
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

      {/* Serviços de Automação */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossas Soluções de Automação
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Replace each service div with a motion.div that has animations */}
            {/* Example for the first service: */}
            <motion.div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Clock className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Agendamento de Serviços</h3>
                <p className="text-gray-600 mb-4">
                  Automatize o processo de agendamento de serviços, permitindo que seus clientes marquem horários de
                  forma rápida e eficiente.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Integração com calendários</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Lembretes automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Gestão de disponibilidade</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                <Link
                  href="/servicos/automacao/agendamento"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Settings className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Cotação Automatizada</h3>
                <p className="text-gray-600 mb-4">
                  Agilize o processo de cotação com um sistema inteligente que gera orçamentos personalizados
                  instantaneamente.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Cálculos automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Personalização de propostas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Integração com CRM</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                <Link
                  href="/servicos/automacao/cotacao"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <LineChart className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Rastreamento de Pedidos</h3>
                <p className="text-gray-600 mb-4">
                  Ofereça aos seus clientes um sistema de rastreamento de pedidos em tempo real, aumentando a
                  transparência e satisfação.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Atualizações em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Notificações automáticas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Integração com transportadoras</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                <Link
                  href="/servicos/automacao/rastreamento"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Settings className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">WhatsApp Shopping</h3>
                <p className="text-gray-600 mb-4">
                  Transforme o WhatsApp em um canal de vendas com catálogo interativo e carrinho de compras integrado.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Catálogo de produtos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Carrinho de compras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Pagamento integrado</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                <Link
                  href="/servicos/automacao/whatsapp-shopping"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Settings className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Registro de Eventos</h3>
                <p className="text-gray-600 mb-4">
                  Simplifique o processo de inscrição em eventos com um sistema automatizado de registro e
                  gerenciamento.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Formulários personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Pagamento integrado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Emissão de credenciais</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                <Link
                  href="/servicos/automacao/eventos"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              whileHover={{ y: -5 }}
            >
              <div className="p-8">
                <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                  <Clock className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">Catálogo Interativos</h3>
                <p className="text-gray-600 mb-4">
                Ofereça um catálogo digital interativo que permite aos clientes explorar produtos e serviços de forma dinâmica.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Busca avançada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Filtros personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                    <span>Atualização em tempo real</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">Explorar serviço</span>
                <Link
                  href="/servicos/automacao/catalogo"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
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
            Benefícios da Automação de Processos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Apply motion to each benefit card */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Custos
              </h3>
              <p className="text-gray-600">
                Diminua custos operacionais automatizando tarefas repetitivas e reduzindo a necessidade de intervenção
                manual.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Aumento de Produtividade
              </h3>
              <p className="text-gray-600">
                Libere sua equipe para focar em atividades estratégicas enquanto as tarefas rotineiras são
                automatizadas.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Erros
              </h3>
              <p className="text-gray-600">
                Minimize erros humanos com processos automatizados que seguem regras predefinidas com precisão.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Melhor Experiência do Cliente
              </h3>
              <p className="text-gray-600">
                Ofereça respostas mais rápidas e serviços mais eficientes, aumentando a satisfação dos clientes.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Escalabilidade
              </h3>
              <p className="text-gray-600">
                Expanda seus negócios sem aumentar proporcionalmente os custos operacionais.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-md"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Insights de Dados
              </h3>
              <p className="text-gray-600">
                Obtenha dados valiosos sobre seus processos para tomar decisões mais informadas.
              </p>
            </motion.div>
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
            Como Implementamos a Automação
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {/* Apply motion to each step */}
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Análise</h3>
              <p className="text-gray-600">
                Mapeamos seus processos atuais e identificamos oportunidades de automação.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Planejamento</h3>
              <p className="text-gray-600">
                Desenvolvemos uma estratégia personalizada com soluções específicas para seu negócio.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Implementação</h3>
              <p className="text-gray-600">
                Desenvolvemos e implementamos as soluções de automação de forma ágil e eficiente.
              </p>
            </motion.div>

            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Otimização</h3>
              <p className="text-gray-600">
                Monitoramos, avaliamos e otimizamos continuamente os processos automatizados.
              </p>
            </motion.div>
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
              Pronto para otimizar seus processos?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Entre em contato conosco hoje mesmo e descubra como nossas soluções de automação podem transformar seu
              negócio.
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