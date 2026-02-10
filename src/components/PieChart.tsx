"use client"

import { Pie, PieChart, Cell } from "recharts"
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart"

type PieChartProps = {
  data: { label: string; values: number }[]
}

const chartConfig = {
  values: {
    label: "label",
    color: "#2563eb", // default color (overridden below per slice)
  },
} satisfies ChartConfig

// Define a color palette
const COLORS = ["#2563eb", "#10b981", "#f59e0b", "#ef4444", "#8b5cf6", "#14b8a6"]

export function PieChartComponent({ data }: PieChartProps) {
  return (
    <div className="w-full h-full border-4 border-white rounded-2xl p-2">
      <ChartContainer config={chartConfig} className="w-full h-full">
        <PieChart className="w-full h-full">
          <ChartTooltip content={<ChartTooltipContent nameKey="label" hideLabel />} />
          <Pie
            data={data}
            dataKey="values"
            nameKey="label"
            labelLine={false}
            label={({ payload, ...props }) => (
              <text
                x={props.x}
                y={props.y}
                textAnchor={props.textAnchor}
                dominantBaseline={props.dominantBaseline}
                fill="hsla(var(--foreground))"
              >
                {payload.values}
              </text>
            )}
          >
            {data.map((_, index) => (
              <Cell key={index} fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ChartContainer>
    </div>
  )
}

