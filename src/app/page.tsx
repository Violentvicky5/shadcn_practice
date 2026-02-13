"use client"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuPortal,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuCheckboxItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu"
import ProgressTab from "@/components/ProgressTab"
import ProgressTabs from "@/components/ProgressTabs"

export default function Home() {
  const [email, setEmail] = useState("")

  // 🔹 Multi-select (checkbox) state
  const [features, setFeatures] = useState({
    comments: true,
    analytics: false,
    notifications: true,
  })

  // 🔹 Single-select (radio) state
  const [theme, setTheme] = useState("light")

  return (
    <div>
    <main className="flex flex-col items-start  justify-center bg-slate-600 mt-3">
  {/*
  <Alert className="bg-gray-100 text-[14px] border border-gray-200 text-black p-2 m-3">
  <AlertTitle className="" >
    this is alert message
  </AlertTitle>
  <AlertDescription >ok this is just a description</AlertDescription>
</Alert>
 
 
 */}
  
     

    </main>

<ProgressTabs/>
<ProgressTab/>


    
</div>  )
}
