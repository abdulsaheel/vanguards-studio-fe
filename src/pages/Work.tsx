import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const Work = () => {
  const projects = [
    {
      title: "E-Commerce Platform Redesign",
      description: "A complete overhaul of an online retail platform focusing on user experience and conversion optimization.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2426",
      category: "Web Development"
    },
    {
      title: "Financial Dashboard",
      description: "An intuitive analytics dashboard for tracking business metrics and financial performance.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2340",
      category: "Application Development"
    },
    {
      title: "Lifestyle Brand Website",
      description: "A minimalist yet powerful website for a luxury lifestyle brand.",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&q=80&w=2264",
      category: "Web Design"
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
              Our Work
            </h1>
            <p className="text-xl text-accent-2 mb-12 max-w-2xl">
              A showcase of our finest digital craftsmanship. Each project represents our commitment to excellence in design and development.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="section bg-accent-1/20">
        <div className="container-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="group"
              >
                <div className="relative overflow-hidden rounded-2xl mb-4">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-[300px] object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <span className="text-sm text-accent-highlight mb-2 block">
                  {project.category}
                </span>
                <h3 className="text-2xl font-display mb-2">{project.title}</h3>
                <p className="text-accent-2 mb-4">{project.description}</p>
                <button className="inline-flex items-center text-accent-highlight hover:gap-2 transition-all">
                  View Project <ArrowRight size={16} className="ml-1" />
                </button>
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
              Have a project in mind?
            </h2>
            <p className="text-accent-1 mb-8 text-lg">
              Let's create something extraordinary together.
            </p>
            <a
              href="/contact"
              className="btn bg-background text-foreground hover:bg-accent-1"
            >
              Start a Conversation
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Work;