export function maskPhone(value: string): string {
  const cleanValue = value.replace(/\D/g, '').slice(0, 11);
  if (cleanValue.length <= 10) {
    return cleanValue.replace(/(\d{2})(\d{0,4})(\d{0,4})/, '($1) $2$3').trim();
  }
  return cleanValue.replace(/(\d{2})(\d{5})(\d{0,4})/, '($1) $2-$3').trim();
}

export function maskCPF(value: string): string {
  const cleanValue = value.replace(/\D/g, '').slice(0, 11);
  return cleanValue.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4').trim();
}

export function maskCNPJ(value: string): string {
  const cleanValue = value.replace(/\D/g, '').slice(0, 14);
  return cleanValue.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, '$1.$2.$3/$4-$5').trim();
}

export function maskCEP(value: string): string {
  const cleanValue = value.replace(/\D/g, '').slice(0, 8);
  return cleanValue.replace(/(\d{5})(\d{3})/, '$1-$2').trim();
}

export function unmask(value: string): string {
  return value.replace(/\D/g, '');
}

