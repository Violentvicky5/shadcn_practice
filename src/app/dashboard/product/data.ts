export type Product = {
  id: number;
  name: string;
  price: number;
  image: string;
  description: string;
};
export const products: Product[] = [
  {
    id: 1,
    name: "Wireless Headphones",
    price: 99,
    image: "https://picsum.photos/id/1011/400/300", // stable image
    description: "High-quality wireless headphones.",
  },
  {
    id: 2,
    name: "Smart Watch",
    price: 149,
    image: "https://picsum.photos/id/1012/400/300",
    description: "Track your fitness on the go.",
  },
  {
    id: 3,
    name: "Gaming Mouse",
    price: 59,
    image: "https://picsum.photos/id/1013/400/300",
    description: "Ergonomic mouse with RGB lights.",
  },
  {
    id: 4,
    name: "Mechanical Keyboard",
    price: 129,
    image: "https://picsum.photos/id/1015/400/300",
    description: "Tactile switches for typing & gaming.",
  },
  {
    id: 5,
    name: "Bluetooth Speaker",
    price: 79,
    image: "https://picsum.photos/id/1016/400/300",
    description: "Portable speaker with rich sound.",
  },
]
