"use client";

import { useState, useEffect } from "react";
import { Heart, Stethoscope, Scissors, Shield, Syringe, Users } from "lucide-react";

const services = [
  {
    icon: <Stethoscope className="w-8 h-8" />,
    title: "General Check-ups",
    description: "Comprehensive health examinations to keep your pet healthy and detect any issues early.",
    price: "From ₫300,000",
  },
  {
    icon: <Syringe className="w-8 h-8" />,
    title: "Vaccinations",
    description: "Complete vaccination programs to protect your pets from common diseases.",
    price: "From ₫200,000",
  },
  {
    icon: <Heart className="w-8 h-8" />,
    title: "Emergency Care",
    description: "24/7 emergency services for urgent medical situations and accidents.",
    price: "From ₫500,000",
  },
  {
    icon: <Scissors className="w-8 h-8" />,
    title: "Surgery",
    description: "Advanced surgical procedures performed by experienced veterinary surgeons.",
    price: "From ₫1,000,000",
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Dental Care",
    description: "Professional dental cleaning and oral health maintenance for your pets.",
    price: "From ₫400,000",
  },
  {
    icon: <Users className="w-8 h-8" />,
    title: "Grooming",
    description: "Professional grooming services to keep your pets clean and comfortable.",
    price: "From ₫250,000",
  },
];

export default function Services() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Our Services
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We provide comprehensive veterinary care with modern equipment and experienced professionals
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-primary-600 mb-4">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 mb-4">
                {service.description}
              </p>
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold text-primary-600">
                  {service.price}
                </span>
                <button className="text-primary-600 hover:text-primary-500 font-medium">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => isClient && document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
            suppressHydrationWarning
          >
            Book an Appointment
          </button>
        </div>
      </div>
    </section>
  );
}