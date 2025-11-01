import React, { useContext, useEffect } from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';
import { ProductContext } from '../utils/Context';
import Loading from './Loading';
import axios from '../utils/axios';

const Home = () => {
  const { products, setProducts } = useContext(ProductContext);

  const getProducts = async () => {
    try {
      const { data } = await axios.get('/products');
      setProducts(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (!products) {
      getProducts();
    }
  }, [products]);

  return products ? (
    <>
      <Nav />
      <div className="h-full w-[85%] p-10 pt-[5%] flex flex-wrap gap-5 bg-red-100 overflow-y-scroll">
        {products.map((product) => (
          <Link
            key={product.id}
            to={`/details/${product.id}`}
            className="card p-1 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center bg-white"
          >
            <div
              className="hover:scale-110 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3"
              style={{
                backgroundImage: `url('${product.image}')`,
              }}
            ></div>
            <h1 className="hover:text-blue-900 text-center text-sm">
              {product.title}
            </h1>
          </Link>
        ))}
      </div>
    </>
  ) : (
    <Loading />
  );
};

export default Home;