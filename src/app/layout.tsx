import type React from "react"
import type { Metadata } from "next"
import StyledComponentsRegistry from "../components/lib/registry"
import Header from "../components/shared/header/header"
import Footer from "../components/shared/footer/footer"

export const metadata: Metadata = {
  title: "Recrutadora RH",
  description: "Transformando carreiras, conectando talentos",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>
        <StyledComponentsRegistry>
          <Header />
          {children}
          <Footer />
        </StyledComponentsRegistry>
      </body>
    </html>
  )
}

