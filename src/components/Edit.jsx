import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from '../utils/axios';

const Edit = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const getProduct = async () => {
    try {
      const { data } = await axios.get(`/products/${id}`);
      setProduct(data);
      setTitle(data.title);
      setImage(data.image);
      setCategory(data.category);
      setPrice(data.price);
      setDescription(data.description);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getProduct();
  }, [id]);

  const updateProductHandler = (e) => {
    e.preventDefault();
    const updatedProduct = {
      ...product,
      title,
      image,
      category,
      price,
      description,
    };
    console.log(updatedProduct);
  };

  return (
    <form
      onSubmit={updateProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Edit Product</h1>
      <input
        type="url"
        placeholder="Image URL"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setImage(e.target.value)}
        value={image}
      />
      <input
        type="text"
        placeholder="Title"
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        onChange={(e) => setTitle(e.target.value)}
        value={title}
      />
      <div className="w-1/2 flex justify-between">
        <input
          type="text"
          placeholder="Category"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setCategory(e.target.value)}
          value={category}
        />
        <input
          type="number"
          placeholder="Price"
          className="text-1xl bg-zinc-100 rounded p-3 w-[48%] mb-3"
          onChange={(e) => setPrice(e.target.value)}
          value={price}
        />
      </div>
      <textarea
        className="text-1xl bg-zinc-100 rounded p-3 w-1/2 mb-3"
        placeholder="Description"
        rows="10"
        onChange={(e) => setDescription(e.target.value)}
        value={description}
      ></textarea>
      <div className="w-1/2">
        <button className="py-2 px-5 border rounded border-blue-500 text-blue-800">
          Update Product
        </button>
      </div>
    </form>
  );
};

export default Edit;
