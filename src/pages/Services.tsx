import React from 'react';
import { motion } from 'framer-motion';
import { Code, Palette, Zap, Globe, Database, Bot } from 'lucide-react';

const Services = () => {
  const services = [
    {
      icon: <Palette size={32} />,
      title: "Digital Design",
      description: "We create beautiful, intuitive interfaces that engage users and drive conversions. Our design process focuses on both aesthetics and functionality.",
      features: ["UI/UX Design", "Brand Identity", "Design Systems", "Prototyping"]
    },
    {
      icon: <Code size={32} />,
      title: "Development",
      description: "From simple websites to complex web applications, we build scalable solutions using modern technologies and best practices.",
      features: ["Frontend Development", "Backend Systems", "API Integration", "Performance Optimization"]
    },
    {
      icon: <Globe size={32} />,
      title: "Web Solutions",
      description: "End-to-end web development services that help businesses establish a strong online presence and reach their target audience.",
      features: ["Custom Websites", "E-commerce Solutions", "CMS Development", "SEO Optimization"]
    },
    {
      icon: <Database size={32} />,
      title: "System Architecture",
      description: "We design and implement robust system architectures that scale with your business needs and handle complex operations efficiently.",
      features: ["Database Design", "Cloud Infrastructure", "System Integration", "Security Implementation"]
    },
    {
      icon: <Bot size={32} />,
      title: "Automation",
      description: "Smart automation solutions that streamline your workflow, reduce manual tasks, and improve operational efficiency.",
      features: ["Workflow Automation", "Custom Scripts", "Integration Services", "Process Optimization"]
    },
    {
      icon: <Zap size={32} />,
      title: "Performance",
      description: "We optimize your digital assets for peak performance, ensuring fast load times and smooth user experiences.",
      features: ["Speed Optimization", "Code Optimization", "Asset Management", "Monitoring Setup"]
    }
  ];

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
              Our Services
            </h1>
            <p className="text-xl text-accent-2 mb-12 max-w-2xl">
              We offer comprehensive digital solutions that help businesses thrive in the modern world. From design to development, we've got you covered.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section bg-accent-1/20">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-background p-8 rounded-2xl"
              >
                <div className="text-accent-highlight mb-4">{service.icon}</div>
                <h3 className="text-2xl font-display mb-4">{service.title}</h3>
                <p className="text-accent-2 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center gap-2">
                      <div className="w-1 h-1 bg-accent-highlight rounded-full" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section">
        <div className="container-xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-display mb-4">Our Process</h2>
            <p className="text-accent-2 max-w-2xl mx-auto">
              We follow a systematic approach to ensure every project is delivered with excellence.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { number: "01", title: "Discovery", description: "Understanding your needs" },
              { number: "02", title: "Strategy", description: "Planning the solution" },
              { number: "03", title: "Creation", description: "Building with precision" },
              { number: "04", title: "Launch", description: "Delivering excellence" }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="text-5xl font-display text-accent-highlight mb-4">
                  {step.number}
                </div>
                <h3 className="text-2xl font-display mb-2">{step.title}</h3>
                <p className="text-accent-2">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section bg-foreground text-background">
        <div className="container-xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-display mb-6">
              Ready to start your project?
            </h2>
            <p className="text-accent-1 mb-8 text-lg">
              Let's discuss how we can help bring your vision to life.
            </p>
            <a
              href="/contact"
              className="btn bg-background text-foreground hover:bg-accent-1"
            >
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;