"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export default function ClientesPage() {
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
            Nossos Clientes
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Conheça algumas das empresas que confiam em nossas soluções para
            transformar seus negócios.
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

      {/* Clientes Destacados */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Clientes Destacados
          </motion.h2>

          <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Client logos */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 w-full h-32 rounded-md mb-4 flex items-center justify-center">
                <img
                  src="/cliente-integral.webp"
                  alt="Cliente 1"
                  className="max-h-16"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Colégio Integral</h3>
              <p className="text-gray-600 text-center text-sm">
                Implementação de chatbot para atendimento ao cliente
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 w-full h-32 rounded-md mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=80&width=160&text=Cliente 2"
                  alt="Cliente 2"
                  className="max-h-16"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empresa 2</h3>
              <p className="text-gray-600 text-center text-sm">
                Automação de processos internos e análise de dados
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 w-full h-32 rounded-md mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=80&width=160&text=Cliente 3"
                  alt="Cliente 3"
                  className="max-h-16"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empresa 3</h3>
              <p className="text-gray-600 text-center text-sm">
                Implementação de chatbot para atendimento ao cliente
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 flex flex-col items-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <div className="bg-gray-50 w-full h-32 rounded-md mb-4 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=80&width=160&text=Cliente 4"
                  alt="Cliente 4"
                  className="max-h-16"
                />
              </div>
              <h3 className="text-lg font-semibold mb-2">Empresa 4</h3>
              <p className="text-gray-600 text-center text-sm">
                Automação de processos internos e análise de dados
              </p>
            </motion.div>
          </div>

          <div className="text-center">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md"
            >
              <Link href="/contato">Seja nosso cliente</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            O que nossos clientes dizem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Testimonials */}
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 mb-4 italic">
                "A implementação do chatbot da RochaPerin reduziu nosso tempo de
                resposta em 80% e aumentou a satisfação dos clientes
                significativamente."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">MS</span>
                </div>
                <div>
                  <h4 className="font-semibold">Maria Silva</h4>
                  <p className="text-gray-600 text-sm">
                    Diretora de Atendimento, Empresa A
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 mb-4 italic">
                "A automação de processos implementada pela equipe da RochaPerin
                nos permitiu reduzir custos operacionais em 35% no primeiro
                ano."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">JS</span>
                </div>
                <div>
                  <h4 className="font-semibold">João Santos</h4>
                  <p className="text-gray-600 text-sm">COO, Empresa B</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <p className="text-gray-700 mb-4 italic">
                "A migração para nuvem foi realizada com zero tempo de
                inatividade e nos proporcionou uma infraestrutura muito mais
                escalável e segura."
              </p>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full mr-4 flex items-center justify-center">
                  <span className="text-blue-700 font-semibold">AO</span>
                </div>
                <div>
                  <h4 className="font-semibold">Ana Oliveira</h4>
                  <p className="text-gray-600 text-sm">CTO, Empresa C</p>
                </div>
              </div>
            </motion.div>
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

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Quer fazer parte desta lista?
          </motion.h2>
          <motion.p
            className="text-xl mb-8 max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Entre em contato conosco hoje mesmo e descubra como nossas soluções
            podem transformar o seu negócio.
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
      </section>
    </div>
  );
}
