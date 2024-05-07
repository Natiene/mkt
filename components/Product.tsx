// components/Product.tsx

interface ProductProps {
    id: number;
    name: string;
    price: number;
    imageUrl: string;
  }
  
  const Product: React.FC<ProductProps> = ({ id, name, price, imageUrl }) => {
    return (
      <div className="max-w-sm rounded overflow-hidden shadow-lg">
        <img className="w-full" src={imageUrl} alt={name} />
        <div className="px-6 py-4 bg-white">
          <div className="font-bold text-xl text-gray-800 mb-2">{name}</div>
          <p className="text-gray-700 text-base">
            Price: ${price}
          </p>
        </div>
      </div>
    );
  };
  
  export default Product;
  