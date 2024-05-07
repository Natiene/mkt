// components/Product.tsx

import React, { useEffect, useRef, useState } from "react";

interface ProductProps {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
}

const Product: React.FC<ProductProps> = ({ id, name, price, imageUrl }) => {
  const [showTooltip, setShowTooltip] = useState(false);
  const nameRef = useRef<HTMLDivElement>(null);
  let tooltipTimeout: NodeJS.Timeout | null = null;

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

  const handleMouseEnter = () => {
    tooltipTimeout = setTimeout(() => {
      setShowTooltip(true);
    }, 500); // Meio segundo de atraso
  };

  const handleMouseLeave = () => {
    if (tooltipTimeout) {
      clearTimeout(tooltipTimeout);
    }
    setShowTooltip(false);
  };

  return (
    <div
      className="max-w-sm rounded overflow-hidden shadow-lg relative text-black"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div style={{ aspectRatio: "4/3" }}>
        <img className="object-cover w-full h-full" src={imageUrl} alt={name} />
      </div>
      <div className="px-6 py-4 bg-white">
        <div ref={nameRef} className="font-bold h-12 overflow-hidden text-base text-gray-800 mb-2">
          {name}
        </div>
        <p className="text-gray-700 text-base">Price: ${price}</p>
      </div>
      {showTooltip && (
        <div className="absolute z-10 bg-white border border-gray-300 p-2 rounded shadow-md bottom-0 left-0 transform -translate-y-full">
          {name}
        </div>
      )}
    </div>
  );
};

export default Product;
