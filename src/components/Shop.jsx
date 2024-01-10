import React from "react";
import ProductCard from "../layouts/ProductCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Shop = () => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    arrows: false,
    responsive: [
      {
        breakpoint: 1023,
        settings: {
          dots: true,
          infinite: true,
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
      {
        breakpoint: 768,
        settings: {
          initialSlide: 2,
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          initialSlide: 1,
          slidesToShow: 1,
          slidesToScroll: 2,
        },
      },
    ],
  };
  const data = [
    {
      id: 0,
      img: "/src/assets/images/products/product1.jpg",
      name: "Nike Air",
      price: "198.00",
      discount: "20% Off",
    },
    {
      id: 1,
      img: "/src/assets/images/products/product2.jpg",
      name: "ULYSSE NARDIN",
      price: "2000.00",
      discount: "50% Off",
    },
    {
      id: 2,
      img: "/src/assets/images/products/product3.jpg",
      name: "Jacket",
      price: "160.00",
      discount: "30% Off",
    },
    {
      id: 3,
      img: "/src/assets/images/products/product4.webp",
      name: "Shirt",
      price: "60.00",
      discount: "10% Off",
    },
    {
      id: 4,
      img: "/src/assets/images/products/product5.webp",
      name: "leather bag",
      price: "120.00",
      discount: "13% Off",
    },
    {
      id: 5,
      img: "/src/assets/images/products/product6.jpg",
      name: "Puma bag",
      price: "199.00",
      discount: "18% Off",
    },
  ];
  return (
    <div className=" min-h-screen flex flex-col justify-center lg:px-32 px-5 pt-14">
      <div>
        <h1 className=" font-semibold text-4xl text-center text-extraDarkColor">
          Best sellers
        </h1>
      </div>
      <div className=" mt-8">
        <Slider {...settings}>
          {data.map((item) => (
            <ProductCard key={item.id} {...item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Shop;
