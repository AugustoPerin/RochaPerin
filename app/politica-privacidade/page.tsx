"use client"

import { motion } from "framer-motion"

// Simple component to render paragraphs preserving line breaks
const Paragraph = ({ text }: { text: string }) => {
  return (
    <>
      {text.split('\n').map((line, index) => (
        <p key={index} className="mb-4 text-gray-700">
          {line || '\u00A0'} {/* Render non-breaking space for empty lines */}
        </p>
      ))}
    </>
  )
}

export default function PoliticaPrivacidadePage() {
  // Extracted text content - IMPORTANT: Keep this exactly as extracted
  const politicaContent = `
                           POLÍTICA DE PRIVACIDADE
PERINTECH CONSULTORIA EM TECNOLOGIA LTDACNPJ: 51.399.546/0001-06Endereço: AV. LUIS VIANA FILHO, 013223, EDIF. HANGAR BUSINESS PARK HANGAR 2 SALA 301, 41.500-300, SALVADOR, BA

1. OBJETIVO
Esta Política de Privacidade tem como objetivo demonstrar o compromisso da PERINTECH CONSULTORIA EM TECNOLOGIA LTDA com a privacidade, a proteção de dados pessoais e a transparência no tratamento de informações coletadas no contexto de suas atividades de consultoria em tecnologia, desenvolvimento de soluções em automação, chatbots, análise de dados e serviços em nuvem.

2. ABRANGÊNCIA
Esta política aplica-se a todos os dados pessoais tratados pela PERINTECH em razão de:
   oo    Relacionamentos comerciais com clientes, parceiros e fornecedores;
   oo    Prestação de serviços de consultoria e desenvolvimento;
   oo    Interações realizadas por meio de nossos canais digitais (site, chatbots, e-mail, redes sociais, etc.).

3. COLETA DE DADOS
A PERINTECH pode coletar os seguintes tipos de dados pessoais:
   oo    Dados de identificação pessoal: nome, CPF, RG, cargo, empresa, e-mail, telefone;
   oo    Dados profissionais: histórico de contato, informações sobre demandas ou escopos de serviços;
   oo    Dados de navegação: IP, localização, cookies, dados de acesso e interações com nosso site ou sistemas;
   oo    Dados fornecidos por clientes: informações de terceiros compartilhadas por empresas contratantes no escopo da prestação de serviços (ex: dados de usuários de sistemas, leads, bases para análise).
   
4. FINALIDADES DO TRATAMENTO
Os dados pessoais são tratados pela PERINTECH para as seguintes finalidades:
   oo    Executar e aprimorar os serviços contratados;
   oo    Viabilizar o contato com clientes e leads;
   oo    Cumprir obrigações legais, contratuais e regulatórias;
   oo    Garantir segurança da informação e prevenção contra fraudes;
   oo    Realizar análises e melhorias de performance dos serviços;
   oo    Desenvolver e operar soluções com base em dados (ex: automações, relatórios, IA, chatbots).

5. COMPARTILHAMENTO DE DADOS
A PERINTECH não compartilha dados pessoais com terceiros, exceto:
   oo    Quando necessário para execução dos serviços contratados (ex: integrações com sistemas do cliente ou parceiros autorizados);
   oo    Para cumprimento de obrigações legais ou regulatórias;
   oo    Mediante consentimento do titular dos dados;
   oo    Em casos de contratação de suboperadores (prestadores de serviços) com cláusulas contratuais de proteção de dados.

6. DIREITOS DOS TITULARES
Nos termos da LGPD, os titulares dos dados pessoais têm direito a:
   oo    Confirmação da existência de tratamento;
   oo    Acesso aos dados;
   oo    Correção de dados incompletos, inexatos ou desatualizados;
   oo    Anonimização, bloqueio ou eliminação de dados desnecessários ou tratados em desconformidade;
   oo    Portabilidade dos dados;
   oo    Eliminação dos dados tratados com consentimento;
   oo    Informação sobre compartilhamento com terceiros;
   oo    Revogação do consentimento, quando aplicável.
Solicitações devem ser encaminhadas para: contato@rochaperin.com

7. SEGURANÇA DOS DADOS
A PERINTECH adota medidas técnicas e organizacionais adequadas para proteger os dados pessoais, incluindo:
   oo    Controle de acesso baseado em perfil;
   oo    Criptografia e autenticação em sistemas;
   oo    Políticas internas de segurança da informação;
   oo    Treinamento de colaboradores;
   oo    Monitoramento e gestão de incidentes.

8. ARMAZENAMENTO E RETENÇÃO
Os dados pessoais são armazenados pelo tempo necessário ao cumprimento das finalidades descritas nesta política, respeitando prazos legais, contratuais ou regulatórios. Após o prazo, os dados são eliminados de forma segura.

9. USO DE COOKIES
Nosso site pode utilizar cookies para melhorar a navegação e oferecer funcionalidades personalizadas. O usuário pode configurar seu navegador para bloquear o uso de cookies, ciente de que isso pode impactar na experiência de uso.

10. ALTERAÇÕES NA POLÍTICA
Esta Política de Privacidade poderá ser atualizada a qualquer momento para refletir alterações legislativas ou operacionais. A versão atualizada estará sempre disponível em nosso site.

11. CONTATO
Em caso de dúvidas, sugestões ou solicitações relacionadas ao tratamento de dados pessoais, entre em contato com nosso Encarregado de Dados (DPO):
Nome: Augusto de Oliveira Perin E-mail: contato@rochaperin.com
`

  // Function to parse the text and render with basic HTML structure
  const renderPolicy = (text: string) => {
    const lines = text.trim().split('\n')
    const elements: JSX.Element[] = []
    let currentList: string[] = []

    lines.forEach((line, index) => {
      const trimmedLine = line.trim()

      if (trimmedLine.match(/^\d+\.\s+[A-Z\sÇÃÕÍÊ]+$/)) { // Matches section titles like "1. OBJETIVO"
        if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${index-1}`} className="list-disc list-inside mb-4 pl-4 space-y-2">
              {currentList.map((item, i) => <li key={`li-${index-1}-${i}`} className="text-gray-700">{item}</li>)}
            </ul>
          )
          currentList = []
        }
        elements.push(<h2 key={`h2-${index}`} className="text-2xl font-semibold mt-8 mb-4 text-gray-800">{trimmedLine}</h2>)
      } else if (trimmedLine.startsWith("oo    ")) { // Matches list items
        currentList.push(trimmedLine.substring(6).trim())
      } else if (trimmedLine === "POLÍTICA DE PRIVACIDADE") {
         if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${index-1}`} className="list-disc list-inside mb-4 pl-4 space-y-2">
              {currentList.map((item, i) => <li key={`li-${index-1}-${i}`} className="text-gray-700">{item}</li>)}
            </ul>
          )
          currentList = []
        }
        elements.push(<h1 key={`h1-${index}`} className="text-3xl md:text-4xl font-bold text-center my-8 text-gray-900">{trimmedLine}</h1>)
      } else if (trimmedLine.startsWith("PERINTECH CONSULTORIA")) {
         if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${index-1}`} className="list-disc list-inside mb-4 pl-4 space-y-2">
              {currentList.map((item, i) => <li key={`li-${index-1}-${i}`} className="text-gray-700">{item}</li>)}
            </ul>
          )
          currentList = []
        }
        // Split company info into multiple lines for better readability
        const companyInfoLines = [
          "PERINTECH CONSULTORIA EM TECNOLOGIA LTDA",
          "CNPJ: 51.399.546/0001-06",
          "Endereço: AV. LUIS VIANA FILHO, 013223, EDIF. HANGAR BUSINESS PARK HANGAR 2 SALA 301, 41.500-300, SALVADOR, BA"
        ];
        elements.push(
          <div key={`div-company-${index}`} className="text-center text-sm text-gray-600 mb-8">
            {companyInfoLines.map((infoLine, infoIndex) => <p key={`p-company-${index}-${infoIndex}`}>{infoLine}</p>)}
          </div>
        );
      } else {
        if (currentList.length > 0) {
          elements.push(
            <ul key={`ul-${index-1}`} className="list-disc list-inside mb-4 pl-4 space-y-2">
              {currentList.map((item, i) => <li key={`li-${index-1}-${i}`} className="text-gray-700">{item}</li>)}
            </ul>
          )
          currentList = []
        }
        // Treat other lines as paragraphs, preserving empty lines
        elements.push(<p key={`p-${index}`} className={`mb-4 text-gray-700 ${trimmedLine === '' ? 'h-4' : ''}`}>{trimmedLine || '\u00A0'}</p>)
      }
    })

    // Add any remaining list items
    if (currentList.length > 0) {
      elements.push(
        <ul key={`ul-final`} className="list-disc list-inside mb-4 pl-4 space-y-2">
          {currentList.map((item, i) => <li key={`li-final-${i}`} className="text-gray-700">{item}</li>)}
        </ul>
      )
    }

    return elements
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 md:py-20">
      <motion.div
        className="container mx-auto px-4 max-w-4xl bg-white p-8 md:p-12 rounded-lg shadow-lg border border-gray-200"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {renderPolicy(politicaContent)}
      </motion.div>
    </div>
  )
}

