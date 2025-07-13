import React from 'react';
import { useParams } from 'react-router-dom';
import { ArrowRight, Check, Star, Sparkles, Award, Clock, Users, Play, Zap } from 'lucide-react';

const ServicePage = () => {
  const { service } = useParams();
  
  // This would normally come from a data source
  const serviceData = {
    'creative-studio': {
      name: 'AI-Enhanced Creative Studio',
      tagline: 'Artistry at Scale.',
      benefit: 'We produce visually stunning, on-brand creative at a volume and speed that traditional studios can\'t match. From viral short-form content to epic brand films, we give you the assets you need to dominate your market.',
      description: 'Our AI-Enhanced Creative Studio combines human creativity with artificial intelligence to produce high-quality visual content, copy, and brand materials at unprecedented speed and scale.',
      heroImage: 'https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1200',
      includes: [
        'AI-Based Short-Form Content (Reels, TikToks)',
        'High-End Brand Films & Commercials',
        'Advanced Motion Graphics & VFX',
        'Scalable Multi-Format Content Systems',
        'Hybrid Creative (Human Direction + AI Execution)'
      ],
      process: [
        { 
          title: 'Creative Strategy', 
          description: 'We define your narrative, visual language, and performance goals.' 
        },
        { 
          title: 'AI-Powered Production', 
          description: 'We leverage a suite of AI tools for rapid ideation, asset generation, and post-production, guided by our senior creative directors.' 
        },
        { 
          title: 'Refinement & Delivery', 
          description: 'We add the human touch—final color, sound design, and editing—to deliver polished assets ready for deployment.' 
        }
      ],
      packages: [
        {
          name: 'Spark',
          price: '$2,500/month',
          description: 'Perfect for social media content packages.',
          features: ['10 social posts/week', 'Basic video editing', 'Monthly strategy call', 'Performance tracking'],
          popular: false
        },
        {
          name: 'Echo',
          price: '$5,000/month',
          description: 'Ideal for integrated digital campaigns.',
          features: ['Unlimited social content', 'Advanced video production', 'Multi-channel campaigns', 'Weekly strategy calls', 'A/B testing'],
          popular: true
        },
        {
          name: 'Monolith',
          price: 'Custom',
          description: 'For flagship brand films and major projects.',
          features: ['Full creative team access', 'Custom AI training', 'White-label solutions', 'Dedicated account manager', 'Priority support'],
          popular: false
        }
      ],
      stats: [
        { number: '10x', label: 'Faster Content Creation' },
        { number: '340%', label: 'Average ROI Increase' },
        { number: '50+', label: 'Brands Transformed' },
        { number: '24/7', label: 'AI-Powered Support' }
      ]
    }
    // Add other services here...
  };

  const currentService = serviceData[service as keyof typeof serviceData];

  if (!currentService) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Service Not Found</h1>
          <p className="text-slate-600 mb-8">The service you're looking for doesn't exist.</p>
          <button className="btn-primary text-white px-6 py-3 rounded-lg font-semibold">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      {/* Enhanced Header Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float"></div>
          <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-purple-400 rounded-full mix-blend-multiply filter blur-xl opacity-20 animate-float" style={{animationDelay: '2s'}}></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center space-x-2 bg-blue-50 rounded-full px-6 py-3 mb-6 border border-blue-200">
                <Sparkles className="h-5 w-5 text-blue-600" />
                <span className="text-sm font-semibold text-blue-700">Premium Service</span>
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight">
                {currentService.name}
              </h1>
              <p className="text-3xl font-bold gradient-text mb-6 leading-tight">
                {currentService.tagline}
              </p>
              <p className="text-xl text-slate-600 mb-8 leading-relaxed">
                {currentService.benefit}
              </p>
              
              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-8">
                {currentService.stats.map((stat, index) => (
                  <div key={index} className="text-center bg-white rounded-xl p-4 shadow-lg border border-slate-200">
                    <div className="text-2xl font-bold gradient-text">{stat.number}</div>
                    <div className="text-sm text-slate-600">{stat.label}</div>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="btn-primary text-white px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2 group">
                  <span>Start a Creative Project</span>
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button className="btn-secondary text-blue-600 px-8 py-4 rounded-xl font-semibold text-lg inline-flex items-center justify-center space-x-2">
                  <Play className="h-5 w-5" />
                  <span>See our AI Reel</span>
                </button>
              </div>
            </div>
            
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl border border-slate-200">
                <img 
                  src={currentService.heroImage} 
                  alt={currentService.name}
                  className="w-full h-96 object-cover"
                />
              </div>
              {/* Floating elements */}
              <div className="absolute -top-4 -right-4 bg-green-500 text-white p-3 rounded-xl shadow-lg">
                <Award className="h-6 w-6" />
              </div>
              <div className="absolute -bottom-4 -left-4 bg-blue-500 text-white p-3 rounded-xl shadow-lg">
                <Sparkles className="h-6 w-6" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Service Breakdown */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <Check className="h-8 w-8 text-green-500 mr-3" />
                What's Included
              </h2>
              <div className="space-y-4">
                {currentService.includes.map((item, index) => (
                  <div key={index} className="flex items-start space-x-4 p-4 bg-green-50 rounded-xl border border-green-200">
                    <Check className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <span className="text-slate-700 leading-relaxed font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-8 flex items-center">
                <Clock className="h-8 w-8 text-blue-500 mr-3" />
                How It Works
              </h2>
              <div className="space-y-6">
                {currentService.process.map((step, index) => (
                  <div key={index} className="flex items-start space-x-4 p-6 bg-blue-50 rounded-xl border border-blue-200">
                    <div className="bg-blue-600 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-lg flex-shrink-0">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 mb-2 text-lg">{step.title}</h3>
                      <p className="text-slate-600 leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Pricing Packages */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-purple-50 rounded-full px-6 py-3 mb-6 border border-purple-200">
              <Award className="h-5 w-5 text-purple-600" />
              <span className="text-sm font-semibold text-purple-700">Flexible Pricing</span>
            </div>
            <h2 className="text-4xl font-bold text-slate-900 mb-4">Choose Your Package</h2>
            <p className="text-xl text-slate-600">Flexible options to match your needs and budget</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {currentService.packages.map((pkg, index) => (
              <div key={index} className={`bg-white rounded-3xl p-8 shadow-2xl border-2 relative overflow-hidden
                ${pkg.popular ? 'border-blue-500 scale-105' : 'border-slate-200'}
              `}>
                {pkg.popular && (
                  <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-blue-500 to-teal-500 text-white text-center py-3 font-semibold">
                    Most Popular
                  </div>
                )}
                
                <div className={pkg.popular ? 'mt-8' : ''}>
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">{pkg.name}</h3>
                  <p className="text-4xl font-bold gradient-text mb-4">{pkg.price}</p>
                  <p className="text-slate-600 mb-6 leading-relaxed">{pkg.description}</p>
                  
                  <ul className="space-y-4 mb-8">
                    {pkg.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center space-x-3">
                        <Check className="h-5 w-5 text-green-500 flex-shrink-0" />
                        <span className="text-slate-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all duration-300 flex items-center justify-center space-x-2 ${
                    pkg.popular 
                      ? 'bg-gradient-to-r from-blue-600 to-teal-600 text-white hover:from-blue-700 hover:to-teal-700 shadow-lg' 
                      : 'border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white'
                  }`}>
                    <Users className="h-5 w-5" />
                    <span>Get Started</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-br from-blue-600 to-teal-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Create? Let's Talk.</h2>
          <p className="text-xl text-blue-100 mb-8 leading-relaxed">
            Join innovative companies who've accelerated their content creation with AI-enhanced creative solutions
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
            <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:bg-blue-50 transition-colors inline-flex items-center justify-center space-x-2">
              <Zap className="h-5 w-5" />
              <span>Start Your Creative Project</span>
            </button>
            <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-blue-600 transition-colors inline-flex items-center space-x-2">
              <Play className="h-5 w-5" />
              <span>See Our AI Reel</span>
            </button>
          </div>
          
          <p className="text-blue-200">
            Free consultation • No commitment required • Results guaranteed
          </p>
        </div>
      </section>
    </div>
  );
};

export default ServicePage;