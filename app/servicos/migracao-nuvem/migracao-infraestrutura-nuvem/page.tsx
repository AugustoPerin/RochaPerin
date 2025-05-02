"use client"

import { motion } from "framer-motion"
import { Check, Server, Database, Cloud, Zap, RefreshCw, Settings } from "lucide-react"
import { UnifiedHero } from "@/components/ui/unified-hero"
import { UnifiedSectionTitle } from "@/components/ui/unified-section-title"
import { UnifiedCTA } from "@/components/ui/unified-cta"
import { UnifiedWaveDivider } from "@/components/ui/unified-wave-divider"

export default function MigracaoInfraestruturaNuvemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <UnifiedHero
        title="Migração de Infraestrutura para Nuvem"
        description="Mova seus servidores, armazenamento e redes para a nuvem (IaaS), ganhando escalabilidade, flexibilidade e reduzindo custos operacionais com infraestrutura física."
        imageSrc="/placeholder.svg" // Placeholder, replace if needed
        imageAlt="Migração de Infraestrutura para Nuvem"
        imageHeight={300}
      />

      {/* Benefícios */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Benefícios da Migração de Infraestrutura" />
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
                <Zap className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Escalabilidade Sob Demanda</h3>
              <p className="text-gray-600">
                Aumente ou diminua recursos de computação, armazenamento e rede rapidamente conforme a necessidade.
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
                <Server className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Redução de Custos (OpEx)</h3>
              <p className="text-gray-600">
                Troque investimentos em hardware (CapEx) por despesas operacionais (OpEx), pagando apenas pelo uso.
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
                <RefreshCw className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Maior Disponibilidade</h3>
              <p className="text-gray-600">
                Beneficie-se da infraestrutura global e redundante dos provedores de nuvem, garantindo alta disponibilidade.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Recursos Principais */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
        <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Nossos Serviços de Migração IaaS" />
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
                <Server className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Migração de Servidores (VMs)</h3>
              <p className="text-gray-600">
                Migramos seus servidores físicos ou virtuais (VMware, Hyper-V) para instâncias na nuvem (EC2, Azure VMs, Compute Engine).
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
              <h3 className="text-xl font-semibold mb-3">Migração de Armazenamento</h3>
              <p className="text-gray-600">
                Transferimos seus dados de storage on-premise para soluções de armazenamento na nuvem (S3, Blob Storage, Cloud Storage).
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
              <h3 className="text-xl font-semibold mb-3">Configuração de Redes (VPC/VNet)</h3>
              <p className="text-gray-600">
                Projetamos e configuramos redes virtuais seguras na nuvem, incluindo VPNs e conexões dedicadas.
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
                <Cloud className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Automação de Infraestrutura (IaC)</h3>
              <p className="text-gray-600">
                Utilizamos ferramentas como Terraform e CloudFormation para provisionar e gerenciar sua infraestrutura como código.
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
                <Check className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Monitoramento e Gerenciamento</h3>
              <p className="text-gray-600">
                Implementamos soluções para monitorar a performance, segurança e custos da sua infraestrutura na nuvem.
              </p>
            </motion.div>
          </div>
        </div>
        <UnifiedWaveDivider color="#ffffff" />
      </section>

      {/* Como Funciona */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Nosso Processo de Migração IaaS" />
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
              <h3 className="text-lg font-semibold mb-2">Inventário e Análise</h3>
              <p className="text-gray-600">Mapeamos sua infraestrutura atual, identificamos dependências e avaliamos cargas de trabalho.</p>
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
              <h3 className="text-lg font-semibold mb-2">Desenho da Arquitetura</h3>
              <p className="text-gray-600">Projetamos a arquitetura de destino na nuvem, selecionando os serviços e configurações ideais.</p>
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
              <h3 className="text-lg font-semibold mb-2">Migração e Testes</h3>
              <p className="text-gray-600">Executamos a migração dos servidores, storage e redes, realizando testes funcionais e de performance.</p>
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
              <h3 className="text-lg font-semibold mb-2">Otimização Pós-Migração</h3>
              <p className="text-gray-600">Ajustamos configurações, otimizamos custos e garantimos a segurança do novo ambiente.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 md:py-24 bg-gray-50 relative">
         <UnifiedWaveDivider flip={true} color="#f9fafb" />
        <div className="container mx-auto px-4">
          <UnifiedSectionTitle title="Quando Migrar sua Infraestrutura" />
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
              <h3 className="text-xl font-semibold mb-4">Fim de Contratos de Data Center</h3>
              <p className="text-gray-600 mb-4">
                Aproveite o fim de contratos para mover sua infraestrutura para um modelo mais flexível e econômico.
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
              <h3 className="text-xl font-semibold mb-4">Necessidade de Escalabilidade</h3>
              <p className="text-gray-600 mb-4">
                Quando sua infraestrutura atual não consegue acompanhar o crescimento do negócio ou picos de demanda.
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
              <h3 className="text-xl font-semibold mb-4">Atualização de Hardware Obsoleto</h3>
              <p className="text-gray-600 mb-4">
                Evite grandes investimentos em hardware migrando para a nuvem e utilizando infraestrutura moderna.
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
              <h3 className="text-xl font-semibold mb-4">Melhora na Recuperação de Desastres</h3>
              <p className="text-gray-600 mb-4">
                Implemente planos de recuperação de desastres mais robustos e econômicos utilizando recursos da nuvem.
              </p>
            </motion.div>
          </div>
        </div>
         <UnifiedWaveDivider color="#1d4ed8" />
      </section>

      {/* CTA */}
      <UnifiedCTA
        title="Pronto para modernizar sua infraestrutura?"
        description="Deixe a complexidade da infraestrutura física para trás. Migre para a nuvem com nossa ajuda e ganhe escalabilidade, flexibilidade e eficiência. Fale conosco!"
      />
    </div>
  )
}

