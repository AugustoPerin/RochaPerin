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
  BarChart, // Icon for Dashboards
  Brain, // Icon for Análise Preditiva
  Briefcase, // Icon for BI
  Database, // Icon for Engenharia/Migração Dados
  Filter, // Icon for Limpeza Dados
  TrendingUp, // Icon for Vendas/Marketing
  Map, // Icon for Estratégia Nuvem
  Cloud, // Icon for Migração Aplicações
  Server, // Icon for Migração Infra
  Shield, // Icon for Segurança Nuvem
  DollarSign, // Icon for Custos Nuvem
  Settings, // Icon for Serviços Gerenciados
  LucideProps,
} from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";

// Define service structure
interface Service {
  title: string;
  description: string;
  features: string[];
  link: string;
  icon: React.ComponentType<LucideProps>;
}

// Define category structure
interface ServiceCategory {
  categoryTitle: string;
  services: Service[];
}

// Service data
const serviceData: ServiceCategory[] = [
  {
    categoryTitle: "Automação de Processos",
    services: [
      {
        title: "Agendamento de Serviços",
        description:
          "Automatize o processo de agendamento, permitindo que seus clientes marquem horários de forma rápida e eficiente.",
        features: [
          "Integração com calendários",
          "Lembretes automáticos",
          "Gestão de disponibilidade",
        ],
        link: "/servicos/automacao/agendamento",
        icon: Calendar,
      },
      {
        title: "Cotação Automatizada",
        description:
          "Agilize o processo de cotação com um sistema inteligente que gera orçamentos personalizados instantaneamente.",
        features: [
          "Cálculos automáticos",
          "Personalização de propostas",
          "Integração com CRM",
        ],
        link: "/servicos/automacao/cotacao",
        icon: FileText,
      },
      {
        title: "Catálogo Interativo",
        description:
          "Ofereça um catálogo digital interativo que permite aos clientes explorar produtos e serviços de forma dinâmica.",
        features: [
          "Busca avançada",
          "Filtros personalizados",
          "Atualização em tempo real",
        ],
        link: "/servicos/automacao/catalogo",
        icon: FileText, // Reusing icon
      },
      {
        title: "WhatsApp Shopping",
        description:
          "Transforme o WhatsApp em um canal de vendas com catálogo interativo e carrinho de compras integrado.",
        features: [
          "Catálogo de produtos",
          "Carrinho de compras",
          "Pagamento integrado",
        ],
        link: "/servicos/automacao/whatsapp-shopping",
        icon: ShoppingCart,
      },
      {
        title: "Rastreamento de Pedidos",
        description:
          "Ofereça aos seus clientes um sistema de rastreamento de pedidos em tempo real, aumentando a transparência e satisfação.",
        features: [
          "Atualizações em tempo real",
          "Notificações automáticas",
          "Integração com transportadoras",
        ],
        link: "/servicos/automacao/rastreamento",
        icon: Truck,
      },
      {
        title: "Registro de Eventos",
        description:
          "Simplifique o processo de inscrição em eventos com um sistema automatizado de registro e gerenciamento.",
        features: [
          "Formulários personalizados",
          "Pagamento integrado",
          "Emissão de credenciais",
        ],
        link: "/servicos/automacao/eventos",
        icon: Users,
      },
    ],
  },
  {
    categoryTitle: "Chatbots Especializados",
    services: [
      {
        title: "Atendimento ao Cliente (SAC)",
        description:
          "Automatize o atendimento com um chatbot inteligente que responde dúvidas e resolve problemas 24/7.",
        features: [
          "Respostas instantâneas",
          "Escalonamento para humanos",
          "Integração com CRM",
        ],
        link: "/servicos/chatbots/chatbot-sac",
        icon: MessageSquare,
      },
      {
        title: "Pesquisas de Satisfação",
        description:
          "Colete feedback dos clientes de forma eficiente com chatbots que realizam pesquisas personalizadas.",
        features: [
          "Questionários interativos",
          "Análise de sentimento",
          "Relatórios detalhados",
        ],
        link: "/servicos/chatbots/pesquisas",
        icon: MessageSquare, // Reusing icon
      },
      {
        title: "Abertura de Tickets",
        description:
          "Automatize a abertura e categorização de tickets de suporte com um chatbot inteligente.",
        features: [
          "Categorização automática",
          "Priorização inteligente",
          "Integração com helpdesk",
        ],
        link: "/servicos/chatbots/tickets",
        icon: MessageSquare, // Reusing icon
      },
      {
        title: "Geração de Leads",
        description:
          "Capture e qualifique leads automaticamente através de conversas interativas em seu site ou redes sociais.",
        features: [
          "Qualificação automática",
          "Agendamento de reuniões",
          "Integração com CRM",
        ],
        link: "/servicos/chatbots/geracao-leads",
        icon: Bot,
      },
      {
        title: "Cobrança Amigável",
        description:
          "Automatize o processo de cobrança com um chatbot que envia lembretes amigáveis e facilita pagamentos.",
        features: [
          "Lembretes personalizados",
          "Opções de pagamento variadas",
          "Negociação de prazos",
        ],
        link: "/servicos/chatbots/cobrancas",
        icon: CreditCard,
      },
    ],
  },
  {
    categoryTitle: "Análise de Dados",
    services: [
        {
            title: "Dashboards e Visualização",
            description: "Transforme dados brutos em insights visuais claros e acionáveis com dashboards interativos e personalizados.",
            features: ["Visualizações interativas", "Monitoramento de KPIs", "Relatórios customizados"],
            link: "/servicos/analise-dados/dashboards-visualizacao",
            icon: BarChart,
        },
        {
            title: "Análise Preditiva",
            description: "Utilize modelos de Machine Learning para prever tendências futuras, comportamentos de clientes e otimizar decisões.",
            features: ["Previsão de demanda", "Modelagem de Churn", "Detecção de anomalias"],
            link: "/servicos/analise-dados/analise-preditiva",
            icon: Brain,
        },
        {
            title: "Business Intelligence (BI)",
            description: "Implemente soluções completas de BI para coletar, organizar e analisar dados, suportando a tomada de decisão estratégica.",
            features: ["Integração de dados", "Análise self-service", "Governança de dados"],
            link: "/servicos/analise-dados/business-intelligence",
            icon: Briefcase,
        },
        {
            title: "Engenharia de Dados e ETL",
            description: "Construa pipelines robustos para coletar, transformar e carregar dados de diversas fontes, garantindo informações confiáveis.",
            features: ["Pipelines ETL/ELT", "Modelagem de Data Warehouse", "Qualidade de dados"],
            link: "/servicos/analise-dados/engenharia-dados-etl",
            icon: Database,
        },
        {
            title: "Análise de Clientes",
            description: "Compreenda o comportamento e valor dos seus clientes para personalizar experiências e aumentar a retenção.",
            features: ["Segmentação avançada", "Análise de jornada", "Previsão de LTV e Churn"],
            link: "/servicos/analise-dados/analise-clientes",
            icon: Users,
        },
        {
            title: "Análise de Vendas e Marketing",
            description: "Otimize estratégias de vendas e marketing com análises de performance de campanhas, funil e ROI.",
            features: ["Análise de funil", "Modelagem de atribuição", "Previsão de vendas"],
            link: "/servicos/analise-dados/analise-vendas-marketing",
            icon: TrendingUp,
        },
        {
            title: "Limpeza e Preparação de Dados",
            description: "Garanta a qualidade e confiabilidade dos seus dados com processos eficientes de limpeza, transformação e enriquecimento.",
            features: ["Tratamento de erros", "Padronização", "Enriquecimento de dados"],
            link: "/servicos/analise-dados/limpeza-preparacao-dados",
            icon: Filter,
        },
    ],
  },
  {
    categoryTitle: "Migração para Nuvem",
    services: [
        {
            title: "Estratégia e Consultoria",
            description: "Defina o melhor caminho para sua jornada na nuvem com estratégias personalizadas para maximizar benefícios.",
            features: ["Assessment de maturidade", "Roadmap de adoção", "Análise de TCO"],
            link: "/servicos/migracao-nuvem/estrategia-consultoria-nuvem",
            icon: Map,
        },
        {
            title: "Migração de Aplicações",
            description: "Mova suas aplicações para a nuvem com segurança e eficiência, aproveitando escalabilidade e flexibilidade.",
            features: ["Re-host (Lift & Shift)", "Re-platform", "Re-factor/Re-architect"],
            link: "/servicos/migracao-nuvem/migracao-aplicacoes-nuvem",
            icon: Cloud,
        },
        {
            title: "Migração de Dados",
            description: "Transfira bancos de dados e data warehouses para a nuvem de forma segura, eficiente e com mínimo downtime.",
            features: ["Migração Relacional/NoSQL", "Migração de DW", "Validação de integridade"],
            link: "/servicos/migracao-nuvem/migracao-dados-nuvem",
            icon: Database,
        },
        {
            title: "Migração de Infraestrutura",
            description: "Mova servidores, armazenamento e redes para a nuvem (IaaS), ganhando escalabilidade e reduzindo custos.",
            features: ["Migração de VMs", "Migração de Storage", "Configuração de Redes (VPC)"],
            link: "/servicos/migracao-nuvem/migracao-infraestrutura-nuvem",
            icon: Server,
        },
        {
            title: "Segurança em Nuvem",
            description: "Proteja seus dados, aplicações e infraestrutura na nuvem, garantindo conformidade e mitigando ameaças.",
            features: ["Gestão de Identidade (IAM)", "Segurança de Rede (WAF)", "Monitoramento (SIEM)"],
            link: "/servicos/migracao-nuvem/seguranca-nuvem",
            icon: Shield,
        },
        {
            title: "Otimização de Custos (FinOps)",
            description: "Reduza seus gastos com nuvem sem comprometer a performance com práticas de FinOps e otimização de recursos.",
            features: ["Análise de custos", "Rightsizing", "Gestão de Reservas"],
            link: "/servicos/migracao-nuvem/otimizacao-custos-nuvem",
            icon: DollarSign,
        },
        {
            title: "Serviços Gerenciados (MSP)",
            description: "Delegue a gestão, monitoramento e otimização do seu ambiente na nuvem para nossos especialistas 24/7.",
            features: ["Gestão de Infra/Plataforma", "Monitoramento proativo", "Suporte especializado"],
            link: "/servicos/migracao-nuvem/servicos-gerenciados-nuvem",
            icon: Settings,
        },
    ],
  },
];

export default function ServicosPage() {
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

      {/* Categorias de Serviços com Carrossel */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4 space-y-16 md:space-y-24">
          {serviceData.map((category, categoryIndex) => (
            <motion.div
              key={category.categoryTitle}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
                {category.categoryTitle}
              </h2>
              <Carousel
                opts={{
                  align: "start",
                  loop: false, // Set to true if you want infinite loop
                }}
                className="w-full"
              >
                <CarouselContent className="-ml-4">
                  {category.services.map((service, serviceIndex) => (
                    <CarouselItem
                      key={service.link}
                      className="pl-4 md:basis-1/2 lg:basis-1/3"
                    >
                      <div className="p-1 h-full">
                        <Card className="h-full flex flex-col justify-between rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100">
                          <CardContent className="p-8 flex flex-col flex-grow">
                            <div className="bg-blue-50 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-6">
                              <service.icon className="text-blue-600 w-8 h-8" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">
                              {service.title}
                            </h3>
                            <p className="text-gray-600 mb-4 flex-grow">
                              {service.description}
                            </p>
                            <ul className="mb-4 space-y-2">
                              {service.features.map((feature) => (
                                <li key={feature} className="flex items-start">
                                  <CheckCircle
                                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                                    size={16}
                                  />
                                  <span>{feature}</span>
                                </li>
                              ))}
                            </ul>
                          </CardContent>
                          <div className="bg-gradient-to-r from-blue-50 to-blue-100 p-4 flex justify-between items-center rounded-b-xl mt-auto">
                            <span className="text-sm font-medium text-blue-700">
                              Explorar serviço
                            </span>
                            <Link
                              href={service.link}
                              className="bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 transition-colors"
                            >
                              <ArrowRight className="w-4 h-4" />
                            </Link>
                          </div>
                        </Card>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="absolute left-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
                <CarouselNext className="absolute right-[-50px] top-1/2 -translate-y-1/2 hidden md:inline-flex" />
              </Carousel>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}

