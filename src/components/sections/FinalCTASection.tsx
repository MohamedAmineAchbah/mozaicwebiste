import React from 'react';
import { ArrowRight, Calendar, FileText, Rocket, CheckCircle, Clock, Users } from 'lucide-react';

const FinalCTASection = () => {
  const processSteps = [
    {
      icon: Calendar,
      title: '30-Min Discovery Call',
      description: 'Understand your goals and current challenges'
    },
    {
      icon: FileText,
      title: 'Custom Growth Blueprint Delivered',
      description: 'Tailored solution with clear timeline and pricing'
    },
    {
      icon: Rocket,
      title: 'You Decide the Next Step',
      description: 'No obligation, no pressure - just clear next steps'
    }
  ];

  const guarantees = [
    'Strategic Audit',
    'Custom Roadmap', 
    'Multi-axis Solutions',
    'Ongoing Partnership'
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-white/10 rounded-full mix-blend-multiply filter blur-xl animate-float" style={{animationDelay: '2s'}}></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6">
            Stop Juggling. Start Integrating.
          </h2>
          <p className="text-xl text-blue-100 max-w-4xl mx-auto mb-8 leading-relaxed">
            Let's build a clear, actionable plan to grow your business. You'll walk away with a custom digital strategy, 
            regardless of whether you choose to work with us further.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <button className="bg-white text-blue-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-all transform hover:scale-105 flex items-center justify-center space-x-2 shadow-xl">
              <Calendar className="h-6 w-6" />
              <span>Book Your Free Strategy Call</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-all flex items-center justify-center space-x-2">
              <FileText className="h-5 w-5" />
              <span>Download Our Service Guide</span>
            </button>
          </div>
        </div>
        
        {/* Process Preview */}
        <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 lg:p-12 mb-12 border border-white/20">
          <h3 className="text-2xl font-bold text-center mb-8">
            Your Journey to Digital Excellence
          </h3>
          
          <div className="grid md:grid-cols-3 gap-8 relative">
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="text-center relative">
                  <div className="bg-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 backdrop-blur-sm border border-white/30">
                    <Icon className="h-10 w-10" />
                  </div>
                  <h4 className="text-xl font-semibold mb-3">{step.title}</h4>
                  <p className="text-blue-100 leading-relaxed">{step.description}</p>
                  
                  {/* Arrow connector */}
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-10 left-full w-full z-10">
                      <ArrowRight className="h-6 w-6 text-blue-200 mx-auto transform -translate-x-1/2" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
        
        {/* Value Proposition Reminder */}
        <div className="text-center mb-12">
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 inline-block border border-white/20">
            <p className="text-lg font-medium text-blue-100 mb-4">
              What You Get:
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {guarantees.map((guarantee, index) => (
                <div key={index} className="flex items-center space-x-2 bg-white/20 px-4 py-3 rounded-xl backdrop-blur-sm">
                  <CheckCircle className="h-5 w-5 text-green-300 flex-shrink-0" />
                  <span className="text-sm font-medium">{guarantee}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Final Urgency */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-orange-500 to-red-500 rounded-2xl p-6 inline-block shadow-2xl">
            <div className="flex items-center space-x-3 mb-4">
              <Clock className="h-6 w-6 text-white" />
              <p className="text-white font-semibold text-lg">
                Limited spots available for Q1 2025 strategic partnerships
              </p>
            </div>
            <button className="bg-white text-orange-600 px-10 py-4 rounded-xl font-bold text-lg hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg flex items-center space-x-2 mx-auto">
              <Users className="h-5 w-5" />
              <span>Secure Your Spot Today</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTASection;