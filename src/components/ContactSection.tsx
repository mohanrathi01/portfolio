import React, { useState } from 'react';
import { Mail, Phone, Linkedin, Send } from 'lucide-react';
export const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const handleChange = e => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = e => {
    e.preventDefault();
    // In a real implementation, you would send the form data to a server
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    // Reset the submission status after 5 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };
  return <section id="contact" className="py-20 bg-blue-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-blue-700 mx-auto"></div>
        </div>
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Contact Information
              </h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Mail size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Email</h4>
                    <a href="mailto:moharathi99@gmail.com" className="text-blue-700 hover:text-blue-800 transition-colors">
                      moharathi99@gmail.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Phone size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Phone</h4>
                    <a href="tel:+917350327797" className="text-blue-700 hover:text-blue-800 transition-colors">
                      +91 7350327797
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-3 rounded-full mr-4">
                    <Linkedin size={24} className="text-blue-700" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">LinkedIn</h4>
                    <a href="https://www.linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-blue-700 hover:text-blue-800 transition-colors">
                      Connect on LinkedIn
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Send Me a Message
              </h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-1">
                    Name
                  </label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-1">
                    Email
                  </label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="subject" className="block text-gray-700 font-medium mb-1">
                    Subject
                  </label>
                  <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required />
                </div>
                <div>
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-1">
                    Message
                  </label>
                  <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows={5} className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500" required></textarea>
                </div>
                <button type="submit" className="inline-flex items-center px-6 py-3 bg-blue-700 text-white font-medium rounded-lg hover:bg-blue-800 transition-colors shadow-lg">
                  <Send size={18} className="mr-2" />
                  Send Message
                </button>
                {isSubmitted && <div className="mt-4 p-3 bg-green-100 text-green-700 rounded-lg">
                    Your message has been sent successfully!
                  </div>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>;
};