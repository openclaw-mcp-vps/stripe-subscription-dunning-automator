import type { Metadata } from "next"
import "./globals.css"

export const metadata: Metadata = {
  title: "Dunning Automator – Auto-retry failed payments with smart timing",
  description: "Automatically retries failed subscription payments using ML-driven timing optimization to recover lost revenue for SaaS businesses."
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="50c7b274-ad3a-4276-88c5-39882430c06a"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] min-h-screen">
        {children}
      </body>
    </html>
  )
}
