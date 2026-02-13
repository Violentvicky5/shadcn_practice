"use client"

import Image from "next/image"
import { products } from "../data"
import { useParams } from "next/navigation"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"

export default function ProductPage() {
  const params = useParams()
  const idParam = Array.isArray(params?.id) ? params.id[0] : params?.id
  const productId = parseInt(idParam || "0", 10)
  const product = products.find((p) => p.id === productId)

  if (!product)
    return (
      <p className="text-center mt-20 text-gray-500">
        Product not found.
      </p>
    )

  return (
    <div className="flex items-center justify-center min-h-screen p-2 sm:p-4 lg:p-8">
      <div className=" shadow-lg rounded-xl w-full max-w-4xl flex flex-col md:flex-row overflow-hidden">
        {/* IMAGE */}
        <div className="relative md:w-1/2 flex items-center justify-center  p-2 sm:p-4 md:p-6">
          <Image
            src={product.image}
            alt={product.name}
            width={600}
            height={400}
            className="object-contain rounded-lg w-full h-64 sm:h-80 md:h-full"
          />

          {/* Badge: top-right, scales with screen */}
          <Badge className="absolute top-5 sm:top-7 md:top-8 right-25 sm:right-35 md:right-10 text-[8px] sm:text-[10px] md:text-xs px-2 py-0.5 bg-amber-300">
            Featured
          </Badge>
        </div>

        {/* DETAILS */}
        <div className="md:w-1/2 p-4 sm:p-6 flex flex-col justify-between">
          <div>
            <h1 className="text-lg sm:text-2xl md:text-3xl font-bold  mb-2">
              {product.name}
            </h1>
            <p className="text-xs sm:text-sm md:text-base text-gray-500 truncate">
              {product.description}
            </p>
          </div>

          <div className="mt-4 flex flex-col gap-2 sm:gap-3">
            <p className="text-lg sm:text-xl md:text-2xl font-semibold ">
              ₹{product.price}
            </p>
            <Button className="w-full justify-center text-sm sm:text-base md:text-lg">
              Buy Now
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
