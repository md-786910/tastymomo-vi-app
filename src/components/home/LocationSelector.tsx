import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MapPin, ChevronDown, Navigation } from "lucide-react";

interface Location {
  id: string;
  name: string;
  address: string;
  coordinates: {
    lat: number;
    lng: number;
  };
  openingHours: string;
  phone: string;
}

const locations: Location[] = [
  {
    id: "loc1",
    name: "TastyMomo Central",
    address: "123 Food Street, Central District",
    coordinates: { lat: 26.1075, lng: 85.3584 },
    openingHours: "10:00 AM - 10:00 PM",
    phone: "+91 98765-43210",
  },
  // {
  //   id: "loc2",
  //   name: "TastyMomo West",
  //   address: "456 Momo Lane, West District",
  //   coordinates: { lat: 28.6219, lng: 77.205 },
  //   openingHours: "11:00 AM - 11:00 PM",
  //   phone: "+91 98765-43211",
  // },
  // {
  //   id: "loc3",
  //   name: "TastyMomo East",
  //   address: "789 Spice Road, East District",
  //   coordinates: { lat: 28.6129, lng: 77.215 },
  //   openingHours: "10:30 AM - 10:30 PM",
  //   phone: "+91 98765-43212",
  // },
];

export default function LocationSelector() {
  const [selectedLocation, setSelectedLocation] = useState<Location | null>(
    locations[0]
  );
  const [isOpen, setIsOpen] = useState(false);

  const handleLocationSelect = (location: Location) => {
    setSelectedLocation(location);
    setIsOpen(false);
  };
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <MapPin className="text-[#FF5C00]" size={32} />
            <h2 className="text-3xl font-bold">Find Us Near You</h2>
          </div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select your nearest TastyMomo location to discover our presence in
            your area
          </p>
        </motion.div>

        <div className="relative max-w-2xl mx-auto">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="w-full p-4 bg-white rounded-xl shadow-lg flex items-center justify-between hover:shadow-xl transition-shadow duration-300"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <div className="flex items-center gap-3">
              <Navigation className="text-[#FF5C00]" />
              <span className="text-gray-600">
                {selectedLocation
                  ? selectedLocation.name
                  : "Select your location"}
              </span>
            </div>
            <ChevronDown
              className={`text-[#FF5C00] transition-transform duration-300 ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </motion.button>

          <AnimatePresence>
            {isOpen && (
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="absolute top-full left-0 right-0 mt-2 bg-white rounded-xl shadow-xl overflow-hidden z-50"
              >
                {locations.map((location) => (
                  <motion.button
                    key={location.id}
                    onClick={() => handleLocationSelect(location)}
                    className="w-full p-4 flex items-start gap-4 hover:bg-gray-50 transition-colors duration-300"
                    whileHover={{ x: 10 }}
                  >
                    <MapPin className="text-[#FF5C00] flex-shrink-0 mt-1" />
                    <div className="text-left">
                      <h3 className="font-semibold text-gray-900">
                        {location.name}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {location.address}
                      </p>
                      <p className="text-sm text-gray-500 mt-1">
                        {location.openingHours}
                      </p>
                    </div>
                  </motion.button>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {selectedLocation && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-8 p-6 bg-white rounded-xl shadow-lg max-w-2xl mx-auto"
          >
            <div className="aspect-w-16 aspect-h-9 mb-4">
              <iframe
                title="Location Map"
                width="100%"
                height="300"
                frameBorder="0"
                src={`https://maps.google.com/maps?q=${selectedLocation.coordinates.lat},${selectedLocation.coordinates.lng}&hl=en&z=20&output=embed`}
                allowFullScreen
                className="rounded-lg"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-4 text-sm">
              <div>
                <h4 className="font-semibold text-gray-900">Address</h4>
                <p className="text-gray-600">{selectedLocation.address}</p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">Contact</h4>
                <p className="text-gray-600">{selectedLocation.phone}</p>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
}
