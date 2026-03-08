import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "shadcn/ui + Next.js",
  description: "A modern Next.js project with shadcn/ui components",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
