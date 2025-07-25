"use client";

import { Phone, MapPin, Clock, Mail } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Contact & Location
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Visit us or get in touch to schedule an appointment for your pet
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Map */}
          <div className="order-2 lg:order-1">
            <div className="bg-gray-200 h-96 rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.954456789!2d106.63525731474396!3d10.738006462637834!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f06be9dd715%3A0x30566a434d4da3d8!2s74%20L%C3%AA%20Tr%E1%BB%8Dng%20T%E1%BA%A5n%2C%20T%C3%A2y%20Th%E1%BA%A1nh%2C%20T%C3%A2n%20Ph%C3%BA%2C%20Th%C3%A0nh%20ph%E1%BB%91%20H%E1%BB%93%20Ch%C3%AD%20Minh%2C%20Vietnam!5e0!3m2!1sen!2s!4v1620000000000!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="PawCare Clinic Location"
              />
            </div>
          </div>

          {/* Right Column - Contact Info */}
          <div className="order-1 lg:order-2 space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Get in Touch</h3>
              
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <MapPin className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Address</h4>
                    <p className="text-gray-600">
                      74 Lê Trọng Tấn, Tây Thạnh Ward<br />
                      Ho Chi Minh City, Việt Nam
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Phone className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Phone</h4>
                    <p className="text-gray-600">+84765452515</p>
                    <p className="text-sm text-gray-500">Available 24/7 for emergencies</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Mail className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Email</h4>
                    <p className="text-gray-600">info@pawcareclinic.com</p>
                    <p className="text-sm text-gray-500">We'll respond within 24 hours</p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="bg-primary-100 p-3 rounded-lg">
                    <Clock className="w-6 h-6 text-primary-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800 mb-1">Business Hours</h4>
                    <div className="text-gray-600 space-y-1">
                      <p>Monday - Friday: 8:00 AM - 8:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                      <p className="text-sm text-primary-600 font-medium">
                        Emergency services available 24/7
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="border-t pt-8">
              <h4 className="font-semibold text-gray-800 mb-4">Emergency Protocol</h4>
              <p className="text-gray-600 mb-4">
                For life-threatening emergencies, call us immediately at{" "}
                <span className="font-semibold text-primary-600">+84765452515</span>. 
                Our emergency team is available 24/7 to provide critical care for your pets.
              </p>
              <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                <p className="text-red-700 font-medium">
                  🚨 Emergency Signs: Difficulty breathing, severe bleeding, loss of consciousness, 
                  inability to urinate, suspected poisoning, or severe trauma.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}