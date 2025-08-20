import React from 'react';
import { ExternalLink } from 'lucide-react';
export const ProjectsSection = () => {
  const projects = [{
    title: 'B2B Lead Generation Campaign',
    description: 'Developed and implemented a comprehensive B2B lead generation strategy for commercial vehicle segment, resulting in 30% increase in qualified leads.',
    tags: ['Marketing Strategy', 'Lead Generation', 'B2B Sales'],
    image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }, {
    title: 'CRM Implementation & Optimization',
    description: 'Led the implementation of advanced CRM system with AI-powered analytics, improving customer retention rates by 25% and streamlining sales processes.',
    tags: ['CRM', 'Process Optimization', 'AI Integration'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }, {
    title: 'Market Expansion Analysis',
    description: 'Conducted comprehensive market research and competitor analysis to identify new business opportunities in emerging markets.',
    tags: ['Market Research', 'Strategic Planning', 'Business Development'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }, {
    title: 'Email Marketing Automation',
    description: 'Designed and implemented automated email marketing campaigns that increased open rates by 25% and conversion rates by 15%.',
    tags: ['Marketing Automation', 'Email Campaigns', 'Conversion Optimization'],
    image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1567&q=80'
  }];
  return <section id="projects" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Projects & Case Studies
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
              <div className="h-48 overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-500 hover:scale-110" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  {project.title}
                </h3>
                <p className="text-gray-700 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, i) => <span key={i} className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                      {tag}
                    </span>)}
                </div>
                <a href="#" className="inline-flex items-center text-blue-700 font-medium hover:text-blue-800 transition-colors">
                  View Details
                  <ExternalLink size={16} className="ml-1" />
                </a>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};