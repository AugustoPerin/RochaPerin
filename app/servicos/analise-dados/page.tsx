"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import {
  ArrowRight,
  BarChart,
  Brain,
  Briefcase,
  CheckCircle,
  Database,
  TrendingUp,
  Users,
  LucideProps,
} from "lucide-react"
import { Button } from "@/components/ui/button"

// Define service structure for this page
interface DataService {
  title: string
  description: string
  features: string[]
  link: string
  icon: React.ComponentType<LucideProps>
}

// Data for the services listed on this page
const dataAnalysisServices: DataService[] = [
  {
    title: "Dashboards e Visualização",
    description:
      "Transforme dados brutos em insights visuais claros e acionáveis com dashboards interativos e personalizados.",
    features: [
      "Visualizações interativas e intuitivas",
      "Monitoramento de KPIs em tempo real",
      "Relatórios customizados para suas necessidades",
    ],
    link: "/servicos/analise-dados/dashboards-visualizacao",
    icon: BarChart,
  },
  {
    title: "Análise Preditiva",
    description:
      "Utilize modelos de Machine Learning para prever tendências futuras, comportamentos de clientes e otimizar decisões.",
    features: [
      "Previsão de demanda e vendas",
      "Modelagem de Churn e LTV",
      "Detecção de anomalias e fraudes",
    ],
    link: "/servicos/analise-dados/analise-preditiva",
    icon: Brain,
  },
  {
    title: "Business Intelligence (BI)",
    description:
      "Implemente soluções completas de BI para coletar, organizar e analisar dados, suportando a tomada de decisão estratégica.",
    features: [
      "Integração de múltiplas fontes de dados",
      "Plataforma de análise self-service",
      "Governança e segurança dos dados",
    ],
    link: "/servicos/analise-dados/business-intelligence",
    icon: Briefcase,
  },
  {
    title: "Engenharia de Dados e ETL",
    description:
      "Construa pipelines robustos para coletar, transformar e carregar dados de diversas fontes, garantindo informações confiáveis.",
    features: [
      "Desenvolvimento de pipelines ETL/ELT",
      "Modelagem de Data Warehouse e Data Lakes",
      "Garantia de qualidade e consistência dos dados",
    ],
    link: "/servicos/analise-dados/engenharia-dados-etl",
    icon: Database,
  },
  {
    title: "Análise de Clientes",
    description:
      "Compreenda o comportamento e valor dos seus clientes para personalizar experiências e aumentar a retenção.",
    features: [
      "Segmentação avançada de clientes",
      "Análise da jornada do cliente",
      "Personalização de ofertas e comunicação",
    ],
    link: "/servicos/analise-dados/analise-clientes",
    icon: Users,
  },
  {
    title: "Análise de Vendas e Marketing",
    description:
      "Otimize estratégias de vendas e marketing com análises de performance de campanhas, funil e ROI.",
    features: [
      "Análise de funil de vendas",
      "Modelagem de atribuição de marketing",
      "Otimização de campanhas e ROI",
    ],
    link: "/servicos/analise-dados/analise-vendas-marketing",
    icon: TrendingUp,
  },
]

export default function AnaliseDadosPage() {
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
                Análise de Dados Inteligente
              </motion.h1>
              <motion.p
                className="text-lg md:text-xl max-w-3xl mb-8 text-blue-100"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                Transforme seus dados em decisões estratégicas. Descubra insights valiosos, preveja tendências e otimize seus resultados com nossas soluções de análise de dados.
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
                  <Link href="/contato">Fale com um especialista</Link>
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
              <img src="/data-analysis.webp" alt="Análise de Dados" className="rounded-lg shadow-xl w-full max-w-md" />
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
            Por que Investir em Análise de Dados?
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <TrendingUp className="text-blue-600 w-8 h-8" />,
                title: "Decisões Embasadas",
                description:
                  "Tome decisões mais inteligentes e estratégicas com base em evidências e insights concretos.",
              },
              {
                icon: <BarChart className="text-blue-600 w-8 h-8" />,
                title: "Otimização de Performance",
                description:
                  "Identifique gargalos, otimize processos e melhore a eficiência operacional em todas as áreas.",
              },
              {
                icon: <Users className="text-blue-600 w-8 h-8" />,
                title: "Conhecimento do Cliente",
                description: "Entenda profundamente seus clientes para personalizar ofertas e aumentar a fidelidade.",
              },
              {
                icon: <Brain className="text-blue-600 w-8 h-8" />,
                title: "Previsão de Tendências",
                description:
                  "Antecipe mudanças no mercado, preveja demandas futuras e prepare seu negócio para o sucesso.",
              },
              {
                icon: <Briefcase className="text-blue-600 w-8 h-8" />,
                title: "Vantagem Competitiva",
                description: "Utilize dados como um ativo estratégico para se diferenciar da concorrência.",
              },
              {
                icon: <Database className="text-blue-600 w-8 h-8" />,
                title: "Inovação Contínua",
                description: "Descubra novas oportunidades de negócio, produtos e serviços através da análise de dados.",
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

      {/* Nossos Serviços de Análise de Dados */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossas Soluções em Análise de Dados
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {dataAnalysisServices.map((service, index) => (
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

      {/* Como Funciona (Adaptado para Análise de Dados) */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Nossa Abordagem Analítica
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Entendimento",
                description:
                  "Compreendemos seus objetivos de negócio e identificamos as perguntas chave que os dados podem responder.",
              },
              {
                step: "2",
                title: "Coleta e Preparação",
                description:
                  "Coletamos, limpamos e preparamos os dados relevantes de diversas fontes para garantir a qualidade da análise.",
              },
              {
                step: "3",
                title: "Análise e Insights",
                description:
                  "Aplicamos técnicas analíticas avançadas para extrair insights, visualizar resultados e gerar recomendações.",
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
              Desbloqueie o Potencial dos Seus Dados
            </motion.h2>
            <motion.p
              className="text-xl mb-10 text-blue-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Não deixe seus dados serem apenas números. Transforme-os em sua maior vantagem competitiva. Entre em contato e descubra como podemos ajudar.
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
                <Link href="/contato">Solicite uma Consultoria</Link>
              </Button>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

