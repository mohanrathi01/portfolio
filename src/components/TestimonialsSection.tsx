import React from 'react';
import { Quote } from 'lucide-react';
export const TestimonialsSection = () => {
  const testimonials = [{
    quote: 'Mohan demonstrated exceptional marketing acumen during his internship at Tata Motors. His strategic approach to B2B marketing campaigns directly contributed to our market share growth.',
    author: 'Amit Mishra',
    position: 'Senior Marketing Manager',
    company: 'Tata Motors Ltd'
  }, {
    quote: "Mohan's implementation of AI-driven marketing automation tools revolutionized our approach to customer engagement. His innovative thinking and technical skills are truly valuable assets.",
    author: 'Ashish Dalia',
    position: 'Managing Director',
    company: 'I Knowledge Factory Pvt Ltd'
  }, {
    quote: 'Mohan quickly grasped complex business challenges and proposed creative marketing solutions that delivered tangible results. His analytical skills and strategic mindset set him apart.',
    author: 'Nilesh Laddad',
    position: 'Managing Director',
    company: 'Planedge Consultants Pvt Ltd'
  }];
  return <section id="testimonials" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Testimonials
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={index} className="bg-blue-50 rounded-lg shadow-md p-8 relative">
              <Quote size={36} className="absolute top-4 left-4 text-blue-200" />
              <div className="text-gray-700 mb-6 relative z-10">
                "{testimonial.quote}"
              </div>
              <div>
                <h4 className="font-bold text-gray-900">
                  {testimonial.author}
                </h4>
                <p className="text-blue-700">{testimonial.position}</p>
                <p className="text-gray-600 text-sm">{testimonial.company}</p>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};