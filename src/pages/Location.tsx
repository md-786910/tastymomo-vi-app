import React from 'react';
import SEO from '../components/SEO/SEO';
import { locationSEO } from '../config/seo/locationSEO';
import ContactForm from '../components/contact/ContactForm';
import { MapPin, Clock, Phone, Mail } from 'lucide-react';

export default function Location() {
  return (
    <div className="py-16 bg-gray-50">
      <SEO 
        title={locationSEO.title}
        description={locationSEO.description}
        keywords={locationSEO.keywords}
      />
      
      <script type="application/ld+json">
        {JSON.stringify(locationSEO.schema)}
      </script>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Map and Contact Info */}
          <div>
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-8">
              <iframe
                title="TastyMomo Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.669547769127!2d85.3910!3d26.1197!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDA3JzIyLjkiTiA4NcKwMjMnMjcuNiJF!5e0!3m2!1sen!2sin!4v1629789456789!5m2!1sen!2sin"
                width="100%"
                height="400"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full"
              />
            </div>

            <div className="bg-white rounded-2xl shadow-xl p-8">
              <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <MapPin className="text-[#FF5C00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-gray-600">
                      Majhaulia Rd, Gobarsahi, Muzaffarpur,<br />
                      Gobrahi urf Gobardhanpur, Bihar 842001
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4">
                  <Clock className="text-[#FF5C00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Opening Hours</h3>
                    <p className="text-gray-600">
                      Monday - Sunday<br />
                      11:00 AM - 10:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Phone className="text-[#FF5C00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-gray-600">+91 XXXXX XXXXX</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <Mail className="text-[#FF5C00] flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-gray-600">info@tastymomo.com</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <ContactForm />
        </div>
      </div>
    </div>
  );
}