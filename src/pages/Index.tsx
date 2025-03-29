
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import SafetyTips from "@/components/SafetyTips";
import KidsZone from "@/components/KidsZone";
import EmergencyInfo from "@/components/EmergencyInfo";
import Footer from "@/components/Footer";
import { Car, Book, ShieldCheck, MapPin } from "lucide-react";
import FeatureCard from "@/components/FeatureCard";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      title: "Traffic Rules",
      description: "Learn about traffic laws, signals, and penalties explained in a simple way.",
      icon: Car,
      color: "bg-traffic-red"
    },
    {
      title: "Educational Content",
      description: "Access comprehensive guides, videos, and articles about road safety.",
      icon: Book,
      color: "bg-traffic-blue"
    },
    {
      title: "Safety Guidelines",
      description: "Essential do's and don'ts for drivers, pedestrians, and cyclists.",
      icon: ShieldCheck,
      color: "bg-traffic-green"
    },
    {
      title: "Local Awareness",
      description: "Region-specific traffic rules and community-driven awareness campaigns.",
      icon: MapPin,
      color: "bg-traffic-yellow"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      
      <main className="flex-grow">
        <Hero />
        
        {/* Features Section */}
        <section id="rules" className="py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-traffic-dark mb-4">Traffic Education Made Simple</h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Our platform provides comprehensive resources to understand traffic rules and promote road safety.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <FeatureCard
                  key={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                  color={feature.color}
                />
              ))}
            </div>
            
            <div className="mt-12 text-center">
              <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
                Join thousands of citizens committed to creating safer roads in our communities through education and awareness.
              </p>
              <Button className="bg-traffic-blue hover:bg-traffic-blue/90 text-white rounded-full px-8">
                Explore All Resources
              </Button>
            </div>
          </div>
        </section>
        
        <SafetyTips />
        <KidsZone />
        <EmergencyInfo />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
