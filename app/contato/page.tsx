import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContatoPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-blue-700 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4">Entre em Contato</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Estamos prontos para ajudar a transformar o seu negócio com nossas soluções tecnológicas.
          </p>
        </div>
      </section>

      {/* Formulário de Contato */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <div className="lg:w-2/3">
              <h2 className="text-3xl font-bold mb-6">Envie uma mensagem</h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o mais breve possível.
              </p>

              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input id="nome" placeholder="Digite seu nome completo" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input id="empresa" placeholder="Nome da sua empresa" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" type="email" placeholder="seu@email.com" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input id="telefone" placeholder="(00) 00000-0000" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto</Label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automacao">Automação de Processos</SelectItem>
                      <SelectItem value="chatbots">Chatbots Empresariais</SelectItem>
                      <SelectItem value="analise">Análise de Dados</SelectItem>
                      <SelectItem value="nuvem">Migração para Nuvem</SelectItem>
                      <SelectItem value="outro">Outro Assunto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Como podemos ajudar?</Label>
                  <RadioGroup defaultValue="informacoes">
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="informacoes" id="informacoes" />
                      <Label htmlFor="informacoes">Quero mais informações</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="orcamento" id="orcamento" />
                      <Label htmlFor="orcamento">Solicitar orçamento</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="demonstracao" id="demonstracao" />
                      <Label htmlFor="demonstracao">Agendar demonstração</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="parceria" id="parceria" />
                      <Label htmlFor="parceria">Proposta de parceria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="outros" id="outros" />
                      <Label htmlFor="outros">Outros</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem</Label>
                  <Textarea id="mensagem" placeholder="Descreva sua necessidade em detalhes..." rows={5} />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto">
                  Enviar mensagem
                </Button>
              </form>
            </div>

            <div className="lg:w-1/3 mt-12 lg:mt-0">
              <div className="bg-gray-50 p-8 rounded-lg">
                <h3 className="text-2xl font-semibold mb-6">Informações de Contato</h3>

                <div className="space-y-6">

                  <div className="flex items-start">
                    <Phone className="text-blue-600 mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p className="text-gray-600">(71) 99349-1849</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail className="text-blue-600 mr-4 flex-shrink-0 mt-1" size={24} />
                    <div>
                      <h4 className="font-medium mb-1">E-mail</h4>
                      <p className="text-gray-600">contato@rochaperin.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Horário de Atendimento</h4>
                  <p className="text-gray-600 mb-1">Segunda a Sexta: 9h às 18h</p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-facebook"
                      >
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                      </svg>
                      <span className="sr-only">Facebook</span>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-instagram"
                      >
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a href="#" className="text-blue-600 hover:text-blue-800">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="lucide lucide-linkedin"
                      >
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                        <rect x="2" y="9" width="4" height="12"></rect>
                        <circle cx="4" cy="4" r="2"></circle>
                      </svg>
                      <span className="sr-only">LinkedIn</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Perguntas Frequentes</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Quanto tempo leva para implementar um chatbot?</h3>
              <p className="text-gray-600">
                O tempo de implementação varia de acordo com a complexidade do projeto, mas geralmente leva de 1 a 5
                semanas, desde o planejamento até a entrega final.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Vocês oferecem suporte após a implementação?</h3>
              <p className="text-gray-600">
                Sim, oferecemos diferentes planos de suporte e manutenção para garantir que sua solução continue
                funcionando perfeitamente após a implementação.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">É possível integrar com sistemas existentes?</h3>
              <p className="text-gray-600">
                Sim, nossas soluções são desenvolvidas para se integrarem facilmente com sistemas existentes, como CRMs,
                ERPs e plataformas de e-commerce.
              </p>
            </div>

            <div className="border border-gray-200 rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-3">Quais tecnologias vocês utilizam?</h3>
              <p className="text-gray-600">
                Utilizamos tecnologias modernas e robustas, incluindo inteligência artificial, processamento de
                linguagem natural, APIs RESTful e arquiteturas em nuvem.
              </p>
            </div>
          </div>

        </div>
      </section>
    </div>
  )
}
