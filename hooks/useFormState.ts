import { useState } from "react";
import { FormData, formSchema, submitForm } from "../utils/formUtils";

export function useFormState() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function onSubmit(data: FormData) {
    setIsLoading(true);
    setError(null);

    try {
      const validatedData = formSchema.parse(data);
      await submitForm(validatedData);
      // Lidar com o sucesso (ex: mostrar mensagem de sucesso, resetar formulário, etc.)
    } catch (err) {
      if (err instanceof Error) {
        setError(err.message);
      } else {
        setError("Ocorreu um erro desconhecido");
      }
    } finally {
      setIsLoading(false);
    }
  }

  return { isLoading, error, onSubmit };
}

