import React from 'react';
import { Clock, DollarSign, BarChart3, BookOpen } from 'lucide-react';

const AdvantagesSection = () => {
  const advantages = [
    {
      id: 1,
      icon: Clock,
      title: "Save Time",
      description: "No More Switching For Packages Or Plans."
    },
    {
      id: 2,
      icon: DollarSign,
      title: "Save Money", 
      description: "Compare, Negotiate, And Choose The Best."
    },
    {
      id: 3,
      icon: BarChart3,
      title: "Trusted Network",
      description: "A Trusted Network Of 7000+ Travel Agents"
    },
    {
      id: 4,
      icon: BookOpen,
      title: "Multiple Options",
      description: "Itineraries & Travel Tips From Trusted Agents"
    }
  ];

  return (
    <section className="py-20 bg-teal-400">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Advantages
          </h2>
          <p className="text-lg text-white max-w-3xl mx-auto">
            You can rely on our experience and the quality of services we provide.
            Here are other reasons to book tours at Treat Holidays
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage) => (
            <div
              key={advantage.id}
              className="text-center"
            >
              {/* Icon Circle */}
              <div className="w-24 h-24 md:w-28 md:h-28 bg-white rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <advantage.icon className="w-12 h-12 md:w-14 md:h-14 text-teal-500" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                {advantage.title}
              </h3>
              
              <p className="text-white leading-relaxed">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantagesSection;