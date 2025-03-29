
import { Phone, Info, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

const EmergencyInfo = () => {
  return (
    <section id="emergency" className="py-16 bg-traffic-red/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-traffic-dark mb-4">Emergency Information</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Quick access to emergency contacts and first-aid guidelines in case of accidents.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-traffic-red">
            <div className="flex items-start mb-4">
              <div className="bg-traffic-red/10 p-2 rounded-lg mr-4">
                <Phone className="w-6 h-6 text-traffic-red" />
              </div>
              <h3 className="font-bold text-xl text-traffic-dark">Emergency Contacts</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex justify-between">
                <span className="text-gray-600">Police:</span>
                <span className="font-semibold">911</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Ambulance:</span>
                <span className="font-semibold">911</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Fire Department:</span>
                <span className="font-semibold">911</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-600">Highway Patrol:</span>
                <span className="font-semibold">*55 or #77</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-6 rounded-lg border-traffic-red text-traffic-red hover:bg-traffic-red/5">
              Save Contacts
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-traffic-yellow">
            <div className="flex items-start mb-4">
              <div className="bg-traffic-yellow/10 p-2 rounded-lg mr-4">
                <Info className="w-6 h-6 text-traffic-yellow" />
              </div>
              <h3 className="font-bold text-xl text-traffic-dark">First Aid Tips</h3>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <span className="text-traffic-yellow mr-2">•</span>
                <span className="text-gray-600">Keep calm and assess the situation</span>
              </li>
              <li className="flex items-start">
                <span className="text-traffic-yellow mr-2">•</span>
                <span className="text-gray-600">Check for injuries and call 911 immediately</span>
              </li>
              <li className="flex items-start">
                <span className="text-traffic-yellow mr-2">•</span>
                <span className="text-gray-600">Don't move injured persons unless necessary</span>
              </li>
              <li className="flex items-start">
                <span className="text-traffic-yellow mr-2">•</span>
                <span className="text-gray-600">Use hazard lights and place warning triangles</span>
              </li>
            </ul>
            <Button variant="outline" className="w-full mt-6 rounded-lg border-traffic-yellow text-traffic-yellow hover:bg-traffic-yellow/5">
              Download First Aid Guide
            </Button>
          </div>

          <div className="bg-white rounded-xl shadow-md p-6 border-l-4 border-traffic-green">
            <div className="flex items-start mb-4">
              <div className="bg-traffic-green/10 p-2 rounded-lg mr-4">
                <MapPin className="w-6 h-6 text-traffic-green" />
              </div>
              <h3 className="font-bold text-xl text-traffic-dark">Nearby Help</h3>
            </div>
            <div className="bg-gray-100 rounded-lg h-[150px] flex items-center justify-center mb-4">
              <p className="text-gray-500 text-sm">Interactive map will be displayed here</p>
            </div>
            <p className="text-gray-600 text-sm mb-4">
              Find nearby hospitals, police stations, and emergency services in your area.
            </p>
            <Button className="w-full bg-traffic-green hover:bg-traffic-green/90 text-white rounded-lg">
              Show My Location
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EmergencyInfo;
