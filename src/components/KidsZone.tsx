
import { Gamepad, Book, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const KidsZone = () => {
  return (
    <section id="kids" className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-traffic-dark mb-4">Kids Zone</h2>
            <p className="text-lg text-gray-600">
              Fun and interactive ways to teach children about traffic rules through games, animations, and quizzes.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-traffic-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-traffic-dark">Interactive Games</h3>
                  <p className="text-gray-600">Engaging games that teach traffic signals and road safety in a fun way.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-traffic-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-traffic-dark">Animated Stories</h3>
                  <p className="text-gray-600">Colorful stories that illustrate important safety lessons for children.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="mt-1 mr-4 bg-green-100 p-1 rounded-full">
                  <CheckCircle className="w-5 h-5 text-traffic-green" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg text-traffic-dark">Fun Quizzes</h3>
                  <p className="text-gray-600">Test knowledge with interactive quizzes that reward learning achievements.</p>
                </div>
              </div>
            </div>
            
            <div className="pt-4 flex space-x-4">
              <Button className="bg-traffic-yellow hover:bg-traffic-yellow/90 text-white rounded-full">
                <Gamepad className="mr-2 h-5 w-5" />
                Play Games
              </Button>
              <Button variant="outline" className="rounded-full">
                <Book className="mr-2 h-5 w-5" />
                Read Stories
              </Button>
            </div>
          </div>
          
          <div className="relative">
            <div className="w-full h-[350px] bg-traffic-blue/10 rounded-3xl overflow-hidden relative">
              {/* School crossing illustration */}
              <div className="absolute bottom-0 w-full h-20 bg-gray-800"></div>
              
              {/* Zebra crossing */}
              <div className="absolute bottom-0 w-full h-20 flex justify-center items-center">
                <div className="w-4/5 grid grid-cols-6 gap-2">
                  {[1, 2, 3, 4, 5, 6].map((i) => (
                    <div key={i} className="h-14 bg-white"></div>
                  ))}
                </div>
              </div>
              
              {/* Traffic light */}
              <div className="absolute top-10 right-10">
                <div className="w-10 h-24 bg-traffic-dark rounded-lg p-2 flex flex-col items-center justify-between">
                  <div className="w-6 h-6 rounded-full bg-traffic-red"></div>
                  <div className="w-6 h-6 rounded-full bg-traffic-yellow"></div>
                  <div className="w-6 h-6 rounded-full bg-traffic-green"></div>
                </div>
              </div>
              
              {/* Cartoon children crossing */}
              <div className="absolute bottom-10 left-10 animate-bounce-light">
                <div className="relative">
                  {/* Simple child figure */}
                  <div className="w-12 h-12 bg-yellow-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-4 bg-white rounded-full mt-2"></div>
                  </div>
                  <div className="w-8 h-16 bg-blue-500 -mt-2 mx-auto rounded-lg"></div>
                  <div className="flex justify-between mt-1 w-12 mx-auto">
                    <div className="w-2 h-6 bg-blue-700 rounded-full"></div>
                    <div className="w-2 h-6 bg-blue-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-8 right-20 animate-bounce-light" style={{ animationDelay: '0.7s' }}>
                <div className="relative">
                  {/* Simple child figure */}
                  <div className="w-12 h-12 bg-pink-300 rounded-full flex items-center justify-center">
                    <div className="w-8 h-4 bg-white rounded-full mt-2"></div>
                  </div>
                  <div className="w-8 h-16 bg-purple-500 -mt-2 mx-auto rounded-lg"></div>
                  <div className="flex justify-between mt-1 w-12 mx-auto">
                    <div className="w-2 h-6 bg-purple-700 rounded-full"></div>
                    <div className="w-2 h-6 bg-purple-700 rounded-full"></div>
                  </div>
                </div>
              </div>
              
              {/* Crossing guard */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="relative">
                  <div className="w-14 h-14 bg-orange-400 rounded-full flex items-center justify-center">
                    <div className="w-10 h-5 bg-white rounded-full mt-2"></div>
                  </div>
                  <div className="w-20 h-20 bg-orange-600 -mt-2 mx-auto rounded-lg"></div>
                  <div className="absolute top-10 -right-8 w-16 h-4 bg-orange-600 rotate-45"></div>
                  <div className="absolute top-10 right-4 w-4 h-12 bg-traffic-red"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default KidsZone;
