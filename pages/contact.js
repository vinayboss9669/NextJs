import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import { Geist } from "next/font/google";

const geist = Geist({
  subsets: ["latin"],
});

const Contact = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        desc: ''
    });
    
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState(null);
    const [isPageLoaded, setIsPageLoaded] = useState(false);
    const [isFieldFocused, setIsFieldFocused] = useState({
        name: false,
        email: false,
        phone: false,
        desc: false
    });

    useEffect(() => {
        setIsPageLoaded(true);
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (field) => {
        setIsFieldFocused(prev => ({
            ...prev,
            [field]: true
        }));
    };

    const handleBlur = (field) => {
        setIsFieldFocused(prev => ({
            ...prev,
            [field]: false
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        setIsSubmitting(true);
        
        try {
            const response = await fetch('/api/postcontect', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            
            const data = await response.json();
            
            if (response.ok) {
                setSubmitStatus({ success: true, message: 'Thank you! Your message has been sent successfully.' });
                setFormData({
                    name: '',
                    email: '',
                    phone: '',
                    desc: ''
                });
            } else {
                setSubmitStatus({ success: false, message: data.message || 'Something went wrong. Please try again.' });
            }
        } catch (error) {
            setSubmitStatus({ success: false, message: 'Network error. Please check your connection and try again.' });
        } finally {
            setIsSubmitting(false);
            
            // Clear the status message after 5 seconds
            setTimeout(() => {
                setSubmitStatus(null);
            }, 5000);
        }
    };

    return (
        <div className={geist.className}>
            <Head>
                <title>Contact Us | Hunting Coder</title>
                <meta name="description" content="Get in touch with Hunting Coder. We'd love to hear from you!" />
            </Head>
            
            <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
                {/* Hero Section */}
                <div className={`relative bg-gradient-to-r from-blue-600 to-indigo-700 py-16 overflow-hidden transition-all duration-1000 ${isPageLoaded ? 'opacity-100' : 'opacity-0'}`}>
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute inset-0">
                            <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                                <defs>
                                    <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                                        <path d="M0 40L40 0M20 40L40 20M0 20L20 0" fill="none" stroke="white" strokeWidth="1"/>
                                    </pattern>
                                </defs>
                                <rect width="100%" height="100%" fill="url(#grid)" />
                            </svg>
                        </div>
                    </div>
                    
                    <div className="container mx-auto px-6 relative z-10 text-center">
                        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                            Get In Touch
                        </h1>
                        <p className="text-xl text-blue-100 max-w-2xl mx-auto">
                            We'd love to hear from you. Send us a message and we'll respond as soon as possible.
                        </p>
                    </div>
                    
                    {/* Wave divider */}
                    <div className="absolute bottom-0 left-0 w-full overflow-hidden">
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white h-12 md:h-16 w-full">
                            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25"></path>
                            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5"></path>
                            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z"></path>
                        </svg>
                    </div>
                </div>
                
                {/* Contact Form Section */}
                <div className="container mx-auto px-6 py-12">
                    <div className="max-w-4xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {/* Contact Info */}
                            <div className={`md:col-span-1 transition-all duration-1000 delay-300 ${isPageLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
                                <div className="bg-white rounded-xl shadow-lg p-6">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
                                    
                                    <div className="space-y-6">
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-600">Email</h3>
                                                <p className="text-blue-600">contact@huntingcoder.com</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-600">Phone</h3>
                                                <p className="text-blue-600">+1 234 567 890</p>
                                            </div>
                                        </div>
                                        
                                        <div className="flex items-start">
                                            <div className="bg-blue-100 p-2 rounded-full mr-4">
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                                </svg>
                                            </div>
                                            <div>
                                                <h3 className="text-sm font-semibold text-gray-600">Location</h3>
                                                <p className="text-gray-800">123 Coding Street</p>
                                                <p className="text-gray-800">Tech Valley, CA 94043</p>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-10">
                                        <h3 className="text-lg font-semibold text-gray-800 mb-4">Connect With Us</h3>
                                        <div className="flex space-x-4">
                                            {['twitter', 'facebook', 'instagram', 'github'].map(platform => (
                                                <a 
                                                    key={platform}
                                                    href={`https://${platform}.com/huntingcoder`} 
                                                    target="_blank" 
                                                    rel="noopener noreferrer"
                                                    className="bg-gray-100 hover:bg-blue-100 p-2 rounded-full transition-colors"
                                                >
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-600 hover:text-blue-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                                                    </svg>
                                                </a>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            {/* Contact Form */}
                            <div className={`md:col-span-2 transition-all duration-1000 delay-500 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
                                    <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                                    
                                    {submitStatus && (
                                        <div className={`mb-6 p-4 rounded-lg ${submitStatus.success ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'} transition-all duration-500 animate-fadeIn`}>
                                            {submitStatus.message}
                                        </div>
                                    )}
                                    
                                    <form onSubmit={handleSubmit}>
                                        <div className="mb-6">
                                            <div className={`relative border ${isFieldFocused.name ? 'border-blue-500' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                                                <input
                                                    type="text"
                                                    id="name"
                                                    name="name"
                                                    required
                                                    className="block w-full px-4 py-3 text-gray-900 placeholder-transparent rounded-lg focus:outline-none peer"
                                                    placeholder="Your Name"
                                                    value={formData.name}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('name')}
                                                    onBlur={() => handleBlur('name')}
                                                />
                                                <label 
                                                    htmlFor="name"
                                                    className={`absolute left-4 -top-2.5 text-sm transition-all bg-white px-1
                                                    ${isFieldFocused.name || formData.name ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                    Your Name
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <div className={`relative border ${isFieldFocused.email ? 'border-blue-500' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    name="email"
                                                    required
                                                    className="block w-full px-4 py-3 text-gray-900 placeholder-transparent rounded-lg focus:outline-none peer"
                                                    placeholder="Email Address"
                                                    value={formData.email}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('email')}
                                                    onBlur={() => handleBlur('email')}
                                                />
                                                <label 
                                                    htmlFor="email"
                                                    className={`absolute left-4 -top-2.5 text-sm transition-all bg-white px-1
                                                    ${isFieldFocused.email || formData.email ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                    Email Address
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <div className={`relative border ${isFieldFocused.phone ? 'border-blue-500' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                                                <input
                                                    type="tel"
                                                    id="phone"
                                                    name="phone"
                                                    required
                                                    className="block w-full px-4 py-3 text-gray-900 placeholder-transparent rounded-lg focus:outline-none peer"
                                                    placeholder="Phone Number"
                                                    value={formData.phone}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('phone')}
                                                    onBlur={() => handleBlur('phone')}
                                                />
                                                <label 
                                                    htmlFor="phone"
                                                    className={`absolute left-4 -top-2.5 text-sm transition-all bg-white px-1
                                                    ${isFieldFocused.phone || formData.phone ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                    Phone Number
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <div className="mb-6">
                                            <div className={`relative border ${isFieldFocused.desc ? 'border-blue-500' : 'border-gray-300'} rounded-lg transition-all duration-300`}>
                                                <textarea
                                                    id="desc"
                                                    name="desc"
                                                    required
                                                    rows="5"
                                                    className="block w-full px-4 py-3 text-gray-900 placeholder-transparent rounded-lg focus:outline-none peer"
                                                    placeholder="Your Message"
                                                    value={formData.desc}
                                                    onChange={handleChange}
                                                    onFocus={() => handleFocus('desc')}
                                                    onBlur={() => handleBlur('desc')}
                                                ></textarea>
                                                <label 
                                                    htmlFor="desc"
                                                    className={`absolute left-4 -top-2.5 text-sm transition-all bg-white px-1
                                                    ${isFieldFocused.desc || formData.desc ? 'text-blue-600' : 'text-gray-600'}`}
                                                >
                                                    Your Message
                                                </label>
                                            </div>
                                        </div>
                                        
                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white font-medium rounded-lg transition-all transform hover:-translate-y-1 hover:shadow-lg ${isSubmitting ? 'opacity-75 cursor-not-allowed' : ''}`}
                                        >
                                            {isSubmitting ? (
                                                <span className="flex items-center justify-center">
                                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                                                    </svg>
                                                    Sending...
                                                </span>
                                            ) : 'Submit Message'}
                                        </button>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
                {/* Map Section */}
                <div className={`container mx-auto px-6 py-12 transition-all duration-1000 delay-700 ${isPageLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                    <div className="max-w-4xl mx-auto">
                        <div className="rounded-xl overflow-hidden shadow-lg h-64 md:h-80 bg-gray-200">
                            {/* Placeholder for Google Map (in real app, integrate an actual map) */}
                            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                                <div className="text-center">
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 text-gray-400 mx-auto mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
                                    <p className="text-gray-500">Map location would appear here</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            {/* Global animations */}
            <style jsx global>{`
                @keyframes fadeIn {
                    from { opacity: 0; }
                    to { opacity: 1; }
                }
                
                .animate-fadeIn {
                    animation: fadeIn 0.5s ease-in-out;
                }
            `}</style>
        </div>
    );
};

export default Contact;