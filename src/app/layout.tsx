import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import Sidebar from "@/components/sidebar"
import MainSidebar from "@/components/main-sidebar"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Dua & Ruqyah",
  description: "Dua & Ruqyah Application",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange> */}
          <div className="flex min-h-screen">
            <Sidebar />
            {/* <MainSidebar /> */}
            <main className="flex-1 ml-[70px] pl-[250px] overflow-auto">{children}</main>
          </div>
        {/* </ThemeProvider> */}
      </body>
    </html>
  )
}
