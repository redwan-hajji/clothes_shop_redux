import React from "react";
import ProductCard from "../layouts/ProductCard";

const Features = () => {
  const data = [
    {
      id: 6,
      img: "/src/assets/images/features/product7.avif",
      name: "black leather bag",
      price: "50.00",
      discount: "10% Off",
    },
    {
      id: 7,
      img: "/src/assets/images/features/products8.jpeg",
      name: "safety jacket ",
      price: "40.00",
      discount: "20% Off",
    },
    {
      id: 8,
      img: "/src/assets/images/features/product9.jpg",
      name: "Ailang watch",
      price: "1200.00",
      discount: "30% Off",
    },
    {
      id: 9,
      img: "/src/assets/images/features/product10.avif",
      name: "Custom text Shirt",
      price: "60.00",
      discount: "10% Off",
    },
    {
      id: 10,
      img: "/src/assets/images/features/product11.jpg",
      name: "White Shirt",
      price: "20.00",
      discount: "11% Off",
    },
    {
      id: 11,
      img: "/src/assets/images/features/product12.jpg",
      name: "Rolex watch",
      price: "1999.00",
      discount: "20% Off",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col justify-center pt-24 pb-10">
      <h1 className=" font-semibold text-4xl text-center text-extraDarkColor">
        Exclusive Products
      </h1>
      <div className=" flex flex-wrap justify-center gap-5 pt-8">
        {data.map((item) => (
          <div key={item.id} className="md:w-2/4 lg:w-1/4">
            <ProductCard {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
