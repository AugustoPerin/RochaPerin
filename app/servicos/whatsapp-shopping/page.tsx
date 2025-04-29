import Link from "next/link";
import {
  CheckCircle,
  MessageSquare,
  ShoppingCart,
  Smartphone,
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function WhatsAppShoppingPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h1 className="text-4xl font-bold mb-4">WhatsApp Shopping</h1>
              <p className="text-xl mb-8">
                Transforme o WhatsApp em um poderoso canal de vendas com
                catálogo interativo e carrinho de compras, oferecendo uma
                experiência de compra conveniente e familiar para seus clientes.
              </p>
              <Button
                asChild
                size="lg"
                className="bg-white text-blue-700 hover:bg-gray-100"
              >
                <Link href="/contato">Solicite uma demonstração</Link>
              </Button>
            </div>
            <div className="md:w-1/2 flex justify-center">
              <img
                src="/placeholder.svg?height=400&width=500"
                alt="WhatsApp Shopping"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Recursos */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Recursos Principais
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ShoppingCart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Catálogo de Produtos
              </h3>
              <p className="text-gray-600 mb-4">
                Apresente seus produtos de forma organizada e atraente
                diretamente no WhatsApp, com imagens, descrições e preços.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Categorias e subcategorias</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Busca por nome ou código</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Produtos em destaque</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <ShoppingCart className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Carrinho de Compras
              </h3>
              <p className="text-gray-600 mb-4">
                Permita que os clientes adicionem produtos ao carrinho, ajustem
                quantidades e finalizem a compra sem sair do WhatsApp.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Gestão de quantidades</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Cálculo automático de total</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Aplicação de cupons</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <div className="bg-blue-100 p-3 rounded-full w-14 h-14 flex items-center justify-center mb-4">
                <MessageSquare className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Pagamento Integrado
              </h3>
              <p className="text-gray-600 mb-4">
                Ofereça múltiplas opções de pagamento diretamente pelo WhatsApp,
                tornando o processo de compra rápido e conveniente.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Cartão de crédito</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>PIX</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle
                    className="text-green-500 mr-2 flex-shrink-0 mt-1"
                    size={16}
                  />
                  <span>Boleto bancário</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Benefícios para seu Negócio
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Aumento de Vendas
              </h3>
              <p className="text-gray-600">
                Aproveite a popularidade e familiaridade do WhatsApp para criar
                um novo canal de vendas eficiente e acessível.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Redução de Abandono
              </h3>
              <p className="text-gray-600">
                Diminua as taxas de abandono de carrinho oferecendo uma
                experiência de compra simplificada e familiar.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Atendimento Personalizado
              </h3>
              <p className="text-gray-600">
                Combine automação com atendimento humano quando necessário,
                oferecendo suporte personalizado durante a jornada de compra.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 flex items-center">
                <CheckCircle className="text-green-500 mr-2" size={20} />
                Baixo Custo de Implementação
              </h3>
              <p className="text-gray-600">
                Aproveite um canal que seus clientes já utilizam, sem
                necessidade de desenvolver aplicativos ou sites complexos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Como Funciona */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Como Funciona
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Configuração</h3>
              <p className="text-gray-600">
                Configuramos seu catálogo de produtos e integramos com seu
                sistema de gestão ou e-commerce existente.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Navegação</h3>
              <p className="text-gray-600">
                O cliente navega pelo catálogo, visualiza produtos e adiciona
                itens ao carrinho diretamente no WhatsApp.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Checkout</h3>
              <p className="text-gray-600">
                O cliente finaliza a compra, escolhe a forma de pagamento e
                fornece informações de entrega.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                <span className="text-blue-700 text-2xl font-bold">4</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Acompanhamento</h3>
              <p className="text-gray-600">
                O cliente recebe atualizações sobre o status do pedido e
                informações de rastreamento pelo WhatsApp.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ideal Para</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Lojas de Varejo</h3>
              <p className="text-gray-600">
                Pequenas e médias empresas que desejam oferecer uma experiência
                de compra digital sem grandes investimentos.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Restaurantes e Delivery
              </h3>
              <p className="text-gray-600">
                Estabelecimentos que desejam oferecer cardápio digital e receber
                pedidos diretamente pelo WhatsApp.
              </p>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Smartphone className="text-blue-600 w-8 h-8" />
              </div>
              <h3 className="text-xl font-semibold mb-2">
                Serviços por Assinatura
              </h3>
              <p className="text-gray-600">
                Empresas que oferecem produtos recorrentes ou assinaturas e
                desejam facilitar o processo de compra.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-blue-700 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">
            Pronto para vender pelo WhatsApp?
          </h2>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            Entre em contato conosco hoje mesmo e descubra como nossa solução de
            WhatsApp Shopping pode transformar seu negócio.
          </p>
          <Button
            asChild
            size="lg"
            className="bg-white text-blue-700 hover:bg-gray-100"
          >
            <Link href="/contato">Solicite uma demonstração</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
