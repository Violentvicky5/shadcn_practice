"use client"

import {
  ChartContainer,
  ChartLegend,
  ChartLegendContent,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts"

//  Define a type for a single chart data point
export type ChartDataPoint = {
  label: string
  values: number
}

// Define props for the chart component
export interface BarChartProps {
  data: ChartDataPoint[]
}

const chartConfig = {
  values: {
    label: "Values",
    color: "#2563eb",
  },
} satisfies ChartConfig

export function BarChartComponent({ data }: BarChartProps) {
  return (
    <div className="w-full h-full border-4 border-white rounded-2xl p-1">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <BarChart accessibilityLayer data={data} className="w-full h-full">
          <CartesianGrid vertical={false} />
          <XAxis
            dataKey="label"
            tickLine={false}
            tickMargin={10}
            axisLine={false}
            tickFormatter={(value) => value.slice(0, 6)}
          />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Bar dataKey="values" fill="var(--color-values)" radius={2} />
        </BarChart>
      </ChartContainer>
    </div>
  )
}
