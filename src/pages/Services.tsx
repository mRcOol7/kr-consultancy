import React from 'react';

export default function Services() {
  const services = [
    {
      title: 'Permanent Staffing',
      description: 'Our permanent staffing solutions connect organizations with top-tier talent for long-term success. We understand that finding the right permanent employees is crucial for organizational growth and stability. Our thorough screening process ensures that candidates not only match the required skills but also align with your company culture.',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&q=80'
    },
    {
      title: 'Contract Hiring & Temporary Staffing',
      description: 'Flexible workforce solutions designed to meet your temporary and project-based staffing needs. We provide skilled professionals for short-term assignments, seasonal peaks, and special projects. Our temporary staffing service helps you maintain productivity while managing costs effectively.',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&fit=crop&q=80'
    },
    {
      title: 'HR Consulting & Compliance',
      description: 'Expert guidance on HR best practices, policy development, and regulatory compliance. Our consultants help organizations build robust HR frameworks, ensure legal compliance, and implement effective HR strategies. We stay updated with the latest labor laws and industry regulations.',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&q=80'
    },
    {
      title: 'Bulk Hiring Solutions',
      description: 'Streamlined mass recruitment services for large-scale hiring needs. Whether you are expanding operations, opening new locations, or staffing entire departments, our bulk hiring solutions ensure efficient and quality-focused recruitment at scale.',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&q=80'
    },
    {
      title: 'Employer Branding Support',
      description: 'Strategic services to enhance your employer brand and attract top talent. We help you showcase your company culture, values, and opportunities to potential candidates. Our employer branding solutions include social media presence, career page optimization, and recruitment marketing.',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?auto=format&fit=crop&q=80'
    },
    {
      title: 'Low-Budget Placement Solutions',
      description: 'Cost-effective recruitment solutions without compromising on quality. We understand budget constraints and offer tailored placement services that maximize value while minimizing costs. Our efficient processes and extensive candidate database help reduce time-to-hire and recruitment expenses.',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-20">
      <div className="container mx-auto px-4 sm:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Comprehensive recruitment and HR solutions tailored to meet your organizations unique needs
          </p>
        </div>
        
        <div className="space-y-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`flex flex-col ${
                index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-12 items-center`}
            >
              <div className="w-full lg:w-1/2 overflow-hidden rounded-2xl">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-[300px] md:h-[400px] object-cover transform hover:scale-105 transition duration-500"
                />
              </div>
              <div className="w-full lg:w-1/2 space-y-6">
                <h3 className="text-2xl md:text-3xl font-bold text-gray-800">{service.title}</h3>
                <p className="text-gray-600 leading-relaxed text-lg">{service.description}</p>
                <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transform hover:-translate-y-1 transition duration-300 shadow-lg">
                  Learn More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}