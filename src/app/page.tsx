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

import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert"



export default function Home() {
  // 🔹 Multi-select (checkbox) state
  const [features, setFeatures] = useState({
    comments: true,
    analytics: false,
    notifications: true,
  })

  // 🔹 Single-select (radio) state
  const [theme, setTheme] = useState("light")

  return (
    <main className="flex flex-col min-h-screen items-start  justify-center bg-slate-950">
     <Alert className="bg-gray-100 text-[14px] border border-gray-200 text-black">
  <AlertTitle >
    this is alert message
  </AlertTitle>
  <AlertDescription >ok this is just a description</AlertDescription>
</Alert>
      <DropdownMenu>
        {/* Trigger button */}
        <DropdownMenuTrigger asChild>
          <Button className="bg-indigo-600 text-white hover:bg-indigo-500 font-semibold m-3">
            Open Menu
          </Button>
        </DropdownMenuTrigger>

        {/* Dropdown content */}
        <DropdownMenuContent
          className="
            w-64 
            bg-slate-900 
            text-slate-100 
            border border-slate-700 
            font-sans
          "
        >
          {/* Label */}
          <DropdownMenuLabel className="text-indigo-400">
            User Settings
          </DropdownMenuLabel>

          <DropdownMenuSeparator className="bg-slate-700" />

          {/* Normal items */}
          <DropdownMenuGroup>
            <DropdownMenuItem className="hover:bg-slate-800">
              Profile
              <DropdownMenuShortcut>⌘P</DropdownMenuShortcut>
            </DropdownMenuItem>

            <DropdownMenuItem className="hover:bg-slate-800">
              Billing
              <DropdownMenuShortcut>⌘B</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>

          <DropdownMenuSeparator className="bg-slate-700" />

          {/*  Multi-select (Checkbox items) */}
          <DropdownMenuLabel className="text-indigo-400">
            Features (multi-select)
          </DropdownMenuLabel>

          <DropdownMenuCheckboxItem
            checked={features.comments}
            onCheckedChange={(checked) =>
              setFeatures((f) => ({ ...f, comments: !!checked }))
            }
          >
            Comments
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={features.analytics}
            onCheckedChange={(checked) =>
              setFeatures((f) => ({ ...f, analytics: !!checked }))
            }
          >
            Analytics
          </DropdownMenuCheckboxItem>

          <DropdownMenuCheckboxItem
            checked={features.notifications}
            onCheckedChange={(checked) =>
              setFeatures((f) => ({ ...f, notifications: !!checked }))
            }
          >
            Notifications
          </DropdownMenuCheckboxItem>

          <DropdownMenuSeparator className="bg-slate-700" />

          {/* - Single-select (Radio group) */}
          <DropdownMenuLabel className="text-indigo-400">
            Theme (single-select)
          </DropdownMenuLabel>

          <DropdownMenuRadioGroup value={theme} onValueChange={setTheme}>
            <DropdownMenuRadioItem value="light">
              Light
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="dark">
              Dark
            </DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="system">
              System
            </DropdownMenuRadioItem>
          </DropdownMenuRadioGroup>

          <DropdownMenuSeparator className="bg-slate-700" />

          {/* - Sub-menu */}
          <DropdownMenuSub>
            <DropdownMenuSubTrigger className="hover:bg-slate-800">
              More options
            </DropdownMenuSubTrigger>

            <DropdownMenuPortal>
              <DropdownMenuSubContent
                className="
                  bg-slate-900 
                  border border-slate-700 
                  text-slate-100
                "
              >
                <DropdownMenuItem>Export</DropdownMenuItem>
                <DropdownMenuItem>Duplicate</DropdownMenuItem>
                <DropdownMenuItem className="text-red-400">
                  Delete
                </DropdownMenuItem>
              </DropdownMenuSubContent>
            </DropdownMenuPortal>
          </DropdownMenuSub>
        </DropdownMenuContent>
      </DropdownMenu>
    </main>
  )
}
