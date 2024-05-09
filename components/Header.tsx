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
                  <div className="text-white cursor-pointer">Produtos</div>
                </Link>
              </li>
              <li>
                <Link href="/electronics">
                  <div className="text-white cursor-pointer">Eletrônicos</div>
                </Link>
              </li>
              <li></li>
              <li>
                <Link href="/female">
                  <div className="text-white cursor-pointer">Feminino</div>
                </Link>
              </li>
              <li>
                <Link href="/jewelery">
                  <div className="text-white cursor-pointer">Jóias</div>
                </Link>
              </li>
              <li></li>
              <li>
                <Link href="male">
                  <div className="text-white cursor-pointer">Masculino</div>
                </Link>
              </li>
              <li>
                <Link href="/cart">
                  <div className="text-white cursor-pointer">Carrinho</div>
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
