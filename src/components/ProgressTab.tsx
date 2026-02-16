

import { useState } from "react";
import {
  UserCircleIcon,
  MapPinIcon,
  CreditCardIcon,
} from "@heroicons/react/24/outline";

import { Checkbox } from "@/components/ui/checkbox";
import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
} from "@/components/ui/tooltip";
import { tabData } from "../data/data";
import { ScrollArea } from "@/components/ui/scroll-area";
const tabs = [
  { name: "Details", desc: "Some info about you.", icon: UserCircleIcon },
  { name: "Address", desc: "Where we sending it?", icon: MapPinIcon },
  { name: "Payment", desc: "Show us the money.", icon: CreditCardIcon },
];

export default function ProgressTab() {
  const [activeTab, setActiveTab] = useState(0);
  const [checkedItems, setCheckedItems] = useState<boolean[][]>(
    tabs.map((_, tabIndex) => tabData[tabIndex].map(() => false)),
  );

  const handleCheckboxChange = (tabIndex: number, itemIndex: number) => {
    const updated = [...checkedItems];
    updated[tabIndex][itemIndex] = !updated[tabIndex][itemIndex];
    setCheckedItems(updated);
  };

  return (
    <>
      <div className="w-full px-3 sm:px-6 py-8 font-sans  mt-2">
        <div className=" w-85  ">
          {/* HORIZONTAL TABS */}
          <ol
            className="grid grid-cols-3  rounded-lg
                       border border-gray-200 shadow-md overflow-hidden bg-white"
          >
            {tabs.map((tab, index) => {
              const Icon = tab.icon;
              const isActive = activeTab === index;

              return (
                <Tooltip key={index}>
                  <TooltipTrigger asChild>
                    <li
                      onClick={() => setActiveTab(index)}
                      className={`
              flex items-center justify-center gap-2
              cursor-pointer transition-all duration-200
              px-4 py-3
              ${isActive ? "bg-blue-600 text-white" : "bg-white text-gray-700 hover:bg-blue-50"}
            `}
                    >
                      <Icon
                        className={`h-5 w-5 ${isActive ? "text-white" : "text-gray-500"}`}
                      />
                      <p className="font-medium text-sm">{tab.name}</p>
                    </li>
                  </TooltipTrigger>
                  <TooltipContent
                    side="bottom"
                    className="bg-gray-800 text-white rounded-md p-2 text-xs shadow-lg"
                  >
                    {tab.desc}
                  </TooltipContent>
                </Tooltip>
              );
            })}
          </ol>
        </div>

        {/*  TAB CONTENT */}

        <div className="mt-1  w-full ">
          <ScrollArea className="h-72 w-full rounded-md border">
            <div
              className="
            grid gap-3
            grid-cols-2
            sm:grid-cols-3
            lg:grid-cols-4
            xl:grid-cols-5
            2xl:grid-cols-6
            max-h-96            
            p-4
            bg-white rounded-lg shadow
          "
            >
              {tabData[activeTab]?.map((item: string, index: number) => (
                <label
                  key={index}
                  className="
                flex items-center gap-2
                rounded-lg border border-gray-200
                p-2 text-sm
                hover:bg-blue-50
                cursor-pointer
                transition
              "
                >
                  <Checkbox
                    className="border border-gray-400"
                    checked={checkedItems[activeTab][index]}
                    onCheckedChange={() =>
                      handleCheckboxChange(activeTab, index)
                    }
                  />
                  <span className="text-gray-700">{item}</span>
                </label>
              ))}
            </div>
          </ScrollArea>
        </div>
      </div>
    </>
  );
}
