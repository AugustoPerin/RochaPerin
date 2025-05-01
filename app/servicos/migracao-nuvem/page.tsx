"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  CheckCircle,
  Cloud,
  Database,
  DollarSign,
  Map,
  Server,
  Settings,
  Shield,
  Zap, // For Agilidade
  TrendingUp, // For Inovação
  LucideProps,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Define service structure for this page
interface CloudService {
  title: string
  description: string
  features: string[]
  link: string
  icon: React.ComponentType<LucideProps>
}

// Data for the services listed on this page
const cloudMigrationServices: CloudService[] = [
  {
    title: "Estratégia e Consultoria",
    description:
      "Defina o melhor caminho para sua jornada na nuvem com estratégias personalizadas para maximizar benefícios.",
    features: [
      "Assessment de maturidade e prontidão",
      "Desenvolvimento de roadmap de adoção",
      "Análise de TCO e ROI",
    ],
    link: "/servicos/migracao-nuvem/estrategia-consultoria-nuvem",
    icon: Map,
  },
  {
    title: "Migração de Aplicações",
    description:
      "Mova suas aplicações para a nuvem com segurança e eficiência, aproveitando escalabilidade e flexibilidade.",
    features: [
      "Abordagens: Re-host, Re-platform, Re-factor",
      "Modernização de aplicações legadas",
      "Migração com mínimo downtime",
    ],
    link: "/servicos/migracao-nuvem/migracao-aplicacoes-nuvem",
    icon: Cloud,
  },
  {
    title: "Migração de Dados",
    description:
      "Transfira bancos de dados e data warehouses para a nuvem de forma segura, eficiente e com mínimo downtime.",
    features: [
      "Migração de bancos relacionais e NoSQL",
      "Transferência de Data Warehouses e Data Lakes",
      "Validação de integridade e consistência",
    ],
    link: "/servicos/migracao-nuvem/migracao-dados-nuvem",
    icon: Database,
  },
  {
    title: "Migração de Infraestrutura",
    description:
      "Mova servidores, armazenamento e redes para a nuvem (IaaS), ganhando escalabilidade e reduzindo custos.",
    features: [
      "Migração de servidores físicos e virtuais (VMs)",
      "Transferência de storage e arquivos",
      "Configuração de redes virtuais (VPC/VNet)",
    ],
    link: "/servicos/migracao-nuvem/migracao-infraestrutura-nuvem",
    icon: Server,
  },
  {
    title: "Segurança em Nuvem",
    description:
      "Proteja seus dados, aplicações e infraestrutura na nuvem, garantindo conformidade e mitigando ameaças.",
    features: [
      "Gestão de Identidade e Acesso (IAM)",
      "Configuração de Firewalls e WAFs",
      "Monitoramento de segurança (SIEM)",
    ],
    link: "/servicos/migracao-nuvem/seguranca-nuvem",
    icon: Shield,
  },
  {
    title: "Otimização de Custos (FinOps)",
    description:
      "Reduza seus gastos com nuvem sem comprometer a performance com práticas de FinOps e otimização de recursos.",
    features: [
      "Análise detalhada de custos",
      "Rightsizing de instâncias e serviços",
      "Gestão de instâncias reservadas e Savings Plans",
    ],
    link: "/servicos/migracao-nuvem/otimizacao-custos-nuvem",
    icon: DollarSign,
  },
  {
    title: "Serviços Gerenciados (MSP)",
    description:
      "Delegue a gestão, monitoramento e otimização do seu ambiente na nuvem para nossos especialistas 24/7.",
    features: [
      "Monitoramento proativo e alertas",
      "Gestão de patches e atualizações",
      "Suporte técnico especializado",
    ],
    link: "/servicos/migracao-nuvem/servicos-gerenciados-nuvem",
    icon: Settings,
  },
]

export default function MigracaoNuvemPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-900 to-blue-700 text-white overflow-hidden">
        {/* Background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
                Migração para Nuvem Eficiente
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-3xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Leve seu negócio para o próximo nível com nossa expertise em migração para nuvem. Ganhe escalabilidade, segurança e eficiência operacional.
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
                  <Link href="/contato">Inicie sua Jornada para Nuvem</Link>
                </Button>
              </motion.div>
            </div>
            <motion.div
              className="md:w-1/2 flex justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              {/* Placeholder image - Consider generating a relevant one */}
              <img src="/placeholder-cloud-migration.svg" alt="Migração para Nuvem" className="rounded-lg shadow-xl w-full max-w-md" />
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
            Vantagens da Migração para Nuvem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Cloud className="text-blue-600 w-8 h-8" />,
                title: "Escalabilidade Flexível",
                description:
                  "Ajuste recursos computacionais sob demanda, pagando apenas pelo que usar, sem grandes investimentos iniciais.",
              },
              {
                icon: <DollarSign className="text-blue-600 w-8 h-8" />,
                title: "Redução de Custos",
                description:
                  "Diminua despesas com hardware, manutenção e energia, transformando CapEx em OpEx previsível.",
              },
              {
                icon: <Shield className="text-blue-600 w-8 h-8" />,
                title: "Segurança Robusta",
                description: "Beneficie-se das avançadas camadas de segurança física e lógica dos provedores de nuvem.",
              },
              {
                icon: <Zap className="text-blue-600 w-8 h-8" />,
                title: "Agilidade e Velocidade",
                description:
                  "Provisione novos serviços e ambientes rapidamente, acelerando o tempo de lançamento no mercado.",
              },
              {
                icon: <Server className="text-blue-600 w-8 h-8" />,
                title: "Alta Disponibilidade",
                description: "Garanta a continuidade do negócio com infraestrutura redundante e planos de recuperação eficientes.",
              },
              {
                icon: <TrendingUp className="text-blue-600 w-8 h-8" />,
                title: "Foco na Inovação",
                description: "Libere sua equipe de TI da gestão de infraestrutura para focar em iniciativas estratégicas.",
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

      {/* Nossos Serviços de Migração para Nuvem */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossas Soluções em Migração para Nuvem
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {cloudMigrationServices.map((service, index) => (
              <motion.div
                key={index}
                className="bg-white p-6 rounded-xl shadow-md overflow-hidden flex flex-col"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex items-center mb-4">
                  <div className="bg-blue-50 p-3 rounded-full w-12 h-12 flex items-center justify-center mr-4">
                    <service.icon className="text-blue-600 w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-4 flex-grow">{service.description}</p>
                <ul className="mb-4 space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <CheckCircle className="text-green-500 mr-2 flex-shrink-0 mt-1" size={16} />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={service.link} className="text-blue-600 flex items-center hover:underline mt-auto pt-4 border-t border-gray-100">
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

      {/* Como Funciona (Adaptado para Migração) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossa Metodologia de Migração
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              {
                step: "1",
                title: "Assessment",
                description:
                  "Analisamos seu ambiente atual, definimos objetivos e criamos um caso de negócio para a migração.",
              },
              {
                step: "2",
                title: "Planejamento",
                description:
                  "Desenvolvemos um plano detalhado de migração, incluindo arquitetura de destino, segurança e cronograma.",
              },
              {
                step: "3",
                title: "Migração",
                description:
                  "Executamos a migração de aplicações, dados e infraestrutura com base no plano, minimizando impactos.",
              },
              {
                step: "4",
                title: "Otimização",
                description:
                  "Após a migração, otimizamos o ambiente na nuvem para performance, segurança e custos.",
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
                "url(\"data:image/svg+xml,%3Csvg width=\'60\' height=\'60\' viewBox=\'0 0 60 60\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cg fill=\'none\' fillRule=\'evenodd\'%3E%3Cg fill=\'%23ffffff\' fillOpacity=\'1\'%3E%3Cpath d=\'M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\'%3E%3C/g%3E%3C/g%3E%3C/svg%3E\")",
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
              Pronto para Acelerar sua Jornada para Nuvem?
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Seja qual for seu estágio na adoção da nuvem, estamos aqui para ajudar. Fale com nossos especialistas e descubra a melhor estratégia para seu negócio.
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
                <Link href="/contato">Agende uma Consultoria Gratuita</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

