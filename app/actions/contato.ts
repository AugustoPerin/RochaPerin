"use server";

type ContactInput = {
  nome: string;
  empresa: string;
  email: string;
  telefone: string;
  assunto: string;
  mensagem: string;
  contato: string;
};

export async function handleContact(input: ContactInput) {
  const res = await fetch(String(process.env.N8N_CONTACT_URL), {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(input),
  });

  if (!res.ok) {
    if (res.headers.get("content-type")?.includes("application/json")) {
      const errorResponse = await res.json();
      throw new Error(errorResponse.message || "Failed to send contact form");
    }
    throw new Error(`Error: ${res.status} ${res.statusText}`);
  }

  return res.json();
}
