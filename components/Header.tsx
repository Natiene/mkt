// components/Header.tsx

import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 lg:px-12">
        <div className="flex justify-between items-center">
          <div>
            <Link href="/">
              <div className="text-white font-bold text-xl cursor-pointer">Your Logo</div>
            </Link>
          </div>
          <nav>
            <ul className="flex space-x-4">
              <li>
                <Link href="/products">
                  <div className="text-white cursor-pointer">Products</div>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <div className="text-white cursor-pointer">Cart</div>
                </Link>
              </li>
              <li>
                <Link href="/login">
                  <div className="text-white cursor-pointer">Login</div>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
