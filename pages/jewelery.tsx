// pages/products.tsx

import { useState, useEffect } from "react";
import { NextPage } from "next";
import axios from "axios";
import Product from "../components/Product";
import Header from "@/components/Header";

interface ProductData {
  id: number;
  title: string;
  price: string;
  category: string;
  description: string;
  image: string;
}

const Products: NextPage = () => {
  const [products, setProducts] = useState<ProductData[]>([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://fakestoreapi.com/products/category/jewelery");
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  return (
    <>
      <Header />
      <div className="mt-8 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold mb-4">Products</h1>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {products.map((product) => (
              <div key={product.id} className="flex justify-center">
                <div className="w-full h-full">
                  <Product
                    id={product.id}
                    name={product.title}
                    price={parseFloat(product.price)}
                    imageUrl={product.image}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
