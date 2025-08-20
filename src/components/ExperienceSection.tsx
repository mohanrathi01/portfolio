import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';
export const ExperienceSection = () => {
  const experiences = [{
    company: 'Tata Motors Ltd',
    position: 'Marketing Intern',
    duration: 'Feb 2025 - May 2025',
    achievements: ['Increased ILMCV segment market share by 5% through targeted B2B marketing campaigns', 'Developed comprehensive marketing strategy for commercial vehicle division', 'Optimized lead generation process resulting in 15% increase in qualified leads'],
    logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8e/Tata_logo.svg/2560px-Tata_logo.svg.png'
  }, {
    company: 'I Knowledge Factory Pvt Ltd',
    position: 'Sales and Marketing Automation Intern',
    duration: 'Jan 2023 - June 2023',
    achievements: ['Boosted email campaign open rates by 25% through improved targeting and content strategy', 'Implemented AI-driven CRM solutions that increased customer retention by 18%', 'Conducted market research identifying 3 new business opportunities'],
    logo: "/IKF.png"
  }, {
    company: 'Planedge Consultants Pvt Ltd',
    position: 'Business Development Intern',
    duration: 'Feb 2022 - July 2022',
    achievements: ['Built B2B lead pipeline resulting in 12 new enterprise clients', 'Assisted in redesigning marketing collateral that improved brand perception', 'Contributed to social media strategy that increased engagement by 30%'],
    logo: "/planege.jpg"
  }];
  return <section id="experience" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Professional Experience
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="max-w-5xl mx-auto">
          <div className="space-y-12">
            {experiences.map((exp, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-1/3 bg-blue-50 p-6 flex items-center justify-center">
                    <div className="w-full">
                      <div className="flex justify-center mb-4">
                        <div className="w-16 h-16 bg-white rounded-full shadow-md flex items-center justify-center overflow-hidden">
                          <img src={exp.logo} alt={exp.company} className="w-12 h-12 object-contain" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold text-center text-gray-900 mb-2">
                        {exp.company}
                      </h3>
                      <p className="text-blue-700 font-medium text-center mb-2">
                        {exp.position}
                      </p>
                      <div className="flex items-center justify-center text-gray-500 text-sm">
                        <Calendar size={14} className="mr-1" />
                        <span>{exp.duration}</span>
                      </div>
                    </div>
                  </div>
                  <div className="md:w-2/3 p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-3">
                      Key Achievements
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.map((achievement, i) => <li key={i} className="flex items-start">
                          <ArrowRight size={16} className="text-blue-700 mr-2 mt-1 flex-shrink-0" />
                          <span className="text-gray-700">{achievement}</span>
                        </li>)}
                    </ul>
                  </div>
                </div>
              </div>)}
          </div>
        </div>
      </div>
    </section>;
};