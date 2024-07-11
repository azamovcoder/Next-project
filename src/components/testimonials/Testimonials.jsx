"use client";

import "./Testimonials.scss";

import Image from "next/image";
import React from "react";
import { Testimonials__API } from "@/app/static/static";

const Testimonials = () => {
  const TestimonialsItem = Testimonials__API?.map((el) => (
    <div className="testimonials__frame" key={el?.id}>
      <Image alt="frame.img" src={el?.img} />
      <Image alt="stars.img" src={el?.stars} />
      <h3>{el?.desc}</h3>
      <p>{el?.title}</p>
    </div>
  ));
  return (
    <div>
      <div className="testimonials">
        <div className="container">
          <h1 className="testimonials__title">Testimonials</h1>
          <p className="testimonials__desc">
            Some quotes from our happy customers
          </p>
          <div className="testimonials__frames">{TestimonialsItem}</div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
