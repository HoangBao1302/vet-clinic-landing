"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function Hero() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState("");
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitMessage("");

    try {
      const response = await fetch("/api/appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitMessage("Thank you! We'll contact you soon to confirm your appointment.");
        setFormData({ name: "", phone: "", email: "", message: "" });
      } else {
        setSubmitMessage("Sorry, there was an error. Please call us directly.");
      }
    } catch {
      setSubmitMessage("Sorry, there was an error. Please call us directly.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/vet-images/ayla-verschueren-nWKMtmbpxQs-unsplash.jpg"
          alt="Veterinary clinic interior"
          fill
          style={{ objectFit: "cover" }}
          priority
          className="brightness-50"
          sizes="100vw"
          quality={85}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container-custom w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Text */}
          <div className="text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              Professional Pet Care You Can Trust
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-200 animate-slide-up">
              Providing compassionate veterinary care for your beloved pets in Ho Chi Minh City. 
              Expert treatment, modern facilities, and caring staff.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <button 
                onClick={() => isClient && document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-primary"
                suppressHydrationWarning
              >
                Our Services
              </button>
              <button 
                onClick={() => isClient && document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                className="btn-secondary"
                suppressHydrationWarning
              >
                Learn More
              </button>
            </div>
          </div>

          {/* Right Column - Appointment Form */}
          <div className="bg-white p-8 rounded-lg shadow-2xl animate-slide-up">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Book an Appointment</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your full name"
                />
              </div>
              
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                  Phone *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  required
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your phone number"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Your email address"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={3}
                  value={formData.message}
                  onChange={handleInputChange}
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  placeholder="Tell us about your pet's needs"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full btn-primary disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isSubmitting ? "Sending..." : "Send Request"}
              </button>
            </form>
            
            {submitMessage && (
              <div className={`mt-4 p-3 rounded-lg text-sm ${
                submitMessage.includes("Thank you") 
                  ? "bg-green-100 text-green-700" 
                  : "bg-red-100 text-red-700"
              }`}>
                {submitMessage}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}