import React, { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = () => {
  const [title, setTitle] = useState('');
  const [image, setImage] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');
  const [description, setDescription] = useState('');

  const addProductHandler = (e) => {
    e.preventDefault();
    const newProduct = {
      id: nanoid(),
      title,
      image,
      category,
      price,
      description,
    };
    console.log(newProduct);
  };

  return (
    <form
      onSubmit={addProductHandler}
      className="flex flex-col items-center p-[5%] w-screen h-screen"
    >
      <h1 className="text-3xl w-1/2 mb-5">Add New Product</h1>
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
          Add Product
        </button>
      </div>
    </form>
  );
};

export default Create;
