import React from 'react'
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const pricing = [
    {
      imgUrl: "/pricing.jpg",
      title: "QUARTERLY",
      price: 18000,
      length: 3,
      facilities: [
        "Access to Gym Equipment",
        "Free Group Classes",
        "Locker Room Access",
        "Free Restroom",
        "Skilled Support During Working Hours",
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "HALF-YEARLY",
      price: 34000,
      length: 6,
      facilities: [
        "Access to Gym Equipment",
        "Free Group Classes",
        "Locker Room Access",
        "Free Restroom",
        "24/7 Skilled Support",
        "10 Days Freezing Option",
        "One Free Personal Training Session",
      ],
    },
    {
      imgUrl: "/pricing.jpg",
      title: "YEARLY",
      price: 67000,
      length: 12,
      facilities: [
        "Access to Gym Equipment",
        "Free Group Classes",
        "Locker Room Access",
        "Free Restroom",
        "24/7 Skilled Support",
        "20 Days Freezing Option",
        "Monthly Personal Training Session",
        "Access to VIP Lounge",
      ],
    },
  ];

  return (
    <>
      <section className="pricing">
        <h1>ELITE EDGE FITNESS PLANS</h1>
        <div className="wrapper">
          {pricing.map((element) => (
            <div className="card" key={element.title}>
              <img src={element.imgUrl} alt={element.title} />
              <div className="title">
                <h1>{element.title}</h1>
                <h1>PACKAGE</h1>
                <h3>Rs {element.price}</h3>
                <p>For {element.length} Months</p>
              </div>
              <div className="description">
                {element.facilities.map((facility, index) => (
                  <p key={index}>
                    <Check /> {facility}
                  </p>
                ))}
                <Link to={"/"}>Join Now</Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}

export default Pricing
