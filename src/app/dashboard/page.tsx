"use Client"
import { AppSidebar } from "@/components/app-sidebar";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Separator } from "@/components/ui/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import {BarChartComponent} from "@/components/BarChart"

import { PieChartComponent } from "@/components/PieChart";


export default function Page() {
  const total = 1000;
   const chartData = [
    { label: "part1", values: 250 },
    { label: "part2", values: 750 },
  ];

  return (
    <SidebarProvider>
      <AppSidebar />
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 transition-[width,height] ease-linear group-has-data-[collapsible=icon]/sidebar-wrapper:h-12">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Build Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Admin Dashboard</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">
         <div className="grid auto-rows-min gap-1 grid-cols-3">
  {/* TOTAL */}
  <div
    className="
      bg-emerald-300 rounded-xl flex flex-col gap-1 justify-center items-center capitalize
      h-24
      sm:h-28
      md:h-32
      lg:h-40
      xl:h-48
      2xl:h-56
    "
  >
    <span
      className="
        font-extrabold rounded p-0.5
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        xl:text-2xl
      "
    >
      total
    </span>

    <span
      className="
        text-gra rounded p-1
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-5xl
      "
    >
      {total}
    </span>
  </div>

  {/* PART 1 */}
  <div
    className="
      bg-blue-300 rounded-xl flex flex-col gap-1 justify-center items-center capitalize
      h-24
      sm:h-28
      md:h-32
      lg:h-40
      xl:h-48
      2xl:h-56
    "
  >
    <span
      className="
        font-extrabold rounded p-0.5
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        xl:text-2xl
      "
    >
      part 1
    </span>

    <span
      className="
        text-white rounded p-1
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-5xl
      "
    >
      {chartData[0].values}
    </span>
  </div>

  {/* PART 2 */}
  <div
    className="
      bg-green-300 rounded-xl flex flex-col gap-1 justify-center items-center capitalize
      h-24
      sm:h-28
      md:h-32
      lg:h-40
      xl:h-48
      2xl:h-56
    "
  >
    <span
      className="
        font-extrabold rounded p-0.5
        text-sm
        sm:text-base
        md:text-lg
        lg:text-xl
        xl:text-2xl
      "
    >
      part 2
    </span>

    <span
      className="
        text-white rounded p-1
        text-xl
        sm:text-2xl
        md:text-3xl
        lg:text-4xl
        xl:text-5xl
      "
    >
      {chartData[1].values}
    </span>
  </div>
</div>

      <div className="bg-gray-300 flex-1 rounded-xl font-extrabold capitalize border-2 border-white p-4 
                grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
  <BarChartComponent data={chartData} />
  <BarChartComponent data={chartData} />
  <PieChartComponent data={chartData} />
  <PieChartComponent data={chartData} />
  <BarChartComponent data={chartData} />
  <PieChartComponent data={chartData} />
</div>


          
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
