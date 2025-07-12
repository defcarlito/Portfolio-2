import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Harrison - Home",
  description: "The portfolio of Harrison Amorim.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
