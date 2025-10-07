import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { Mail, Phone, MapPin, Send, Instagram, Linkedin, Twitter, Facebook, CheckCircle, AlertCircle } from 'lucide-react';

const ContactUsPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    requirements: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.substring(1);
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);


    const scriptUrl = 'https://script.google.com/macros/s/AKfycbxHesv8xK-O87xE3UYdlsorO5EQBnyLp99SBaro1sN7mLQTmmznL-2RJi-Ztggz61h4/exec';

    try {
      // Replace this URL with your Google Apps Script deployment URL
      const response = await fetch(
        scriptUrl,
        {
          method: "POST",
          mode: "no-cors",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      setSubmitStatus("success");
      setFormData({
        name: "",
        email: "",
        phone: "",
        requirements: "",
      });
    } catch (error) {
      console.error("Error submitting form:", error);
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            Contact Us
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Get in touch with our team. We're here to help you with any questions or concerns.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-8">
              We'd love to hear from you. Send us a message and we'll respond as soon as possible.
            </p>

            <div className="space-y-6">
              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Mail className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Email</p>
                  <p className="text-gray-600">info@cachedigitech.com</p>
                </div>
              </div>

              <div className="flex items-center">
                <div className="flex-shrink-0">
                  <Phone className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Phone</p>
                  <p className="text-gray-600">+1 (800) 309-4333</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Delhi Office</p>
                  <p className="text-gray-600">
                    CRC2 Building Cache Digitech Sultanpur, Delhi 110030
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Mumbai Office</p>
                  <p className="text-gray-600">
                    404,C-Wing, Eastern Court Junction, Tejapal & Parleshwar Road, Vile Parle East, Mumbai, Maharashtra, India (400057)
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0">
                  <MapPin className="h-6 w-6 text-red-600" />
                </div>
                <div className="ml-4">
                  <p className="text-lg font-medium text-gray-900">Dubai Office</p>
                  <p className="text-gray-600">
                    Compass building - Al Hulaila, AL Hulaila Industrial Zone-FZ, Ras Al Khaimah, United Arab Emirates
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">
              Send us a Message
            </h2>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your full name"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your email address"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors"
                  placeholder="Enter your phone number"
                />
              </div>

              <div>
                <label htmlFor="requirements" className="block text-sm font-medium text-gray-700 mb-2">
                  Requirements *
                </label>
                <textarea
                  id="requirements"
                  name="requirements"
                  value={formData.requirements}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-red-500 transition-colors resize-vertical"
                  placeholder="Tell us about your requirements..."
                />
              </div>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-green-600 flex-shrink-0" />
                  <div>
                    <p className="text-green-800 font-medium">Message sent successfully!</p>
                    <p className="text-green-600 text-sm">Thank you for your message. We will get back to you within 24-48 hours.</p>
                  </div>
                </div>
              )}

              {submitStatus === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-center gap-3">
                  <AlertCircle className="h-5 w-5 text-red-600 flex-shrink-0" />
                  <div>
                    <p className="text-red-800 font-medium">Failed to send message</p>
                    <p className="text-red-600 text-sm">Please try again later or contact us directly.</p>
                  </div>
                </div>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full font-medium py-3 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center gap-2 ${
                  isSubmitting
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-red-600 hover:bg-red-700'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="h-5 w-5" />
                    Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>

        {/* Additional Information */}
        <div className="mt-12 bg-red-50 rounded-lg shadow-lg p-8">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Why Choose Cache Digitech?
            </h2>
            <p className="text-gray-600 max-w-3xl mx-auto mb-8">
              We combine deep technical expertise with human understanding, offering accessible global support, world-class infrastructure, and a fantastic team of skilled professionals who deliver excellence with speed and empathy.</p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Quick Response</h3>
                <p className="text-gray-600">We respond to all inquiries within 24 hours</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Expert Support</h3>
                <p className="text-gray-600">Our experienced team is here to help</p>
              </div>

              <div className="text-center">
                <div className="bg-red-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-medium text-gray-900 mb-2">Local Presence</h3>
                <p className="text-gray-600">Serving clients worldwide with local expertise</p>
              </div>
            </div>

            {/* Social Media Links */}
            <div className="mt-8 pt-8 border-t border-gray-300">
              <h3 className="text-lg font-medium text-gray-900 mb-4">Follow Us</h3>
              <div className="flex justify-center space-x-6">
                <a href="https://www.instagram.com/cachetechnologies/" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Instagram className="h-6 w-6" />
                </a>
                <a href="https://www.linkedin.com/company/cache-digitech-pvt-ltd/" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Linkedin className="h-6 w-6" />
                </a>
                <a href="https://x.com/i/flow/login?redirect_after_login=%2Fdigitech_cache" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Twitter className="h-6 w-6" />
                </a>
                <a href="https://www.facebook.com/CacheDigitech01" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Facebook className="h-6 w-6" />
                </a>
                <a href="mailto:info@cachedigitech.com" className="text-gray-600 hover:text-red-600 transition-colors">
                  <Mail className="h-6 w-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUsPage;