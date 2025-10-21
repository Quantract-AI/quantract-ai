"use client";

import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import Link from "next/link";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "success" | "error">("idle");

  // ✅ Handle input changes
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // ✅ Handle form submission
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!form.current) return;

    emailjs
      .sendForm("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", form.current, {
        publicKey: "YOUR_PUBLIC_KEY",
      })
      .then(
        () => {
          console.log("SUCCESS!");
          setStatus("success");
          setFormData({ name: "", email: "", company: "", message: "" });
          form.current?.reset();
        },
        (error) => {
          console.error("FAILED...", error.text);
          setStatus("error");
        }
      );
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#393939] to-gray-700 text-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-6">
              Get in <span className="text-[#f1c40f]">Touch</span>
            </h1>
            <p className="text-xl text-gray-200 max-w-3xl mx-auto">
              Ready to transform your business with AI? Let's discuss your
              project and explore how we can help you achieve your goals.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Information */}
            <div className="space-y-12">
              <div>
                <h2 className="text-3xl font-bold text-[#393939] mb-6">
                  Let's Start a Conversation
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Whether you're looking to implement AI solutions, need
                  strategic guidance, or want to learn more about our services,
                  we're here to help. Reach out to us and let's discuss your AI
                  journey.
                </p>
              </div>

              {/* Contact Methods */}
              <div className="space-y-6">
                {/* Email */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#393939]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#393939] mb-2">
                      Email Us
                    </h3>
                    <p className="text-gray-600">Drop us a line anytime</p>
                    <a
                      href="mailto:quantractai@gmail.com"
                      className="text-[#f1c40f] hover:text-yellow-400 font-medium"
                    >
                      quantractai@gmail.com
                    </a>
                  </div>
                </div>

                {/* LinkedIn */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#393939]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#393939] mb-2">
                      Connect on LinkedIn
                    </h3>
                    <p className="text-gray-600">Follow our latest updates</p>
                    <a
                      href="https://www.linkedin.com/company/quantract-ai"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#f1c40f] hover:text-yellow-400 font-medium"
                    >
                      linkedin.com/company/quantract-ai
                    </a>
                  </div>
                </div>

                {/* Response Time */}
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 bg-[#f1c40f] rounded-xl flex items-center justify-center">
                    <svg
                      className="w-6 h-6 text-[#393939]"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#393939] mb-2">
                      Response Time
                    </h3>
                    <p className="text-gray-600">We typically respond within</p>
                    <p className="text-[#f1c40f] font-medium">24 hours</p>
                  </div>
                </div>
              </div>

              {/* Call to Action */}
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h3 className="text-2xl font-bold text-[#393939] mb-4">
                  Ready for a Free Consultation?
                </h3>
                <p className="text-gray-600 mb-6">
                  Schedule a 30-minute consultation to discuss your AI needs and
                  discover how we can help transform your business.
                </p>
                <Link
                  href="https://linkedin.com/company/quantract-ai"
                  className="bg-[#393939] text-white px-6 py-3 rounded-full font-semibold hover:bg-gray-600 transition-colors inline-block"
                >
                  Schedule Consultation
                </Link>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-gray-50 p-8 rounded-3xl">
              <h3 className="text-2xl font-bold text-[#393939] mb-6">
                Send Us a Message
              </h3>

              <form ref={form} onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors"
                    placeholder="Your full name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors"
                    placeholder="your.email@company.com"
                  />
                </div>

                <div>
                  <label
                    htmlFor="company"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#393939] mb-2"
                  >
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-[#f1c40f] focus:border-transparent outline-none transition-colors resize-none"
                    placeholder="Tell us about your project, goals, or questions..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#f1c40f] text-[#393939] py-4 px-6 rounded-xl font-semibold text-lg hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105"
                >
                  Send Message
                </button>

                {status === "success" && (
                  <p className="text-green-600 text-center">
                    ✅ Message sent successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="text-red-600 text-center">
                    ❌ Failed to send message. Please try again.
                  </p>
                )}

                <p className="text-sm text-gray-600 text-center">
                  By submitting this form, you agree to our privacy policy and
                  terms of service.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-[#393939] mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Get quick answers to common questions about our AI services and
              implementation process.
            </p>
          </div>

          <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                question: "How long does AI implementation take?",
                answer:
                  "Implementation timelines vary based on project complexity, typically ranging from 4-12 weeks for most solutions.",
              },
              {
                question: "What industries do you work with?",
                answer:
                  "We work across various industries including healthcare, finance, manufacturing, retail, education, and real estate.",
              },
              {
                question: "Do you provide ongoing support?",
                answer:
                  "Yes, we offer comprehensive 24/7 support and maintenance to ensure optimal performance of your AI systems.",
              },
              {
                question: "What's included in the free consultation?",
                answer:
                  "A 30-minute session to assess your needs, discuss potential solutions, and provide strategic recommendations.",
              },
            ].map((faq, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl shadow-lg">
                <h3 className="text-lg font-bold text-[#393939] mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
