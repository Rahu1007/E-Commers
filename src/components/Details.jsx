import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import axios from '../utils/axios';
import Loading from './Loading';

const Details = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  return product ? (
    <div className="w-[70%] flex h-full justify-between item-center m-auto py-[10%]">
      <img
        className="object-contain h-[80%] w-[40%]"
        src={`${product.image}`}
        alt=""
      />
      <div className="content w-[90%]">
        <h1 className="text-4xl">{product.title}</h1>
        <h3 className="text-zinc-600 my-5">{product.category}</h3>
        <h2 className="text-red-400 mb-3">₹ {product.price}</h2>
        <p className="mb-[3%]">{product.description}</p>
        <Link
          to={`/edit/${product.id}`}
          className="mr-5 border rounded border-blue-500 text-blue-800 px-5 py-2"
        >
          Edit
        </Link>
        <Link
          to="#"
          className="border rounded border-red-500 text-red-800 px-5 py-2"
        >
          Delete
        </Link>
      </div>
    </div>
  ) : (
    <Loading />
  );
};

export default Details;