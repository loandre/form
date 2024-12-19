import { z } from "zod";
import { unmask } from "./masks";

export const formSchema = z.object({
  nome: z.string().min(1, "Nome é obrigatório"),
  email: z.string().email("Email inválido"),
  telefone: z
    .string()
    .transform(unmask)
    .refine(val => val.length >= 10 && val.length <= 11, "Telefone deve ter entre 10 e 11 dígitos"),
  cpf: z
    .string()
    .transform(unmask)
    .refine(val => val.length === 11, "CPF deve ter 11 dígitos após a formatação"),
  dt_nasc: z.string(),
  nome_mae: z.string().min(1, "Nome da mãe é obrigatório"),
  razao_social: z.string().min(1, "Razão social é obrigatória"),
  nome_fantasia: z.string().min(1, "Nome fantasia é obrigatório"),
  cnpj: z
    .string()
    .transform(unmask)
    .refine(val => val.length === 14, "CNPJ deve ter 14 dígitos após a formatação"),
  dt_abertura: z.string(),
  ticket_medio_mes: z.string().min(1, "Ticket médio é obrigatório"),
  cep: z
    .string()
    .transform(unmask)
    .refine(val => val.length === 8, "CEP inválido"),
  rua: z.string().min(1, "Rua é obrigatória"),
  bairro: z.string().min(1, "Bairro é obrigatório"),
  cidade: z.string().min(1, "Cidade é obrigatória"),
  estado: z.string().length(2, "Estado deve ter 2 letras"),
  pais: z.string().min(1, "País é obrigatório"),
  complemento: z.string().optional(),
  numero: z.string().min(1, "Número é obrigatório"),
  banco: z.string().min(1, "Banco é obrigatório"),
  agencia: z.string().min(1, "Agência é obrigatória"),
  conta: z.string().min(1, "Conta é obrigatória"),
  tipo_conta: z.enum(["Corrente", "Poupança"]),
});


export type FormData = z.infer<typeof formSchema>;

export async function submitForm(data: FormData) {
  const response = await fetch("https://api-sandbox.monetixpagamentos.com/docs/cadastro-cliente", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    throw new Error("Falha ao enviar o formulário");
  }

  return await response.json();
}


