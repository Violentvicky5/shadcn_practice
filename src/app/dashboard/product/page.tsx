import { products } from "./data"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card"

export default function ProductPage() {
  return (
    <div className="space-y-4">
      <h1 className="text-xl font-semibold">Products</h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Link
            key={product.id}
            href={`/dashboard/product/${product.id}`}
            className="block"
          >
            <Card className="flex flex-col overflow-hidden cursor-pointer hover:shadow-lg transition">
              {/* Image container */}
              <div className="relative w-full h-40 bg-gray-100 flex items-center justify-center overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />

                {/* Badge on top-right */}
                <Badge className="absolute top-2 right-2 text-[10px] px-2 py-0.5">
                  Featured
                </Badge>
              </div>

              {/* Header */}
              <CardHeader className="px-4 pt-4 pb-2 flex flex-col gap-1">
                <CardTitle className="text-left text-base text-[14px]">
                  {product.name}
                </CardTitle>

                <CardDescription className="text-left text-[12px] text-gray-600 truncate">
                  {product.description}
                </CardDescription>
              </CardHeader>

              {/* Footer */}
              <CardFooter className="px-4 pb-4 pt-0">
                <Button className="w-full">₹{product.price}</Button>
              </CardFooter>
            </Card>
          </Link>
        ))}
      </div>
    </div>
  )
}
