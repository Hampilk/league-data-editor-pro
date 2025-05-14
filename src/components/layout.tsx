
import { ReactNode } from "react"
import { SiteHeader } from "@/components/site-header"
import { Footer } from "@/components/footer"

export function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen flex-col bg-[#0A0A0A]">
      <SiteHeader />
      <main className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}
