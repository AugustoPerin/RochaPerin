"use client"

import { motion } from "framer-motion"
import { Check, Database, Settings, Layers, Zap, Repeat } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function EngenhariaDadosETLPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Engenharia de Dados e ETL"
        description="Construa pipelines de dados robustos e escaláveis para coletar, transformar e carregar dados de diversas fontes, garantindo informações confiáveis para suas análises."
        imageSrc="/engenharia-de-dados-e-etl.webp"
        imageAlt="Engenharia de Dados e ETL"
        imageHeight={300}
      />

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Benefícios da Engenharia de Dados e ETL" />
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Dados Confiáveis e Consistentes</h3>
              <p className="text-gray-600">
                Garanta a qualidade e a integridade dos seus dados através de processos de ETL bem definidos e automatizados.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Agilidade nas Análises</h3>
              <p className="text-gray-600">
                Disponibilize dados prontos para análise de forma mais rápida, acelerando a geração de insights.
              </p>
            </motion.div>
            <motion.div
              className="bg-gray-50 p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-4">
                <Layers className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Escalabilidade e Performance</h3>
              <p className="text-gray-600">
                Construa uma infraestrutura de dados que suporte o crescimento do volume de dados e das necessidades de análise.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Recursos Principais" />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Repeat className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Desenvolvimento de Pipelines ETL/ELT</h3>
              <p className="text-gray-600">
                Criamos fluxos automatizados para extrair dados de fontes diversas, transformá-los e carregá-los em seu Data Warehouse ou Data Lake.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Database className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Modelagem de Data Warehouse</h3>
              <p className="text-gray-600">
                Projetamos esquemas de banco de dados (Star Schema, Snowflake) otimizados para consultas e análises de BI.
              </p>
            </motion.div>
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Settings className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Integração com Múltiplas Fontes</h3>
              <p className="text-gray-600">
                Conectamos bancos de dados relacionais e NoSQL, APIs, arquivos planos, planilhas e sistemas legados.
              </p>
            </motion.div>
             <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Qualidade e Validação de Dados</h3>
              <p className="text-gray-600">
                Implementamos rotinas para garantir a precisão, completude e consistência dos dados processados.
              </p>
            </motion.div>
             <motion.div
              className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-4">
                <Zap className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoramento e Orquestração</h3>
              <p className="text-gray-600">
                Utilizamos ferramentas para agendar, monitorar e gerenciar a execução dos pipelines de dados.
              </p>
            </motion.div>
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Nosso Processo de Engenharia de Dados" />
          <div className="grid md:grid-cols-4 gap-8">
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">1</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Entendimento e Mapeamento</h3>
              <p className="text-gray-600">Identificamos as fontes de dados, regras de negócio e requisitos de análise.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">2</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Desenvolvimento do Pipeline</h3>
              <p className="text-gray-600">Construímos os fluxos de ETL/ELT usando as ferramentas mais adequadas.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">3</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Testes e Validação</h3>
              <p className="text-gray-600">Realizamos testes rigorosos para garantir a qualidade e performance dos pipelines.</p>
            </motion.div>
            <motion.div
              className="text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-blue-600">4</span>
              </div>
              <h3 className="text-lg font-semibold mb-2">Implantação e Monitoramento</h3>
              <p className="text-gray-600">Colocamos os pipelines em produção e monitoramos sua execução contínua.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
         <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Aplicações da Engenharia de Dados" />
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <h3 className="text-xl font-semibold mb-4">Criação de Data Warehouses</h3>
              <p className="text-gray-600 mb-4">
                Centralize dados de diferentes sistemas para facilitar análises de BI e relatórios gerenciais.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h3 className="text-xl font-semibold mb-4">Implementação de Data Lakes</h3>
              <p className="text-gray-600 mb-4">
                Armazene grandes volumes de dados brutos (estruturados e não estruturados) para análises avançadas e Machine Learning.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <h3 className="text-xl font-semibold mb-4">Migração de Dados</h3>
              <p className="text-gray-600 mb-4">
                Movimente dados entre sistemas, bancos de dados ou para a nuvem de forma segura e eficiente.
              </p>
            </motion.div>
            <motion.div
              className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition duration-300 bg-white"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4">Processamento de Big Data</h3>
              <p className="text-gray-600 mb-4">
                Implemente soluções para processar e analisar grandes volumes de dados usando tecnologias como Spark e Hadoop.
              </p>
            </motion.div>
          </div>
        </div>
         <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Precisa organizar e preparar seus dados?"
        description="Construa a base sólida para suas análises com nossos serviços de Engenharia de Dados e ETL. Fale conosco e descubra como podemos ajudar."
      />
    </div>
  )
}

