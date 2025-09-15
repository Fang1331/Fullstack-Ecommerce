import React from "react";
import Title from "../components/Title";
import Newsletterbox from "../components/Newsletterbox";
import { assets } from "../assets/assets";

const About = () => {
  return (
    <div>
      <div className="text-2xl text-center pt-8 border-t">
        <Title text1={"ABOUT"} text2={"US"} />
      </div>
      <div className="my-10 flex flex-col md:flex-row gap-16">
        <img
          className="w-full md:max-w-[450px]"
          src={assets.about_img}
          alt=""
        />
        <div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
          <p>
            GenCart is a modern ecommerce platform dedicated to making online
            shopping simple, enjoyable, and accessible for everyone. We offer a
            wide range of products, from fashion and electronics to home
            essentials, all curated to meet the needs of our diverse customers.
          </p>
          <p>
            Since our launch in 2022, GenCart has grown rapidly, serving
            thousands of happy customers across the country. Our team is
            passionate about providing excellent service, exclusive deals, and a
            seamless shopping experience.
          </p>
          <b className="text-gray-800">Our Mission</b>
          <p>
            Our mission is to empower shoppers by delivering quality products at
            affordable prices, backed by fast delivery and reliable customer
            support. We strive to innovate and improve every day, ensuring that
            GenCart remains your trusted destination for all things online.
          </p>
        </div>
      </div>
      <div className="text-xl py-4">
        <Title text1={"WHY"} text2={"CHOOSE US"} />
      </div>
      <div className="flex flex-col md:flex-row text-sm mb-20">
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Quality Assurance</b>
          <p className="text-gray-600">
            Every product on GenCart is carefully selected and undergoes strict
            quality checks to ensure you receive only the best. We partner with
            trusted brands and suppliers to guarantee authenticity and
            reliability.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Convenience</b>
          <p className="text-gray-600">
            Shop from anywhere, anytime with our user-friendly website and fast
            delivery options. GenCart makes online shopping effortless, saving
            you time and providing a hassle-free experience.
          </p>
        </div>
        <div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
          <b>Exceptional Customer Serveice</b>
          <p className="text-gray-600">
            Our dedicated support team is always ready to assist you with any
            queries or concerns. We value your satisfaction and strive to
            provide prompt, friendly, and effective customer service.
          </p>
        </div>
      </div>
      <Newsletterbox />
    </div>
  );
};

export default About;
