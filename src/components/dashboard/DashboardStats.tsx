"use client"

import { BarChartComponent } from "@/components/BarChart"
import { PieChartComponent } from "@/components/PieChart"

const chartData = [
  { label: "part1", values: 250 },
  { label: "part2", values: 750 },
]

export function DashboardStats() {
  const total = 1000

  return (
    <>
      {/* TOP STATS */}
      <div className="grid auto-rows-min gap-1 grid-cols-3">
        <StatCard title="total" value={total} bg="bg-emerald-300" />
        <StatCard title="part 1" value={chartData[0].values} bg="bg-blue-300" />
        <StatCard title="part 2" value={chartData[1].values} bg="bg-green-300" />
      </div>

      {/* CHARTS */}
      <div className="bg-gray-300 flex-1 rounded-xl border-2 border-white p-4 
        grid grid-cols-2 lg:grid-cols-4 gap-4 auto-rows-fr">
        <BarChartComponent data={chartData} />
        <BarChartComponent data={chartData} />
        <PieChartComponent data={chartData} />
        <PieChartComponent data={chartData} />
        <BarChartComponent data={chartData} />
        <PieChartComponent data={chartData} />
      </div>
    </>
  )
}

function StatCard({
  title,
  value,
  bg,
}: {
  title: string
  value: number
  bg: string
}) {
  return (
    <div
      className={`${bg} rounded-xl flex flex-col gap-1 justify-center items-center capitalize h-32`}
    >
      <span className="font-extrabold text-lg">{title}</span>
      <span className="text-3xl">{value}</span>
    </div>
  )
}
