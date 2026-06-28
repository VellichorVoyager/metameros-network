import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Metameros Network — 5G Gateway Manager",
  description: "Local-first admin and security console for the Arcadyan G5AR 5G gateway",
  icons: {
    icon: "/logo.svg",
    apple: "/logo.svg",
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {children}
      </body>
    </html>
  )
}
