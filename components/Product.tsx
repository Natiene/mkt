// components/Product.tsx

import React, { useRef, useEffect } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, imageUrl }) => {
  const nameRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const truncateText = () => {
      if (nameRef.current) {
        const container = nameRef.current;
        while (container.scrollHeight > container.clientHeight) {
          name = name.slice(0, -1);
          container.textContent = name + " ...";
        }
      }
    };
    truncateText();
  }, [name]);

  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg h-full">
      <div style={{ aspectRatio: "4/3" }}>
        <img className="object-cover w-full h-full" src={imageUrl} alt={name} />
      </div>
      <div className="px-6 py-4 bg-white">
        <div
          ref={nameRef}
          className="font-bold h-12 overflow-hidden text-base text-gray-800 mb-2"
        >
          {name}
        </div>
        <p className="text-gray-700 text-base">Price: ${price}</p>
      </div>
    </div>
  );
};

export default Product;
