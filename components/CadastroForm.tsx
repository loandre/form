"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { FormData, formSchema } from "../utils/formUtils"
import { useFormState } from "../hooks/useFormState"
import { Button } from "@/components/ui/button"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { maskPhone, maskCPF, maskCNPJ, maskCEP } from "../utils/masks"
import { useState } from "react"

export function CadastroForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      tipo_conta: "Corrente",
    },
  })

  const { isLoading, error, onSubmit } = useFormState()

  const [phoneValue, setPhoneValue] = useState("")
  const [cpfValue, setCpfValue] = useState("")
  const [cnpjValue, setCnpjValue] = useState("")
  const [cepValue, setCepValue] = useState("")

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskPhone(e.target.value)
    setPhoneValue(maskedValue)
    form.setValue("telefone", maskedValue)
  }

  const handleCPFChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskCPF(e.target.value)
    setCpfValue(maskedValue)
    form.setValue("cpf", maskedValue)
  }

  const handleCNPJChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskCNPJ(e.target.value)
    setCnpjValue(maskedValue)
    form.setValue("cnpj", maskedValue)
  }

  const handleCEPChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const maskedValue = maskCEP(e.target.value)
    setCepValue(maskedValue)
    form.setValue("cep", maskedValue)
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <div className="space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">Dados do Responsável</h2>
          <FormField
            control={form.control}
            name="nome"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Nome</FormLabel>
                <FormControl>
                  <Input placeholder="Nome completo" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="seu@email.com" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="telefone"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Telefone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="(00) 00000-0000"
                    value={phoneValue}
                    onChange={handlePhoneChange}
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cpf"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">CPF</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="000.000.000-00"
                    value={cpfValue}
                    onChange={handleCPFChange}
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dt_nasc"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Data de Nascimento</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nome_mae"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Nome da Mãe</FormLabel>
                <FormControl>
                  <Input placeholder="Nome completo da mãe" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">Dados da Empresa</h2>
          <FormField
            control={form.control}
            name="razao_social"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Razão Social</FormLabel>
                <FormControl>
                  <Input placeholder="Razão Social da empresa" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="nome_fantasia"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Nome Fantasia</FormLabel>
                <FormControl>
                  <Input placeholder="Nome Fantasia da empresa" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cnpj"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">CNPJ</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="00.000.000/0000-00"
                    value={cnpjValue}
                    onChange={handleCNPJChange}
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="dt_abertura"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Data de Abertura</FormLabel>
                <FormControl>
                  <Input type="date" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="ticket_medio_mes"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Ticket Médio Mensal</FormLabel>
                <FormControl>
                  <Input type="number" placeholder="0.00" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">Dados de Endereço</h2>
          <FormField
            control={form.control}
            name="cep"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">CEP</FormLabel>
                <FormControl>
                  <Input
                    type="text"
                    placeholder="00000-000"
                    value={cepValue}
                    onChange={handleCEPChange}
                    className="dark:bg-gray-800 dark:text-white dark:border-gray-600"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="rua"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Rua</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da rua" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="bairro"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Bairro</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do bairro" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="cidade"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Cidade</FormLabel>
                <FormControl>
                  <Input placeholder="Nome da cidade" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="estado"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Estado</FormLabel>
                <FormControl>
                  <Input placeholder="UF" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="pais"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">País</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do país" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="complemento"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Complemento</FormLabel>
                <FormControl>
                  <Input placeholder="Complemento (opcional)" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="numero"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Número</FormLabel>
                <FormControl>
                  <Input placeholder="Número" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        <div className="space-y-4">
          <h2 className="text-lg font-semibold dark:text-white">Dados de Conta</h2>
          <FormField
            control={form.control}
            name="banco"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Banco</FormLabel>
                <FormControl>
                  <Input placeholder="Nome do banco" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="agencia"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Agência</FormLabel>
                <FormControl>
                  <Input placeholder="Número da agência" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="conta"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Conta</FormLabel>
                <FormControl>
                  <Input placeholder="Número da conta" {...field} className="dark:bg-gray-800 dark:text-white dark:border-gray-600" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="tipo_conta"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="dark:text-gray-300">Tipo de Conta</FormLabel>
                <FormControl>
                  <RadioGroup
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                    className="flex flex-col space-y-1"
                  >
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Corrente" />
                      </FormControl>
                      <FormLabel className="font-normal dark:text-gray-300">
                        Corrente
                      </FormLabel>
                    </FormItem>
                    <FormItem className="flex items-center space-x-3 space-y-0">
                      <FormControl>
                        <RadioGroupItem value="Poupança" />
                      </FormControl>
                      <FormLabel className="font-normal dark:text-gray-300">
                        Poupança
                      </FormLabel>
                    </FormItem>
                  </RadioGroup>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>

        {error && (
          <Alert variant="destructive">
            <AlertDescription>{error}</AlertDescription>
          </Alert>
        )}

        <Button type="submit" disabled={isLoading} className="w-full">
          {isLoading ? "Enviando..." : "Enviar Cadastro"}
        </Button>
      </form>
    </Form>
  )
}

