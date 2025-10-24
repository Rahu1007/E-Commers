import React from 'react';
import Nav from './Nav';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <>
    <Nav/>
    <div className="h-full w-[85%]  p-10 pt-[5%] flex flex-wrap gap-5 bg-red-100 overflow-y-scroll" >
  <Link
   to="/details/1" 
   className="card p-1 border shadow rounded w-[18%] h-[30vh] flex flex-col justify-center items-center bg-white">
    
    <div
      className=" hover:scale-110 mb-5 w-full h-[80%] bg-contain bg-no-repeat bg-center mb-3"
      style={{
        backgroundImage: "url('https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png')",
      }}
    ></div>

    <h1 className=" hover:text-blue-900 text-center text-sm">
      Lorem ipsum dolor sit, amet consectetur adipisicing elit.
    </h1>
  </Link>

</div>
</>
  )
}

export default Home