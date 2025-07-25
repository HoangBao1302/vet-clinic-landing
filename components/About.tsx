"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Award, Clock, Heart, Users } from "lucide-react";

export default function About() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Image */}
          <div className="relative">
            <div className="relative h-64 md:h-80 lg:h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/vet-images/judy-beth-morris-5Bi6MWlWMbw-unsplash.jpg"
                alt="Veterinarian with pet"
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                priority
              />
            </div>
          </div>

          {/* Right Column - Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
              About PawCare Clinic
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              For over 15 years, PawCare Clinic has been the trusted choice for pet owners in Ho Chi Minh City. 
              Our state-of-the-art facility and experienced team provide comprehensive veterinary care with 
              compassion and professionalism.
            </p>
            <p className="text-lg text-gray-600 mb-8">
              We believe every pet deserves the best possible care. Our modern equipment, advanced medical 
              procedures, and caring approach ensure your beloved companions receive treatment that exceeds 
              your expectations.
            </p>

            {/* Stats/Features */}
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Users className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">5000+</div>
                  <div className="text-sm text-gray-600">Happy Pets</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Award className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">24/7</div>
                  <div className="text-sm text-gray-600">Emergency Care</div>
                </div>
              </div>
              
              <div className="flex items-center space-x-3">
                <div className="bg-primary-100 p-3 rounded-lg">
                  <Heart className="w-6 h-6 text-primary-600" />
                </div>
                <div>
                  <div className="font-semibold text-gray-800">100%</div>
                  <div className="text-sm text-gray-600">Care & Love</div>
                </div>
              </div>
            </div>

            <button 
              onClick={() => isClient && document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
              className="btn-primary"
              suppressHydrationWarning
            >
              Meet Our Team
            </button>
          </div>
        </div>

        {/* Team Section */}
        <div className="mt-20">
          <div className="text-center mb-12">
            <h3 className="text-2xl md:text-3xl font-bold text-gray-800 mb-4">
              Our Expert Team
            </h3>
            <p className="text-lg text-gray-600">
              Meet the caring professionals who make PawCare special
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/reviews/brooke-cagle--uHVRvDr7pg-unsplash.jpg"
                  alt="Dr. Sarah Johnson"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dr. Sarah Johnson</h4>
              <p className="text-primary-600 font-medium mb-2">Lead Veterinarian</p>
              <p className="text-gray-600">
                15+ years of experience in small animal medicine and surgery
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/reviews/jason-goodman-fznQW-kn5VU-unsplash.jpg"
                  alt="Dr. Michael Chen"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dr. Michael Chen</h4>
              <p className="text-primary-600 font-medium mb-2">Emergency Specialist</p>
              <p className="text-gray-600">
                Expert in emergency care and critical patient management
              </p>
            </div>

            <div className="text-center">
              <div className="relative w-32 h-32 md:w-40 md:h-40 lg:w-48 lg:h-48 mx-auto mb-4 overflow-hidden rounded-full">
                <Image
                  src="/reviews/jonas-leupe-E0NDAvDCPa0-unsplash.jpg"
                  alt="Dr. Emily Rodriguez"
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-full"
                  sizes="(max-width: 768px) 128px, (max-width: 1024px) 160px, 192px"
                />
              </div>
              <h4 className="text-xl font-semibold text-gray-800 mb-2">Dr. Emily Rodriguez</h4>
              <p className="text-primary-600 font-medium mb-2">Surgery Specialist</p>
              <p className="text-gray-600">
                Board-certified surgeon with expertise in complex procedures
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}