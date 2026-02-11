"use client"

import { AppSidebar } from "@/components/app-sidebar"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { DynamicBreadcrumb } from "@/components/ui/dynamicBreadcrum/DynamicBreadcrumbComponent"

import { ThemeProvider } from "@/components/theme-provider"
import { ModeToggle } from "@/components/ModeToggle"
export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem disableTransitionOnChange >
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        {/* HEADER */}
       <header className="flex h-16 shrink-0 items-center gap-2">
  <div className="flex items-center gap-2 px-4">
    <SidebarTrigger className="-ml-1" />
    <ModeToggle/>
    <Separator
      orientation="vertical"
      className="mr-2 data-[orientation=vertical]:h-4"
    />
    
    {/* Dynamic breadcrumb */}
    <DynamicBreadcrumb />
  </div>
</header>


        {/* PAGE CONTENT */}
        <main className="flex flex-1 flex-col gap-4 p-4 pt-0">
          {children}
        </main>
      </SidebarInset>
    </SidebarProvider>
</ThemeProvider>  )
}
