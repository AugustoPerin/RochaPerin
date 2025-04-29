"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Mail, Phone } from "lucide-react";
import { useTransition } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { handleContact } from "../actions/contato";

type FormInput = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  contato: string;
};

export default function ContatoPage() {
  const [isLoading, startTransition] = useTransition();
  const { register, handleSubmit, setValue, reset } = useForm({
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      assunto: "automacao",
      mensagem: "",
      contato: "informacoes",
    },
  });

  const onSubmit = (data: FormInput) => {
    startTransition(async () => {
      try {
        await handleContact(data);
        reset();
        toast.success("Mensagem enviada com sucesso!");
      } catch (error) {
        console.error(error);
        toast.error("Erro ao enviar mensagem. Tente novamente mais tarde.");
      }
    });
  };

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
            Entre em Contato
          </motion.h1>
          <motion.p
            className="text-lg md:text-xl max-w-3xl mx-auto text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Estamos prontos para ajudar a transformar o seu negócio com nossas
            soluções tecnológicas.
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

      {/* Formulário de Contato */}
      <section className="py-16 md:py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-12">
            <motion.div
              className="lg:w-2/3"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Envie uma mensagem
              </h2>
              <p className="text-gray-600 mb-8">
                Preencha o formulário abaixo e nossa equipe entrará em contato o
                mais breve possível.
              </p>

              <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="nome">Nome completo</Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      className="rounded-lg"
                      {...register("nome")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      placeholder="Nome da sua empresa"
                      className="rounded-lg"
                      {...register("empresa")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className="rounded-lg"
                      {...register("email")}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone</Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      className="rounded-lg"
                      {...register("telefone")}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto</Label>
                  <Select onValueChange={(value) => setValue("assunto", value)}>
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="automacao">
                        Automação de Processos
                      </SelectItem>
                      <SelectItem value="chatbots">
                        Chatbots Empresariais
                      </SelectItem>
                      <SelectItem value="analise">Análise de Dados</SelectItem>
                      <SelectItem value="nuvem">Migração para Nuvem</SelectItem>
                      <SelectItem value="outro">Outro Assunto</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Como podemos ajudar?</Label>
                  <RadioGroup
                    onValueChange={(value) => setValue("contato", value)}
                    defaultValue="informacoes"
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="informacoes" id="informacoes" />
                      <Label htmlFor="informacoes">
                        Quero mais informações
                      </Label>
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
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva sua necessidade em detalhes..."
                    rows={5}
                    className="rounded-lg"
                    {...register("mensagem")}
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="currentColor"
                          d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
                        />
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>Enviar Mensagem</>
                  )}
                </Button>
              </form>
            </motion.div>

            <motion.div
              className="lg:w-1/3 mt-12 lg:mt-0"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-100">
                <h3 className="text-2xl font-semibold mb-6">
                  Informações de Contato
                </h3>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <Phone
                      className="text-blue-600 mr-4 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-medium mb-1">Telefone</h4>
                      <p className="text-gray-600">(71) 99349-1849</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <Mail
                      className="text-blue-600 mr-4 flex-shrink-0 mt-1"
                      size={24}
                    />
                    <div>
                      <h4 className="font-medium mb-1">E-mail</h4>
                      <p className="text-gray-600">contato@rochaperin.com</p>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Horário de Atendimento</h4>
                  <p className="text-gray-600 mb-1">
                    Segunda a Sexta: 9h às 18h
                  </p>
                  <p className="text-gray-600">Sábado: 9h às 13h</p>
                </div>

                <div className="mt-8">
                  <h4 className="font-medium mb-3">Redes Sociais</h4>
                  <div className="flex space-x-4">
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
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
                    <a
                      href="https://www.instagram.com/rocha_perin/"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
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
                        <rect
                          x="2"
                          y="2"
                          width="20"
                          height="20"
                          rx="5"
                          ry="5"
                        ></rect>
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                      </svg>
                      <span className="sr-only">Instagram</span>
                    </a>
                    <a
                      href="https://www.linkedin.com/company/rochaperin/"
                      className="text-blue-600 hover:text-blue-800 transition-colors"
                    >
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
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 md:py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-center mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Perguntas Frequentes
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                Quanto tempo leva para implementar um chatbot?
              </h3>
              <p className="text-gray-600">
                O tempo de implementação varia de acordo com a complexidade do
                projeto, mas geralmente leva de 1 a 5 semanas, desde o
                planejamento até a entrega final.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                Vocês oferecem suporte após a implementação?
              </h3>
              <p className="text-gray-600">
                Sim, oferecemos diferentes planos de suporte e manutenção para
                garantir que sua solução continue funcionando perfeitamente após
                a implementação.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                É possível integrar com sistemas existentes?
              </h3>
              <p className="text-gray-600">
                Sim, nossas soluções são desenvolvidas para se integrarem
                facilmente com sistemas existentes, como CRMs, ERPs e
                plataformas de e-commerce.
              </p>
            </motion.div>

            <motion.div
              className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ y: -5 }}
            >
              <h3 className="text-xl font-semibold mb-3">
                Quais tecnologias vocês utilizam?
              </h3>
              <p className="text-gray-600">
                Utilizamos tecnologias modernas e robustas, incluindo
                inteligência artificial, processamento de linguagem natural,
                APIs RESTful e arquiteturas em nuvem.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
