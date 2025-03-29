
import { Shield, Car, Users } from "lucide-react";
import FeatureCard from "./FeatureCard";
import { Button } from "@/components/ui/button";

const SafetyTips = () => {
  const tips = [
    {
      title: "For Drivers",
      description: "Essential guidelines for safe driving practices, including speed limits, signaling, and concentration.",
      icon: Car,
      color: "bg-traffic-blue"
    },
    {
      title: "For Pedestrians",
      description: "Learn how to safely navigate roads, use crosswalks, and stay visible to traffic at all times.",
      icon: Users,
      color: "bg-traffic-green"
    },
    {
      title: "For Cyclists",
      description: "Proper signaling, lane positioning, and visibility tips to ensure your safety while cycling.",
      icon: Shield,
      color: "bg-traffic-yellow"
    }
  ];

  return (
    <section id="tips" className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-traffic-dark mb-4">Road Safety Tips</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Follow these essential guidelines to ensure safety for everyone on the road.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {tips.map((tip, index) => (
            <FeatureCard
              key={index}
              title={tip.title}
              description={tip.description}
              icon={tip.icon}
              color={tip.color}
            />
          ))}
        </div>

        <div className="mt-12 flex justify-center">
          <Button className="bg-traffic-blue hover:bg-traffic-blue/90 text-white rounded-full px-8">
            View All Safety Tips
          </Button>
        </div>
      </div>
    </section>
  );
};

export default SafetyTips;
