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
  
  <Alert className="bg-gray-100 text-[14px] border border-gray-200 text-black p-2 m-3">
  <AlertTitle className="" >
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
    <label className="relative m-3 w-72">
  <input
    type="email"
    value={email}
    onChange={(e) => setEmail(e.target.value)}
    placeholder=" "
    className="
      peer
      w-full
      rounded
      border
      border-gray-300
      bg-white
      px-3
      py-2
      text-sm
      shadow-sm
      focus:border-indigo-500
      focus:outline-none
    "
  />

  <span
    className="
      pointer-events-none
      absolute
      left-3
      top-2.5
      bg-white
      px-1
      text-sm
      text-gray-500
      transition-all
      peer-placeholder-shown:top-2.5
      peer-placeholder-shown:text-sm
      peer-focus:-top-2
      peer-focus:text-xs
      peer-focus:text-indigo-500
    "
  >
    Email
  </span>
</label>

    </main>





    {/*progreesive bar sample from hyperui */}
    <div>
      <h2 className="sr-only">Steps</h2>

      <div>
        <ol className="grid grid-cols-1 divide-x divide-gray-100 overflow-hidden rounded-lg border border-gray-100 text-sm text-gray-600 sm:grid-cols-3 dark:divide-gray-700 dark:border-gray-700 dark:text-gray-300">
          <li className="flex items-center justify-center gap-2 p-4">
            <svg
              className="size-7 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 114 0v1m-4 0a2 2 0 104 0m-5 8a2 2 0 100-4 2 2 0 000 4zm0 0c1.306 0 2.417.835 2.83 2M9 14a3.001 3.001 0 00-2.83 2M15 11h3m-3 4h2"
              />
            </svg>

            <p className="leading-none">
              <strong className="block font-medium text-gray-900 dark:text-white">
                Details
              </strong>
              <small className="mt-1">Some info about you.</small>
            </p>
          </li>

          <li className="relative flex items-center justify-center gap-2 bg-gray-300 p-4 dark:bg-gray-800">
            <span className="absolute top-1/2 -left-2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-s-0 ltr:border-b-0 ltr:bg-white rtl:border-e-0 rtl:border-t-0 rtl:bg-gray-50 dark:border-gray-700 dark:ltr:bg-gray-900 dark:rtl:bg-gray-800" />
            <span className="absolute top-1/2 -right-2 hidden size-4 -translate-y-1/2 rotate-45 border border-gray-100 sm:block ltr:border-s-0 ltr:border-b-0 ltr:bg-gray-50 rtl:border-e-0 rtl:border-t-0 rtl:bg-white dark:border-gray-700 dark:ltr:bg-gray-800 dark:rtl:bg-gray-900" />

            <svg
              className="size-7 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>

            <p className="leading-none">
              <strong className="block font-medium text-gray-900 dark:text-white">
                Address
              </strong>
              <small className="mt-1">Where we sending it?</small>
            </p>
          </li>

          <li className="flex items-center justify-center gap-2 p-4">
            <svg
              className="size-7 shrink-0"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>

            <p className="leading-none">
              <strong className="block font-medium text-gray-900 dark:text-white">
                Payment
              </strong>
              <small className="mt-1">Show us the money.</small>
            </p>
          </li>
        </ol>
      </div>
    </div>
</div>  )
}
