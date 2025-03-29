
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <div className="relative overflow-hidden bg-white">
      {/* Traffic light decorative elements */}
      <div className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-traffic-red/10 blur-3xl"></div>
      <div className="absolute top-1/3 -right-12 w-40 h-40 rounded-full bg-traffic-yellow/10 blur-3xl"></div>
      <div className="absolute -bottom-20 left-1/4 w-48 h-48 rounded-full bg-traffic-green/10 blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-traffic-dark leading-tight">
              Making Roads Safer <br className="hidden sm:block" />
              <span className="text-traffic-blue">Together</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-lg">
              Join our mission to create safer roads through education, awareness, and community engagement.
            </p>
            <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4 pt-4">
              <Button className="bg-traffic-blue hover:bg-traffic-blue/90 text-white rounded-full text-md px-6 py-6 h-auto">
                Learn Traffic Rules
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button variant="outline" className="rounded-full text-md px-6 py-6 h-auto border-2">
                Explore Kids Zone
              </Button>
            </div>
            <div className="flex items-center space-x-6 pt-4">
              <div className="flex -space-x-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className={`w-10 h-10 rounded-full border-2 border-white flex items-center justify-center bg-traffic-blue/80`}>
                    <span className="text-xs font-medium text-white">U{i}</span>
                  </div>
                ))}
              </div>
              <p className="text-sm text-gray-600">
                Join <span className="font-bold text-traffic-dark">5,000+</span> road safety advocates
              </p>
            </div>
          </div>
          
          <div className="relative h-full min-h-[300px] md:min-h-[400px] flex items-center justify-center">
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Traffic light animation */}
              <div className="relative w-28 h-72 bg-traffic-dark rounded-2xl p-4 flex flex-col items-center justify-between">
                <div className={`w-16 h-16 rounded-full bg-traffic-red animate-pulse-slow`}></div>
                <div className={`w-16 h-16 rounded-full bg-traffic-yellow animate-pulse-slow`} style={{ animationDelay: '1s' }}></div>
                <div className={`w-16 h-16 rounded-full bg-traffic-green animate-pulse-slow`} style={{ animationDelay: '2s' }}></div>
              </div>
              
              {/* Road markings */}
              <div className="absolute bottom-0 w-full h-12 bg-gray-800 flex justify-center items-center">
                <div className="w-full flex justify-around">
                  {[1, 2, 3, 4, 5].map((i) => (
                    <div key={i} className="w-12 h-2 bg-traffic-yellow"></div>
                  ))}
                </div>
              </div>
              
              {/* Car illustration */}
              <div className="absolute bottom-14 right-1/4 animate-bounce-light" style={{ animationDelay: '0.5s' }}>
                <div className="w-24 h-12 bg-traffic-blue rounded-t-2xl"></div>
                <div className="w-36 h-8 bg-traffic-blue rounded-lg -mt-1"></div>
                <div className="flex justify-between -mt-1">
                  <div className="w-8 h-4 bg-gray-800 rounded-full"></div>
                  <div className="w-8 h-4 bg-gray-800 rounded-full"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
