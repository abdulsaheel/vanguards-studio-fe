import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
  };

  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h1 className="text-5xl md:text-7xl font-display leading-tight mb-8">
              Let's Create Together
            </h1>
            <p className="text-xl text-accent-2 mb-12 max-w-2xl">
              Have a project in mind? We'd love to hear about it. Drop us a message and let's start a conversation about your digital needs.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="section bg-accent-1/20">
        <div className="container-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-display mb-8">Get in Touch</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent-1 focus:outline-none focus:border-accent-highlight"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent-1 focus:outline-none focus:border-accent-highlight"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={6}
                    className="w-full px-4 py-3 rounded-lg bg-background border border-accent-1 focus:outline-none focus:border-accent-highlight"
                    required
                  ></textarea>
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-12"
            >
              <div>
                <h2 className="text-3xl font-display mb-8">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <Mail className="text-accent-highlight" />
                    <div>
                      <h3 className="font-medium mb-1">Email</h3>
                      <p className="text-accent-2">hello@vanguards.studio</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Phone className="text-accent-highlight" />
                    <div>
                      <h3 className="font-medium mb-1">Phone</h3>
                      <p className="text-accent-2">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="text-accent-highlight" />
                    <div>
                      <h3 className="font-medium mb-1">Location</h3>
                      <p className="text-accent-2">San Francisco, CA</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h2 className="text-3xl font-display mb-8">Office Hours</h2>
                <div className="space-y-2">
                  <p className="text-accent-2">Monday - Friday: 9:00 AM - 6:00 PM PST</p>
                  <p className="text-accent-2">Saturday - Sunday: Closed</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;