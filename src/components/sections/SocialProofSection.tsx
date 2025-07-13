import React from 'react';
import { Star, Quote, Shield, Award, TrendingUp, Users } from 'lucide-react';

const SocialProofSection = () => {
  const clientLogos = [
    'TechStart Solutions',
    'Creative Agency Co',
    'Global Retail Corp',
    'Innovation Labs',
    'Digital Dynamics',
    'Future Systems'
  ];

  const testimonials = [
    {
      quote: "MOZAIC transformed our entire digital strategy. Their multi-axis approach saved us months of coordination headaches and delivered results beyond our expectations.",
      author: "Jennifer Liu",
      title: "CEO, TechStart Solutions",
      rating: 5,
      result: "340% lead increase",
      avatar: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "The AI-enhanced creative work exceeded our expectations. Our conversion rates improved by 60% in just 3 months, and the quality is consistently outstanding.",
      author: "David Martinez",
      title: "Marketing Director, Creative Agency Co",
      rating: 5,
      result: "60% conversion boost",
      avatar: "https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg?auto=compress&cs=tinysrgb&w=100"
    },
    {
      quote: "Finally, a team that understands both the technical and strategic sides of digital transformation. They're true partners in our growth journey.",
      author: "Priya Patel",
      title: "CTO, Global Retail Corp",
      rating: 5,
      result: "$2.3M revenue growth",
      avatar: "https://images.pexels.com/photos/3760067/pexels-photo-3760067.jpeg?auto=compress&cs=tinysrgb&w=100"
    }
  ];

  const certifications = [
    {
      name: 'AWS Partner',
      description: 'Cloud Solutions',
      icon: Shield,
      color: 'bg-orange-500'
    },
    {
      name: 'Meta Business',
      description: 'Advertising Certified',
      icon: TrendingUp,
      color: 'bg-blue-500'
    },
    {
      name: 'Google Partner',
      description: 'Ads & Analytics',
      icon: Award,
      color: 'bg-green-500'
    },
    {
      name: 'SOC 2 Compliant',
      description: 'Security Standards',
      icon: Shield,
      color: 'bg-purple-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Client Logos */}
        <div className="text-center mb-16 scroll-reveal">
          <div className="inline-flex items-center space-x-2 bg-green-50 rounded-full px-6 py-3 mb-6 border border-green-200">
            <Users className="h-5 w-5 text-green-600" />
            <span className="text-sm font-semibold text-green-700">Trusted Worldwide</span>
          </div>
          
          <h2 className="text-2xl font-bold text-slate-900 mb-8">
            Trusted by Forward-Thinking Companies
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6 items-center">
            {clientLogos.map((client, index) => (
              <div 
                key={index} 
                className="interactive-element bg-white rounded-xl p-6 shadow-lg border border-slate-200 group"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                <div className="text-center">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-teal-500 rounded-lg mx-auto mb-3 flex items-center justify-center">
                    <span className="text-white font-bold text-lg">
                      {client.split(' ').map(word => word[0]).join('')}
                    </span>
                  </div>
                  <span className="text-slate-700 font-semibold text-sm leading-tight">{client}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Testimonials */}
        <div className="mb-16 scroll-reveal">
          <h2 className="text-4xl lg:text-5xl font-bold text-slate-900 text-center mb-12">
            What Our <span className="gradient-text">Clients Say</span>
          </h2>
          
          <div className="grid lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index} 
                className="testimonial-card bg-white rounded-2xl p-8 shadow-xl border border-slate-200 relative"
                style={{animationDelay: `${index * 0.1}s`}}
              >
                {/* Rating stars */}
                <div className="flex items-center mb-6">
                  {Array.from({ length: testimonial.rating }).map((_, starIndex) => (
                    <Star key={starIndex} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                  <span className="ml-2 text-sm font-semibold text-slate-600">
                    {testimonial.rating}.0
                  </span>
                </div>
                
                {/* Quote icon */}
                <Quote className="h-10 w-10 text-blue-200 mb-4" />
                
                {/* Testimonial text */}
                <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                  "{testimonial.quote}"
                </p>
                
                {/* Result highlight */}
                <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-lg p-3 mb-6 border border-green-200">
                  <div className="flex items-center space-x-2">
                    <TrendingUp className="h-4 w-4 text-green-600" />
                    <span className="text-green-800 font-semibold text-sm">
                      Result: {testimonial.result}
                    </span>
                  </div>
                </div>
                
                {/* Author info */}
                <div className="flex items-center space-x-4 pt-6 border-t border-slate-200">
                  <img 
                    src={testimonial.avatar} 
                    alt={testimonial.author}
                    className="w-12 h-12 rounded-full object-cover ring-2 ring-slate-200"
                  />
                  <div>
                    <p className="font-bold text-slate-900">{testimonial.author}</p>
                    <p className="text-slate-600 text-sm">{testimonial.title}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Certifications/Partnerships */}
        <div className="scroll-reveal">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-xl border border-slate-200">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-slate-900 mb-4 flex items-center justify-center space-x-2">
                <Award className="h-6 w-6 text-blue-600" />
                <span>Certified & Partnered for Excellence</span>
              </h3>
              <p className="text-slate-600 max-w-2xl mx-auto">
                Our certifications and partnerships ensure we deliver solutions using 
                industry-leading technologies and best practices
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {certifications.map((cert, index) => {
                const Icon = cert.icon;
                return (
                  <div 
                    key={index} 
                    className="interactive-element bg-gradient-to-br from-slate-50 to-blue-50 rounded-xl p-6 text-center border border-slate-200"
                  >
                    <div className={`${cert.color} w-12 h-12 rounded-lg mx-auto mb-4 flex items-center justify-center`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-bold text-slate-900 mb-2">{cert.name}</h4>
                    <p className="text-slate-600 text-sm">{cert.description}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProofSection;