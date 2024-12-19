import type { Metadata } from "next"
import { Inter } from 'next/font/google'
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { ThemeToggle } from "@/components/theme-toggle"
import Image from "next/image"

import logo from "@/assets/logo.png"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Formulário de Cadastro",
  description: "Cadastro de cliente para Mometix Pagamentos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${inter.className} dark:bg-gray-900`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <div className="container mx-auto py-4">
            <header className="flex justify-between items-center mb-8">
              <Image
                src={logo} 
                alt="Logo da empresa"
                width={150}
                height={50}
                // className="dark:invert"
              />
              {/* <ThemeToggle /> */}
            </header>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}

