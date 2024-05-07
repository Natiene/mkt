// pages/products.tsx

import { NextPage } from "next";
import Product from "../components/Product";
import Header from "@/components/Header";

interface ProductData {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Products: NextPage = () => {
  // Exemplo de dados de produtos (pode vir de uma API, banco de dados, etc.)
  const products: ProductData[] = [
    {
      id: 1,
      name: "Product 1",
      price: 10,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 2,
      name: "Product 2",
      price: 20,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 3,
      name: "Product 3",
      price: 30,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 1,
      name: "Product 4",
      price: 10,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 2,
      name: "Product 5",
      price: 20,
      imageUrl: "https://placehold.co/150",
    },
    {
      id: 3,
      name: "Product 6",
      price: 30,
      imageUrl: "https://placehold.co/150",
    },
  ];

  return (
    <>
      <Header />
      <div className="mt-12 container mx-auto mb-12">
        <h1 className="text-3xl font-bold mb-4">Products</h1>
        <div className="grid grid-cols-3 gap-4">
          {products.map((product) => (
            <Product key={product.id} {...product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Products;
