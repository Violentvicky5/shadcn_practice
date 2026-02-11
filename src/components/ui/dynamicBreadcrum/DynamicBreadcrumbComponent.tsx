"use client"


import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { usePathname } from "next/navigation"

const pathLabels: Record<string, string> = {
  dashboard: "Dashboard",
  products: "Products",
  clients: "Clients",
  overview: "Overview",
}

export function DynamicBreadcrumb() {
  const pathname = usePathname() // e.g., "/dashboard/products"
  const segments = pathname.split("/").filter(Boolean) // ["dashboard","products"]

  return (
    <Breadcrumb>
      <BreadcrumbList>
        {segments.map((segment, index) => {
          const isLast = index === segments.length - 1
          const href = "/" + segments.slice(0, index + 1).join("/")

          return (
            <BreadcrumbItem key={href}>
              {isLast ? (
                <BreadcrumbPage>{pathLabels[segment] || segment}</BreadcrumbPage>
              ) : (
                <>
                  <BreadcrumbLink href={href}>
                    {pathLabels[segment] || segment}
                  </BreadcrumbLink>
                  <BreadcrumbSeparator />
                </>
              )}
            </BreadcrumbItem>
          )
        })}
      </BreadcrumbList>
    </Breadcrumb>
  )
}
