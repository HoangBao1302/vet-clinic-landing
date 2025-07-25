"use client";

import { useState, useEffect } from "react";
import { Facebook, Instagram, Twitter, Phone, MapPin, Mail } from "lucide-react";

export default function Footer() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  return (
    <footer className="bg-gray-800 text-white">
      <div className="container-custom py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="lg:col-span-1">
            <div className="text-2xl font-bold text-white mb-4">
              PawCare Clinic
            </div>
            <p className="text-gray-300 mb-6">
              Providing compassionate veterinary care for your beloved pets in Ho Chi Minh City. 
              Expert treatment, modern facilities, and caring staff.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => isClient && scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                  suppressHydrationWarning
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => isClient && scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                  suppressHydrationWarning
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => isClient && scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                  suppressHydrationWarning
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => isClient && scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-white transition-colors"
                  suppressHydrationWarning
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => isClient && scrollToSection("contact")}
                  className="text-gray-300 hover:text-white transition-colors"
                  suppressHydrationWarning
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Our Services</h3>
            <ul className="space-y-2 text-gray-300">
              <li>General Check-ups</li>
              <li>Vaccinations</li>
              <li>Emergency Care</li>
              <li>Surgery</li>
              <li>Dental Care</li>
              <li>Grooming</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-gray-300 mt-0.5" />
                <div className="text-gray-300">
                  <p>74 Lê Trọng Tấn</p>
                  <p>Tây Thạnh Ward</p>
                  <p>Ho Chi Minh City</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">+84765452515</span>
              </div>
              
              <div className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-gray-300" />
                <span className="text-gray-300">info@pawcareclinic.com</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-700 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300 text-sm">
              © {new Date().getFullYear()} PawCare Clinic. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="text-gray-300 hover:text-white text-sm transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}