import React from 'react';
import { BarChart3, Target, Users, Lightbulb, LineChart, Search, MessageCircle } from 'lucide-react';
export const SkillsSection = () => {
  const skills = [{
    name: 'B2B Sales',
    icon: <Users size={36} className="text-blue-700" />,
    description: 'Strategic B2B sales approach focused on relationship building and value proposition'
  }, {
    name: 'Marketing Strategy',
    icon: <Target size={36} className="text-blue-700" />,
    description: 'Development and execution of comprehensive marketing strategies aligned with business goals'
  }, {
    name: 'CRM & Automation',
    icon: <BarChart3 size={36} className="text-blue-700" />,
    description: 'Implementation and optimization of CRM systems and marketing automation workflows'
  }, {
    name: 'Lead Generation',
    icon: <LineChart size={36} className="text-blue-700" />,
    description: 'Innovative approaches to identify and nurture qualified leads through the sales funnel'
  }, {
    name: 'AI-driven Insights',
    icon: <Lightbulb size={36} className="text-blue-700" />,
    description: 'Leveraging AI tools for data analysis and actionable business intelligence'
  }, {
    name: 'Market Research',
    icon: <Search size={36} className="text-blue-700" />,
    description: 'Comprehensive market analysis to identify opportunities and inform strategic decisions'
  }, {
    name: 'Negotiation Skills',
    icon: <MessageCircle size={36} className="text-blue-700" />,
    description: 'Effective communication and negotiation techniques to drive successful outcomes'
  }];
  return <section id="skills" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Skills & Competencies
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex flex-col items-center text-center">
                <div className="mb-4 p-3 bg-blue-100 rounded-full">
                  {skill.icon}
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {skill.name}
                </h3>
                <p className="text-gray-600">{skill.description}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};