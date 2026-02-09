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

export default function Page() {
  const total = 1000;
  const part1 = 250;
  const part2 = 750;

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
          <div className="grid auto-rows-min gap-4 grid-cols-3">
            <div className="bg-emerald-300 aspect-video rounded-xl flex flex-col gap-1 justify-center items-center capitalize">
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

           <div className="bg-blue-300 aspect-video rounded-xl flex flex-col gap-1 justify-center items-center capitalize">
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
    {part1}
  </span>
</div>

            <div className="bg-blue-200 aspect-video rounded-xl flex flex-col gap-1 justify-center items-center capitalize">
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
    {part2}
  </span>
</div>

          </div>
          <div className="bg-gray-300 min-h-[100vh] flex-1 rounded-xl md:min-h-min flex justify-center items-center font-extrabold capitalize">
            charts
          </div>
        </div>
      </SidebarInset>
    </SidebarProvider>
  );
}
