import SEO from '../components/SEO/SEO';
import StorySection from '../components/about/StorySection';
import ValuesSection from '../components/about/ValuesSection';
import TeamSection from '../components/about/TeamSection';
import AboutGallery from '../components/about/AboutGallery';
import { generateSEOKeywords, generateSEODescription } from '../utils/seo';

export default function About() {
  const pageKeywords = [
    'TastyMomo history',
    'momo restaurant story',
    'best momo makers',
    'traditional momo recipes',
    'handcrafted dumplings',
    'momo chef team',
    'food passion',
    'culinary excellence'
  ];

  const description = "Discover the story behind TastyMomo, where traditional recipes meet modern flavors. Learn about our journey, values, and the passionate team crafting your favorite momos.";

  return (
    <div className="bg-gray-50">
      <SEO 
        title="About Us"
        description={generateSEODescription(description)}
        keywords={generateSEOKeywords([], pageKeywords)}
      />
      <StorySection />
      <AboutGallery />
      <ValuesSection />
      <TeamSection />
    </div>
  );
}