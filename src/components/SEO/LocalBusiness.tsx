import React from 'react';

interface LocalBusinessProps {
  name: string;
  image: string;
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    postalCode: string;
    addressCountry: string;
  };
  geo: {
    latitude: number;
    longitude: number;
  };
  url: string;
  telephone: string;
  servesCuisine: string[];
}

export default function LocalBusiness({ 
  name,
  image,
  address,
  geo,
  url,
  telephone,
  servesCuisine
}: LocalBusinessProps) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name,
    image,
    "@id": url,
    url,
    telephone,
    servesCuisine,
    address: {
      "@type": "PostalAddress",
      ...address
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: geo.latitude,
      longitude: geo.longitude
    },
    priceRange: "₹₹",
    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: [
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
          "Sunday"
        ],
        opens: "11:00",
        closes: "22:00"
      }
    ]
  };

  return (
    <script type="application/ld+json">
      {JSON.stringify(schema)}
    </script>
  );
}