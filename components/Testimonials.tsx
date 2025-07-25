"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Star, ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Wilson",
    image: "/reviews/brooke-cagle--uHVRvDr7pg-unsplash.jpg",
    pet: "Max (Golden Retriever)",
    rating: 5,
    comment: "PawCare Clinic saved my dog's life during an emergency. The staff was incredibly professional and caring. Dr. Johnson explained everything clearly and made sure Max was comfortable throughout his treatment."
  },
  {
    name: "David Chen",
    image: "/reviews/jason-goodman-fznQW-kn5VU-unsplash.jpg",
    pet: "Luna (Persian Cat)",
    rating: 5,
    comment: "I've been bringing Luna here for 3 years. The team always provides excellent care and the facility is always clean and modern. They genuinely care about the pets and their owners."
  },
  {
    name: "Maria Rodriguez",
    image: "/reviews/jonas-leupe-8pCtwj37VB4-unsplash.jpg",
    pet: "Charlie (Labrador Mix)",
    rating: 5,
    comment: "Outstanding veterinary care! They helped Charlie with his surgery and the recovery was faster than expected. The staff followed up regularly to check on his progress. Highly recommended!"
  },
  {
    name: "John Thompson",
    image: "/reviews/jonas-leupe-E0NDAvDCPa0-unsplash.jpg",
    pet: "Bella (Beagle)",
    rating: 5,
    comment: "The best vet clinic in Ho Chi Minh City! Professional, caring, and always available for emergencies. They treat every pet like family and the prices are very reasonable."
  },
  {
    name: "Lisa Park",
    image: "/reviews/jonas-leupe-WargGLQW_Yk-unsplash.jpg",
    pet: "Milo (French Bulldog)",
    rating: 5,
    comment: "Amazing experience from start to finish. The team is knowledgeable, the facility is state-of-the-art, and they genuinely care about pet health. Milo loves coming here!"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-5 h-5 ${i < rating ? "text-yellow-400 fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from the pet owners who trust us with their beloved companions
          </p>
        </div>

        {/* Desktop View - Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
            >
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={testimonial.image}
                    alt={testimonial.name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                  <p className="text-sm text-gray-600">{testimonial.pet}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonial.comment}"</p>
            </div>
          ))}
        </div>

        {/* Mobile View - Carousel */}
        <div className="md:hidden">
          <div className="relative">
            <div className="bg-white p-6 rounded-lg shadow-lg mx-4">
              <div className="flex items-center mb-4">
                <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full flex-shrink-0">
                  <Image
                    src={testimonials[currentIndex].image}
                    alt={testimonials[currentIndex].name}
                    fill
                    style={{ objectFit: "cover" }}
                    className="rounded-full"
                    sizes="64px"
                  />
                </div>
                <div>
                  <h4 className="font-semibold text-gray-800">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-gray-600">{testimonials[currentIndex].pet}</p>
                  <div className="flex mt-1">
                    {renderStars(testimonials[currentIndex].rating)}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 italic">"{testimonials[currentIndex].comment}"</p>
            </div>

            {/* Navigation Buttons */}
            <button
              onClick={prevTestimonial}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-primary-600 hover:bg-primary-50"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextTestimonial}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-lg text-primary-600 hover:bg-primary-50"
            >
              <ChevronRight size={24} />
            </button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center mt-6 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-primary-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <button 
            onClick={() => isClient && document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="btn-primary"
            suppressHydrationWarning
          >
            Join Our Happy Clients
          </button>
        </div>
      </div>
    </section>
  );
}