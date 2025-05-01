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
import { useTransition, useEffect } from "react"; // Import useEffect
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { handleContact } from "../actions/contato";

// Define gtag function type for TypeScript if not already globally defined
declare global {
  interface Window {
    gtag: (
      command: string,
      action: string,
      params?: { [key: string]: any }
    ) => void;
  }
}

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
  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { isValid, errors }, // Get isValid and errors from formState
    watch, // Import watch to monitor field changes
  } = useForm<FormInput>({
    mode: "onChange", // Validate on change to enable/disable button dynamically
    defaultValues: {
      nome: "",
      empresa: "",
      email: "",
      telefone: "",
      assunto: "Automação de Processos", // Set a default value for Select
      mensagem: "",
      contato: "informacoes",
    },
  });

  // Watch required fields to re-evaluate button state if needed (though mode: 'onChange' handles most cases)
  const watchedFields = watch(["nome", "email", "telefone", "mensagem"]);

  const onSubmit = (data: FormInput) => {
    // Trigger Google Ads Conversion Tag
    if (typeof window.gtag === "function") {
      window.gtag("event", "conversion", {
        send_to: "690-028-6633/SUBMIT_LEAD_FORM", // <<< SUBSTITUA PELOS SEUS VALORES
        // You can add more parameters here if needed
      });
      console.log("Google Ads Tag SUBMIT_LEAD_FORM triggered."); // For debugging
    } else {
      console.warn("gtag function not found. Google Ads Tag not sent.");
    }

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

  // Log errors for debugging validation
  useEffect(() => {
    console.log("Form errors:", errors);
  }, [errors]);

  return (
    <div className="min-h-screen">
      {/* Hero Section ... (rest of the hero section code remains the same) */}
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
                    <Label htmlFor="nome">Nome completo *</Label>
                    <Input
                      id="nome"
                      placeholder="Digite seu nome completo"
                      className={`rounded-lg ${errors.nome ? 'border-red-500' : ''}`}
                      {...register("nome", { required: "Nome é obrigatório" })}
                    />
                    {errors.nome && <p className="text-sm text-red-600">{errors.nome.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="empresa">Empresa</Label>
                    <Input
                      id="empresa"
                      placeholder="Nome da sua empresa"
                      className="rounded-lg"
                      {...register("empresa")} // Not required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">E-mail *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="seu@email.com"
                      className={`rounded-lg ${errors.email ? 'border-red-500' : ''}`}
                      {...register("email", {
                        required: "E-mail é obrigatório",
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: "Endereço de e-mail inválido"
                        }
                      })}
                    />
                    {errors.email && <p className="text-sm text-red-600">{errors.email.message}</p>}
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="telefone">Telefone *</Label>
                    <Input
                      id="telefone"
                      placeholder="(00) 00000-0000"
                      className={`rounded-lg ${errors.telefone ? 'border-red-500' : ''}`}
                      {...register("telefone", { required: "Telefone é obrigatório" })}
                    />
                     {errors.telefone && <p className="text-sm text-red-600">{errors.telefone.message}</p>}
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="assunto">Assunto</Label>
                  <Select
                    defaultValue={"Automação de Processos"} // Ensure default value matches one of the items
                    onValueChange={(value) => setValue("assunto", value)}
                  >
                    <SelectTrigger className="rounded-lg">
                      <SelectValue placeholder="Selecione o assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Automação de Processos">
                        Automação de Processos
                      </SelectItem>
                      <SelectItem value="Chatbots Empresariais">
                        Chatbots Empresariais
                      </SelectItem>
                      <SelectItem value="Análise de Dados">Análise de Dados</SelectItem>
                      <SelectItem value="Migração para Nuvem">Migração para Nuvem</SelectItem>
                      <SelectItem value="Outro Assunto">Outro Assunto</SelectItem> {/* Corrected typo */}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Como podemos ajudar?</Label>
                  <RadioGroup
                    defaultValue="informacoes"
                    onValueChange={(value) => setValue("contato", value)}
                    {...register("contato")} // Register the radio group
                  >
                    {/* Radio options remain the same */}
                     <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Quero mais informações" id="informacoes" />
                      <Label htmlFor="informacoes">
                        Quero mais informações
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Solicitar orçamento" id="orcamento" />
                      <Label htmlFor="orcamento">Solicitar orçamento</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Agendar demonstração" id="demonstracao" />
                      <Label htmlFor="demonstracao">Agendar demonstração</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Proposta de parceria" id="parceria" />
                      <Label htmlFor="parceria">Proposta de parceria</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="Outros" id="outros" />
                      <Label htmlFor="outros">Outros</Label>
                    </div>
                  </RadioGroup>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="mensagem">Mensagem *</Label>
                  <Textarea
                    id="mensagem"
                    placeholder="Descreva sua necessidade em detalhes..."
                    rows={5}
                    className={`rounded-lg ${errors.mensagem ? 'border-red-500' : ''}`}
                    {...register("mensagem", { required: "Mensagem é obrigatória" })}
                  />
                   {errors.mensagem && <p className="text-sm text-red-600">{errors.mensagem.message}</p>}
                </div>

                <Button
                  type="submit"
                  size="lg"
                  disabled={!isValid || isLoading} // Disable button if form is invalid or loading
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full shadow-md disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isLoading ? (
                    <span className="flex items-center">
                      <svg
                        className="animate-spin h-5 w-5 mr-3 text-white"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                      >
                         <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                         <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Enviando...
                    </span>
                  ) : (
                    <>Enviar Mensagem</>
                  )}
                </Button>
              </form>
            </motion.div>

            {/* Informações de Contato ... (rest of the contact info section remains the same) */}
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

      {/* FAQ ... (rest of the FAQ section remains the same) */}
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
            {/* FAQ items remain the same */}
          </div>
        </div>
      </section>
    </div>
  );
}

