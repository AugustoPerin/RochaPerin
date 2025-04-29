"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Bot,
  Calendar,
  CheckCircle,
  CreditCard,
  FileText,
  MessageSquare,
  ShoppingCart,
  Truck,
  Users,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function ServicosPage() {
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

        <div className="container mx-auto px-4 py-16 md:py-20 relative z-10 text-center">
          <motion.h1
            className="text-3xl md:text-5xl font-bold mb-4 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Nossos Serviços
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça as soluções que a RochaPerin oferece para transformar e
            otimizar o seu negócio.
          </motion.p>
        </div>

        {/* Wave divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 80"
            fill="white"
          >
            <path d="M0,64L80,58.7C160,53,320,43,480,42.7C640,43,800,53,960,58.7C1120,64,1280,64,1360,64L1440,64L1440,80L1360,80C1280,80,1120,80,960,80C800,80,640,80,480,80C320,80,160,80,80,80L0,80Z"></path>
          </svg>
        </div>
      </section>

      {/* Categorias de Serviços */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Automação de Processos
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Agendamento de Serviços */}
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
                  <Calendar className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Agendamento de Serviços
                </h3>
                <p className="text-gray-600 mb-4">
                  Automatize o processo de agendamento de serviços, permitindo
                  que seus clientes marquem horários de forma rápida e
                  eficiente.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Integração com calendários</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Lembretes automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Gestão de disponibilidade</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">
                  Explorar serviço
                </span>
                <Link
                  href="/servicos/agendamento"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Cotação Automatizada */}
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
                  <FileText className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Cotação Automatizada
                </h3>
                <p className="text-gray-600 mb-4">
                  Agilize o processo de cotação com um sistema inteligente que
                  gera orçamentos personalizados instantaneamente.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Cálculos automáticos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Personalização de propostas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Integração com CRM</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">
                  Explorar serviço
                </span>
                <Link
                  href="/servicos/cotacao"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Catálogo Interativo */}
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
                  <FileText className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Catálogo Interativo
                </h3>
                <p className="text-gray-600 mb-4">
                  Ofereça um catálogo digital interativo que permite aos
                  clientes explorar produtos e serviços de forma dinâmica.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Busca avançada</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Filtros personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Atualização em tempo real</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">
                  Explorar serviço
                </span>
                <Link
                  href="/servicos/catalogo"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* WhatsApp Shopping */}
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
                  <ShoppingCart className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  WhatsApp Shopping
                </h3>
                <p className="text-gray-600 mb-4">
                  Transforme o WhatsApp em um canal de vendas com catálogo
                  interativo e carrinho de compras integrado.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Catálogo de produtos</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Carrinho de compras</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Pagamento integrado</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">
                  Explorar serviço
                </span>
                <Link
                  href="/servicos/whatsapp-shopping"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Rastreamento de Pedidos */}
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
                  <Truck className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Rastreamento de Pedidos
                </h3>
                <p className="text-gray-600 mb-4">
                  Ofereça aos seus clientes um sistema de rastreamento de
                  pedidos em tempo real, aumentando a transparência e
                  satisfação.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Atualizações em tempo real</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Notificações automáticas</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Integração com transportadoras</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">
                  Explorar serviço
                </span>
                <Link
                  href="/servicos/rastreamento"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>

            {/* Registro de Eventos */}
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
                  <Users className="text-blue-600 w-8 h-8" />
                </div>
                <h3 className="text-xl font-semibold mb-3">
                  Registro de Eventos
                </h3>
                <p className="text-gray-600 mb-4">
                  Simplifique o processo de inscrição em eventos com um sistema
                  automatizado de registro e gerenciamento.
                </p>
                <ul className="mb-4 space-y-2">
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Formulários personalizados</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Pagamento integrado</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle
                      className="text-green-500 mr-2 flex-shrink-0 mt-1"
                      size={16}
                    />
                    <span>Emissão de credenciais</span>
                  </li>
                </ul>
              </div>
              <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                <span className="text-sm font-medium text-blue-700">
                  Explorar serviço
                </span>
                <Link
                  href="/servicos/eventos"
                  className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </motion.div>
          </div>

          <div className="mt-24">
            <motion.h2
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Chatbots Especializados
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Atendimento ao Cliente (SAC) */}
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
                    <MessageSquare className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Atendimento ao Cliente (SAC)
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Automatize o atendimento ao cliente com um chatbot
                    inteligente que responde dúvidas e resolve problemas 24/7.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Respostas instantâneas</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Escalonamento para humanos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Integração com CRM</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-sm font-medium text-blue-700">
                    Explorar serviço
                  </span>
                  <Link
                    href="/servicos/chatbot-sac"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Pesquisas de Satisfação */}
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
                    <MessageSquare className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Pesquisas de Satisfação
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Colete feedback dos clientes de forma eficiente com chatbots
                    que realizam pesquisas de satisfação personalizadas.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Questionários interativos</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Análise de sentimento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Relatórios detalhados</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-sm font-medium text-blue-700">
                    Explorar serviço
                  </span>
                  <Link
                    href="/servicos/pesquisas"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Abertura de Tickets */}
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
                    <MessageSquare className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Abertura de Tickets
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Automatize o processo de abertura e categorização de tickets
                    de suporte com um chatbot inteligente.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Categorização automática</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Priorização inteligente</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Integração com helpdesk</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-sm font-medium text-blue-700">
                    Explorar serviço
                  </span>
                  <Link
                    href="/servicos/tickets"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Bot de Geração de Leads */}
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
                    <Bot className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Bot de Geração de Leads
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Capture e qualifique leads automaticamente com um chatbot
                    que engaja visitantes e coleta informações relevantes.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Qualificação de leads</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Integração com CRM</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Segmentação automática</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-sm font-medium text-blue-700">
                    Explorar serviço
                  </span>
                  <Link
                    href="/servicos/geracao-leads"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Ofertas Promocionais */}
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
                    <Bot className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Ofertas Promocionais
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Envie ofertas personalizadas aos clientes com base em seu
                    histórico de compras e preferências.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Personalização avançada</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Segmentação de clientes</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Análise de conversão</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-sm font-medium text-blue-700">
                    Explorar serviço
                  </span>
                  <Link
                    href="/servicos/ofertas"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>

              {/* Bot de Cobrança */}
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
                    <CreditCard className="text-blue-600 w-8 h-8" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3">
                    Bot de Cobrança Amigável
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Automatize o processo de cobrança com um chatbot que envia
                    lembretes amigáveis e facilita o pagamento.
                  </p>
                  <ul className="mb-4 space-y-2">
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Lembretes personalizados</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Opções de pagamento</span>
                    </li>
                    <li className="flex items-start">
                      <CheckCircle
                        className="text-green-500 mr-2 flex-shrink-0 mt-1"
                        size={16}
                      />
                      <span>Negociação de prazos</span>
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl">
                  <span className="text-sm font-medium text-blue-700">
                    Explorar serviço
                  </span>
                  <Link
                    href="/servicos/cobranca"
                    className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>
              </motion.div>
            </div>
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
              Entre em contato conosco hoje mesmo e descubra como nossas
              soluções podem impulsionar sua empresa.
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
  );
}
