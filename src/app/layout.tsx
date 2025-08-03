import type { Metadata } from "next"
import "./globals.css"
import ObserverProvider from "./intersect/ObserverProvider"

export const metadata: Metadata = {
  title: "Harrison - Home",
  description: "Harrison Amorim's personal website.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>
        <ObserverProvider>{children}</ObserverProvider>
      </body>
    </html>
  )
}
