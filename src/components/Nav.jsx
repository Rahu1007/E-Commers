import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';

const Nav = () => {
  const { products } = useContext(ProductContext);
  const categories = [...new Set(products?.map((p) => p.category))];

  const color = () => {
    return `rgba(${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, ${(Math.random() * 255).toFixed()}, 0.4)`
  }

  return (
    <nav className="w-[15%] h-full bg-zinc-50 flex flex-col items-center pt-5">
      <Link
        className="py-2 px-5 border rounded border-blue-500 text-blue-800"
        to="/create"
      >
        ADD New Product
      </Link>
      <hr className="my-3 w-[100%]" />
      <h1 className="text-2xl mb-3 w-[80%]">Category Filter</h1>
      <ul className="w-[80%]">
        {categories.map((c, i) => (
          <li key={i} className="flex items-center mb-3">
            <span style={{backgroundColor: color()}} className="rounded-full mr-2 w-[15px] h-[15px]"></span>
            {c}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Nav;