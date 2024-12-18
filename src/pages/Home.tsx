import React from 'react';
import SEO from '../components/SEO/SEO';
import HeroSlider from '../components/HeroSlider';
import ScrollingMomos from '../components/ScrollingMomos';
import Features from '../components/Features';
import LocationSelector from '../components/home/LocationSelector';
import GoogleReviews from '../components/home/GoogleReviews';
import Testimonials from '../components/Testimonials';
import InstagramFeed from '../components/InstagramFeed';
import { useHomePageSEO } from '../hooks/useHomePageSEO';

export default function Home() {
  const { title, description, keywords } = useHomePageSEO();

  return (
    <div className="overflow-x-hidden">
      <SEO 
        title={title}
        description={description}
        keywords={keywords}
      />
      <HeroSlider />
      <ScrollingMomos />
      <Features />
      <LocationSelector />
      <GoogleReviews />
      <Testimonials />
      <InstagramFeed />
    </div>
  );
}