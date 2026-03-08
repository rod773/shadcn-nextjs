import type { Metadata } from "next"
import "./globals.css"


export const metadata: Metadata = {
  title: "shadcn/ui + Next.js",
  description: "A modern Next.js project with shadcn/ui components",
  metadataBase: new URL(
    process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"
  ),
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  )
}
