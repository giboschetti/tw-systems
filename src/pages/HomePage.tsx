import { HeroSection } from '../components/home/HeroSection';
import { ProductsSection } from '../components/home/ProductsSection';
import { WhoWeAreSection } from '../components/home/WhoWeAreSection';

export const HomePage = () => {
  return (
    <div>
      <HeroSection />
      <WhoWeAreSection />
      <ProductsSection />
    </div>
  );
};