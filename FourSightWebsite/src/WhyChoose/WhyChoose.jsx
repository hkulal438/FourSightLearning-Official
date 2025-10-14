import { useState } from 'react';
import { Clock, Award, DollarSign, ShieldCheck, TrendingUp, Sparkles } from 'lucide-react';
import '../WhyChoose/WhyChoose.css';

export default function WhyChooseSection() {
  const [activeCategory, setActiveCategory] = useState('services');

  const whyChooseData = {
    services: [
      { name: "24/7 Customer Support", description: "Always available to assist you, day or night", distance: "24 hrs", walkTime: "Instant Help" },
      { name: "Quick Response", description: "Immediate action and service", distance: "0 Delay", walkTime: "Fast Service" },
      { name: "Dedicated Assistance", description: "Personalized attention to your needs", distance: "Always On", walkTime: "Real-Time" },
      { name: "Hassle-Free Process", description: "Smooth and simple experience every time", distance: "Easy", walkTime: "Seamless" },
    ],
    quality: [
      { name: "Premium Materials", description: "We use only high-grade components", distance: "Top-notch", walkTime: "Reliable" },
      { name: "Expert Team", description: "Qualified professionals ensuring perfection", distance: "Skilled", walkTime: "Certified" },
      { name: "Consistent Standards", description: "Maintaining quality across all operations", distance: "Guaranteed", walkTime: "Uniform" },
      { name: "Trusted Brands", description: "Partnered with industry leaders", distance: "Recognized", walkTime: "Reputed" },
    ],
    affordability: [
      { name: "Competitive Pricing", description: "Best value for your money", distance: "Budget-Friendly", walkTime: "Smart Choice" },
      { name: "Transparent Costs", description: "No hidden charges, ever", distance: "Clear", walkTime: "Honest" },
      { name: "Flexible Plans", description: "Options for every budget", distance: "Customizable", walkTime: "Adaptable" },
      { name: "Discounts & Offers", description: "Exciting deals year-round", distance: "Save More", walkTime: "Rewarding" },
    ],
    trust: [
      { name: "Certified Excellence", description: "Recognized by top authorities", distance: "Verified", walkTime: "Approved" },
      { name: "Customer Satisfaction", description: "Thousands of happy clients", distance: "5-Star Rated", walkTime: "Reliable" },
      { name: "Safe & Secure", description: "Your data and experience are protected", distance: "Secure", walkTime: "Protected" },
      { name: "Long-Term Reliability", description: "We’re here for the long run", distance: "Sustainable", walkTime: "Committed" },
    ],
    innovation: [
      { name: "Cutting-Edge Technology", description: "Leveraging modern tools and systems", distance: "Next-Gen", walkTime: "Smart" },
      { name: "Creative Solutions", description: "Innovating to solve your challenges", distance: "Unique", walkTime: "Inspired" },
      { name: "Continuous Improvement", description: "Evolving with every step", distance: "Adaptive", walkTime: "Progressive" },
      { name: "Vision-Driven Team", description: "Future-ready mindset", distance: "Forward", walkTime: "Motivated" },
    ]
  };

  const categories = [
    { id: 'services', title: '24-Hour Services', icon: <Clock size={24} /> },
    { id: 'quality', title: 'Best Quality', icon: <Award size={24} /> },
    { id: 'affordability', title: 'Affordable Pricing', icon: <DollarSign size={24} /> },
    { id: 'trust', title: 'Trusted & Secure', icon: <ShieldCheck size={24} /> },
    { id: 'innovation', title: 'Innovation & Growth', icon: <TrendingUp size={24} /> },
  ];

  return (
    <div className="whychoose-container">
      <div className="whychoose-header">
        <Sparkles size={32} className="whychoose-header-icon" />
        <h2 className="whychoose-header-title">Why Choose Us</h2>
      </div>
      
      <div className="whychoose-content">
        <div className="whychoose-tabs">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`whychoose-tab ${activeCategory === category.id ? 'active' : ''}`}
            >
              <span className="whychoose-tab-icon">{category.icon}</span>
              <span className="whychoose-tab-title">{category.title}</span>
            </button>
          ))}
        </div>

        <div className="whychoose-grid">
          {whyChooseData[activeCategory].map((item, index) => (
            <div key={index} className="whychoose-card">
              <div className="whychoose-card-content">
                <h3 className="whychoose-name">{item.name}</h3>
                <p className="whychoose-description">{item.description}</p>
                <div className="whychoose-details">
                  <div className="whychoose-distance">
                    <ShieldCheck className="whychoose-icon" />
                    <span>{item.distance}</span>
                  </div>
                  <div className="whychoose-walktime">
                    <Clock className="whychoose-icon" />
                    <span>{item.walkTime}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
