import React from 'react';
import { GraduationCap, Briefcase, BookOpen } from 'lucide-react';
export const AboutSection = () => {
  return <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            About Me
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-700 mb-8 text-center">
            MBA Marketing candidate with a passion for B2B marketing strategies
            and business development. I specialize in leveraging AI-powered
            tools and marketing automation to drive measurable growth and
            optimize customer relationship management.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <GraduationCap size={24} className="text-blue-700 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Education</h3>
              </div>
              <p className="text-gray-700">
                MBA Marketing
                <br />
                ICFAI Business School
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <Briefcase size={24} className="text-blue-700 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Experience</h3>
              </div>
              <p className="text-gray-700">
                Internships at Tata Motors, Planedge Consultants, and I
                Knowledge Factory
              </p>
            </div>
            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
              <div className="flex items-center mb-4">
                <BookOpen size={24} className="text-blue-700 mr-3" />
                <h3 className="text-xl font-bold text-gray-900">Expertise</h3>
              </div>
              <p className="text-gray-700">
                B2B Marketing, CRM Optimization, Marketing Automation, AI
                Integration
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>;
};