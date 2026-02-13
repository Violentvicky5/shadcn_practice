import * as React from "react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import { tabData } from "../data/data"
import { Checkbox } from "./ui/checkbox"

export function ScrollAreaDemo() {
  // Flatten the 2D array to create a dictionary for checked states
  const initialCheckedState = tabData.flat().reduce((acc, tag) => {
    acc[tag] = false
    return acc
  }, {} as Record<string, boolean>)

  const [checkedItems, setCheckedItems] = React.useState(initialCheckedState)

  const handleCheckboxChange = (tag: string, value: boolean) => {
    setCheckedItems((prev) => ({
      ...prev,
      [tag]: value,
    }))
  }

  const categories = ["Details", "Address", "Payment"]

  return (
    <ScrollArea className="h-72 w-full rounded-md border">
      <div className="p-4 space-y-4">
        {tabData.map((categoryItems, idx) => (
          <div key={categories[idx]}>
            <h4 className="mb-2 text-sm font-medium">{categories[idx]}</h4>
            
            <div className="grid grid-cols-2 gap-2">
              {categoryItems.map((item) => (
                <label
                  key={item}
                  className="flex items-center space-x-2 text-sm cursor-pointer"
                >
                  <Checkbox
                    checked={checkedItems[item]}
                    onCheckedChange={(checked) =>
                      handleCheckboxChange(item, !!checked)
                    }
                  />
                  
                  <span>{item}</span>
                </label>
              ))}
              
            </div>

            {idx < tabData.length - 1 && <Separator className="my-4" />}
          </div>
        ))}
      </div>
    </ScrollArea>
  )
}
